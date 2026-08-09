import type { CollectionConfig } from 'payload'

import { createEditorialCollection } from './fields/editorial'
import { seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'

export const menuFamilies = [
  'cocktail-classics',
  'chef-cocktail-creations',
  'starters',
  'fish-seafood',
  'poultry',
  'meat',
  'vegetable-table',
  'sides',
  'desserts',
] as const

export const MenuCategories: CollectionConfig = createEditorialCollection({
  slug: 'menu-categories',
  admin: {
    defaultColumns: ['name', 'family', 'sortOrder', '_status'],
    description: 'Editorial groupings and filter keys for individual menu items.',
    useAsTitle: 'name',
  },
  fields: [
    seedKeyField,
    {
      name: 'name',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
    {
      name: 'family',
      type: 'select',
      options: menuFamilies.map((family) => ({
        label: family.replaceAll('-', ' '),
        value: family,
      })),
      required: true,
      unique: true,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    sortOrderField,
  ],
  includeSEO: false,
})
