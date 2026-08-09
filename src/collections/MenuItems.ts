import type { CollectionConfig } from 'payload'

import { createEditorialCollection } from './fields/editorial'
import { featuredField, seedKeyField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'

export const culinaryLevels = ['classic', 'signature', 'chef-creation'] as const

export const MenuItems: CollectionConfig = createEditorialCollection({
  slug: 'menu-items',
  admin: {
    defaultColumns: ['name', 'category', 'culinaryLevel', 'featured', '_status'],
    description: 'Dishes and drinks. Dietary and allergen data must be explicitly verified.',
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
      name: 'category',
      type: 'relationship',
      relationTo: 'menu-categories',
      required: true,
    },
    {
      name: 'culinaryLevel',
      type: 'select',
      options: culinaryLevels.map((level) => ({
        label: level.replaceAll('-', ' '),
        value: level,
      })),
      required: true,
    },
    {
      name: 'composition',
      type: 'array',
      fields: [
        {
          name: 'component',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
      maxRows: 16,
    },
    {
      name: 'description',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'featuredImage',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'gallery',
      type: 'upload',
      hasMany: true,
      relationTo: 'media',
    },
    {
      name: 'dietary',
      type: 'group',
      admin: {
        description:
          'Do not infer these values. Confirm recipes and cross-contamination policy first.',
      },
      fields: [
        {
          name: 'verifiedLabels',
          type: 'select',
          hasMany: true,
          options: ['gluten-free', 'dairy-free', 'nut-free', 'halal', 'vegetarian', 'vegan'],
        },
        {
          name: 'allergens',
          type: 'select',
          hasMany: true,
          options: [
            'celery',
            'crustaceans',
            'eggs',
            'fish',
            'gluten',
            'milk',
            'mustard',
            'nuts',
            'peanuts',
            'sesame',
            'shellfish',
            'soy',
          ],
        },
        { name: 'containsPork', type: 'checkbox', defaultValue: false },
        { name: 'vegetarian', type: 'checkbox', defaultValue: false },
        { name: 'vegan', type: 'checkbox', defaultValue: false },
        {
          name: 'verificationNote',
          type: 'textarea',
          admin: { description: 'Internal evidence/source for dietary and allergen labels.' },
        },
      ],
    },
    {
      name: 'spiceLevel',
      type: 'select',
      options: ['mild', 'medium', 'hot'],
    },
    featuredField,
    sortOrderField,
  ],
})
