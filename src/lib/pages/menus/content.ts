import type { Locale } from '@/lib/i18n/config'
import { menusCopyEN } from '@/lib/pages/menus/copy/en'
import { menusCopyFR } from '@/lib/pages/menus/copy/fr'
import type { MenusContent } from '@/lib/pages/menus/types'

const copy: Record<Locale, MenusContent> = {
  en: menusCopyEN,
  fr: menusCopyFR,
}

/**
 * Approved editorial baseline for the menu collection. Published
 * `menu-categories`, `menu-items` and `signature-menus` documents override the
 * inventories below once an editor marks a locale ready.
 */
export function getMenusBaseline(locale: Locale): MenusContent {
  return copy[locale]
}
