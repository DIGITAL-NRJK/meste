import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { SubHeading } from '@/components/ui/Typography'
import type { MenusContent } from '@/lib/pages/menus/types'

type CulinaryLevelsProps = {
  content: MenusContent['levels']
  headingId: string
}

export function CulinaryLevels({ content, headingId }: CulinaryLevelsProps) {
  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <ul className="meste-levels">
        {content.items.map((level) => (
          <li className="meste-level" key={level.name}>
            <SubHeading className="meste-level__name">{level.name}</SubHeading>
            <p className="meste-level__body">{level.body}</p>

            {level.list.length > 0 ? (
              <ul className="meste-level__list">
                {level.list.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </Section>
  )
}
