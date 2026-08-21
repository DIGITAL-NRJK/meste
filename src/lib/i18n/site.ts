import type { Locale } from '@/lib/i18n/config'

type SiteDictionary = {
  alternateLanguageLabel: string
  defaultDescription: string
  defaultTitle: string
  /** Accessible name of the mobile toggle. The button itself shows an icon. */
  menuCloseLabel: string
  menuOpenLabel: string
  navLabel: string
  /** The branded 404. Interface copy, so it stays in code beside the route. */
  notFound: {
    action: string
    body: string
    code: string
    title: string
  }
  titleTemplate: string
}

const dictionaries: Record<Locale, SiteDictionary> = {
  en: {
    alternateLanguageLabel: 'Lire en français',
    defaultDescription:
      'Premium African catering and hospitality in Accra. Taste · Elegance · Hospitality.',
    defaultTitle: 'MESTE — Mama Emma Service Traiteur d’Excellence',
    menuCloseLabel: 'Close menu',
    menuOpenLabel: 'Open menu',
    navLabel: 'Primary navigation',
    notFound: {
      action: 'Return to MESTE',
      body: 'The page may have moved, or may not be ready yet.',
      code: '404 · No such table',
      title: 'This place is not set at our table.',
    },
    titleTemplate: '%s — MESTE',
  },
  fr: {
    alternateLanguageLabel: 'Read in English',
    defaultDescription: 'Service traiteur d’excellence à Accra. Taste · Elegance · Hospitality.',
    defaultTitle: 'MESTE — Mama Emma Service Traiteur d’Excellence',
    menuCloseLabel: 'Fermer le menu',
    menuOpenLabel: 'Ouvrir le menu',
    navLabel: 'Navigation principale',
    notFound: {
      action: 'Retour à MESTE',
      body: 'La page a peut-être changé d’adresse, ou n’est pas encore prête.',
      code: '404 · Table introuvable',
      title: 'Cette place n’est pas dressée à notre table.',
    },
    titleTemplate: '%s — MESTE',
  },
}

export function getSiteDictionary(locale: Locale): SiteDictionary {
  return dictionaries[locale]
}

/**
 * Builds a complete document title.
 *
 * Next.js only applies a layout's `title.template` to nested route segments, so
 * a page sitting beside its layout would ship a title with no brand in it.
 * Pages compose their title here and publish it as `absolute`, which makes the
 * result identical wherever the page lives in the route tree.
 */
export function formatPageTitle(locale: Locale, title: string): string {
  const dictionary = dictionaries[locale]
  const trimmed = title.trim()

  if (!trimmed) {
    return dictionary.defaultTitle
  }

  return dictionary.titleTemplate.replace('%s', trimmed)
}
