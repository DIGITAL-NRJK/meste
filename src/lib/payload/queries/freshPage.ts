import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getFreshBaseline } from '@/lib/pages/fresh/content'
import type { FreshContent } from '@/lib/pages/fresh/types'
import { getPayloadClient } from '@/lib/payload/client'
import {
  mergeClosing,
  mergeIntro,
  mergeList,
  mergeStrings,
  readTextList,
} from '@/lib/payload/queries/pageContent'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readPath, readString, withImage } from '@/lib/payload/records'

const LIST_LIMIT = 12

/**
 * Only the product names are read.
 *
 * `ingredients`, `availableSizes`, `nutritionPlaceholder` and `legalPlaceholder`
 * exist in the schema and stay off the page: none of them is verified, and the
 * brief forbids publishing an unverified ingredient or nutritional claim — and
 * the word organic under any circumstances.
 */
async function queryFreshContent(locale: Locale): Promise<FreshContent> {
  const baseline = getFreshBaseline(locale)

  try {
    const payload = await getPayloadClient()

    const [products, page] = await Promise.all([
      payload.find({
        collection: 'fresh-products',
        depth: 1,
        draft: false,
        fallbackLocale: false,
        limit: LIST_LIMIT,
        locale,
        overrideAccess: false,
        pagination: false,
        sort: 'sortOrder',
      }),
      payload.find({
        collection: 'pages',
        depth: 1,
        draft: false,
        fallbackLocale: false,
        limit: 1,
        locale,
        overrideAccess: false,
        pagination: false,
        where: { pageKind: { equals: 'fresh' } },
      }),
    ])

    const names = products.docs.flatMap((doc) => {
      const name = readString(doc.name)
      return name ? [name] : []
    })

    const firstCan = products.docs.find((doc) => doc.canImage)?.canImage

    const doc = page.docs[0]
    const editorial = readPath(doc, 'editorial')
    const content = readPath(doc, 'freshContent')
    const frame = ['eyebrow', 'heading', 'headingAccent'] as const
    const intro = mergeIntro(baseline.intro, readPath(editorial, 'intro'))

    return {
      ...baseline,
      closing: mergeClosing(baseline.closing, readPath(editorial, 'closing')),
      culinary: {
        ...mergeStrings(baseline.culinary, readPath(content, 'culinary'), [
          ...frame,
          'caveat',
          'intro',
        ]),
        items: mergeList(
          baseline.culinary.items,
          readPath(content, 'culinary', 'items'),
          (entry) => {
            const flavour = readString(readPath(entry, 'flavour'))
            const uses = readTextList(readPath(entry, 'uses'))

            return flavour && uses.length > 0 ? { flavour, uses } : null
          },
        ),
      },
      intro: { ...intro, media: withImage(baseline.intro.media, firstCan) },
      meta: mergePageMeta(baseline.meta, doc),
      range: {
        ...mergeStrings(baseline.range, readPath(content, 'range'), [
          ...frame,
          'note',
          'signature',
        ]),
        products: names.length > 0 ? names : baseline.range.products,
      },
    }
  } catch (error) {
    console.error('[fresh] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getFreshContent(locale: Locale): Promise<FreshContent> {
  return unstable_cache(() => queryFreshContent(locale), ['fresh-content', locale], {
    tags: ['collection:pages', 'collection:fresh-products'],
  })()
}
