import type { Locale } from '@/lib/i18n/config'

/**
 * Controlled application routes. Editors choose a route key in Payload; the
 * localized path is resolved here so URLs are never hardcoded in components.
 */
export const routeKeys = [
  'home',
  'about',
  'services',
  'menus',
  'fresh',
  'gallery',
  'experience',
  'events',
  'journal',
  'contact',
  'quote',
] as const

export type RouteKey = (typeof routeKeys)[number]

const localizedSegments: Record<RouteKey, Record<Locale, string>> = {
  about: { en: 'about', fr: 'a-propos' },
  contact: { en: 'contact', fr: 'contact' },
  events: { en: 'events', fr: 'evenements' },
  experience: { en: 'the-mama-emma-experience', fr: 'the-mama-emma-experience' },
  fresh: { en: 'mama-emma-fresh', fr: 'mama-emma-fresh' },
  gallery: { en: 'gallery', fr: 'galerie' },
  home: { en: '', fr: '' },
  journal: { en: 'journal', fr: 'journal' },
  menus: { en: 'menus', fr: 'menus' },
  quote: { en: 'request-a-quote', fr: 'demande-de-devis' },
  services: { en: 'services', fr: 'services' },
}

export function isRouteKey(value: unknown): value is RouteKey {
  return typeof value === 'string' && routeKeys.some((key) => key === value)
}

export function routePath(route: RouteKey, locale: Locale): string {
  const segment = localizedSegments[route][locale]
  return segment ? `/${locale}/${segment}` : `/${locale}`
}

/** Resolves a value coming from Payload, falling back when the key is unknown. */
export function resolveRoute(value: unknown, fallback: RouteKey = 'quote'): RouteKey {
  return isRouteKey(value) ? value : fallback
}

export function alternatePath(route: RouteKey): Record<Locale, string> {
  return {
    en: routePath(route, 'en'),
    fr: routePath(route, 'fr'),
  }
}
