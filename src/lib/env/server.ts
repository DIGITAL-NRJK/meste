import { z } from 'zod'

const optionalString = z.preprocess(
  (value) => (typeof value === 'string' && value.trim() === '' ? undefined : value),
  z.string().trim().optional(),
)

const serverSchema = z
  .object({
    CONTEXT: optionalString,
    DATABASE_URL: z.string().trim().min(1, 'DATABASE_URL is required'),
    DATABASE_URL_UNPOOLED: optionalString.pipe(z.url().optional()),
    NEXT_PUBLIC_SERVER_URL: z.url().default('http://localhost:3000'),
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
