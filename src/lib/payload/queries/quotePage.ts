import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getQuoteCopy } from '@/lib/pages/quote/content'
import type { QuoteOption, QuotePageData } from '@/lib/pages/quote/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readPath, readString } from '@/lib/payload/records'

const LIST_LIMIT = 20

/**
 * Returns null when the page must not be published.
 *
 * The consent statement and its version are legal wording MESTE supplies; the
 * project never drafts them. Until both exist in `ContactSettings`, this
 * returns null and the route answers with the branded 404 — a form that
 * collects personal data without its notice is worse than no form.
 *
 * An unreachable database also returns null. Every other page degrades to its
 * baseline, but a form cannot: it would accept a submission it has nowhere to
 * put.
 */
async function queryQuotePage(locale: Locale): Promise<QuotePageData | null> {
  const content = getQuoteCopy(locale)

  try {
    const payload = await getPayloadClient()
    const listOptions = {
      depth: 0,
      draft: false,
      fallbackLocale: false as const,
      limit: LIST_LIMIT,
      locale,
      overrideAccess: false,
      pagination: false as const,
      sort: 'sortOrder',
    }

    const [contact, services, formats, page] = await Promise.all([
      payload.findGlobal({
        slug: 'contact-settings',
        depth: 0,
        draft: false,
        fallbackLocale: false,
        locale,
        overrideAccess: false,
      }),
      payload.find({ ...listOptions, collection: 'services' }),
      payload.find({ ...listOptions, collection: 'reception-formats' }),
      payload.find({
        collection: 'pages',
        depth: 1,
        draft: false,
        fallbackLocale: false,
        limit: 1,
        locale,
        overrideAccess: false,
        pagination: false,
        where: { pageKind: { equals: 'contact' } },
      }),
    ])

    const statement = readString(readPath(contact, 'quoteConsent', 'statement'))
    const version = readString(readPath(contact, 'quoteConsent', 'version'))

    if (!statement || !version) {
      return null
    }

    const toOptions = (
      docs: { slug?: unknown; title?: unknown; name?: unknown }[],
    ): QuoteOption[] =>
      docs.flatMap((doc) => {
        const label = readString(doc.title) ?? readString(doc.name)
        const value = readString(doc.slug)

        return label && value ? [{ label, value }] : []
      })

    return {
      consent: { statement, version },
      content: { ...content, meta: mergePageMeta(content.meta, page.docs[0]) },
      formats: toOptions(formats.docs),
      services: toOptions(services.docs),
    }
  } catch (error) {
    console.error('[quote] refusing to publish the form', error)
    return null
  }
}

export function getQuotePage(locale: Locale): Promise<QuotePageData | null> {
  return unstable_cache(() => queryQuotePage(locale), ['quote-page', locale], {
    tags: [
      'collection:pages',
      'collection:services',
      'collection:reception-formats',
      'global:contact-settings',
    ],
  })()
}
