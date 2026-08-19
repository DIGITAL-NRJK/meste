import { afterEach, beforeEach, describe, expect, it, vi } from 'vitest'

import {
  getServerEnvironment,
  hasR2Storage,
  resetServerEnvironmentForTests,
} from '@/lib/env/server'

const validR2Environment = {
  R2_ACCESS_KEY_ID: 'access-key',
  R2_ACCOUNT_ID: 'account-id',
  // Deliberately not a real bucket name: fixtures must never collide with
  // production identifiers, or CI secret scanners flag the file.
  R2_BUCKET: 'example-bucket',
  R2_ENDPOINT: 'https://account-id.r2.cloudflarestorage.com',
  R2_PUBLIC_URL: 'https://media.example.com',
  R2_SECRET_ACCESS_KEY: 'secret-key',
}

describe('server environment', () => {
  beforeEach(() => {
    vi.stubEnv('CONTEXT', '')
    vi.stubEnv('DATABASE_URL', 'postgresql://postgres:postgres@127.0.0.1:5432/meste')
    vi.stubEnv('NEXT_PUBLIC_SERVER_URL', 'http://localhost:3000')
    vi.stubEnv('PAYLOAD_SECRET', 'test-payload-secret-at-least-32-characters')

    for (const key of Object.keys(validR2Environment)) {
      vi.stubEnv(key, '')
    }

    resetServerEnvironmentForTests()
  })

  afterEach(() => {
    resetServerEnvironmentForTests()
    vi.unstubAllEnvs()
  })

  it('allows local media storage when no R2 values are present', () => {
    const environment = getServerEnvironment()
    expect(hasR2Storage(environment)).toBe(false)
  })

  it('accepts a complete R2 configuration', () => {
    for (const [key, value] of Object.entries(validR2Environment)) {
      vi.stubEnv(key, value)
    }

    resetServerEnvironmentForTests()
    expect(hasR2Storage(getServerEnvironment())).toBe(true)
  })

  it('rejects a partial R2 configuration', () => {
    vi.stubEnv('R2_BUCKET', 'example-bucket')
    resetServerEnvironmentForTests()

    expect(() => getServerEnvironment()).toThrow(/Configure every R2 variable/)
  })

  it('requires R2 in the Netlify production context', () => {
    vi.stubEnv('CONTEXT', 'production')
    resetServerEnvironmentForTests()

    expect(() => getServerEnvironment()).toThrow(/R2 configuration is required/)
  })
})
