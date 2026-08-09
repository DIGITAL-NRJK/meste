import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { mapPage, type PublicPage } from '@/lib/payload/mappers'
import { publishedLocaleWhere } from '@/lib/payload/publication'

async function queryPublishedPage(locale: Locale, slug: string): Promise<PublicPage | null> {
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
    where: publishedLocaleWhere(locale, { slug: { equals: slug } }),
  })

  const doc = result.docs[0]
  return doc ? mapPage(doc) : null
}

export function getPublishedPage(locale: Locale, slug: string): Promise<PublicPage | null> {
  return unstable_cache(() => queryPublishedPage(locale, slug), ['page', locale, slug], {
    tags: [`collection:pages`, `page:${locale}:${slug}`],
  })()
}
