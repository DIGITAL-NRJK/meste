import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@/payload.config'

let payload: Payload
let pageID: number | string | undefined

const testContext = {
  skipRedirects: true,
  skipRevalidation: true,
}

describe('Payload publication and privacy boundaries', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
  })

  afterAll(async () => {
    if (pageID) {
      await payload.delete({
        id: pageID,
        collection: 'pages',
        context: testContext,
        overrideAccess: true,
      })
    }

    await payload.destroy()
  })

  it('does not expose users or private operational collections anonymously', async () => {
    const [users, leads, interests] = await Promise.all([
      payload.find({ collection: 'users', overrideAccess: false }),
      payload.find({ collection: 'leads', overrideAccess: false }),
      payload.find({ collection: 'experience-interest', overrideAccess: false }),
    ])

    expect(users.docs).toHaveLength(0)
    expect(leads.docs).toHaveLength(0)
    expect(interests.docs).toHaveLength(0)
  })

  it('requires both published status and locale readiness for public page reads', async () => {
    const page = await payload.create({
      collection: 'pages',
      context: testContext,
      data: {
        localeReadiness: { en: false, fr: false },
        pageKind: 'editorial',
        slug: 'phase-three-integration-test',
        title: 'Phase three integration test',
      },
      draft: true,
      locale: 'en',
      overrideAccess: true,
    })
    pageID = page.id

    const draftResult = await payload.find({
      collection: 'pages',
      fallbackLocale: false,
      locale: 'en',
      overrideAccess: false,
      where: { slug: { equals: 'phase-three-integration-test' } },
    })
    expect(draftResult.docs).toHaveLength(0)

    await payload.update({
      id: page.id,
      collection: 'pages',
      context: testContext,
      data: { localeReadiness: { en: true, fr: false } },
      draft: false,
      locale: 'en',
      overrideAccess: true,
    })

    const publicResult = await payload.find({
      collection: 'pages',
      fallbackLocale: false,
      locale: 'en',
      overrideAccess: false,
      where: {
        and: [
          { slug: { equals: 'phase-three-integration-test' } },
          { 'localeReadiness.en': { equals: true } },
        ],
      },
    })
    expect(publicResult.docs).toHaveLength(1)
  })
})
