import { describe, expect, it } from 'vitest'

import { locales } from '@/lib/i18n/config'
import { getAboutBaseline } from '@/lib/pages/about/content'
import { getContactBaseline } from '@/lib/pages/contact/content'
import { resolveRouteFromSegments, routePath } from '@/lib/routes'

const priceShapes = [/GH[₵S]|\bUSD\b|€|\$\d/, /\bà partir de \d|\bfrom \d+\s*(per|par)\b/i]

describe('interior route resolution', () => {
  it('round-trips every localized segment back to its route key', () => {
    for (const locale of locales) {
      for (const route of ['about', 'contact'] as const) {
        const segments = routePath(route, locale).split('/').slice(2)
        expect(resolveRouteFromSegments(segments, locale)).toBe(route)
      }
    }
  })

  /**
   * `/fr/about` must not resolve. Serving the English segment under the French
   * locale would publish a duplicate untranslated page, which the brief forbids.
   */
  it('refuses a segment belonging to the other locale', () => {
    expect(resolveRouteFromSegments(['about'], 'fr')).toBeNull()
    expect(resolveRouteFromSegments(['a-propos'], 'en')).toBeNull()
    expect(resolveRouteFromSegments(['galerie'], 'en')).toBeNull()
  })

  it('refuses unknown and nested segments', () => {
    expect(resolveRouteFromSegments(['pricing'], 'en')).toBeNull()
    expect(resolveRouteFromSegments([], 'en')).toBeNull()
    expect(resolveRouteFromSegments(['about', 'team'], 'en')).toBeNull()
  })

  /**
   * The homepage is served by its own route file. Resolving an empty segment to
   * `home` here would create a second URL for the same page.
   */
  it('never resolves to the homepage', () => {
    for (const locale of locales) {
      expect(resolveRouteFromSegments([''], locale)).toBeNull()
    }
  })
})

describe('story page baseline', () => {
  it('ships the six approved chapters in order, in both locales', () => {
    for (const locale of locales) {
      const content = getAboutBaseline(locale)

      expect(content.chapters.items).toHaveLength(6)
      expect(content.chapters.items.map((chapter) => chapter.label.toLowerCase())).toEqual([
        'congo',
        'maya-maya',
        locale === 'fr' ? 'sénégal' : 'senegal',
        locale === 'fr' ? 'hôtellerie' : 'professional hospitality',
        'ghana',
        locale === 'fr' ? 'meste aujourd’hui' : 'meste today',
      ])

      for (const chapter of content.chapters.items) {
        expect(chapter.title.trim().length).toBeGreaterThan(3)
        expect(chapter.body.length).toBeGreaterThan(0)
      }
    }
  })

  it('keeps the biographical facts the source narrative states', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getAboutBaseline(locale))

      expect(serialized).toContain('Maya-Maya')
      expect(serialized).toContain('Méridien Président')
      expect(serialized).toContain('Novotel')
    }
  })

  /**
   * Every frame on this page is still awaiting photography. Shipping an image
   * here would mean it was invented.
   */
  it('renders labelled placeholders rather than invented photography', () => {
    for (const locale of locales) {
      const content = getAboutBaseline(locale)
      const slots = [
        content.intro.media,
        ...content.chapters.items.map((chapter) => chapter.media),
      ].filter((slot) => slot !== null)

      expect(slots.length).toBeGreaterThan(0)

      for (const slot of slots) {
        expect(slot.image).toBeNull()
        expect(slot.slot.trim().length).toBeGreaterThan(3)
        expect(slot.caption.trim().length).toBeGreaterThan(10)
      }
    }
  })
})

describe('contact page baseline', () => {
  it('carries labels only, never a contact value', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getContactBaseline(locale))

      expect(serialized).not.toMatch(/[\w.+-]+@[\w-]+\.[a-z]{2,}/i)
      expect(serialized).not.toMatch(/\d{6,}/)
      expect(serialized).not.toMatch(/\b\d{1,2}\s?[:h]\s?\d{2}\b/)
      expect(serialized).not.toMatch(/instagram\.com|facebook\.com|wa\.me/i)
    }
  })

  it('names every channel it may have to render', () => {
    for (const locale of locales) {
      const { channels } = getContactBaseline(locale)

      for (const label of Object.values(channels)) {
        expect(label.trim().length).toBeGreaterThan(1)
      }
    }
  })
})

describe('interior pages publish no price', () => {
  it('keeps both pages free of any monetary shape', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify([getAboutBaseline(locale), getContactBaseline(locale)])

      for (const shape of priceShapes) {
        expect(serialized).not.toMatch(shape)
      }
    }
  })
})

describe('bilingual completeness', () => {
  it('leaves no empty string in either baseline', () => {
    for (const locale of locales) {
      for (const baseline of [getAboutBaseline(locale), getContactBaseline(locale)]) {
        const empties: string[] = []

        JSON.stringify(baseline, (key, value) => {
          if (typeof value === 'string' && value.trim() === '') {
            empties.push(key)
          }
          return value
        })

        expect(empties).toEqual([])
      }
    }
  })
})
