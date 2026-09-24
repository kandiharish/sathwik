// Generates responsive copies of every WebP in public/ next to the original:
//   photo.webp -> photo.w400.webp, photo.w800.webp
// src/lib/images.ts builds srcSet attributes from this naming convention, so every
// .webp must have both variants. Runs automatically before `dev` and `build`;
// existing variants are skipped, so re-runs are fast.
import { readdirSync, statSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
import sharp from 'sharp';

const pub = join(dirname(fileURLToPath(import.meta.url)), '..', 'public');
const WIDTHS = [400, 800];

const walk = (d) =>
  readdirSync(d).flatMap((f) => {
    const p = join(d, f);
    return statSync(p).isDirectory() ? walk(p) : [p];
  });

const sources = walk(pub).filter((p) => /\.webp$/i.test(p) && !/\.w\d+\.webp$/i.test(p));
let made = 0;
await Promise.all(
  sources.map(async (file) => {
    for (const w of WIDTHS) {
      const out = file.replace(/\.webp$/i, `.w${w}.webp`);
      if (existsSync(out)) continue;
      await sharp(file).resize({ width: w, withoutEnlargement: true }).webp({ quality: 72 }).toFile(out);
      made++;
    }
  }),
);
console.log(`image-variants: ${sources.length} images, ${made} new variants`);
