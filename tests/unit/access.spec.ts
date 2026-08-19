import { describe, expect, it } from 'vitest'
import type { AccessArgs, PayloadRequest } from 'payload'

import {
  adminOnly,
  authenticated,
  getUserRole,
  permittedPublishedOrAuthenticated,
  publishedOrAuthenticated,
} from '@/collections/access/roles'

function requestWithUser(role?: 'admin' | 'editor', locale?: string): PayloadRequest {
  return {
    locale,
    user: role
      ? {
          collection: 'users',
          email: `${role}@meste.test`,
          id: role === 'admin' ? 1 : 2,
          role,
        }
      : null,
  } as unknown as PayloadRequest
}

function accessArgs(role?: 'admin' | 'editor', locale?: string): AccessArgs {
  return { req: requestWithUser(role, locale) }
}

describe('CMS access policies', () => {
  it('recognizes only the two configured roles', () => {
    expect(getUserRole(requestWithUser('admin').user)).toBe('admin')
    expect(getUserRole(requestWithUser('editor').user)).toBe('editor')
    expect(getUserRole(requestWithUser().user)).toBeUndefined()
  })

  it('keeps administrator operations separate from editorial authentication', async () => {
    expect(await adminOnly(accessArgs('admin'))).toBe(true)
    expect(await adminOnly(accessArgs('editor'))).toBe(false)
    expect(await authenticated(accessArgs('editor'))).toBe(true)
    expect(await authenticated(accessArgs())).toBe(false)
  })

  it('limits anonymous editorial reads to published documents', async () => {
    expect(await publishedOrAuthenticated(accessArgs('editor'))).toBe(true)
    expect(await publishedOrAuthenticated(accessArgs())).toEqual({
      _status: { equals: 'published' },
      'localeReadiness.en': { equals: true },
    })
  })

  /**
   * This filter is the single source of truth for public visibility: queries
   * must never restate it, so its locale handling is asserted here instead.
   */
  it('follows the requested locale, and falls back to English when unsupported', async () => {
    expect(await publishedOrAuthenticated(accessArgs(undefined, 'fr'))).toEqual({
      _status: { equals: 'published' },
      'localeReadiness.fr': { equals: true },
    })

    expect(await publishedOrAuthenticated(accessArgs(undefined, 'de'))).toEqual({
      _status: { equals: 'published' },
      'localeReadiness.en': { equals: true },
    })
  })

  it('requires both publication and display permission for public social proof', async () => {
    expect(await permittedPublishedOrAuthenticated(accessArgs())).toEqual({
      _status: { equals: 'published' },
      'localeReadiness.en': { equals: true },
      permissionToDisplay: { equals: true },
    })

    expect(await permittedPublishedOrAuthenticated(accessArgs(undefined, 'fr'))).toEqual({
      _status: { equals: 'published' },
      'localeReadiness.fr': { equals: true },
      permissionToDisplay: { equals: true },
    })
  })
})
