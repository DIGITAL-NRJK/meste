import { MigrateUpArgs, MigrateDownArgs, sql } from "@payloadcms/db-postgres";

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TABLE "pages_services_content_worlds_items_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_services_content_worlds_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar
  );
  
  CREATE TABLE "pages_menus_content_levels_items_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_menus_content_levels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"body" varchar
  );
  
  CREATE TABLE "pages_fresh_content_culinary_items_uses" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_fresh_content_culinary_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"flavour" varchar
  );
  
  CREATE TABLE "pages_experience_content_universe_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"text" varchar
  );
  
  CREATE TABLE "pages_experience_content_pillars_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"detail" varchar
  );
  
  CREATE TABLE "_pages_v_version_services_content_worlds_items_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_services_content_worlds_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_menus_content_levels_items_list" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_menus_content_levels_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"body" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_fresh_content_culinary_items_uses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_fresh_content_culinary_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"flavour" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_experience_content_universe_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"text" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_pages_v_version_experience_content_pillars_items" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"title" varchar,
  	"detail" varchar,
  	"_uuid" varchar
  );
  
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_worlds_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_worlds_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_worlds_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_formats_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_formats_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_formats_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_formats_note" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_references_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_references_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "services_content_references_body" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_levels_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_levels_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_levels_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_families_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_families_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_families_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_dishes_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_dishes_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_dishes_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_dishes_intro" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_menus_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_menus_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_menus_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "menus_content_signature_menus_note" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_range_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_range_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_range_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_range_note" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_range_signature" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_culinary_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_culinary_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_culinary_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_culinary_intro" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "fresh_content_culinary_caveat" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "gallery_content_empty_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "gallery_content_empty_body" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "experience_content_universe_eyebrow" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "experience_content_universe_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "experience_content_universe_heading_accent" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "experience_content_universe_intro" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "experience_content_pillars_heading" varchar;
  ALTER TABLE "pages_locales" ADD COLUMN "experience_content_disclaimer" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_worlds_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_worlds_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_worlds_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_formats_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_formats_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_formats_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_formats_note" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_references_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_references_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_services_content_references_body" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_levels_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_levels_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_levels_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_families_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_families_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_families_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_dishes_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_dishes_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_dishes_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_dishes_intro" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_menus_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_menus_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_menus_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_menus_content_signature_menus_note" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_range_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_range_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_range_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_range_note" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_range_signature" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_culinary_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_culinary_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_culinary_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_culinary_intro" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_fresh_content_culinary_caveat" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_gallery_content_empty_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_gallery_content_empty_body" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_experience_content_universe_eyebrow" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_experience_content_universe_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_experience_content_universe_heading_accent" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_experience_content_universe_intro" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_experience_content_pillars_heading" varchar;
  ALTER TABLE "_pages_v_locales" ADD COLUMN "version_experience_content_disclaimer" varchar;
  ALTER TABLE "pages_services_content_worlds_items_items" ADD CONSTRAINT "pages_services_content_worlds_items_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_services_content_worlds_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_services_content_worlds_items" ADD CONSTRAINT "pages_services_content_worlds_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_menus_content_levels_items_list" ADD CONSTRAINT "pages_menus_content_levels_items_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_menus_content_levels_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_menus_content_levels_items" ADD CONSTRAINT "pages_menus_content_levels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_fresh_content_culinary_items_uses" ADD CONSTRAINT "pages_fresh_content_culinary_items_uses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages_fresh_content_culinary_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_fresh_content_culinary_items" ADD CONSTRAINT "pages_fresh_content_culinary_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_experience_content_universe_items" ADD CONSTRAINT "pages_experience_content_universe_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_experience_content_pillars_items" ADD CONSTRAINT "pages_experience_content_pillars_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_services_content_worlds_items_items" ADD CONSTRAINT "_pages_v_version_services_content_worlds_items_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_services_content_worlds_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_services_content_worlds_items" ADD CONSTRAINT "_pages_v_version_services_content_worlds_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_menus_content_levels_items_list" ADD CONSTRAINT "_pages_v_version_menus_content_levels_items_list_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_menus_content_levels_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_menus_content_levels_items" ADD CONSTRAINT "_pages_v_version_menus_content_levels_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_fresh_content_culinary_items_uses" ADD CONSTRAINT "_pages_v_version_fresh_content_culinary_items_uses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v_version_fresh_content_culinary_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_fresh_content_culinary_items" ADD CONSTRAINT "_pages_v_version_fresh_content_culinary_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_experience_content_universe_items" ADD CONSTRAINT "_pages_v_version_experience_content_universe_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_version_experience_content_pillars_items" ADD CONSTRAINT "_pages_v_version_experience_content_pillars_items_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "pages_services_content_worlds_items_items_order_idx" ON "pages_services_content_worlds_items_items" USING btree ("_order");
  CREATE INDEX "pages_services_content_worlds_items_items_parent_id_idx" ON "pages_services_content_worlds_items_items" USING btree ("_parent_id");
  CREATE INDEX "pages_services_content_worlds_items_items_locale_idx" ON "pages_services_content_worlds_items_items" USING btree ("_locale");
  CREATE INDEX "pages_services_content_worlds_items_order_idx" ON "pages_services_content_worlds_items" USING btree ("_order");
  CREATE INDEX "pages_services_content_worlds_items_parent_id_idx" ON "pages_services_content_worlds_items" USING btree ("_parent_id");
  CREATE INDEX "pages_services_content_worlds_items_locale_idx" ON "pages_services_content_worlds_items" USING btree ("_locale");
  CREATE INDEX "pages_menus_content_levels_items_list_order_idx" ON "pages_menus_content_levels_items_list" USING btree ("_order");
  CREATE INDEX "pages_menus_content_levels_items_list_parent_id_idx" ON "pages_menus_content_levels_items_list" USING btree ("_parent_id");
  CREATE INDEX "pages_menus_content_levels_items_list_locale_idx" ON "pages_menus_content_levels_items_list" USING btree ("_locale");
  CREATE INDEX "pages_menus_content_levels_items_order_idx" ON "pages_menus_content_levels_items" USING btree ("_order");
  CREATE INDEX "pages_menus_content_levels_items_parent_id_idx" ON "pages_menus_content_levels_items" USING btree ("_parent_id");
  CREATE INDEX "pages_menus_content_levels_items_locale_idx" ON "pages_menus_content_levels_items" USING btree ("_locale");
  CREATE INDEX "pages_fresh_content_culinary_items_uses_order_idx" ON "pages_fresh_content_culinary_items_uses" USING btree ("_order");
  CREATE INDEX "pages_fresh_content_culinary_items_uses_parent_id_idx" ON "pages_fresh_content_culinary_items_uses" USING btree ("_parent_id");
  CREATE INDEX "pages_fresh_content_culinary_items_uses_locale_idx" ON "pages_fresh_content_culinary_items_uses" USING btree ("_locale");
  CREATE INDEX "pages_fresh_content_culinary_items_order_idx" ON "pages_fresh_content_culinary_items" USING btree ("_order");
  CREATE INDEX "pages_fresh_content_culinary_items_parent_id_idx" ON "pages_fresh_content_culinary_items" USING btree ("_parent_id");
  CREATE INDEX "pages_fresh_content_culinary_items_locale_idx" ON "pages_fresh_content_culinary_items" USING btree ("_locale");
  CREATE INDEX "pages_experience_content_universe_items_order_idx" ON "pages_experience_content_universe_items" USING btree ("_order");
  CREATE INDEX "pages_experience_content_universe_items_parent_id_idx" ON "pages_experience_content_universe_items" USING btree ("_parent_id");
  CREATE INDEX "pages_experience_content_universe_items_locale_idx" ON "pages_experience_content_universe_items" USING btree ("_locale");
  CREATE INDEX "pages_experience_content_pillars_items_order_idx" ON "pages_experience_content_pillars_items" USING btree ("_order");
  CREATE INDEX "pages_experience_content_pillars_items_parent_id_idx" ON "pages_experience_content_pillars_items" USING btree ("_parent_id");
  CREATE INDEX "pages_experience_content_pillars_items_locale_idx" ON "pages_experience_content_pillars_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_services_content_worlds_items_items_order_idx" ON "_pages_v_version_services_content_worlds_items_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_services_content_worlds_items_items_parent_id_idx" ON "_pages_v_version_services_content_worlds_items_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_services_content_worlds_items_items_locale_idx" ON "_pages_v_version_services_content_worlds_items_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_services_content_worlds_items_order_idx" ON "_pages_v_version_services_content_worlds_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_services_content_worlds_items_parent_id_idx" ON "_pages_v_version_services_content_worlds_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_services_content_worlds_items_locale_idx" ON "_pages_v_version_services_content_worlds_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_menus_content_levels_items_list_order_idx" ON "_pages_v_version_menus_content_levels_items_list" USING btree ("_order");
  CREATE INDEX "_pages_v_version_menus_content_levels_items_list_parent_id_idx" ON "_pages_v_version_menus_content_levels_items_list" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_menus_content_levels_items_list_locale_idx" ON "_pages_v_version_menus_content_levels_items_list" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_menus_content_levels_items_order_idx" ON "_pages_v_version_menus_content_levels_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_menus_content_levels_items_parent_id_idx" ON "_pages_v_version_menus_content_levels_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_menus_content_levels_items_locale_idx" ON "_pages_v_version_menus_content_levels_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_fresh_content_culinary_items_uses_order_idx" ON "_pages_v_version_fresh_content_culinary_items_uses" USING btree ("_order");
  CREATE INDEX "_pages_v_version_fresh_content_culinary_items_uses_parent_id_idx" ON "_pages_v_version_fresh_content_culinary_items_uses" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_fresh_content_culinary_items_uses_locale_idx" ON "_pages_v_version_fresh_content_culinary_items_uses" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_fresh_content_culinary_items_order_idx" ON "_pages_v_version_fresh_content_culinary_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_fresh_content_culinary_items_parent_id_idx" ON "_pages_v_version_fresh_content_culinary_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_fresh_content_culinary_items_locale_idx" ON "_pages_v_version_fresh_content_culinary_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_experience_content_universe_items_order_idx" ON "_pages_v_version_experience_content_universe_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_experience_content_universe_items_parent_id_idx" ON "_pages_v_version_experience_content_universe_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_experience_content_universe_items_locale_idx" ON "_pages_v_version_experience_content_universe_items" USING btree ("_locale");
  CREATE INDEX "_pages_v_version_experience_content_pillars_items_order_idx" ON "_pages_v_version_experience_content_pillars_items" USING btree ("_order");
  CREATE INDEX "_pages_v_version_experience_content_pillars_items_parent_id_idx" ON "_pages_v_version_experience_content_pillars_items" USING btree ("_parent_id");
  CREATE INDEX "_pages_v_version_experience_content_pillars_items_locale_idx" ON "_pages_v_version_experience_content_pillars_items" USING btree ("_locale");`);
}

export async function down({
  db,
  payload,
  req,
}: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "pages_services_content_worlds_items_items" CASCADE;
  DROP TABLE "pages_services_content_worlds_items" CASCADE;
  DROP TABLE "pages_menus_content_levels_items_list" CASCADE;
  DROP TABLE "pages_menus_content_levels_items" CASCADE;
  DROP TABLE "pages_fresh_content_culinary_items_uses" CASCADE;
  DROP TABLE "pages_fresh_content_culinary_items" CASCADE;
  DROP TABLE "pages_experience_content_universe_items" CASCADE;
  DROP TABLE "pages_experience_content_pillars_items" CASCADE;
  DROP TABLE "_pages_v_version_services_content_worlds_items_items" CASCADE;
  DROP TABLE "_pages_v_version_services_content_worlds_items" CASCADE;
  DROP TABLE "_pages_v_version_menus_content_levels_items_list" CASCADE;
  DROP TABLE "_pages_v_version_menus_content_levels_items" CASCADE;
  DROP TABLE "_pages_v_version_fresh_content_culinary_items_uses" CASCADE;
  DROP TABLE "_pages_v_version_fresh_content_culinary_items" CASCADE;
  DROP TABLE "_pages_v_version_experience_content_universe_items" CASCADE;
  DROP TABLE "_pages_v_version_experience_content_pillars_items" CASCADE;
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_worlds_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_worlds_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_worlds_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_formats_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_formats_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_formats_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_formats_note";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_references_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_references_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "services_content_references_body";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_levels_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_levels_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_levels_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_families_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_families_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_families_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_dishes_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_dishes_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_dishes_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_dishes_intro";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_menus_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_menus_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_menus_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "menus_content_signature_menus_note";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_range_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_range_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_range_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_range_note";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_range_signature";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_culinary_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_culinary_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_culinary_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_culinary_intro";
  ALTER TABLE "pages_locales" DROP COLUMN "fresh_content_culinary_caveat";
  ALTER TABLE "pages_locales" DROP COLUMN "gallery_content_empty_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "gallery_content_empty_body";
  ALTER TABLE "pages_locales" DROP COLUMN "experience_content_universe_eyebrow";
  ALTER TABLE "pages_locales" DROP COLUMN "experience_content_universe_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "experience_content_universe_heading_accent";
  ALTER TABLE "pages_locales" DROP COLUMN "experience_content_universe_intro";
  ALTER TABLE "pages_locales" DROP COLUMN "experience_content_pillars_heading";
  ALTER TABLE "pages_locales" DROP COLUMN "experience_content_disclaimer";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_worlds_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_worlds_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_worlds_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_formats_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_formats_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_formats_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_formats_note";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_references_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_references_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_services_content_references_body";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_levels_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_levels_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_levels_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_families_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_families_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_families_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_dishes_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_dishes_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_dishes_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_dishes_intro";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_menus_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_menus_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_menus_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_menus_content_signature_menus_note";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_range_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_range_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_range_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_range_note";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_range_signature";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_culinary_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_culinary_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_culinary_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_culinary_intro";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_fresh_content_culinary_caveat";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_gallery_content_empty_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_gallery_content_empty_body";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_experience_content_universe_eyebrow";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_experience_content_universe_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_experience_content_universe_heading_accent";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_experience_content_universe_intro";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_experience_content_pillars_heading";
  ALTER TABLE "_pages_v_locales" DROP COLUMN "version_experience_content_disclaimer";
`);
}
