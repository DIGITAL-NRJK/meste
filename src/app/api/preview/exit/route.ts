import { draftMode } from 'next/headers'
import { NextResponse } from 'next/server'

export async function POST(request: Request): Promise<Response> {
  const draft = await draftMode()
  draft.disable()

  return NextResponse.redirect(new URL('/en', request.url), { status: 303 })
}
