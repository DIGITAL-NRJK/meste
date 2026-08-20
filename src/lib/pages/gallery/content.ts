import type { Locale } from '@/lib/i18n/config'
import { galleryCopyEN } from '@/lib/pages/gallery/copy/en'
import { galleryCopyFR } from '@/lib/pages/gallery/copy/fr'
import type { GalleryContent } from '@/lib/pages/gallery/types'

const copy: Record<Locale, GalleryContent> = {
  en: galleryCopyEN,
  fr: galleryCopyFR,
}

/**
 * Approved editorial baseline for the gallery. The item list is empty by
 * construction: every image on this page comes from published `gallery`
 * entries, and none exists yet.
 */
export function getGalleryBaseline(locale: Locale): GalleryContent {
  return copy[locale]
}
