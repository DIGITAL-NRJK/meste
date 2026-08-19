import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getMenusBaseline } from '@/lib/pages/menus/content'
import type { MenuFamily, MenusContent, SignatureDish } from '@/lib/pages/menus/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { isRecord, readString } from '@/lib/payload/records'

const CATEGORY_LIMIT = 24
const ITEM_LIMIT = 300

/** A category relation arrives as an id or, at depth 1, as the document. */
function categoryId(value: unknown): number | string | null {
  if (typeof value === 'number' || typeof value === 'string') {
    return value
  }

  if (isRecord(value) && (typeof value.id === 'number' || typeof value.id === 'string')) {
    return value.id
  }

  return null
}

/**
 * Published menu documents replace the baseline inventories.
 *
 * Nothing beyond name and composition is read. `dietary`, `spiceLevel` and any
 * allergen information stay out of the public page until the brief's condition
 * is met — an editor entering verified data — because the site must never infer
 * them. Prices do not exist anywhere in this schema.
 */
async function queryMenusContent(locale: Locale): Promise<MenusContent> {
  const baseline = getMenusBaseline(locale)

  try {
    const payload = await getPayloadClient()
    const listOptions = {
      depth: 1,
      draft: false,
      fallbackLocale: false as const,
      locale,
      overrideAccess: false,
      pagination: false as const,
      sort: 'sortOrder',
    }

    const [categories, items, signatureMenus, page] = await Promise.all([
      payload.find({ ...listOptions, collection: 'menu-categories', limit: CATEGORY_LIMIT }),
      payload.find({ ...listOptions, collection: 'menu-items', limit: ITEM_LIMIT }),
      payload.find({ ...listOptions, collection: 'signature-menus', limit: CATEGORY_LIMIT }),
      payload.find({
        collection: 'pages',
        depth: 1,
        draft: false,
        fallbackLocale: false,
        limit: 1,
        locale,
        overrideAccess: false,
        pagination: false,
        where: { pageKind: { equals: 'menus' } },
      }),
    ])

    const dishesByCategory = new Map<number | string, string[]>()

    for (const item of items.docs) {
      const name = readString(item.name)
      const key = categoryId(item.category)

      if (!name || key === null) {
        continue
      }

      const bucket = dishesByCategory.get(key)
      if (bucket) {
        bucket.push(name)
      } else {
        dishesByCategory.set(key, [name])
      }
    }

    // A family with no published dish is not rendered: an empty heading would
    // read as a gap rather than as a section still being filled.
    const families: MenuFamily[] = categories.docs.flatMap((doc) => {
      const name = readString(doc.name)
      const dishes = dishesByCategory.get(doc.id) ?? []

      return name && dishes.length > 0 ? [{ name, note: readString(doc.description), dishes }] : []
    })

    const featured: SignatureDish[] = items.docs.flatMap((item) => {
      const name = readString(item.name)
      const composition = readString(item.composition)

      return item.featured === true && name && composition ? [{ composition, name }] : []
    })

    const menuTitles = signatureMenus.docs.flatMap((doc) => {
      const title = readString(doc.title)
      return title ? [title] : []
    })

    return {
      ...baseline,
      families: families.length > 0 ? { ...baseline.families, items: families } : baseline.families,
      meta: mergePageMeta(baseline.meta, page.docs[0]),
      signatureDishes:
        featured.length > 0
          ? { ...baseline.signatureDishes, items: featured }
          : baseline.signatureDishes,
      signatureMenus:
        menuTitles.length > 0
          ? { ...baseline.signatureMenus, items: menuTitles }
          : baseline.signatureMenus,
    }
  } catch (error) {
    console.error('[menus] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getMenusContent(locale: Locale): Promise<MenusContent> {
  return unstable_cache(() => queryMenusContent(locale), ['menus-content', locale], {
    tags: [
      'collection:pages',
      'collection:menu-categories',
      'collection:menu-items',
      'collection:signature-menus',
    ],
  })()
}
