// Responsive image helpers. scripts/image-variants.mjs guarantees that every
// public/*.webp has .w400.webp and .w800.webp siblings.

// Small graphics that are already tiny or must stay crisp at any size.
const EXCLUDE = /^\/(logo\.webp|partners\/|symbols\/|impact_icons\/)/i;

export const srcSetFor = (src?: string) => {
  if (!src || !src.startsWith('/') || !/\.webp$/i.test(src) || /\.w\d+\.webp$/i.test(src)) return undefined;
  if (EXCLUDE.test(decodeURI(src))) return undefined;
  // srcset URLs are whitespace-delimited, so spaces in our folder names must be encoded.
  const url = encodeURI(decodeURI(src));
  const base = url.slice(0, -'.webp'.length);
  return `${base}.w400.webp 400w, ${base}.w800.webp 800w, ${url} 1600w`;
};

/** Default `sizes`: lazy images let the browser use their real layout width ("auto"). */
export const DEFAULT_SIZES = '(max-width: 768px) 100vw, 50vw';
