import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@payload-config'
import { normalizeSlug } from '@/collections/fields/slug'

import {
  freshProductSeed,
  menuCategorySeed,
  menuItemSeed,
  receptionFormatSeed,
  serviceSeed,
  signatureMenuSeed,
} from './data'
import { lexicalParagraphs } from './richText'

type SeedCollection =
  | 'fresh-products'
  | 'menu-categories'
  | 'menu-items'
  | 'pages'
  | 'reception-formats'
  | 'services'
  | 'signature-menus'

const seedContext = {
  skipRedirects: true,
  skipRevalidation: true,
}

async function upsertDraft(
  payload: Payload,
  collection: SeedCollection,
  seedKey: string,
  data: Record<string, unknown>,
) {
  const existing = await payload.find({
    collection,
    fallbackLocale: false,
    limit: 1,
    locale: 'en',
    overrideAccess: true,
    pagination: false,
    where: { seedKey: { equals: seedKey } },
  })
  const sharedData = {
    ...data,
    localeReadiness: { en: false, fr: false },
    seedKey,
  }

  if (existing.docs[0]) {
    return payload.update({
      id: existing.docs[0].id,
      collection,
      context: seedContext,
      data: sharedData as never,
      draft: true,
      fallbackLocale: false,
      locale: 'en',
      overrideAccess: true,
    })
  }

  return payload.create({
    collection,
    context: seedContext,
    data: sharedData as never,
    draft: true,
    fallbackLocale: false,
    locale: 'en',
    overrideAccess: true,
  })
}

async function seedGlobals(payload: Payload): Promise<void> {
  const commonOptions = {
    context: seedContext,
    draft: true as const,
    fallbackLocale: false as const,
    locale: 'en' as const,
    overrideAccess: true,
  }

  await payload.updateGlobal({
    ...commonOptions,
    slug: 'site-settings',
    data: {
      brandPhilosophy: 'Familiar enough to comfort. Different enough to remember.',
      institutionalSignature: 'Taste · Elegance · Hospitality',
      location: { city: 'Accra', country: 'Ghana', timezone: 'Africa/Accra' },
      shortName: 'MESTE',
      siteName: "MAMA EMMA Service Traiteur d'Excellence",
    },
  })

  await payload.updateGlobal({
    ...commonOptions,
    slug: 'contact-settings',
    data: { phone: '0537464516' },
  })

  await payload.updateGlobal({
    ...commonOptions,
    slug: 'header',
    data: {
      languageLabel: 'Language',
      navigation: [
        { label: 'Our Story', route: 'about' },
        { label: 'Services', route: 'services' },
        { label: 'Menus', route: 'menus' },
        { label: 'Mama Emma Fresh', route: 'fresh' },
        { label: 'Gallery', route: 'gallery' },
        { label: 'The Experience', route: 'experience' },
      ],
      primaryAction: { label: 'Plan Your Event', route: 'quote' },
    },
  })

  await payload.updateGlobal({
    ...commonOptions,
    slug: 'footer',
    data: {
      statement: 'African roots. A global outlook. Excellence in every detail.',
    },
  })

  await payload.updateGlobal({
    ...commonOptions,
    slug: 'home-page',
    data: {
      internalTitle: 'Homepage',
      layout: [
        {
          blockType: 'manifesto',
          heading: 'More than catering. An experience to remember.',
          headingLevel: 'h2',
          statements: [
            { statement: 'Receiving guests means more than serving a meal.' },
            { statement: 'To receive well is to take care.' },
            { statement: 'African roots. A global outlook. Excellence in every detail.' },
          ],
          tone: 'ivory',
        },
        {
          blockType: 'process',
          heading: 'Hospitality in every detail.',
          headingLevel: 'h2',
          steps: ['Listen', 'Imagine', 'Prepare', 'Present', 'Serve'].map((title) => ({ title })),
          tone: 'forest',
        },
        {
          blockType: 'mamaEmmaExperienceTeaser',
          description:
            'Beyond catering, Mama Emma is imagining signature culinary gatherings where food, culture, hospitality, entertainment and meaningful encounters come together around one table.',
          disclaimer: 'A signature Mama Emma concept currently in development.',
          heading: 'The Mama Emma Experience',
          headingLevel: 'h2',
        },
      ],
      localeReadiness: { en: false, fr: false },
    },
  })

  await payload.updateGlobal({
    ...commonOptions,
    slug: 'seo-settings',
    data: {
      organization: { publicName: "MAMA EMMA Service Traiteur d'Excellence" },
      titleTemplate: '%s — MESTE',
    },
  })
}

async function seedCollections(payload: Payload): Promise<void> {
  const categoryIDs = new Map<string, number | string>()

  for (const category of menuCategorySeed) {
    const doc = await upsertDraft(payload, 'menu-categories', category.seedKey, category)
    categoryIDs.set(category.family, doc.id)
  }

  for (const service of serviceSeed) {
    await upsertDraft(payload, 'services', service.seedKey, service)
  }

  for (const format of receptionFormatSeed) {
    await upsertDraft(payload, 'reception-formats', format.seedKey, format)
  }

  for (const menu of signatureMenuSeed) {
    await upsertDraft(payload, 'signature-menus', menu.seedKey, {
      ...menu,
      availability: 'on-request',
    })
  }

  for (const product of freshProductSeed) {
    await upsertDraft(payload, 'fresh-products', product.seedKey, {
      ...product,
      availability: 'to-confirm',
    })
  }

  for (const [index, item] of menuItemSeed.entries()) {
    const category = categoryIDs.get(item.category)

    if (!category) {
      throw new Error(`Missing seeded menu category: ${item.category}`)
    }

    const slug = normalizeSlug(item.name)
    await upsertDraft(payload, 'menu-items', `menu-item:${slug}`, {
      category,
      composition: item.composition?.map((component) => ({ component })),
      culinaryLevel: item.level,
      name: item.name,
      slug,
      sortOrder: (index + 1) * 10,
    })
  }

  await upsertDraft(payload, 'pages', 'page:about', {
    layout: [
      {
        blockType: 'storyChapter',
        body: lexicalParagraphs([
          'Emma was born as the second child of a large family in Congo. From an early age, her mother involved her in family life, especially in cooking.',
          'She learned that cooking was not only about preparing food. It was about welcoming, organising, sharing, gathering and taking care of others.',
        ]),
        chapterKey: 'congo',
        heading: 'Origins and family',
        headingLevel: 'h2',
        layout: 'text-only',
      },
      {
        blockType: 'storyChapter',
        body: lexicalParagraphs([
          'After completing her studies, Emma obtained her first professional experience as a hostess in the VIP service of Maya-Maya International Airport.',
        ]),
        chapterKey: 'maya-maya',
        heading: 'First hospitality experience',
        headingLevel: 'h2',
        layout: 'text-only',
      },
      {
        blockType: 'storyChapter',
        body: lexicalParagraphs([
          'Years later, living in Senegal, married and mother of three children, she decided to turn her passion into professional expertise.',
          'She formally trained in catering, cooking and pastry, and obtained her State diploma as a Chef.',
        ]),
        chapterKey: 'senegal',
        heading: 'Training and State Chef diploma',
        headingLevel: 'h2',
        layout: 'text-only',
      },
      {
        blockType: 'storyChapter',
        body: lexicalParagraphs([
          'Emma later worked at Le Méridien Président and Novotel. These experiences developed her standards of hospitality, organisation, professional service, culinary discipline and attention to detail.',
        ]),
        chapterKey: 'professional-hospitality',
        heading: 'Professional hospitality',
        headingLevel: 'h2',
        layout: 'text-only',
      },
      {
        blockType: 'storyChapter',
        body: lexicalParagraphs([
          'After moving to Ghana, Emma began preparing food for members of the Congolese community. Word of mouth grew.',
          'A larger ambition emerged: to introduce people to the richness of African culinary traditions while remaining open to flavours, techniques and inspirations from around the world.',
        ]),
        chapterKey: 'ghana',
        heading: 'The beginning of Mama Emma',
        headingLevel: 'h2',
        layout: 'text-only',
      },
      {
        blockType: 'storyChapter',
        body: lexicalParagraphs([
          "This ambition became Mama Emma Service Traiteur d'Excellence — MESTE.",
          'Today, together with her family, Emma continues to learn, create, transmit, cook, welcome and design culinary experiences.',
        ]),
        chapterKey: 'meste-today',
        heading: 'MESTE today',
        headingLevel: 'h2',
        layout: 'text-only',
      },
    ],
    pageKind: 'about',
    slug: 'about',
    title: "Mama Emma's Story",
  })

  await upsertDraft(payload, 'pages', 'page:experience', {
    layout: [
      {
        blockType: 'mamaEmmaExperienceTeaser',
        description:
          'Beyond catering, Mama Emma is imagining signature culinary gatherings where food, culture, hospitality, entertainment and meaningful encounters come together around one table.',
        disclaimer: 'A signature Mama Emma concept currently in development.',
        heading: 'The Mama Emma Experience',
        headingLevel: 'h2',
      },
    ],
    pageKind: 'experience',
    slug: 'the-mama-emma-experience',
    title: 'The Mama Emma Experience',
  })
}

async function run(): Promise<void> {
  const payload = await getPayload({ config })

  payload.logger.info('Starting idempotent Phase 3 seed…')
  await seedGlobals(payload)
  await seedCollections(payload)
  payload.logger.info(
    'Phase 3 seed complete. All editorial records remain drafts and locale-unready.',
  )
  await payload.destroy()
}

await run()
