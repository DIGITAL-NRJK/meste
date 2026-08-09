import type { GlobalConfig } from 'payload'

import { adminFieldAccess } from '@/collections/access/roles'
import { createEditorialGlobal } from '@/collections/fields/editorial'

export const SEOSettings: GlobalConfig = createEditorialGlobal({
  slug: 'seo-settings',
  admin: {
    description:
      'Search defaults and truthful organization metadata. Do not add unverified claims.',
  },
  fields: [
    { name: 'titleTemplate', type: 'text', localized: true, defaultValue: '%s — MESTE' },
    { name: 'defaultDescription', type: 'textarea', localized: true },
    { name: 'defaultSocialImage', type: 'upload', relationTo: 'media' },
    {
      name: 'organization',
      type: 'group',
      fields: [
        { name: 'legalName', type: 'text' },
        {
          name: 'publicName',
          type: 'text',
          defaultValue: "MAMA EMMA Service Traiteur d'Excellence",
        },
        { name: 'description', type: 'textarea', localized: true },
        { name: 'logo', type: 'upload', relationTo: 'media' },
      ],
    },
    {
      name: 'robots',
      type: 'group',
      fields: [
        { name: 'allowIndexing', type: 'checkbox', defaultValue: true },
        { name: 'allowFollowing', type: 'checkbox', defaultValue: true },
      ],
    },
    {
      name: 'verification',
      type: 'group',
      access: {
        read: adminFieldAccess,
        update: adminFieldAccess,
      },
      admin: {
        description: 'Administrator-only verification values; these are not application secrets.',
      },
      fields: [
        { name: 'google', type: 'text' },
        { name: 'bing', type: 'text' },
      ],
    },
  ],
  includeLocaleReadiness: false,
  label: 'SEO settings',
})
