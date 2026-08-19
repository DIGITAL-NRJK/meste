import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { SubHeading } from '@/components/ui/Typography'
import type { MenusContent } from '@/lib/pages/menus/types'

type MenuFamiliesProps = {
  content: MenusContent['families']
  headingId: string
}

export function MenuFamilies({ content, headingId }: MenuFamiliesProps) {
  if (content.items.length === 0) {
    return null
  }

  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <div className="meste-families">
        {content.items.map((family) => (
          <section className="meste-family" key={family.name}>
            <SubHeading as="h3" className="meste-family__name">
              {family.name}
            </SubHeading>

            {family.note ? <p className="meste-family__note">{family.note}</p> : null}

            <ul className="meste-family__dishes">
              {family.dishes.map((dish) => (
                <li key={dish}>{dish}</li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Section>
  )
}
