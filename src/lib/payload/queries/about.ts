import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getAboutBaseline } from '@/lib/pages/about/content'
import type { AboutContent } from '@/lib/pages/about/types'
import { getPayloadClient } from '@/lib/payload/client'
import { readPath, readString } from '@/lib/payload/records'

/**
 * The story page merges the published `pages` entry over its approved baseline.
 *
 * Only the metadata is merged today: the narrative itself lives in `layout`
 * blocks, which need the controlled block renderer to become presentation. The
 * baseline therefore stays authoritative for the body copy, exactly as it does
 * on the homepage, and an unreachable database degrades to it rather than
 * failing the page.
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
    console.error('[about] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getAboutContent(locale: Locale): Promise<AboutContent> {
  return unstable_cache(() => queryAboutContent(locale), ['about-content', locale], {
    tags: ['collection:pages', 'page:about'],
  })()
}
