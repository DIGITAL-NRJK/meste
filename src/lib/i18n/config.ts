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
