import type { CollectionConfig } from 'payload'

import { mediaCategories } from './Media'
import { createEditorialCollection } from './fields/editorial'
import { sortOrderField } from './fields/shared'

export const Gallery: CollectionConfig = createEditorialCollection({
  slug: 'gallery',
  admin: {
    defaultColumns: ['alt', 'category', 'sortOrder', '_status'],
    description: 'Curated gallery entries with localized accessibility and editorial metadata.',
    useAsTitle: 'alt',
  },
  fields: [
    { name: 'image', type: 'upload', relationTo: 'media', required: true },
    { name: 'alt', type: 'text', localized: true, required: true },
    { name: 'caption', type: 'textarea', localized: true },
    {
      name: 'category',
      type: 'select',
      options: mediaCategories.map((category) => ({
        label: category.replaceAll('-', ' '),
        value: category,
      })),
      required: true,
    },
    { name: 'event', type: 'relationship', relationTo: 'events' },
    { name: 'service', type: 'relationship', relationTo: 'services' },
    sortOrderField,
  ],
  includeSEO: false,
})
