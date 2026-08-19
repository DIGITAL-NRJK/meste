/**
 * Static image imports are typed by `next-env.d.ts`, which Next.js writes on
 * `dev`/`build` and which is gitignored. CI runs `tsc --noEmit` on a fresh
 * checkout before any build, so that file does not exist yet and the brand
 * assets imported from `/public` would be untyped. Committing the reference
 * here keeps type checking self-sufficient.
 */

/// <reference types="next/image-types/global" />
