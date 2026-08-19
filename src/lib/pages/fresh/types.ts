import type { MediaSlot } from '@/lib/home/types'
import type { PageClosing, PageIntro, PageMeta } from '@/lib/pages/types'

export type CulinaryUse = {
  flavour: string
  uses: string[]
}

export type FreshContent = {
  closing: PageClosing
  /**
   * How the flavours *may* inspire a menu. Phrased as possibility throughout:
   * the brief forbids implying an ingredient is used in a recipe unless that
   * has been verified.
   */
  culinary: {
    caveat: string
    eyebrow: string
    heading: string
    headingAccent: string
    intro: string
    items: CulinaryUse[]
  }
  intro: PageIntro & { media: MediaSlot }
  meta: PageMeta
  range: {
    eyebrow: string
    heading: string
    headingAccent: string
    note: string
    products: string[]
    signature: string
  }
  skipToContent: string
}
