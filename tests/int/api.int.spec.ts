import { afterAll, beforeAll, describe, expect, it } from 'vitest'
import { getPayload } from 'payload'
import type { Payload } from 'payload'

import config from '@/payload.config'

let payload: Payload
let pageID: number | string | undefined

const testSlug = 'phase-three-integration-test'

const testContext = {
  skipRedirects: true,
  skipRevalidation: true,
}

describe('Payload publication and privacy boundaries', () => {
  beforeAll(async () => {
    payload = await getPayload({ config })
  })

  afterAll(async () => {
    if (!payload) {
      return
    }
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

  it('refuses anonymous reads of users and private operational collections', async () => {
    const privateCollections = ['users', 'leads', 'experience-interest'] as const

    // Payload denies these outright rather than returning an empty page of
    // results, so the contract to assert is the rejection, not a doc count.
    for (const collection of privateCollections) {
      await expect(payload.find({ collection, overrideAccess: false })).rejects.toMatchObject({
        status: 403,
      })
    }
  })

  it('requires both published status and locale readiness for public page reads', async () => {
    const page = await payload.create({
      collection: 'pages',
      context: testContext,
      data: {
        localeReadiness: { en: false, fr: false },
        pageKind: 'editorial',
        slug: testSlug,
        title: 'Phase three integration test',
      },
      draft: true,
      locale: 'en',
      overrideAccess: true,
    })
    pageID = page.id

    // The public filter lives in collection access control. Tests query by slug
    // only, so they verify the boundary instead of re-implementing it.
    const readPublicly = (locale: 'en' | 'fr') =>
      payload.find({
        collection: 'pages',
        fallbackLocale: false,
        locale,
        overrideAccess: false,
        where: { slug: { equals: testSlug } },
      })

    const draftResult = await readPublicly('en')
    expect(draftResult.docs).toHaveLength(0)

    await payload.update({
      id: page.id,
      collection: 'pages',
      context: testContext,
      data: { _status: 'published', localeReadiness: { en: true, fr: false } },
      draft: false,
      locale: 'en',
      overrideAccess: true,
    })

    const englishResult = await readPublicly('en')
    expect(englishResult.docs).toHaveLength(1)

    // Published, but French was never reviewed: it must stay invisible.
    const frenchResult = await readPublicly('fr')
    expect(frenchResult.docs).toHaveLength(0)
  })
})
