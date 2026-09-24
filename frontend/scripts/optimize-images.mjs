// Converts every JPEG/PNG referenced from src/ into a compressed WebP sibling
// (same photo, same folder, max 1600px wide) and rewrites the references.
// Safe to re-run: existing WebP files are reused.
import { readFileSync, writeFileSync, existsSync, readdirSync, statSync } from 'node:fs';
import { join, dirname, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const root = join(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');
const src = join(root, 'src');
const RE = /(["'`])(\/[^"'`\n]*?\.(?:jpe?g|png))\1/gi;

const walk = (d) => readdirSync(d).flatMap((f) => {
  const p = join(d, f);
  return statSync(p).isDirectory() ? walk(p) : /\.(tsx?|css)$/.test(f) ? [p] : [];
});

let converted = 0, saved = 0, missing = [];
for (const file of walk(src)) {
  let text = readFileSync(file, 'utf8');
  const matches = [...text.matchAll(RE)];
  if (!matches.length) continue;
  for (const [, , ref] of matches) {
    const disk = join(pub, decodeURI(ref));
    if (!existsSync(disk)) { missing.push(ref); continue; }
    const webpRef = ref.slice(0, -extname(ref).length) + '.webp';
    const webpDisk = join(pub, decodeURI(webpRef));
    if (!existsSync(webpDisk)) {
      const before = statSync(disk).size;
      await sharp(disk).rotate().resize({ width: 1600, withoutEnlargement: true }).webp({ quality: 78 }).toFile(webpDisk);
      saved += before - statSync(webpDisk).size;
      converted++;
    }
    text = text.split(ref).join(webpRef);
  }
  writeFileSync(file, text);
}
console.log(`converted ${converted} images, saved ${(saved / 1048576).toFixed(1)} MB`);
if (missing.length) console.log('missing on disk:', [...new Set(missing)]);
