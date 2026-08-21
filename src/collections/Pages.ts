import type { CollectionConfig } from 'payload'

import { controlledBlocks } from '@/blocks/definitions'
import { createEditorialCollection } from '@/collections/fields/editorial'
import { seedKeyField } from '@/collections/fields/shared'
import { slugField } from '@/collections/fields/slug'
import { createPreviewURL } from '@/lib/preview/urls'
import {
  aboutStoryField,
  contactChannelsField,
  pageEditorialField,
} from '@/collections/fields/pageContent'

const preview = createPreviewURL(({ doc, locale }) => {
  const kind = typeof doc.pageKind === 'string' ? doc.pageKind : 'editorial'
  const slug = typeof doc.slug === 'string' ? doc.slug : ''
  const fixedPaths: Record<string, Record<'en' | 'fr', string>> = {
    about: { en: '/en/about', fr: '/fr/a-propos' },
    contact: { en: '/en/contact', fr: '/fr/contact' },
    experience: {
      en: '/en/the-mama-emma-experience',
      fr: '/fr/the-mama-emma-experience',
    },
    fresh: { en: '/en/mama-emma-fresh', fr: '/fr/mama-emma-fresh' },
    gallery: { en: '/en/gallery', fr: '/fr/galerie' },
    menus: { en: '/en/menus', fr: '/fr/menus' },
    services: { en: '/en/services', fr: '/fr/services' },
  }

  return fixedPaths[kind]?.[locale] ?? `/${locale}/${slug}`
})

export const Pages: CollectionConfig = createEditorialCollection({
  slug: 'pages',
  admin: {
    defaultColumns: ['title', 'pageKind', 'slug', '_status', 'updatedAt'],
    description: 'Controlled editorial pages; blocks cannot introduce arbitrary HTML or styling.',
    useAsTitle: 'title',
  },
  fields: [
    seedKeyField,
    {
      name: 'title',
      type: 'text',
      localized: true,
      required: true,
    },
    slugField(),
    {
      name: 'pageKind',
      type: 'select',
      options: [
        { label: 'About', value: 'about' },
        { label: 'Contact framing', value: 'contact' },
        { label: 'Editorial', value: 'editorial' },
        { label: 'Experience concept', value: 'experience' },
        { label: 'Mama Emma Fresh', value: 'fresh' },
        { label: 'Gallery index', value: 'gallery' },
        { label: 'Local SEO', value: 'local-seo' },
        { label: 'Menus index', value: 'menus' },
        { label: 'Services index', value: 'services' },
      ],
      required: true,
    },
    pageEditorialField,
    aboutStoryField,
    contactChannelsField,
    {
      name: 'layout',
      type: 'blocks',
      admin: { hidden: true },
      blocks: controlledBlocks,
      maxRows: 20,
    },
  ],
  preview,
})
