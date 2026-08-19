import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { SubHeading } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { PromiseContent } from '@/lib/home/types'

type PromiseSectionProps = {
  content: PromiseContent
  headingId: string
}

export function PromiseSection({ content, headingId }: PromiseSectionProps) {
  return (
    <Section labelledBy={headingId}>
      <SectionHead eyebrow={content.eyebrow} heading={content.heading} headingId={headingId} />

      <div className="meste-pillars">
        {content.pillars.map((pillar, index) => (
          <article className="meste-pillar" key={pillar.title}>
            <p aria-hidden="true" className="meste-numeral meste-numeral--large">
              {editorialIndex(index)}
            </p>
            <SubHeading>{pillar.title}</SubHeading>
            <p className="meste-pillar__label">{pillar.label}</p>
            <p className="meste-pillar__body">{pillar.body}</p>
          </article>
        ))}
      </div>
    </Section>
  )
}
