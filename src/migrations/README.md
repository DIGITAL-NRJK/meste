# Payload migrations

The initial Phase 3 schema is captured by `20260809_172137_phase_3_cms`.

- Generate reviewed changes with `pnpm payload migrate:create <name>`.
- Apply committed migrations with `pnpm payload migrate`.
- Test both `up` and `down` logic against non-production PostgreSQL before release.
- Never use development schema push against preview or production databases.
