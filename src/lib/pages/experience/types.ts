import type { MediaSlot } from '@/lib/home/types'
import type { PageClosing, PageIntro, PageMeta } from '@/lib/pages/types'

export type ExperiencePillar = {
  detail: string
  title: string
}

export type ExperienceContent = {
  closing: PageClosing
  /** `A signature Mama Emma concept currently in development.` */
  disclaimer: string
  intro: PageIntro & { media: MediaSlot }
  meta: PageMeta
  pillars: {
    heading: string
    items: ExperiencePillar[]
  }
  skipToContent: string
  universe: {
    eyebrow: string
    heading: string
    headingAccent: string
    intro: string
    items: string[]
  }
}
