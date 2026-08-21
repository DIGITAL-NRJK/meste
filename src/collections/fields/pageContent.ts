import type { Field } from 'payload'

/**
 * Editorial fields for the interior pages.
 *
 * Two rules govern everything below.
 *
 * Every field is optional, and an empty field is not an empty page. The query
 * layer merges what an editor filled in over the approved baseline in
 * `src/lib/pages`, one field at a time, so a half-written document still
 * publishes a coherent page instead of a gap. Code is the fallback, never the
 * competitor.
 *
 * Repeated content is the exception: an array is taken whole or not at all.
 * Merging a list item by item would interleave CMS text and code text into a
 * sequence an editor can only correct half of. `servicesPage.ts` already
 * applies that rule to reception formats; the story chapters follow it.
 *
 * Body copy is plain paragraphs rather than rich text on purpose. The
 * components render paragraphs and vertical lists and nothing else, and a
 * rich-text editor would offer headings, tables and inline styles that would
 * silently disappear on publication.
 */

const EMPTY_MEANS_BASELINE = 'Leave empty to keep the wording currently published on the site.'

const HEADING_SPLIT =
  'Section headings are set in two parts: the lead is typographically neutral, the accent is the emphasised half. Fill both or neither.'

/**
 * Localization is declared at the outermost level that needs it and never
 * repeated inside. A localized array already exists once per locale; marking
 * its leaves localized as well adds the same axis twice, which Payload accepts
 * without complaint and the Postgres adapter turns into a second set of locale
 * tables nobody asked for. Hence the `localized` argument — the chapter fields
 * live inside a localized array and must not claim it again.
 */
function localizedText(name: string, label: string, description?: string, localized = true): Field {
  return {
    name,
    type: 'text',
    admin: description ? { description } : undefined,
    label,
    localized,
  }
}

function localizedProse(
  name: string,
  label: string,
  description?: string,
  localized = true,
): Field {
  return {
    name,
    type: 'textarea',
    admin: description ? { description } : undefined,
    label,
    localized,
  }
}

/**
 * A list of plain strings. Payload has no primitive for that, so each row wraps
 * a single `text` field; `readTextList` unwraps it on the way out.
 */
function stringList(name: string, label: string, description: string, localized = true): Field {
  return {
    name,
    type: 'array',
    admin: { description },
    fields: [{ name: 'text', type: 'textarea', required: true }],
    label,
    labels: { plural: 'lines', singular: 'line' },
    localized,
  }
}

const actionField: Field = {
  name: 'action',
  type: 'group',
  fields: [
    localizedText('label', 'Button label'),
    {
      name: 'route',
      type: 'select',
      admin: { description: 'Where the button leads. The localized URL is resolved by the site.' },
      options: [
        { label: 'About', value: 'about' },
        { label: 'Contact', value: 'contact' },
        { label: 'Gallery', value: 'gallery' },
        { label: 'Mama Emma Fresh', value: 'fresh' },
        { label: 'Menus', value: 'menus' },
        { label: 'Request a quote', value: 'quote' },
        { label: 'Services', value: 'services' },
        { label: 'The Mama Emma Experience', value: 'experience' },
      ],
    },
  ],
  label: 'Call to action',
}

/**
 * The opening and the closing block, shared by every interior page. Building
 * them once is what lets the remaining pages join this system without a new
 * schema each time.
 */
export const pageEditorialField: Field = {
  name: 'editorial',
  type: 'group',
  admin: { description: EMPTY_MEANS_BASELINE },
  fields: [
    {
      name: 'intro',
      type: 'group',
      fields: [
        localizedText('eyebrow', 'Eyebrow', 'The small label above the page title.'),
        localizedText('headingLead', 'Title — lead', HEADING_SPLIT),
        localizedText('headingAccent', 'Title — accent'),
        localizedProse('lede', 'Lede', 'One or two sentences under the title.'),
      ],
      label: 'Opening',
    },
    {
      name: 'closing',
      type: 'group',
      fields: [localizedText('heading', 'Heading'), localizedProse('body', 'Body'), actionField],
      label: 'Closing block',
    },
  ],
  label: 'Page copy',
}

/**
 * The story page. Chapters are the six narrative beats of the approved
 * biography; the CMS takes the whole sequence or leaves it to the baseline.
 */
export const aboutStoryField: Field = {
  name: 'aboutStory',
  type: 'group',
  admin: {
    condition: (data) => data?.pageKind === 'about',
    description: `${EMPTY_MEANS_BASELINE} Chapters are replaced as a set: publish all of them or none.`,
  },
  fields: [
    {
      name: 'introImage',
      type: 'upload',
      admin: {
        description:
          'The portrait beside the opening. Until one is uploaded the page shows a labelled placeholder naming the shoot that is missing — it never invents an image.',
      },
      label: 'Opening portrait',
      relationTo: 'media',
    },
    localizedText('eyebrow', 'Chapters — eyebrow'),
    localizedText('heading', 'Chapters — heading lead', HEADING_SPLIT),
    localizedText('headingAccent', 'Chapters — heading accent'),
    {
      name: 'chapters',
      type: 'array',
      admin: {
        description:
          'A chapter needs a title and at least one paragraph to count. Incomplete rows are ignored rather than published half-empty.',
      },
      fields: [
        localizedText(
          'label',
          'Label',
          'The short marker in the margin, e.g. a place or a period.',
          false,
        ),
        localizedText('title', 'Title', undefined, false),
        stringList('body', 'Paragraphs', 'One row per paragraph.', false),
        stringList(
          'list',
          'Vertical list',
          'Optional. Rendered as a list under the paragraphs.',
          false,
        ),
        {
          name: 'image',
          type: 'upload',
          label: 'Image',
          relationTo: 'media',
        },
      ],
      label: 'Chapters',
      labels: { plural: 'chapters', singular: 'chapter' },
      localized: true,
      maxRows: 12,
    },
    {
      name: 'pullQuote',
      type: 'group',
      fields: [localizedProse('text', 'Statement'), localizedText('attribution', 'Attribution')],
      label: 'Held statement',
    },
  ],
  label: 'Story',
}

/**
 * The contact page.
 *
 * Only the framing of the channels section is here. The channel labels
 * themselves — Telephone, Email, Address — stay in code, because each one names
 * a value the code decides to render or hide based on what `ContactSettings`
 * actually holds. An editor able to rename them could put "Email" above a
 * telephone number.
 *
 * No contact value is editable here either, for the same reason it never was:
 * `ContactSettings` owns them, so the site cannot publish two divergent copies.
 */
export const contactChannelsField: Field = {
  name: 'contactChannels',
  type: 'group',
  admin: {
    condition: (data) => data?.pageKind === 'contact',
    description: `${EMPTY_MEANS_BASELINE} The contact details themselves live in Site → Contact settings.`,
  },
  fields: [localizedText('eyebrow', 'Eyebrow'), localizedText('heading', 'Heading')],
  label: 'Contact — channels section',
}
