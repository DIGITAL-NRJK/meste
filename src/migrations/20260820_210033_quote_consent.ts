import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_settings" ADD COLUMN "quote_consent_version" varchar;
  ALTER TABLE "contact_settings_locales" ADD COLUMN "quote_consent_statement" varchar;
  ALTER TABLE "_contact_settings_v" ADD COLUMN "version_quote_consent_version" varchar;
  ALTER TABLE "_contact_settings_v_locales" ADD COLUMN "version_quote_consent_statement" varchar;`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "contact_settings" DROP COLUMN "quote_consent_version";
  ALTER TABLE "contact_settings_locales" DROP COLUMN "quote_consent_statement";
  ALTER TABLE "_contact_settings_v" DROP COLUMN "version_quote_consent_version";
  ALTER TABLE "_contact_settings_v_locales" DROP COLUMN "version_quote_consent_statement";`)
}
