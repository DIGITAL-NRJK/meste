import type { CollectionConfig } from 'payload'

import { createEditorialCollection } from './fields/editorial'
import { ctaFields, seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'

export const ReceptionFormats: CollectionConfig = createEditorialCollection({
  slug: 'reception-formats',
  admin: {
    defaultColumns: ['name', 'sortOrder', '_status'],
    description: 'Service formats. Guest ranges remain empty until verified.',
    useAsTitle: 'name',
  },
  fields: [
    seedKeyField,
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
    {
      name: 'description',
      type: 'textarea',
      localized: true,
      required: true,
    },
    {
      name: 'recommendedEventTypes',
      type: 'array',
      fields: [
        {
          name: 'eventType',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
      maxRows: 8,
    },
    {
      name: 'verifiedGuestRange',
      type: 'group',
      admin: {
        description: 'Optional. Enter only a range confirmed by MESTE.',
      },
      fields: [
        { name: 'minimum', type: 'number', min: 1 },
        { name: 'maximum', type: 'number', min: 1 },
      ],
    },
    {
      name: 'gallery',
      type: 'relationship',
      hasMany: true,
      relationTo: 'gallery',
    },
    {
      name: 'relatedMenus',
      type: 'relationship',
      hasMany: true,
      relationTo: 'signature-menus',
    },
    ctaFields,
    sortOrderField,
  ],
  includeSEO: false,
})
