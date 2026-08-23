import { afterEach, describe, expect, it, vi } from 'vitest'

const revalidateTag = vi.fn()

vi.mock('next/cache', () => ({
  revalidateTag: (...args: unknown[]) => revalidateTag(...args),
}))

const { createCollectionHooks, createGlobalHooks } = await import('@/hooks/revalidateContent')

type Hook = (args: { context: Record<string, unknown>; doc: { id: number } }) => unknown

const runAfterChange = (hooks: { afterChange?: unknown[] } | undefined, context = {}) => {
  const [hook] = (hooks?.afterChange ?? []) as Hook[]
  return hook({ context, doc: { id: 7 } })
}

afterEach(() => {
  revalidateTag.mockReset()
})

describe('content revalidation', () => {
  it('names the collection, the document and the sitemap', () => {
    runAfterChange(createCollectionHooks('pages'))

    expect(revalidateTag.mock.calls.map(([tag]) => tag)).toEqual([
      'collection:pages',
      'document:pages:7',
      'sitemap',
    ])
  })

  it('stays out of the way when the caller asks it to', () => {
    runAfterChange(createCollectionHooks('pages'), { skipRevalidation: true })

    expect(revalidateTag).not.toHaveBeenCalled()
  })

  /**
   * The defect that made the admin unusable. Next.js refuses revalidation
   * during a render, and Payload autosaves a draft while the create view is
   * rendering — so the rejection killed the render and the editor got a blank
   * screen instead of a form.
   */
  it('never lets a refused revalidation break the save', () => {
    revalidateTag.mockImplementation(() => {
      throw new Error('used "revalidateTag" during render which is unsupported')
    })

    expect(() => runAfterChange(createCollectionHooks('pages'))).not.toThrow()
    expect(() => runAfterChange(createGlobalHooks('contact-settings'))).not.toThrow()
  })

  /** One failure must not stop the tags that follow it. */
  it('keeps going after one tag is refused', () => {
    revalidateTag.mockImplementationOnce(() => {
      throw new Error('refused')
    })

    runAfterChange(createCollectionHooks('pages'))

    expect(revalidateTag).toHaveBeenCalledTimes(3)
  })

  it('returns the document unchanged', () => {
    expect(runAfterChange(createGlobalHooks('header'))).toEqual({ id: 7 })
  })
})
