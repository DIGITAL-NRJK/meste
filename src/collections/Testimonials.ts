import type { CollectionConfig } from 'payload'

import { permittedPublishedOrAuthenticated } from './access/roles'
import { createEditorialCollection } from './fields/editorial'
import { featuredField, sortOrderField } from './fields/shared'

const baseTestimonials = createEditorialCollection({
  slug: 'testimonials',
  admin: {
    defaultColumns: ['name', 'company', 'permissionToDisplay', 'featured', '_status'],
    description: 'Real testimonials only. Never publish without explicit display permission.',
    useAsTitle: 'name',
  },
  fields: [
    { name: 'name', type: 'text', required: true },
    { name: 'role', type: 'text', localized: true },
    { name: 'company', type: 'text', localized: true },
    { name: 'quote', type: 'textarea', localized: true, required: true },
    { name: 'photo', type: 'upload', relationTo: 'media' },
    {
      name: 'permissionToDisplay',
      type: 'checkbox',
      admin: { description: 'Enable only with recorded permission from the quoted person.' },
      defaultValue: false,
    },
    featuredField,
    sortOrderField,
  ],
})

export const Testimonials: CollectionConfig = {
  ...baseTestimonials,
  access: {
    ...baseTestimonials.access,
    read: permittedPublishedOrAuthenticated,
  },
}
