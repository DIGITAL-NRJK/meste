import { z } from 'zod'

const blankToUndefined = (value: unknown) =>
  typeof value === 'string' && value.trim() === '' ? undefined : value

const optionalString = z.preprocess(blankToUndefined, z.string().trim().optional())

/**
 * Resolves the canonical site origin.
 *
 * Netlify injects a variable that has no value for the current deploy context
 * as an empty string rather than omitting it, and `z.url()` rejects `''` long
 * before `.default()` would ever run. That is what killed every dynamic route
 * on deploy previews: the schema threw while `payload.config.ts` was still
 * loading, so the function died before it could serve anything and every
 * request came back as a bare `Internal Server Error` — no page, no digest.
 *
 * Preview origins change on every build, so the value cannot live in the
 * Netlify UI. `netlify.toml` exports it for the build, which is what Next.js
 * inlines into the client bundle, but the function's own environment never
 * sees that export. Netlify does publish its own deploy URLs at runtime, and
 * they are the honest answer when nothing else is configured.
 */
const siteURL = z.preprocess((value) => {
  const candidates = [value, process.env.DEPLOY_PRIME_URL, process.env.URL]
  const configured = candidates.find(
    (candidate) => typeof candidate === 'string' && candidate.trim() !== '',
  )

  return typeof configured === 'string' ? configured.trim() : 'http://localhost:3000'
}, z.url())

const serverSchema = z
  .object({
    CONTEXT: optionalString,
    DATABASE_URL: z.string().trim().min(1, 'DATABASE_URL is required'),
    DATABASE_URL_UNPOOLED: optionalString.pipe(z.url().optional()),
    NEXT_PUBLIC_SERVER_URL: siteURL,
    PAYLOAD_SECRET: z.string().min(32, 'PAYLOAD_SECRET must contain at least 32 characters'),
    R2_ACCESS_KEY_ID: optionalString,
    R2_ACCOUNT_ID: optionalString,
    R2_BUCKET: optionalString,
    R2_ENDPOINT: optionalString.pipe(z.url().optional()),
    R2_PUBLIC_URL: optionalString.pipe(z.url().optional()),
    R2_SECRET_ACCESS_KEY: optionalString,
  })
  .superRefine((values, context) => {
    const r2Values = [
      values.R2_ACCESS_KEY_ID,
      values.R2_ACCOUNT_ID,
      values.R2_BUCKET,
      values.R2_ENDPOINT,
      values.R2_PUBLIC_URL,
      values.R2_SECRET_ACCESS_KEY,
    ]
    const configuredCount = r2Values.filter(Boolean).length

    if (configuredCount > 0 && configuredCount < r2Values.length) {
      context.addIssue({
        code: 'custom',
        message: 'Configure every R2 variable or leave all R2 variables empty for local storage',
        path: ['R2_BUCKET'],
      })
    }

    if (values.CONTEXT === 'production' && configuredCount !== r2Values.length) {
      context.addIssue({
        code: 'custom',
        message: 'R2 configuration is required in the Netlify production context',
        path: ['R2_BUCKET'],
      })
    }
  })

export type ServerEnvironment = z.infer<typeof serverSchema>

/**
 * The six variables that R2 needs. Listed once so that the validation rule
 * ("all of them or none"), the storage plugin and the upload directory can
 * never disagree about what "configured" means.
 */
export const r2Keys = [
  'R2_ACCESS_KEY_ID',
  'R2_ACCOUNT_ID',
  'R2_BUCKET',
  'R2_ENDPOINT',
  'R2_PUBLIC_URL',
  'R2_SECRET_ACCESS_KEY',
] as const

/**
 * Answers the R2 question from the raw environment, without validating
 * anything else.
 *
 * `getServerEnvironment` parses the whole schema and throws when the database
 * is not configured, which is right for the application and wrong for a module
 * that only wants to know where to put uploads. Reaching for the full parse
 * there once made importing the media taxonomy require a DATABASE_URL.
 */
export function hasR2Configured(environment: NodeJS.ProcessEnv = process.env): boolean {
  return r2Keys.every((key) => Boolean(environment[key]?.trim()))
}

let cachedEnvironment: ServerEnvironment | undefined

export function getServerEnvironment(): ServerEnvironment {
  cachedEnvironment ??= serverSchema.parse(process.env)
  return cachedEnvironment
}

export function hasR2Storage(environment: ServerEnvironment): boolean {
  return r2Keys.every((key) => Boolean(environment[key]))
}

export function resetServerEnvironmentForTests(): void {
  cachedEnvironment = undefined
}
