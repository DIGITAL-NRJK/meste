import { draftMode } from 'next/headers'

export async function PreviewBanner() {
  const { isEnabled } = await draftMode()

  if (!isEnabled) {
    return null
  }

  return (
    <aside className="preview-banner" role="status">
      <span>Draft preview</span>
      <form action="/api/preview/exit" method="post">
        <button type="submit">Exit preview</button>
      </form>
    </aside>
  )
}
