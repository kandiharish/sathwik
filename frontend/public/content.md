SATHWIK — PROJECT CONTENT & VISUAL STORYTELLING IMPLEMENTATION
===============================================================

IMPORTANT:
This is an ADDITIVE implementation.

DO NOT break, replace, redesign, or remove any existing working
homepage, hero animation, navigation, typography, styling,
responsive behavior, components, routes, or current functionality.

The existing implementation is already working.

Your task is to EXTEND the current frontend with a richer project
content and visual storytelling system.

===============================================================
PRIMARY GOAL
===============================================================

The client wants the website to contain substantially more useful
and meaningful information.

We have real SATHWIK project folders containing authentic project
photographs and project-related material.

Instead of creating generic project cards, turn these real projects
into detailed, visually impressive CASE STUDIES.

The result should feel like a premium NGO impact website.

Do NOT use filler content.

Do NOT invent facts.

Do NOT fabricate beneficiaries, locations, dates, costs, partners,
impact numbers, testimonials, or project outcomes.

Use only verified information.

If information is missing, clearly mark it internally as:

"Information to be confirmed"

Do not display this placeholder publicly unless necessary.

===============================================================
CURRENT PROJECT MUST REMAIN SAFE
===============================================================

Before making changes:

1. Inspect the entire existing frontend.
2. Understand the current routing.
3. Understand the current component structure.
4. Understand the existing data architecture.
5. Understand the existing homepage and hero implementation.
6. Identify reusable components.
7. Identify existing project/program pages.

DO NOT rewrite existing components unnecessarily.

DO NOT replace existing pages.

DO NOT change the current hero.

DO NOT change the current homepage design unless explicitly required
for integrating a small link/entry point.

DO NOT remove existing animations.

DO NOT change the current color system.

DO NOT change existing navigation behavior.

DO NOT introduce a backend.

This remains a FRONTEND-ONLY application.

===============================================================
PROJECT SOURCE MATERIAL
===============================================================

Use the actual project material supplied by the user.

The user has project folders containing real photographs and
supporting information, including projects such as:

- AP Medical Equipment — ₹1 Crore
- Bihar RO Plant — ₹50 Lakhs
- Blind School Project
- Cycle Project — Karimnagar
- Karnataka RO Plant
- Medical Equipment — Ghatkesar
- Medical Equipment — Hyderabad
- Medical Equipment — Karimnagar
- Nandyala Project — ₹3 Crore
- Nellore Medical Equipment
- Nellore Water Plant — ₹1 Crore
- Nutrition Kits — Hyderabad
- Open Air Gym — Hyderabad
- Ranchi Nutrition Project
- RO Plant — Jangaon/Janaagama
- Sathana Pally Medical Equipment
- Skill Development — Manikdur/Mankad...
- UP Medical Equipment — ₹1 Crore

IMPORTANT:

These folder names are NOT automatically verified facts.

Inspect the actual project material before displaying:

- amount
- location
- date
- beneficiaries
- project status
- outcome
- partner
- organization involved
- implementation details

If the source material confirms the information, use it.

If not, do not guess.

===============================================================
STEP 1 — CREATE A SAFE PROJECT DATA LAYER
===============================================================

Create or extend:

src/data/projects.ts

Use strongly typed TypeScript structures.

Each project should support:

- id
- slug
- title
- shortTitle
- category
- location
- state
- year
- date
- investment
- summary
- problem
- objective
- approach
- implementation
- beneficiaries
- impact
- status
- timeline
- gallery
- featuredImage
- relatedProgram
- relatedProjects
- tags

All fields that are not verified should be optional.

Do not force fake data just to satisfy the interface.

===============================================================
STEP 2 — PROJECT CATEGORIES
===============================================================

Create a clean category system.

Possible categories:

Healthcare
Water & Sanitation
Education
Nutrition
Youth Development
Women Empowerment
Rural Development
Infrastructure
Environment
Community Development

Only assign categories when supported by the actual project.

Allow filtering by category.

===============================================================
STEP 3 — PROJECT DISCOVERY PAGE
===============================================================

Create or improve the Projects page without destroying the existing
design.

The page should feel like:

---------------------------------------------------------------
OUR WORK

Every project begins with a need.
Every intervention is designed to create meaningful change.

[ All ] [ Healthcare ] [ Water ] [ Education ]
[ Nutrition ] [ Youth ] [ Community ]

---------------------------------------------------------------

Then display premium project cards.

Each card should contain:

PROJECT IMAGE

CATEGORY

PROJECT TITLE

LOCATION

Short description

Optional verified investment/value

"Explore Project →"

Use authentic project images wherever available.

Do NOT use generic stock photography if authentic photographs exist.

===============================================================
STEP 4 — PREMIUM PROJECT CARD INTERACTION
===============================================================

Cards should have subtle interactions.

On hover:

- image gently zooms
- metadata becomes more visible
- title shifts subtly
- arrow/button animates
- overlay transitions smoothly

Keep the animation premium and restrained.

Do NOT create excessive flashy animations.

The website should feel:

premium
editorial
trustworthy
human
modern

===============================================================
STEP 5 — INDIVIDUAL PROJECT CASE STUDY
===============================================================

Create:

/projects/:slug

Each project should have a detailed case-study experience.

STRUCTURE:

---------------------------------------------------------------
PROJECT CATEGORY

PROJECT TITLE

Short powerful project introduction

[ Explore Gallery ]
---------------------------------------------------------------

PROJECT INFORMATION

Location
State
Year
Category
Investment
Status

Only show verified information.

---------------------------------------------------------------
01 — THE NEED

Explain the actual problem/challenge.

Why was the intervention required?

---------------------------------------------------------------
02 — THE RESPONSE

Explain what SATHWIK did.

---------------------------------------------------------------
03 — HOW IT WAS IMPLEMENTED

Explain the implementation process where information exists.

Example:

Need identified
       ↓
Community assessment
       ↓
Planning
       ↓
Implementation
       ↓
Completion

Do not invent steps that are not supported by project information.

---------------------------------------------------------------
04 — THE IMPACT

Show verified outcomes.

Use large numbers only when they are supported by the source.

Example:

1,000+
People reached

ONLY if verified.

---------------------------------------------------------------
05 — PROJECT JOURNEY

Create a visual timeline when dates or stages are available.

---------------------------------------------------------------
06 — PROJECT GALLERY

Use the real photographs.

Do not simply display a basic grid.

Create an editorial gallery.

Use:

- large hero image
- supporting images
- asymmetric image layouts
- captions where information exists
- lightbox
- smooth transitions

---------------------------------------------------------------
07 — RELATED PROJECTS

Show other relevant projects.

---------------------------------------------------------------
08 — RELATED PROGRAM

Link the project to its broader program.

---------------------------------------------------------------
09 — CALL TO ACTION

Examples:

Explore More Projects
Support Our Work
Get Involved
Contact SATHWIK

===============================================================
STEP 6 — VISUAL STORYTELLING
===============================================================

When project photographs allow it, organize images into:

BEFORE
DURING
IMPLEMENTATION
COMPLETED
COMMUNITY
IMPACT

Do not force these labels if the images cannot support them.

The purpose is to make the project feel like a visual story.

Example:

THE NEED
[large photograph]

THE WORK BEGINS
[large photograph]

IMPLEMENTATION
[2–3 photographs]

THE RESULT
[large completed-project photograph]

===============================================================
STEP 7 — IMPACT INVESTMENT
===============================================================

Where verified project financial values exist, create a visual
"Impact Investment" presentation.

Example:

₹1 CRORE
Healthcare Infrastructure

or

₹50 LAKHS
Clean Water Initiative

Do NOT automatically calculate a total investment from folder names.

Do NOT add duplicate projects together.

Do NOT claim "₹X Crore invested" unless the underlying data has
been verified.

===============================================================
STEP 8 — LOCATION / INDIA IMPACT MAP
===============================================================

If enough project locations are verified, create an optional
interactive India project map.

The map should show project distribution by state.

Example:

TELANGANA
- Hyderabad
- Karimnagar
- Ghatkesar
- Jangaon
- Sathana Pally

ANDHRA PRADESH
- Nellore
- Nandyala

KARNATAKA
- verified locations

BIHAR
- verified locations

UTTAR PRADESH
- verified locations

JHARKHAND
- verified locations

IMPORTANT:

Only display locations confirmed by source material.

Do not fabricate geographic data.

If map implementation would introduce unnecessary complexity,
create a clean state/location explorer instead.

===============================================================
STEP 9 — IMPACT EXPLORER
===============================================================

Create an optional section/page:

"Where Our Work Happens"

Users should be able to explore:

State
→ Project
→ Category
→ Project details

This should make the organization's work easy to discover.

===============================================================
STEP 10 — CONTENT RELATIONSHIPS
===============================================================

Connect the content ecosystem.

Program
↓
Projects
↓
Stories
↓
Gallery
↓
Impact

For example:

Education Program
    ↓
School Furniture Project
    ↓
Project Case Study
    ↓
Project Gallery
    ↓
Related Education Projects

Do not leave every page isolated.

===============================================================
STEP 11 — HOMEPAGE SAFETY
===============================================================

The current homepage is NOT being redesigned.

Do not alter its current structure.

Only add a minimal entry point if needed.

For example:

"Explore Our Projects →"

This can link to:

/projects

Do not insert large new sections into the homepage unless explicitly
requested later.

The current homepage must remain visually and functionally intact.

===============================================================
STEP 12 — IMAGE HANDLING
===============================================================

Use the actual project photographs supplied by the user.

Create a clean asset organization such as:

src/assets/projects/

or the project's existing asset structure if one already exists.

Do not duplicate large image files unnecessarily.

Use:

- lazy loading
- responsive images
- appropriate object-fit
- optimized rendering

Ensure the project gallery remains performant.

===============================================================
STEP 13 — RESPONSIVENESS
===============================================================

Everything must work on:

320px
375px
425px
768px
1024px
1280px
1440px
1920px

Mobile project pages must remain easy to read.

The editorial gallery should intelligently collapse on mobile.

===============================================================
STEP 14 — ACCESSIBILITY
===============================================================

Ensure:

- keyboard navigation
- visible focus states
- alt text
- semantic HTML
- accessible buttons
- accessible lightbox
- sufficient contrast
- reduced-motion support

Animations must not make the content difficult to access.

===============================================================
STEP 15 — PERFORMANCE
===============================================================

Do not introduce unnecessary heavy libraries.

Use:

- lazy-loaded images
- route-level lazy loading where appropriate
- optimized rendering
- lightweight animations

Do not sacrifice performance for visual effects.

===============================================================
STEP 16 — DO NOT FABRICATE CONTENT
===============================================================

THIS IS CRITICAL.

Never invent:

- beneficiary numbers
- project costs
- dates
- locations
- partner organizations
- government departments
- testimonials
- quotes
- project outcomes
- impact percentages
- success metrics

If information is unavailable:

leave it optional.

The website must remain factually trustworthy.

===============================================================
STEP 17 — PRESERVE CURRENT IMPLEMENTATION
===============================================================

Before completing the task, verify:

- current homepage still works
- hero still works
- existing navigation still works
- existing routes still work
- existing animations still work
- existing styling still works
- existing responsive behavior still works

Run:

npm run build

Fix only issues caused by the new implementation.

Do not refactor unrelated code.

===============================================================
FINAL DELIVERABLE
===============================================================

Implement the project content system as a NEW, MODULAR FEATURE.

The final experience should feel like:

A PREMIUM NGO PROJECT PORTFOLIO
+
EDITORIAL STORYTELLING
+
REAL PROJECT DOCUMENTATION
+
INTERACTIVE DISCOVERY

The goal is NOT simply:

"more project cards."

The goal is:

"Help visitors understand the real work SATHWIK has done."

IMPORTANT FINAL RULE:

BUILD ON TOP OF THE EXISTING APPLICATION.

DO NOT REBUILD THE APPLICATION.

DO NOT DELETE WORKING FEATURES.

DO NOT REPLACE THE CURRENT HOMEPAGE.

DO NOT CHANGE THE CURRENT HERO.

DO NOT INTRODUCE A BACKEND.

ADD THE NEW PROJECT EXPERIENCE AS A SAFE, ISOLATED EXTENSION.