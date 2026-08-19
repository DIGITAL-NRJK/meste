import type { CollectionConfig } from 'payload'

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
    staticDir: 'media',
  },
}
