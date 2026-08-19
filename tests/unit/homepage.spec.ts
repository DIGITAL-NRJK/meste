import { describe, expect, it } from 'vitest'

import { getHomeBaseline } from '@/lib/home/content'
import { locales } from '@/lib/i18n/config'
import { isRouteKey, routePath, routeKeys } from '@/lib/routes'
import { buildWhatsAppHref, getChromeBaseline } from '@/lib/site/chrome'

describe('localized routes', () => {
  it('resolves every route key in both locales', () => {
    for (const route of routeKeys) {
      for (const locale of locales) {
        expect(routePath(route, locale)).toMatch(new RegExp(`^/${locale}(/|$)`))
      }
    }
  })

  it('uses the French slugs required by the brief', () => {
    expect(routePath('about', 'fr')).toBe('/fr/a-propos')
    expect(routePath('gallery', 'fr')).toBe('/fr/galerie')
    expect(routePath('quote', 'fr')).toBe('/fr/demande-de-devis')
    expect(routePath('quote', 'en')).toBe('/en/request-a-quote')
    expect(routePath('home', 'en')).toBe('/en')
  })

  it('rejects unknown route keys instead of building a broken URL', () => {
    expect(isRouteKey('services')).toBe(true)
    expect(isRouteKey('pricing')).toBe(false)
    expect(isRouteKey(null)).toBe(false)
  })
})

describe('homepage baseline', () => {
  it('ships complete approved copy for both locales', () => {
    for (const locale of locales) {
      const content = getHomeBaseline(locale)

      expect(content.hero.headingLead.length).toBeGreaterThan(3)
      expect(content.promise.pillars).toHaveLength(4)
      expect(content.worlds.items).toHaveLength(4)
      expect(content.formats.items).toHaveLength(5)
      expect(content.process.steps).toHaveLength(5)
      expect(content.fresh.products).toHaveLength(6)
      expect(content.manifesto.reasons.items).toHaveLength(6)
    }
  })

  it('never fabricates testimonials or dish photography', () => {
    for (const locale of locales) {
      const content = getHomeBaseline(locale)

      expect(content.references.quotes).toHaveLength(0)
      expect(content.dishes.items).toHaveLength(0)
      expect(content.hero.media.image).toBeNull()
    }
  })

  it('publishes no price anywhere on the page', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getHomeBaseline(locale))

      expect(serialized).not.toMatch(/GH[₵S]|\bUSD\b|€|\$\d/)
      expect(serialized).not.toMatch(/\bà partir de \d|\bfrom \d+\s*(per|par)\b/i)
    }
  })
})

describe('contact chrome', () => {
  it('exposes only the published phone number and nothing invented', () => {
    for (const locale of locales) {
      const { contact } = getChromeBaseline(locale)

      expect(contact.phone).toBe('0537464516')
      expect(contact.email).toBeNull()
      expect(contact.addressLines).toHaveLength(0)
      expect(contact.hours).toHaveLength(0)
      expect(contact.social).toHaveLength(0)
    }
  })

  it('builds a WhatsApp link only from an explicit international number', () => {
    expect(buildWhatsAppHref('0537464516')).toBeNull()
    expect(buildWhatsAppHref(undefined)).toBeNull()
    expect(buildWhatsAppHref('+233 53 746 4516')).toBe('https://wa.me/233537464516')
    expect(buildWhatsAppHref('+233537464516', 'Bonjour')).toBe(
      'https://wa.me/233537464516?text=Bonjour',
    )
  })
})
