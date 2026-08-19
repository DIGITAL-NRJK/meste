import type { Action, MediaSlot } from '@/lib/home/types'

/**
 * Shapes shared by the interior pages of the site.
 *
 * The homepage keeps its own vocabulary in `@/lib/home/types` because it is the
 * reference composition for the design system. Everything built after it reuses
 * these primitives so the pages stay one family rather than seven inventions.
 */

export type PageMeta = {
  description: string
  title: string
}

export type PageIntro = {
  eyebrow: string
  headingAccent: string
  headingLead: string
  lede: string
}

export type PageClosing = {
  action: Action
  body: string
  heading: string
}

/**
 * One chapter of an editorial narrative. `list` carries the enumerations the
 * approved source material writes as vertical lists, so they keep their form
 * instead of being flattened into prose.
 */
export type StoryChapter = {
  body: string[]
  label: string
  list: string[]
  media: MediaSlot | null
  title: string
}

export type PullQuote = {
  attribution: string
  text: string
}
