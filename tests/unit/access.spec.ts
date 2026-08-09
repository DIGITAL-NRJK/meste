import { describe, expect, it } from 'vitest'
import type { AccessArgs, PayloadRequest } from 'payload'

import {
  adminOnly,
  authenticated,
  getUserRole,
  permittedPublishedOrAuthenticated,
  publishedOrAuthenticated,
} from '@/collections/access/roles'

function requestWithUser(role?: 'admin' | 'editor'): PayloadRequest {
  return {
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

function accessArgs(role?: 'admin' | 'editor'): AccessArgs {
  return { req: requestWithUser(role) }
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

  it('requires both publication and display permission for public social proof', async () => {
    expect(await permittedPublishedOrAuthenticated(accessArgs())).toEqual({
      _status: { equals: 'published' },
      'localeReadiness.en': { equals: true },
      permissionToDisplay: { equals: true },
    })
  })
})
