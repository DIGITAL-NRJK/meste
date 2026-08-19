import { describe, expect, it } from 'vitest'

import {
  defaultLocale,
  getAlternateLocale,
  getLocalePath,
  isLocale,
  locales,
} from '@/lib/i18n/config'
import { getSiteDictionary } from '@/lib/i18n/site'

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

  it('provides site-level metadata copy for both locales', () => {
    for (const locale of locales) {
      const copy = getSiteDictionary(locale)
      expect(copy.defaultTitle).toContain('MESTE')
      expect(copy.titleTemplate).toContain('%s')
      expect(copy.defaultDescription.length).toBeGreaterThan(20)
    }
  })
})
