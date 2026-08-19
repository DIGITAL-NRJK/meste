import { homeCopyEN } from '@/lib/home/copy/en'
import { homeCopyFR } from '@/lib/home/copy/fr'
import type { HomeContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'

const copy: Record<Locale, HomeContent> = {
  en: homeCopyEN,
  fr: homeCopyFR,
}

/**
 * Approved editorial baseline for the homepage.
 *
 * Payload content overrides this once an editor marks a locale ready. Until
 * then the page still reads as a finished composition rather than an empty
 * shell, and every string here comes from client-approved material.
 */
export function getHomeBaseline(locale: Locale): HomeContent {
  return copy[locale]
}
