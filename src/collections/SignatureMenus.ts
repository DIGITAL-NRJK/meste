import type { CollectionConfig } from 'payload'

import { createPreviewURL, localizedSlugPath } from '@/lib/preview/urls'

import { createEditorialCollection } from './fields/editorial'
import { seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'
import { withSlugRedirects } from './hooks/trackSlugRedirect'

export const SignatureMenus: CollectionConfig = withSlugRedirects(
  createEditorialCollection({
    slug: 'signature-menus',
    admin: {
      defaultColumns: ['title', 'availability', 'sortOrder', '_status'],
      description: 'Curated menu narratives and course groupings. Pricing is intentionally absent.',
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
        name: 'subtitle',
        type: 'text',
        localized: true,
      },
      {
        name: 'intro',
        type: 'richText',
        localized: true,
      },
      {
        name: 'welcome',
        type: 'richText',
        localized: true,
      },
      {
        name: 'courses',
        type: 'array',
        fields: [
          {
            name: 'section',
            type: 'select',
            options: [
              'bites',
              'starter',
              'fish',
              'meat',
              'main',
              'vegetarian-main',
              'sides',
              'dessert',
              'drinks',
            ],
            required: true,
          },
          {
            name: 'label',
            type: 'text',
            localized: true,
          },
          {
            name: 'items',
            type: 'relationship',
            hasMany: true,
            relationTo: 'menu-items',
          },
          {
            name: 'editorialNote',
            type: 'textarea',
            localized: true,
          },
        ],
        maxRows: 12,
      },
      {
        name: 'dietaryNotes',
        type: 'textarea',
        admin: {
          description: 'Public wording only after recipe and service practice verification.',
        },
        localized: true,
      },
      {
        name: 'featuredImage',
        type: 'upload',
        relationTo: 'media',
      },
      {
        name: 'gallery',
        type: 'upload',
        hasMany: true,
        relationTo: 'media',
      },
      {
        name: 'availability',
        type: 'select',
        defaultValue: 'on-request',
        options: [
          { label: 'On request', value: 'on-request' },
          { label: 'Seasonal', value: 'seasonal' },
          { label: 'Unavailable', value: 'unavailable' },
        ],
        required: true,
      },
      sortOrderField,
    ],
    preview: createPreviewURL(localizedSlugPath('/menus')),
  }),
  { en: '/menus', fr: '/menus' },
)
