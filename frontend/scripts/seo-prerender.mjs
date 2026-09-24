// Post-build SEO step.
// 1. Writes dist/<route>/index.html for every known route with the correct <title>,
//    description, canonical and Open Graph tags baked in, so crawlers and link
//    previews (WhatsApp, LinkedIn, Facebook) see page-specific metadata without JS,
//    and deep links work on any static host.
// 2. Regenerates dist/sitemap.xml from the same route list.
// 3. Writes dist/404.html (noindex) as the SPA fallback for unknown paths.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { createServer } from 'vite';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');

const server = await createServer({ root, logLevel: 'error', server: { middlewareMode: true, hmr: false }, appType: 'custom' });
const load = (p) => server.ssrLoadModule(p);
const [{ routeMeta }, { SITE_URL, DEFAULT_IMAGE }, { projects }, { stories }, { programs }] = await Promise.all([
  load('/src/lib/routeMeta.ts'),
  load('/src/lib/seo.ts'),
  load('/src/data/projects.ts'),
  load('/src/data/stories.ts'),
  load('/src/data/programs.ts'),
]);
await server.close();

const clip = (s = '', n = 158) => {
  const t = String(s).replace(/\s+/g, ' ').trim();
  return t.length <= n ? t : t.slice(0, t.lastIndexOf(' ', n - 1)) + '…';
};

const pages = [
  ...Object.entries(routeMeta).map(([path, m]) => ({ path, ...m })),
  ...programs.map((p) => ({
    path: `/programs/${p.slug}`,
    title: `${p.title} | Programs | SATHWIK`,
    description: clip(p.overview),
    image: p.coverImage,
  })),
  ...projects.map((p) => ({
    path: `/projects/${p.slug}`,
    title: `${p.title} | SATHWIK Projects`,
    description: clip(p.summary),
    image: p.images?.[0],
    type: 'article',
  })),
  ...stories.map((s) => ({
    path: `/stories/${s.slug}`,
    title: `${s.title} | SATHWIK Stories`,
    description: clip(s.situation ?? s.impact),
    image: s.heroImage,
    type: 'article',
  })),
];

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;');
const abs = (u) => (u.startsWith('http') ? u : SITE_URL + encodeURI(u));
const template = readFileSync(join(dist, 'index.html'), 'utf8');

const render = (page, { noindex = false } = {}) => {
  const url = abs(page.path === '/' ? '/' : page.path);
  const image = abs(page.image || DEFAULT_IMAGE);
  const set = (html, re, value) => html.replace(re, (_, a, b) => `${a}${esc(value)}${b}`);
  let html = template;
  html = html.replace(/<title>[^<]*<\/title>/, `<title>${esc(page.title)}</title>`);
  html = set(html, /(<meta name="description" content=")[^"]*(")/, page.description);
  html = set(html, /(<link rel="canonical" href=")[^"]*(")/, url);
  html = set(html, /(<meta property="og:url" content=")[^"]*(")/, url);
  html = set(html, /(<meta property="og:type" content=")[^"]*(")/, page.type || 'website');
  html = set(html, /(<meta property="og:title" content=")[^"]*(")/, page.title);
  html = set(html, /(<meta property="og:description" content=")[^"]*(")/, page.description);
  html = set(html, /(<meta property="og:image" content=")[^"]*(")/, image);
  html = set(html, /(<meta name="twitter:url" content=")[^"]*(")/, url);
  html = set(html, /(<meta name="twitter:title" content=")[^"]*(")/, page.title);
  html = set(html, /(<meta name="twitter:description" content=")[^"]*(")/, page.description);
  html = set(html, /(<meta name="twitter:image" content=")[^"]*(")/, image);
  if (page.image) html = html.replace(/\s*<meta property="og:image:(width|height|alt)"[^>]*>/g, '');
  if (noindex) html = set(html, /(<meta name="robots" content=")[^"]*(")/, 'noindex, follow');
  return html;
};

for (const page of pages) {
  const out = page.path === '/' ? join(dist, 'index.html') : join(dist, ...page.path.split('/').filter(Boolean), 'index.html');
  mkdirSync(dirname(out), { recursive: true });
  writeFileSync(out, render(page));
}

writeFileSync(
  join(dist, '404.html'),
  render({ path: '/404', title: 'Page Not Found | SATHWIK', description: 'The page you are looking for could not be found.' }, { noindex: true }),
);

const today = new Date().toISOString().slice(0, 10);
const priority = (p) => (p === '/' ? '1.0' : p.split('/').length > 2 ? '0.6' : '0.8');
const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${pages
  .map((p) => `  <url><loc>${abs(p.path)}</loc><lastmod>${today}</lastmod><priority>${priority(p.path)}</priority></url>`)
  .join('\n')}
</urlset>
`;
writeFileSync(join(dist, 'sitemap.xml'), sitemap);
console.log(`seo-prerender: wrote ${pages.length} route documents + sitemap.xml + 404.html`);
