import type { Block } from 'payload'

import { headingFields, restrainedToneField } from './shared'

export const FullBleedImageBlock: Block = {
  slug: 'fullBleedImage',
  dbName: 'full_bleed',
  fields: [
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'caption',
      type: 'text',
      localized: true,
    },
    {
      name: 'height',
      type: 'select',
      defaultValue: 'cinematic',
      options: ['cinematic', 'viewport', 'compact'],
      required: true,
    },
  ],
}

export const GalleryPreviewBlock: Block = {
  slug: 'galleryPreview',
  dbName: 'gallery_preview',
  fields: [
    ...headingFields,
    {
      name: 'items',
      type: 'relationship',
      hasMany: true,
      maxRows: 8,
      relationTo: 'gallery',
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'editorial-grid',
      options: ['editorial-grid', 'filmstrip'],
      required: true,
    },
    restrainedToneField,
  ],
}

export const ReferencesBlock: Block = {
  slug: 'references',
  dbName: 'references_block',
  fields: [
    ...headingFields,
    {
      name: 'references',
      type: 'relationship',
      hasMany: true,
      maxRows: 8,
      relationTo: 'references',
    },
    {
      name: 'presentation',
      type: 'select',
      defaultValue: 'editorial',
      options: ['editorial', 'quiet-list'],
      required: true,
    },
  ],
}
