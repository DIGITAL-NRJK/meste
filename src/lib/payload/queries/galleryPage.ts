import { unstable_cache } from 'next/cache'

import type { Locale } from '@/lib/i18n/config'
import { getGalleryBaseline } from '@/lib/pages/gallery/content'
import type { GalleryContent, GalleryItem } from '@/lib/pages/gallery/types'
import { getPayloadClient } from '@/lib/payload/client'
import { mergePageMeta } from '@/lib/payload/queries/pageMeta'
import { readString, resolveImage } from '@/lib/payload/records'

const GALLERY_LIMIT = 120

/**
 * Every rendered image comes from a published `gallery` entry.
 *
 * An entry whose upload is unresolved, whose file has no URL, or whose alt text
 * is missing is dropped rather than rendered: an image without an accessible
 * description is treated as missing, so the page shows one fewer photograph
 * instead of one inaccessible one.
 */
async function queryGalleryContent(locale: Locale): Promise<GalleryContent> {
  const baseline = getGalleryBaseline(locale)

  try {
    const payload = await getPayloadClient()

    const [entries, page] = await Promise.all([
      payload.find({
        collection: 'gallery',
        depth: 1,
        draft: false,
        fallbackLocale: false,
        limit: GALLERY_LIMIT,
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
        where: { pageKind: { equals: 'gallery' } },
      }),
    ])

    const items: GalleryItem[] = entries.docs.flatMap((doc) => {
      const image = resolveImage(doc.image)
      const alt = readString(doc.alt)
      const category = readString(doc.category)

      if (!image || !alt || !category) {
        return []
      }

      return [
        {
          alt,
          caption: readString(doc.caption),
          category,
          id: String(doc.id),
          image,
        },
      ]
    })

    return {
      ...baseline,
      items,
      meta: mergePageMeta(baseline.meta, page.docs[0]),
    }
  } catch (error) {
    console.error('[gallery] falling back to the editorial baseline', error)
    return baseline
  }
}

export function getGalleryContent(locale: Locale): Promise<GalleryContent> {
  return unstable_cache(() => queryGalleryContent(locale), ['gallery-content', locale], {
    tags: ['collection:pages', 'collection:gallery', 'collection:media'],
  })()
}
