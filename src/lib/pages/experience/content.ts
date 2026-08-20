import type { Locale } from '@/lib/i18n/config'
import { experienceCopyEN } from '@/lib/pages/experience/copy/en'
import { experienceCopyFR } from '@/lib/pages/experience/copy/fr'
import type { ExperienceContent } from '@/lib/pages/experience/types'

const copy: Record<Locale, ExperienceContent> = {
  en: experienceCopyEN,
  fr: experienceCopyFR,
}

/**
 * Approved editorial baseline for the Experience concept page.
 *
 * The `events` collection is never read here. The brief is explicit that the
 * concept is not a scheduled event, so no edition, date or listing can reach
 * this page until real ones exist and are approved.
 */
export function getExperienceBaseline(locale: Locale): ExperienceContent {
  return copy[locale]
}
