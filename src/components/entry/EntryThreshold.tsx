import { EntryVeil } from '@/components/entry/EntryVeil'
import { ENTRY_SESSION_KEY } from '@/lib/entry/content'
import type { EntryContent } from '@/lib/entry/types'

type EntryThresholdProps = {
  content: EntryContent
}

/**
 * Runs while the document is still parsing, before the veil paints, so a
 * returning visitor never sees it flash. React state re-syncs immediately
 * afterwards; this only prevents the flicker.
 */
const prePaintScript = `try{if(sessionStorage.getItem(${JSON.stringify(
  ENTRY_SESSION_KEY,
)})==='1'){document.documentElement.dataset.entered='true'}}catch(e){}`

export function EntryThreshold({ content }: EntryThresholdProps) {
  if (!content.enabled) {
    return null
  }

  return (
    <>
      <script dangerouslySetInnerHTML={{ __html: prePaintScript }} />
      <EntryVeil content={content} />
    </>
  )
}
