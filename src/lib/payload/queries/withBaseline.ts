import { getPayloadClient } from '@/lib/payload/client'

type PayloadClient = Awaited<ReturnType<typeof getPayloadClient>>

/**
 * Reads content from Payload, and answers with the approved baseline when it
 * cannot.
 *
 * Every interior page makes the same promise: the CMS drives what it shows, and
 * code is what it falls back to — an unreachable database, a schema that has
 * drifted, a query that throws. That promise used to be written out eight
 * times, once per query, which is eight chances to forget it in the ninth.
 *
 * The quote page deliberately does not use this. It is the one page that must
 * *not* degrade: a form with no consent wording has to disappear rather than
 * publish itself half-configured, so it answers `null` and the route serves a
 * 404 instead.
 */
export async function withBaseline<T>(
  name: string,
  baseline: T,
  read: (payload: PayloadClient) => Promise<T>,
): Promise<T> {
  try {
    return await read(await getPayloadClient())
  } catch (error) {
    console.error(`[${name}] falling back to the editorial baseline`, error)
    return baseline
  }
}
