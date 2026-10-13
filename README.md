# Sathwik Rural and Youth Integrated Association (SRAYI): Website

Official website of **Sathwik Rural and Youth Integrated Association (SRAYI)**, a Hyderabad-based non-profit
working since 2015 on rural healthcare, clean water, education, youth and women empowerment, and community
infrastructure across India.

**Live site:** [sathwikrural.org](https://sathwikrural.org)

---

## Tech stack

| Area | Tools |
| --- | --- |
| Framework | React 19, TypeScript, Vite 8 |
| Styling | Tailwind CSS 4 (design tokens in `src/index.css`) |
| Motion | Framer Motion, Lenis smooth scrolling (desktop only) |
| Routing | React Router 7 (each page is lazy-loaded) |
| Forms | React Hook Form + Zod |
| Icons | Lucide |
| Images | Sharp (WebP conversion and responsive sizes) |
| Hosting | Vercel (deploys automatically from `main`) |

## Getting started

Requires **Node.js 20.19 or newer**.

```bash
cd frontend
npm install
npm run dev        # http://localhost:5173
```

| Command | What it does |
| --- | --- |
| `npm run dev` | Start the local dev server |
| `npm run build` | Type-check, build to `dist/`, and pre-render every page for SEO |
| `npm run preview` | Serve the production build locally |
| `npm run lint` | Lint the code with Oxlint |
| `npm run optimize:images` | Convert any JPEG/PNG referenced in the code to WebP and update the references |

`dev` and `build` first run `scripts/image-variants.mjs`, which creates the 400px and 800px copies of every
WebP image automatically.

## Project structure

```text
.
├── README.md
└── frontend/                     The website (Vercel root directory)
    ├── index.html                Page shell, default SEO tags, structured data
    ├── vercel.json               Caching and security headers
    ├── scripts/
    │   ├── image-variants.mjs    Makes photo.w400.webp / photo.w800.webp for every photo.webp
    │   ├── optimize-images.mjs   JPEG/PNG → WebP converter
    │   └── seo-prerender.mjs     Writes an HTML file per route, sitemap.xml and 404.html
    ├── public/                   Static files, served from the site root
    │   ├── images/
    │   │   ├── brand/            Logo
    │   │   ├── partners/         CSR partner logos
    │   │   ├── projects/<name>/  Project photos, numbered 01.webp, 02.webp…
    │   │   ├── about/  cta/  focus/  stories/  tunnel/  gallery-strip/   Section imagery
    │   │   └── maps/             India map used on the About page
    │   ├── reports/
    │   │   ├── pdf/              Downloadable project reports and press notes
    │   │   └── <report>/         Photos taken from each report
    │   ├── videos/               Home page hero videos
    │   ├── og-cover.jpg          Image shown when a link is shared on social media
    │   └── robots.txt
    └── src/
        ├── main.tsx  App.tsx     Entry point and routes
        ├── index.css             Design system: colours, type, buttons, cards, effects
        ├── components/
        │   ├── layout/           Navbar, Footer, page shell, page hero, back-to-top
        │   ├── home/             Sections of the home page
        │   ├── about/            About page sections
        │   ├── reports/          Report cards and rail
        │   ├── ui/               Reusable pieces: Button, SectionHeading, Lightbox…
        │   └── common/           Image component, motion controller, form helpers
        ├── pages/                One file per route
        ├── data/                 All website content (see below)
        ├── lib/                  SEO, route titles, image and scroll helpers
        └── types/                Shared TypeScript types
```

## Editing content

Text and photos live in `frontend/src/data/`, so most updates don't touch any component code.

| File | Content |
| --- | --- |
| `settings.ts` | Phone, email, address, working hours, social links |
| `programs.ts` | The four programs and their initiatives |
| `projects.ts` | Every project: summary, location, partner, investment, photos, press note |
| `projectsList.ts` | The photo list for each project folder in `public/images/projects/` |
| `reports.ts` | Photographic project reports (PDF, page count, cover, photos) |
| `stories.ts` | Stories of change and beneficiary quotes |
| `voices.ts` | Slides of the home page "Voices from the Ground" section |
| `gallery.ts` | Photos on the Gallery page |
| `impact.ts` | Headline impact numbers |

### Adding a new project

1. Convert the photos to WebP and save them as `public/images/projects/<project-name>/01.webp`, `02.webp`…
   (`npm run optimize:images` converts JPEGs that are already referenced).
2. Add the photo list to `src/data/projectsList.ts`, or list the photos directly in the project entry.
3. Add an entry to `src/data/projects.ts` with a unique `slug`; it appears at `/projects/<slug>`.
4. Optional: put a press note PDF in `public/reports/pdf/` and link it with `pressNote`.
5. Optional: add a slide to `src/data/voices.ts` so the service appears on the home page.

Run `npm run build` before pushing. It fails on type errors, and the pre-render step picks up the new page
for the sitemap automatically.

### Content guidelines

- State only facts that a report, press note or photo supports. Never put words in a person's mouth: use a
  "From the field" note in `voices.ts` unless the beneficiary has agreed to be quoted.
- Use WebP for photos (max 1600px wide). Keep file and folder names lowercase with hyphens, no spaces.

## Deployment

The site is hosted on Vercel with **Root Directory = `frontend`**.

- Pushing to `main` deploys to production automatically. Every other branch gets a preview URL.
- Build command `npm run build`, output directory `dist`.
- The domain `sathwikrural.org` is registered at GoDaddy and points to Vercel through DNS: an `A` record
  for `@` and a `CNAME` for `www`.
- If the domain changes, update `SITE_URL` in `src/lib/seo.ts`, the URLs in `index.html`, and
  `public/robots.txt`.

## Notes

- **Contact and Volunteer forms** open the visitor's email app with the message filled in (there is no
  backend). To deliver messages straight to the inbox, connect a form service such as Web3Forms or
  Formspree in `src/pages/Contact.tsx` and `src/pages/Volunteer.tsx`.
- **Accessibility and motion:** animations respect the visitor's "reduce motion" setting, and carousels
  pause when off-screen or hovered.

## Contact

Sathwik Rural and Youth Integrated Association (SRAYI) · Hyderabad, Telangana, India ·
[srayiassociation.ngo@gmail.com](mailto:srayiassociation.ngo@gmail.com)
