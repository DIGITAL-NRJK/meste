import { Container } from '@/components/ui/Container'
import { SubHeading } from '@/components/ui/Typography'
import type { ExperienceContent } from '@/lib/pages/experience/types'

type ExperiencePillarsProps = {
  content: ExperienceContent['pillars']
  headingId: string
}

/**
 * The forest band — the one background the brief assigns explicitly to this
 * section. `Dine · Discover · Connect` is the approved triptych.
 */
export function ExperiencePillars({ content, headingId }: ExperiencePillarsProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="meste-section meste-section--forest meste-experience-band"
    >
      <Container>
        <h2 className="meste-experience-band__title" id={headingId}>
          {content.heading}
        </h2>

        <ul className="meste-experience-pillars">
          {content.items.map((pillar) => (
            <li key={pillar.title}>
              <SubHeading as="h3" className="meste-experience-pillar__title">
                {pillar.title}
              </SubHeading>
              <p className="meste-experience-pillar__detail">{pillar.detail}</p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
