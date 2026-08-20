import { GalleryBrowser } from '@/components/gallery/GalleryBrowser'
import { Section } from '@/components/ui/Section'
import { BodyCopy, Heading } from '@/components/ui/Typography'
import type { GalleryContent } from '@/lib/pages/gallery/types'

type GallerySectionProps = {
  content: GalleryContent
  headingId: string
}

/**
 * Server component. While the gallery is empty it renders the branded empty
 * state and ships no client JavaScript at all — which is the page's actual
 * state until the first shoot is approved.
 */
export function GallerySection({ content, headingId }: GallerySectionProps) {
  if (content.items.length === 0) {
    return (
      <Section labelledBy={headingId} ruled tone="alt">
        <div className="meste-gallery-empty">
          <Heading className="meste-gallery-empty__title" id={headingId}>
            {content.empty.heading}
          </Heading>
          <BodyCopy className="meste-gallery-empty__body">{content.empty.body}</BodyCopy>
        </div>
      </Section>
    )
  }

  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <Heading className="meste-visually-hidden" id={headingId}>
        {content.filters.groupLabel}
      </Heading>
      <GalleryBrowser content={content} />
    </Section>
  )
}
