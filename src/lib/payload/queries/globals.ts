import { unstable_cache } from 'next/cache'

import type { GlobalSlug } from 'payload'

import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'

export function getPublishedGlobal<TSlug extends GlobalSlug>(slug: TSlug, locale: Locale) {
  return unstable_cache(
    async () => {
      const payload = await getPayloadClient()
      return payload.findGlobal({
        slug,
        depth: 1,
        draft: false,
        fallbackLocale: false,
        locale,
        overrideAccess: false,
      })
    },
    ['global', slug, locale],
    { tags: [`global:${slug}`, `global:${slug}:${locale}`] },
  )()
}
