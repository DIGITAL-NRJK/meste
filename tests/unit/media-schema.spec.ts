import type { CollectionConfig, Config } from 'payload'
import { afterEach, describe, expect, it } from 'vitest'

import { Media } from '@/collections/Media'
import { resetServerEnvironmentForTests } from '@/lib/env/server'
import { createR2StoragePlugin } from '@/lib/storage/r2'

const original = { ...process.env }

const r2Keys = [
  'R2_ACCESS_KEY_ID',
  'R2_ACCOUNT_ID',
  'R2_BUCKET',
  'R2_ENDPOINT',
  'R2_PUBLIC_URL',
  'R2_SECRET_ACCESS_KEY',
] as const

const r2Environment = {
  DATABASE_URL: 'postgres://localhost/meste',
  PAYLOAD_SECRET: 'x'.repeat(32),
  R2_ACCESS_KEY_ID: 'key',
  R2_ACCOUNT_ID: 'account',
  R2_BUCKET: 'bucket',
  R2_ENDPOINT: 'https://example.com',
  R2_PUBLIC_URL: 'https://media.example.com',
  R2_SECRET_ACCESS_KEY: 'secret',
}

/**
 * Field names the media collection ends up with, plugin applied or not.
 *
 * The modules are imported once, at the top of the file: pulling in the AWS
 * SDK costs seconds, and `vi.resetModules()` between the two configurations
 * paid that cost twice. Only the cached environment needs clearing, which is
 * what `resetServerEnvironmentForTests` is for.
 */
async function mediaFieldNames(withR2: boolean): Promise<string[]> {
  process.env = { ...original, ...r2Environment }

  if (!withR2) {
    for (const key of r2Keys) {
      delete process.env[key]
    }
  }

  resetServerEnvironmentForTests()

  const plugin = createR2StoragePlugin()
  const base = { collections: [Media] } as unknown as Config
  const applied = plugin ? await plugin(base) : base
  const media = (applied.collections as CollectionConfig[]).find(
    (collection) => collection.slug === 'media',
  )

  return (media?.fields ?? [])
    .flatMap((field) => ('name' in field && field.name ? [field.name] : []))
    .sort()
}

afterEach(() => {
  process.env = { ...original }
  resetServerEnvironmentForTests()
})

/**
 * Names an upload collection always carries, plugin or no plugin: Payload's
 * own upload support creates these columns from `upload.imageSizes`, so the
 * storage plugin re-declaring them adds nothing the database lacks.
 */
const nativeUploadFields = ['sizes', 'url']

describe('the media schema does not depend on the environment', () => {
  /**
   * The defect that made images unselectable in the admin. The storage plugin
   * contributes a `prefix` column, and it only loads when R2 is configured —
   * which the machine generating migrations never is. Production loaded the
   * plugin, queried the column, and Postgres answered `42703`.
   *
   * Declaring the field on the collection means every environment agrees on
   * the schema, so a migration generated without credentials still describes
   * the database production actually runs against. This fails again the day
   * the plugin starts contributing a column nobody migrated.
   */
  it('lets the plugin add nothing the database would not already have', async () => {
    const withR2 = await mediaFieldNames(true)
    const withoutR2 = await mediaFieldNames(false)
    const added = withR2.filter((name) => !withoutR2.includes(name))

    expect(added.filter((name) => !nativeUploadFields.includes(name))).toEqual([])
  })

  it('carries the prefix column the storage plugin needs', async () => {
    expect(await mediaFieldNames(false)).toContain('prefix')
  })

  /** The plugin merges into an existing field rather than adding a second. */
  it('declares prefix exactly once when the plugin is loaded', async () => {
    const names = await mediaFieldNames(true)

    expect(names.filter((name) => name === 'prefix')).toHaveLength(1)
  })
})
