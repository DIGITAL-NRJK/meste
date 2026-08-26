import { afterEach, describe, expect, it, vi } from 'vitest'

const getPayloadClient = vi.fn()

vi.mock('@/lib/payload/client', () => ({
  getPayloadClient: () => getPayloadClient(),
}))

const { withBaseline } = await import('@/lib/payload/queries/withBaseline')

const baseline = { heading: 'Approved wording' }

afterEach(() => {
  getPayloadClient.mockReset()
  vi.restoreAllMocks()
})

describe('withBaseline', () => {
  it('answers with what the CMS returned, and hands over the client', async () => {
    const client = { marker: 'the payload client' }
    getPayloadClient.mockResolvedValue(client)

    let received: unknown
    const result = await withBaseline('about', baseline, async (payload) => {
      received = payload
      return { heading: 'from the CMS' }
    })

    expect(result).toEqual({ heading: 'from the CMS' })
    expect(received).toBe(client)
  })

  /**
   * The promise every interior page makes: the CMS drives what it shows, and
   * code is what it falls back to. Written once now, instead of once per query.
   */
  it('falls back when the read throws, and says which page it was', async () => {
    const logged = vi.spyOn(console, 'error').mockImplementation(() => {})
    getPayloadClient.mockResolvedValue({})

    const result = await withBaseline('menus', baseline, async () => {
      throw new Error('relation "pages" does not exist')
    })

    expect(result).toBe(baseline)
    expect(logged).toHaveBeenCalledWith(
      '[menus] falling back to the editorial baseline',
      expect.any(Error),
    )
  })

  /** An unreachable database fails before the read ever runs. */
  it('falls back when the client itself cannot be reached', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    getPayloadClient.mockRejectedValue(new Error('connection timeout'))

    const read = vi.fn()
    const result = await withBaseline('chrome', baseline, read)

    expect(result).toBe(baseline)
    expect(read).not.toHaveBeenCalled()
  })

  /** The fallback is whatever the caller passes, not necessarily a baseline. */
  it('returns the exact value it was given', async () => {
    vi.spyOn(console, 'error').mockImplementation(() => {})
    getPayloadClient.mockResolvedValue({})

    const disabled = { ...baseline, enabled: false }
    const result = await withBaseline('entry', disabled, async () => {
      throw new Error('nope')
    })

    expect(result).toBe(disabled)
  })
})
