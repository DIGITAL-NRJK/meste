import { unstable_cache } from 'next/cache'

import { getHomeBaseline } from '@/lib/home/content'
import type { DishContent, HomeContent, QuoteContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'
import { getPayloadClient } from '@/lib/payload/client'
import { isRecord, readArray, readPath, readString, withImage } from '@/lib/payload/records'
import { resolveRoute } from '@/lib/routes'

const LIST_LIMIT = 12

/**
 * Published CMS content always wins over the approved editorial baseline, and
 * anything the CMS cannot supply yet keeps the baseline wording. A database
 * that is unreachable degrades to the baseline rather than failing the page.
 *
 * These reads pass `overrideAccess: false`, so collection access control adds
 * `_status: published` and the locale-readiness constraint by itself. Restating
 * that filter in a caller-supplied `where` is rejected by Payload's query-path
 * validation, so the queries below only carry their own criteria.
 */
async function queryHomeContent(locale: Locale): Promise<HomeContent> {
  const baseline = getHomeBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const listOptions = {
      depth: 1,
      draft: false,
      fallbackLocale: false as const,
      limit: LIST_LIMIT,
      locale,
      overrideAccess: false,
      pagination: false as const,
      sort: 'sortOrder',
    }

    const [services, formats, freshProducts, testimonials, homeGlobal] = await Promise.all([
      payload.find({ ...listOptions, collection: 'services' }),
      payload.find({ ...listOptions, collection: 'reception-formats' }),
      payload.find({ ...listOptions, collection: 'fresh-products' }),
      // Access control also enforces permissionToDisplay on testimonials.
      payload.find({ ...listOptions, collection: 'testimonials' }),
      payload.findGlobal({
        slug: 'home-page',
        depth: 2,
        draft: false,
        fallbackLocale: false,
        locale,
        overrideAccess: false,
      }),
    ])

    const worldItems = services.docs.flatMap((doc) => {
      const title = readString(doc.title)
      const detail = readString(doc.positioning)

      return title && detail ? [{ detail, route: resolveRoute('services', 'services'), title }] : []
    })

    const formatItems = formats.docs.flatMap((doc, index) => {
      const name = readString(doc.name)
      const description = readString(doc.description)

      if (!name || !description) {
        return []
      }

      const fallback = baseline.formats.items[index] ?? baseline.formats.items.at(-1)

      return [
        {
          description,
          media: fallback?.media ? withImage(fallback.media, null) : null,
          name,
        },
      ]
    })

    const freshNames = freshProducts.docs.flatMap((doc) => {
      const name = readString(doc.name)
      return name ? [name] : []
    })

    const quotes: QuoteContent[] = testimonials.docs.flatMap((doc) => {
      const quote = readString(doc.quote)
      const attribution = readString(doc.name)

      if (!quote || !attribution) {
        return []
      }

      const role = readString(doc.role)
      const company = readString(doc.company)

      return [
        {
          attribution,
          context: [role, company].filter(Boolean).join(' · '),
          quote,
        },
      ]
    })

    const dishes: DishContent[] = readArray(homeGlobal.featuredDishes).flatMap((entry, index) => {
      if (!isRecord(entry)) {
        return []
      }

      const doc = entry
      const name = readString(doc.name)
      const image = withImage(
        {
          caption: baseline.dishes.intro,
          image: null,
          slot: `${baseline.dishes.eyebrow} ${index + 1}`,
        },
        doc.featuredImage,
      )

      // A dish without approved photography would leave a hole in the rail.
      if (!name || !image.image) {
        return []
      }

      const composition = readArray(doc.composition)
        .flatMap((part) => (isRecord(part) ? [readString(part.component)] : []))
        .filter((part): part is string => Boolean(part))
        .join(' · ')

      return [
        {
          composition,
          level: readString(doc.culinaryLevel)?.replaceAll('-', ' ') ?? '',
          media: image,
          name,
        },
      ]
    })

    const seoTitle = readString(readPath(homeGlobal, 'seo', 'title'))
    const seoDescription = readString(readPath(homeGlobal, 'seo', 'description'))

    return {
      ...baseline,
      dishes: { ...baseline.dishes, items: dishes },
      formats:
        formatItems.length > 0 ? { ...baseline.formats, items: formatItems } : baseline.formats,
      fresh: freshNames.length > 0 ? { ...baseline.fresh, products: freshNames } : baseline.fresh,
      meta: {
        description: seoDescription ?? baseline.meta.description,
        title: seoTitle ?? baseline.meta.title,
      },
      references: { ...baseline.references, quotes },
      worlds: worldItems.length > 0 ? { ...baseline.worlds, items: worldItems } : baseline.worlds,
    }
  } catch (error) {
    console.error('[home] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getHomeContent(locale: Locale): Promise<HomeContent> {
  return unstable_cache(() => queryHomeContent(locale), ['home-content', locale], {
    tags: [
      'global:home-page',
      'collection:services',
      'collection:reception-formats',
      'collection:fresh-products',
      'collection:testimonials',
      'collection:menu-items',
    ],
  })()
}
