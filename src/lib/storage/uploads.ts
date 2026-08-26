import os from 'node:os'
import path from 'node:path'

import { hasR2Configured } from '@/lib/env/server'

/** Set by AWS Lambda, which is what Netlify Functions run on. */
function isServerlessRuntime(): boolean {
  return Boolean(process.env.AWS_LAMBDA_FUNCTION_NAME)
}

/**
 * Where Payload writes uploaded files.
 *
 * With R2 configured the storage plugin takes over and this directory is never
 * touched. Without it — deploy previews, local development — Payload falls back
 * to disk and makes sure the directory exists while the config is still
 * loading. A serverless filesystem is read-only everywhere except the system
 * temporary directory, so on Lambda that check would throw before anything is
 * served and take the whole function down with it.
 *
 * Files written to the temporary directory do not survive the instance, which
 * is the right trade for an environment whose only job is to let someone look
 * at the admin — and the wrong one for production, which is exactly why
 * production has R2.
 *
 * This lives beside the storage adapter rather than in the media collection:
 * where bytes are written is a question about infrastructure, and a file that
 * describes a content model should not have to know what a Lambda is.
 */
export function uploadDirectory(): string {
  if (hasR2Configured() || !isServerlessRuntime()) {
    return 'media'
  }

  return path.join(os.tmpdir(), 'meste-media')
}
