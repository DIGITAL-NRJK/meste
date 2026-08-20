import type { Locale } from '@/lib/i18n/config'
import { quoteCopyEN } from '@/lib/pages/quote/copy/en'
import { quoteCopyFR } from '@/lib/pages/quote/copy/fr'
import type { QuoteContent } from '@/lib/pages/quote/types'

const copy: Record<Locale, QuoteContent> = {
  en: quoteCopyEN,
  fr: quoteCopyFR,
}

export function getQuoteCopy(locale: Locale): QuoteContent {
  return copy[locale]
}
