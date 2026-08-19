import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   ALTER TYPE "public"."enum_menu_categories_family" ADD VALUE 'meste-signature-cocktails' BEFORE 'chef-cocktail-creations';
  ALTER TYPE "public"."enum_menu_categories_family" ADD VALUE 'heritage-african-roots' BEFORE 'fish-seafood';
  ALTER TYPE "public"."enum__menu_categories_v_version_family" ADD VALUE 'meste-signature-cocktails' BEFORE 'chef-cocktail-creations';
  ALTER TYPE "public"."enum__menu_categories_v_version_family" ADD VALUE 'heritage-african-roots' BEFORE 'fish-seafood';`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "menu_categories" ALTER COLUMN "family" SET DATA TYPE text;
  DROP TYPE "public"."enum_menu_categories_family";
  CREATE TYPE "public"."enum_menu_categories_family" AS ENUM('cocktail-classics', 'chef-cocktail-creations', 'starters', 'fish-seafood', 'poultry', 'meat', 'vegetable-table', 'sides', 'desserts');
  ALTER TABLE "menu_categories" ALTER COLUMN "family" SET DATA TYPE "public"."enum_menu_categories_family" USING "family"::"public"."enum_menu_categories_family";
  ALTER TABLE "_menu_categories_v" ALTER COLUMN "version_family" SET DATA TYPE text;
  DROP TYPE "public"."enum__menu_categories_v_version_family";
  CREATE TYPE "public"."enum__menu_categories_v_version_family" AS ENUM('cocktail-classics', 'chef-cocktail-creations', 'starters', 'fish-seafood', 'poultry', 'meat', 'vegetable-table', 'sides', 'desserts');
  ALTER TABLE "_menu_categories_v" ALTER COLUMN "version_family" SET DATA TYPE "public"."enum__menu_categories_v_version_family" USING "version_family"::"public"."enum__menu_categories_v_version_family";`)
}
