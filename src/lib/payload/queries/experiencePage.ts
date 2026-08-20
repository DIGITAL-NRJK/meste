import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getExperienceBaseline } from '@/lib/pages/experience/content'
import type { ExperienceContent } from '@/lib/pages/experience/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'

/**
 * Metadata only.
 *
 * The `events` collection is deliberately not queried. The concept is not a
 * scheduled event, and rendering an edition here — even a published one —
 * would turn a concept in development into an announcement.
 */
async function queryExperienceContent(locale: Locale): Promise<ExperienceContent> {
  const baseline = getExperienceBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const page = await payload.find({
      collection: 'pages',
      depth: 1,
      draft: false,
      fallbackLocale: false,
      limit: 1,
      locale,
      overrideAccess: false,
      pagination: false,
      where: { pageKind: { equals: 'experience' } },
    })

    return {
      ...baseline,
      meta: mergePageMeta(baseline.meta, page.docs[0]),
    }
  } catch (error) {
    console.error('[experience] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getExperienceContent(locale: Locale): Promise<ExperienceContent> {
  return unstable_cache(() => queryExperienceContent(locale), ['experience-content', locale], {
    tags: ['collection:pages'],
  })()
}
