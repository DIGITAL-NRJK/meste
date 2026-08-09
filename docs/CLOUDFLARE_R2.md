# Cloudflare R2 Setup

MESTE uses Cloudflare R2 through Payload's S3-compatible adapter. The Cloudflare Workers-native R2 adapter is not used because the application runs in a Node.js environment on Netlify.

## Local behavior

Leave every `R2_*` variable empty to store development uploads in the ignored `/media` directory. Do not use local storage in production.

## Bucket setup

1. Create separate production and non-production buckets or strictly isolated prefixes.
2. Create bucket-scoped API credentials with only the object operations Payload needs.
3. Configure a public delivery domain, preferably `media.<MESTE_DOMAIN>`.
4. Do not expose write credentials to the browser.

## Environment variables

```dotenv
R2_ACCOUNT_ID=
R2_ACCESS_KEY_ID=
R2_SECRET_ACCESS_KEY=
R2_BUCKET=
R2_ENDPOINT=https://<account-id>.r2.cloudflarestorage.com
R2_PUBLIC_URL=https://media.example.com
```

`R2_ENDPOINT` is the S3 upload API. `R2_PUBLIC_URL` is the public delivery origin. They are not interchangeable.

The adapter uses `region: auto` and `forcePathStyle: true`, as required for R2's S3-compatible interface. Public file URLs are normalized centrally; components never hardcode the domain.

## Safety behavior

- All six variables must be present together.
- A partial setup fails at configuration time.
- Netlify `CONTEXT=production` fails without complete R2 configuration.
- Enabling the adapter disables local storage for Media.
- Uploads go through authenticated Payload operations, not arbitrary direct browser writes.

## Preview isolation

Deploy Previews must use a non-production R2 bucket or isolated prefix and non-production credentials. Never provide production R2 write credentials to untrusted previews.

## Common errors

- **Partial configuration:** compare all six keys with `.env.example`.
- **Uploads work but images do not render:** verify `R2_PUBLIC_URL` and the public/custom-domain setting.
- **Signature/endpoint error:** verify the endpoint account ID, `region: auto`, and path-style addressing.
- **Next Image rejects the host:** rebuild after setting `R2_PUBLIC_URL`; `next.config.ts` derives its remote pattern at build time.
