import { Container } from '@/components/ui/Container'
import { Eyebrow, Heading, Accent } from '@/components/ui/Typography'
import type { MenusContent } from '@/lib/pages/menus/types'

type SignatureMenuListProps = {
  content: MenusContent['signatureMenus']
  headingId: string
}

/**
 * The five signature menus are named, and nothing more: their subtitles,
 * introductions and courses are not in the approved material, so they arrive
 * with the CMS rather than being imagined here.
 */
export function SignatureMenuList({ content, headingId }: SignatureMenuListProps) {
  return (
    <section
      aria-labelledby={headingId}
      className="meste-section meste-section--burgundy meste-signature-menus"
    >
      <Container>
        <Eyebrow>{content.eyebrow}</Eyebrow>

        <Heading className="meste-signature-menus__title" id={headingId}>
          {content.heading} <Accent>{content.headingAccent}</Accent>
        </Heading>

        <ol className="meste-signature-menus__list">
          {content.items.map((title) => (
            <li key={title}>{title}</li>
          ))}
        </ol>

        <p className="meste-signature-menus__note">{content.note}</p>
      </Container>
    </section>
  )
}
