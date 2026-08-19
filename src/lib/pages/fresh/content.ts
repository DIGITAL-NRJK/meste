import type { Locale } from '@/lib/i18n/config'
import { freshCopyEN } from '@/lib/pages/fresh/copy/en'
import { freshCopyFR } from '@/lib/pages/fresh/copy/fr'
import type { FreshContent } from '@/lib/pages/fresh/types'

const copy: Record<Locale, FreshContent> = {
  en: freshCopyEN,
  fr: freshCopyFR,
}

/**
 * Approved editorial baseline for Mama Emma Fresh. Published `fresh-products`
 * documents override the range below; ingredients, sizes and availability stay
 * absent until an editor enters verified values.
 */
export function getFreshBaseline(locale: Locale): FreshContent {
  return copy[locale]
}
