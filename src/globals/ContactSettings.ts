import type { GlobalConfig } from 'payload'

import { createEditorialGlobal } from '@/collections/fields/editorial'

export const ContactSettings: GlobalConfig = createEditorialGlobal({
  slug: 'contact-settings',
  admin: {
    description: 'Verified public contact details. Empty values are never rendered.',
  },
  fields: [
    {
      name: 'phone',
      type: 'text',
      admin: {
        description: 'Stored as supplied until international format is confirmed.',
      },
      defaultValue: '0537464516',
    },
    { name: 'whatsAppNumber', type: 'text' },
    { name: 'whatsAppMessage', type: 'textarea', localized: true },
    { name: 'publicEmail', type: 'email' },
    {
      name: 'address',
      type: 'group',
      fields: [
        { name: 'street', type: 'text' },
        { name: 'locality', type: 'text' },
        { name: 'region', type: 'text' },
        { name: 'postalCode', type: 'text' },
        { name: 'country', type: 'text', defaultValue: 'Ghana' },
      ],
    },
    { name: 'serviceArea', type: 'textarea', localized: true },
    {
      name: 'hours',
      type: 'array',
      fields: [
        { name: 'label', type: 'text', localized: true, required: true },
        { name: 'value', type: 'text', localized: true, required: true },
      ],
      maxRows: 7,
    },
    {
      name: 'socialLinks',
      type: 'array',
      fields: [
        {
          name: 'platform',
          type: 'select',
          options: ['facebook', 'instagram', 'linkedin', 'tiktok', 'youtube'],
          required: true,
        },
        { name: 'url', type: 'text', required: true },
      ],
      maxRows: 5,
    },
  ],
  includeLocaleReadiness: false,
  label: 'Contact settings',
})
