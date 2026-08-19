import type { MediaSlot } from '@/lib/home/types'
import type { PageClosing, PageIntro, PageMeta } from '@/lib/pages/types'

export type ServiceWorld = {
  items: string[]
  title: string
}

export type ReceptionFormat = {
  description: string
  media: MediaSlot | null
  name: string
}

export type ServicesContent = {
  closing: PageClosing
  formats: {
    eyebrow: string
    heading: string
    headingAccent: string
    items: ReceptionFormat[]
    note: string
  }
  intro: PageIntro
  meta: PageMeta
  /**
   * Shown until a reference is both published and carries recorded permission
   * to be displayed. No client is ever named without it.
   */
  references: {
    body: string
    eyebrow: string
    heading: string
  }
  skipToContent: string
  worlds: {
    eyebrow: string
    heading: string
    headingAccent: string
    items: ServiceWorld[]
  }
}
