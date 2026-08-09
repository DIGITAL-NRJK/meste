import { describe, expect, it } from 'vitest'

import { normalizeSlug } from '@/collections/fields/slug'
import { publishedLocaleWhere } from '@/lib/payload/publication'
import {
  freshProductSeed,
  menuCategorySeed,
  menuItemSeed,
  serviceSeed,
  signatureMenuSeed,
} from '@/seed/data'

describe('Phase 3 content model', () => {
  it('normalizes slugs deterministically', () => {
    expect(normalizeSlug('  Côte & Cendre  ')).toBe('cote-cendre')
    expect(normalizeSlug('Mama Emma Fresh')).toBe('mama-emma-fresh')
  })

  it('requires publication and explicit locale readiness in public queries', () => {
    expect(publishedLocaleWhere('fr', { slug: { equals: 'histoire' } })).toEqual({
      and: [
        {
          _status: { equals: 'published' },
          'localeReadiness.fr': { equals: true },
        },
        { slug: { equals: 'histoire' } },
      ],
    })
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
    expect(menuCategorySeed).toHaveLength(9)
    expect(serviceSeed).toHaveLength(4)
    expect(signatureMenuSeed).toHaveLength(5)
    expect(freshProductSeed).toHaveLength(6)
    expect(menuItemSeed.length).toBeGreaterThanOrEqual(50)
  })

  it('does not introduce forbidden Fresh claims or fabricated social proof', () => {
    const serialized = JSON.stringify({ freshProductSeed, menuItemSeed }).toLowerCase()
    expect(serialized).not.toContain('organic')
    expect(serialized).not.toContain('testimonial')
    expect(serialized).not.toContain('clientname')
    expect(serialized).not.toContain('price')
  })
})
