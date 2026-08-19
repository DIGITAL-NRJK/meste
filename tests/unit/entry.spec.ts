import { describe, expect, it } from 'vitest'

import { ENTRY_SESSION_KEY, getEntryBaseline } from '@/lib/entry/content'
import { locales } from '@/lib/i18n/config'

describe('entry screen baseline', () => {
  it('stays disabled until an editor turns it on', () => {
    for (const locale of locales) {
      expect(getEntryBaseline(locale).enabled).toBe(false)
    }
  })

  it('carries complete approved copy in both locales', () => {
    for (const locale of locales) {
      const entry = getEntryBaseline(locale)

      for (const value of [entry.eyebrow, entry.heading, entry.body, entry.ctaLabel]) {
        expect(value.trim().length).toBeGreaterThan(2)
      }

      expect(entry.location).toBe('Accra · Ghana')
    }
  })

  it('uses one storage key shared by the pre-paint script and the veil', () => {
    expect(ENTRY_SESSION_KEY).toBe('meste:entered')
  })
})
