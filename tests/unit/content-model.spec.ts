import { describe, expect, it } from 'vitest'

import { Events } from '@/collections/Events'
import { normalizeSlug } from '@/collections/fields/slug'
import {
  freshProductSeed,
  menuCategorySeed,
  menuItemSeed,
  serviceSeed,
  signatureMenuSeed,
} from '@/seed/data'

describe('Phase 3 content model', () => {
  it('keeps the event lifecycle distinct from Payload draft status', () => {
    const fieldNames = Events.fields
      .filter((field) => 'name' in field)
      .map((field) => ('name' in field ? field.name : undefined))

    expect(fieldNames).toContain('eventStatus')
    expect(fieldNames).not.toContain('status')
  })

  it('normalizes slugs deterministically', () => {
    expect(normalizeSlug('  Côte & Cendre  ')).toBe('cote-cendre')
    expect(normalizeSlug('Mama Emma Fresh')).toBe('mama-emma-fresh')
  })

  it('keeps structural seed keys unique and factual', () => {
    const seedKeys = [
      ...menuCategorySeed.map(({ seedKey }) => seedKey),
      ...serviceSeed.map(({ seedKey }) => seedKey),
      ...signatureMenuSeed.map(({ seedKey }) => seedKey),
      ...freshProductSeed.map(({ seedKey }) => seedKey),
      ...menuItemSeed.map(({ name }) => `menu-item:${normalizeSlug(name)}`),
    ]

    expect(new Set(seedKeys).size).toBe(seedKeys.length)
    // Eleven of the twelve families named in the brief. `Mama Emma Fresh` is
    // not one of them: the beverage range lives in its own collection, and a
    // second copy here would be a second source of truth for the same products.
    expect(menuCategorySeed).toHaveLength(11)
    expect(menuCategorySeed.map(({ family }) => family)).toEqual(
      expect.arrayContaining(['meste-signature-cocktails', 'heritage-african-roots']),
    )
    expect(menuCategorySeed.map(({ family }) => family)).not.toContain('mama-emma-fresh')
    expect(serviceSeed).toHaveLength(4)
    expect(signatureMenuSeed).toHaveLength(5)
    expect(freshProductSeed).toHaveLength(6)
    expect(menuItemSeed.length).toBeGreaterThanOrEqual(50)
  })

  /**
   * Seeded labels are the approved names, not capitalised slugs: an editor
   * should never have to rename a category the brief already named.
   */
  it('seeds every menu family under its approved name', () => {
    const names = Object.fromEntries(menuCategorySeed.map(({ family, name }) => [family, name]))

    expect(names['meste-signature-cocktails']).toBe('MESTE Signature Cocktails')
    expect(names['heritage-african-roots']).toBe('Heritage & African Roots')
    expect(names.desserts).toBe('Sweet Mama Emma')
    expect(names.sides).toBe('Signature Sides')
    expect(names['vegetable-table']).toBe('The Vegetable Table')
    expect(names.starters).toBe('Starters — Fresh & Elegant')

    for (const { name } of menuCategorySeed) {
      expect(name.trim()).toBe(name)
      expect(name.length).toBeGreaterThan(3)
    }
  })

  it('does not introduce forbidden Fresh claims or fabricated social proof', () => {
    const serialized = JSON.stringify({ freshProductSeed, menuItemSeed }).toLowerCase()
    expect(serialized).not.toContain('organic')
    expect(serialized).not.toContain('testimonial')
    expect(serialized).not.toContain('clientname')
    expect(serialized).not.toContain('price')
  })
})
