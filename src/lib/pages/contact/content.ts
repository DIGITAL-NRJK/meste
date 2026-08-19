import type { Locale } from '@/lib/i18n/config'
import { contactCopyEN } from '@/lib/pages/contact/copy/en'
import { contactCopyFR } from '@/lib/pages/contact/copy/fr'
import type { ContactContent } from '@/lib/pages/contact/types'

const copy: Record<Locale, ContactContent> = {
  en: contactCopyEN,
  fr: contactCopyFR,
}

/**
 * Approved editorial baseline for the contact page.
 *
 * Framing copy is house writing pending sign-off. The contact details
 * themselves never come from here — they come from `ContactSettings`, and the
 * only one currently verified is the published telephone number.
 */
export function getContactBaseline(locale: Locale): ContactContent {
  return copy[locale]
}
