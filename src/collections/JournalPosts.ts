import type { CollectionConfig } from 'payload'

import { createPreviewURL, localizedSlugPath } from '@/lib/preview/urls'

import { createEditorialCollection } from './fields/editorial'
import { featuredField, sortOrderField } from './fields/shared'
import { slugField } from './fields/slug'
import { withSlugRedirects } from './hooks/trackSlugRedirect'

export const JournalPosts: CollectionConfig = withSlugRedirects(
  createEditorialCollection({
    slug: 'journal-posts',
    admin: {
      defaultColumns: ['title', 'publishedAt', 'featured', '_status'],
      description:
        'Journal capability remains absent from navigation until real content is published.',
      useAsTitle: 'title',
    },
    fields: [
      { name: 'title', type: 'text', localized: true, required: true },
      slugField(),
      { name: 'excerpt', type: 'textarea', localized: true, required: true },
      { name: 'body', type: 'richText', localized: true, required: true },
      { name: 'authorName', type: 'text' },
      { name: 'publishedAt', type: 'date', admin: { position: 'sidebar' } },
      { name: 'featuredImage', type: 'upload', relationTo: 'media' },
      {
        name: 'categories',
        type: 'select',
        hasMany: true,
        options: ['heritage', 'hospitality', 'menus', 'fresh', 'experience', 'behind-the-scenes'],
      },
      featuredField,
      sortOrderField,
    ],
    preview: createPreviewURL(localizedSlugPath('/journal')),
  }),
  { en: '/journal', fr: '/journal' },
)
