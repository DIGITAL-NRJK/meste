import os from 'node:os'
import path from 'node:path'
import type { CollectionConfig } from 'payload'

import { hasR2Configured } from '@/lib/env/server'

import { authenticated } from './access/roles'

export const mediaCategories = [
  'food',
  'cocktail',
  'buffet',
  'table-service',
  'mama-emma-fresh',
  'events',
  'team',
  'brand',
  'experience',
  'behind-the-scenes',
  'corporate',
  'institutional',
  'celebrations',
] as const

/**
 * Where Payload writes uploaded files.
 *
 * With R2 configured the storage plugin takes over and this directory is never
 * touched. Without it — deploy previews, local development — Payload falls back
 * to disk and makes sure the directory exists while the config is still
 * loading. A serverless filesystem is read-only everywhere except the system
 * temporary directory, so on Lambda that check throws before anything is
 * served, and the whole function dies with a bare `Internal Server Error`: no
 * page, no digest, every dynamic route at once.
 *
 * The R2 question is answered from the raw environment rather than the parsed
 * one: this module is imported for its taxonomy by code that has no database,
 * and validating the whole environment here would make a unit test require a
 * DATABASE_URL to read a list of category names.
 *
 * Pointing it at a writable path keeps the function alive. Files written there
 * do not survive the instance, which is the right trade for an environment
 * whose only job is to let someone look at the admin — and the wrong one for
 * production, which is exactly why production has R2.
 */
function uploadDirectory(): string {
  if (hasR2Configured()) {
    return 'media'
  }

  // Set by AWS Lambda, which is what Netlify Functions run on.
  return process.env.AWS_LAMBDA_FUNCTION_NAME ? path.join(os.tmpdir(), 'meste-media') : 'media'
}

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    create: authenticated,
    delete: authenticated,
    read: () => true,
    update: authenticated,
  },
  admin: {
    defaultColumns: ['filename', 'alt', 'category', 'updatedAt'],
    description: 'Approved image library with accessible metadata and responsive derivatives.',
    group: 'Content',
    useAsTitle: 'alt',
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        description:
          'Describe the image purpose and visible content; do not begin with “image of”.',
      },
      localized: true,
      required: true,
    },
    {
      name: 'caption',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'category',
      type: 'select',
      options: mediaCategories.map((category) => ({
        label: category.replaceAll('-', ' '),
        value: category,
      })),
      required: true,
    },
    {
      name: 'credit',
      type: 'text',
      admin: {
        description: 'Photographer/source credit and rights note when required.',
      },
    },
  ],
  upload: {
    adminThumbnail: 'thumbnail',
    crop: true,
    displayPreview: true,
    focalPoint: true,
    imageSizes: [
      { name: 'thumbnail', width: 400, withoutEnlargement: true },
      { name: 'card', width: 720, withoutEnlargement: true },
      { name: 'tablet', width: 1_200, withoutEnlargement: true },
      { name: 'desktop', width: 1_600, withoutEnlargement: true },
      { name: 'hero', width: 2_400, withoutEnlargement: true },
      { name: 'og', width: 1_200, height: 630, fit: 'cover', withoutEnlargement: true },
    ],
    mimeTypes: ['image/avif', 'image/jpeg', 'image/png', 'image/webp'],
    pasteURL: false,
    staticDir: uploadDirectory(),
  },
}
