import { afterEach, describe, expect, it, vi } from 'vitest'

const revalidateTag = vi.fn()
const after = vi.fn()

vi.mock('next/cache', () => ({
  revalidateTag: (...args: unknown[]) => revalidateTag(...args),
}))

vi.mock('next/server', () => ({
  after: (task: () => void) => after(task),
}))

const { createCollectionHooks, createGlobalHooks } = await import('@/hooks/revalidateContent')

type Hook = (args: { context: Record<string, unknown>; doc: { id: number } }) => unknown

const runAfterChange = (hooks: { afterChange?: unknown[] } | undefined, context = {}) => {
  const [hook] = (hooks?.afterChange ?? []) as Hook[]
  return hook({ context, doc: { id: 7 } })
}

/** Plays the task `after` was handed, the way Next.js does once the response is out. */
const flush = () => {
  for (const [task] of after.mock.calls as [() => void][]) {
    task()
  }
}

afterEach(() => {
  revalidateTag.mockReset()
  after.mockReset()
})

describe('content revalidation', () => {
  /**
   * The heart of the fix. Next.js refuses revalidation while a route renders,
   * and Payload's admin writes during one. Deferring with `after` moves the
   * call past the response, where the same call is accepted — so publishing
   * actually refreshes the public site instead of quietly doing nothing.
   */
  it('defers the work instead of running it during the render', () => {
    runAfterChange(createCollectionHooks('pages'))

    expect(after).toHaveBeenCalledTimes(1)
    expect(revalidateTag).not.toHaveBeenCalled()

    flush()

    expect(revalidateTag.mock.calls).toEqual([
      ['collection:pages', 'max'],
      ['document:pages:7', 'max'],
      ['sitemap', 'max'],
    ])
  })

  it('names the global and the sitemap', () => {
    runAfterChange(createGlobalHooks('contact-settings'))
    flush()

    expect(revalidateTag.mock.calls.map(([tag]) => tag)).toEqual([
      'global:contact-settings',
      'sitemap',
    ])
  })

  it('stays out of the way when the caller asks it to', () => {
    runAfterChange(createCollectionHooks('pages'), { skipRevalidation: true })

    expect(after).not.toHaveBeenCalled()
    expect(revalidateTag).not.toHaveBeenCalled()
  })

  /**
   * A seed script or a migration writes documents with no request to defer to.
   * There is no rendered page to invalidate in that case, and the write must
   * still succeed.
   */
  it('never lets a missing request scope break the write', () => {
    after.mockImplementation(() => {
      throw new Error('`after` was called outside a request scope')
    })

    expect(() => runAfterChange(createCollectionHooks('pages'))).not.toThrow()
    expect(() => runAfterChange(createGlobalHooks('header'))).not.toThrow()
  })

  it('returns the document unchanged', () => {
    expect(runAfterChange(createGlobalHooks('header'))).toEqual({ id: 7 })
  })
})
