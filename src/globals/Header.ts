import type { GlobalConfig } from 'payload'

import { createEditorialGlobal } from '@/collections/fields/editorial'
import { createPreviewURL } from '@/lib/preview/urls'

const routeOptions = [
  { label: 'About', value: 'about' },
  { label: 'Experience', value: 'experience' },
  { label: 'Fresh', value: 'fresh' },
  { label: 'Gallery', value: 'gallery' },
  { label: 'Menus', value: 'menus' },
  { label: 'Quote', value: 'quote' },
  { label: 'Services', value: 'services' },
]

export const Header: GlobalConfig = createEditorialGlobal({
  slug: 'header',
  admin: {
    description: 'Localized primary navigation using controlled application routes.',
  },
  fields: [
    {
      name: 'navigation',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', localized: true, required: true },
        { name: 'route', type: 'select', options: routeOptions, required: true },
      ],
      maxRows: 7,
      required: true,
    },
    {
      name: 'primaryAction',
      type: 'group',
      fields: [
        { name: 'label', type: 'text', localized: true, required: true },
        {
          name: 'route',
          type: 'select',
          defaultValue: 'quote',
          options: routeOptions,
          required: true,
        },
      ],
    },
    {
      name: 'languageLabel',
      type: 'text',
      defaultValue: 'Language',
      localized: true,
      required: true,
    },
  ],
  label: 'Header',
  preview: createPreviewURL(({ locale }) => `/${locale}`),
})
