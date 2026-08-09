# MESTE — MAMA EMMA SERVICE TRAITEUR D'EXCELLENCE
## Master Website Design & Development Brief
## Production stack: Next.js + Payload CMS + Neon + Cloudflare R2 + Netlify

You are acting as:

- Senior Creative Director
- Senior Brand Designer
- UX/UI Designer
- Senior Next.js Engineer
- Payload CMS Architect
- PostgreSQL / Neon Engineer
- SEO Engineer
- Performance Engineer
- Accessibility Engineer
- Security Engineer

Your mission is to design and build the production-ready website for:

MAMA EMMA SERVICE TRAITEUR D'EXCELLENCE

Short name:
MESTE

Location:
Accra, Ghana

This must NOT look like a generic restaurant or catering template.

MESTE is a premium African catering and hospitality house combining:

- African culinary heritage
- contemporary presentation
- refined hospitality
- private and corporate event catering
- institutional and diplomatic catering
- bespoke culinary experiences
- Mama Emma Fresh beverages
- a future curated dining concept called "The Mama Emma Experience"

The website must feel like a premium culinary house and hospitality brand.

The user must retain full ownership of:
- source code
- Git repository
- database
- media
- deployment
- CMS
- configuration

Do not introduce proprietary website builders.

---

# 1. PRIMARY GOAL

The website must make visitors feel:

"This is not just a caterer.
This is an experience I want for my event."

The journey should produce:

DESIRE
→ CURIOSITY
→ TRUST
→ DISCOVERY
→ CONVERSION

Primary conversion:

PLAN YOUR EVENT / REQUEST A QUOTE

Secondary conversions:

- WhatsApp contact
- explore menus
- discover Mama Emma Fresh
- join The Mama Emma Experience interest list
- view references and gallery

---

# 2. CREATIVE REFERENCES

Use these designs only as conceptual references.

DO NOT COPY THEM.

Study the principles behind them.

### Lumière — European Fine Dining Website

Reference:
https://dribbble.com/shots/27552198-Lumi-re-European-Fine-Dining-Website

Take inspiration from:

- editorial restraint
- sophisticated serif typography
- confident spacing
- premium food photography
- elegant text composition
- storytelling
- African premium hospitality positioning

### Côte & Cendre — Fine Dining

Reference:
https://dribbble.com/shots/26882293-C-te-Cendre-Fine-Dining-Landing-Page

Take inspiration from:

- cinematic atmosphere
- quiet luxury
- warm photography
- strong storytelling
- deliberate visual pacing

### La.Revi — Luxury Restaurant

Reference:
https://dribbble.com/shots/27597655-La-Revi-Luxury-Restaurant-Fine-Dining-Website

Take inspiration from:

- forest green
- warm gold
- luxury editorial typography
- immersive menu presentation
- elegant event sections

### Orbital Catering

Reference:
https://dribbble.com/shots/27427583-Orbital-Catering-Framer-Website-for-Office-Catering-Orders

Take inspiration from:

- catering-oriented UX
- clear conversion paths
- service discovery
- quote requests
- structured CMS content

---

# 3. DESIGN POSITIONING

The visual territory is:

AFRICAN HERITAGE
×
CONTEMPORARY SOPHISTICATION
×
WARM HOSPITALITY
×
QUIET LUXURY

The website must feel:

- refined
- warm
- confident
- cultural
- contemporary
- editorial
- premium
- human

Avoid:

- generic restaurant templates
- SaaS-like cards
- excessive rounded rectangles
- giant gradient blobs
- excessive glassmorphism
- cheap metallic gold effects
- cliché African iconography
- loud Kente backgrounds
- endless card grids
- excessive animation
- visual overload
- tiny food images
- excessive empty white space without editorial intention
- artificial luxury clichés

Whitespace is allowed only when intentional.

Every screen should either:

- inform
- inspire
- create emotion
- reveal craftsmanship
- support conversion

Never leave large empty areas simply because content is missing.

---

# 4. BRAND IDENTITY

Brand:

MAMA EMMA
SERVICE TRAITEUR D'EXCELLENCE

Short brand:

MESTE

Institutional signature:

Taste · Elegance · Hospitality

Brand philosophy:

"Familiar enough to comfort.
Different enough to remember."

Culinary positioning:

"African soul.
Contemporary expression."

---

# 5. BRAND COLORS

Create CSS custom properties.

Use approximately:

--meste-burgundy: #5A0D18;
--meste-forest: #173D27;
--meste-gold: #C99A3A;
--meste-ivory: #F6F0E5;
--meste-charcoal: #252525;
--meste-black: #111111;

Also create lighter/darker semantic variants where necessary.

Do not randomly introduce other brand colors.

Fruit/product pages may use restrained accents derived from the beverage colors.

---

# 6. TYPOGRAPHY

Primary display typography:

Cormorant Garamond

Primary body / interface typography:

Manrope

Use `next/font`.

Do not load fonts using an external Google Fonts stylesheet.

Typography should feel editorial.

Use:

- large serif headlines
- compact uppercase eyebrow labels
- generous but controlled line-height
- narrow readable text widths
- bold typographic hierarchy

Do not make the body text too small.

---

# 7. OFFICIAL LOGO

Inspect:

/brand-assets
/public/brand

before coding.

Use the EXACT official Mama Emma logo assets provided.

Do not redraw.
Do not reinterpret.
Do not approximate the woman's profile.

The Mama Emma portrait may also be used independently as the brand emblem.

Create reusable components:

LogoFull
LogoMark

Logo must be available in:

- gold
- burgundy
- dark
- light / ivory

only when valid official assets exist.

Do not fabricate missing versions.

---

# 8. KENTE DESIGN LANGUAGE

Use Ghanaian Kente-inspired graphic patterns as a subtle signature.

Allowed:

- 4–8% opacity backgrounds
- tiny bands
- small separators
- micro borders
- image masks
- detail in section transitions
- tiny ornamental marks

Avoid:

- full-screen Kente
- large saturated stripes
- tourist-style patterns
- repeating Kente everywhere

The cultural reference should be noticed on the second look.

---

# 9. BRAND STORY

Use the following story as source content.

Emma was born as the second child of a large family in Congo.

From an early age, her mother involved her in the management of family life,
especially in cooking.

She learned that cooking was not only about preparing food.

It was about:

- welcoming
- organising
- sharing
- gathering
- taking care of others

After completing her studies, Emma obtained her first professional experience
as a hostess in the VIP service of Maya-Maya International Airport.

Years later, living in Senegal, married and mother of three children,
she decided to turn her passion into professional expertise.

She formally trained in:

- catering
- cooking
- pastry

and obtained her State diploma as a Chef.

She later worked in two renowned hospitality institutions:

Le Méridien Président
and
Novotel.

Her experience helped her develop:

- hospitality standards
- organisation
- professional service
- culinary discipline
- attention to detail

Later, after moving to Ghana, she began preparing food for members
of the Congolese community.

Word of mouth grew.

But a larger ambition emerged:

to introduce people to the richness of African culinary traditions
while remaining open to flavours, techniques and inspirations
from around the world.

This ambition became:

MAMA EMMA SERVICE TRAITEUR D'EXCELLENCE — MESTE.

Today, together with her family,
Emma continues to:

learn
create
transmit
cook
welcome
and design culinary experiences.

Key editorial statement:

A cuisine inherited from family.
A craft shaped by experience.
Hospitality turned into a profession.

---

# 10. MESTE MANIFESTO

Use selectively throughout the website.

Do NOT display this entire text everywhere.

Core manifesto:

Receiving guests means more than serving a meal.

It means creating a moment.

A moment where flavours tell a story.

Where presentation creates anticipation
before the first bite.

Where every detail lets guests know
they were expected.

At Mama Emma Service Traiteur d'Excellence,
we believe:

TO RECEIVE WELL IS TO TAKE CARE.

We listen.
We imagine.
We prepare.
We present.
We serve.

Our cuisine is rooted in Africa:

from Congo
to Ghana
and beyond.

But it remains in dialogue with:

- cuisines of the world
- contemporary techniques
- travel
- memories
- encounters
- family traditions

MESTE does not ask guests to choose between:

AUTHENTICITY
and
SOPHISTICATION.

It is born from their encounter.

African roots.
A global outlook.
Excellence in every detail.

---

# 11. TECHNICAL STACK

Use:

Frontend:
Next.js
App Router
TypeScript

CMS:
Payload CMS

Database:
Neon PostgreSQL

Object storage:
Cloudflare R2

Payload R2 integration:
@payloadcms/storage-s3

Hosting:
Netlify

Git:
GitHub

CI:
GitHub Actions

Deployment:
Netlify continuous deployment

Preview environments:
Netlify Deploy Previews

Transactional email:
Resend

Monitoring:
Sentry

Styling:
Tailwind CSS
+
CSS custom properties

Testing:
Vitest where appropriate
+
Playwright for browser tests

Use current stable package versions that are mutually compatible.

Do NOT automatically upgrade to experimental or canary versions.

---

# 12. ARCHITECTURAL PRINCIPLE

Payload CMS must live inside the same Next.js repository.

Do NOT create:

frontend repository
+
separate CMS repository

unless a serious technical limitation makes it necessary.

Prefer:

one repository
one deployment
one content model
one development workflow

---

# 13. PROJECT STRUCTURE

Use a maintainable structure similar to:

src/
  app/
    (frontend)/
    (payload)/
  blocks/
  collections/
  components/
    editorial/
    layout/
    ui/
    forms/
  globals/
  lib/
  migrations/
  styles/
  utilities/
  hooks/
  types/

public/
  brand/
  placeholders/

docs/
  BRAND.md
  CMS.md
  CONTENT_MODEL.md
  IMPLEMENTATION_PLAN.md
  DEPLOYMENT.md
  NETLIFY.md
  CLOUDFLARE_R2.md
  SEO.md
  SECURITY.md
  CONTENT_CHECKLIST.md

Avoid huge files.

Avoid 1000-line React page components.

---

# 14. LANGUAGES

The website is bilingual.

Primary:
English

Secondary:
French

Routing:

/en
/fr

Examples:

/en/about
/fr/a-propos

/en/services
/fr/services

/en/menus
/fr/menus

/en/mama-emma-fresh
/fr/mama-emma-fresh

/en/the-mama-emma-experience
/fr/the-mama-emma-experience

/en/gallery
/fr/galerie

/en/events
/fr/evenements

/en/journal
/fr/journal

/en/contact
/fr/contact

/en/request-a-quote
/fr/demande-de-devis

Use true URL-based localization.

Do not rely only on client state.

---

# 15. PAYLOAD LOCALIZATION

Locales:

en
fr

Default:

en

Localize:

- page titles
- headings
- descriptions
- rich text
- menu names
- menu descriptions
- services
- CTA labels
- SEO titles
- SEO descriptions
- articles
- event descriptions
- testimonials

Do not unnecessarily localize:

- IDs
- phone numbers
- dates
- database keys
- configuration values

---

# 16. HEADER

Desktop navigation:

Logo / emblem

Our Story
Services
Menus
Mama Emma Fresh
Gallery
The Experience

Primary CTA:

PLAN YOUR EVENT

Language:

EN / FR

Initial behaviour:

on photographic/dark hero:
transparent header

on scroll:
compact ivory or forest header

Do not use a generic sticky navbar.

Mobile:

premium full-screen navigation.

Large typography.

Elegant transition.

Accessible keyboard and screen-reader behaviour.

---

# 17. HOMEPAGE — GENERAL

Homepage must behave like a visual journey.

It must not feel like:

hero
+
six cards
+
three testimonials
+
footer.

Use editorial rhythm.

Alternate:

- photography
- typography
- short narratives
- immersive sections
- horizontal compositions
- restrained color blocks

---

# 18. HOMEPAGE HERO

Use one exceptional cinematic full-width image.

Do NOT use autoplay video as initial hero.

Content:

MAMA EMMA
SERVICE TRAITEUR D'EXCELLENCE

Headline:

THE ART OF AFRICAN HOSPITALITY

Subline:

African soul.
Contemporary expression.

CTA:

Plan Your Event

Secondary CTA:

Discover Our Cuisine

Location:

Accra · Ghana

Logo treatment must remain elegant.

Do not overload hero with copy.

---

# 19. HOMEPAGE — MANIFESTO

Headline:

MORE THAN CATERING.
AN EXPERIENCE TO REMEMBER.

Short copy:

We do not simply prepare meals.

We create tables around which people:

meet
celebrate
share
and remember.

Use:

asymmetric editorial grid

One close-up culinary photograph.

One strong pull quote.

Avoid cards.

---

# 20. HOMEPAGE — STORY

Headline:

A STORY OF TRANSMISSION.

Use:

- Mama Emma emblem
- archival / family / portrait imagery when available
- short narrative

Key copy:

A cuisine inherited from family.
A craft shaped by experience.
Hospitality turned into a profession.

CTA:

Discover Mama Emma's Story

Do not display full biography here.

---

# 21. HOMEPAGE — OUR WORLDS

Display:

Celebrations

Wedding
Birthday
Baptism
Private receptions

Corporate

Launches
Business lunches
Cocktails
Conferences
Corporate dinners

Institutional & Diplomatic

Embassies
Consulates
Institutions
Official receptions

Bespoke Experiences

Private dining
VIP events
Custom culinary concepts

Design:

large changing imagery

desktop:
interactive editorial showcase

mobile:
vertical immersive panels

Do not use four SaaS cards.

---

# 22. HOMEPAGE — CULINARY PHILOSOPHY

Headline:

AFRICAN SOUL.
CONTEMPORARY EXPRESSION.

Show:

HERITAGE
FIRE
FRESHNESS
TEXTURE
DETAIL
STORY

Phrase:

Familiar enough to comfort.
Different enough to remember.

Explain each concept briefly.

---

# 23. MESTE CULINARY LEVELS

Support three culinary levels.

MESTE CLASSICS

Familiar dishes,
generous,
precisely executed.

MESTE SIGNATURES

Recognisable dishes elevated through:

- technique
- presentation
- texture
- sauce
- composition

CHEF'S CREATIONS

More artistic,
audacious
or experimental creations.

Make this visible in the menu system.

---

# 24. INITIAL SIGNATURE DISHES

Seed these menu items.

1.
Croustillant de chikwangue & smoked fish

Composition:
smoked fish
lime
pickled red onion
green herb oil

2.
Jollof Arancini

Composition:
crispy jollof
braised chicken centre
smoked tomato
herbs

3.
Saka-Saka Croquette

Composition:
cassava leaves
melting centre
ginger-lime cream

4.
Kelewele Mille-Feuille

Composition:
spiced plantain
lime avocado
roasted peanuts

5.
Mama Emma Chicken 2.0

Composition:
ginger
lime
spiced glaze
roasted peanuts
fresh herbs

6.
Saka-Saka & Prawn

Composition:
creamy saka-saka
braised prawn
green oil
cassava crisp

7.
Maboké MESTE

Composition:
fish
confit tomato
ginger
aromatics
cooking jus

8.
Chicken Supreme with Moambé Reduction

Composition:
braised or roasted chicken
reduced moambé jus
smoked sweet potato
glazed vegetables

9.
Pressed Alloco

Composition:
pressed ripe plantain
golden crisp exterior

10.
Mikate Profiterole

Composition:
light mikate
vanilla cream
dark chocolate
ginger

11.
Accra Sunset

Composition:
mango
pineapple
coconut
bissap
plantain crumble

12.
Coco · Pineapple · Lime

Composition:
coconut biscuit
pineapple insert
light coconut mousse
lime

---

# 25. COCKTAIL CLASSICS

Seed:

Chicken Skewers — Mama Emma Style

Braised Chicken Wings

Spiced Beef Meatballs

Braised Sausages

Alloco Bites

Mama Emma Canapés

Pastel

Banana fritters

Sweet croquettes

These remain important commercial dishes.

Do not hide classics in favour of overly gastronomic content.

---

# 26. CHEF'S COCKTAIL CREATIONS

Seed:

Pastel de poisson fumé

Plantain Cannelloni

Bissap Glazed Beef

Mini-Maboké

Cassava Taco

Sweet Potato Pavé

Allow future chef creations through CMS.

---

# 27. STARTERS

Seed:

Betterave rôtie

avocado cream
bissap reduction
roasted cashew

Congo-Ghana Garden

young leaves
mango
avocado
cucumber
roasted plantain
peanuts
pickles
bissap-lime dressing

Saka-Saka & Prawn

Avocado & Mango Tartare

Smoked Sweet Potato Velouté

Smoked Fish & Cassava

---

# 28. FISH & SEAFOOD

Seed categories:

Tilapia au feu

Maboké MESTE

Smoked catfish

Braised prawns

Grilled fish & bissap butter

Allow variants.

---

# 29. POULTRY

Seed:

Chicken Supreme with Moambé Reduction

Ginger Fire Chicken

Chicken Heritage

Braised Chicken & Pineapple

---

# 30. MEAT

Seed:

Braised lamb
aubergine
bissap
plantain

Beef & Penja

Slow Cooked Beef

Tamarind Ginger Pork

Lamb & Jollof

Support pork dietary warning where appropriate.

---

# 31. VEGETABLE TABLE

Vegetarian food must be treated as a real culinary experience.

Seed:

Saka-Saka Ballotine

Fire-Roasted Aubergine

Braised Cabbage

Cassava & Beans

Plantain Steak

Sweet Potato & Greens

Do NOT create a vegetarian section that is merely:

"same meal without meat".

---

# 32. SIDES

Seed:

Grilled Chikwangue

Pressed Alloco

Herb Attiéké

Smoked Jollof

Coconut Lime Rice

Crispy Cassava

Roasted Sweet Potato

Seasonal Fire Vegetables

---

# 33. DESSERTS

Seed:

Mikate Profiterole

Bissap Banana

Accra Sunset

Coco · Pineapple · Lime

Dark Chocolate & Ginger

Coconut Flan 2.0

Cassava Cake

Tropical Pavlova

Also allow:

classical mikate
banana fritters
fruit
banana cake
coconut flan

---

# 34. SIGNATURE MENUS

Create CMS entries for:

HERITAGE CONTEMPORARY

BETWEEN ACCRA & BRAZZAVILLE

FIRE & HERITAGE

GARDEN & COAST

ROOTS & GARDEN

Each should support:

title
slug
subtitle
intro
welcome
bites
starter
fish
meat
main
vegetarian main
sides
dessert
drinks
dietary notes
featured image
gallery
availability status
sort order

---

# 35. MAMA EMMA FRESH

Create dedicated premium product section.

Brand:

MAMA EMMA FRESH

Signature:

Crafted in Ghana.

Products:

Pineapple

Hibiscus / Bissap

Ginger

Pineapple & Beetroot

Pineapple & Orange

Pineapple & Watermelon

Do NOT claim:

Organic

unless explicitly provided by the business.

Product fields:

name
slug
shortDescription
description
ingredients
canImage
accentColor
availableSizes
availability
nutritionPlaceholder
legalPlaceholder
gallery

---

# 36. HOMEPAGE — MAMA EMMA FRESH

Visually distinct.

Use:

transparent cans

liquid color visible

subtle Mama Emma emblem

Kente accent

large negative space

Headline:

CRAFTED IN GHANA.

CTA:

Discover Mama Emma Fresh

---

# 37. THE MAMA EMMA EXPERIENCE

Important:

This event concept is NOT officially launched.

Do not invent:

dates
frequency
prices
capacity
venues

Current presentation:

THE MAMA EMMA EXPERIENCE

DINE · DISCOVER · CONNECT

Copy:

Beyond catering,
Mama Emma is imagining signature culinary gatherings
where food, culture, hospitality, entertainment
and meaningful encounters come together around one table.

Each experience will explore a different universe:

a story
a curated menu
an atmosphere
entertainment
and moments designed to be shared.

Small disclaimer:

A signature Mama Emma concept currently in development.

CTA:

Join the Interest List

---

# 38. EVENTS CMS

Create Events collection now.

Fields:

title
slug

status:

concept
coming_soon
registration_open
sold_out
completed

theme

shortDescription

story

date

venue

capacity

price

menu

entertainment

dressCode

featuredImage

gallery

registrationMode:

interest_only
external_link
internal_registration

Do not display fake events.

---

# 39. MESTE EXPERIENCE FUTURE UX

Build the architecture so the Experience page can later support:

- event landing pages
- dates
- menu reveals
- ticket information
- registration
- sold-out state
- event gallery
- previous editions
- waiting list

But currently show only:

concept
+
interest form.

---

# 40. RECEPTION FORMATS

Support:

Cocktail

Buffet

Table Service

Brunch

Bespoke

Design with photography.

No icon card grid.

Each format should support:

description
recommended event types
guest ranges if later supplied
gallery
related menus
CTA

Do not invent pricing.

---

# 41. SERVICES

Service categories:

Celebrations

Corporate

Institutional & Diplomatic

Bespoke Experiences

Every service page should include:

positioning
visual story
formats
example menu possibilities
gallery
related references
CTA

---

# 42. ABOUT PAGE

Create editorial biography.

Sections:

CONGO
Origins and family

MAYA-MAYA
First hospitality experience

SENEGAL
Training and State Chef diploma

PROFESSIONAL HOSPITALITY
Le Méridien Président
Novotel

GHANA
Beginning of Mama Emma

MESTE TODAY
Family
hospitality
African culinary expression

Avoid corporate timeline templates.

Use:

large photographs
pull quotes
asymmetric composition
editorial chapter transitions

---

# 43. GALLERY

Categories:

Food

Cocktails

Buffets

Table Service

Celebrations

Corporate

Institutional

Behind the Scenes

Mama Emma Fresh

The Experience

Media item supports:

image
alt
caption
category
event relation
service relation
sort order
focal point

Use accessible lightbox.

---

# 44. REFERENCES

Create CMS-managed references.

Fields:

clientName

logo

eventType

guestCount

shortDescription

fullDescription

photos

permissionToDisplay

featured

Never publicly display reference when:

permissionToDisplay === false

Do not invent clients.

Do not invent event numbers.

---

# 45. TESTIMONIALS

CMS collection:

name
role
company
quote
photo
locale
permissionToDisplay
featured

Do not seed fake testimonials.

Show elegant empty-state behaviour until real testimonials exist.

---

# 46. REQUEST A QUOTE

This is the primary conversion workflow.

Fields:

Full name

Company / Organisation

Email

Phone / WhatsApp

Event type

Event date

Location

Estimated guest count

Reception format

Interested services

Menu preferences

Dietary requirements

Allergies

Optional budget range

Additional notes

Consent checkbox

CTA:

DESIGN MY EXPERIENCE

On submit:

1.
server-side validation

2.
save to Payload Leads collection

3.
send MESTE admin notification

4.
send customer confirmation

5.
display branded success screen

---

# 47. LEADS COLLECTION

Fields:

status

values:

new
contacted
proposal_sent
won
lost

name
company
email
phone

eventType
eventDate
location
guestCount

receptionFormat

services

menuPreferences

dietaryRequirements

allergens

budget

notes

locale

sourcePage

internalNotes

createdAt

Admin list columns:

created date
name
event date
guest count
status

Leads are NEVER publicly readable.

---

# 48. FORM SECURITY

All forms must include:

server validation

sanitization

honeypot

rate limiting

CSRF-safe architecture

bot mitigation where reasonable

input length limits

Do not trust client input.

Do not expose:

database keys
R2 write keys
Resend API keys
Payload secrets

---

# 49. PAYLOAD CMS COLLECTIONS

Create:

Users

Media

Pages

Services

ReceptionFormats

MenuCategories

MenuItems

SignatureMenus

FreshProducts

Events

References

Testimonials

Gallery

JournalPosts

Leads

ExperienceInterest

---

# 50. PAYLOAD GLOBALS

Create:

SiteSettings

Header

Footer

HomePage

ContactSettings

SEOSettings

---

# 51. PAYLOAD USERS

Roles:

admin
editor

Admin:

full content and configuration permissions.

Editor:

content editing only.

Editors cannot:

manage user roles

manage security settings

access secrets

delete admin accounts

No public registration.

---

# 52. CMS EDITORIAL EXPERIENCE

CMS must be usable by a non-developer.

Use:

field groups

tabs

descriptions

clear naming

preview

draft

publish

sort order

Do NOT expose technical internals unnecessarily.

Do not create a completely free-form page builder.

Protect visual consistency.

---

# 53. CONTROLLED CONTENT BLOCKS

Create reusable Payload blocks:

Hero

EditorialTextImage

FullBleedImage

Manifesto

Quote

ServiceShowcase

MenuShowcase

SignatureDishes

FreshProducts

GalleryPreview

References

Process

MamaEmmaExperienceTeaser

CTA

EditorialSplit

StoryChapter

Editors may reorder supported blocks.

Each block must maintain strong design constraints.

---

# 54. CLOUDFARE R2

Production media storage:

Cloudflare R2 Object Storage.

Use:

@payloadcms/storage-s3

because R2 exposes an S3-compatible interface.

Do NOT use:

Vercel Blob

Cloudinary

Netlify filesystem for production uploads

local production media storage

Development may optionally use local filesystem.

---

# 55. R2 ENVIRONMENT VARIABLES

Use:

R2_ACCOUNT_ID=

R2_ACCESS_KEY_ID=

R2_SECRET_ACCESS_KEY=

R2_BUCKET=

R2_ENDPOINT=

R2_PUBLIC_URL=

Expected endpoint format may be configured through env.

Never hardcode account identifiers.

Never expose secrets using NEXT_PUBLIC_.

---

# 56. R2 PUBLIC MEDIA DOMAIN

Prefer a custom domain such as:

media.<MESTE_DOMAIN>

Do not hardcode domain in components.

Use:

R2_PUBLIC_URL

The storage URL must be replaceable through configuration.

---

# 57. R2 SECURITY

Use scoped credentials.

Only provide permissions needed for the MESTE bucket.

Never expose write credentials to browser JavaScript.

Do not permit arbitrary direct client uploads.

Uploads must go through authenticated Payload operations.

Validate:

file MIME type

file extension

maximum file size

image dimensions where useful

Reject unnecessary executable formats.

---

# 58. MEDIA COLLECTION

In production:

disableLocalStorage: true

Media fields:

alt

caption

category

credit

focalPoint

Create image sizes approximately:

thumbnail
400px

card
720px

tablet
1200px

desktop
1600px

hero
2400px

og
1200 × 630

Do not upscale unnecessarily.

---

# 59. MEDIA CATEGORIES

Use categories:

food

cocktail

buffet

table-service

mama-emma-fresh

events

team

brand

experience

behind-the-scenes

corporate

institutional

celebrations

---

# 60. NEXT IMAGE

Use `next/image`.

Always use:

correct responsive sizes

stable aspect ratios

width / height
or constrained `fill`

lazy loading for below-fold images

priority only for true LCP images

Never render huge original files unnecessarily.

Configure image remotePatterns for:

R2_PUBLIC_URL / media domain.

---

# 61. DATABASE

Database:

Neon PostgreSQL.

Environment:

DATABASE_URL

Use Payload's Postgres adapter.

Use correct pooled production connection configuration appropriate to deployment.

Do not commit database credentials.

---

# 62. DATABASE MIGRATIONS

Use Payload migrations.

Create:

src/migrations/

Provide commands such as:

pnpm payload migrate:create

pnpm payload migrate

Document migration workflow.

Do not rely on uncontrolled production schema push.

---

# 63. NETLIFY DEPLOYMENT

Target hosting platform:

NETLIFY

Do not include Vercel-specific APIs.

Create and maintain:

netlify.toml

Ensure:

local build
Netlify Preview
Netlify production

all work correctly.

---

# 64. NETLIFY ENVIRONMENT VARIABLES

Production secrets should be configured using Netlify environment variables.

Do not commit `.env`.

Create:

.env.example

only.

---

# 65. GITHUB WORKFLOW

Use:

feature branch

Pull Request

GitHub CI

Netlify Deploy Preview

review

merge to main

Netlify production deployment

---

# 66. GITHUB ACTIONS

Create CI for:

install

lint

typecheck

unit tests

production build

Playwright smoke tests where feasible

CI should fail clearly.

---

# 67. SENTRY

Use Sentry for error monitoring.

Sentry must be optional.

Environment:

SENTRY_DSN

NEXT_PUBLIC_SENTRY_DSN
only if required by implementation

If Sentry env vars are absent:

the project must still build
and run.

Monitor:

unhandled frontend errors

server errors

API errors

Payload runtime errors

Do not send sensitive lead content to Sentry.

Avoid sending:

email addresses

phone numbers

event personal notes

tokens

database details

secrets

---

# 68. RESEND

Use Resend for transactional email.

Environment:

RESEND_API_KEY

FROM_EMAIL

ADMIN_NOTIFICATION_EMAIL

Emails:

new enquiry admin notification

customer enquiry confirmation

admin password reset if needed

interest list confirmation

Use branded HTML templates.

---

# 69. SEO

Implement complete SEO foundation.

Use Next Metadata APIs.

Each page should support:

meta title

meta description

social image

canonical

robots index/noindex

---

# 70. PAYLOAD SEO

Configure a suitable Payload SEO content structure.

SEO fields should be editable by CMS editors.

Generate intelligent defaults.

Allow manual overrides.

---

# 71. INTERNATIONAL SEO

Implement:

html lang

hreflang EN

hreflang FR

x-default where appropriate

canonical URLs

localized metadata

localized slugs when suitable

Do not create duplicate untranslated pages pretending to be translations.

---

# 72. SITEMAP

Generate dynamic:

/sitemap.xml

Include only:

published
indexable
canonical content.

---

# 73. ROBOTS

Generate:

/robots.txt

Protect unnecessary CMS/private paths from indexing.

Do not rely on robots.txt for actual security.

---

# 74. STRUCTURED DATA

Use truthful JSON-LD where appropriate.

Support:

Organization

LocalBusiness / appropriate catering business schema

BreadcrumbList

Article

Event later when real events exist

Never invent:

reviews

ratings

prices

opening hours

addresses

awards

certifications

---

# 75. LOCAL SEO

Prepare genuinely useful landing-page capabilities for:

Catering in Accra

Wedding Catering Ghana

Corporate Catering Accra

Private Event Catering Ghana

Diplomatic & Institutional Catering Ghana

African Contemporary Catering Accra

Do NOT create thin doorway pages.

Every SEO page must provide useful human-readable content.

---

# 76. JOURNAL

Create Journal capability.

Potential content:

African culinary heritage

behind the scenes

Mama Emma story

event planning

ingredients

signature dishes

Mama Emma Fresh

The Mama Emma Experience

Only show Journal in main navigation if at least one real post is published.

Do not seed generic AI blog filler.

---

# 77. PERFORMANCE TARGETS

Aim for:

LCP <= 2.5s

INP <= 200ms

CLS <= 0.1

Use good judgement.

---

# 78. PERFORMANCE PRINCIPLES

Server Components by default.

Client Components only when necessary.

Avoid massive hydration.

Avoid huge JavaScript bundles.

Avoid unnecessary third-party scripts.

Optimize images.

Use next/font.

Lazy-load heavy content.

Use CSS animation where appropriate.

Do not ship a large animation library for basic fades.

---

# 79. HOMEPAGE HERO PERFORMANCE

The homepage hero must NOT initially use:

autoplay background video.

Use:

optimized cinematic image.

Later sections may use video if:

lazy-loaded

muted

non-blocking

optional.

---

# 80. MOTION

Motion should feel:

quiet
precise
premium

Allowed:

subtle opacity reveal

small translate reveal

image scale on hover

mask reveals

header state transition

gentle gallery transitions

Avoid:

bouncing

scroll hijacking

aggressive parallax

animation on every element

slow transitions delaying navigation.

---

# 81. ACCESSIBILITY

Use semantic HTML.

Correct heading hierarchy.

Keyboard accessible navigation.

Visible focus states.

Accessible forms.

Error messages connected to fields.

Alt text.

Color contrast.

Reduced motion support.

Do not rely only on color.

---

# 82. SECURITY HEADERS

Configure appropriate security headers.

Consider:

Content-Security-Policy

Strict-Transport-Security

X-Content-Type-Options

Referrer-Policy

Permissions-Policy

Do not introduce insecure inline script policies without justification.

---

# 83. AUTH SECURITY

Payload admin only.

No public accounts.

Use secure authentication defaults.

Users collection is private.

Leads collection is private.

ExperienceInterest collection is private.

Never return sensitive admin data through public APIs.

---

# 84. CACHE & REVALIDATION

Do not query Payload on every frontend render unnecessarily.

Use sensible caching.

When CMS content updates:

invalidate relevant content only.

Avoid unnecessary full-site rebuilds.

Editors should see new published content quickly.

Document strategy.

---

# 85. DESIGN SYSTEM COMPONENTS

Create:

Container

Section

Eyebrow

DisplayHeading

BodyCopy

Button

TextLink

ImageFrame

EditorialGrid

Quote

KenteDivider

SectionIntro

ImageReveal

LogoMark

LogoFull

Breadcrumbs

SplitFeature

EditorialCard

MenuDish

MenuCollection

GalleryGrid

CTASection

---

# 86. BUTTON DESIGN

Avoid excessive pill buttons.

Primary button:

burgundy / ivory

Dark sections:

gold or ivory depending contrast

Secondary:

underlined editorial link
or restrained outlined button

Radius:

0–8px generally.

Do not make everything rounded.

---

# 87. HOMEPAGE SIGNATURE DISHES

Create premium showcase.

Possible pattern:

large image
+
dish name
+
small composition
+
category

Allow restrained horizontal scroll on mobile.

Do not build a tiny 12-card grid.

CTA:

Explore the Menu Collection

---

# 88. HOMEPAGE PROCESS

Show:

01
Tell us about your event

02
We design your experience

03
Personalise it

04
Approve it

05
Enjoy the experience

Desktop:

editorial horizontal progression.

Mobile:

vertical.

---

# 89. HOMEPAGE REFERENCES

Headline:

TRUSTED FOR MOMENTS THAT MATTER.

Do not invent logos.

If no reference is available:

use a tasteful editorial empty state.

---

# 90. HOMEPAGE FINAL CTA

Use immersive event image.

Headline:

YOUR GUESTS WILL REMEMBER THE OCCASION.

LET THEM REMEMBER THE TABLE TOO.

Copy:

Tell us the date.
Tell us the occasion.
Tell us how many guests.
We'll take care of the rest.

CTA:

Plan Your Event

Secondary:

WhatsApp

---

# 91. CONTACT INFORMATION

Known phone:

0537464516

Do not invent:

email

street address

opening hours

Instagram URL

Facebook URL

If unavailable:

create CMS fields
and leave empty.

Components must gracefully hide empty details.

---

# 92. WHATSAPP

Build WhatsApp CTA configuration through CMS.

Do not hardcode multiple instances.

Store phone in:

ContactSettings

Generate the WhatsApp link centrally.

---

# 93. PLACEHOLDER IMAGES

Never silently use random copyrighted images from the web.

If real photography is missing:

use clearly identified local placeholders.

Create:

docs/CONTENT_CHECKLIST.md

List required shoots:

homepage hero

Mama Emma portrait

signature dishes

cocktail collection

buffet

table service

corporate event

institutional event

wedding

Mama Emma Fresh range

behind the scenes

The Mama Emma Experience later

---

# 94. INITIAL CMS SEEDING

Seed authentic known content.

Do not invent:

customers

testimonials

prices

addresses

awards

certifications

social handles

emails

Use clear placeholders for missing information.

---

# 95. RESPONSIVE DESIGN

Design intentionally for:

mobile
tablet
desktop
large desktop

Do not simply stack desktop cards.

Pay special attention to:

navigation

hero

menu browsing

signature dishes

gallery

quote form

Mama Emma Fresh

---

# 96. MENU UX

The Menu Collection must feel like a digital culinary book.

Categories:

Cocktail Classics

MESTE Signature Cocktails

Chef's Cocktail Creations

Starters — Fresh & Elegant

Heritage & African Roots

Fish & Seafood

Poultry

Meat

The Vegetable Table

Signature Sides

Sweet Mama Emma

Mama Emma Fresh

Do not use dense spreadsheet-like restaurant menu tables.

---

# 97. MENU FILTERING

Support elegant filters:

All

Classics

Signatures

Chef's Creations

Vegetarian

Fish

Meat

Cocktail

Dessert

Avoid large filter UI.

---

# 98. ALLERGENS

MenuItem should support:

allergens

dietaryLabels

containsPork

vegetarian

vegan

spiceLevel

Do not automatically infer allergens.

Editor must enter verified data.

---

# 99. MAMA EMMA FRESH & COOKING

Allow editorial storytelling explaining how Mama Emma Fresh flavours may inspire culinary components.

Examples:

Bissap:
reduction
vinaigrette
gel
dessert

Ginger:
marinade
glaze
caramel

Pineapple:
chutney
marinade
dessert

Do not imply ingredients are used in recipes unless verified.

---

# 100. EVENT INTEREST LIST

Create ExperienceInterest collection.

Fields:

name

email

phone optional

locale

createdAt

marketingConsent

Never expose publicly.

CTA:

Keep Me Informed

---

# 101. ERROR STATES

Create branded:

404

500 / generic error state

form error

empty gallery

empty references

empty journal

No default framework-looking pages.

---

# 102. TESTING

At minimum test:

homepage rendering

EN/FR routing

language switch

main navigation

menus page

menu filtering

gallery

quote form validation

successful quote persistence

experience interest form

404

CMS access restrictions where feasible

---

# 103. PLAYWRIGHT

Create smoke tests for:

homepage

responsive nav

quote form

language switching

menus

Mama Emma Fresh page

The Experience page

---

# 104. DOCUMENTATION

Create:

docs/BRAND.md

Explain:

brand positioning

colors

typography

logo usage

Kente usage

photography

motion

---

# 105. CMS DOCUMENTATION

Create:

docs/CMS.md

Explain to a non-developer:

how to log in

edit page

upload media

create menu item

create signature menu

update Mama Emma Fresh

publish

preview

add gallery image

review leads

---

# 106. R2 DOCUMENTATION

Create:

docs/CLOUDFLARE_R2.md

Explain:

bucket setup

API credentials

custom domain

environment variables

Payload adapter

local vs production storage

common errors

---

# 107. NETLIFY DOCUMENTATION

Create:

docs/NETLIFY.md

Explain:

site setup

GitHub connection

environment variables

build command

preview deploys

production branch

domain setup

deploy troubleshooting

---

# 108. SECURITY DOCUMENTATION

Create:

docs/SECURITY.md

Document:

roles

private collections

secrets

rate limiting

security headers

R2 permissions

form protection

deployment security checklist

---

# 109. SEO DOCUMENTATION

Create:

docs/SEO.md

Explain:

metadata

translations

hreflang

sitemap

structured data

local SEO

journal strategy

image alt text

---

# 110. README

Create an excellent README.

Include:

project overview

architecture

technology choices

requirements

local setup

environment variables

Payload setup

Neon setup

Cloudflare R2 setup

Netlify setup

Resend setup

Sentry setup

development workflow

testing

database migrations

deployment

CMS workflow

troubleshooting

---

# 111. ENVIRONMENT FILE

Create:

.env.example

Include placeholders:

DATABASE_URL=

PAYLOAD_SECRET=

NEXT_PUBLIC_SERVER_URL=

R2_ACCOUNT_ID=

R2_ACCESS_KEY_ID=

R2_SECRET_ACCESS_KEY=

R2_BUCKET=

R2_ENDPOINT=

R2_PUBLIC_URL=

RESEND_API_KEY=

FROM_EMAIL=

ADMIN_NOTIFICATION_EMAIL=

SENTRY_DSN=

NEXT_PUBLIC_SENTRY_DSN=

Do not commit real credentials.

---

# 112. CODE QUALITY

Use strict TypeScript.

Avoid `any`.

Use Zod where runtime validation helps.

Create clear domain types.

Keep Payload schemas modular.

Avoid duplicated query logic.

Avoid duplicated URLs.

Avoid magic strings.

Avoid dead code.

Avoid commented abandoned implementations.

---

# 113. CONTENT ARCHITECTURE

Separate:

business data

presentation components

CMS schema

query/data layer

frontend pages

Avoid components fetching arbitrary CMS data directly throughout the app.

Create clean reusable data access functions.

---

# 114. DESIGN VALIDATION

Before propagating the final design everywhere:

build the homepage first.

The homepage establishes:

typography
spacing
photography treatment
buttons
header
Kente use
animations
color rhythm
editorial grids

Once the homepage design system is coherent,
reuse it across all pages.

Do not independently invent a new style for every page.

---

# 115. SCREENSHOT REVIEW

During development:

render key pages.

Review desktop and mobile screenshots.

Check:

empty areas

spacing

broken grids

text overflow

image crop

contrast

font sizes

visual rhythm

Do not accept technically valid pages with obviously unfinished composition.

---

# 116. DO NOT OVERUSE EMPTY SPACE

MESTE should breathe,
but it must never look unfinished.

Avoid pages where:

only the top 40% contains content
and the rest is blank.

Use:

photography
editorial compositions
quotes
textures
related content
intentional color fields

to create balanced layouts.

---

# 117. PHOTOGRAPHY DIRECTION

Photography should feel:

real

warm

tactile

generous

refined

human

Prefer:

close-up food texture

fire and smoke

hands plating

service moments

beautiful tables

real guests when permitted

event atmosphere

Do not overuse:

sterile white stock photos

flat buffet documentation

generic restaurant imagery

---

# 118. MOBILE PRIORITY

Ensure the mobile experience feels premium.

Do not simply:

stack everything
center everything
reduce font size

Preserve:

editorial hierarchy

strong imagery

clear CTAs

comfortable reading

simple navigation

---

# 119. FUTURE EXTENSIBILITY

Architecture should allow later additions:

online reservations for The Mama Emma Experience

event ticketing

private client portal

supplier management

CRM integrations

newsletter

additional beverage products

additional countries

Do not build these now unless necessary.

Just avoid architecture that makes them impossible.

---

# 120. IMPLEMENTATION PHASES

Do not attempt everything blindly in one giant implementation.

## PHASE 1 — DISCOVERY

Inspect repository.

Inspect brand assets.

Inspect existing configuration.

Identify official logos.

Identify existing environment setup.

Create:

docs/IMPLEMENTATION_PLAN.md

Document:

routes

content model

technical architecture

assumptions

missing business information

---

## PHASE 2 — FOUNDATION

Set up:

Next.js

TypeScript

Payload

Neon

Tailwind

brand tokens

fonts

layout

R2 storage configuration

local media fallback

---

## PHASE 3 — CMS

Create:

collections

globals

roles

localization

draft/publish flow

media

migrations

seed content

---

## PHASE 4 — HOMEPAGE

Build complete homepage.

Validate:

desktop

mobile

performance

spacing

visual direction

Do not continue blindly if homepage visual quality is poor.

---

## PHASE 5 — CORE PAGES

Build:

About

Services

Menus

Mama Emma Fresh

Gallery

The Mama Emma Experience

Contact

---

## PHASE 6 — CONVERSION

Build:

Request a Quote

Leads

emails

interest list

validation

rate limiting

---

## PHASE 7 — SEO & PERFORMANCE

Implement:

metadata

hreflang

sitemap

robots

JSON-LD

image optimization

caching

revalidation

performance review

---

## PHASE 8 — SECURITY

Audit:

CMS permissions

private collections

headers

forms

R2 credentials

environment variables

production config

---

## PHASE 9 — TESTING

Run:

lint

typecheck

unit tests

Playwright

production build

---

## PHASE 10 — DEPLOYMENT

Configure:

GitHub

Netlify

Neon

Cloudflare R2

Resend

Sentry

environment variables

production migrations

Deploy Preview

production deploy

---

# 121. FIRST ACTION

Before writing implementation code:

1. Inspect the entire repository.

2. Inspect all existing files.

3. Inspect:

   /brand-assets
   /public/brand

4. Identify the actual official Mama Emma logo files.

5. Do not redraw the logo.

6. Create:

   docs/IMPLEMENTATION_PLAN.md

7. Define:

   route architecture
   CMS collections
   globals
   storage strategy
   caching strategy
   localization strategy
   deployment strategy

8. List missing factual information.

9. Use safe placeholders where necessary.

10. Do NOT stop and ask questions for information that can safely remain configurable in Payload.

11. Do NOT invent business facts.

12. Then begin PHASE 1.

---

# 122. QUALITY BAR

The final website must feel bespoke.

It should look online the way a guest should feel
when welcomed at a Mama Emma table:

EXPECTED.

CARED FOR.

SURPRISED.

COMFORTABLE.

IMPRESSED.

The final product must be:

beautiful
maintainable
secure
fast
accessible
SEO-ready
CMS-driven
mobile-first
scalable
and fully owned by the user.

The guiding sentence is:

MESTE SHOULD LOOK ONLINE
THE WAY A GUEST SHOULD FEEL
WHEN WELCOMED AT A MAMA EMMA TABLE.