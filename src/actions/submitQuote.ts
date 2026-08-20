'use server'

import { isLocale, type Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { readPath, readString } from '@/lib/payload/records'
import { isHoneypotFilled, isThrottled, judgeTiming } from '@/lib/quote/guards'
import { collectErrors, quoteSchema, type QuoteState, type QuoteErrors } from '@/lib/quote/schema'
import { routePath } from '@/lib/routes'

/** Values echoed back on failure so a rejected form keeps what was typed. */
const echoedFields = [
  'allergens',
  'budget',
  'company',
  'dietaryRequirements',
  'email',
  'eventDate',
  'eventType',
  'guestCount',
  'location',
  'menuPreferences',
  'name',
  'notes',
  'phone',
  'receptionFormat',
] as const

function echo(formData: FormData): Record<string, string> {
  const values: Record<string, string> = {}

  for (const field of echoedFields) {
    const value = formData.get(field)

    if (typeof value === 'string' && value !== '') {
      values[field] = value
    }
  }

  return values
}

function failure(errors: QuoteErrors, formData: FormData): QuoteState {
  return { errors, status: 'error', values: echo(formData) }
}

/**
 * Resolves the slugs a form sends into the document ids the relationships need.
 * A slug that matches nothing is dropped rather than failing the submission:
 * losing one optional preference is better than losing the whole enquiry.
 */
async function resolveIds(
  payload: Awaited<ReturnType<typeof getPayloadClient>>,
  collection: 'reception-formats' | 'services',
  slugs: string[],
): Promise<number[]> {
  if (slugs.length === 0) {
    return []
  }

  const result = await payload.find({
    collection,
    depth: 0,
    limit: slugs.length,
    overrideAccess: true,
    pagination: false,
    where: { slug: { in: slugs } },
  })

  return result.docs.flatMap((doc) => (typeof doc.id === 'number' ? [doc.id] : []))
}

/**
 * Receives the quote request.
 *
 * Every check runs here, on the server: the browser's own validation is a
 * convenience for the visitor and is never trusted. The consent version stored
 * with the lead is read from the CMS at submission time, so a record always
 * says which wording was actually accepted.
 */
export async function submitQuote(_previous: QuoteState, formData: FormData): Promise<QuoteState> {
  const now = Date.now()
  const rawLocale = formData.get('locale')
  const locale: Locale = typeof rawLocale === 'string' && isLocale(rawLocale) ? rawLocale : 'en'

  const timing = judgeTiming(formData.get('renderedAt'), now)

  // Silently accepted, never stored. Telling a bot it was caught teaches it.
  if (isHoneypotFilled(formData.get('company_position')) || timing === 'tooFast') {
    return { errors: {}, status: 'success', values: {} }
  }

  // A page left open all day is a person, not a bot: say so plainly.
  if (timing === 'stale') {
    return failure({ form: 'stale' }, formData)
  }

  if (isThrottled(now)) {
    return failure({ form: 'throttled' }, formData)
  }

  const parsed = quoteSchema.safeParse({
    allergens: formData.get('allergens'),
    budget: formData.get('budget'),
    company: formData.get('company'),
    consent: formData.get('consent'),
    dietaryRequirements: formData.get('dietaryRequirements'),
    email: formData.get('email'),
    eventDate: formData.get('eventDate'),
    eventType: formData.get('eventType'),
    guestCount: formData.get('guestCount'),
    location: formData.get('location'),
    menuPreferences: formData.get('menuPreferences'),
    name: formData.get('name'),
    notes: formData.get('notes'),
    phone: formData.get('phone'),
    receptionFormat: formData.get('receptionFormat'),
    services: formData.getAll('services').filter((value) => typeof value === 'string'),
  })

  if (!parsed.success) {
    return failure(collectErrors(parsed.error), formData)
  }

  const input = parsed.data

  try {
    const payload = await getPayloadClient()

    const contact = await payload.findGlobal({
      slug: 'contact-settings',
      depth: 0,
      draft: false,
      fallbackLocale: false,
      locale,
      overrideAccess: true,
    })

    const consentVersion = readString(readPath(contact, 'quoteConsent', 'version'))

    // The page is only published once this exists, so reaching here without it
    // means the wording changed mid-session. Refuse rather than store a lead
    // whose consent cannot be traced to a version.
    if (!consentVersion) {
      return failure({ form: 'unavailable' }, formData)
    }

    const [formatIds, serviceIds] = await Promise.all([
      resolveIds(
        payload,
        'reception-formats',
        input.receptionFormat ? [input.receptionFormat] : [],
      ),
      resolveIds(payload, 'services', input.services ?? []),
    ])

    await payload.create({
      collection: 'leads',
      data: {
        allergens: input.allergens,
        budget: input.budget,
        company: input.company,
        consent: {
          accepted: true,
          acceptedAt: new Date(now).toISOString(),
          version: consentVersion,
        },
        delivery: { status: 'not-attempted' },
        dietaryRequirements: input.dietaryRequirements,
        email: input.email,
        eventDate: input.eventDate,
        eventType: input.eventType,
        guestCount: input.guestCount,
        locale,
        location: input.location,
        menuPreferences: input.menuPreferences,
        name: input.name,
        notes: input.notes,
        phone: input.phone,
        receptionFormat: formatIds[0],
        services: serviceIds,
        sourcePage: routePath('quote', locale),
        status: 'new',
      },
      overrideAccess: true,
    })

    return { errors: {}, status: 'success', values: {} }
  } catch (error) {
    console.error('[quote] could not store the enquiry', error)
    return failure({ form: 'unavailable' }, formData)
  }
}
