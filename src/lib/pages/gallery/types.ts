import type { ResolvedImage } from '@/lib/home/types'
import type { PageClosing, PageIntro, PageMeta } from '@/lib/pages/types'

/**
 * A gallery entry that is safe to render: it has an image and a description.
 * An entry without alt text is treated as missing and never reaches this type.
 */
export type GalleryItem = {
  alt: string
  caption: string | null
  category: string
  id: string
  image: ResolvedImage
}

export type GalleryContent = {
  /**
   * Category key to label. The keys mirror the media taxonomy in Payload; a
   * unit test binds the two so a category can never be added to the schema and
   * then rendered on the site as a raw slug.
   */
  categoryLabels: Record<string, string>
  closing: PageClosing
  /** Branded empty state. It is the launch state: no photography exists yet. */
  empty: {
    body: string
    heading: string
  }
  filters: {
    allLabel: string
    groupLabel: string
  }
  intro: PageIntro
  items: GalleryItem[]
  lightbox: {
    closeLabel: string
    dialogLabel: string
    nextLabel: string
    previousLabel: string
  }
  meta: PageMeta
  skipToContent: string
}
