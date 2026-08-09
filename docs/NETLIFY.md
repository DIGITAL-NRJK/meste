# Netlify Foundation

## Site setup

1. Connect the future owner-controlled GitHub repository.
2. Set `main` as the production branch.
3. Let `netlify.toml` supply the build command and runtime versions.
4. Configure secrets through the Netlify UI/CLI/API, never in `netlify.toml`.

## Runtime

- Node.js: 24.14.0
- pnpm: 11.16.0
- Build output: `.next`
- Standard build: `pnpm build`

Production, deploy-preview, and branch-deploy commands apply committed Payload migrations before building. Schema-changing work must use isolated non-production databases in previews.

## Environment contexts

Configure different values for:

- Production
- Deploy Previews
- Branch deploys
- Local development

At minimum set pooled `DATABASE_URL`, direct `DATABASE_URL_UNPOOLED`, `PAYLOAD_SECRET`, and `NEXT_PUBLIC_SERVER_URL` per context. Production additionally requires complete R2 configuration. Normal application traffic uses the pooled URL; Payload migration commands select the direct URL automatically.

Do not give a Deploy Preview the production `DATABASE_URL`, R2 credentials, Resend key, or Payload secret. Prefer a Neon branch per preview; otherwise use an explicit shared non-production branch and serialize schema-changing previews.

## Build and migration flow

```text
feature branch -> GitHub CI -> Netlify Deploy Preview -> review
-> merge to main -> production migration -> production build/deploy
```

Payload development schema push is for disposable local development only. Production changes use committed migrations and, for breaking changes, expand/migrate/contract releases.

## Domain setup

The final domain is not yet known. When supplied:

1. Add it in Netlify.
2. Set `NEXT_PUBLIC_SERVER_URL` to its canonical HTTPS origin.
3. Configure DNS.
4. Configure the separate R2 media domain in Cloudflare.
5. Rebuild so metadata and image remote patterns use the final origins.

## Troubleshooting

- **Build fails on environment validation:** compare the context values with `.env.example`.
- **Production reports missing R2:** all six R2 keys are mandatory in `CONTEXT=production`.
- **Database connection exhaustion:** verify the Neon URL uses the `-pooler` endpoint.
- **Preview changes production data:** immediately remove production secrets from preview context and rotate exposed credentials.
- **Sentry keys absent:** expected in Phase 2; the project does not initialize Sentry yet.
