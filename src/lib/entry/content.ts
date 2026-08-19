import { entryCopyEN } from '@/lib/entry/copy/en'
import { entryCopyFR } from '@/lib/entry/copy/fr'
import type { EntryContent } from '@/lib/entry/types'
import type { Locale } from '@/lib/i18n/config'

const copy: Record<Locale, EntryContent> = {
  en: entryCopyEN,
  fr: entryCopyFR,
}

/** Key used by both the pre-paint script and the veil component. */
export const ENTRY_SESSION_KEY = 'meste:entered'

export function getEntryBaseline(locale: Locale): EntryContent {
  return copy[locale]
}
