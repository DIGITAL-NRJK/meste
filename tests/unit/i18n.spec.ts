import { describe, expect, it } from 'vitest'

import {
  defaultLocale,
  getAlternateLocale,
  getLocalePath,
  isLocale,
  locales,
} from '@/lib/i18n/config'
import { formatPageTitle, getSiteDictionary } from '@/lib/i18n/site'

describe('locale foundation', () => {
  it('keeps English as the deterministic default', () => {
    expect(defaultLocale).toBe('en')
    expect(locales).toEqual(['en', 'fr'])
  })

  it('rejects unsupported locale segments', () => {
    expect(isLocale('en')).toBe(true)
    expect(isLocale('fr')).toBe(true)
    expect(isLocale('de')).toBe(false)
  })

  it('maps language switches without ad-hoc URL concatenation', () => {
    expect(getAlternateLocale('en')).toBe('fr')
    expect(getAlternateLocale('fr')).toBe('en')
    expect(getLocalePath('fr')).toBe('/fr')
  })

  /**
   * Next.js only applies a layout title template to nested segments, so the
   * homepage composes its own title instead of relying on inheritance.
   */
  it('always puts the brand in a page title', () => {
    expect(formatPageTitle('en', 'The art of hosting, reimagined')).toBe(
      'The art of hosting, reimagined — MESTE',
    )
    expect(formatPageTitle('fr', "L'art de recevoir, autrement")).toBe(
      "L'art de recevoir, autrement — MESTE",
    )

    for (const locale of locales) {
      expect(formatPageTitle(locale, '   ')).toContain('MESTE')
      expect(formatPageTitle(locale, 'Menus')).toMatch(/MESTE$/)
    }
  })

  it('provides site-level metadata copy for both locales', () => {
    for (const locale of locales) {
      const copy = getSiteDictionary(locale)
      expect(copy.defaultTitle).toContain('MESTE')
      expect(copy.titleTemplate).toContain('%s')
      expect(copy.defaultDescription.length).toBeGreaterThan(20)
    }
  })
})
