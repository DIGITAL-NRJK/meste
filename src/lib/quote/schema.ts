import { z } from 'zod'

/**
 * Server-side validation for the quote request.
 *
 * Messages are error *codes*, not sentences: the same schema answers both
 * locales, and the page turns each code into wording the visitor reads. That
 * keeps validation out of the translation files and translation out of the
 * validation.
 */

const trimmed = z.string().trim()

const optionalText = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  trimmed.max(2000, 'tooLong').optional(),
)

const optionalShortText = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  trimmed.max(200, 'tooLong').optional(),
)

/** An empty date input arrives as ''. Only a real date is validated. */
const optionalDate = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  trimmed
    .regex(/^\d{4}-\d{2}-\d{2}$/, 'date')
    .refine((value) => !Number.isNaN(Date.parse(value)), 'date')
    .optional(),
)

const optionalGuestCount = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.coerce.number('number').int('number').min(1, 'min').max(100000, 'max').optional(),
)

export const quoteSchema = z.object({
  allergens: optionalText,
  budget: optionalShortText,
  company: optionalShortText,
  /** Acceptance is mandatory; the wording and its version come from the CMS. */
  consent: z.literal('on', 'consent'),
  dietaryRequirements: optionalText,
  email: trimmed.min(1, 'required').max(200, 'tooLong').pipe(z.email('email')),
  eventDate: optionalDate,
  eventType: optionalShortText,
  guestCount: optionalGuestCount,
  location: optionalShortText,
  menuPreferences: optionalText,
  name: trimmed.min(2, 'required').max(120, 'tooLong'),
  notes: optionalText,
  phone: trimmed.min(6, 'required').max(40, 'tooLong'),
  receptionFormat: optionalShortText,
  services: z.array(trimmed.max(200)).max(20).optional(),
})

export type QuoteInput = z.infer<typeof quoteSchema>

export const quoteFieldNames = [
  'name',
  'email',
  'phone',
  'eventType',
  'eventDate',
  'location',
  'guestCount',
  'company',
  'receptionFormat',
  'services',
  'menuPreferences',
  'dietaryRequirements',
  'allergens',
  'budget',
  'notes',
  'consent',
] as const

export type QuoteFieldName = (typeof quoteFieldNames)[number]

/** `form` carries failures that belong to the submission, not to one field. */
export type QuoteErrors = Partial<Record<QuoteFieldName | 'form', string>>

export type QuoteState = {
  errors: QuoteErrors
  status: 'error' | 'idle' | 'success'
  /** Echoed back so a rejected submission never empties the visitor's work. */
  values: Record<string, string>
}

export const initialQuoteState: QuoteState = { errors: {}, status: 'idle', values: {} }

export function collectErrors(error: z.ZodError): QuoteErrors {
  const errors: QuoteErrors = {}

  for (const issue of error.issues) {
    const field = issue.path[0]

    if (typeof field === 'string' && !(field in errors)) {
      errors[field as QuoteFieldName] = issue.message
    }
  }

  return errors
}
