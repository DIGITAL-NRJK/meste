import type { GlobalConfig } from 'payload'

import { createEditorialGlobal } from '@/collections/fields/editorial'

export const SiteSettings: GlobalConfig = createEditorialGlobal({
  slug: 'site-settings',
  admin: {
    description: 'Safe public site identity and feature visibility. Secrets never belong here.',
  },
  fields: [
    {
      name: 'siteName',
      type: 'text',
      defaultValue: "MAMA EMMA Service Traiteur d'Excellence",
      required: true,
    },
    { name: 'shortName', type: 'text', defaultValue: 'MESTE', required: true },
    {
      name: 'institutionalSignature',
      type: 'text',
      defaultValue: 'Taste · Elegance · Hospitality',
      localized: true,
      required: true,
    },
    {
      name: 'brandPhilosophy',
      type: 'text',
      defaultValue: 'Familiar enough to comfort. Different enough to remember.',
      localized: true,
    },
    {
      name: 'location',
      type: 'group',
      fields: [
        { name: 'city', type: 'text', defaultValue: 'Accra', required: true },
        { name: 'country', type: 'text', defaultValue: 'Ghana', required: true },
        { name: 'timezone', type: 'text', defaultValue: 'Africa/Accra', required: true },
      ],
    },
    {
      name: 'features',
      type: 'group',
      fields: [
        { name: 'showJournal', type: 'checkbox', defaultValue: false },
        { name: 'showEventsIndex', type: 'checkbox', defaultValue: false },
        { name: 'showTestimonials', type: 'checkbox', defaultValue: false },
      ],
    },
  ],
  includeLocaleReadiness: false,
  label: 'Site settings',
})
