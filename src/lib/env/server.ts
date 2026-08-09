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

let cachedEnvironment: ServerEnvironment | undefined

export function getServerEnvironment(): ServerEnvironment {
  cachedEnvironment ??= serverSchema.parse(process.env)
  return cachedEnvironment
}

export function hasR2Storage(environment: ServerEnvironment): boolean {
  return Boolean(
    environment.R2_ACCESS_KEY_ID &&
    environment.R2_ACCOUNT_ID &&
    environment.R2_BUCKET &&
    environment.R2_ENDPOINT &&
    environment.R2_PUBLIC_URL &&
    environment.R2_SECRET_ACCESS_KEY,
  )
}

export function resetServerEnvironmentForTests(): void {
  cachedEnvironment = undefined
}
