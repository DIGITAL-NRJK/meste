import type { Locale } from '@/lib/i18n/config'

type SiteDictionary = {
  alternateLanguageLabel: string
  defaultDescription: string
  defaultTitle: string
  titleTemplate: string
}

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    alternateLanguageLabel: 'Lire en français',
    defaultDescription:
      'Premium African catering and hospitality in Accra. Taste · Elegance · Hospitality.',
    defaultTitle: 'MESTE — Mama Emma Service Traiteur d’Excellence',
    titleTemplate: '%s — MESTE',
  },
  fr: {
    alternateLanguageLabel: 'Read in English',
    defaultDescription: 'Service traiteur d’excellence à Accra. Taste · Elegance · Hospitality.',
    defaultTitle: 'MESTE — Mama Emma Service Traiteur d’Excellence',
    titleTemplate: '%s — MESTE',
  },
}

export function getSiteDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale]
}
