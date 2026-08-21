import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getAboutBaseline } from '@/lib/pages/about/content'
import type { AboutContent } from '@/lib/pages/about/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import {
  mergeChapters,
  mergeClosing,
  mergeIntro,
  mergePullQuote,
} from '@/lib/payload/queries/pageContent'
import { readPath, readString, withImage } from '@/lib/payload/records'

/**
 * The story page merges the published `pages` entry over its approved baseline,
 * field by field.
 *
 * Nothing here is required. An editor who fills in only the lede changes only
 * the lede; the six chapters, the held statement and the closing keep the
 * approved wording. An unreachable database keeps all of it. That is the whole
 * contract: Payload drives the page, and the code is what the page falls back
 * to rather than what it competes with.
 *
 * The read passes `overrideAccess: false`, so collection access control adds
 * the published and locale-readiness constraints on its own. Restating them in
 * a caller-supplied `where` is rejected by Payload's query-path validation.
 */
async function queryAboutContent(locale: Locale): Promise<AboutContent> {
  const baseline = getAboutBaseline(locale)

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
      where: { pageKind: { equals: 'about' } },
    })

    const doc = result.docs[0]

    if (!doc) {
      return baseline
    }

    const editorial = readPath(doc, 'editorial')
    const story = readPath(doc, 'aboutStory')
    const intro = mergeIntro(baseline.intro, readPath(editorial, 'intro'))

    return {
      chapters: {
        eyebrow: readString(readPath(story, 'eyebrow')) ?? baseline.chapters.eyebrow,
        heading: readString(readPath(story, 'heading')) ?? baseline.chapters.heading,
        headingAccent:
          readString(readPath(story, 'headingAccent')) ?? baseline.chapters.headingAccent,
        items: mergeChapters(baseline.chapters.items, readPath(story, 'chapters')),
      },
      closing: mergeClosing(baseline.closing, readPath(editorial, 'closing')),
      intro: { ...intro, media: withImage(baseline.intro.media, readPath(story, 'introImage')) },
      meta: mergePageMeta(baseline.meta, doc),
      pullQuote: mergePullQuote(baseline.pullQuote, readPath(story, 'pullQuote')),
      skipToContent: baseline.skipToContent,
    }
  } catch (error) {
    console.error('[about] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getAboutContent(locale: Locale): Promise<AboutContent> {
  return unstable_cache(() => queryAboutContent(locale), ['about-content', locale], {
    tags: ['collection:pages', 'page:about'],
  })()
}
