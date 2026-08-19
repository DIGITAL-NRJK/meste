import type { CollectionConfig } from 'payload'

import { permittedPublishedOrAuthenticated } from './access/roles'
import { createEditorialCollection } from './fields/editorial'
import { featuredField, sortOrderField } from './fields/shared'

const baseReferences = createEditorialCollection({
  slug: 'references',
  admin: {
    defaultColumns: ['clientName', 'eventType', 'permissionToDisplay', 'featured', '_status'],
    description:
      'Display-approved client work only. Permission is required independently of publish status.',
    useAsTitle: 'clientName',
  },
  fields: [
    { name: 'clientName', type: 'text', required: true },
    { name: 'logo', type: 'upload', relationTo: 'media' },
    { name: 'eventType', type: 'text', localized: true },
    { name: 'guestCount', type: 'number', min: 1 },
    { name: 'shortDescription', type: 'textarea', localized: true },
    { name: 'fullDescription', type: 'richText', localized: true },
    { name: 'photos', type: 'upload', hasMany: true, relationTo: 'media' },
    {
      name: 'permissionToDisplay',
      type: 'checkbox',
      admin: { description: 'Enable only with recorded client permission.' },
      defaultValue: false,
    },
    featuredField,
    sortOrderField,
  ],
})

export const References: CollectionConfig = {
  ...baseReferences,
  access: {
    ...baseReferences.access,
    read: permittedPublishedOrAuthenticated,
  },
}
