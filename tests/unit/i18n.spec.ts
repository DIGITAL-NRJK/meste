import { describe, expect, it } from 'vitest'

import {
  defaultLocale,
  getAlternateLocale,
  getLocalePath,
  isLocale,
  locales,
} from '@/lib/i18n/config'
import { getFoundationDictionary } from '@/lib/i18n/dictionaries'

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

  it('provides intentional copy for both foundation routes', () => {
    expect(getFoundationDictionary('en').headline).toBe('The art of African hospitality.')
    expect(getFoundationDictionary('fr').headline).toBe("L'art de l'hospitalité africaine.")
  })
})
