export const locales = ['en', 'fr'] as const

export type Locale = (typeof locales)[number]

export const defaultLocale: Locale = 'en'

export function isLocale(value: string): value is Locale {
  return locales.some((locale) => locale === value)
}

export function getAlternateLocale(locale: Locale): Locale {
  return locale === 'en' ? 'fr' : 'en'
}

export function getLocalePath(locale: Locale): `/${Locale}` {
  return `/${locale}`
}

/**
 * Reads the locale out of a URL path.
 *
 * `not-found.tsx` receives no route params — Next.js renders it outside the
 * matched segment — so the pathname is the only place the visitor's language
 * survives. Anything unrecognised falls back to the default rather than
 * guessing.
 */
export function localeFromPathname(pathname: string): Locale {
  const [segment] = pathname.replace(/^\/+/, '').split('/')
  return segment && isLocale(segment) ? segment : defaultLocale
}
