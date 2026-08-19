import type { CollectionConfig } from 'payload'

import { createPreviewURL } from '@/lib/preview/urls'

import { createEditorialCollection } from './fields/editorial'
import { seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'

export const FreshProducts: CollectionConfig = createEditorialCollection({
  slug: 'fresh-products',
  admin: {
    defaultColumns: ['name', 'availability', 'sortOrder', '_status'],
    description: 'Mama Emma Fresh range. Organic, nutrition, and legal claims require approval.',
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
      name: 'shortDescription',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'description',
      type: 'richText',
      localized: true,
    },
    {
      name: 'ingredients',
      type: 'array',
      fields: [
        {
          name: 'ingredient',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
      maxRows: 24,
    },
    {
      name: 'canImage',
      type: 'upload',
      admin: {
        description: 'Use only official approved can photography or artwork.',
      },
      relationTo: 'media',
    },
    {
      name: 'accentColor',
      type: 'select',
      options: [
        { label: 'Pineapple gold', value: 'pineapple-gold' },
        { label: 'Bissap burgundy', value: 'bissap-burgundy' },
        { label: 'Ginger amber', value: 'ginger-amber' },
        { label: 'Beetroot ruby', value: 'beetroot-ruby' },
        { label: 'Orange citrus', value: 'orange-citrus' },
        { label: 'Watermelon coral', value: 'watermelon-coral' },
      ],
      required: true,
    },
    {
      name: 'availableSizes',
      type: 'array',
      admin: {
        description: 'Add only package sizes currently confirmed by the business.',
      },
      fields: [{ name: 'size', type: 'text', required: true }],
      maxRows: 8,
    },
    {
      name: 'availability',
      type: 'select',
      defaultValue: 'to-confirm',
      options: ['available', 'seasonal', 'unavailable', 'to-confirm'],
      required: true,
    },
    {
      name: 'nutritionPlaceholder',
      type: 'textarea',
      admin: {
        description: 'Internal placeholder only; not a verified nutrition claim.',
      },
      localized: true,
    },
    {
      name: 'legalPlaceholder',
      type: 'textarea',
      admin: {
        description: 'Internal placeholder pending approved product/legal wording.',
      },
      localized: true,
    },
    {
      name: 'gallery',
      type: 'upload',
      hasMany: true,
      relationTo: 'media',
    },
    sortOrderField,
  ],
  preview: createPreviewURL(({ locale }) => `/${locale}/mama-emma-fresh`),
})
