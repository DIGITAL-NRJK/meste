import type { Locale } from '@/lib/i18n/config'
import { servicesCopyEN } from '@/lib/pages/services/copy/en'
import { servicesCopyFR } from '@/lib/pages/services/copy/fr'
import type { ServicesContent } from '@/lib/pages/services/types'

const copy: Record<Locale, ServicesContent> = {
  en: servicesCopyEN,
  fr: servicesCopyFR,
}

/**
 * Approved editorial baseline for the services index. Published `services` and
 * `reception-formats` documents override the inventories below; anything the
 * CMS cannot supply yet keeps this wording.
 */
export function getServicesBaseline(locale: Locale): ServicesContent {
  return copy[locale]
}
