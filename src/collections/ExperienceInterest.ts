import type { CollectionConfig } from 'payload'

import { adminOnly, adminPanelOnly } from './access/roles'
import { localeField } from './fields/shared'

export const ExperienceInterest: CollectionConfig = {
  slug: 'experience-interest',
  access: {
    admin: adminPanelOnly,
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ['createdAt', 'name', 'email', 'locale', 'marketingConsent'],
    description: 'Private Experience interest list. Public submission is implemented in Phase 6.',
    group: 'Private operations',
    useAsTitle: 'email',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text' },
    localeField,
    { name: 'sourcePage', type: 'text', required: true },
    { name: 'marketingConsent', type: 'checkbox', defaultValue: false, required: true },
    { name: 'consentVersion', type: 'text', required: true },
    { name: 'consentRecordedAt', type: 'date', required: true },
    {
      name: 'deliveryStatus',
      type: 'select',
      defaultValue: 'not-attempted',
      options: ['not-attempted', 'queued', 'sent', 'failed'],
      required: true,
    },
  ],
}
