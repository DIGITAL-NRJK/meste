import { Frame } from '@/components/ui/Frame'
import { Section } from '@/components/ui/Section'
import { SectionHead } from '@/components/ui/SectionHead'
import { Eyebrow, SubHeading } from '@/components/ui/Typography'
import { editorialIndex } from '@/lib/format'
import type { AboutChapters } from '@/lib/pages/about/types'

type StoryChaptersProps = {
  content: AboutChapters
  headingId: string
}

/**
 * Six chapters read as an editorial sequence rather than a corporate timeline.
 *
 * A chapter with photography puts the frame opposite the copy and alternates
 * side. A chapter without photography splits its own copy instead — heading on
 * one side, narrative on the other — so the row stays composed rather than
 * leaving half the page blank while the shoots are outstanding.
 */
export function StoryChapters({ content, headingId }: StoryChaptersProps) {
  return (
    <Section labelledBy={headingId} ruled tone="alt">
      <SectionHead
        accent={content.headingAccent}
        eyebrow={content.eyebrow}
        heading={content.heading}
        headingId={headingId}
      />

      <ol className="meste-chapters">
        {content.items.map((chapter, index) => (
          <li
            className="meste-chapter"
            data-media={chapter.media ? 'true' : 'false'}
            data-side={index % 2 === 0 ? 'start' : 'end'}
            key={chapter.label}
          >
            <div className="meste-chapter__copy">
              <div className="meste-chapter__head">
                <p className="meste-chapter__index">
                  <span aria-hidden="true">{editorialIndex(index)}</span>
                  <Eyebrow className="meste-chapter__label">{chapter.label}</Eyebrow>
                </p>

                <SubHeading className="meste-chapter__title">{chapter.title}</SubHeading>
              </div>

              <div className="meste-chapter__narrative">
                {chapter.body.map((paragraph) => (
                  <p className="meste-chapter__body" key={paragraph.slice(0, 48)}>
                    {paragraph}
                  </p>
                ))}

                {chapter.list.length > 0 ? (
                  <ul className="meste-chapter__list">
                    {chapter.list.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : null}
              </div>
            </div>

            {chapter.media ? (
              <Frame
                className="meste-chapter__frame"
                media={chapter.media}
                ratio="landscape"
                sizes="(max-width: 900px) 100vw, 42vw"
              />
            ) : null}
          </li>
        ))}
      </ol>
    </Section>
  )
}
