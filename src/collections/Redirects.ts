import type { CollectionConfig } from 'payload'

import { adminOnly } from './access/roles'

export const Redirects: CollectionConfig = {
  slug: 'redirects',
  access: {
    create: adminOnly,
    delete: adminOnly,
    read: () => true,
    update: adminOnly,
  },
  admin: {
    defaultColumns: ['fromPath', 'toPath', 'permanent', 'updatedAt'],
    description: 'Redirect registry created when published localized slugs change.',
    group: 'Administration',
    useAsTitle: 'fromPath',
  },
  fields: [
    {
      name: 'fromPath',
      type: 'text',
      index: true,
      required: true,
      unique: true,
    },
    { name: 'toPath', type: 'text', required: true },
    { name: 'permanent', type: 'checkbox', defaultValue: true, required: true },
    { name: 'sourceCollection', type: 'text', required: true },
    { name: 'sourceDocumentID', type: 'text', required: true },
    {
      name: 'locale',
      type: 'select',
      options: ['en', 'fr'],
      required: true,
    },
  ],
}
