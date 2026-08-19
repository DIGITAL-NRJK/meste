import type { RouteKey } from '@/lib/routes'

export type ResolvedImage = {
  alt: string
  height: number | null
  url: string
  width: number | null
}

/**
 * A frame that is either filled with approved photography or renders a labelled
 * placeholder naming the shoot that is still missing. Nothing is ever faked.
 */
export type MediaSlot = {
  caption: string
  image: ResolvedImage | null
  slot: string
}

export type Action = {
  label: string
  route: RouteKey
}

export type SectionHeading = {
  eyebrow: string
  heading: string
  headingAccent?: string
}

export type HeroContent = {
  action: Action
  body: string
  headingAccent: string
  headingLead: string
  media: MediaSlot
  metaLeft: string
  metaRight: string
  note: {
    label: string
    text: string
  }
  secondaryAction: Action
}

export type PillarContent = {
  body: string
  label: string
  title: string
}

export type PromiseContent = SectionHeading & {
  pillars: PillarContent[]
}

export type ManifestoContent = SectionHeading & {
  paragraphs: string[]
  reasons: {
    eyebrow: string
    items: string[]
  }
}

export type WorldContent = {
  detail: string
  route: RouteKey
  title: string
}

export type WorldsContent = SectionHeading & {
  items: WorldContent[]
}

export type FormatContent = {
  description: string
  media: MediaSlot | null
  name: string
}

export type FormatsContent = SectionHeading & {
  hint: string
  items: FormatContent[]
}

export type DishContent = {
  composition: string
  level: string
  media: MediaSlot
  name: string
}

export type DishesContent = SectionHeading & {
  action: Action
  intro: string
  items: DishContent[]
  pillars: {
    detail: string
    title: string
  }[]
}

export type ExperienceContent = SectionHeading & {
  action: Action
  disclaimer: string
  intro: string
  media: MediaSlot
  pillars: {
    detail: string
    title: string
  }[]
}

export type ProcessContent = SectionHeading & {
  closing: string
  steps: {
    detail: string
    title: string
  }[]
}

export type FreshContent = SectionHeading & {
  action: Action
  intro: string
  media: MediaSlot
  products: string[]
  signature: string
}

export type QuoteContent = {
  attribution: string
  context: string
  quote: string
}

export type ReferencesContent = SectionHeading & {
  emptyBody: string
  emptyTitle: string
  quotes: QuoteContent[]
}

export type ClosingContent = {
  action: Action
  body: string
  line: string
  rule: string
  secondaryLabel: string
  wordmark: string
}

export type HomeContent = {
  closing: ClosingContent
  dishes: DishesContent
  experience: ExperienceContent
  fresh: FreshContent
  hero: HeroContent
  manifesto: ManifestoContent
  meta: {
    description: string
    title: string
  }
  process: ProcessContent
  promise: PromiseContent
  references: ReferencesContent
  formats: FormatsContent
  signatureBand: string[]
  skipToContent: string
  worlds: WorldsContent
}
