import { beforeEach, describe, expect, it } from 'vitest'

import { locales } from '@/lib/i18n/config'
import { getQuoteCopy } from '@/lib/pages/quote/content'
import { isHoneypotFilled, isThrottled, judgeTiming, resetThrottle } from '@/lib/quote/guards'
import { collectErrors, quoteSchema } from '@/lib/quote/schema'

/** Every code the schema can emit. The copy files must answer all of them. */
const emittedCodes = [
  'consent',
  'date',
  'email',
  'max',
  'min',
  'number',
  'required',
  'tooLong',
] as const

/** Codes the server action adds on top of validation. */
const runtimeCodes = ['stale', 'throttled', 'unavailable', 'unknown'] as const

const valid = {
  consent: 'on',
  email: 'awa@example.com',
  name: 'Awa Diallo',
  phone: '0537464516',
}

describe('quote validation', () => {
  it('accepts the three essentials and nothing more', () => {
    const result = quoteSchema.safeParse(valid)

    expect(result.success).toBe(true)
    expect(result.data?.eventDate).toBeUndefined()
    expect(result.data?.guestCount).toBeUndefined()
  })

  it('refuses a submission without consent, whatever else is filled', () => {
    const result = quoteSchema.safeParse({ ...valid, consent: undefined })

    expect(result.success).toBe(false)
    expect(collectErrors(result.error!).consent).toBe('consent')
  })

  it('reports one error per field, by code', () => {
    const result = quoteSchema.safeParse({ consent: 'on', email: 'nope', name: 'A', phone: '1' })
    const errors = collectErrors(result.error!)

    expect(errors).toEqual({ email: 'email', name: 'required', phone: 'required' })
  })

  /** Empty optional inputs arrive as '' from a form and must not become ''. */
  it('treats an empty optional field as absent', () => {
    const result = quoteSchema.safeParse({
      ...valid,
      budget: '',
      company: '   ',
      eventDate: '',
      guestCount: '',
      notes: '',
    })

    expect(result.success).toBe(true)
    expect(result.data?.budget).toBeUndefined()
    expect(result.data?.company).toBeUndefined()
    expect(result.data?.eventDate).toBeUndefined()
    expect(result.data?.guestCount).toBeUndefined()
  })

  it('reads a guest count as a number and refuses nonsense', () => {
    expect(quoteSchema.safeParse({ ...valid, guestCount: '120' }).data?.guestCount).toBe(120)
    expect(
      collectErrors(quoteSchema.safeParse({ ...valid, guestCount: '0' }).error!).guestCount,
    ).toBe('min')
    expect(
      collectErrors(quoteSchema.safeParse({ ...valid, guestCount: 'many' }).error!).guestCount,
    ).toBe('number')
  })

  it('refuses a date that is not one', () => {
    expect(quoteSchema.safeParse({ ...valid, eventDate: '2026-09-12' }).success).toBe(true)
    expect(
      collectErrors(quoteSchema.safeParse({ ...valid, eventDate: '12/09/2026' }).error!).eventDate,
    ).toBe('date')
  })

  it('caps what it will store', () => {
    const errors = collectErrors(
      quoteSchema.safeParse({ ...valid, notes: 'x'.repeat(2001) }).error!,
    )

    expect(errors.notes).toBe('tooLong')
  })
})

describe('submission guards', () => {
  beforeEach(() => {
    resetThrottle()
  })

  it('spots a filled honeypot', () => {
    expect(isHoneypotFilled('')).toBe(false)
    expect(isHoneypotFilled('  ')).toBe(false)
    expect(isHoneypotFilled(undefined)).toBe(false)
    expect(isHoneypotFilled('Director')).toBe(true)
  })

  /**
   * The stamp is written by JavaScript. A visitor without it must be judged
   * `ok`, or the site would silently discard their enquiry.
   */
  it('never punishes a visitor with no timing stamp', () => {
    const now = 1_000_000
    expect(judgeTiming(undefined, now)).toBe('ok')
    expect(judgeTiming('', now)).toBe('ok')
    expect(judgeTiming('not-a-number', now)).toBe('ok')
  })

  it('separates a machine from a person who left the tab open', () => {
    const now = 1_000_000

    expect(judgeTiming(String(now - 500), now)).toBe('tooFast')
    expect(judgeTiming(String(now - 30_000), now)).toBe('ok')
    expect(judgeTiming(String(now - 7 * 60 * 60 * 1000), now)).toBe('stale')
  })

  it('lets a few submissions through, then holds the door', () => {
    const now = 1_000_000

    expect(isThrottled(now)).toBe(false)
    expect(isThrottled(now + 100)).toBe(false)
    expect(isThrottled(now + 200)).toBe(false)
    expect(isThrottled(now + 300)).toBe(true)

    // A new window starts clean.
    expect(isThrottled(now + 120_000)).toBe(false)
  })
})

describe('quote copy', () => {
  it('answers every error code the system can produce, in both locales', () => {
    for (const locale of locales) {
      const { codes } = getQuoteCopy(locale).errors

      for (const code of [...emittedCodes, ...runtimeCodes]) {
        expect(codes[code]?.trim().length ?? 0).toBeGreaterThan(5)
      }
    }
  })

  it('labels every field the form can render', () => {
    for (const locale of locales) {
      const { labels } = getQuoteCopy(locale).form

      for (const label of Object.values(labels)) {
        expect(label.trim().length).toBeGreaterThan(1)
      }
    }
  })

  /**
   * A quote request is where a price would be most tempting. There is none, and
   * no response time is promised either — neither is verified.
   */
  it('promises no price and no delay', () => {
    for (const locale of locales) {
      const serialized = JSON.stringify(getQuoteCopy(locale))

      expect(serialized).not.toMatch(/GH[₵S]|\bUSD\b|€|\$\d/)
      expect(serialized).not.toMatch(/within \d+|sous \d+|\d+\s?(hours|heures|jours|days)/i)
    }
  })

  /** The confirmation must not imply an email that nothing sends yet. */
  it('says outright that no confirmation email leaves', () => {
    expect(getQuoteCopy('en').success.note).toMatch(/no confirmation email/i)
    expect(getQuoteCopy('fr').success.note).toMatch(/aucun courriel/i)
  })
})
