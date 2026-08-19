import type { ReactNode } from 'react'

import { Frame } from '@/components/ui/Frame'
import { Section } from '@/components/ui/Section'
import { Accent, DisplayHeading, Eyebrow, Lede } from '@/components/ui/Typography'
import type { MediaSlot } from '@/lib/home/types'
import type { PageIntro } from '@/lib/pages/types'

type PageOpeningProps = {
  /** Placed opposite the copy. Takes precedence over `media` when both exist. */
  aside?: ReactNode
  content: PageIntro
  headingId: string
  media?: MediaSlot | null
}

/**
 * The opening movement of an interior page: eyebrow, single H1, lede, and an
 * optional companion — a frame, or a block of content such as the verified
 * contact details. Every page below the homepage starts here, so the entrance
 * rhythm is identical across the site.
 */
export function PageOpening({ aside, content, headingId, media = null }: PageOpeningProps) {
  const companion =
    aside ??
    (media ? (
      <Frame media={media} priority ratio="portrait" sizes="(max-width: 900px) 100vw, 38vw" />
    ) : null)

  return (
    <Section className="meste-page-opening" labelledBy={headingId} ruled>
      <div className={companion ? 'meste-page-opening__split' : undefined}>
        <div className="meste-page-opening__copy" data-wide={companion ? undefined : ''}>
          <Eyebrow>{content.eyebrow}</Eyebrow>

          <DisplayHeading className="meste-page-opening__title" id={headingId}>
            {content.headingLead} <Accent>{content.headingAccent}</Accent>
          </DisplayHeading>

          <Lede className="meste-page-opening__lede">{content.lede}</Lede>
        </div>

        {companion ? <div className="meste-page-opening__aside">{companion}</div> : null}
      </div>
    </Section>
  )
}
