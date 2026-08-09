import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { mapService, type PublicService } from '@/lib/payload/mappers'
import { publishedLocaleWhere } from '@/lib/payload/publication'

async function queryPublishedService(locale: Locale, slug: string): Promise<PublicService | null> {
  const payload = await getPayloadClient()
  const result = await payload.find({
    collection: 'services',
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
  return doc ? mapService(doc) : null
}

export function getPublishedService(locale: Locale, slug: string): Promise<PublicService | null> {
  return unstable_cache(() => queryPublishedService(locale, slug), ['service', locale, slug], {
    tags: ['collection:services', `service:${locale}:${slug}`],
  })()
}
