import Link from 'next/link'

import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { editorialIndex } from '@/lib/format'
import type { WorldsContent } from '@/lib/home/types'
import type { Locale } from '@/lib/i18n/config'
import { routePath } from '@/lib/routes'

type WorldsSectionProps = {
  content: WorldsContent
  headingId: string
  locale: Locale
}

export function WorldsSection({ content, headingId, locale }: WorldsSectionProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <SectionHead eyebrow={content.eyebrow} heading={content.heading} headingId={headingId} />

      <ul className="meste-index">
        {content.items.map((item, index) => (
          <li key={item.title}>
            <Link className="meste-index__row" href={routePath(item.route, locale)}>
              <span aria-hidden="true" className="meste-numeral">
                {editorialIndex(index)}
              </span>
              <span className="meste-index__title">{item.title}</span>
              <span className="meste-index__detail">{item.detail}</span>
              <span aria-hidden="true" className="meste-index__arrow">
                &rarr;
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Section>
  )
}
