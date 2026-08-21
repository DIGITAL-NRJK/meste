import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_pages_editorial_closing_action_route" AS ENUM('about', 'contact', 'gallery', 'fresh', 'menus', 'quote', 'services', 'experience');
  CREATE TYPE "public"."enum__pages_v_version_editorial_closing_action_route" AS ENUM('about', 'contact', 'gallery', 'fresh', 'menus', 'quote', 'services', 'experience');
  CREATE TABLE "pages_about_story_chapters_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_about_story_chapters_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_about_story_chapters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"image_id" integer
  );
  
  CREATE TABLE "_pages_v_version_about_story_chapters_body" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_about_story_chapters_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_about_story_chapters" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"label" varchar,
  	"title" varchar,
  	"image_id" integer,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages" ADD COLUMN "editorial_closing_action_route" "enum_pages_editorial_closing_action_route";
  ALTER TABLE "pages" ADD COLUMN "about_story_intro_image_id" integer;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_intro_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_intro_heading_lead" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_intro_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_intro_lede" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_closing_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_closing_body" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "editorial_closing_action_label" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "about_story_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "about_story_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "about_story_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "about_story_pull_quote_text" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "about_story_pull_quote_attribution" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "contact_channels_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "contact_channels_heading" varchar;
  ALTER TABLE "_pages_v" ADD COLUMN "version_editorial_closing_action_route" "enum__pages_v_version_editorial_closing_action_route";
  ALTER TABLE "_pages_v" ADD COLUMN "version_about_story_intro_image_id" integer;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_intro_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_intro_heading_lead" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_intro_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_intro_lede" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_closing_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_closing_body" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_editorial_closing_action_label" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_about_story_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_about_story_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_about_story_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_about_story_pull_quote_text" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_about_story_pull_quote_attribution" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_contact_channels_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_contact_channels_heading" varchar;
  ALTER TABLE "pages_about_story_chapters_body" ADD CONSTRAINT "pages_about_story_chapters_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_about_story_chapters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_about_story_chapters_list" ADD CONSTRAINT "pages_about_story_chapters_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_about_story_chapters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_about_story_chapters" ADD CONSTRAINT "pages_about_story_chapters_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_about_story_chapters" ADD CONSTRAINT "pages_about_story_chapters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_about_story_chapters_body" ADD CONSTRAINT "_pages_v_version_about_story_chapters_body_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_about_story_chapters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_about_story_chapters_list" ADD CONSTRAINT "_pages_v_version_about_story_chapters_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_about_story_chapters"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_about_story_chapters" ADD CONSTRAINT "_pages_v_version_about_story_chapters_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_version_about_story_chapters" ADD CONSTRAINT "_pages_v_version_about_story_chapters_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_about_story_chapters_body_order_idx" ON "pages_about_story_chapters_body" USING btree ("_order");
  CREATE INDEX "pages_about_story_chapters_body_parent_id_idx" ON "pages_about_story_chapters_body" USING btree ("_parent_id");
  CREATE INDEX "pages_about_story_chapters_body_locale_idx" ON "pages_about_story_chapters_body" USING btree ("_locale");
  CREATE INDEX "pages_about_story_chapters_list_order_idx" ON "pages_about_story_chapters_list" USING btree ("_order");
  CREATE INDEX "pages_about_story_chapters_list_parent_id_idx" ON "pages_about_story_chapters_list" USING btree ("_parent_id");
  CREATE INDEX "pages_about_story_chapters_list_locale_idx" ON "pages_about_story_chapters_list" USING btree ("_locale");
  CREATE INDEX "pages_about_story_chapters_order_idx" ON "pages_about_story_chapters" USING btree ("_order");
  CREATE INDEX "pages_about_story_chapters_parent_id_idx" ON "pages_about_story_chapters" USING btree ("_parent_id");
  CREATE INDEX "pages_about_story_chapters_locale_idx" ON "pages_about_story_chapters" USING btree ("_locale");
  CREATE INDEX "pages_about_story_chapters_image_idx" ON "pages_about_story_chapters" USING btree ("image_id");
  CREATE INDEX "_pages_v_version_about_story_chapters_body_order_idx" ON "_pages_v_version_about_story_chapters_body" USING btree ("_order");
  CREATE INDEX "_pages_v_version_about_story_chapters_body_parent_id_idx" ON "_pages_v_version_about_story_chapters_body" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_about_story_chapters_body_locale_idx" ON "_pages_v_version_about_story_chapters_body" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_about_story_chapters_list_order_idx" ON "_pages_v_version_about_story_chapters_list" USING btree ("_order");
  CREATE INDEX "_pages_v_version_about_story_chapters_list_parent_id_idx" ON "_pages_v_version_about_story_chapters_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_about_story_chapters_list_locale_idx" ON "_pages_v_version_about_story_chapters_list" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_about_story_chapters_order_idx" ON "_pages_v_version_about_story_chapters" USING btree ("_order");
  CREATE INDEX "_pages_v_version_about_story_chapters_parent_id_idx" ON "_pages_v_version_about_story_chapters" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_about_story_chapters_locale_idx" ON "_pages_v_version_about_story_chapters" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_about_story_chapters_image_idx" ON "_pages_v_version_about_story_chapters" USING btree ("image_id");
  ALTER TABLE "pages" ADD CONSTRAINT "pages_about_story_intro_image_id_media_id_fk" FOREIGN KEY ("about_story_intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_about_story_intro_image_id_media_id_fk" FOREIGN KEY ("version_about_story_intro_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  CREATE INDEX "pages_about_story_about_story_intro_image_idx" ON "pages" USING btree ("about_story_intro_image_id");
  CREATE INDEX "_pages_v_version_about_story_version_about_story_intro_i_idx" ON "_pages_v" USING btree ("version_about_story_intro_image_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "pages_about_story_chapters_body" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_about_story_chapters_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "pages_about_story_chapters" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_about_story_chapters_body" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_about_story_chapters_list" DISABLE ROW LEVEL SECURITY;
  ALTER TABLE "_pages_v_version_about_story_chapters" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "pages_about_story_chapters_body" CASCADE;
  DROP TABLE "pages_about_story_chapters_list" CASCADE;
  DROP TABLE "pages_about_story_chapters" CASCADE;
  DROP TABLE "_pages_v_version_about_story_chapters_body" CASCADE;
  DROP TABLE "_pages_v_version_about_story_chapters_list" CASCADE;
  DROP TABLE "_pages_v_version_about_story_chapters" CASCADE;
  ALTER TABLE "pages" DROP CONSTRAINT "pages_about_story_intro_image_id_media_id_fk";
  
  ALTER TABLE "_pages_v" DROP CONSTRAINT "_pages_v_version_about_story_intro_image_id_media_id_fk";
  
  DROP INDEX "pages_about_story_about_story_intro_image_idx";
  DROP INDEX "_pages_v_version_about_story_version_about_story_intro_i_idx";
  ALTER TABLE "pages" DROP COLUMN "editorial_closing_action_route";
  ALTER TABLE "pages" DROP COLUMN "about_story_intro_image_id";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_intro_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_intro_heading_lead";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_intro_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_intro_lede";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_closing_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_closing_body";
  ALTER TABLE "pages_locales" DROP COLUMN "editorial_closing_action_label";
  ALTER TABLE "pages_locales" DROP COLUMN "about_story_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "about_story_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "about_story_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "about_story_pull_quote_text";
  ALTER TABLE "pages_locales" DROP COLUMN "about_story_pull_quote_attribution";
  ALTER TABLE "pages_locales" DROP COLUMN "contact_channels_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "contact_channels_heading";
  ALTER TABLE "_pages_v" DROP COLUMN "version_editorial_closing_action_route";
  ALTER TABLE "_pages_v" DROP COLUMN "version_about_story_intro_image_id";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_intro_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_intro_heading_lead";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_intro_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_intro_lede";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_closing_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_closing_body";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_editorial_closing_action_label";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_about_story_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_about_story_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_about_story_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_about_story_pull_quote_text";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_about_story_pull_quote_attribution";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_contact_channels_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_contact_channels_heading";
  DROP TYPE "public"."enum_pages_editorial_closing_action_route";
  DROP TYPE "public"."enum__pages_v_version_editorial_closing_action_route";`)
}
