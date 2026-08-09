import type { GlobalConfig } from 'payload'

import { createEditorialGlobal } from '@/collections/fields/editorial'
import { createPreviewURL } from '@/lib/preview/urls'

export const Footer: GlobalConfig = createEditorialGlobal({
  slug: 'footer',
  admin: {
    description: 'Localized footer lines and controlled links. Empty contact values remain hidden.',
  },
  fields: [
    {
      name: 'statement',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'links',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', localized: true, required: true },
        {
          name: 'route',
          type: 'select',
          options: [
            'about',
            'contact',
            'experience',
            'fresh',
            'gallery',
            'menus',
            'quote',
            'services',
          ],
          required: true,
        },
      ],
      maxRows: 10,
    },
    {
      name: 'legalLinks',
      type: 'array',
      admin: {
        description: 'Add only after approved legal pages exist.',
      },
      fields: [
        { name: 'label', type: 'text', localized: true, required: true },
        { name: 'path', type: 'text', required: true },
      ],
      maxRows: 4,
    },
    {
      name: 'copyrightLine',
      type: 'text',
      localized: true,
    },
  ],
  label: 'Footer',
  preview: createPreviewURL(({ locale }) => `/${locale}`),
})
