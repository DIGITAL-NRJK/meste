import type { CollectionConfig } from 'payload'

import { createEditorialCollection } from './fields/editorial'
import { ctaFields, seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'
import { withSlugRedirects } from './hooks/trackSlugRedirect'
import { localizedSlugPath, createPreviewURL } from '@/lib/preview/urls'

export const serviceCategories = [
  'celebrations',
  'corporate',
  'institutional-diplomatic',
  'bespoke',
] as const

export const Services: CollectionConfig = withSlugRedirects(
  createEditorialCollection({
    slug: 'services',
    admin: {
      defaultColumns: ['title', 'category', 'sortOrder', '_status'],
      description: 'MESTE service worlds and their approved supporting content.',
      useAsTitle: 'title',
    },
    fields: [
      seedKeyField,
      {
        name: 'title',
        type: 'text',
        localized: true,
        required: true,
      },
      slugField(),
      {
        name: 'category',
        type: 'select',
        options: serviceCategories.map((category) => ({
          label: category.replaceAll('-', ' '),
          value: category,
        })),
        required: true,
        unique: true,
      },
      {
        name: 'positioning',
        type: 'textarea',
        localized: true,
        required: true,
      },
      {
        name: 'story',
        type: 'richText',
        localized: true,
      },
      {
        name: 'formats',
        type: 'relationship',
        hasMany: true,
        relationTo: 'reception-formats',
      },
      {
        name: 'menus',
        type: 'relationship',
        hasMany: true,
        relationTo: 'signature-menus',
      },
      {
        name: 'gallery',
        type: 'relationship',
        hasMany: true,
        relationTo: 'gallery',
      },
      {
        name: 'references',
        type: 'relationship',
        hasMany: true,
        relationTo: 'references',
      },
      ctaFields,
      sortOrderField,
    ],
    preview: createPreviewURL(localizedSlugPath('/services')),
  }),
  { en: '/services', fr: '/services' },
)
