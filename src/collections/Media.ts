import type { CollectionConfig } from 'payload'

import { uploadDirectory } from '@/lib/storage/uploads'

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
    /**
     * Declared here so the database schema never depends on the environment.
     *
     * The R2 storage plugin adds this field, but only when R2 is configured —
     * and migrations are generated on a machine that has no R2 credentials.
     * The column was therefore missing everywhere while production, which does
     * load the plugin, queried it on every media listing: `column media.prefix
     * does not exist`, and no image could be chosen in the admin.
     *
     * `getFields` in `@payloadcms/plugin-cloud-storage` looks for an existing
     * `prefix` field and merges its own definition into it rather than adding a
     * second one, so declaring it changes nothing about how the plugin behaves.
     * The default value still comes from the plugin's `prefix` option.
     */
    {
      name: 'prefix',
      type: 'text',
      admin: {
        hidden: true,
        readOnly: true,
      },
    },
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
