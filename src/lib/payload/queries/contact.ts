import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getContactBaseline } from '@/lib/pages/contact/content'
import type { ContactContent } from '@/lib/pages/contact/types'
import { getPayloadClient } from '@/lib/payload/client'
import { readPath, readString } from '@/lib/payload/records'

/**
 * Framing copy for the contact page. The contact details themselves are not
 * read here: they arrive with the site chrome from `ContactSettings`, so a
 * single query owns them and no page can publish a second, divergent copy.
 */
async function queryContactContent(locale: Locale): Promise<ContactContent> {
  const baseline = getContactBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const result = await payload.find({
      collection: 'pages',
      depth: 1,
      draft: false,
      fallbackLocale: false,
      limit: 1,
      locale,
      overrideAccess: false,
      pagination: false,
      where: { pageKind: { equals: 'contact' } },
    })

    const doc = result.docs[0]

    if (!doc) {
      return baseline
    }

    const title = readString(readPath(doc, 'seo', 'title')) ?? readString(doc.title)
    const description = readString(readPath(doc, 'seo', 'description'))

    return {
      ...baseline,
      meta: {
        description: description ?? baseline.meta.description,
        title: title ?? baseline.meta.title,
      },
    }
  } catch (error) {
    console.error('[contact] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getContactContent(locale: Locale): Promise<ContactContent> {
  return unstable_cache(() => queryContactContent(locale), ['contact-content', locale], {
    tags: ['collection:pages', 'page:contact'],
  })()
}
