import type { Block } from 'payload'

import { blockCTAFields, headingFields, restrainedToneField } from './shared'

export const HeroBlock: Block = {
  slug: 'hero',
  dbName: 'hero',
  fields: [
    ...headingFields,
    {
      name: 'subline',
      type: 'textarea',
      localized: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'alignment',
      type: 'select',
      defaultValue: 'left',
      options: ['left', 'center'],
      required: true,
    },
    blockCTAFields,
  ],
  labels: { plural: 'Heroes', singular: 'Hero' },
}

export const EditorialTextImageBlock: Block = {
  slug: 'editorialTextImage',
  dbName: 'editorial_ti',
  fields: [
    ...headingFields,
    {
      name: 'body',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
      required: true,
    },
    {
      name: 'imageSide',
      type: 'select',
      defaultValue: 'right',
      options: ['left', 'right'],
      required: true,
    },
    restrainedToneField,
    blockCTAFields,
  ],
  labels: { plural: 'Text and image sections', singular: 'Text and image' },
}

export const ManifestoBlock: Block = {
  slug: 'manifesto',
  dbName: 'manifesto',
  fields: [
    ...headingFields,
    {
      name: 'statements',
      type: 'array',
      fields: [
        {
          name: 'statement',
          type: 'text',
          localized: true,
          required: true,
        },
      ],
      maxRows: 8,
      minRows: 1,
      required: true,
    },
    restrainedToneField,
  ],
}

export const QuoteBlock: Block = {
  slug: 'quote',
  dbName: 'quote',
  fields: [
    {
      name: 'quote',
      type: 'textarea',
      localized: true,
      maxLength: 320,
      required: true,
    },
    {
      name: 'attribution',
      type: 'text',
      localized: true,
    },
    restrainedToneField,
  ],
}

export const EditorialSplitBlock: Block = {
  slug: 'editorialSplit',
  dbName: 'editorial_split',
  fields: [
    ...headingFields,
    {
      name: 'left',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'right',
      type: 'richText',
      localized: true,
      required: true,
    },
    restrainedToneField,
  ],
}

export const StoryChapterBlock: Block = {
  slug: 'storyChapter',
  dbName: 'story_chapter',
  fields: [
    ...headingFields,
    {
      name: 'chapterKey',
      type: 'select',
      options: [
        'congo',
        'maya-maya',
        'senegal',
        'professional-hospitality',
        'ghana',
        'meste-today',
      ],
      required: true,
    },
    {
      name: 'body',
      type: 'richText',
      localized: true,
      required: true,
    },
    {
      name: 'image',
      type: 'upload',
      relationTo: 'media',
    },
    {
      name: 'layout',
      type: 'select',
      defaultValue: 'image-right',
      options: ['image-left', 'image-right', 'text-only'],
      required: true,
    },
  ],
}
