import { Section } from '@/components/ui/Section'
import { Accent, Eyebrow, Heading } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { ManifestoContent } from '@/lib/home/types'

type ManifestoSectionProps = {
  content: ManifestoContent
  headingId: string
}

export function ManifestoSection({ content, headingId }: ManifestoSectionProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <div className="meste-manifesto">
        <div>
          <Eyebrow>{content.eyebrow}</Eyebrow>
          <Heading id={headingId} style={{ marginTop: '1rem', maxWidth: '18ch' }}>
            {content.heading} <Accent>{content.headingAccent}</Accent>
          </Heading>

          <div className="meste-manifesto__columns">
            {content.paragraphs.map((paragraph) => (
              <p key={paragraph.slice(0, 40)}>{paragraph}</p>
            ))}
          </div>
        </div>

        <div className="meste-reasons">
          <Eyebrow>{content.reasons.eyebrow}</Eyebrow>
          <ol>
            {content.reasons.items.map((item, index) => (
              <li key={item}>
                <span aria-hidden="true" className="meste-reasons__index">
                  {editorialIndex(index)}
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </Section>
  )
}
