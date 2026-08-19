import { describe, expect, it } from 'vitest'

import { locales } from '@/lib/i18n/config'
import { getAboutBaseline } from '@/lib/pages/about/content'
import { getContactBaseline } from '@/lib/pages/contact/content'
import { getFreshBaseline } from '@/lib/pages/fresh/content'
import { getMenusBaseline } from '@/lib/pages/menus/content'
import { getServicesBaseline } from '@/lib/pages/services/content'
import { resolveRouteFromSegments, routePath } from '@/lib/routes'

const priceShapes = [/GH[₵S]|\bUSD\b|€|\$\d/, /\bà partir de \d|\bfrom \d+\s*(per|par)\b/i]

describe('interior route resolution', () => {
  it('round-trips every localized segment back to its route key', () => {
    for (const locale of locales) {
      for (const route of ['about', 'services', 'menus', 'fresh', 'contact'] as const) {
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
      const serialized = JSON.stringify([
        getAboutBaseline(locale),
        getServicesBaseline(locale),
        getMenusBaseline(locale),
        getFreshBaseline(locale),
        getContactBaseline(locale),
      ])

      for (const shape of priceShapes) {
        expect(serialized).not.toMatch(shape)
      }
    }
  })
})

describe('bilingual completeness', () => {
  it('leaves no empty string in either baseline', () => {
    for (const locale of locales) {
      for (const baseline of [
        getAboutBaseline(locale),
        getServicesBaseline(locale),
        getMenusBaseline(locale),
        getFreshBaseline(locale),
        getContactBaseline(locale),
      ]) {
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

describe('services page baseline', () => {
  it('keeps the four worlds and the five formats the brief names', () => {
    for (const locale of locales) {
      const content = getServicesBaseline(locale)

      expect(content.worlds.items).toHaveLength(4)
      expect(content.worlds.items.map((world) => world.title)).toEqual([
        'Celebrations',
        'Corporate',
        'Institutional & Diplomatic',
        'Bespoke Experiences',
      ])
      expect(content.formats.items).toHaveLength(5)

      for (const world of content.worlds.items) {
        expect(world.items.length).toBeGreaterThan(2)
      }
    }
  })

  /**
   * The brief supplies no guest range and forbids inventing one, so no number
   * of guests may appear anywhere on this page.
   */
  it('publishes no guest range', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getServicesBaseline(locale))

      expect(serialized).not.toMatch(/\d+\s*(?:-|–|to|à)\s*\d+/)
      expect(serialized).not.toMatch(/\d+\s*(guests|convives|personnes|pax)/i)
    }
  })

  it('names no client and quotes no testimonial', () => {
    for (const locale of locales) {
      const content = getServicesBaseline(locale)

      expect(content.references.heading.trim().length).toBeGreaterThan(5)
      expect(JSON.stringify(content)).not.toMatch(/embassy of|ambassade de/i)
    }
  })
})

describe('menu collection baseline', () => {
  it('carries the twelve signature dishes with their compositions', () => {
    for (const locale of locales) {
      const content = getMenusBaseline(locale)

      expect(content.signatureDishes.items).toHaveLength(12)
      expect(content.levels.items).toHaveLength(3)
      expect(content.signatureMenus.items).toHaveLength(5)

      for (const dish of content.signatureDishes.items) {
        expect(dish.name.trim().length).toBeGreaterThan(3)
        expect(dish.composition).toContain('/')
      }
    }
  })

  it('keeps dish names identical across locales', () => {
    const en = getMenusBaseline('en').signatureDishes.items.map((dish) => dish.name)
    const fr = getMenusBaseline('fr').signatureDishes.items.map((dish) => dish.name)

    expect(fr).toEqual(en)
  })

  /**
   * The brief forbids inferring allergens or dietary labels. Neither may reach
   * the page until an editor enters verified data in the CMS.
   */
  it('infers no allergen and no dietary label', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getMenusBaseline(locale))

      expect(serialized).not.toMatch(/gluten|allerg|lactose|halal|vegan|sans porc|pork-free/i)
    }
  })
})

describe('Mama Emma Fresh baseline', () => {
  it('lists the six approved products and nothing more', () => {
    for (const locale of locales) {
      const content = getFreshBaseline(locale)

      expect(content.range.products).toEqual([
        'Pineapple',
        'Hibiscus / Bissap',
        'Ginger',
        'Pineapple & Beetroot',
        'Pineapple & Orange',
        'Pineapple & Watermelon',
      ])
      expect(content.range.signature).toBe('Crafted in Ghana.')
    }
  })

  /**
   * `Do NOT claim: Organic` — and no size, ingredient list or nutritional
   * property either, since none of them has been verified.
   */
  it('claims nothing about the product it has not been given', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getFreshBaseline(locale))

      expect(serialized).not.toMatch(/organic|biologique|\bbio\b/i)
      expect(serialized).not.toMatch(/\d+\s?(cl|ml|l\b|oz)/i)
      expect(serialized).not.toMatch(/calorie|sugar-free|sans sucre|vitamin/i)
    }
  })

  it('presents the culinary uses as possibility, never as recipe', () => {
    expect(getFreshBaseline('en').culinary.intro).toMatch(/\bcan\b|\bmay\b/)
    expect(getFreshBaseline('fr').culinary.intro).toMatch(/peuvent|peut/)

    for (const locale of locales) {
      expect(getFreshBaseline(locale).culinary.caveat.trim().length).toBeGreaterThan(10)
    }
  })
})
