// Theme colours from the logo family, used consistently across sections so each
// area of work keeps its own colour: healthcare = red, water = blue,
// education = indigo, empowerment = green, environment = teal, nutrition = marigold.
// Full class strings live here so Tailwind can see them.

export type Tone = 'teal' | 'red' | 'blue' | 'green' | 'indigo' | 'marigold';

export const tones: Record<Tone, { text: string; bg: string; soft: string; ring: string }> = {
  teal: { text: 'text-primary', bg: 'bg-primary', soft: 'bg-primary-soft', ring: 'border-primary/25' },
  red: { text: 'text-secondary', bg: 'bg-brand-red', soft: 'bg-rose-soft', ring: 'border-secondary/25' },
  blue: { text: 'text-accent', bg: 'bg-accent-bright', soft: 'bg-accent-soft', ring: 'border-accent/25' },
  green: { text: 'text-leaf', bg: 'bg-leaf-bright', soft: 'bg-leaf-soft', ring: 'border-leaf/25' },
  indigo: { text: 'text-indigo', bg: 'bg-indigo', soft: 'bg-indigo-soft', ring: 'border-indigo/25' },
  marigold: { text: 'text-[#A45F00]', bg: 'bg-marigold', soft: 'bg-marigold-soft', ring: 'border-marigold/30' },
};

/** Picks a tone from a category/area name; falls back to the brand teal. */
export const toneFor = (label = ''): Tone => {
  const l = label.toLowerCase();
  if (/health|medical|hospital/.test(l)) return 'red';
  if (/water|wash|sanitation|\bro\b/.test(l)) return 'blue';
  if (/educat|school|literacy|skill/.test(l)) return 'indigo';
  if (/nutrition|maternal|food/.test(l)) return 'marigold';
  if (/women|youth|empower|wellness|sport/.test(l)) return 'green';
  return 'teal';
};
