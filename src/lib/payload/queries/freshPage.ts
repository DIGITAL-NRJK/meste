import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getFreshBaseline } from '@/lib/pages/fresh/content'
import type { FreshContent } from '@/lib/pages/fresh/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readString, withImage } from '@/lib/payload/records'

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

    return {
      ...baseline,
      intro: {
        ...baseline.intro,
        media: withImage(baseline.intro.media, firstCan),
      },
      meta: mergePageMeta(baseline.meta, page.docs[0]),
      range: names.length > 0 ? { ...baseline.range, products: names } : baseline.range,
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
