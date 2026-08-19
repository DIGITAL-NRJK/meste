import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { mapService, type PublicService } from '@/lib/payload/mappers'

/**
 * Publication filtering is enforced by collection access control, which adds
 * `_status: published` and the locale-readiness constraint for anonymous
 * requests. Queries must not restate it: `localeReadiness.<locale>` is rejected
 * by Payload's query-path validation when it comes from a caller-supplied
 * `where`, and duplicating the rule would let the two drift apart.
 */
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
    where: { slug: { equals: slug } },
  })

  const doc = result.docs[0]
  return doc ? mapService(doc) : null
}

export function getPublishedService(locale: Locale, slug: string): Promise<PublicService | null> {
  return unstable_cache(() => queryPublishedService(locale, slug), ['service', locale, slug], {
    tags: ['collection:services', `service:${locale}:${slug}`],
  })()
}
