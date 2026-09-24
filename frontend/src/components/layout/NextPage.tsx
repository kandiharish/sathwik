import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Container } from './Container';

type Target = { to: string; label: string; eyebrow: string };

const sequence: { path: string; label: string }[] = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/programs', label: 'Our Programs' },
  { path: '/projects', label: 'Our Projects' },
  { path: '/impact', label: 'Our Impact' },
  { path: '/stories', label: 'Stories' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact Us' },
  { path: '/donate', label: 'Donate' },
  { path: '/volunteer', label: 'Volunteer' },
];

const parents: Record<string, Target> = {
  programs: { to: '/programs', label: 'Back to all programs', eyebrow: 'Programs' },
  projects: { to: '/projects', label: 'Back to all projects', eyebrow: 'Projects' },
  stories: { to: '/stories', label: 'Back to all stories', eyebrow: 'Stories' },
  impact: { to: '/impact', label: 'Back to Our Impact', eyebrow: 'Impact' },
};

const resolve = (pathname: string): Target | null => {
  const path = pathname.length > 1 ? pathname.replace(/\/+$/, '') : pathname;
  const i = sequence.findIndex((s) => s.path === path);
  if (i !== -1) {
    const next = sequence[(i + 1) % sequence.length];
    return { to: next.path, label: next.label, eyebrow: 'Next' };
  }
  const segments = path.split('/').filter(Boolean);
  if (segments.length === 2 && parents[segments[0]]) return parents[segments[0]];
  if (path === '/faq') return { to: '/contact', label: 'Contact Us', eyebrow: 'Next' };
  return null; // Unknown routes (404) get no band.
};

/** Full-width "continue" band at the foot of each page, linking to the next page in the site sequence. */
export const NextPage = ({ pathname }: { pathname: string }) => {
  const target = resolve(pathname);
  if (!target) return null;

  return (
    <nav aria-label="Continue" className="bg-sand border-t border-line">
      <Container>
        <Link to={target.to} className="group flex items-center justify-between gap-6 py-12 md:py-16">
          <span className="min-w-0">
            <span className="eyebrow block">{target.eyebrow}</span>
            <span className="mt-2 block font-serif font-semibold tracking-tight text-ink text-3xl md:text-5xl leading-tight transition-colors group-hover:text-primary">
              {target.label}
            </span>
          </span>
          <span className="flex h-12 w-12 md:h-16 md:w-16 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white">
            <ArrowRight
              className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 ease-out group-hover:translate-x-1 motion-reduce:transition-none motion-reduce:group-hover:translate-x-0"
              aria-hidden="true"
            />
          </span>
        </Link>
      </Container>
    </nav>
  );
};
