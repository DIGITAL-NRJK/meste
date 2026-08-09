import { s3Storage } from '@payloadcms/storage-s3'

import { getServerEnvironment, hasR2Storage } from '@/lib/env/server'

function joinPublicURL(baseURL: string, key: string): string {
  return `${baseURL.replace(/\/$/, '')}/${key.replace(/^\//, '')}`
}

export function createR2StoragePlugin() {
  const environment = getServerEnvironment()

  if (!hasR2Storage(environment)) {
    return undefined
  }

  return s3Storage({
    bucket: environment.R2_BUCKET!,
    collections: {
      media: {
        disablePayloadAccessControl: true,
        generateFileURL: ({ filename, prefix }) => {
          const key = prefix ? `${prefix}/${filename}` : filename
          return joinPublicURL(environment.R2_PUBLIC_URL!, key)
        },
        prefix: 'media',
      },
    },
    config: {
      credentials: {
        accessKeyId: environment.R2_ACCESS_KEY_ID!,
        secretAccessKey: environment.R2_SECRET_ACCESS_KEY!,
      },
      endpoint: environment.R2_ENDPOINT!,
      forcePathStyle: true,
      region: 'auto',
    },
  })
}
