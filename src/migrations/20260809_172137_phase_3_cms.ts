import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."_locales" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_users_role" AS ENUM('admin', 'editor');
  CREATE TYPE "public"."enum_media_category" AS ENUM('food', 'cocktail', 'buffet', 'table-service', 'mama-emma-fresh', 'events', 'team', 'brand', 'experience', 'behind-the-scenes', 'corporate', 'institutional', 'celebrations');
  CREATE TYPE "public"."block_heading_level" AS ENUM('h2', 'h3');
  CREATE TYPE "public"."enum_hero_alignment" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum_hero_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_editorial_ti_image_side" AS ENUM('left', 'right');
  CREATE TYPE "public"."block_tone" AS ENUM('ivory', 'forest', 'burgundy', 'charcoal');
  CREATE TYPE "public"."enum_editorial_ti_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_full_bleed_height" AS ENUM('cinematic', 'viewport', 'compact');
  CREATE TYPE "public"."enum_service_showcase_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum_service_showcase_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_menu_showcase_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum_menu_showcase_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_signature_dishes_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum_signature_dishes_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_fresh_products_block_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum_fresh_products_block_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_gallery_preview_layout" AS ENUM('editorial-grid', 'filmstrip');
  CREATE TYPE "public"."enum_references_block_presentation" AS ENUM('editorial', 'quiet-list');
  CREATE TYPE "public"."enum_experience_teaser_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_cta_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_story_chapter_chapter_key" AS ENUM('congo', 'maya-maya', 'senegal', 'professional-hospitality', 'ghana', 'meste-today');
  CREATE TYPE "public"."enum_story_chapter_layout" AS ENUM('image-left', 'image-right', 'text-only');
  CREATE TYPE "public"."enum_pages_page_kind" AS ENUM('about', 'contact', 'editorial', 'experience', 'fresh', 'gallery', 'local-seo', 'menus', 'services');
  CREATE TYPE "public"."enum_pages_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__hero_v_alignment" AS ENUM('left', 'center');
  CREATE TYPE "public"."enum__hero_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__editorial_ti_v_image_side" AS ENUM('left', 'right');
  CREATE TYPE "public"."enum__editorial_ti_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__full_bleed_v_height" AS ENUM('cinematic', 'viewport', 'compact');
  CREATE TYPE "public"."enum__service_showcase_v_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum__service_showcase_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__menu_showcase_v_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum__menu_showcase_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__signature_dishes_v_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum__signature_dishes_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__fresh_products_block_v_layout" AS ENUM('editorial', 'immersive', 'compact');
  CREATE TYPE "public"."enum__fresh_products_block_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__gallery_preview_v_layout" AS ENUM('editorial-grid', 'filmstrip');
  CREATE TYPE "public"."enum__references_block_v_presentation" AS ENUM('editorial', 'quiet-list');
  CREATE TYPE "public"."enum__experience_teaser_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__cta_v_action_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__story_chapter_v_chapter_key" AS ENUM('congo', 'maya-maya', 'senegal', 'professional-hospitality', 'ghana', 'meste-today');
  CREATE TYPE "public"."enum__story_chapter_v_layout" AS ENUM('image-left', 'image-right', 'text-only');
  CREATE TYPE "public"."enum__pages_v_version_page_kind" AS ENUM('about', 'contact', 'editorial', 'experience', 'fresh', 'gallery', 'local-seo', 'menus', 'services');
  CREATE TYPE "public"."enum__pages_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__pages_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_services_category" AS ENUM('celebrations', 'corporate', 'institutional-diplomatic', 'bespoke');
  CREATE TYPE "public"."enum_services_cta_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_services_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_version_category" AS ENUM('celebrations', 'corporate', 'institutional-diplomatic', 'bespoke');
  CREATE TYPE "public"."enum__services_v_version_cta_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__services_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__services_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_reception_formats_cta_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_reception_formats_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__reception_formats_v_version_cta_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'home', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__reception_formats_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__reception_formats_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_menu_categories_family" AS ENUM('cocktail-classics', 'chef-cocktail-creations', 'starters', 'fish-seafood', 'poultry', 'meat', 'vegetable-table', 'sides', 'desserts');
  CREATE TYPE "public"."enum_menu_categories_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__menu_categories_v_version_family" AS ENUM('cocktail-classics', 'chef-cocktail-creations', 'starters', 'fish-seafood', 'poultry', 'meat', 'vegetable-table', 'sides', 'desserts');
  CREATE TYPE "public"."enum__menu_categories_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__menu_categories_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_menu_items_dietary_verified_labels" AS ENUM('gluten-free', 'dairy-free', 'nut-free', 'halal', 'vegetarian', 'vegan');
  CREATE TYPE "public"."enum_menu_items_dietary_allergens" AS ENUM('celery', 'crustaceans', 'eggs', 'fish', 'gluten', 'milk', 'mustard', 'nuts', 'peanuts', 'sesame', 'shellfish', 'soy');
  CREATE TYPE "public"."enum_menu_items_culinary_level" AS ENUM('classic', 'signature', 'chef-creation');
  CREATE TYPE "public"."enum_menu_items_spice_level" AS ENUM('mild', 'medium', 'hot');
  CREATE TYPE "public"."enum_menu_items_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__menu_items_v_version_dietary_verified_labels" AS ENUM('gluten-free', 'dairy-free', 'nut-free', 'halal', 'vegetarian', 'vegan');
  CREATE TYPE "public"."enum__menu_items_v_version_dietary_allergens" AS ENUM('celery', 'crustaceans', 'eggs', 'fish', 'gluten', 'milk', 'mustard', 'nuts', 'peanuts', 'sesame', 'shellfish', 'soy');
  CREATE TYPE "public"."enum__menu_items_v_version_culinary_level" AS ENUM('classic', 'signature', 'chef-creation');
  CREATE TYPE "public"."enum__menu_items_v_version_spice_level" AS ENUM('mild', 'medium', 'hot');
  CREATE TYPE "public"."enum__menu_items_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__menu_items_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_signature_menus_courses_section" AS ENUM('bites', 'starter', 'fish', 'meat', 'main', 'vegetarian-main', 'sides', 'dessert', 'drinks');
  CREATE TYPE "public"."enum_signature_menus_availability" AS ENUM('on-request', 'seasonal', 'unavailable');
  CREATE TYPE "public"."enum_signature_menus_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__signature_menus_v_version_courses_section" AS ENUM('bites', 'starter', 'fish', 'meat', 'main', 'vegetarian-main', 'sides', 'dessert', 'drinks');
  CREATE TYPE "public"."enum__signature_menus_v_version_availability" AS ENUM('on-request', 'seasonal', 'unavailable');
  CREATE TYPE "public"."enum__signature_menus_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__signature_menus_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_fresh_products_accent_color" AS ENUM('pineapple-gold', 'bissap-burgundy', 'ginger-amber', 'beetroot-ruby', 'orange-citrus', 'watermelon-coral');
  CREATE TYPE "public"."enum_fresh_products_availability" AS ENUM('available', 'seasonal', 'unavailable', 'to-confirm');
  CREATE TYPE "public"."enum_fresh_products_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__fresh_products_v_version_accent_color" AS ENUM('pineapple-gold', 'bissap-burgundy', 'ginger-amber', 'beetroot-ruby', 'orange-citrus', 'watermelon-coral');
  CREATE TYPE "public"."enum__fresh_products_v_version_availability" AS ENUM('available', 'seasonal', 'unavailable', 'to-confirm');
  CREATE TYPE "public"."enum__fresh_products_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__fresh_products_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_events_event_status" AS ENUM('concept', 'coming-soon', 'registration-open', 'sold-out', 'completed');
  CREATE TYPE "public"."enum_events_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum_events_schedule_currency" AS ENUM('GHS', 'USD', 'EUR');
  CREATE TYPE "public"."enum_events_registration_mode" AS ENUM('interest-only', 'external-link', 'internal-registration');
  CREATE TYPE "public"."enum__events_v_version_event_status" AS ENUM('concept', 'coming-soon', 'registration-open', 'sold-out', 'completed');
  CREATE TYPE "public"."enum__events_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__events_v_version_schedule_currency" AS ENUM('GHS', 'USD', 'EUR');
  CREATE TYPE "public"."enum__events_v_version_registration_mode" AS ENUM('interest-only', 'external-link', 'internal-registration');
  CREATE TYPE "public"."enum__events_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_references_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__references_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__references_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_testimonials_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__testimonials_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__testimonials_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_gallery_category" AS ENUM('food', 'cocktail', 'buffet', 'table-service', 'mama-emma-fresh', 'events', 'team', 'brand', 'experience', 'behind-the-scenes', 'corporate', 'institutional', 'celebrations');
  CREATE TYPE "public"."enum_gallery_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__gallery_v_version_category" AS ENUM('food', 'cocktail', 'buffet', 'table-service', 'mama-emma-fresh', 'events', 'team', 'brand', 'experience', 'behind-the-scenes', 'corporate', 'institutional', 'celebrations');
  CREATE TYPE "public"."enum__gallery_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__gallery_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_journal_posts_categories" AS ENUM('heritage', 'hospitality', 'menus', 'fresh', 'experience', 'behind-the-scenes');
  CREATE TYPE "public"."enum_journal_posts_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__journal_posts_v_version_categories" AS ENUM('heritage', 'hospitality', 'menus', 'fresh', 'experience', 'behind-the-scenes');
  CREATE TYPE "public"."enum__journal_posts_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__journal_posts_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_redirects_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_leads_status" AS ENUM('new', 'contacted', 'proposal-sent', 'won', 'lost');
  CREATE TYPE "public"."enum_leads_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_leads_delivery_status" AS ENUM('not-attempted', 'queued', 'sent', 'failed');
  CREATE TYPE "public"."enum_experience_interest_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_experience_interest_delivery_status" AS ENUM('not-attempted', 'queued', 'sent', 'failed');
  CREATE TYPE "public"."enum_payload_jobs_log_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_payload_jobs_log_state" AS ENUM('failed', 'succeeded');
  CREATE TYPE "public"."enum_payload_jobs_task_slug" AS ENUM('inline', 'schedulePublish');
  CREATE TYPE "public"."enum_site_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__site_settings_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_header_navigation_route" AS ENUM('about', 'experience', 'fresh', 'gallery', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_header_primary_action_route" AS ENUM('about', 'experience', 'fresh', 'gallery', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_header_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__header_v_version_navigation_route" AS ENUM('about', 'experience', 'fresh', 'gallery', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__header_v_version_primary_action_route" AS ENUM('about', 'experience', 'fresh', 'gallery', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__header_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__header_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_footer_links_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum_footer_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_version_links_route" AS ENUM('about', 'contact', 'experience', 'fresh', 'gallery', 'menus', 'quote', 'services');
  CREATE TYPE "public"."enum__footer_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__footer_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_home_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__home_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_contact_settings_social_links_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'tiktok', 'youtube');
  CREATE TYPE "public"."enum_contact_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__contact_settings_v_version_social_links_platform" AS ENUM('facebook', 'instagram', 'linkedin', 'tiktok', 'youtube');
  CREATE TYPE "public"."enum__contact_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__contact_settings_v_published_locale" AS ENUM('en', 'fr');
  CREATE TYPE "public"."enum_seo_settings_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__seo_settings_v_version_status" AS ENUM('draft', 'published');
  CREATE TYPE "public"."enum__seo_settings_v_published_locale" AS ENUM('en', 'fr');
  CREATE TABLE "users_sessions" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"created_at" timestamp(3) with time zone,
  	"expires_at" timestamp(3) with time zone NOT NULL
  );
  
  CREATE TABLE "users" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"role" "enum_users_role" DEFAULT 'editor' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"email" varchar NOT NULL,
  	"reset_password_token" varchar,
  	"reset_password_expiration" timestamp(3) with time zone,
  	"salt" varchar,
  	"hash" varchar,
  	"login_attempts" numeric DEFAULT 0,
  	"lock_until" timestamp(3) with time zone
  );
  
  CREATE TABLE "media" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"category" "enum_media_category" NOT NULL,
  	"credit" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"url" varchar,
  	"thumbnail_u_r_l" varchar,
  	"filename" varchar,
  	"mime_type" varchar,
  	"filesize" numeric,
  	"width" numeric,
  	"height" numeric,
  	"focal_x" numeric,
  	"focal_y" numeric,
  	"sizes_thumbnail_url" varchar,
  	"sizes_thumbnail_width" numeric,
  	"sizes_thumbnail_height" numeric,
  	"sizes_thumbnail_mime_type" varchar,
  	"sizes_thumbnail_filesize" numeric,
  	"sizes_thumbnail_filename" varchar,
  	"sizes_card_url" varchar,
  	"sizes_card_width" numeric,
  	"sizes_card_height" numeric,
  	"sizes_card_mime_type" varchar,
  	"sizes_card_filesize" numeric,
  	"sizes_card_filename" varchar,
  	"sizes_tablet_url" varchar,
  	"sizes_tablet_width" numeric,
  	"sizes_tablet_height" numeric,
  	"sizes_tablet_mime_type" varchar,
  	"sizes_tablet_filesize" numeric,
  	"sizes_tablet_filename" varchar,
  	"sizes_desktop_url" varchar,
  	"sizes_desktop_width" numeric,
  	"sizes_desktop_height" numeric,
  	"sizes_desktop_mime_type" varchar,
  	"sizes_desktop_filesize" numeric,
  	"sizes_desktop_filename" varchar,
  	"sizes_hero_url" varchar,
  	"sizes_hero_width" numeric,
  	"sizes_hero_height" numeric,
  	"sizes_hero_mime_type" varchar,
  	"sizes_hero_filesize" numeric,
  	"sizes_hero_filename" varchar,
  	"sizes_og_url" varchar,
  	"sizes_og_width" numeric,
  	"sizes_og_height" numeric,
  	"sizes_og_mime_type" varchar,
  	"sizes_og_filesize" numeric,
  	"sizes_og_filename" varchar
  );
  
  CREATE TABLE "media_locales" (
  	"alt" varchar NOT NULL,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "hero" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"image_id" integer,
  	"alignment" "enum_hero_alignment" DEFAULT 'left',
  	"action_route" "enum_hero_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "hero_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"subline" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "editorial_ti" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"image_id" integer,
  	"image_side" "enum_editorial_ti_image_side" DEFAULT 'right',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum_editorial_ti_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "editorial_ti_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body" jsonb,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "full_bleed" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"height" "enum_full_bleed_height" DEFAULT 'cinematic',
  	"block_name" varchar
  );
  
  CREATE TABLE "full_bleed_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "manifesto_statements" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "manifesto_statements_locales" (
  	"statement" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "manifesto" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"block_name" varchar
  );
  
  CREATE TABLE "manifesto_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "quote" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"tone" "block_tone" DEFAULT 'ivory',
  	"block_name" varchar
  );
  
  CREATE TABLE "quote_locales" (
  	"quote" varchar,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "service_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum_service_showcase_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum_service_showcase_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "service_showcase_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "menu_showcase" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum_menu_showcase_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum_menu_showcase_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "menu_showcase_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "signature_dishes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum_signature_dishes_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum_signature_dishes_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "signature_dishes_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "fresh_products_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum_fresh_products_block_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum_fresh_products_block_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "fresh_products_block_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "gallery_preview" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum_gallery_preview_layout" DEFAULT 'editorial-grid',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"block_name" varchar
  );
  
  CREATE TABLE "gallery_preview_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "references_block" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"presentation" "enum_references_block_presentation" DEFAULT 'editorial',
  	"block_name" varchar
  );
  
  CREATE TABLE "references_block_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "process_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" varchar NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "process_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "process" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"block_name" varchar
  );
  
  CREATE TABLE "process_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "experience_teaser" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"image_id" integer,
  	"action_route" "enum_experience_teaser_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "experience_teaser_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"disclaimer" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "cta" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum_cta_action_route",
  	"block_name" varchar
  );
  
  CREATE TABLE "cta_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "editorial_split" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"block_name" varchar
  );
  
  CREATE TABLE "editorial_split_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"left" jsonb,
  	"right" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "story_chapter" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"chapter_key" "enum_story_chapter_chapter_key",
  	"image_id" integer,
  	"layout" "enum_story_chapter_layout" DEFAULT 'image-right',
  	"block_name" varchar
  );
  
  CREATE TABLE "story_chapter_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "pages" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"page_kind" "enum_pages_page_kind",
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_pages_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "pages_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "pages_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"signature_menus_id" integer,
  	"menu_items_id" integer,
  	"fresh_products_id" integer,
  	"gallery_id" integer,
  	"references_id" integer
  );
  
  CREATE TABLE "_hero_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"image_id" integer,
  	"alignment" "enum__hero_v_alignment" DEFAULT 'left',
  	"action_route" "enum__hero_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_hero_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"subline" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_editorial_ti_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"image_id" integer,
  	"image_side" "enum__editorial_ti_v_image_side" DEFAULT 'right',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum__editorial_ti_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_editorial_ti_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body" jsonb,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_full_bleed_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"height" "enum__full_bleed_v_height" DEFAULT 'cinematic',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_full_bleed_v_locales" (
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_manifesto_v_statements" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_manifesto_v_statements_locales" (
  	"statement" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_manifesto_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_manifesto_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_quote_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"tone" "block_tone" DEFAULT 'ivory',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_quote_v_locales" (
  	"quote" varchar,
  	"attribution" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_service_showcase_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum__service_showcase_v_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum__service_showcase_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_service_showcase_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_menu_showcase_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum__menu_showcase_v_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum__menu_showcase_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_menu_showcase_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_signature_dishes_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum__signature_dishes_v_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum__signature_dishes_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_signature_dishes_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_fresh_products_block_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum__fresh_products_block_v_layout" DEFAULT 'editorial',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum__fresh_products_block_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_fresh_products_block_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_gallery_preview_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"layout" "enum__gallery_preview_v_layout" DEFAULT 'editorial-grid',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_gallery_preview_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_references_block_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"presentation" "enum__references_block_v_presentation" DEFAULT 'editorial',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_references_block_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_process_v_steps" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_process_v_steps_locales" (
  	"title" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_process_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_process_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_experience_teaser_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"image_id" integer,
  	"action_route" "enum__experience_teaser_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_experience_teaser_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"description" varchar,
  	"disclaimer" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_cta_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"action_route" "enum__cta_v_action_route",
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_cta_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"action_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_editorial_split_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"tone" "block_tone" DEFAULT 'ivory',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_editorial_split_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"left" jsonb,
  	"right" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_story_chapter_v" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"_path" text NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"heading_level" "block_heading_level" DEFAULT 'h2',
  	"chapter_key" "enum__story_chapter_v_chapter_key",
  	"image_id" integer,
  	"layout" "enum__story_chapter_v_layout" DEFAULT 'image-right',
  	"_uuid" varchar,
  	"block_name" varchar
  );
  
  CREATE TABLE "_story_chapter_v_locales" (
  	"eyebrow" varchar,
  	"heading" varchar,
  	"body" jsonb,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_page_kind" "enum__pages_v_version_page_kind",
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__pages_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__pages_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_pages_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_pages_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"signature_menus_id" integer,
  	"menu_items_id" integer,
  	"fresh_products_id" integer,
  	"gallery_id" integer,
  	"references_id" integer
  );
  
  CREATE TABLE "services" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"category" "enum_services_category",
  	"cta_route" "enum_services_cta_route",
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_services_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "services_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"positioning" varchar,
  	"story" jsonb,
  	"cta_label" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "services_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"reception_formats_id" integer,
  	"signature_menus_id" integer,
  	"gallery_id" integer,
  	"references_id" integer
  );
  
  CREATE TABLE "_services_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_category" "enum__services_v_version_category",
  	"version_cta_route" "enum__services_v_version_cta_route",
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__services_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__services_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_services_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_positioning" varchar,
  	"version_story" jsonb,
  	"version_cta_label" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_services_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"reception_formats_id" integer,
  	"signature_menus_id" integer,
  	"gallery_id" integer,
  	"references_id" integer
  );
  
  CREATE TABLE "reception_formats_recommended_event_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "reception_formats_recommended_event_types_locales" (
  	"event_type" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "reception_formats" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"verified_guest_range_minimum" numeric,
  	"verified_guest_range_maximum" numeric,
  	"cta_route" "enum_reception_formats_cta_route",
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_reception_formats_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "reception_formats_locales" (
  	"name" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "reception_formats_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"gallery_id" integer,
  	"signature_menus_id" integer
  );
  
  CREATE TABLE "_reception_formats_v_version_recommended_event_types" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_reception_formats_v_version_recommended_event_types_locales" (
  	"event_type" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_reception_formats_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_verified_guest_range_minimum" numeric,
  	"version_verified_guest_range_maximum" numeric,
  	"version_cta_route" "enum__reception_formats_v_version_cta_route",
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__reception_formats_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__reception_formats_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_reception_formats_v_locales" (
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"version_cta_label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_reception_formats_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"gallery_id" integer,
  	"signature_menus_id" integer
  );
  
  CREATE TABLE "menu_categories" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"family" "enum_menu_categories_family",
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_menu_categories_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "menu_categories_locales" (
  	"name" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_menu_categories_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_family" "enum__menu_categories_v_version_family",
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__menu_categories_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__menu_categories_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_menu_categories_v_locales" (
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "menu_items_composition" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "menu_items_composition_locales" (
  	"component" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "menu_items_dietary_verified_labels" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_menu_items_dietary_verified_labels",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "menu_items_dietary_allergens" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_menu_items_dietary_allergens",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "menu_items" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"category_id" integer,
  	"culinary_level" "enum_menu_items_culinary_level",
  	"featured_image_id" integer,
  	"dietary_contains_pork" boolean DEFAULT false,
  	"dietary_vegetarian" boolean DEFAULT false,
  	"dietary_vegan" boolean DEFAULT false,
  	"dietary_verification_note" varchar,
  	"spice_level" "enum_menu_items_spice_level",
  	"featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_menu_items_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "menu_items_locales" (
  	"name" varchar,
  	"slug" varchar,
  	"description" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "menu_items_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_menu_items_v_version_composition" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_menu_items_v_version_composition_locales" (
  	"component" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_menu_items_v_version_dietary_verified_labels" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__menu_items_v_version_dietary_verified_labels",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_menu_items_v_version_dietary_allergens" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__menu_items_v_version_dietary_allergens",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_menu_items_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_category_id" integer,
  	"version_culinary_level" "enum__menu_items_v_version_culinary_level",
  	"version_featured_image_id" integer,
  	"version_dietary_contains_pork" boolean DEFAULT false,
  	"version_dietary_vegetarian" boolean DEFAULT false,
  	"version_dietary_vegan" boolean DEFAULT false,
  	"version_dietary_verification_note" varchar,
  	"version_spice_level" "enum__menu_items_v_version_spice_level",
  	"version_featured" boolean DEFAULT false,
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__menu_items_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__menu_items_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_menu_items_v_locales" (
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_description" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_menu_items_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "signature_menus_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"section" "enum_signature_menus_courses_section"
  );
  
  CREATE TABLE "signature_menus_courses_locales" (
  	"label" varchar,
  	"editorial_note" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "signature_menus" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"featured_image_id" integer,
  	"availability" "enum_signature_menus_availability" DEFAULT 'on-request',
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_signature_menus_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "signature_menus_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"subtitle" varchar,
  	"intro" jsonb,
  	"welcome" jsonb,
  	"dietary_notes" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "signature_menus_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"menu_items_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "_signature_menus_v_version_courses" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"section" "enum__signature_menus_v_version_courses_section",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_signature_menus_v_version_courses_locales" (
  	"label" varchar,
  	"editorial_note" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_signature_menus_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_featured_image_id" integer,
  	"version_availability" "enum__signature_menus_v_version_availability" DEFAULT 'on-request',
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__signature_menus_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__signature_menus_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_signature_menus_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_subtitle" varchar,
  	"version_intro" jsonb,
  	"version_welcome" jsonb,
  	"version_dietary_notes" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_signature_menus_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"menu_items_id" integer,
  	"media_id" integer
  );
  
  CREATE TABLE "fresh_products_ingredients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "fresh_products_ingredients_locales" (
  	"ingredient" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "fresh_products_available_sizes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"size" varchar
  );
  
  CREATE TABLE "fresh_products" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
  	"can_image_id" integer,
  	"accent_color" "enum_fresh_products_accent_color",
  	"availability" "enum_fresh_products_availability" DEFAULT 'to-confirm',
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_fresh_products_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "fresh_products_locales" (
  	"name" varchar,
  	"slug" varchar,
  	"short_description" varchar,
  	"description" jsonb,
  	"nutrition_placeholder" varchar,
  	"legal_placeholder" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "fresh_products_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_fresh_products_v_version_ingredients" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fresh_products_v_version_ingredients_locales" (
  	"ingredient" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_fresh_products_v_version_available_sizes" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"size" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_fresh_products_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
  	"version_can_image_id" integer,
  	"version_accent_color" "enum__fresh_products_v_version_accent_color",
  	"version_availability" "enum__fresh_products_v_version_availability" DEFAULT 'to-confirm',
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__fresh_products_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__fresh_products_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_fresh_products_v_locales" (
  	"version_name" varchar,
  	"version_slug" varchar,
  	"version_short_description" varchar,
  	"version_description" jsonb,
  	"version_nutrition_placeholder" varchar,
  	"version_legal_placeholder" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_fresh_products_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "events" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"seed_key" varchar,
	"event_status" "enum_events_event_status" DEFAULT 'concept',
  	"schedule_date" timestamp(3) with time zone,
  	"schedule_capacity" numeric,
  	"schedule_price" numeric,
  	"schedule_currency" "enum_events_schedule_currency",
  	"menu_id" integer,
  	"featured_image_id" integer,
  	"registration_mode" "enum_events_registration_mode" DEFAULT 'interest-only',
  	"registration_external_u_r_l" varchar,
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_events_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "events_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"theme" varchar,
  	"short_description" varchar,
  	"story" jsonb,
  	"schedule_venue" varchar,
  	"entertainment" varchar,
  	"dress_code" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "events_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_events_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_seed_key" varchar,
	"version_event_status" "enum__events_v_version_event_status" DEFAULT 'concept',
  	"version_schedule_date" timestamp(3) with time zone,
  	"version_schedule_capacity" numeric,
  	"version_schedule_price" numeric,
  	"version_schedule_currency" "enum__events_v_version_schedule_currency",
  	"version_menu_id" integer,
  	"version_featured_image_id" integer,
  	"version_registration_mode" "enum__events_v_version_registration_mode" DEFAULT 'interest-only',
  	"version_registration_external_u_r_l" varchar,
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__events_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__events_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_events_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_theme" varchar,
  	"version_short_description" varchar,
  	"version_story" jsonb,
  	"version_schedule_venue" varchar,
  	"version_entertainment" varchar,
  	"version_dress_code" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_events_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "references" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"client_name" varchar,
  	"logo_id" integer,
  	"guest_count" numeric,
  	"permission_to_display" boolean DEFAULT false,
  	"featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_references_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "references_locales" (
  	"event_type" varchar,
  	"short_description" varchar,
  	"full_description" jsonb,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "references_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "_references_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_client_name" varchar,
  	"version_logo_id" integer,
  	"version_guest_count" numeric,
  	"version_permission_to_display" boolean DEFAULT false,
  	"version_featured" boolean DEFAULT false,
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__references_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__references_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_references_v_locales" (
  	"version_event_type" varchar,
  	"version_short_description" varchar,
  	"version_full_description" jsonb,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_references_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"media_id" integer
  );
  
  CREATE TABLE "testimonials" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"photo_id" integer,
  	"permission_to_display" boolean DEFAULT false,
  	"featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_testimonials_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "testimonials_locales" (
  	"role" varchar,
  	"company" varchar,
  	"quote" varchar,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_testimonials_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_name" varchar,
  	"version_photo_id" integer,
  	"version_permission_to_display" boolean DEFAULT false,
  	"version_featured" boolean DEFAULT false,
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__testimonials_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__testimonials_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_testimonials_v_locales" (
  	"version_role" varchar,
  	"version_company" varchar,
  	"version_quote" varchar,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "gallery" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"image_id" integer,
  	"category" "enum_gallery_category",
  	"event_id" integer,
  	"service_id" integer,
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_gallery_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "gallery_locales" (
  	"alt" varchar,
  	"caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_gallery_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_image_id" integer,
  	"version_category" "enum__gallery_v_version_category",
  	"version_event_id" integer,
  	"version_service_id" integer,
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__gallery_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__gallery_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_gallery_v_locales" (
  	"version_alt" varchar,
  	"version_caption" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "journal_posts_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum_journal_posts_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "journal_posts" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"author_name" varchar,
  	"published_at" timestamp(3) with time zone,
  	"featured_image_id" integer,
  	"featured" boolean DEFAULT false,
  	"sort_order" numeric DEFAULT 100,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"_status" "enum_journal_posts_status" DEFAULT 'draft'
  );
  
  CREATE TABLE "journal_posts_locales" (
  	"title" varchar,
  	"slug" varchar,
  	"excerpt" varchar,
  	"body" jsonb,
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_journal_posts_v_version_categories" (
  	"order" integer NOT NULL,
  	"parent_id" integer NOT NULL,
  	"value" "enum__journal_posts_v_version_categories",
  	"id" serial PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "_journal_posts_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"parent_id" integer,
  	"version_author_name" varchar,
  	"version_published_at" timestamp(3) with time zone,
  	"version_featured_image_id" integer,
  	"version_featured" boolean DEFAULT false,
  	"version_sort_order" numeric DEFAULT 100,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"version__status" "enum__journal_posts_v_version_status" DEFAULT 'draft',
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__journal_posts_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_journal_posts_v_locales" (
  	"version_title" varchar,
  	"version_slug" varchar,
  	"version_excerpt" varchar,
  	"version_body" jsonb,
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "redirects" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"from_path" varchar NOT NULL,
  	"to_path" varchar NOT NULL,
  	"permanent" boolean DEFAULT true NOT NULL,
  	"source_collection" varchar NOT NULL,
  	"source_document_i_d" varchar NOT NULL,
  	"locale" "enum_redirects_locale" NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "leads" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"status" "enum_leads_status" DEFAULT 'new' NOT NULL,
  	"name" varchar NOT NULL,
  	"company" varchar,
  	"email" varchar NOT NULL,
  	"phone" varchar NOT NULL,
  	"event_type" varchar,
  	"event_date" timestamp(3) with time zone,
  	"location" varchar,
  	"guest_count" numeric,
  	"reception_format_id" integer,
  	"menu_preferences" varchar,
  	"dietary_requirements" varchar,
  	"allergens" varchar,
  	"budget" varchar,
  	"notes" varchar,
  	"locale" "enum_leads_locale" NOT NULL,
  	"source_page" varchar NOT NULL,
  	"consent_accepted" boolean DEFAULT false NOT NULL,
  	"consent_version" varchar NOT NULL,
  	"consent_accepted_at" timestamp(3) with time zone NOT NULL,
  	"delivery_status" "enum_leads_delivery_status" DEFAULT 'not-attempted' NOT NULL,
  	"delivery_last_attempt_at" timestamp(3) with time zone,
  	"delivery_failure_code" varchar,
  	"internal_notes" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "leads_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer
  );
  
  CREATE TABLE "experience_interest" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"locale" "enum_experience_interest_locale" NOT NULL,
  	"source_page" varchar NOT NULL,
  	"marketing_consent" boolean DEFAULT false NOT NULL,
  	"consent_version" varchar NOT NULL,
  	"consent_recorded_at" timestamp(3) with time zone NOT NULL,
  	"delivery_status" "enum_experience_interest_delivery_status" DEFAULT 'not-attempted' NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_kv" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar NOT NULL,
  	"data" jsonb NOT NULL
  );
  
  CREATE TABLE "payload_jobs_log" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"executed_at" timestamp(3) with time zone NOT NULL,
  	"completed_at" timestamp(3) with time zone NOT NULL,
  	"task_slug" "enum_payload_jobs_log_task_slug" NOT NULL,
  	"task_i_d" varchar NOT NULL,
  	"input" jsonb,
  	"output" jsonb,
  	"state" "enum_payload_jobs_log_state" NOT NULL,
  	"error" jsonb
  );
  
  CREATE TABLE "payload_jobs" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"input" jsonb,
  	"completed_at" timestamp(3) with time zone,
  	"total_tried" numeric DEFAULT 0,
  	"has_error" boolean DEFAULT false,
  	"error" jsonb,
  	"task_slug" "enum_payload_jobs_task_slug",
  	"queue" varchar DEFAULT 'default',
  	"wait_until" timestamp(3) with time zone,
  	"processing" boolean DEFAULT false,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"global_slug" varchar,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_locked_documents_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer,
  	"media_id" integer,
  	"pages_id" integer,
  	"services_id" integer,
  	"reception_formats_id" integer,
  	"menu_categories_id" integer,
  	"menu_items_id" integer,
  	"signature_menus_id" integer,
  	"fresh_products_id" integer,
  	"events_id" integer,
  	"references_id" integer,
  	"testimonials_id" integer,
  	"gallery_id" integer,
  	"journal_posts_id" integer,
  	"redirects_id" integer,
  	"leads_id" integer,
  	"experience_interest_id" integer
  );
  
  CREATE TABLE "payload_preferences" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"key" varchar,
  	"value" jsonb,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "payload_preferences_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"users_id" integer
  );
  
  CREATE TABLE "payload_migrations" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"name" varchar,
  	"batch" numeric,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  CREATE TABLE "site_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"site_name" varchar DEFAULT 'MAMA EMMA Service Traiteur d''Excellence',
  	"short_name" varchar DEFAULT 'MESTE',
  	"location_city" varchar DEFAULT 'Accra',
  	"location_country" varchar DEFAULT 'Ghana',
  	"location_timezone" varchar DEFAULT 'Africa/Accra',
  	"features_show_journal" boolean DEFAULT false,
  	"features_show_events_index" boolean DEFAULT false,
  	"features_show_testimonials" boolean DEFAULT false,
  	"_status" "enum_site_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "site_settings_locales" (
  	"institutional_signature" varchar DEFAULT 'Taste · Elegance · Hospitality',
  	"brand_philosophy" varchar DEFAULT 'Familiar enough to comfort. Different enough to remember.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_site_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_site_name" varchar DEFAULT 'MAMA EMMA Service Traiteur d''Excellence',
  	"version_short_name" varchar DEFAULT 'MESTE',
  	"version_location_city" varchar DEFAULT 'Accra',
  	"version_location_country" varchar DEFAULT 'Ghana',
  	"version_location_timezone" varchar DEFAULT 'Africa/Accra',
  	"version_features_show_journal" boolean DEFAULT false,
  	"version_features_show_events_index" boolean DEFAULT false,
  	"version_features_show_testimonials" boolean DEFAULT false,
  	"version__status" "enum__site_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__site_settings_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_site_settings_v_locales" (
  	"version_institutional_signature" varchar DEFAULT 'Taste · Elegance · Hospitality',
  	"version_brand_philosophy" varchar DEFAULT 'Familiar enough to comfort. Different enough to remember.',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "header_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"route" "enum_header_navigation_route"
  );
  
  CREATE TABLE "header_navigation_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "header" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"primary_action_route" "enum_header_primary_action_route" DEFAULT 'quote',
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"_status" "enum_header_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "header_locales" (
  	"primary_action_label" varchar,
  	"language_label" varchar DEFAULT 'Language',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_header_v_version_navigation" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"route" "enum__header_v_version_navigation_route",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_header_v_version_navigation_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_header_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_primary_action_route" "enum__header_v_version_primary_action_route" DEFAULT 'quote',
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version__status" "enum__header_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__header_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_header_v_locales" (
  	"version_primary_action_label" varchar,
  	"version_language_label" varchar DEFAULT 'Language',
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "footer_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"route" "enum_footer_links_route"
  );
  
  CREATE TABLE "footer_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"path" varchar
  );
  
  CREATE TABLE "footer_legal_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "footer" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"_status" "enum_footer_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "footer_locales" (
  	"statement" varchar,
  	"copyright_line" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v_version_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"route" "enum__footer_v_version_links_route",
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v_version_legal_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"path" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_footer_v_version_legal_links_locales" (
  	"label" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_footer_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version__status" "enum__footer_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__footer_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_footer_v_locales" (
  	"version_statement" varchar,
  	"version_copyright_line" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "home" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"internal_title" varchar DEFAULT 'Homepage',
  	"locale_readiness_en" boolean DEFAULT false,
  	"locale_readiness_fr" boolean DEFAULT false,
  	"seo_image_id" integer,
  	"seo_no_index" boolean DEFAULT false,
  	"_status" "enum_home_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "home_locales" (
  	"seo_title" varchar,
  	"seo_description" varchar,
  	"seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "home_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"menu_items_id" integer,
  	"fresh_products_id" integer
  );
  
  CREATE TABLE "_home_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_internal_title" varchar DEFAULT 'Homepage',
  	"version_locale_readiness_en" boolean DEFAULT false,
  	"version_locale_readiness_fr" boolean DEFAULT false,
  	"version_seo_image_id" integer,
  	"version_seo_no_index" boolean DEFAULT false,
  	"version__status" "enum__home_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__home_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_home_v_locales" (
  	"version_seo_title" varchar,
  	"version_seo_description" varchar,
  	"version_seo_canonical_u_r_l" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_home_v_rels" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"order" integer,
  	"parent_id" integer NOT NULL,
  	"path" varchar NOT NULL,
  	"services_id" integer,
  	"menu_items_id" integer,
  	"fresh_products_id" integer
  );
  
  CREATE TABLE "contact_settings_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL
  );
  
  CREATE TABLE "contact_settings_hours_locales" (
  	"label" varchar,
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" varchar NOT NULL
  );
  
  CREATE TABLE "contact_settings_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" varchar PRIMARY KEY NOT NULL,
  	"platform" "enum_contact_settings_social_links_platform",
  	"url" varchar
  );
  
  CREATE TABLE "contact_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"phone" varchar DEFAULT '0537464516',
  	"whats_app_number" varchar,
  	"public_email" varchar,
  	"address_street" varchar,
  	"address_locality" varchar,
  	"address_region" varchar,
  	"address_postal_code" varchar,
  	"address_country" varchar DEFAULT 'Ghana',
  	"_status" "enum_contact_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "contact_settings_locales" (
  	"whats_app_message" varchar,
  	"service_area" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_contact_settings_v_version_hours" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_contact_settings_v_version_hours_locales" (
  	"label" varchar,
  	"value" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_contact_settings_v_version_social_links" (
  	"_order" integer NOT NULL,
  	"_parent_id" integer NOT NULL,
  	"id" serial PRIMARY KEY NOT NULL,
  	"platform" "enum__contact_settings_v_version_social_links_platform",
  	"url" varchar,
  	"_uuid" varchar
  );
  
  CREATE TABLE "_contact_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_phone" varchar DEFAULT '0537464516',
  	"version_whats_app_number" varchar,
  	"version_public_email" varchar,
  	"version_address_street" varchar,
  	"version_address_locality" varchar,
  	"version_address_region" varchar,
  	"version_address_postal_code" varchar,
  	"version_address_country" varchar DEFAULT 'Ghana',
  	"version__status" "enum__contact_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__contact_settings_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_contact_settings_v_locales" (
  	"version_whats_app_message" varchar,
  	"version_service_area" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "seo_settings" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"default_social_image_id" integer,
  	"organization_legal_name" varchar,
  	"organization_public_name" varchar DEFAULT 'MAMA EMMA Service Traiteur d''Excellence',
  	"organization_logo_id" integer,
  	"robots_allow_indexing" boolean DEFAULT true,
  	"robots_allow_following" boolean DEFAULT true,
  	"verification_google" varchar,
  	"verification_bing" varchar,
  	"_status" "enum_seo_settings_status" DEFAULT 'draft',
  	"updated_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone
  );
  
  CREATE TABLE "seo_settings_locales" (
  	"title_template" varchar DEFAULT '%s — MESTE',
  	"default_description" varchar,
  	"organization_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  CREATE TABLE "_seo_settings_v" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"version_default_social_image_id" integer,
  	"version_organization_legal_name" varchar,
  	"version_organization_public_name" varchar DEFAULT 'MAMA EMMA Service Traiteur d''Excellence',
  	"version_organization_logo_id" integer,
  	"version_robots_allow_indexing" boolean DEFAULT true,
  	"version_robots_allow_following" boolean DEFAULT true,
  	"version_verification_google" varchar,
  	"version_verification_bing" varchar,
  	"version__status" "enum__seo_settings_v_version_status" DEFAULT 'draft',
  	"version_updated_at" timestamp(3) with time zone,
  	"version_created_at" timestamp(3) with time zone,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"snapshot" boolean,
  	"published_locale" "enum__seo_settings_v_published_locale",
  	"latest" boolean,
  	"autosave" boolean
  );
  
  CREATE TABLE "_seo_settings_v_locales" (
  	"version_title_template" varchar DEFAULT '%s — MESTE',
  	"version_default_description" varchar,
  	"version_organization_description" varchar,
  	"id" serial PRIMARY KEY NOT NULL,
  	"_locale" "_locales" NOT NULL,
  	"_parent_id" integer NOT NULL
  );
  
  ALTER TABLE "users_sessions" ADD CONSTRAINT "users_sessions_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "media_locales" ADD CONSTRAINT "media_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "hero" ADD CONSTRAINT "hero_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "hero_locales" ADD CONSTRAINT "hero_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."hero"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "editorial_ti" ADD CONSTRAINT "editorial_ti_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "editorial_ti" ADD CONSTRAINT "editorial_ti_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "editorial_ti_locales" ADD CONSTRAINT "editorial_ti_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."editorial_ti"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "full_bleed" ADD CONSTRAINT "full_bleed_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "full_bleed" ADD CONSTRAINT "full_bleed_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "full_bleed_locales" ADD CONSTRAINT "full_bleed_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."full_bleed"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "manifesto_statements" ADD CONSTRAINT "manifesto_statements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."manifesto"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "manifesto_statements_locales" ADD CONSTRAINT "manifesto_statements_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."manifesto_statements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "manifesto" ADD CONSTRAINT "manifesto_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "manifesto_locales" ADD CONSTRAINT "manifesto_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."manifesto"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote" ADD CONSTRAINT "quote_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "quote_locales" ADD CONSTRAINT "quote_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."quote"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_showcase" ADD CONSTRAINT "service_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "service_showcase_locales" ADD CONSTRAINT "service_showcase_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."service_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_showcase" ADD CONSTRAINT "menu_showcase_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_showcase_locales" ADD CONSTRAINT "menu_showcase_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_showcase"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_dishes" ADD CONSTRAINT "signature_dishes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_dishes_locales" ADD CONSTRAINT "signature_dishes_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."signature_dishes"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_block" ADD CONSTRAINT "fresh_products_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_block_locales" ADD CONSTRAINT "fresh_products_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fresh_products_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery_preview" ADD CONSTRAINT "gallery_preview_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery_preview_locales" ADD CONSTRAINT "gallery_preview_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gallery_preview"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "references_block" ADD CONSTRAINT "references_block_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "references_block_locales" ADD CONSTRAINT "references_block_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."references_block"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "process_steps" ADD CONSTRAINT "process_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "process_steps_locales" ADD CONSTRAINT "process_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."process_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "process" ADD CONSTRAINT "process_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "process_locales" ADD CONSTRAINT "process_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."process"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_teaser" ADD CONSTRAINT "experience_teaser_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "experience_teaser" ADD CONSTRAINT "experience_teaser_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "experience_teaser_locales" ADD CONSTRAINT "experience_teaser_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."experience_teaser"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta" ADD CONSTRAINT "cta_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "cta_locales" ADD CONSTRAINT "cta_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."cta"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "editorial_split" ADD CONSTRAINT "editorial_split_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "editorial_split_locales" ADD CONSTRAINT "editorial_split_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."editorial_split"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_chapter" ADD CONSTRAINT "story_chapter_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "story_chapter" ADD CONSTRAINT "story_chapter_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "story_chapter_locales" ADD CONSTRAINT "story_chapter_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."story_chapter"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages" ADD CONSTRAINT "pages_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "pages_locales" ADD CONSTRAINT "pages_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_fresh_products_fk" FOREIGN KEY ("fresh_products_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "pages_rels" ADD CONSTRAINT "pages_rels_references_fk" FOREIGN KEY ("references_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hero_v" ADD CONSTRAINT "_hero_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_hero_v" ADD CONSTRAINT "_hero_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_hero_v_locales" ADD CONSTRAINT "_hero_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_hero_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_editorial_ti_v" ADD CONSTRAINT "_editorial_ti_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_editorial_ti_v" ADD CONSTRAINT "_editorial_ti_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_editorial_ti_v_locales" ADD CONSTRAINT "_editorial_ti_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_editorial_ti_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_full_bleed_v" ADD CONSTRAINT "_full_bleed_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_full_bleed_v" ADD CONSTRAINT "_full_bleed_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_full_bleed_v_locales" ADD CONSTRAINT "_full_bleed_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_full_bleed_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_manifesto_v_statements" ADD CONSTRAINT "_manifesto_v_statements_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_manifesto_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_manifesto_v_statements_locales" ADD CONSTRAINT "_manifesto_v_statements_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_manifesto_v_statements"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_manifesto_v" ADD CONSTRAINT "_manifesto_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_manifesto_v_locales" ADD CONSTRAINT "_manifesto_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_manifesto_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quote_v" ADD CONSTRAINT "_quote_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_quote_v_locales" ADD CONSTRAINT "_quote_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_quote_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_service_showcase_v" ADD CONSTRAINT "_service_showcase_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_service_showcase_v_locales" ADD CONSTRAINT "_service_showcase_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_service_showcase_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_showcase_v" ADD CONSTRAINT "_menu_showcase_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_showcase_v_locales" ADD CONSTRAINT "_menu_showcase_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_showcase_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_dishes_v" ADD CONSTRAINT "_signature_dishes_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_dishes_v_locales" ADD CONSTRAINT "_signature_dishes_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_signature_dishes_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_block_v" ADD CONSTRAINT "_fresh_products_block_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_block_v_locales" ADD CONSTRAINT "_fresh_products_block_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fresh_products_block_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_gallery_preview_v" ADD CONSTRAINT "_gallery_preview_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_gallery_preview_v_locales" ADD CONSTRAINT "_gallery_preview_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_gallery_preview_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_references_block_v" ADD CONSTRAINT "_references_block_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_references_block_v_locales" ADD CONSTRAINT "_references_block_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_references_block_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_process_v_steps" ADD CONSTRAINT "_process_v_steps_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_process_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_process_v_steps_locales" ADD CONSTRAINT "_process_v_steps_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_process_v_steps"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_process_v" ADD CONSTRAINT "_process_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_process_v_locales" ADD CONSTRAINT "_process_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_process_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_teaser_v" ADD CONSTRAINT "_experience_teaser_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_experience_teaser_v" ADD CONSTRAINT "_experience_teaser_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_experience_teaser_v_locales" ADD CONSTRAINT "_experience_teaser_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_experience_teaser_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_v" ADD CONSTRAINT "_cta_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_cta_v_locales" ADD CONSTRAINT "_cta_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_cta_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_editorial_split_v" ADD CONSTRAINT "_editorial_split_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_editorial_split_v_locales" ADD CONSTRAINT "_editorial_split_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_editorial_split_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_story_chapter_v" ADD CONSTRAINT "_story_chapter_v_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_story_chapter_v" ADD CONSTRAINT "_story_chapter_v_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_story_chapter_v_locales" ADD CONSTRAINT "_story_chapter_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_story_chapter_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_parent_id_pages_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."pages"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v" ADD CONSTRAINT "_pages_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_pages_v_locales" ADD CONSTRAINT "_pages_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_pages_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_fresh_products_fk" FOREIGN KEY ("fresh_products_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_pages_v_rels" ADD CONSTRAINT "_pages_v_rels_references_fk" FOREIGN KEY ("references_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services" ADD CONSTRAINT "services_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "services_locales" ADD CONSTRAINT "services_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_reception_formats_fk" FOREIGN KEY ("reception_formats_id") REFERENCES "public"."reception_formats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "services_rels" ADD CONSTRAINT "services_rels_references_fk" FOREIGN KEY ("references_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_parent_id_services_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v" ADD CONSTRAINT "_services_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_services_v_locales" ADD CONSTRAINT "_services_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_services_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_reception_formats_fk" FOREIGN KEY ("reception_formats_id") REFERENCES "public"."reception_formats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_services_v_rels" ADD CONSTRAINT "_services_v_rels_references_fk" FOREIGN KEY ("references_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reception_formats_recommended_event_types" ADD CONSTRAINT "reception_formats_recommended_event_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reception_formats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reception_formats_recommended_event_types_locales" ADD CONSTRAINT "reception_formats_recommended_event_types_locales_parent__fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reception_formats_recommended_event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reception_formats_locales" ADD CONSTRAINT "reception_formats_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."reception_formats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reception_formats_rels" ADD CONSTRAINT "reception_formats_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reception_formats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reception_formats_rels" ADD CONSTRAINT "reception_formats_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "reception_formats_rels" ADD CONSTRAINT "reception_formats_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reception_formats_v_version_recommended_event_types" ADD CONSTRAINT "_reception_formats_v_version_recommended_event_types_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reception_formats_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reception_formats_v_version_recommended_event_types_locales" ADD CONSTRAINT "_reception_formats_v_version_recommended_event_types_loca_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reception_formats_v_version_recommended_event_types"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reception_formats_v" ADD CONSTRAINT "_reception_formats_v_parent_id_reception_formats_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."reception_formats"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_reception_formats_v_locales" ADD CONSTRAINT "_reception_formats_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_reception_formats_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reception_formats_v_rels" ADD CONSTRAINT "_reception_formats_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_reception_formats_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reception_formats_v_rels" ADD CONSTRAINT "_reception_formats_v_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_reception_formats_v_rels" ADD CONSTRAINT "_reception_formats_v_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_categories_locales" ADD CONSTRAINT "menu_categories_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_categories_v" ADD CONSTRAINT "_menu_categories_v_parent_id_menu_categories_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menu_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_menu_categories_v_locales" ADD CONSTRAINT "_menu_categories_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_categories_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items_composition" ADD CONSTRAINT "menu_items_composition_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items_composition_locales" ADD CONSTRAINT "menu_items_composition_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_items_composition"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items_dietary_verified_labels" ADD CONSTRAINT "menu_items_dietary_verified_labels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items_dietary_allergens" ADD CONSTRAINT "menu_items_dietary_allergens_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_category_id_menu_categories_id_fk" FOREIGN KEY ("category_id") REFERENCES "public"."menu_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "menu_items" ADD CONSTRAINT "menu_items_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "menu_items_locales" ADD CONSTRAINT "menu_items_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items_rels" ADD CONSTRAINT "menu_items_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "menu_items_rels" ADD CONSTRAINT "menu_items_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v_version_composition" ADD CONSTRAINT "_menu_items_v_version_composition_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_items_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v_version_composition_locales" ADD CONSTRAINT "_menu_items_v_version_composition_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_items_v_version_composition"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v_version_dietary_verified_labels" ADD CONSTRAINT "_menu_items_v_version_dietary_verified_labels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_menu_items_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v_version_dietary_allergens" ADD CONSTRAINT "_menu_items_v_version_dietary_allergens_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_menu_items_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v" ADD CONSTRAINT "_menu_items_v_parent_id_menu_items_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."menu_items"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_menu_items_v" ADD CONSTRAINT "_menu_items_v_version_category_id_menu_categories_id_fk" FOREIGN KEY ("version_category_id") REFERENCES "public"."menu_categories"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_menu_items_v" ADD CONSTRAINT "_menu_items_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_menu_items_v" ADD CONSTRAINT "_menu_items_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_menu_items_v_locales" ADD CONSTRAINT "_menu_items_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_menu_items_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v_rels" ADD CONSTRAINT "_menu_items_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_menu_items_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_menu_items_v_rels" ADD CONSTRAINT "_menu_items_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_menus_courses" ADD CONSTRAINT "signature_menus_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_menus_courses_locales" ADD CONSTRAINT "signature_menus_courses_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."signature_menus_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_menus" ADD CONSTRAINT "signature_menus_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "signature_menus" ADD CONSTRAINT "signature_menus_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "signature_menus_locales" ADD CONSTRAINT "signature_menus_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_menus_rels" ADD CONSTRAINT "signature_menus_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_menus_rels" ADD CONSTRAINT "signature_menus_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "signature_menus_rels" ADD CONSTRAINT "signature_menus_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_menus_v_version_courses" ADD CONSTRAINT "_signature_menus_v_version_courses_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_signature_menus_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_menus_v_version_courses_locales" ADD CONSTRAINT "_signature_menus_v_version_courses_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_signature_menus_v_version_courses"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_menus_v" ADD CONSTRAINT "_signature_menus_v_parent_id_signature_menus_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."signature_menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_signature_menus_v" ADD CONSTRAINT "_signature_menus_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_signature_menus_v" ADD CONSTRAINT "_signature_menus_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_signature_menus_v_locales" ADD CONSTRAINT "_signature_menus_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_signature_menus_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_menus_v_rels" ADD CONSTRAINT "_signature_menus_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_signature_menus_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_menus_v_rels" ADD CONSTRAINT "_signature_menus_v_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_signature_menus_v_rels" ADD CONSTRAINT "_signature_menus_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_ingredients" ADD CONSTRAINT "fresh_products_ingredients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_ingredients_locales" ADD CONSTRAINT "fresh_products_ingredients_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fresh_products_ingredients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_available_sizes" ADD CONSTRAINT "fresh_products_available_sizes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products" ADD CONSTRAINT "fresh_products_can_image_id_media_id_fk" FOREIGN KEY ("can_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fresh_products" ADD CONSTRAINT "fresh_products_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "fresh_products_locales" ADD CONSTRAINT "fresh_products_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_rels" ADD CONSTRAINT "fresh_products_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "fresh_products_rels" ADD CONSTRAINT "fresh_products_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_v_version_ingredients" ADD CONSTRAINT "_fresh_products_v_version_ingredients_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fresh_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_v_version_ingredients_locales" ADD CONSTRAINT "_fresh_products_v_version_ingredients_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fresh_products_v_version_ingredients"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_v_version_available_sizes" ADD CONSTRAINT "_fresh_products_v_version_available_sizes_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fresh_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_v" ADD CONSTRAINT "_fresh_products_v_parent_id_fresh_products_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."fresh_products"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fresh_products_v" ADD CONSTRAINT "_fresh_products_v_version_can_image_id_media_id_fk" FOREIGN KEY ("version_can_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fresh_products_v" ADD CONSTRAINT "_fresh_products_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_fresh_products_v_locales" ADD CONSTRAINT "_fresh_products_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_fresh_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_v_rels" ADD CONSTRAINT "_fresh_products_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_fresh_products_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_fresh_products_v_rels" ADD CONSTRAINT "_fresh_products_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_menu_id_signature_menus_id_fk" FOREIGN KEY ("menu_id") REFERENCES "public"."signature_menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events" ADD CONSTRAINT "events_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "events_locales" ADD CONSTRAINT "events_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "events_rels" ADD CONSTRAINT "events_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_parent_id_events_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_menu_id_signature_menus_id_fk" FOREIGN KEY ("version_menu_id") REFERENCES "public"."signature_menus"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v" ADD CONSTRAINT "_events_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_events_v_locales" ADD CONSTRAINT "_events_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_events_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_events_v_rels" ADD CONSTRAINT "_events_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "references" ADD CONSTRAINT "references_logo_id_media_id_fk" FOREIGN KEY ("logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "references" ADD CONSTRAINT "references_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "references_locales" ADD CONSTRAINT "references_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "references_rels" ADD CONSTRAINT "references_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "references_rels" ADD CONSTRAINT "references_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_references_v" ADD CONSTRAINT "_references_v_parent_id_references_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."references"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_references_v" ADD CONSTRAINT "_references_v_version_logo_id_media_id_fk" FOREIGN KEY ("version_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_references_v" ADD CONSTRAINT "_references_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_references_v_locales" ADD CONSTRAINT "_references_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_references_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_references_v_rels" ADD CONSTRAINT "_references_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_references_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_references_v_rels" ADD CONSTRAINT "_references_v_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_photo_id_media_id_fk" FOREIGN KEY ("photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials" ADD CONSTRAINT "testimonials_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "testimonials_locales" ADD CONSTRAINT "testimonials_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_parent_id_testimonials_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."testimonials"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_photo_id_media_id_fk" FOREIGN KEY ("version_photo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v" ADD CONSTRAINT "_testimonials_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_testimonials_v_locales" ADD CONSTRAINT "_testimonials_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_testimonials_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "gallery" ADD CONSTRAINT "gallery_image_id_media_id_fk" FOREIGN KEY ("image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gallery" ADD CONSTRAINT "gallery_event_id_events_id_fk" FOREIGN KEY ("event_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gallery" ADD CONSTRAINT "gallery_service_id_services_id_fk" FOREIGN KEY ("service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "gallery_locales" ADD CONSTRAINT "gallery_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_gallery_v" ADD CONSTRAINT "_gallery_v_parent_id_gallery_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."gallery"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_v" ADD CONSTRAINT "_gallery_v_version_image_id_media_id_fk" FOREIGN KEY ("version_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_v" ADD CONSTRAINT "_gallery_v_version_event_id_events_id_fk" FOREIGN KEY ("version_event_id") REFERENCES "public"."events"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_v" ADD CONSTRAINT "_gallery_v_version_service_id_services_id_fk" FOREIGN KEY ("version_service_id") REFERENCES "public"."services"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_gallery_v_locales" ADD CONSTRAINT "_gallery_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_gallery_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal_posts_categories" ADD CONSTRAINT "journal_posts_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."journal_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "journal_posts" ADD CONSTRAINT "journal_posts_featured_image_id_media_id_fk" FOREIGN KEY ("featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "journal_posts" ADD CONSTRAINT "journal_posts_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "journal_posts_locales" ADD CONSTRAINT "journal_posts_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."journal_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_posts_v_version_categories" ADD CONSTRAINT "_journal_posts_v_version_categories_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_journal_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_journal_posts_v" ADD CONSTRAINT "_journal_posts_v_parent_id_journal_posts_id_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."journal_posts"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_posts_v" ADD CONSTRAINT "_journal_posts_v_version_featured_image_id_media_id_fk" FOREIGN KEY ("version_featured_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_posts_v" ADD CONSTRAINT "_journal_posts_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_journal_posts_v_locales" ADD CONSTRAINT "_journal_posts_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_journal_posts_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leads" ADD CONSTRAINT "leads_reception_format_id_reception_formats_id_fk" FOREIGN KEY ("reception_format_id") REFERENCES "public"."reception_formats"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "leads_rels" ADD CONSTRAINT "leads_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."leads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "leads_rels" ADD CONSTRAINT "leads_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_jobs_log" ADD CONSTRAINT "payload_jobs_log_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."payload_jobs"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_locked_documents"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_media_fk" FOREIGN KEY ("media_id") REFERENCES "public"."media"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_pages_fk" FOREIGN KEY ("pages_id") REFERENCES "public"."pages"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_reception_formats_fk" FOREIGN KEY ("reception_formats_id") REFERENCES "public"."reception_formats"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_menu_categories_fk" FOREIGN KEY ("menu_categories_id") REFERENCES "public"."menu_categories"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_signature_menus_fk" FOREIGN KEY ("signature_menus_id") REFERENCES "public"."signature_menus"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_fresh_products_fk" FOREIGN KEY ("fresh_products_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_events_fk" FOREIGN KEY ("events_id") REFERENCES "public"."events"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_references_fk" FOREIGN KEY ("references_id") REFERENCES "public"."references"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_testimonials_fk" FOREIGN KEY ("testimonials_id") REFERENCES "public"."testimonials"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_gallery_fk" FOREIGN KEY ("gallery_id") REFERENCES "public"."gallery"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_journal_posts_fk" FOREIGN KEY ("journal_posts_id") REFERENCES "public"."journal_posts"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_redirects_fk" FOREIGN KEY ("redirects_id") REFERENCES "public"."redirects"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_leads_fk" FOREIGN KEY ("leads_id") REFERENCES "public"."leads"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_experience_interest_fk" FOREIGN KEY ("experience_interest_id") REFERENCES "public"."experience_interest"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."payload_preferences"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "payload_preferences_rels" ADD CONSTRAINT "payload_preferences_rels_users_fk" FOREIGN KEY ("users_id") REFERENCES "public"."users"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "site_settings_locales" ADD CONSTRAINT "site_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."site_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_site_settings_v_locales" ADD CONSTRAINT "_site_settings_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_site_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navigation" ADD CONSTRAINT "header_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_navigation_locales" ADD CONSTRAINT "header_navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "header_locales" ADD CONSTRAINT "header_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."header"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v_version_navigation" ADD CONSTRAINT "_header_v_version_navigation_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v_version_navigation_locales" ADD CONSTRAINT "_header_v_version_navigation_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v_version_navigation"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_header_v_locales" ADD CONSTRAINT "_header_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_header_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_links" ADD CONSTRAINT "footer_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_links_locales" ADD CONSTRAINT "footer_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links" ADD CONSTRAINT "footer_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_legal_links_locales" ADD CONSTRAINT "footer_legal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer_legal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "footer_locales" ADD CONSTRAINT "footer_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."footer"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_links" ADD CONSTRAINT "_footer_v_version_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_links_locales" ADD CONSTRAINT "_footer_v_version_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_legal_links" ADD CONSTRAINT "_footer_v_version_legal_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_version_legal_links_locales" ADD CONSTRAINT "_footer_v_version_legal_links_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v_version_legal_links"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_footer_v_locales" ADD CONSTRAINT "_footer_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_footer_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home" ADD CONSTRAINT "home_seo_image_id_media_id_fk" FOREIGN KEY ("seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "home_locales" ADD CONSTRAINT "home_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."home"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "home_rels" ADD CONSTRAINT "home_rels_fresh_products_fk" FOREIGN KEY ("fresh_products_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v" ADD CONSTRAINT "_home_v_version_seo_image_id_media_id_fk" FOREIGN KEY ("version_seo_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_home_v_locales" ADD CONSTRAINT "_home_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_rels" ADD CONSTRAINT "_home_v_rels_parent_fk" FOREIGN KEY ("parent_id") REFERENCES "public"."_home_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_rels" ADD CONSTRAINT "_home_v_rels_services_fk" FOREIGN KEY ("services_id") REFERENCES "public"."services"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_rels" ADD CONSTRAINT "_home_v_rels_menu_items_fk" FOREIGN KEY ("menu_items_id") REFERENCES "public"."menu_items"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_home_v_rels" ADD CONSTRAINT "_home_v_rels_fresh_products_fk" FOREIGN KEY ("fresh_products_id") REFERENCES "public"."fresh_products"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_settings_hours" ADD CONSTRAINT "contact_settings_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_settings_hours_locales" ADD CONSTRAINT "contact_settings_hours_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_settings_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_settings_social_links" ADD CONSTRAINT "contact_settings_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "contact_settings_locales" ADD CONSTRAINT "contact_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."contact_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_settings_v_version_hours" ADD CONSTRAINT "_contact_settings_v_version_hours_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_settings_v_version_hours_locales" ADD CONSTRAINT "_contact_settings_v_version_hours_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_settings_v_version_hours"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_settings_v_version_social_links" ADD CONSTRAINT "_contact_settings_v_version_social_links_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_contact_settings_v_locales" ADD CONSTRAINT "_contact_settings_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_contact_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_default_social_image_id_media_id_fk" FOREIGN KEY ("default_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings" ADD CONSTRAINT "seo_settings_organization_logo_id_media_id_fk" FOREIGN KEY ("organization_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "seo_settings_locales" ADD CONSTRAINT "seo_settings_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."seo_settings"("id") ON DELETE cascade ON UPDATE no action;
  ALTER TABLE "_seo_settings_v" ADD CONSTRAINT "_seo_settings_v_version_default_social_image_id_media_id_fk" FOREIGN KEY ("version_default_social_image_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_seo_settings_v" ADD CONSTRAINT "_seo_settings_v_version_organization_logo_id_media_id_fk" FOREIGN KEY ("version_organization_logo_id") REFERENCES "public"."media"("id") ON DELETE set null ON UPDATE no action;
  ALTER TABLE "_seo_settings_v_locales" ADD CONSTRAINT "_seo_settings_v_locales_parent_id_fk" FOREIGN KEY ("_parent_id") REFERENCES "public"."_seo_settings_v"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "users_sessions_order_idx" ON "users_sessions" USING btree ("_order");
  CREATE INDEX "users_sessions_parent_id_idx" ON "users_sessions" USING btree ("_parent_id");
  CREATE INDEX "users_updated_at_idx" ON "users" USING btree ("updated_at");
  CREATE INDEX "users_created_at_idx" ON "users" USING btree ("created_at");
  CREATE UNIQUE INDEX "users_email_idx" ON "users" USING btree ("email");
  CREATE INDEX "media_updated_at_idx" ON "media" USING btree ("updated_at");
  CREATE INDEX "media_created_at_idx" ON "media" USING btree ("created_at");
  CREATE UNIQUE INDEX "media_filename_idx" ON "media" USING btree ("filename");
  CREATE INDEX "media_sizes_thumbnail_sizes_thumbnail_filename_idx" ON "media" USING btree ("sizes_thumbnail_filename");
  CREATE INDEX "media_sizes_card_sizes_card_filename_idx" ON "media" USING btree ("sizes_card_filename");
  CREATE INDEX "media_sizes_tablet_sizes_tablet_filename_idx" ON "media" USING btree ("sizes_tablet_filename");
  CREATE INDEX "media_sizes_desktop_sizes_desktop_filename_idx" ON "media" USING btree ("sizes_desktop_filename");
  CREATE INDEX "media_sizes_hero_sizes_hero_filename_idx" ON "media" USING btree ("sizes_hero_filename");
  CREATE INDEX "media_sizes_og_sizes_og_filename_idx" ON "media" USING btree ("sizes_og_filename");
  CREATE UNIQUE INDEX "media_locales_locale_parent_id_unique" ON "media_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "hero_order_idx" ON "hero" USING btree ("_order");
  CREATE INDEX "hero_parent_id_idx" ON "hero" USING btree ("_parent_id");
  CREATE INDEX "hero_path_idx" ON "hero" USING btree ("_path");
  CREATE INDEX "hero_image_idx" ON "hero" USING btree ("image_id");
  CREATE UNIQUE INDEX "hero_locales_locale_parent_id_unique" ON "hero_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "editorial_ti_order_idx" ON "editorial_ti" USING btree ("_order");
  CREATE INDEX "editorial_ti_parent_id_idx" ON "editorial_ti" USING btree ("_parent_id");
  CREATE INDEX "editorial_ti_path_idx" ON "editorial_ti" USING btree ("_path");
  CREATE INDEX "editorial_ti_image_idx" ON "editorial_ti" USING btree ("image_id");
  CREATE UNIQUE INDEX "editorial_ti_locales_locale_parent_id_unique" ON "editorial_ti_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "full_bleed_order_idx" ON "full_bleed" USING btree ("_order");
  CREATE INDEX "full_bleed_parent_id_idx" ON "full_bleed" USING btree ("_parent_id");
  CREATE INDEX "full_bleed_path_idx" ON "full_bleed" USING btree ("_path");
  CREATE INDEX "full_bleed_image_idx" ON "full_bleed" USING btree ("image_id");
  CREATE UNIQUE INDEX "full_bleed_locales_locale_parent_id_unique" ON "full_bleed_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "manifesto_statements_order_idx" ON "manifesto_statements" USING btree ("_order");
  CREATE INDEX "manifesto_statements_parent_id_idx" ON "manifesto_statements" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "manifesto_statements_locales_locale_parent_id_unique" ON "manifesto_statements_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "manifesto_order_idx" ON "manifesto" USING btree ("_order");
  CREATE INDEX "manifesto_parent_id_idx" ON "manifesto" USING btree ("_parent_id");
  CREATE INDEX "manifesto_path_idx" ON "manifesto" USING btree ("_path");
  CREATE UNIQUE INDEX "manifesto_locales_locale_parent_id_unique" ON "manifesto_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "quote_order_idx" ON "quote" USING btree ("_order");
  CREATE INDEX "quote_parent_id_idx" ON "quote" USING btree ("_parent_id");
  CREATE INDEX "quote_path_idx" ON "quote" USING btree ("_path");
  CREATE UNIQUE INDEX "quote_locales_locale_parent_id_unique" ON "quote_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "service_showcase_order_idx" ON "service_showcase" USING btree ("_order");
  CREATE INDEX "service_showcase_parent_id_idx" ON "service_showcase" USING btree ("_parent_id");
  CREATE INDEX "service_showcase_path_idx" ON "service_showcase" USING btree ("_path");
  CREATE UNIQUE INDEX "service_showcase_locales_locale_parent_id_unique" ON "service_showcase_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "menu_showcase_order_idx" ON "menu_showcase" USING btree ("_order");
  CREATE INDEX "menu_showcase_parent_id_idx" ON "menu_showcase" USING btree ("_parent_id");
  CREATE INDEX "menu_showcase_path_idx" ON "menu_showcase" USING btree ("_path");
  CREATE UNIQUE INDEX "menu_showcase_locales_locale_parent_id_unique" ON "menu_showcase_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "signature_dishes_order_idx" ON "signature_dishes" USING btree ("_order");
  CREATE INDEX "signature_dishes_parent_id_idx" ON "signature_dishes" USING btree ("_parent_id");
  CREATE INDEX "signature_dishes_path_idx" ON "signature_dishes" USING btree ("_path");
  CREATE UNIQUE INDEX "signature_dishes_locales_locale_parent_id_unique" ON "signature_dishes_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "fresh_products_block_order_idx" ON "fresh_products_block" USING btree ("_order");
  CREATE INDEX "fresh_products_block_parent_id_idx" ON "fresh_products_block" USING btree ("_parent_id");
  CREATE INDEX "fresh_products_block_path_idx" ON "fresh_products_block" USING btree ("_path");
  CREATE UNIQUE INDEX "fresh_products_block_locales_locale_parent_id_unique" ON "fresh_products_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "gallery_preview_order_idx" ON "gallery_preview" USING btree ("_order");
  CREATE INDEX "gallery_preview_parent_id_idx" ON "gallery_preview" USING btree ("_parent_id");
  CREATE INDEX "gallery_preview_path_idx" ON "gallery_preview" USING btree ("_path");
  CREATE UNIQUE INDEX "gallery_preview_locales_locale_parent_id_unique" ON "gallery_preview_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "references_block_order_idx" ON "references_block" USING btree ("_order");
  CREATE INDEX "references_block_parent_id_idx" ON "references_block" USING btree ("_parent_id");
  CREATE INDEX "references_block_path_idx" ON "references_block" USING btree ("_path");
  CREATE UNIQUE INDEX "references_block_locales_locale_parent_id_unique" ON "references_block_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "process_steps_order_idx" ON "process_steps" USING btree ("_order");
  CREATE INDEX "process_steps_parent_id_idx" ON "process_steps" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "process_steps_locales_locale_parent_id_unique" ON "process_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "process_order_idx" ON "process" USING btree ("_order");
  CREATE INDEX "process_parent_id_idx" ON "process" USING btree ("_parent_id");
  CREATE INDEX "process_path_idx" ON "process" USING btree ("_path");
  CREATE UNIQUE INDEX "process_locales_locale_parent_id_unique" ON "process_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "experience_teaser_order_idx" ON "experience_teaser" USING btree ("_order");
  CREATE INDEX "experience_teaser_parent_id_idx" ON "experience_teaser" USING btree ("_parent_id");
  CREATE INDEX "experience_teaser_path_idx" ON "experience_teaser" USING btree ("_path");
  CREATE INDEX "experience_teaser_image_idx" ON "experience_teaser" USING btree ("image_id");
  CREATE UNIQUE INDEX "experience_teaser_locales_locale_parent_id_unique" ON "experience_teaser_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "cta_order_idx" ON "cta" USING btree ("_order");
  CREATE INDEX "cta_parent_id_idx" ON "cta" USING btree ("_parent_id");
  CREATE INDEX "cta_path_idx" ON "cta" USING btree ("_path");
  CREATE UNIQUE INDEX "cta_locales_locale_parent_id_unique" ON "cta_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "editorial_split_order_idx" ON "editorial_split" USING btree ("_order");
  CREATE INDEX "editorial_split_parent_id_idx" ON "editorial_split" USING btree ("_parent_id");
  CREATE INDEX "editorial_split_path_idx" ON "editorial_split" USING btree ("_path");
  CREATE UNIQUE INDEX "editorial_split_locales_locale_parent_id_unique" ON "editorial_split_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "story_chapter_order_idx" ON "story_chapter" USING btree ("_order");
  CREATE INDEX "story_chapter_parent_id_idx" ON "story_chapter" USING btree ("_parent_id");
  CREATE INDEX "story_chapter_path_idx" ON "story_chapter" USING btree ("_path");
  CREATE INDEX "story_chapter_image_idx" ON "story_chapter" USING btree ("image_id");
  CREATE UNIQUE INDEX "story_chapter_locales_locale_parent_id_unique" ON "story_chapter_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "pages_seed_key_idx" ON "pages" USING btree ("seed_key");
  CREATE INDEX "pages_seo_seo_image_idx" ON "pages" USING btree ("seo_image_id");
  CREATE INDEX "pages_updated_at_idx" ON "pages" USING btree ("updated_at");
  CREATE INDEX "pages_created_at_idx" ON "pages" USING btree ("created_at");
  CREATE INDEX "pages__status_idx" ON "pages" USING btree ("_status");
  CREATE UNIQUE INDEX "pages_slug_idx" ON "pages_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "pages_locales_locale_parent_id_unique" ON "pages_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "pages_rels_order_idx" ON "pages_rels" USING btree ("order");
  CREATE INDEX "pages_rels_parent_idx" ON "pages_rels" USING btree ("parent_id");
  CREATE INDEX "pages_rels_path_idx" ON "pages_rels" USING btree ("path");
  CREATE INDEX "pages_rels_services_id_idx" ON "pages_rels" USING btree ("services_id");
  CREATE INDEX "pages_rels_signature_menus_id_idx" ON "pages_rels" USING btree ("signature_menus_id");
  CREATE INDEX "pages_rels_menu_items_id_idx" ON "pages_rels" USING btree ("menu_items_id");
  CREATE INDEX "pages_rels_fresh_products_id_idx" ON "pages_rels" USING btree ("fresh_products_id");
  CREATE INDEX "pages_rels_gallery_id_idx" ON "pages_rels" USING btree ("gallery_id");
  CREATE INDEX "pages_rels_references_id_idx" ON "pages_rels" USING btree ("references_id");
  CREATE INDEX "_hero_v_order_idx" ON "_hero_v" USING btree ("_order");
  CREATE INDEX "_hero_v_parent_id_idx" ON "_hero_v" USING btree ("_parent_id");
  CREATE INDEX "_hero_v_path_idx" ON "_hero_v" USING btree ("_path");
  CREATE INDEX "_hero_v_image_idx" ON "_hero_v" USING btree ("image_id");
  CREATE UNIQUE INDEX "_hero_v_locales_locale_parent_id_unique" ON "_hero_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_editorial_ti_v_order_idx" ON "_editorial_ti_v" USING btree ("_order");
  CREATE INDEX "_editorial_ti_v_parent_id_idx" ON "_editorial_ti_v" USING btree ("_parent_id");
  CREATE INDEX "_editorial_ti_v_path_idx" ON "_editorial_ti_v" USING btree ("_path");
  CREATE INDEX "_editorial_ti_v_image_idx" ON "_editorial_ti_v" USING btree ("image_id");
  CREATE UNIQUE INDEX "_editorial_ti_v_locales_locale_parent_id_unique" ON "_editorial_ti_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_full_bleed_v_order_idx" ON "_full_bleed_v" USING btree ("_order");
  CREATE INDEX "_full_bleed_v_parent_id_idx" ON "_full_bleed_v" USING btree ("_parent_id");
  CREATE INDEX "_full_bleed_v_path_idx" ON "_full_bleed_v" USING btree ("_path");
  CREATE INDEX "_full_bleed_v_image_idx" ON "_full_bleed_v" USING btree ("image_id");
  CREATE UNIQUE INDEX "_full_bleed_v_locales_locale_parent_id_unique" ON "_full_bleed_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_manifesto_v_statements_order_idx" ON "_manifesto_v_statements" USING btree ("_order");
  CREATE INDEX "_manifesto_v_statements_parent_id_idx" ON "_manifesto_v_statements" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_manifesto_v_statements_locales_locale_parent_id_unique" ON "_manifesto_v_statements_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_manifesto_v_order_idx" ON "_manifesto_v" USING btree ("_order");
  CREATE INDEX "_manifesto_v_parent_id_idx" ON "_manifesto_v" USING btree ("_parent_id");
  CREATE INDEX "_manifesto_v_path_idx" ON "_manifesto_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_manifesto_v_locales_locale_parent_id_unique" ON "_manifesto_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_quote_v_order_idx" ON "_quote_v" USING btree ("_order");
  CREATE INDEX "_quote_v_parent_id_idx" ON "_quote_v" USING btree ("_parent_id");
  CREATE INDEX "_quote_v_path_idx" ON "_quote_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_quote_v_locales_locale_parent_id_unique" ON "_quote_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_service_showcase_v_order_idx" ON "_service_showcase_v" USING btree ("_order");
  CREATE INDEX "_service_showcase_v_parent_id_idx" ON "_service_showcase_v" USING btree ("_parent_id");
  CREATE INDEX "_service_showcase_v_path_idx" ON "_service_showcase_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_service_showcase_v_locales_locale_parent_id_unique" ON "_service_showcase_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_menu_showcase_v_order_idx" ON "_menu_showcase_v" USING btree ("_order");
  CREATE INDEX "_menu_showcase_v_parent_id_idx" ON "_menu_showcase_v" USING btree ("_parent_id");
  CREATE INDEX "_menu_showcase_v_path_idx" ON "_menu_showcase_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_menu_showcase_v_locales_locale_parent_id_unique" ON "_menu_showcase_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_signature_dishes_v_order_idx" ON "_signature_dishes_v" USING btree ("_order");
  CREATE INDEX "_signature_dishes_v_parent_id_idx" ON "_signature_dishes_v" USING btree ("_parent_id");
  CREATE INDEX "_signature_dishes_v_path_idx" ON "_signature_dishes_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_signature_dishes_v_locales_locale_parent_id_unique" ON "_signature_dishes_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_fresh_products_block_v_order_idx" ON "_fresh_products_block_v" USING btree ("_order");
  CREATE INDEX "_fresh_products_block_v_parent_id_idx" ON "_fresh_products_block_v" USING btree ("_parent_id");
  CREATE INDEX "_fresh_products_block_v_path_idx" ON "_fresh_products_block_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_fresh_products_block_v_locales_locale_parent_id_unique" ON "_fresh_products_block_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_gallery_preview_v_order_idx" ON "_gallery_preview_v" USING btree ("_order");
  CREATE INDEX "_gallery_preview_v_parent_id_idx" ON "_gallery_preview_v" USING btree ("_parent_id");
  CREATE INDEX "_gallery_preview_v_path_idx" ON "_gallery_preview_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_gallery_preview_v_locales_locale_parent_id_unique" ON "_gallery_preview_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_references_block_v_order_idx" ON "_references_block_v" USING btree ("_order");
  CREATE INDEX "_references_block_v_parent_id_idx" ON "_references_block_v" USING btree ("_parent_id");
  CREATE INDEX "_references_block_v_path_idx" ON "_references_block_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_references_block_v_locales_locale_parent_id_unique" ON "_references_block_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_process_v_steps_order_idx" ON "_process_v_steps" USING btree ("_order");
  CREATE INDEX "_process_v_steps_parent_id_idx" ON "_process_v_steps" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_process_v_steps_locales_locale_parent_id_unique" ON "_process_v_steps_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_process_v_order_idx" ON "_process_v" USING btree ("_order");
  CREATE INDEX "_process_v_parent_id_idx" ON "_process_v" USING btree ("_parent_id");
  CREATE INDEX "_process_v_path_idx" ON "_process_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_process_v_locales_locale_parent_id_unique" ON "_process_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_experience_teaser_v_order_idx" ON "_experience_teaser_v" USING btree ("_order");
  CREATE INDEX "_experience_teaser_v_parent_id_idx" ON "_experience_teaser_v" USING btree ("_parent_id");
  CREATE INDEX "_experience_teaser_v_path_idx" ON "_experience_teaser_v" USING btree ("_path");
  CREATE INDEX "_experience_teaser_v_image_idx" ON "_experience_teaser_v" USING btree ("image_id");
  CREATE UNIQUE INDEX "_experience_teaser_v_locales_locale_parent_id_unique" ON "_experience_teaser_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_cta_v_order_idx" ON "_cta_v" USING btree ("_order");
  CREATE INDEX "_cta_v_parent_id_idx" ON "_cta_v" USING btree ("_parent_id");
  CREATE INDEX "_cta_v_path_idx" ON "_cta_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_cta_v_locales_locale_parent_id_unique" ON "_cta_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_editorial_split_v_order_idx" ON "_editorial_split_v" USING btree ("_order");
  CREATE INDEX "_editorial_split_v_parent_id_idx" ON "_editorial_split_v" USING btree ("_parent_id");
  CREATE INDEX "_editorial_split_v_path_idx" ON "_editorial_split_v" USING btree ("_path");
  CREATE UNIQUE INDEX "_editorial_split_v_locales_locale_parent_id_unique" ON "_editorial_split_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_story_chapter_v_order_idx" ON "_story_chapter_v" USING btree ("_order");
  CREATE INDEX "_story_chapter_v_parent_id_idx" ON "_story_chapter_v" USING btree ("_parent_id");
  CREATE INDEX "_story_chapter_v_path_idx" ON "_story_chapter_v" USING btree ("_path");
  CREATE INDEX "_story_chapter_v_image_idx" ON "_story_chapter_v" USING btree ("image_id");
  CREATE UNIQUE INDEX "_story_chapter_v_locales_locale_parent_id_unique" ON "_story_chapter_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_parent_idx" ON "_pages_v" USING btree ("parent_id");
  CREATE INDEX "_pages_v_version_version_seed_key_idx" ON "_pages_v" USING btree ("version_seed_key");
  CREATE INDEX "_pages_v_version_seo_version_seo_image_idx" ON "_pages_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_pages_v_version_version_updated_at_idx" ON "_pages_v" USING btree ("version_updated_at");
  CREATE INDEX "_pages_v_version_version_created_at_idx" ON "_pages_v" USING btree ("version_created_at");
  CREATE INDEX "_pages_v_version_version__status_idx" ON "_pages_v" USING btree ("version__status");
  CREATE INDEX "_pages_v_created_at_idx" ON "_pages_v" USING btree ("created_at");
  CREATE INDEX "_pages_v_updated_at_idx" ON "_pages_v" USING btree ("updated_at");
  CREATE INDEX "_pages_v_snapshot_idx" ON "_pages_v" USING btree ("snapshot");
  CREATE INDEX "_pages_v_published_locale_idx" ON "_pages_v" USING btree ("published_locale");
  CREATE INDEX "_pages_v_latest_idx" ON "_pages_v" USING btree ("latest");
  CREATE INDEX "_pages_v_autosave_idx" ON "_pages_v" USING btree ("autosave");
  CREATE INDEX "_pages_v_version_version_slug_idx" ON "_pages_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_pages_v_locales_locale_parent_id_unique" ON "_pages_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_pages_v_rels_order_idx" ON "_pages_v_rels" USING btree ("order");
  CREATE INDEX "_pages_v_rels_parent_idx" ON "_pages_v_rels" USING btree ("parent_id");
  CREATE INDEX "_pages_v_rels_path_idx" ON "_pages_v_rels" USING btree ("path");
  CREATE INDEX "_pages_v_rels_services_id_idx" ON "_pages_v_rels" USING btree ("services_id");
  CREATE INDEX "_pages_v_rels_signature_menus_id_idx" ON "_pages_v_rels" USING btree ("signature_menus_id");
  CREATE INDEX "_pages_v_rels_menu_items_id_idx" ON "_pages_v_rels" USING btree ("menu_items_id");
  CREATE INDEX "_pages_v_rels_fresh_products_id_idx" ON "_pages_v_rels" USING btree ("fresh_products_id");
  CREATE INDEX "_pages_v_rels_gallery_id_idx" ON "_pages_v_rels" USING btree ("gallery_id");
  CREATE INDEX "_pages_v_rels_references_id_idx" ON "_pages_v_rels" USING btree ("references_id");
  CREATE UNIQUE INDEX "services_seed_key_idx" ON "services" USING btree ("seed_key");
  CREATE UNIQUE INDEX "services_category_idx" ON "services" USING btree ("category");
  CREATE INDEX "services_sort_order_idx" ON "services" USING btree ("sort_order");
  CREATE INDEX "services_seo_seo_image_idx" ON "services" USING btree ("seo_image_id");
  CREATE INDEX "services_updated_at_idx" ON "services" USING btree ("updated_at");
  CREATE INDEX "services_created_at_idx" ON "services" USING btree ("created_at");
  CREATE INDEX "services__status_idx" ON "services" USING btree ("_status");
  CREATE UNIQUE INDEX "services_slug_idx" ON "services_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "services_locales_locale_parent_id_unique" ON "services_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "services_rels_order_idx" ON "services_rels" USING btree ("order");
  CREATE INDEX "services_rels_parent_idx" ON "services_rels" USING btree ("parent_id");
  CREATE INDEX "services_rels_path_idx" ON "services_rels" USING btree ("path");
  CREATE INDEX "services_rels_reception_formats_id_idx" ON "services_rels" USING btree ("reception_formats_id");
  CREATE INDEX "services_rels_signature_menus_id_idx" ON "services_rels" USING btree ("signature_menus_id");
  CREATE INDEX "services_rels_gallery_id_idx" ON "services_rels" USING btree ("gallery_id");
  CREATE INDEX "services_rels_references_id_idx" ON "services_rels" USING btree ("references_id");
  CREATE INDEX "_services_v_parent_idx" ON "_services_v" USING btree ("parent_id");
  CREATE INDEX "_services_v_version_version_seed_key_idx" ON "_services_v" USING btree ("version_seed_key");
  CREATE INDEX "_services_v_version_version_category_idx" ON "_services_v" USING btree ("version_category");
  CREATE INDEX "_services_v_version_version_sort_order_idx" ON "_services_v" USING btree ("version_sort_order");
  CREATE INDEX "_services_v_version_seo_version_seo_image_idx" ON "_services_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_services_v_version_version_updated_at_idx" ON "_services_v" USING btree ("version_updated_at");
  CREATE INDEX "_services_v_version_version_created_at_idx" ON "_services_v" USING btree ("version_created_at");
  CREATE INDEX "_services_v_version_version__status_idx" ON "_services_v" USING btree ("version__status");
  CREATE INDEX "_services_v_created_at_idx" ON "_services_v" USING btree ("created_at");
  CREATE INDEX "_services_v_updated_at_idx" ON "_services_v" USING btree ("updated_at");
  CREATE INDEX "_services_v_snapshot_idx" ON "_services_v" USING btree ("snapshot");
  CREATE INDEX "_services_v_published_locale_idx" ON "_services_v" USING btree ("published_locale");
  CREATE INDEX "_services_v_latest_idx" ON "_services_v" USING btree ("latest");
  CREATE INDEX "_services_v_autosave_idx" ON "_services_v" USING btree ("autosave");
  CREATE INDEX "_services_v_version_version_slug_idx" ON "_services_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_services_v_locales_locale_parent_id_unique" ON "_services_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_services_v_rels_order_idx" ON "_services_v_rels" USING btree ("order");
  CREATE INDEX "_services_v_rels_parent_idx" ON "_services_v_rels" USING btree ("parent_id");
  CREATE INDEX "_services_v_rels_path_idx" ON "_services_v_rels" USING btree ("path");
  CREATE INDEX "_services_v_rels_reception_formats_id_idx" ON "_services_v_rels" USING btree ("reception_formats_id");
  CREATE INDEX "_services_v_rels_signature_menus_id_idx" ON "_services_v_rels" USING btree ("signature_menus_id");
  CREATE INDEX "_services_v_rels_gallery_id_idx" ON "_services_v_rels" USING btree ("gallery_id");
  CREATE INDEX "_services_v_rels_references_id_idx" ON "_services_v_rels" USING btree ("references_id");
  CREATE INDEX "reception_formats_recommended_event_types_order_idx" ON "reception_formats_recommended_event_types" USING btree ("_order");
  CREATE INDEX "reception_formats_recommended_event_types_parent_id_idx" ON "reception_formats_recommended_event_types" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "reception_formats_recommended_event_types_locales_locale_par" ON "reception_formats_recommended_event_types_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "reception_formats_seed_key_idx" ON "reception_formats" USING btree ("seed_key");
  CREATE INDEX "reception_formats_sort_order_idx" ON "reception_formats" USING btree ("sort_order");
  CREATE INDEX "reception_formats_updated_at_idx" ON "reception_formats" USING btree ("updated_at");
  CREATE INDEX "reception_formats_created_at_idx" ON "reception_formats" USING btree ("created_at");
  CREATE INDEX "reception_formats__status_idx" ON "reception_formats" USING btree ("_status");
  CREATE UNIQUE INDEX "reception_formats_slug_idx" ON "reception_formats_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "reception_formats_locales_locale_parent_id_unique" ON "reception_formats_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "reception_formats_rels_order_idx" ON "reception_formats_rels" USING btree ("order");
  CREATE INDEX "reception_formats_rels_parent_idx" ON "reception_formats_rels" USING btree ("parent_id");
  CREATE INDEX "reception_formats_rels_path_idx" ON "reception_formats_rels" USING btree ("path");
  CREATE INDEX "reception_formats_rels_gallery_id_idx" ON "reception_formats_rels" USING btree ("gallery_id");
  CREATE INDEX "reception_formats_rels_signature_menus_id_idx" ON "reception_formats_rels" USING btree ("signature_menus_id");
  CREATE INDEX "_reception_formats_v_version_recommended_event_types_order_idx" ON "_reception_formats_v_version_recommended_event_types" USING btree ("_order");
  CREATE INDEX "_reception_formats_v_version_recommended_event_types_parent_id_idx" ON "_reception_formats_v_version_recommended_event_types" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_reception_formats_v_version_recommended_event_types_local_1" ON "_reception_formats_v_version_recommended_event_types_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_reception_formats_v_parent_idx" ON "_reception_formats_v" USING btree ("parent_id");
  CREATE INDEX "_reception_formats_v_version_version_seed_key_idx" ON "_reception_formats_v" USING btree ("version_seed_key");
  CREATE INDEX "_reception_formats_v_version_version_sort_order_idx" ON "_reception_formats_v" USING btree ("version_sort_order");
  CREATE INDEX "_reception_formats_v_version_version_updated_at_idx" ON "_reception_formats_v" USING btree ("version_updated_at");
  CREATE INDEX "_reception_formats_v_version_version_created_at_idx" ON "_reception_formats_v" USING btree ("version_created_at");
  CREATE INDEX "_reception_formats_v_version_version__status_idx" ON "_reception_formats_v" USING btree ("version__status");
  CREATE INDEX "_reception_formats_v_created_at_idx" ON "_reception_formats_v" USING btree ("created_at");
  CREATE INDEX "_reception_formats_v_updated_at_idx" ON "_reception_formats_v" USING btree ("updated_at");
  CREATE INDEX "_reception_formats_v_snapshot_idx" ON "_reception_formats_v" USING btree ("snapshot");
  CREATE INDEX "_reception_formats_v_published_locale_idx" ON "_reception_formats_v" USING btree ("published_locale");
  CREATE INDEX "_reception_formats_v_latest_idx" ON "_reception_formats_v" USING btree ("latest");
  CREATE INDEX "_reception_formats_v_autosave_idx" ON "_reception_formats_v" USING btree ("autosave");
  CREATE INDEX "_reception_formats_v_version_version_slug_idx" ON "_reception_formats_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_reception_formats_v_locales_locale_parent_id_unique" ON "_reception_formats_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_reception_formats_v_rels_order_idx" ON "_reception_formats_v_rels" USING btree ("order");
  CREATE INDEX "_reception_formats_v_rels_parent_idx" ON "_reception_formats_v_rels" USING btree ("parent_id");
  CREATE INDEX "_reception_formats_v_rels_path_idx" ON "_reception_formats_v_rels" USING btree ("path");
  CREATE INDEX "_reception_formats_v_rels_gallery_id_idx" ON "_reception_formats_v_rels" USING btree ("gallery_id");
  CREATE INDEX "_reception_formats_v_rels_signature_menus_id_idx" ON "_reception_formats_v_rels" USING btree ("signature_menus_id");
  CREATE UNIQUE INDEX "menu_categories_seed_key_idx" ON "menu_categories" USING btree ("seed_key");
  CREATE UNIQUE INDEX "menu_categories_family_idx" ON "menu_categories" USING btree ("family");
  CREATE INDEX "menu_categories_sort_order_idx" ON "menu_categories" USING btree ("sort_order");
  CREATE INDEX "menu_categories_updated_at_idx" ON "menu_categories" USING btree ("updated_at");
  CREATE INDEX "menu_categories_created_at_idx" ON "menu_categories" USING btree ("created_at");
  CREATE INDEX "menu_categories__status_idx" ON "menu_categories" USING btree ("_status");
  CREATE UNIQUE INDEX "menu_categories_slug_idx" ON "menu_categories_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "menu_categories_locales_locale_parent_id_unique" ON "menu_categories_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_menu_categories_v_parent_idx" ON "_menu_categories_v" USING btree ("parent_id");
  CREATE INDEX "_menu_categories_v_version_version_seed_key_idx" ON "_menu_categories_v" USING btree ("version_seed_key");
  CREATE INDEX "_menu_categories_v_version_version_family_idx" ON "_menu_categories_v" USING btree ("version_family");
  CREATE INDEX "_menu_categories_v_version_version_sort_order_idx" ON "_menu_categories_v" USING btree ("version_sort_order");
  CREATE INDEX "_menu_categories_v_version_version_updated_at_idx" ON "_menu_categories_v" USING btree ("version_updated_at");
  CREATE INDEX "_menu_categories_v_version_version_created_at_idx" ON "_menu_categories_v" USING btree ("version_created_at");
  CREATE INDEX "_menu_categories_v_version_version__status_idx" ON "_menu_categories_v" USING btree ("version__status");
  CREATE INDEX "_menu_categories_v_created_at_idx" ON "_menu_categories_v" USING btree ("created_at");
  CREATE INDEX "_menu_categories_v_updated_at_idx" ON "_menu_categories_v" USING btree ("updated_at");
  CREATE INDEX "_menu_categories_v_snapshot_idx" ON "_menu_categories_v" USING btree ("snapshot");
  CREATE INDEX "_menu_categories_v_published_locale_idx" ON "_menu_categories_v" USING btree ("published_locale");
  CREATE INDEX "_menu_categories_v_latest_idx" ON "_menu_categories_v" USING btree ("latest");
  CREATE INDEX "_menu_categories_v_autosave_idx" ON "_menu_categories_v" USING btree ("autosave");
  CREATE INDEX "_menu_categories_v_version_version_slug_idx" ON "_menu_categories_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_menu_categories_v_locales_locale_parent_id_unique" ON "_menu_categories_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "menu_items_composition_order_idx" ON "menu_items_composition" USING btree ("_order");
  CREATE INDEX "menu_items_composition_parent_id_idx" ON "menu_items_composition" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "menu_items_composition_locales_locale_parent_id_unique" ON "menu_items_composition_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "menu_items_dietary_verified_labels_order_idx" ON "menu_items_dietary_verified_labels" USING btree ("order");
  CREATE INDEX "menu_items_dietary_verified_labels_parent_idx" ON "menu_items_dietary_verified_labels" USING btree ("parent_id");
  CREATE INDEX "menu_items_dietary_allergens_order_idx" ON "menu_items_dietary_allergens" USING btree ("order");
  CREATE INDEX "menu_items_dietary_allergens_parent_idx" ON "menu_items_dietary_allergens" USING btree ("parent_id");
  CREATE UNIQUE INDEX "menu_items_seed_key_idx" ON "menu_items" USING btree ("seed_key");
  CREATE INDEX "menu_items_category_idx" ON "menu_items" USING btree ("category_id");
  CREATE INDEX "menu_items_featured_image_idx" ON "menu_items" USING btree ("featured_image_id");
  CREATE INDEX "menu_items_sort_order_idx" ON "menu_items" USING btree ("sort_order");
  CREATE INDEX "menu_items_seo_seo_image_idx" ON "menu_items" USING btree ("seo_image_id");
  CREATE INDEX "menu_items_updated_at_idx" ON "menu_items" USING btree ("updated_at");
  CREATE INDEX "menu_items_created_at_idx" ON "menu_items" USING btree ("created_at");
  CREATE INDEX "menu_items__status_idx" ON "menu_items" USING btree ("_status");
  CREATE UNIQUE INDEX "menu_items_slug_idx" ON "menu_items_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "menu_items_locales_locale_parent_id_unique" ON "menu_items_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "menu_items_rels_order_idx" ON "menu_items_rels" USING btree ("order");
  CREATE INDEX "menu_items_rels_parent_idx" ON "menu_items_rels" USING btree ("parent_id");
  CREATE INDEX "menu_items_rels_path_idx" ON "menu_items_rels" USING btree ("path");
  CREATE INDEX "menu_items_rels_media_id_idx" ON "menu_items_rels" USING btree ("media_id");
  CREATE INDEX "_menu_items_v_version_composition_order_idx" ON "_menu_items_v_version_composition" USING btree ("_order");
  CREATE INDEX "_menu_items_v_version_composition_parent_id_idx" ON "_menu_items_v_version_composition" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_menu_items_v_version_composition_locales_locale_parent_id_u" ON "_menu_items_v_version_composition_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_menu_items_v_version_dietary_verified_labels_order_idx" ON "_menu_items_v_version_dietary_verified_labels" USING btree ("order");
  CREATE INDEX "_menu_items_v_version_dietary_verified_labels_parent_idx" ON "_menu_items_v_version_dietary_verified_labels" USING btree ("parent_id");
  CREATE INDEX "_menu_items_v_version_dietary_allergens_order_idx" ON "_menu_items_v_version_dietary_allergens" USING btree ("order");
  CREATE INDEX "_menu_items_v_version_dietary_allergens_parent_idx" ON "_menu_items_v_version_dietary_allergens" USING btree ("parent_id");
  CREATE INDEX "_menu_items_v_parent_idx" ON "_menu_items_v" USING btree ("parent_id");
  CREATE INDEX "_menu_items_v_version_version_seed_key_idx" ON "_menu_items_v" USING btree ("version_seed_key");
  CREATE INDEX "_menu_items_v_version_version_category_idx" ON "_menu_items_v" USING btree ("version_category_id");
  CREATE INDEX "_menu_items_v_version_version_featured_image_idx" ON "_menu_items_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_menu_items_v_version_version_sort_order_idx" ON "_menu_items_v" USING btree ("version_sort_order");
  CREATE INDEX "_menu_items_v_version_seo_version_seo_image_idx" ON "_menu_items_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_menu_items_v_version_version_updated_at_idx" ON "_menu_items_v" USING btree ("version_updated_at");
  CREATE INDEX "_menu_items_v_version_version_created_at_idx" ON "_menu_items_v" USING btree ("version_created_at");
  CREATE INDEX "_menu_items_v_version_version__status_idx" ON "_menu_items_v" USING btree ("version__status");
  CREATE INDEX "_menu_items_v_created_at_idx" ON "_menu_items_v" USING btree ("created_at");
  CREATE INDEX "_menu_items_v_updated_at_idx" ON "_menu_items_v" USING btree ("updated_at");
  CREATE INDEX "_menu_items_v_snapshot_idx" ON "_menu_items_v" USING btree ("snapshot");
  CREATE INDEX "_menu_items_v_published_locale_idx" ON "_menu_items_v" USING btree ("published_locale");
  CREATE INDEX "_menu_items_v_latest_idx" ON "_menu_items_v" USING btree ("latest");
  CREATE INDEX "_menu_items_v_autosave_idx" ON "_menu_items_v" USING btree ("autosave");
  CREATE INDEX "_menu_items_v_version_version_slug_idx" ON "_menu_items_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_menu_items_v_locales_locale_parent_id_unique" ON "_menu_items_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_menu_items_v_rels_order_idx" ON "_menu_items_v_rels" USING btree ("order");
  CREATE INDEX "_menu_items_v_rels_parent_idx" ON "_menu_items_v_rels" USING btree ("parent_id");
  CREATE INDEX "_menu_items_v_rels_path_idx" ON "_menu_items_v_rels" USING btree ("path");
  CREATE INDEX "_menu_items_v_rels_media_id_idx" ON "_menu_items_v_rels" USING btree ("media_id");
  CREATE INDEX "signature_menus_courses_order_idx" ON "signature_menus_courses" USING btree ("_order");
  CREATE INDEX "signature_menus_courses_parent_id_idx" ON "signature_menus_courses" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "signature_menus_courses_locales_locale_parent_id_unique" ON "signature_menus_courses_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "signature_menus_seed_key_idx" ON "signature_menus" USING btree ("seed_key");
  CREATE INDEX "signature_menus_featured_image_idx" ON "signature_menus" USING btree ("featured_image_id");
  CREATE INDEX "signature_menus_sort_order_idx" ON "signature_menus" USING btree ("sort_order");
  CREATE INDEX "signature_menus_seo_seo_image_idx" ON "signature_menus" USING btree ("seo_image_id");
  CREATE INDEX "signature_menus_updated_at_idx" ON "signature_menus" USING btree ("updated_at");
  CREATE INDEX "signature_menus_created_at_idx" ON "signature_menus" USING btree ("created_at");
  CREATE INDEX "signature_menus__status_idx" ON "signature_menus" USING btree ("_status");
  CREATE UNIQUE INDEX "signature_menus_slug_idx" ON "signature_menus_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "signature_menus_locales_locale_parent_id_unique" ON "signature_menus_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "signature_menus_rels_order_idx" ON "signature_menus_rels" USING btree ("order");
  CREATE INDEX "signature_menus_rels_parent_idx" ON "signature_menus_rels" USING btree ("parent_id");
  CREATE INDEX "signature_menus_rels_path_idx" ON "signature_menus_rels" USING btree ("path");
  CREATE INDEX "signature_menus_rels_menu_items_id_idx" ON "signature_menus_rels" USING btree ("menu_items_id");
  CREATE INDEX "signature_menus_rels_media_id_idx" ON "signature_menus_rels" USING btree ("media_id");
  CREATE INDEX "_signature_menus_v_version_courses_order_idx" ON "_signature_menus_v_version_courses" USING btree ("_order");
  CREATE INDEX "_signature_menus_v_version_courses_parent_id_idx" ON "_signature_menus_v_version_courses" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_signature_menus_v_version_courses_locales_locale_parent_id_" ON "_signature_menus_v_version_courses_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_signature_menus_v_parent_idx" ON "_signature_menus_v" USING btree ("parent_id");
  CREATE INDEX "_signature_menus_v_version_version_seed_key_idx" ON "_signature_menus_v" USING btree ("version_seed_key");
  CREATE INDEX "_signature_menus_v_version_version_featured_image_idx" ON "_signature_menus_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_signature_menus_v_version_version_sort_order_idx" ON "_signature_menus_v" USING btree ("version_sort_order");
  CREATE INDEX "_signature_menus_v_version_seo_version_seo_image_idx" ON "_signature_menus_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_signature_menus_v_version_version_updated_at_idx" ON "_signature_menus_v" USING btree ("version_updated_at");
  CREATE INDEX "_signature_menus_v_version_version_created_at_idx" ON "_signature_menus_v" USING btree ("version_created_at");
  CREATE INDEX "_signature_menus_v_version_version__status_idx" ON "_signature_menus_v" USING btree ("version__status");
  CREATE INDEX "_signature_menus_v_created_at_idx" ON "_signature_menus_v" USING btree ("created_at");
  CREATE INDEX "_signature_menus_v_updated_at_idx" ON "_signature_menus_v" USING btree ("updated_at");
  CREATE INDEX "_signature_menus_v_snapshot_idx" ON "_signature_menus_v" USING btree ("snapshot");
  CREATE INDEX "_signature_menus_v_published_locale_idx" ON "_signature_menus_v" USING btree ("published_locale");
  CREATE INDEX "_signature_menus_v_latest_idx" ON "_signature_menus_v" USING btree ("latest");
  CREATE INDEX "_signature_menus_v_autosave_idx" ON "_signature_menus_v" USING btree ("autosave");
  CREATE INDEX "_signature_menus_v_version_version_slug_idx" ON "_signature_menus_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_signature_menus_v_locales_locale_parent_id_unique" ON "_signature_menus_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_signature_menus_v_rels_order_idx" ON "_signature_menus_v_rels" USING btree ("order");
  CREATE INDEX "_signature_menus_v_rels_parent_idx" ON "_signature_menus_v_rels" USING btree ("parent_id");
  CREATE INDEX "_signature_menus_v_rels_path_idx" ON "_signature_menus_v_rels" USING btree ("path");
  CREATE INDEX "_signature_menus_v_rels_menu_items_id_idx" ON "_signature_menus_v_rels" USING btree ("menu_items_id");
  CREATE INDEX "_signature_menus_v_rels_media_id_idx" ON "_signature_menus_v_rels" USING btree ("media_id");
  CREATE INDEX "fresh_products_ingredients_order_idx" ON "fresh_products_ingredients" USING btree ("_order");
  CREATE INDEX "fresh_products_ingredients_parent_id_idx" ON "fresh_products_ingredients" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "fresh_products_ingredients_locales_locale_parent_id_unique" ON "fresh_products_ingredients_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "fresh_products_available_sizes_order_idx" ON "fresh_products_available_sizes" USING btree ("_order");
  CREATE INDEX "fresh_products_available_sizes_parent_id_idx" ON "fresh_products_available_sizes" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "fresh_products_seed_key_idx" ON "fresh_products" USING btree ("seed_key");
  CREATE INDEX "fresh_products_can_image_idx" ON "fresh_products" USING btree ("can_image_id");
  CREATE INDEX "fresh_products_sort_order_idx" ON "fresh_products" USING btree ("sort_order");
  CREATE INDEX "fresh_products_seo_seo_image_idx" ON "fresh_products" USING btree ("seo_image_id");
  CREATE INDEX "fresh_products_updated_at_idx" ON "fresh_products" USING btree ("updated_at");
  CREATE INDEX "fresh_products_created_at_idx" ON "fresh_products" USING btree ("created_at");
  CREATE INDEX "fresh_products__status_idx" ON "fresh_products" USING btree ("_status");
  CREATE UNIQUE INDEX "fresh_products_slug_idx" ON "fresh_products_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "fresh_products_locales_locale_parent_id_unique" ON "fresh_products_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "fresh_products_rels_order_idx" ON "fresh_products_rels" USING btree ("order");
  CREATE INDEX "fresh_products_rels_parent_idx" ON "fresh_products_rels" USING btree ("parent_id");
  CREATE INDEX "fresh_products_rels_path_idx" ON "fresh_products_rels" USING btree ("path");
  CREATE INDEX "fresh_products_rels_media_id_idx" ON "fresh_products_rels" USING btree ("media_id");
  CREATE INDEX "_fresh_products_v_version_ingredients_order_idx" ON "_fresh_products_v_version_ingredients" USING btree ("_order");
  CREATE INDEX "_fresh_products_v_version_ingredients_parent_id_idx" ON "_fresh_products_v_version_ingredients" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_fresh_products_v_version_ingredients_locales_locale_parent_" ON "_fresh_products_v_version_ingredients_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_fresh_products_v_version_available_sizes_order_idx" ON "_fresh_products_v_version_available_sizes" USING btree ("_order");
  CREATE INDEX "_fresh_products_v_version_available_sizes_parent_id_idx" ON "_fresh_products_v_version_available_sizes" USING btree ("_parent_id");
  CREATE INDEX "_fresh_products_v_parent_idx" ON "_fresh_products_v" USING btree ("parent_id");
  CREATE INDEX "_fresh_products_v_version_version_seed_key_idx" ON "_fresh_products_v" USING btree ("version_seed_key");
  CREATE INDEX "_fresh_products_v_version_version_can_image_idx" ON "_fresh_products_v" USING btree ("version_can_image_id");
  CREATE INDEX "_fresh_products_v_version_version_sort_order_idx" ON "_fresh_products_v" USING btree ("version_sort_order");
  CREATE INDEX "_fresh_products_v_version_seo_version_seo_image_idx" ON "_fresh_products_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_fresh_products_v_version_version_updated_at_idx" ON "_fresh_products_v" USING btree ("version_updated_at");
  CREATE INDEX "_fresh_products_v_version_version_created_at_idx" ON "_fresh_products_v" USING btree ("version_created_at");
  CREATE INDEX "_fresh_products_v_version_version__status_idx" ON "_fresh_products_v" USING btree ("version__status");
  CREATE INDEX "_fresh_products_v_created_at_idx" ON "_fresh_products_v" USING btree ("created_at");
  CREATE INDEX "_fresh_products_v_updated_at_idx" ON "_fresh_products_v" USING btree ("updated_at");
  CREATE INDEX "_fresh_products_v_snapshot_idx" ON "_fresh_products_v" USING btree ("snapshot");
  CREATE INDEX "_fresh_products_v_published_locale_idx" ON "_fresh_products_v" USING btree ("published_locale");
  CREATE INDEX "_fresh_products_v_latest_idx" ON "_fresh_products_v" USING btree ("latest");
  CREATE INDEX "_fresh_products_v_autosave_idx" ON "_fresh_products_v" USING btree ("autosave");
  CREATE INDEX "_fresh_products_v_version_version_slug_idx" ON "_fresh_products_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_fresh_products_v_locales_locale_parent_id_unique" ON "_fresh_products_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_fresh_products_v_rels_order_idx" ON "_fresh_products_v_rels" USING btree ("order");
  CREATE INDEX "_fresh_products_v_rels_parent_idx" ON "_fresh_products_v_rels" USING btree ("parent_id");
  CREATE INDEX "_fresh_products_v_rels_path_idx" ON "_fresh_products_v_rels" USING btree ("path");
  CREATE INDEX "_fresh_products_v_rels_media_id_idx" ON "_fresh_products_v_rels" USING btree ("media_id");
  CREATE UNIQUE INDEX "events_seed_key_idx" ON "events" USING btree ("seed_key");
  CREATE INDEX "events_menu_idx" ON "events" USING btree ("menu_id");
  CREATE INDEX "events_featured_image_idx" ON "events" USING btree ("featured_image_id");
  CREATE INDEX "events_sort_order_idx" ON "events" USING btree ("sort_order");
  CREATE INDEX "events_seo_seo_image_idx" ON "events" USING btree ("seo_image_id");
  CREATE INDEX "events_updated_at_idx" ON "events" USING btree ("updated_at");
  CREATE INDEX "events_created_at_idx" ON "events" USING btree ("created_at");
  CREATE INDEX "events__status_idx" ON "events" USING btree ("_status");
  CREATE UNIQUE INDEX "events_slug_idx" ON "events_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "events_locales_locale_parent_id_unique" ON "events_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "events_rels_order_idx" ON "events_rels" USING btree ("order");
  CREATE INDEX "events_rels_parent_idx" ON "events_rels" USING btree ("parent_id");
  CREATE INDEX "events_rels_path_idx" ON "events_rels" USING btree ("path");
  CREATE INDEX "events_rels_media_id_idx" ON "events_rels" USING btree ("media_id");
  CREATE INDEX "_events_v_parent_idx" ON "_events_v" USING btree ("parent_id");
  CREATE INDEX "_events_v_version_version_seed_key_idx" ON "_events_v" USING btree ("version_seed_key");
  CREATE INDEX "_events_v_version_version_menu_idx" ON "_events_v" USING btree ("version_menu_id");
  CREATE INDEX "_events_v_version_version_featured_image_idx" ON "_events_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_events_v_version_version_sort_order_idx" ON "_events_v" USING btree ("version_sort_order");
  CREATE INDEX "_events_v_version_seo_version_seo_image_idx" ON "_events_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_events_v_version_version_updated_at_idx" ON "_events_v" USING btree ("version_updated_at");
  CREATE INDEX "_events_v_version_version_created_at_idx" ON "_events_v" USING btree ("version_created_at");
  CREATE INDEX "_events_v_version_version__status_idx" ON "_events_v" USING btree ("version__status");
  CREATE INDEX "_events_v_created_at_idx" ON "_events_v" USING btree ("created_at");
  CREATE INDEX "_events_v_updated_at_idx" ON "_events_v" USING btree ("updated_at");
  CREATE INDEX "_events_v_snapshot_idx" ON "_events_v" USING btree ("snapshot");
  CREATE INDEX "_events_v_published_locale_idx" ON "_events_v" USING btree ("published_locale");
  CREATE INDEX "_events_v_latest_idx" ON "_events_v" USING btree ("latest");
  CREATE INDEX "_events_v_autosave_idx" ON "_events_v" USING btree ("autosave");
  CREATE INDEX "_events_v_version_version_slug_idx" ON "_events_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_events_v_locales_locale_parent_id_unique" ON "_events_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_events_v_rels_order_idx" ON "_events_v_rels" USING btree ("order");
  CREATE INDEX "_events_v_rels_parent_idx" ON "_events_v_rels" USING btree ("parent_id");
  CREATE INDEX "_events_v_rels_path_idx" ON "_events_v_rels" USING btree ("path");
  CREATE INDEX "_events_v_rels_media_id_idx" ON "_events_v_rels" USING btree ("media_id");
  CREATE INDEX "references_logo_idx" ON "references" USING btree ("logo_id");
  CREATE INDEX "references_sort_order_idx" ON "references" USING btree ("sort_order");
  CREATE INDEX "references_seo_seo_image_idx" ON "references" USING btree ("seo_image_id");
  CREATE INDEX "references_updated_at_idx" ON "references" USING btree ("updated_at");
  CREATE INDEX "references_created_at_idx" ON "references" USING btree ("created_at");
  CREATE INDEX "references__status_idx" ON "references" USING btree ("_status");
  CREATE UNIQUE INDEX "references_locales_locale_parent_id_unique" ON "references_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "references_rels_order_idx" ON "references_rels" USING btree ("order");
  CREATE INDEX "references_rels_parent_idx" ON "references_rels" USING btree ("parent_id");
  CREATE INDEX "references_rels_path_idx" ON "references_rels" USING btree ("path");
  CREATE INDEX "references_rels_media_id_idx" ON "references_rels" USING btree ("media_id");
  CREATE INDEX "_references_v_parent_idx" ON "_references_v" USING btree ("parent_id");
  CREATE INDEX "_references_v_version_version_logo_idx" ON "_references_v" USING btree ("version_logo_id");
  CREATE INDEX "_references_v_version_version_sort_order_idx" ON "_references_v" USING btree ("version_sort_order");
  CREATE INDEX "_references_v_version_seo_version_seo_image_idx" ON "_references_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_references_v_version_version_updated_at_idx" ON "_references_v" USING btree ("version_updated_at");
  CREATE INDEX "_references_v_version_version_created_at_idx" ON "_references_v" USING btree ("version_created_at");
  CREATE INDEX "_references_v_version_version__status_idx" ON "_references_v" USING btree ("version__status");
  CREATE INDEX "_references_v_created_at_idx" ON "_references_v" USING btree ("created_at");
  CREATE INDEX "_references_v_updated_at_idx" ON "_references_v" USING btree ("updated_at");
  CREATE INDEX "_references_v_snapshot_idx" ON "_references_v" USING btree ("snapshot");
  CREATE INDEX "_references_v_published_locale_idx" ON "_references_v" USING btree ("published_locale");
  CREATE INDEX "_references_v_latest_idx" ON "_references_v" USING btree ("latest");
  CREATE INDEX "_references_v_autosave_idx" ON "_references_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_references_v_locales_locale_parent_id_unique" ON "_references_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_references_v_rels_order_idx" ON "_references_v_rels" USING btree ("order");
  CREATE INDEX "_references_v_rels_parent_idx" ON "_references_v_rels" USING btree ("parent_id");
  CREATE INDEX "_references_v_rels_path_idx" ON "_references_v_rels" USING btree ("path");
  CREATE INDEX "_references_v_rels_media_id_idx" ON "_references_v_rels" USING btree ("media_id");
  CREATE INDEX "testimonials_photo_idx" ON "testimonials" USING btree ("photo_id");
  CREATE INDEX "testimonials_sort_order_idx" ON "testimonials" USING btree ("sort_order");
  CREATE INDEX "testimonials_seo_seo_image_idx" ON "testimonials" USING btree ("seo_image_id");
  CREATE INDEX "testimonials_updated_at_idx" ON "testimonials" USING btree ("updated_at");
  CREATE INDEX "testimonials_created_at_idx" ON "testimonials" USING btree ("created_at");
  CREATE INDEX "testimonials__status_idx" ON "testimonials" USING btree ("_status");
  CREATE UNIQUE INDEX "testimonials_locales_locale_parent_id_unique" ON "testimonials_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_testimonials_v_parent_idx" ON "_testimonials_v" USING btree ("parent_id");
  CREATE INDEX "_testimonials_v_version_version_photo_idx" ON "_testimonials_v" USING btree ("version_photo_id");
  CREATE INDEX "_testimonials_v_version_version_sort_order_idx" ON "_testimonials_v" USING btree ("version_sort_order");
  CREATE INDEX "_testimonials_v_version_seo_version_seo_image_idx" ON "_testimonials_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_testimonials_v_version_version_updated_at_idx" ON "_testimonials_v" USING btree ("version_updated_at");
  CREATE INDEX "_testimonials_v_version_version_created_at_idx" ON "_testimonials_v" USING btree ("version_created_at");
  CREATE INDEX "_testimonials_v_version_version__status_idx" ON "_testimonials_v" USING btree ("version__status");
  CREATE INDEX "_testimonials_v_created_at_idx" ON "_testimonials_v" USING btree ("created_at");
  CREATE INDEX "_testimonials_v_updated_at_idx" ON "_testimonials_v" USING btree ("updated_at");
  CREATE INDEX "_testimonials_v_snapshot_idx" ON "_testimonials_v" USING btree ("snapshot");
  CREATE INDEX "_testimonials_v_published_locale_idx" ON "_testimonials_v" USING btree ("published_locale");
  CREATE INDEX "_testimonials_v_latest_idx" ON "_testimonials_v" USING btree ("latest");
  CREATE INDEX "_testimonials_v_autosave_idx" ON "_testimonials_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_testimonials_v_locales_locale_parent_id_unique" ON "_testimonials_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "gallery_image_idx" ON "gallery" USING btree ("image_id");
  CREATE INDEX "gallery_event_idx" ON "gallery" USING btree ("event_id");
  CREATE INDEX "gallery_service_idx" ON "gallery" USING btree ("service_id");
  CREATE INDEX "gallery_sort_order_idx" ON "gallery" USING btree ("sort_order");
  CREATE INDEX "gallery_updated_at_idx" ON "gallery" USING btree ("updated_at");
  CREATE INDEX "gallery_created_at_idx" ON "gallery" USING btree ("created_at");
  CREATE INDEX "gallery__status_idx" ON "gallery" USING btree ("_status");
  CREATE UNIQUE INDEX "gallery_locales_locale_parent_id_unique" ON "gallery_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_gallery_v_parent_idx" ON "_gallery_v" USING btree ("parent_id");
  CREATE INDEX "_gallery_v_version_version_image_idx" ON "_gallery_v" USING btree ("version_image_id");
  CREATE INDEX "_gallery_v_version_version_event_idx" ON "_gallery_v" USING btree ("version_event_id");
  CREATE INDEX "_gallery_v_version_version_service_idx" ON "_gallery_v" USING btree ("version_service_id");
  CREATE INDEX "_gallery_v_version_version_sort_order_idx" ON "_gallery_v" USING btree ("version_sort_order");
  CREATE INDEX "_gallery_v_version_version_updated_at_idx" ON "_gallery_v" USING btree ("version_updated_at");
  CREATE INDEX "_gallery_v_version_version_created_at_idx" ON "_gallery_v" USING btree ("version_created_at");
  CREATE INDEX "_gallery_v_version_version__status_idx" ON "_gallery_v" USING btree ("version__status");
  CREATE INDEX "_gallery_v_created_at_idx" ON "_gallery_v" USING btree ("created_at");
  CREATE INDEX "_gallery_v_updated_at_idx" ON "_gallery_v" USING btree ("updated_at");
  CREATE INDEX "_gallery_v_snapshot_idx" ON "_gallery_v" USING btree ("snapshot");
  CREATE INDEX "_gallery_v_published_locale_idx" ON "_gallery_v" USING btree ("published_locale");
  CREATE INDEX "_gallery_v_latest_idx" ON "_gallery_v" USING btree ("latest");
  CREATE INDEX "_gallery_v_autosave_idx" ON "_gallery_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_gallery_v_locales_locale_parent_id_unique" ON "_gallery_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "journal_posts_categories_order_idx" ON "journal_posts_categories" USING btree ("order");
  CREATE INDEX "journal_posts_categories_parent_idx" ON "journal_posts_categories" USING btree ("parent_id");
  CREATE INDEX "journal_posts_featured_image_idx" ON "journal_posts" USING btree ("featured_image_id");
  CREATE INDEX "journal_posts_sort_order_idx" ON "journal_posts" USING btree ("sort_order");
  CREATE INDEX "journal_posts_seo_seo_image_idx" ON "journal_posts" USING btree ("seo_image_id");
  CREATE INDEX "journal_posts_updated_at_idx" ON "journal_posts" USING btree ("updated_at");
  CREATE INDEX "journal_posts_created_at_idx" ON "journal_posts" USING btree ("created_at");
  CREATE INDEX "journal_posts__status_idx" ON "journal_posts" USING btree ("_status");
  CREATE UNIQUE INDEX "journal_posts_slug_idx" ON "journal_posts_locales" USING btree ("slug","_locale");
  CREATE UNIQUE INDEX "journal_posts_locales_locale_parent_id_unique" ON "journal_posts_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_journal_posts_v_version_categories_order_idx" ON "_journal_posts_v_version_categories" USING btree ("order");
  CREATE INDEX "_journal_posts_v_version_categories_parent_idx" ON "_journal_posts_v_version_categories" USING btree ("parent_id");
  CREATE INDEX "_journal_posts_v_parent_idx" ON "_journal_posts_v" USING btree ("parent_id");
  CREATE INDEX "_journal_posts_v_version_version_featured_image_idx" ON "_journal_posts_v" USING btree ("version_featured_image_id");
  CREATE INDEX "_journal_posts_v_version_version_sort_order_idx" ON "_journal_posts_v" USING btree ("version_sort_order");
  CREATE INDEX "_journal_posts_v_version_seo_version_seo_image_idx" ON "_journal_posts_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_journal_posts_v_version_version_updated_at_idx" ON "_journal_posts_v" USING btree ("version_updated_at");
  CREATE INDEX "_journal_posts_v_version_version_created_at_idx" ON "_journal_posts_v" USING btree ("version_created_at");
  CREATE INDEX "_journal_posts_v_version_version__status_idx" ON "_journal_posts_v" USING btree ("version__status");
  CREATE INDEX "_journal_posts_v_created_at_idx" ON "_journal_posts_v" USING btree ("created_at");
  CREATE INDEX "_journal_posts_v_updated_at_idx" ON "_journal_posts_v" USING btree ("updated_at");
  CREATE INDEX "_journal_posts_v_snapshot_idx" ON "_journal_posts_v" USING btree ("snapshot");
  CREATE INDEX "_journal_posts_v_published_locale_idx" ON "_journal_posts_v" USING btree ("published_locale");
  CREATE INDEX "_journal_posts_v_latest_idx" ON "_journal_posts_v" USING btree ("latest");
  CREATE INDEX "_journal_posts_v_autosave_idx" ON "_journal_posts_v" USING btree ("autosave");
  CREATE INDEX "_journal_posts_v_version_version_slug_idx" ON "_journal_posts_v_locales" USING btree ("version_slug","_locale");
  CREATE UNIQUE INDEX "_journal_posts_v_locales_locale_parent_id_unique" ON "_journal_posts_v_locales" USING btree ("_locale","_parent_id");
  CREATE UNIQUE INDEX "redirects_from_path_idx" ON "redirects" USING btree ("from_path");
  CREATE INDEX "redirects_updated_at_idx" ON "redirects" USING btree ("updated_at");
  CREATE INDEX "redirects_created_at_idx" ON "redirects" USING btree ("created_at");
  CREATE INDEX "leads_reception_format_idx" ON "leads" USING btree ("reception_format_id");
  CREATE INDEX "leads_updated_at_idx" ON "leads" USING btree ("updated_at");
  CREATE INDEX "leads_created_at_idx" ON "leads" USING btree ("created_at");
  CREATE INDEX "leads_rels_order_idx" ON "leads_rels" USING btree ("order");
  CREATE INDEX "leads_rels_parent_idx" ON "leads_rels" USING btree ("parent_id");
  CREATE INDEX "leads_rels_path_idx" ON "leads_rels" USING btree ("path");
  CREATE INDEX "leads_rels_services_id_idx" ON "leads_rels" USING btree ("services_id");
  CREATE INDEX "experience_interest_updated_at_idx" ON "experience_interest" USING btree ("updated_at");
  CREATE INDEX "experience_interest_created_at_idx" ON "experience_interest" USING btree ("created_at");
  CREATE UNIQUE INDEX "payload_kv_key_idx" ON "payload_kv" USING btree ("key");
  CREATE INDEX "payload_jobs_log_order_idx" ON "payload_jobs_log" USING btree ("_order");
  CREATE INDEX "payload_jobs_log_parent_id_idx" ON "payload_jobs_log" USING btree ("_parent_id");
  CREATE INDEX "payload_jobs_completed_at_idx" ON "payload_jobs" USING btree ("completed_at");
  CREATE INDEX "payload_jobs_total_tried_idx" ON "payload_jobs" USING btree ("total_tried");
  CREATE INDEX "payload_jobs_has_error_idx" ON "payload_jobs" USING btree ("has_error");
  CREATE INDEX "payload_jobs_task_slug_idx" ON "payload_jobs" USING btree ("task_slug");
  CREATE INDEX "payload_jobs_queue_idx" ON "payload_jobs" USING btree ("queue");
  CREATE INDEX "payload_jobs_wait_until_idx" ON "payload_jobs" USING btree ("wait_until");
  CREATE INDEX "payload_jobs_processing_idx" ON "payload_jobs" USING btree ("processing");
  CREATE INDEX "payload_jobs_updated_at_idx" ON "payload_jobs" USING btree ("updated_at");
  CREATE INDEX "payload_jobs_created_at_idx" ON "payload_jobs" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_global_slug_idx" ON "payload_locked_documents" USING btree ("global_slug");
  CREATE INDEX "payload_locked_documents_updated_at_idx" ON "payload_locked_documents" USING btree ("updated_at");
  CREATE INDEX "payload_locked_documents_created_at_idx" ON "payload_locked_documents" USING btree ("created_at");
  CREATE INDEX "payload_locked_documents_rels_order_idx" ON "payload_locked_documents_rels" USING btree ("order");
  CREATE INDEX "payload_locked_documents_rels_parent_idx" ON "payload_locked_documents_rels" USING btree ("parent_id");
  CREATE INDEX "payload_locked_documents_rels_path_idx" ON "payload_locked_documents_rels" USING btree ("path");
  CREATE INDEX "payload_locked_documents_rels_users_id_idx" ON "payload_locked_documents_rels" USING btree ("users_id");
  CREATE INDEX "payload_locked_documents_rels_media_id_idx" ON "payload_locked_documents_rels" USING btree ("media_id");
  CREATE INDEX "payload_locked_documents_rels_pages_id_idx" ON "payload_locked_documents_rels" USING btree ("pages_id");
  CREATE INDEX "payload_locked_documents_rels_services_id_idx" ON "payload_locked_documents_rels" USING btree ("services_id");
  CREATE INDEX "payload_locked_documents_rels_reception_formats_id_idx" ON "payload_locked_documents_rels" USING btree ("reception_formats_id");
  CREATE INDEX "payload_locked_documents_rels_menu_categories_id_idx" ON "payload_locked_documents_rels" USING btree ("menu_categories_id");
  CREATE INDEX "payload_locked_documents_rels_menu_items_id_idx" ON "payload_locked_documents_rels" USING btree ("menu_items_id");
  CREATE INDEX "payload_locked_documents_rels_signature_menus_id_idx" ON "payload_locked_documents_rels" USING btree ("signature_menus_id");
  CREATE INDEX "payload_locked_documents_rels_fresh_products_id_idx" ON "payload_locked_documents_rels" USING btree ("fresh_products_id");
  CREATE INDEX "payload_locked_documents_rels_events_id_idx" ON "payload_locked_documents_rels" USING btree ("events_id");
  CREATE INDEX "payload_locked_documents_rels_references_id_idx" ON "payload_locked_documents_rels" USING btree ("references_id");
  CREATE INDEX "payload_locked_documents_rels_testimonials_id_idx" ON "payload_locked_documents_rels" USING btree ("testimonials_id");
  CREATE INDEX "payload_locked_documents_rels_gallery_id_idx" ON "payload_locked_documents_rels" USING btree ("gallery_id");
  CREATE INDEX "payload_locked_documents_rels_journal_posts_id_idx" ON "payload_locked_documents_rels" USING btree ("journal_posts_id");
  CREATE INDEX "payload_locked_documents_rels_redirects_id_idx" ON "payload_locked_documents_rels" USING btree ("redirects_id");
  CREATE INDEX "payload_locked_documents_rels_leads_id_idx" ON "payload_locked_documents_rels" USING btree ("leads_id");
  CREATE INDEX "payload_locked_documents_rels_experience_interest_id_idx" ON "payload_locked_documents_rels" USING btree ("experience_interest_id");
  CREATE INDEX "payload_preferences_key_idx" ON "payload_preferences" USING btree ("key");
  CREATE INDEX "payload_preferences_updated_at_idx" ON "payload_preferences" USING btree ("updated_at");
  CREATE INDEX "payload_preferences_created_at_idx" ON "payload_preferences" USING btree ("created_at");
  CREATE INDEX "payload_preferences_rels_order_idx" ON "payload_preferences_rels" USING btree ("order");
  CREATE INDEX "payload_preferences_rels_parent_idx" ON "payload_preferences_rels" USING btree ("parent_id");
  CREATE INDEX "payload_preferences_rels_path_idx" ON "payload_preferences_rels" USING btree ("path");
  CREATE INDEX "payload_preferences_rels_users_id_idx" ON "payload_preferences_rels" USING btree ("users_id");
  CREATE INDEX "payload_migrations_updated_at_idx" ON "payload_migrations" USING btree ("updated_at");
  CREATE INDEX "payload_migrations_created_at_idx" ON "payload_migrations" USING btree ("created_at");
  CREATE INDEX "site_settings__status_idx" ON "site_settings" USING btree ("_status");
  CREATE UNIQUE INDEX "site_settings_locales_locale_parent_id_unique" ON "site_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_site_settings_v_version_version__status_idx" ON "_site_settings_v" USING btree ("version__status");
  CREATE INDEX "_site_settings_v_created_at_idx" ON "_site_settings_v" USING btree ("created_at");
  CREATE INDEX "_site_settings_v_updated_at_idx" ON "_site_settings_v" USING btree ("updated_at");
  CREATE INDEX "_site_settings_v_snapshot_idx" ON "_site_settings_v" USING btree ("snapshot");
  CREATE INDEX "_site_settings_v_published_locale_idx" ON "_site_settings_v" USING btree ("published_locale");
  CREATE INDEX "_site_settings_v_latest_idx" ON "_site_settings_v" USING btree ("latest");
  CREATE INDEX "_site_settings_v_autosave_idx" ON "_site_settings_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_site_settings_v_locales_locale_parent_id_unique" ON "_site_settings_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "header_navigation_order_idx" ON "header_navigation" USING btree ("_order");
  CREATE INDEX "header_navigation_parent_id_idx" ON "header_navigation" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "header_navigation_locales_locale_parent_id_unique" ON "header_navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "header__status_idx" ON "header" USING btree ("_status");
  CREATE UNIQUE INDEX "header_locales_locale_parent_id_unique" ON "header_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_header_v_version_navigation_order_idx" ON "_header_v_version_navigation" USING btree ("_order");
  CREATE INDEX "_header_v_version_navigation_parent_id_idx" ON "_header_v_version_navigation" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_header_v_version_navigation_locales_locale_parent_id_unique" ON "_header_v_version_navigation_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_header_v_version_version__status_idx" ON "_header_v" USING btree ("version__status");
  CREATE INDEX "_header_v_created_at_idx" ON "_header_v" USING btree ("created_at");
  CREATE INDEX "_header_v_updated_at_idx" ON "_header_v" USING btree ("updated_at");
  CREATE INDEX "_header_v_snapshot_idx" ON "_header_v" USING btree ("snapshot");
  CREATE INDEX "_header_v_published_locale_idx" ON "_header_v" USING btree ("published_locale");
  CREATE INDEX "_header_v_latest_idx" ON "_header_v" USING btree ("latest");
  CREATE INDEX "_header_v_autosave_idx" ON "_header_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_header_v_locales_locale_parent_id_unique" ON "_header_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_links_order_idx" ON "footer_links" USING btree ("_order");
  CREATE INDEX "footer_links_parent_id_idx" ON "footer_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_links_locales_locale_parent_id_unique" ON "footer_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer_legal_links_order_idx" ON "footer_legal_links" USING btree ("_order");
  CREATE INDEX "footer_legal_links_parent_id_idx" ON "footer_legal_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "footer_legal_links_locales_locale_parent_id_unique" ON "footer_legal_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "footer__status_idx" ON "footer" USING btree ("_status");
  CREATE UNIQUE INDEX "footer_locales_locale_parent_id_unique" ON "footer_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_links_order_idx" ON "_footer_v_version_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_links_parent_id_idx" ON "_footer_v_version_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_footer_v_version_links_locales_locale_parent_id_unique" ON "_footer_v_version_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_legal_links_order_idx" ON "_footer_v_version_legal_links" USING btree ("_order");
  CREATE INDEX "_footer_v_version_legal_links_parent_id_idx" ON "_footer_v_version_legal_links" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_footer_v_version_legal_links_locales_locale_parent_id_uniqu" ON "_footer_v_version_legal_links_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_footer_v_version_version__status_idx" ON "_footer_v" USING btree ("version__status");
  CREATE INDEX "_footer_v_created_at_idx" ON "_footer_v" USING btree ("created_at");
  CREATE INDEX "_footer_v_updated_at_idx" ON "_footer_v" USING btree ("updated_at");
  CREATE INDEX "_footer_v_snapshot_idx" ON "_footer_v" USING btree ("snapshot");
  CREATE INDEX "_footer_v_published_locale_idx" ON "_footer_v" USING btree ("published_locale");
  CREATE INDEX "_footer_v_latest_idx" ON "_footer_v" USING btree ("latest");
  CREATE INDEX "_footer_v_autosave_idx" ON "_footer_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_footer_v_locales_locale_parent_id_unique" ON "_footer_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_seo_seo_image_idx" ON "home" USING btree ("seo_image_id");
  CREATE INDEX "home__status_idx" ON "home" USING btree ("_status");
  CREATE UNIQUE INDEX "home_locales_locale_parent_id_unique" ON "home_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "home_rels_order_idx" ON "home_rels" USING btree ("order");
  CREATE INDEX "home_rels_parent_idx" ON "home_rels" USING btree ("parent_id");
  CREATE INDEX "home_rels_path_idx" ON "home_rels" USING btree ("path");
  CREATE INDEX "home_rels_services_id_idx" ON "home_rels" USING btree ("services_id");
  CREATE INDEX "home_rels_menu_items_id_idx" ON "home_rels" USING btree ("menu_items_id");
  CREATE INDEX "home_rels_fresh_products_id_idx" ON "home_rels" USING btree ("fresh_products_id");
  CREATE INDEX "_home_v_version_seo_version_seo_image_idx" ON "_home_v" USING btree ("version_seo_image_id");
  CREATE INDEX "_home_v_version_version__status_idx" ON "_home_v" USING btree ("version__status");
  CREATE INDEX "_home_v_created_at_idx" ON "_home_v" USING btree ("created_at");
  CREATE INDEX "_home_v_updated_at_idx" ON "_home_v" USING btree ("updated_at");
  CREATE INDEX "_home_v_snapshot_idx" ON "_home_v" USING btree ("snapshot");
  CREATE INDEX "_home_v_published_locale_idx" ON "_home_v" USING btree ("published_locale");
  CREATE INDEX "_home_v_latest_idx" ON "_home_v" USING btree ("latest");
  CREATE INDEX "_home_v_autosave_idx" ON "_home_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_home_v_locales_locale_parent_id_unique" ON "_home_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_home_v_rels_order_idx" ON "_home_v_rels" USING btree ("order");
  CREATE INDEX "_home_v_rels_parent_idx" ON "_home_v_rels" USING btree ("parent_id");
  CREATE INDEX "_home_v_rels_path_idx" ON "_home_v_rels" USING btree ("path");
  CREATE INDEX "_home_v_rels_services_id_idx" ON "_home_v_rels" USING btree ("services_id");
  CREATE INDEX "_home_v_rels_menu_items_id_idx" ON "_home_v_rels" USING btree ("menu_items_id");
  CREATE INDEX "_home_v_rels_fresh_products_id_idx" ON "_home_v_rels" USING btree ("fresh_products_id");
  CREATE INDEX "contact_settings_hours_order_idx" ON "contact_settings_hours" USING btree ("_order");
  CREATE INDEX "contact_settings_hours_parent_id_idx" ON "contact_settings_hours" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "contact_settings_hours_locales_locale_parent_id_unique" ON "contact_settings_hours_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "contact_settings_social_links_order_idx" ON "contact_settings_social_links" USING btree ("_order");
  CREATE INDEX "contact_settings_social_links_parent_id_idx" ON "contact_settings_social_links" USING btree ("_parent_id");
  CREATE INDEX "contact_settings__status_idx" ON "contact_settings" USING btree ("_status");
  CREATE UNIQUE INDEX "contact_settings_locales_locale_parent_id_unique" ON "contact_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_contact_settings_v_version_hours_order_idx" ON "_contact_settings_v_version_hours" USING btree ("_order");
  CREATE INDEX "_contact_settings_v_version_hours_parent_id_idx" ON "_contact_settings_v_version_hours" USING btree ("_parent_id");
  CREATE UNIQUE INDEX "_contact_settings_v_version_hours_locales_locale_parent_id_u" ON "_contact_settings_v_version_hours_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_contact_settings_v_version_social_links_order_idx" ON "_contact_settings_v_version_social_links" USING btree ("_order");
  CREATE INDEX "_contact_settings_v_version_social_links_parent_id_idx" ON "_contact_settings_v_version_social_links" USING btree ("_parent_id");
  CREATE INDEX "_contact_settings_v_version_version__status_idx" ON "_contact_settings_v" USING btree ("version__status");
  CREATE INDEX "_contact_settings_v_created_at_idx" ON "_contact_settings_v" USING btree ("created_at");
  CREATE INDEX "_contact_settings_v_updated_at_idx" ON "_contact_settings_v" USING btree ("updated_at");
  CREATE INDEX "_contact_settings_v_snapshot_idx" ON "_contact_settings_v" USING btree ("snapshot");
  CREATE INDEX "_contact_settings_v_published_locale_idx" ON "_contact_settings_v" USING btree ("published_locale");
  CREATE INDEX "_contact_settings_v_latest_idx" ON "_contact_settings_v" USING btree ("latest");
  CREATE INDEX "_contact_settings_v_autosave_idx" ON "_contact_settings_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_contact_settings_v_locales_locale_parent_id_unique" ON "_contact_settings_v_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "seo_settings_default_social_image_idx" ON "seo_settings" USING btree ("default_social_image_id");
  CREATE INDEX "seo_settings_organization_organization_logo_idx" ON "seo_settings" USING btree ("organization_logo_id");
  CREATE INDEX "seo_settings__status_idx" ON "seo_settings" USING btree ("_status");
  CREATE UNIQUE INDEX "seo_settings_locales_locale_parent_id_unique" ON "seo_settings_locales" USING btree ("_locale","_parent_id");
  CREATE INDEX "_seo_settings_v_version_version_default_social_image_idx" ON "_seo_settings_v" USING btree ("version_default_social_image_id");
  CREATE INDEX "_seo_settings_v_version_organization_version_organizatio_idx" ON "_seo_settings_v" USING btree ("version_organization_logo_id");
  CREATE INDEX "_seo_settings_v_version_version__status_idx" ON "_seo_settings_v" USING btree ("version__status");
  CREATE INDEX "_seo_settings_v_created_at_idx" ON "_seo_settings_v" USING btree ("created_at");
  CREATE INDEX "_seo_settings_v_updated_at_idx" ON "_seo_settings_v" USING btree ("updated_at");
  CREATE INDEX "_seo_settings_v_snapshot_idx" ON "_seo_settings_v" USING btree ("snapshot");
  CREATE INDEX "_seo_settings_v_published_locale_idx" ON "_seo_settings_v" USING btree ("published_locale");
  CREATE INDEX "_seo_settings_v_latest_idx" ON "_seo_settings_v" USING btree ("latest");
  CREATE INDEX "_seo_settings_v_autosave_idx" ON "_seo_settings_v" USING btree ("autosave");
  CREATE UNIQUE INDEX "_seo_settings_v_locales_locale_parent_id_unique" ON "_seo_settings_v_locales" USING btree ("_locale","_parent_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP TABLE "users_sessions" CASCADE;
  DROP TABLE "users" CASCADE;
  DROP TABLE "media" CASCADE;
  DROP TABLE "media_locales" CASCADE;
  DROP TABLE "hero" CASCADE;
  DROP TABLE "hero_locales" CASCADE;
  DROP TABLE "editorial_ti" CASCADE;
  DROP TABLE "editorial_ti_locales" CASCADE;
  DROP TABLE "full_bleed" CASCADE;
  DROP TABLE "full_bleed_locales" CASCADE;
  DROP TABLE "manifesto_statements" CASCADE;
  DROP TABLE "manifesto_statements_locales" CASCADE;
  DROP TABLE "manifesto" CASCADE;
  DROP TABLE "manifesto_locales" CASCADE;
  DROP TABLE "quote" CASCADE;
  DROP TABLE "quote_locales" CASCADE;
  DROP TABLE "service_showcase" CASCADE;
  DROP TABLE "service_showcase_locales" CASCADE;
  DROP TABLE "menu_showcase" CASCADE;
  DROP TABLE "menu_showcase_locales" CASCADE;
  DROP TABLE "signature_dishes" CASCADE;
  DROP TABLE "signature_dishes_locales" CASCADE;
  DROP TABLE "fresh_products_block" CASCADE;
  DROP TABLE "fresh_products_block_locales" CASCADE;
  DROP TABLE "gallery_preview" CASCADE;
  DROP TABLE "gallery_preview_locales" CASCADE;
  DROP TABLE "references_block" CASCADE;
  DROP TABLE "references_block_locales" CASCADE;
  DROP TABLE "process_steps" CASCADE;
  DROP TABLE "process_steps_locales" CASCADE;
  DROP TABLE "process" CASCADE;
  DROP TABLE "process_locales" CASCADE;
  DROP TABLE "experience_teaser" CASCADE;
  DROP TABLE "experience_teaser_locales" CASCADE;
  DROP TABLE "cta" CASCADE;
  DROP TABLE "cta_locales" CASCADE;
  DROP TABLE "editorial_split" CASCADE;
  DROP TABLE "editorial_split_locales" CASCADE;
  DROP TABLE "story_chapter" CASCADE;
  DROP TABLE "story_chapter_locales" CASCADE;
  DROP TABLE "pages" CASCADE;
  DROP TABLE "pages_locales" CASCADE;
  DROP TABLE "pages_rels" CASCADE;
  DROP TABLE "_hero_v" CASCADE;
  DROP TABLE "_hero_v_locales" CASCADE;
  DROP TABLE "_editorial_ti_v" CASCADE;
  DROP TABLE "_editorial_ti_v_locales" CASCADE;
  DROP TABLE "_full_bleed_v" CASCADE;
  DROP TABLE "_full_bleed_v_locales" CASCADE;
  DROP TABLE "_manifesto_v_statements" CASCADE;
  DROP TABLE "_manifesto_v_statements_locales" CASCADE;
  DROP TABLE "_manifesto_v" CASCADE;
  DROP TABLE "_manifesto_v_locales" CASCADE;
  DROP TABLE "_quote_v" CASCADE;
  DROP TABLE "_quote_v_locales" CASCADE;
  DROP TABLE "_service_showcase_v" CASCADE;
  DROP TABLE "_service_showcase_v_locales" CASCADE;
  DROP TABLE "_menu_showcase_v" CASCADE;
  DROP TABLE "_menu_showcase_v_locales" CASCADE;
  DROP TABLE "_signature_dishes_v" CASCADE;
  DROP TABLE "_signature_dishes_v_locales" CASCADE;
  DROP TABLE "_fresh_products_block_v" CASCADE;
  DROP TABLE "_fresh_products_block_v_locales" CASCADE;
  DROP TABLE "_gallery_preview_v" CASCADE;
  DROP TABLE "_gallery_preview_v_locales" CASCADE;
  DROP TABLE "_references_block_v" CASCADE;
  DROP TABLE "_references_block_v_locales" CASCADE;
  DROP TABLE "_process_v_steps" CASCADE;
  DROP TABLE "_process_v_steps_locales" CASCADE;
  DROP TABLE "_process_v" CASCADE;
  DROP TABLE "_process_v_locales" CASCADE;
  DROP TABLE "_experience_teaser_v" CASCADE;
  DROP TABLE "_experience_teaser_v_locales" CASCADE;
  DROP TABLE "_cta_v" CASCADE;
  DROP TABLE "_cta_v_locales" CASCADE;
  DROP TABLE "_editorial_split_v" CASCADE;
  DROP TABLE "_editorial_split_v_locales" CASCADE;
  DROP TABLE "_story_chapter_v" CASCADE;
  DROP TABLE "_story_chapter_v_locales" CASCADE;
  DROP TABLE "_pages_v" CASCADE;
  DROP TABLE "_pages_v_locales" CASCADE;
  DROP TABLE "_pages_v_rels" CASCADE;
  DROP TABLE "services" CASCADE;
  DROP TABLE "services_locales" CASCADE;
  DROP TABLE "services_rels" CASCADE;
  DROP TABLE "_services_v" CASCADE;
  DROP TABLE "_services_v_locales" CASCADE;
  DROP TABLE "_services_v_rels" CASCADE;
  DROP TABLE "reception_formats_recommended_event_types" CASCADE;
  DROP TABLE "reception_formats_recommended_event_types_locales" CASCADE;
  DROP TABLE "reception_formats" CASCADE;
  DROP TABLE "reception_formats_locales" CASCADE;
  DROP TABLE "reception_formats_rels" CASCADE;
  DROP TABLE "_reception_formats_v_version_recommended_event_types" CASCADE;
  DROP TABLE "_reception_formats_v_version_recommended_event_types_locales" CASCADE;
  DROP TABLE "_reception_formats_v" CASCADE;
  DROP TABLE "_reception_formats_v_locales" CASCADE;
  DROP TABLE "_reception_formats_v_rels" CASCADE;
  DROP TABLE "menu_categories" CASCADE;
  DROP TABLE "menu_categories_locales" CASCADE;
  DROP TABLE "_menu_categories_v" CASCADE;
  DROP TABLE "_menu_categories_v_locales" CASCADE;
  DROP TABLE "menu_items_composition" CASCADE;
  DROP TABLE "menu_items_composition_locales" CASCADE;
  DROP TABLE "menu_items_dietary_verified_labels" CASCADE;
  DROP TABLE "menu_items_dietary_allergens" CASCADE;
  DROP TABLE "menu_items" CASCADE;
  DROP TABLE "menu_items_locales" CASCADE;
  DROP TABLE "menu_items_rels" CASCADE;
  DROP TABLE "_menu_items_v_version_composition" CASCADE;
  DROP TABLE "_menu_items_v_version_composition_locales" CASCADE;
  DROP TABLE "_menu_items_v_version_dietary_verified_labels" CASCADE;
  DROP TABLE "_menu_items_v_version_dietary_allergens" CASCADE;
  DROP TABLE "_menu_items_v" CASCADE;
  DROP TABLE "_menu_items_v_locales" CASCADE;
  DROP TABLE "_menu_items_v_rels" CASCADE;
  DROP TABLE "signature_menus_courses" CASCADE;
  DROP TABLE "signature_menus_courses_locales" CASCADE;
  DROP TABLE "signature_menus" CASCADE;
  DROP TABLE "signature_menus_locales" CASCADE;
  DROP TABLE "signature_menus_rels" CASCADE;
  DROP TABLE "_signature_menus_v_version_courses" CASCADE;
  DROP TABLE "_signature_menus_v_version_courses_locales" CASCADE;
  DROP TABLE "_signature_menus_v" CASCADE;
  DROP TABLE "_signature_menus_v_locales" CASCADE;
  DROP TABLE "_signature_menus_v_rels" CASCADE;
  DROP TABLE "fresh_products_ingredients" CASCADE;
  DROP TABLE "fresh_products_ingredients_locales" CASCADE;
  DROP TABLE "fresh_products_available_sizes" CASCADE;
  DROP TABLE "fresh_products" CASCADE;
  DROP TABLE "fresh_products_locales" CASCADE;
  DROP TABLE "fresh_products_rels" CASCADE;
  DROP TABLE "_fresh_products_v_version_ingredients" CASCADE;
  DROP TABLE "_fresh_products_v_version_ingredients_locales" CASCADE;
  DROP TABLE "_fresh_products_v_version_available_sizes" CASCADE;
  DROP TABLE "_fresh_products_v" CASCADE;
  DROP TABLE "_fresh_products_v_locales" CASCADE;
  DROP TABLE "_fresh_products_v_rels" CASCADE;
  DROP TABLE "events" CASCADE;
  DROP TABLE "events_locales" CASCADE;
  DROP TABLE "events_rels" CASCADE;
  DROP TABLE "_events_v" CASCADE;
  DROP TABLE "_events_v_locales" CASCADE;
  DROP TABLE "_events_v_rels" CASCADE;
  DROP TABLE "references" CASCADE;
  DROP TABLE "references_locales" CASCADE;
  DROP TABLE "references_rels" CASCADE;
  DROP TABLE "_references_v" CASCADE;
  DROP TABLE "_references_v_locales" CASCADE;
  DROP TABLE "_references_v_rels" CASCADE;
  DROP TABLE "testimonials" CASCADE;
  DROP TABLE "testimonials_locales" CASCADE;
  DROP TABLE "_testimonials_v" CASCADE;
  DROP TABLE "_testimonials_v_locales" CASCADE;
  DROP TABLE "gallery" CASCADE;
  DROP TABLE "gallery_locales" CASCADE;
  DROP TABLE "_gallery_v" CASCADE;
  DROP TABLE "_gallery_v_locales" CASCADE;
  DROP TABLE "journal_posts_categories" CASCADE;
  DROP TABLE "journal_posts" CASCADE;
  DROP TABLE "journal_posts_locales" CASCADE;
  DROP TABLE "_journal_posts_v_version_categories" CASCADE;
  DROP TABLE "_journal_posts_v" CASCADE;
  DROP TABLE "_journal_posts_v_locales" CASCADE;
  DROP TABLE "redirects" CASCADE;
  DROP TABLE "leads" CASCADE;
  DROP TABLE "leads_rels" CASCADE;
  DROP TABLE "experience_interest" CASCADE;
  DROP TABLE "payload_kv" CASCADE;
  DROP TABLE "payload_jobs_log" CASCADE;
  DROP TABLE "payload_jobs" CASCADE;
  DROP TABLE "payload_locked_documents" CASCADE;
  DROP TABLE "payload_locked_documents_rels" CASCADE;
  DROP TABLE "payload_preferences" CASCADE;
  DROP TABLE "payload_preferences_rels" CASCADE;
  DROP TABLE "payload_migrations" CASCADE;
  DROP TABLE "site_settings" CASCADE;
  DROP TABLE "site_settings_locales" CASCADE;
  DROP TABLE "_site_settings_v" CASCADE;
  DROP TABLE "_site_settings_v_locales" CASCADE;
  DROP TABLE "header_navigation" CASCADE;
  DROP TABLE "header_navigation_locales" CASCADE;
  DROP TABLE "header" CASCADE;
  DROP TABLE "header_locales" CASCADE;
  DROP TABLE "_header_v_version_navigation" CASCADE;
  DROP TABLE "_header_v_version_navigation_locales" CASCADE;
  DROP TABLE "_header_v" CASCADE;
  DROP TABLE "_header_v_locales" CASCADE;
  DROP TABLE "footer_links" CASCADE;
  DROP TABLE "footer_links_locales" CASCADE;
  DROP TABLE "footer_legal_links" CASCADE;
  DROP TABLE "footer_legal_links_locales" CASCADE;
  DROP TABLE "footer" CASCADE;
  DROP TABLE "footer_locales" CASCADE;
  DROP TABLE "_footer_v_version_links" CASCADE;
  DROP TABLE "_footer_v_version_links_locales" CASCADE;
  DROP TABLE "_footer_v_version_legal_links" CASCADE;
  DROP TABLE "_footer_v_version_legal_links_locales" CASCADE;
  DROP TABLE "_footer_v" CASCADE;
  DROP TABLE "_footer_v_locales" CASCADE;
  DROP TABLE "home" CASCADE;
  DROP TABLE "home_locales" CASCADE;
  DROP TABLE "home_rels" CASCADE;
  DROP TABLE "_home_v" CASCADE;
  DROP TABLE "_home_v_locales" CASCADE;
  DROP TABLE "_home_v_rels" CASCADE;
  DROP TABLE "contact_settings_hours" CASCADE;
  DROP TABLE "contact_settings_hours_locales" CASCADE;
  DROP TABLE "contact_settings_social_links" CASCADE;
  DROP TABLE "contact_settings" CASCADE;
  DROP TABLE "contact_settings_locales" CASCADE;
  DROP TABLE "_contact_settings_v_version_hours" CASCADE;
  DROP TABLE "_contact_settings_v_version_hours_locales" CASCADE;
  DROP TABLE "_contact_settings_v_version_social_links" CASCADE;
  DROP TABLE "_contact_settings_v" CASCADE;
  DROP TABLE "_contact_settings_v_locales" CASCADE;
  DROP TABLE "seo_settings" CASCADE;
  DROP TABLE "seo_settings_locales" CASCADE;
  DROP TABLE "_seo_settings_v" CASCADE;
  DROP TABLE "_seo_settings_v_locales" CASCADE;
  DROP TYPE "public"."_locales";
  DROP TYPE "public"."enum_users_role";
  DROP TYPE "public"."enum_media_category";
  DROP TYPE "public"."block_heading_level";
  DROP TYPE "public"."enum_hero_alignment";
  DROP TYPE "public"."enum_hero_action_route";
  DROP TYPE "public"."enum_editorial_ti_image_side";
  DROP TYPE "public"."block_tone";
  DROP TYPE "public"."enum_editorial_ti_action_route";
  DROP TYPE "public"."enum_full_bleed_height";
  DROP TYPE "public"."enum_service_showcase_layout";
  DROP TYPE "public"."enum_service_showcase_action_route";
  DROP TYPE "public"."enum_menu_showcase_layout";
  DROP TYPE "public"."enum_menu_showcase_action_route";
  DROP TYPE "public"."enum_signature_dishes_layout";
  DROP TYPE "public"."enum_signature_dishes_action_route";
  DROP TYPE "public"."enum_fresh_products_block_layout";
  DROP TYPE "public"."enum_fresh_products_block_action_route";
  DROP TYPE "public"."enum_gallery_preview_layout";
  DROP TYPE "public"."enum_references_block_presentation";
  DROP TYPE "public"."enum_experience_teaser_action_route";
  DROP TYPE "public"."enum_cta_action_route";
  DROP TYPE "public"."enum_story_chapter_chapter_key";
  DROP TYPE "public"."enum_story_chapter_layout";
  DROP TYPE "public"."enum_pages_page_kind";
  DROP TYPE "public"."enum_pages_status";
  DROP TYPE "public"."enum__hero_v_alignment";
  DROP TYPE "public"."enum__hero_v_action_route";
  DROP TYPE "public"."enum__editorial_ti_v_image_side";
  DROP TYPE "public"."enum__editorial_ti_v_action_route";
  DROP TYPE "public"."enum__full_bleed_v_height";
  DROP TYPE "public"."enum__service_showcase_v_layout";
  DROP TYPE "public"."enum__service_showcase_v_action_route";
  DROP TYPE "public"."enum__menu_showcase_v_layout";
  DROP TYPE "public"."enum__menu_showcase_v_action_route";
  DROP TYPE "public"."enum__signature_dishes_v_layout";
  DROP TYPE "public"."enum__signature_dishes_v_action_route";
  DROP TYPE "public"."enum__fresh_products_block_v_layout";
  DROP TYPE "public"."enum__fresh_products_block_v_action_route";
  DROP TYPE "public"."enum__gallery_preview_v_layout";
  DROP TYPE "public"."enum__references_block_v_presentation";
  DROP TYPE "public"."enum__experience_teaser_v_action_route";
  DROP TYPE "public"."enum__cta_v_action_route";
  DROP TYPE "public"."enum__story_chapter_v_chapter_key";
  DROP TYPE "public"."enum__story_chapter_v_layout";
  DROP TYPE "public"."enum__pages_v_version_page_kind";
  DROP TYPE "public"."enum__pages_v_version_status";
  DROP TYPE "public"."enum__pages_v_published_locale";
  DROP TYPE "public"."enum_services_category";
  DROP TYPE "public"."enum_services_cta_route";
  DROP TYPE "public"."enum_services_status";
  DROP TYPE "public"."enum__services_v_version_category";
  DROP TYPE "public"."enum__services_v_version_cta_route";
  DROP TYPE "public"."enum__services_v_version_status";
  DROP TYPE "public"."enum__services_v_published_locale";
  DROP TYPE "public"."enum_reception_formats_cta_route";
  DROP TYPE "public"."enum_reception_formats_status";
  DROP TYPE "public"."enum__reception_formats_v_version_cta_route";
  DROP TYPE "public"."enum__reception_formats_v_version_status";
  DROP TYPE "public"."enum__reception_formats_v_published_locale";
  DROP TYPE "public"."enum_menu_categories_family";
  DROP TYPE "public"."enum_menu_categories_status";
  DROP TYPE "public"."enum__menu_categories_v_version_family";
  DROP TYPE "public"."enum__menu_categories_v_version_status";
  DROP TYPE "public"."enum__menu_categories_v_published_locale";
  DROP TYPE "public"."enum_menu_items_dietary_verified_labels";
  DROP TYPE "public"."enum_menu_items_dietary_allergens";
  DROP TYPE "public"."enum_menu_items_culinary_level";
  DROP TYPE "public"."enum_menu_items_spice_level";
  DROP TYPE "public"."enum_menu_items_status";
  DROP TYPE "public"."enum__menu_items_v_version_dietary_verified_labels";
  DROP TYPE "public"."enum__menu_items_v_version_dietary_allergens";
  DROP TYPE "public"."enum__menu_items_v_version_culinary_level";
  DROP TYPE "public"."enum__menu_items_v_version_spice_level";
  DROP TYPE "public"."enum__menu_items_v_version_status";
  DROP TYPE "public"."enum__menu_items_v_published_locale";
  DROP TYPE "public"."enum_signature_menus_courses_section";
  DROP TYPE "public"."enum_signature_menus_availability";
  DROP TYPE "public"."enum_signature_menus_status";
  DROP TYPE "public"."enum__signature_menus_v_version_courses_section";
  DROP TYPE "public"."enum__signature_menus_v_version_availability";
  DROP TYPE "public"."enum__signature_menus_v_version_status";
  DROP TYPE "public"."enum__signature_menus_v_published_locale";
  DROP TYPE "public"."enum_fresh_products_accent_color";
  DROP TYPE "public"."enum_fresh_products_availability";
  DROP TYPE "public"."enum_fresh_products_status";
  DROP TYPE "public"."enum__fresh_products_v_version_accent_color";
  DROP TYPE "public"."enum__fresh_products_v_version_availability";
  DROP TYPE "public"."enum__fresh_products_v_version_status";
  DROP TYPE "public"."enum__fresh_products_v_published_locale";
  DROP TYPE "public"."enum_events_event_status";
  DROP TYPE "public"."enum_events_status";
  DROP TYPE "public"."enum_events_schedule_currency";
  DROP TYPE "public"."enum_events_registration_mode";
  DROP TYPE "public"."enum__events_v_version_event_status";
  DROP TYPE "public"."enum__events_v_version_status";
  DROP TYPE "public"."enum__events_v_version_schedule_currency";
  DROP TYPE "public"."enum__events_v_version_registration_mode";
  DROP TYPE "public"."enum__events_v_published_locale";
  DROP TYPE "public"."enum_references_status";
  DROP TYPE "public"."enum__references_v_version_status";
  DROP TYPE "public"."enum__references_v_published_locale";
  DROP TYPE "public"."enum_testimonials_status";
  DROP TYPE "public"."enum__testimonials_v_version_status";
  DROP TYPE "public"."enum__testimonials_v_published_locale";
  DROP TYPE "public"."enum_gallery_category";
  DROP TYPE "public"."enum_gallery_status";
  DROP TYPE "public"."enum__gallery_v_version_category";
  DROP TYPE "public"."enum__gallery_v_version_status";
  DROP TYPE "public"."enum__gallery_v_published_locale";
  DROP TYPE "public"."enum_journal_posts_categories";
  DROP TYPE "public"."enum_journal_posts_status";
  DROP TYPE "public"."enum__journal_posts_v_version_categories";
  DROP TYPE "public"."enum__journal_posts_v_version_status";
  DROP TYPE "public"."enum__journal_posts_v_published_locale";
  DROP TYPE "public"."enum_redirects_locale";
  DROP TYPE "public"."enum_leads_status";
  DROP TYPE "public"."enum_leads_locale";
  DROP TYPE "public"."enum_leads_delivery_status";
  DROP TYPE "public"."enum_experience_interest_locale";
  DROP TYPE "public"."enum_experience_interest_delivery_status";
  DROP TYPE "public"."enum_payload_jobs_log_task_slug";
  DROP TYPE "public"."enum_payload_jobs_log_state";
  DROP TYPE "public"."enum_payload_jobs_task_slug";
  DROP TYPE "public"."enum_site_settings_status";
  DROP TYPE "public"."enum__site_settings_v_version_status";
  DROP TYPE "public"."enum__site_settings_v_published_locale";
  DROP TYPE "public"."enum_header_navigation_route";
  DROP TYPE "public"."enum_header_primary_action_route";
  DROP TYPE "public"."enum_header_status";
  DROP TYPE "public"."enum__header_v_version_navigation_route";
  DROP TYPE "public"."enum__header_v_version_primary_action_route";
  DROP TYPE "public"."enum__header_v_version_status";
  DROP TYPE "public"."enum__header_v_published_locale";
  DROP TYPE "public"."enum_footer_links_route";
  DROP TYPE "public"."enum_footer_status";
  DROP TYPE "public"."enum__footer_v_version_links_route";
  DROP TYPE "public"."enum__footer_v_version_status";
  DROP TYPE "public"."enum__footer_v_published_locale";
  DROP TYPE "public"."enum_home_status";
  DROP TYPE "public"."enum__home_v_version_status";
  DROP TYPE "public"."enum__home_v_published_locale";
  DROP TYPE "public"."enum_contact_settings_social_links_platform";
  DROP TYPE "public"."enum_contact_settings_status";
  DROP TYPE "public"."enum__contact_settings_v_version_social_links_platform";
  DROP TYPE "public"."enum__contact_settings_v_version_status";
  DROP TYPE "public"."enum__contact_settings_v_published_locale";
  DROP TYPE "public"."enum_seo_settings_status";
  DROP TYPE "public"."enum__seo_settings_v_version_status";
  DROP TYPE "public"."enum__seo_settings_v_published_locale";`)
}
