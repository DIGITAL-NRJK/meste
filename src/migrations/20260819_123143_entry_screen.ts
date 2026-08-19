import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_entry_screen_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__entry_screen_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__entry_screen_v_published_locale" AS ENUM('en', 'fr');
  CREATE TABLE "entry_screen" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"enabled" boolean DEFAULT false,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"_status" "enum_entry_screen_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "entry_screen_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_entry_screen_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_enabled" boolean DEFAULT false,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version__status" "enum__entry_screen_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__entry_screen_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_entry_screen_v_locales" (
  	"version_eyebrow" varchar,
  	"version_heading" varchar,
  	"version_body" varchar,
  	"version_cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "entry_screen_locales" ADD CONSTRAINT "entry_screen_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."entry_screen"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_entry_screen_v_locales" ADD CONSTRAINT "_entry_screen_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_entry_screen_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "entry_screen__status_idx" ON "entry_screen" USING btree ("_status");
  CREATE UNIQUE INDEX "entry_screen_locales_locale_parent_id_unique" ON "entry_screen_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_entry_screen_v_version_version__status_idx" ON "_entry_screen_v" USING btree ("version__status");
  CREATE INDEX "_entry_screen_v_created_at_idx" ON "_entry_screen_v" USING btree ("created_at");
  CREATE INDEX "_entry_screen_v_updated_at_idx" ON "_entry_screen_v" USING btree ("updated_at");
  CREATE INDEX "_entry_screen_v_snapshot_idx" ON "_entry_screen_v" USING btree ("snapshot");
  CREATE INDEX "_entry_screen_v_published_locale_idx" ON "_entry_screen_v" USING btree ("published_locale");
  CREATE INDEX "_entry_screen_v_latest_idx" ON "_entry_screen_v" USING btree ("latest");
  CREATE INDEX "_entry_screen_v_autosave_idx" ON "_entry_screen_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_entry_screen_v_locales_locale_parent_id_unique" ON "_entry_screen_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "entry_screen" CASCADE;
  DROP TABLE "entry_screen_locales" CASCADE;
  DROP TABLE "_entry_screen_v" CASCADE;
  DROP TABLE "_entry_screen_v_locales" CASCADE;
  DROP TYPE "public"."enum_entry_screen_status";
  DROP TYPE "public"."enum__entry_screen_v_version_status";
  DROP TYPE "public"."enum__entry_screen_v_published_locale";`)
}
