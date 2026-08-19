import type { PageClosing, PageIntro, PageMeta } from '@/lib/pages/types'

export type CulinaryLevel = {
  body: string
  list: string[]
  name: string
}

export type SignatureDish = {
  composition: string
  name: string
}

export type MenuFamily = {
  dishes: string[]
  name: string
  /** Editorial instruction from the brief, shown only where one exists. */
  note: string | null
}

export type MenusContent = {
  closing: PageClosing
  families: {
    eyebrow: string
    heading: string
    headingAccent: string
    items: MenuFamily[]
  }
  intro: PageIntro
  levels: {
    eyebrow: string
    heading: string
    headingAccent: string
    items: CulinaryLevel[]
  }
  meta: PageMeta
  signatureDishes: {
    eyebrow: string
    heading: string
    headingAccent: string
    intro: string
    items: SignatureDish[]
  }
  signatureMenus: {
    eyebrow: string
    heading: string
    headingAccent: string
    items: string[]
    note: string
  }
  skipToContent: string
}
