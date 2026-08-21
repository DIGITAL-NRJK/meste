import { afterEach, describe, expect, it, vi } from 'vitest'

import { locales } from '@/lib/i18n/config'
import { localeFromPathname } from '@/lib/i18n/config'
import { getSiteDictionary } from '@/lib/i18n/site'

describe('the locale a 404 was asked in', () => {
  it('reads it from the first segment of the path', () => {
    expect(localeFromPathname('/fr/demande-de-devis')).toBe('fr')
    expect(localeFromPathname('/en/about')).toBe('en')
    expect(localeFromPathname('/fr')).toBe('fr')
  })

  /** A path with no usable locale must not guess; English is the default. */
  it('falls back rather than guessing', () => {
    expect(localeFromPathname('/')).toBe('en')
    expect(localeFromPathname('')).toBe('en')
    expect(localeFromPathname('/de/impressum')).toBe('en')
    expect(localeFromPathname('///fr')).toBe('fr')
  })
})

describe('the branded 404 speaks one language', () => {
  /**
   * The page used to print English and French one after the other, because
   * `not-found.tsx` gets no params and nothing told it which one to use. This
   * asserts the two dictionaries stay genuinely separate.
   */
  it('says something different in each locale', () => {
    const en = getSiteDictionary('en').notFound
    const fr = getSiteDictionary('fr').notFound

    for (const key of ['action', 'body', 'code', 'title'] as const) {
      expect(en[key]).not.toBe(fr[key])
    }
  })

  it('says something in every locale', () => {
    for (const locale of locales) {
      const { notFound } = getSiteDictionary(locale)

      for (const value of Object.values(notFound)) {
        expect(value.trim().length).toBeGreaterThan(3)
      }
    }
  })
})

describe('where uploads are written', () => {
  const original = { ...process.env }

  afterEach(() => {
    process.env = { ...original }
    vi.resetModules()
  })

  const load = async () => {
    vi.resetModules()
    const { Media } = await import('@/collections/Media')
    return Media.upload && typeof Media.upload === 'object' ? Media.upload.staticDir : undefined
  }

  const withR2 = {
    R2_ACCESS_KEY_ID: 'key',
    R2_ACCOUNT_ID: 'account',
    R2_BUCKET: 'bucket',
    R2_ENDPOINT: 'https://example.com',
    R2_PUBLIC_URL: 'https://media.example.com',
    R2_SECRET_ACCESS_KEY: 'secret',
  }

  const base = {
    DATABASE_URL: 'postgres://localhost/meste',
    PAYLOAD_SECRET: 'x'.repeat(32),
  }

  it('uses the repository directory when R2 is configured', async () => {
    process.env = { ...original, ...base, ...withR2 }
    expect(await load()).toBe('media')
  })

  it('uses the repository directory off a serverless runtime', async () => {
    process.env = { ...original, ...base }
    delete process.env.AWS_LAMBDA_FUNCTION_NAME
    expect(await load()).toBe('media')
  })

  /**
   * The case that took a preview down: no R2, read-only filesystem. Anything
   * outside the temporary directory throws while the config is still loading.
   */
  it('uses a writable path on Lambda when R2 is absent', async () => {
    process.env = { ...original, ...base, AWS_LAMBDA_FUNCTION_NAME: 'server-handler' }
    const dir = await load()

    expect(dir).toMatch(/meste-media$/)
    expect(dir).not.toBe('media')
  })
})

describe('the canonical site origin', () => {
  const original = { ...process.env }

  afterEach(() => {
    process.env = { ...original }
    vi.resetModules()
  })

  const read = async () => {
    vi.resetModules()
    const { getServerEnvironment } = await import('@/lib/env/server')
    return getServerEnvironment().NEXT_PUBLIC_SERVER_URL
  }

  const base = {
    DATABASE_URL: 'postgres://localhost/meste',
    PAYLOAD_SECRET: 'x'.repeat(32),
  }

  it('keeps a configured origin', async () => {
    process.env = { ...original, ...base, NEXT_PUBLIC_SERVER_URL: 'https://meste.example' }
    expect(await read()).toBe('https://meste.example')
  })

  /**
   * The defect that took every dynamic route down on deploy previews. Netlify
   * injects a variable with no value for the current context as an empty
   * string rather than omitting it, so `z.url()` rejected it before any default
   * could apply, and the whole config threw while loading.
   */
  it('survives the empty string Netlify injects', async () => {
    process.env = {
      ...original,
      ...base,
      DEPLOY_PRIME_URL: 'https://deploy-preview-15--meste.netlify.app',
      NEXT_PUBLIC_SERVER_URL: '',
    }

    expect(await read()).toBe('https://deploy-preview-15--meste.netlify.app')
  })

  it('prefers this deploy over the site origin', async () => {
    process.env = {
      ...original,
      ...base,
      DEPLOY_PRIME_URL: 'https://deploy-preview-15--meste.netlify.app',
      NEXT_PUBLIC_SERVER_URL: '   ',
      URL: 'https://meste.netlify.app',
    }

    expect(await read()).toBe('https://deploy-preview-15--meste.netlify.app')
  })

  it('falls back to the site origin, then to localhost', async () => {
    process.env = { ...original, ...base, NEXT_PUBLIC_SERVER_URL: '', URL: 'https://meste.app' }
    expect(await read()).toBe('https://meste.app')

    process.env = { ...original, ...base }
    delete process.env.NEXT_PUBLIC_SERVER_URL
    delete process.env.DEPLOY_PRIME_URL
    delete process.env.URL
    expect(await read()).toBe('http://localhost:3000')
  })
})
