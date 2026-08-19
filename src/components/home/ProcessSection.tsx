import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { SubHeading } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { ProcessContent } from '@/lib/home/types'

type ProcessSectionProps = {
  content: ProcessContent
  headingId: string
}

export function ProcessSection({ content, headingId }: ProcessSectionProps) {
  return (
    <Section labelledBy={headingId} tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <ol className="meste-process" style={{ listStyle: 'none', margin: '2rem 0 0', padding: 0 }}>
        {content.steps.map((step, index) => (
          <li className="meste-process__step" key={step.title}>
            <span aria-hidden="true" className="meste-numeral">
              {editorialIndex(index)}
            </span>
            <SubHeading as="h3">{step.title}</SubHeading>
            <p>{step.detail}</p>
          </li>
        ))}
      </ol>

      <p className="meste-lede meste-accent" style={{ marginTop: '2rem', maxWidth: '40rem' }}>
        {content.closing}
      </p>
    </Section>
  )
}
