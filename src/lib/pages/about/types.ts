import type { MediaSlot } from '@/lib/home/types'
import type { PageClosing, PageIntro, PageMeta, PullQuote, StoryChapter } from '@/lib/pages/types'

export type AboutChapters = {
  eyebrow: string
  heading: string
  headingAccent: string
  items: StoryChapter[]
}

export type AboutContent = {
  chapters: AboutChapters
  closing: PageClosing
  intro: PageIntro & { media: MediaSlot }
  meta: PageMeta
  pullQuote: PullQuote
  skipToContent: string
}
