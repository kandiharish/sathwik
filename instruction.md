APPROVED — PROCEED WITH THE FRONTEND-ONLY ARCHITECTURE.

The SRYIA website is confirmed to be a frontend-only application.

Remove the backend from the active project.

However, before deleting c:\sathwik\backend permanently:

1. Confirm the project is committed to Git or create a safe backup.
2. Then remove the backend directory and all backend-related dependencies/configuration.
3. Verify that the frontend has ZERO dependency on:
   - Express
   - Node backend
   - MongoDB
   - Mongoose
   - JWT
   - REST APIs
   - API clients
   - backend environment variables
   - admin authentication

The final application must run completely independently as a frontend application.

==================================================
IMPORTANT — CONTENT ARCHITECTURE
==================================================

Do NOT limit the content architecture to only:

programs.ts
projects.ts
stories.ts
impact.ts
organization.ts
gallery.ts
events.ts

Because this project is intentionally CONTENT-RICH, also create structured data where required for:

- navigation
- site settings
- focus areas
- testimonials/voices
- FAQs
- reports/resources
- partners
- volunteer opportunities
- donation information
- team/leadership
- timeline/journey
- contact information
- social links
- homepage sections

Only create files that are actually needed, but design the content model comprehensively.

==================================================
CONTENT MUST BE SEPARATED FROM UI
==================================================

Do not put large amounts of text directly inside JSX.

Use:

src/data/

for structured content.

Components should consume the data.

For example:

data/projects.ts
        ↓
ProjectCard
        ↓
Projects page

and:

data/projects.ts
        ↓
slug lookup
        ↓
ProjectDetail
        ↓
Project case study

This keeps the frontend maintainable.

==================================================
CONTENT DEPTH
==================================================

The client specifically requested MORE CONTENT.

Therefore, each major program/project/story should contain meaningful structured information.

For example, a project should support fields such as:

- title
- slug
- category
- location
- year
- summary
- challenge
- objective
- approach
- implementation
- beneficiaries
- impact
- outcomes
- images
- gallery
- related projects
- related program
- story
- CTA

Only populate fields where factual information is available.

Do NOT invent missing information.

Use:

[CLIENT CONFIRMATION REQUIRED]

where necessary.

==================================================
PROGRAM CONTENT
==================================================

Programs should support:

- title
- slug
- overview
- whyItMatters
- challenge
- approach
- activities
- communitiesServed
- projects
- impact
- stories
- gallery
- FAQs
- relatedPrograms
- CTA

This allows program detail pages to feel substantially richer than the old website.

==================================================
STORY CONTENT
==================================================

Stories should support:

- title
- slug
- category
- date
- location
- hero image
- introduction
- situation
- challenge
- action
- change
- impact
- quote
- gallery
- related project
- related program

Do not fabricate beneficiary quotes.

Only use genuine quotes supplied by the organization.

==================================================
IMPACT CONTENT
==================================================

Impact data should be structured.

Example:

{
  value: 10000,
  suffix: "+",
  label: "Children Educated",
  description: "...",
  category: "Education"
}

Statistics extracted from screenshots must be treated as existing organizational claims and should be verified with the client before final publication.

Do not create impressive-looking fake statistics.

==================================================
IMAGE ARCHITECTURE
==================================================

Because the organization has many authentic photographs:

Create a clean asset structure such as:

src/assets/images/
├── organization/
├── programs/
├── projects/
├── stories/
├── events/
├── gallery/
└── team/

Use descriptive filenames.

Avoid names like:

IMG_1234.jpg

where possible.

Use:

ro-drinking-water-school.jpg

education-classroom.jpg

etc.

Do not use generic stock photography when authentic SRYIA photographs are available.

==================================================
ROUTING
==================================================

Implement:

/
 /about
 /impact
 /programs
 /programs/:slug
 /projects
 /projects/:slug
 /stories
 /stories/:slug
 /events
 /events/:slug
 /gallery
 /resources
 /volunteer
 /partner
 /donate
 /contact
 /404

Use lazy-loaded routes where appropriate.

==================================================
NO FAKE BACKEND BEHAVIOR
==================================================

Forms must NOT pretend that information has been stored.

If no external submission service is configured:

- provide a clear frontend form
- validate inputs
- provide appropriate contact options
- structure the code so an external form provider can be integrated later

Do not show:

"Your message has been saved successfully"

unless an actual submission service confirms it.

Similarly, do not implement fake payment processing.

==================================================
DESIGN REQUIREMENT
==================================================

The final design must be COMPLETELY DIFFERENT from the old website.

The screenshots are used only to understand:

- existing content
- existing pages
- projects
- programs
- statistics
- organization information
- photographs

Do not copy their:

- layout
- colors
- typography
- navbar
- hero
- cards
- footer
- section structure
- visual hierarchy

Build a completely new premium experience.

==================================================
HOMEPAGE QUALITY
==================================================

The homepage is the flagship page.

Do not create a generic NGO template.

Use a storytelling structure such as:

Hero
↓
Human Story
↓
Who We Are
↓
The Challenge
↓
Our Response
↓
Areas of Work
↓
Featured Projects
↓
Impact
↓
Stories of Change
↓
Photo Story
↓
Our Journey
↓
Transparency
↓
Get Involved
↓
Final CTA
↓
Footer

Use varied layouts.

Do NOT turn every section into three cards.

==================================================
ANIMATION
==================================================

Use Framer Motion strategically.

Include:

- hero entrance
- scroll reveals
- image reveals
- staggered sections
- counters
- hover interactions
- page transitions
- gallery transitions

Keep animations:

- smooth
- subtle
- premium
- performant

Support prefers-reduced-motion.

==================================================
QUALITY CHECK BEFORE COMPLETION
==================================================

Run:

npm run build

Then verify:

- zero TypeScript errors
- zero API dependencies
- zero backend imports
- zero console errors
- all routes work
- all dynamic routes work
- all images resolve
- no broken links
- mobile layouts work
- desktop layouts work
- keyboard navigation works
- no horizontal overflow
- animations work smoothly
- loading states work
- 404 page works

Also search the frontend codebase for:

Express
MongoDB
Mongoose
JWT
axios
/api/
localhost backend URLs

and remove anything that is no longer required.

==================================================
FINAL ARCHITECTURE
==================================================

The finished application should be:

React
+
Vite
+
TypeScript
+
Tailwind CSS
+
Framer Motion
+
React Router
+
Static TypeScript Content
+
Authentic SRYIA Assets

No backend.

No database.

No API.

No CMS.

No authentication.

Keep the architecture simple.

Put the engineering effort into:

CONTENT
DESIGN
STORYTELLING
ANIMATIONS
RESPONSIVENESS
ACCESSIBILITY
SEO
PERFORMANCE
USER EXPERIENCE

Proceed with the implementation.