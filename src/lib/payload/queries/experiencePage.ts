import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getExperienceBaseline } from '@/lib/pages/experience/content'
import type { ExperienceContent } from '@/lib/pages/experience/types'
import { getPayloadClient } from '@/lib/payload/client'
import {
  mergeClosing,
  mergeIntro,
  mergeList,
  mergeStrings,
  readTextList,
} from '@/lib/payload/queries/pageContent'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readPath, readString } from '@/lib/payload/records'

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

    const doc = page.docs[0]
    const editorial = readPath(doc, 'editorial')
    const content = readPath(doc, 'experienceContent')

    return {
      ...baseline,
      closing: mergeClosing(baseline.closing, readPath(editorial, 'closing')),
      disclaimer: readString(readPath(content, 'disclaimer')) ?? baseline.disclaimer,
      intro: mergeIntro(baseline.intro, readPath(editorial, 'intro')),
      meta: mergePageMeta(baseline.meta, doc),
      pillars: {
        heading: readString(readPath(content, 'pillars', 'heading')) ?? baseline.pillars.heading,
        items: mergeList(baseline.pillars.items, readPath(content, 'pillars', 'items'), (entry) => {
          const title = readString(readPath(entry, 'title'))
          const detail = readString(readPath(entry, 'detail'))

          return title && detail ? { detail, title } : null
        }),
      },
      universe: {
        ...mergeStrings(baseline.universe, readPath(content, 'universe'), [
          'eyebrow',
          'heading',
          'headingAccent',
          'intro',
        ]),
        items: (() => {
          const lines = readTextList(readPath(content, 'universe', 'items'))
          return lines.length > 0 ? lines : baseline.universe.items
        })(),
      },
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
