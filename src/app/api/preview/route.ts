import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'
import { getPayload } from 'payload'

import config from '@payload-config'

function isSafePreviewPath(value: string | null): value is string {
  return Boolean(value && /^\/(en|fr)(?:\/|$)/.test(value) && !value.startsWith('//'))
}

export async function GET(request: Request): Promise<Response> {
  const payload = await getPayload({ config })
  const { user } = await payload.auth({ headers: request.headers })

  if (!user) {
    return Response.json({ message: 'Authentication is required for preview.' }, { status: 401 })
  }

  const path = new URL(request.url).searchParams.get('path')

  if (!isSafePreviewPath(path)) {
    return Response.json({ message: 'Invalid preview path.' }, { status: 400 })
  }

  const draft = await draftMode()
  draft.enable()

  return NextResponse.redirect(new URL(path, request.url))
}
