import type { CollectionConfig } from 'payload'

import { adminOnly, adminPanelOnly } from './access/roles'
import { localeField } from './fields/shared'

export const Leads: CollectionConfig = {
  slug: 'leads',
  access: {
    admin: adminPanelOnly,
    create: adminOnly,
    delete: adminOnly,
    read: adminOnly,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ['createdAt', 'name', 'eventDate', 'guestCount', 'status'],
    description:
      'Private enquiries. Public submission is added through a validated server service in Phase 6.',
    group: 'Private operations',
    useAsTitle: 'name',
  },
  fields: [
    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: ['new', 'contacted', 'proposal-sent', 'won', 'lost'],
      required: true,
    },
    { name: 'name', type: 'text', required: true },
    { name: 'company', type: 'text' },
    { name: 'email', type: 'email', required: true },
    { name: 'phone', type: 'text', required: true },
    { name: 'eventType', type: 'text' },
    { name: 'eventDate', type: 'date' },
    { name: 'location', type: 'text' },
    { name: 'guestCount', type: 'number', min: 1 },
    { name: 'receptionFormat', type: 'relationship', relationTo: 'reception-formats' },
    { name: 'services', type: 'relationship', hasMany: true, relationTo: 'services' },
    { name: 'menuPreferences', type: 'textarea' },
    { name: 'dietaryRequirements', type: 'textarea' },
    { name: 'allergens', type: 'textarea' },
    { name: 'budget', type: 'text' },
    { name: 'notes', type: 'textarea' },
    localeField,
    { name: 'sourcePage', type: 'text', required: true },
    {
      name: 'consent',
      type: 'group',
      fields: [
        { name: 'accepted', type: 'checkbox', required: true },
        { name: 'version', type: 'text', required: true },
        { name: 'acceptedAt', type: 'date', required: true },
      ],
    },
    {
      name: 'delivery',
      type: 'group',
      fields: [
        {
          name: 'status',
          type: 'select',
          defaultValue: 'not-attempted',
          options: ['not-attempted', 'queued', 'sent', 'failed'],
          required: true,
        },
        { name: 'lastAttemptAt', type: 'date' },
        { name: 'failureCode', type: 'text' },
      ],
    },
    {
      name: 'internalNotes',
      type: 'textarea',
      admin: { description: 'Private operational notes. Never returned to public clients.' },
    },
  ],
}
