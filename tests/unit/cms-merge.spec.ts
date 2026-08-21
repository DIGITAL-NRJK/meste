import { describe, expect, it } from 'vitest'

import { getAboutBaseline } from '@/lib/pages/about/content'
import { getContactBaseline } from '@/lib/pages/contact/content'
import {
  mergeChapters,
  mergeClosing,
  mergeIntro,
  mergePullQuote,
  readTextList,
} from '@/lib/payload/queries/pageContent'

const about = getAboutBaseline('en')
const contact = getContactBaseline('en')

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
