import { Frame } from '@/components/ui/Frame'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { BodyCopy, SubHeading } from '@/components/ui/Typography'
import type { ServicesContent } from '@/lib/pages/services/types'

type ReceptionFormatsProps = {
  content: ServicesContent['formats']
  headingId: string
}

/**
 * Formats are carried by photography, as the brief requires. A format with no
 * approved shoot shows a named placeholder rather than an icon.
 *
 * No guest range appears: none has been verified.
 */
export function ReceptionFormats({ content, headingId }: ReceptionFormatsProps) {
  return (
    <Section labelledBy={headingId} ruled>
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <BodyCopy className="meste-formats-note">{content.note}</BodyCopy>

      <ul className="meste-format-list">
        {content.items.map((format) => (
          <li className="meste-format" key={format.name}>
            {format.media ? (
              <Frame media={format.media} ratio="portrait" sizes="(max-width: 60rem) 80vw, 22vw" />
            ) : null}

            <SubHeading className="meste-format__name">{format.name}</SubHeading>
            <p className="meste-format__description">{format.description}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
