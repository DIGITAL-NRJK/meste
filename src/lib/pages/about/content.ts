import type { Locale } from '@/lib/i18n/config'
import type { AboutContent } from '@/lib/pages/about/types'
import { aboutCopyEN } from '@/lib/pages/about/copy/en'
import { aboutCopyFR } from '@/lib/pages/about/copy/fr'

const copy: Record<Locale, AboutContent> = {
  en: aboutCopyEN,
  fr: aboutCopyFR,
}

/**
 * Approved editorial baseline for the story page.
 *
 * The six chapters and every biographical statement come from the client's
 * source narrative. Framing copy — page title, lede, chapter transitions — is
 * house writing awaiting sign-off, and is replaced the moment an editor
 * publishes the page in Payload.
 */
export function getAboutBaseline(locale: Locale): AboutContent {
  return copy[locale]
}
