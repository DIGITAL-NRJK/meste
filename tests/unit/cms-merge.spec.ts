import type { Field } from 'payload'
import { describe, expect, it } from 'vitest'

import {
  aboutStoryField,
  experienceContentField,
  freshContentField,
  galleryContentField,
  menusContentField,
  pageEditorialField,
  servicesContentField,
} from '@/collections/fields/pageContent'

import { getAboutBaseline } from '@/lib/pages/about/content'
import { getContactBaseline } from '@/lib/pages/contact/content'
import { getExperienceBaseline } from '@/lib/pages/experience/content'
import { getFreshBaseline } from '@/lib/pages/fresh/content'
import { getGalleryBaseline } from '@/lib/pages/gallery/content'
import { getMenusBaseline } from '@/lib/pages/menus/content'
import { getServicesBaseline } from '@/lib/pages/services/content'
import {
  mergeChapters,
  mergeClosing,
  mergeIntro,
  mergeList,
  mergePullQuote,
  mergeStrings,
  readTextList,
} from '@/lib/payload/queries/pageContent'

const about = getAboutBaseline('en')
const contact = getContactBaseline('en')
const experience = getExperienceBaseline('en')
const fresh = getFreshBaseline('en')
const gallery = getGalleryBaseline('en')
const menus = getMenusBaseline('en')
const services = getServicesBaseline('en')

describe('an empty CMS never empties a page', () => {
  /**
   * The whole contract in one test. A document that exists but says nothing —
   * the state of every page the moment an editor first creates it — must
   * publish exactly the approved baseline.
   */
  it('returns the baseline for undefined, null and blank input', () => {
    for (const source of [undefined, null, {}, { eyebrow: '', lede: '   ' }]) {
      expect(mergeIntro(contact.intro, source)).toEqual(contact.intro)
    }

    for (const source of [undefined, null, {}, { body: '  ', heading: '' }]) {
      expect(mergeClosing(contact.closing, source)).toEqual(contact.closing)
    }

    expect(mergePullQuote(about.pullQuote, { text: '' })).toEqual(about.pullQuote)
    expect(mergeChapters(about.chapters.items, undefined)).toEqual(about.chapters.items)
  })

  it('survives a shape the CMS never promised', () => {
    expect(mergeIntro(contact.intro, 'not an object')).toEqual(contact.intro)
    expect(mergeClosing(contact.closing, ['nope'])).toEqual(contact.closing)
    expect(mergeChapters(about.chapters.items, { chapters: 'nope' })).toEqual(about.chapters.items)
  })
})

describe('a filled field wins, and only that field', () => {
  it('replaces one value and leaves its neighbours alone', () => {
    const merged = mergeIntro(contact.intro, { lede: 'A new lede from Payload.' })

    expect(merged.lede).toBe('A new lede from Payload.')
    expect(merged.eyebrow).toBe(contact.intro.eyebrow)
    expect(merged.headingLead).toBe(contact.intro.headingLead)
  })

  /** The About intro also carries a media slot; the spread must not drop it. */
  it('keeps a shape the base intro added', () => {
    const merged = mergeIntro(about.intro, { eyebrow: 'The house, revised' })

    expect(merged.media).toEqual(about.intro.media)
  })

  it('trims what an editor typed', () => {
    expect(mergeIntro(contact.intro, { eyebrow: '  Reach us  ' }).eyebrow).toBe('Reach us')
  })
})

describe('the closing action', () => {
  it('takes a label and a known route', () => {
    const merged = mergeClosing(contact.closing, {
      action: { label: 'Talk to us', route: 'contact' },
    })

    expect(merged.action).toEqual({ label: 'Talk to us', route: 'contact' })
  })

  /**
   * A route that is not in the controlled list would render a link to nowhere.
   * The baseline destination stands instead.
   */
  it('refuses a route the site does not have', () => {
    const merged = mergeClosing(contact.closing, { action: { route: 'pricing' } })

    expect(merged.action.route).toBe(contact.closing.action.route)
  })
})

describe('story chapters', () => {
  const rows = [
    { body: [{ text: 'One paragraph.' }], label: 'Congo', list: [], title: 'A first chapter' },
    {
      body: [{ text: 'Another.' }, { text: '   ' }],
      list: [{ text: 'welcoming' }, { text: '' }],
      title: 'A second chapter',
    },
  ]

  it('replaces the narrative as a set rather than interleaving it', () => {
    const merged = mergeChapters(about.chapters.items, rows)

    expect(merged).toHaveLength(2)
    expect(merged[0].title).toBe('A first chapter')
    expect(merged.map((chapter) => chapter.title)).not.toContain(about.chapters.items[0].title)
  })

  it('drops blank rows inside a paragraph or a list', () => {
    const merged = mergeChapters(about.chapters.items, rows)

    expect(merged[1].body).toEqual(['Another.'])
    expect(merged[1].list).toEqual(['welcoming'])
  })

  /** A row with no title or no paragraph is not a chapter, it is a draft. */
  it('ignores an incomplete row and keeps the baseline when none survive', () => {
    expect(mergeChapters(about.chapters.items, [{ title: 'Titled but empty', body: [] }])).toEqual(
      about.chapters.items,
    )
    expect(mergeChapters(about.chapters.items, [{ body: [{ text: 'Orphan prose.' }] }])).toEqual(
      about.chapters.items,
    )
  })

  it('keeps the baseline placeholder wording until a real image exists', () => {
    const withSlot = about.chapters.items.findIndex((chapter) => chapter.media !== null)
    const source = about.chapters.items.map((chapter, index) => ({
      body: [{ text: 'Body.' }],
      image: index === withSlot ? { alt: 'Service in progress', url: '/media/service.jpg' } : null,
      title: `Chapter ${index}`,
    }))

    const merged = mergeChapters(about.chapters.items, source)

    expect(merged[withSlot].media?.image?.url).toBe('/media/service.jpg')
    expect(merged[withSlot].media?.slot).toBe(about.chapters.items[withSlot].media?.slot)
  })

  /**
   * An upload without alt text is not a publishable image, and a frame with no
   * image renders a placeholder naming a shoot. Neither belongs on the page.
   */
  it('renders no frame for an image with no alt text', () => {
    const merged = mergeChapters(about.chapters.items, [
      { body: [{ text: 'Body.' }], image: { url: '/media/x.jpg' }, title: 'Chapter' },
    ])

    expect(merged[0].media).toBeNull()
  })
})

describe('readTextList', () => {
  it('unwraps rows and discards the empty ones', () => {
    expect(readTextList([{ text: 'a' }, { text: '  ' }, {}, 'nope', { text: 'b' }])).toEqual([
      'a',
      'b',
    ])
    expect(readTextList(undefined)).toEqual([])
  })
})

describe('section framing', () => {
  const frame = ['eyebrow', 'heading', 'headingAccent'] as const

  /**
   * Every interior section composes `mergeStrings`. If an absent CMS value can
   * blank a heading here, it can blank one on all five pages at once.
   */
  it('leaves a section untouched when the CMS says nothing', () => {
    for (const source of [undefined, null, {}, { heading: '   ' }, 'nonsense']) {
      expect(mergeStrings(menus.levels, source, [...frame])).toEqual(menus.levels)
      expect(mergeStrings(services.worlds, source, [...frame])).toEqual(services.worlds)
      expect(mergeStrings(fresh.range, source, [...frame, 'note', 'signature'])).toEqual(
        fresh.range,
      )
      expect(mergeStrings(experience.universe, source, [...frame, 'intro'])).toEqual(
        experience.universe,
      )
      expect(mergeStrings(gallery.empty, source, ['body', 'heading'])).toEqual(gallery.empty)
    }
  })

  it('replaces only the keys it was asked for', () => {
    const merged = mergeStrings(menus.levels, { eyebrow: 'New eyebrow', items: [] }, [...frame])

    expect(merged.eyebrow).toBe('New eyebrow')
    expect(merged.heading).toBe(menus.levels.heading)
    // `items` was not among the keys, so the approved levels survive.
    expect(merged.items).toEqual(menus.levels.items)
  })
})

describe('repeated blocks', () => {
  const build = (entry: unknown) => {
    const title = readTextList([{ text: (entry as { title?: string })?.title ?? '' }])[0]
    return title ? { title } : null
  }

  it('keeps the approved sequence when no row is publishable', () => {
    const baseline = [{ title: 'Approved' }]

    expect(mergeList(baseline, undefined, build)).toEqual(baseline)
    expect(mergeList(baseline, [], build)).toEqual(baseline)
    expect(mergeList(baseline, [{}, { title: '  ' }], build)).toEqual(baseline)
  })

  it('replaces the sequence as a set, never row by row', () => {
    const baseline = [{ title: 'First' }, { title: 'Second' }]
    const merged = mergeList(baseline, [{ title: 'Only one' }], build)

    expect(merged).toEqual([{ title: 'Only one' }])
  })
})

/**
 * Binds the Payload schema to the shapes the site actually renders.
 *
 * TypeScript already refuses a key that the baseline does not have, so the
 * query layer cannot read a field that does not exist. Nothing checks the other
 * direction: a group whose field is named `headingAccented` would save happily
 * in the admin and be silently ignored on the page — an editor typing into a
 * box that does nothing. This test fails the moment the two drift.
 */
describe('the admin fields match what the pages render', () => {
  const groupNames = (field: Field | undefined, ...path: string[]): string[] => {
    let current = field

    for (const step of path) {
      const children = current && 'fields' in current ? (current.fields as Field[]) : []
      current = children.find((child) => 'name' in child && child.name === step)
    }

    const fields = current && 'fields' in current ? (current.fields as Field[]) : []
    return fields.flatMap((child) => ('name' in child && child.name ? [child.name] : []))
  }

  const cases: [string, string[], string[]][] = [
    ['editorial.intro', groupNames(pageEditorialField, 'intro'), Object.keys(contact.intro)],
    ['editorial.closing', groupNames(pageEditorialField, 'closing'), Object.keys(contact.closing)],
    ['about.pullQuote', groupNames(aboutStoryField, 'pullQuote'), Object.keys(about.pullQuote)],
    ['services.worlds', groupNames(servicesContentField, 'worlds'), Object.keys(services.worlds)],
    [
      'services.formats',
      groupNames(servicesContentField, 'formats'),
      Object.keys(services.formats),
    ],
    [
      'services.references',
      groupNames(servicesContentField, 'references'),
      Object.keys(services.references),
    ],
    ['menus.levels', groupNames(menusContentField, 'levels'), Object.keys(menus.levels)],
    ['menus.families', groupNames(menusContentField, 'families'), Object.keys(menus.families)],
    [
      'menus.signatureDishes',
      groupNames(menusContentField, 'signatureDishes'),
      Object.keys(menus.signatureDishes),
    ],
    [
      'menus.signatureMenus',
      groupNames(menusContentField, 'signatureMenus'),
      Object.keys(menus.signatureMenus),
    ],
    ['fresh.range', groupNames(freshContentField, 'range'), Object.keys(fresh.range)],
    ['fresh.culinary', groupNames(freshContentField, 'culinary'), Object.keys(fresh.culinary)],
    ['gallery.empty', groupNames(galleryContentField, 'empty'), Object.keys(gallery.empty)],
    [
      'experience.universe',
      groupNames(experienceContentField, 'universe'),
      Object.keys(experience.universe),
    ],
    [
      'experience.pillars',
      groupNames(experienceContentField, 'pillars'),
      Object.keys(experience.pillars),
    ],
  ]

  it.each(cases)('%s offers no field the page cannot render', (_name, offered, rendered) => {
    expect(offered.length).toBeGreaterThan(0)
    expect(offered.filter((field) => !rendered.includes(field))).toEqual([])
  })

  /** The repeated blocks, whose rows are objects rather than strings. */
  it('matches the shape of every repeated block', () => {
    expect(groupNames(servicesContentField, 'worlds', 'items').sort()).toEqual(['items', 'title'])
    expect(groupNames(menusContentField, 'levels', 'items').sort()).toEqual([
      'body',
      'list',
      'name',
    ])
    expect(groupNames(freshContentField, 'culinary', 'items').sort()).toEqual(['flavour', 'uses'])
    expect(groupNames(experienceContentField, 'pillars', 'items').sort()).toEqual([
      'detail',
      'title',
    ])
  })
})
