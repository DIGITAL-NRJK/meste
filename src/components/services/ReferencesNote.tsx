import { Section } from '@/components/ui/Section'
import { Eyebrow, Heading, BodyCopy } from '@/components/ui/Typography'
import type { ServicesContent } from '@/lib/pages/services/types'

type ReferencesNoteProps = {
  content: ServicesContent['references']
  headingId: string
}

/**
 * The deliberate empty state for social proof. A reference is published only
 * with recorded permission, so until then the page says so plainly instead of
 * leaving a blank band or inventing a client.
 */
export function ReferencesNote({ content, headingId }: ReferencesNoteProps) {
  return (
    <Section labelledBy={headingId} tight tone="alt">
      <div className="meste-references-note">
        <Eyebrow>{content.eyebrow}</Eyebrow>
        <Heading className="meste-references-note__title" id={headingId}>
          {content.heading}
        </Heading>
        <BodyCopy className="meste-references-note__body">{content.body}</BodyCopy>
      </div>
    </Section>
  )
}
