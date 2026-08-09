import type { CollectionConfig } from 'payload'

import { createPreviewURL } from '@/lib/preview/urls'

import { createEditorialCollection } from './fields/editorial'
import { seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'
import { withSlugRedirects } from './hooks/trackSlugRedirect'

export const Events: CollectionConfig = withSlugRedirects(
  createEditorialCollection({
    slug: 'events',
    admin: {
      defaultColumns: ['title', 'status', 'date', '_status'],
      description:
        'Event architecture for future real editions. Do not invent dates, venues, capacity, or price.',
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
        name: 'status',
        type: 'select',
        defaultValue: 'concept',
        options: ['concept', 'coming-soon', 'registration-open', 'sold-out', 'completed'],
        required: true,
      },
      { name: 'theme', type: 'text', localized: true },
      { name: 'shortDescription', type: 'textarea', localized: true },
      { name: 'story', type: 'richText', localized: true },
      {
        name: 'schedule',
        type: 'group',
        admin: {
          description: 'Leave empty for concept-only entries.',
        },
        fields: [
          { name: 'date', type: 'date', admin: { date: { pickerAppearance: 'dayAndTime' } } },
          { name: 'venue', type: 'text', localized: true },
          { name: 'capacity', type: 'number', min: 1 },
          { name: 'price', type: 'number', min: 0 },
          { name: 'currency', type: 'select', options: ['GHS', 'USD', 'EUR'] },
        ],
      },
      {
        name: 'menu',
        type: 'relationship',
        relationTo: 'signature-menus',
      },
      { name: 'entertainment', type: 'textarea', localized: true },
      { name: 'dressCode', type: 'text', localized: true },
      { name: 'featuredImage', type: 'upload', relationTo: 'media' },
      { name: 'gallery', type: 'upload', hasMany: true, relationTo: 'media' },
      {
        name: 'registration',
        type: 'group',
        fields: [
          {
            name: 'mode',
            type: 'select',
            defaultValue: 'interest-only',
            options: ['interest-only', 'external-link', 'internal-registration'],
            required: true,
          },
          { name: 'externalURL', type: 'text' },
        ],
      },
      sortOrderField,
    ],
    preview: createPreviewURL(({ doc, locale }) => {
      const slug = typeof doc.slug === 'string' ? doc.slug : ''
      const segment = locale === 'fr' ? 'evenements' : 'events'
      return `/${locale}/${segment}/${slug}`
    }),
  }),
  { en: '/events', fr: '/evenements' },
)
