import { useState, useEffect, useMemo, useRef, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { galleryImages } from '../data/gallery';
import { projects } from '../data/projects';
import { lenisRef } from '../lib/lenis';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { Img } from '../components/common/Img';

const PAGE_SIZE = 24;
const ALL = 'All';

const dirname = (path: string) => path.slice(0, path.lastIndexOf('/'));

/**
 * gallery.ts only stores a generic "ALL" category, so derive a meaningful
 * category (and project link) from the project the photo belongs to.
 */
const items = galleryImages.map((img) => {
  const raw = decodeURI(img.url);
  const folder = dirname(raw);
  const project =
    projects.find((p) => p.images.includes(raw)) ??
    projects.find((p) => p.images[0] && folder.startsWith(dirname(p.images[0])));
  const category = img.category && img.category !== 'ALL' ? img.category : project?.category ?? 'Other';
  return {
    ...img,
    category,
    projectSlug: img.projectSlug ?? project?.slug,
    projectTitle: project?.title,
  };
});

const categories = [
  ALL,
  ...Array.from(new Set(items.map((i) => i.category))).sort((a, b) =>
    a === 'Other' ? 1 : b === 'Other' ? -1 : a.localeCompare(b),
  ),
];

type GalleryItem = (typeof items)[number];
type View = 'all' | 'project';

const VIEWS: { id: View; label: string }[] = [
  { id: 'all', label: 'All photos' },
  { id: 'project', label: 'By project' },
];

const OTHER_KEY = 'other';

interface ProjectGroup {
  key: string;
  title: string;
  slug?: string;
  images: GalleryItem[];
}

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState(ALL);
  const [view, setView] = useState<View>('all');
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);
  const [lightbox, setLightbox] = useState<{ images: GalleryItem[]; index: number } | null>(null);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);

  const filtered = useMemo(
    () => (activeCategory === ALL ? items : items.filter((i) => i.category === activeCategory)),
    [activeCategory],
  );
  const visible = filtered.slice(0, visibleCount);

  const groups = useMemo(() => {
    const map = new Map<string, ProjectGroup>();
    filtered.forEach((img) => {
      const key = img.projectSlug ?? OTHER_KEY;
      let group = map.get(key);
      if (!group) {
        group = { key, title: img.projectTitle ?? 'Other photos', slug: img.projectSlug, images: [] };
        map.set(key, group);
      }
      group.images.push(img);
    });
    return Array.from(map.values()).sort((a, b) => (a.key === OTHER_KEY ? 1 : b.key === OTHER_KEY ? -1 : 0));
  }, [filtered]);

  const onTabKeyDown = (e: React.KeyboardEvent, idx: number) => {
    let next = -1;
    if (e.key === 'ArrowRight') next = (idx + 1) % VIEWS.length;
    else if (e.key === 'ArrowLeft') next = (idx - 1 + VIEWS.length) % VIEWS.length;
    else if (e.key === 'Home') next = 0;
    else if (e.key === 'End') next = VIEWS.length - 1;
    if (next < 0) return;
    e.preventDefault();
    setView(VIEWS[next].id);
    tabRefs.current[next]?.focus();
  };

  const selectCategory = (cat: string) => {
    setActiveCategory(cat);
    setVisibleCount(PAGE_SIZE);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="page-hero pt-32 md:pt-40 pb-10 md:pb-14 bg-background border-b border-line">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-ink-muted">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-line">/</li>
              <li aria-current="page" className="text-ink">Gallery</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            eyebrow="Our Work on the Ground"
            title={<>Interactive <em>Gallery</em></>}
            description="A visual journey through our projects, communities, and impact."
            alignment="left"
            className="!mb-0"
          />
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          {/* View toggle */}
          <div role="tablist" aria-label="Gallery view" className="mb-6 inline-flex rounded-full border border-line bg-sand p-1">
            {VIEWS.map((v, idx) => {
              const selected = view === v.id;
              return (
                <button
                  key={v.id}
                  ref={(el) => {
                    tabRefs.current[idx] = el;
                  }}
                  id={`gallery-tab-${v.id}`}
                  type="button"
                  role="tab"
                  aria-selected={selected}
                  aria-controls="gallery-panel"
                  tabIndex={selected ? 0 : -1}
                  onClick={() => setView(v.id)}
                  onKeyDown={(e) => onTabKeyDown(e, idx)}
                  className={`rounded-full px-4 py-2 text-[14px] font-semibold transition-colors ${
                    selected ? 'bg-white text-ink shadow-[var(--shadow-soft)]' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {v.label}
                </button>
              );
            })}
          </div>

          {/* Category filters */}
          <div className="mb-8 flex items-center justify-between gap-4 border-b border-line pb-6 md:gap-8">
            <div role="group" aria-label="Filter photos by category" className="no-scrollbar -ml-4 flex min-w-0 flex-1 gap-2 overflow-x-auto pl-4 md:ml-0 md:pl-0">
              {categories.map((cat) => {
                const active = cat === activeCategory;
                return (
                  <button
                    key={cat}
                    type="button"
                    aria-pressed={active}
                    onClick={() => selectCategory(cat)}
                    className={`shrink-0 rounded-full border px-3.5 py-1.5 text-[13px] font-medium transition-colors ${
                      active
                        ? 'border-primary bg-primary text-white'
                        : 'border-line bg-background text-ink-muted hover:border-primary/40 hover:text-primary'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
            <p className="shrink-0 whitespace-nowrap text-[13px] text-ink-muted md:text-[14px]" aria-live="polite">
              {view === 'all' ? (
                <>
                  <span className="hidden sm:inline">Showing </span>
                  <span className="font-semibold text-ink">{visible.length}</span> of {filtered.length}
                  <span className="hidden sm:inline"> photos</span>
                </>
              ) : (
                <>
                  <span className="font-semibold text-ink">{groups.length}</span> {groups.length === 1 ? 'project' : 'projects'}
                </>
              )}
            </p>
          </div>

          <div id="gallery-panel" role="tabpanel" aria-labelledby={`gallery-tab-${view}`}>
          {view === 'all' ? (
          <>
          {/* Grid */}
          <ul className="grid grid-cols-2 gap-3 md:grid-cols-3 md:gap-4 lg:grid-cols-4">
            {visible.map((img, idx) => (
              <li key={img.url}>
                <button
                  type="button"
                  onClick={() => setLightbox({ images: filtered, index: idx })}
                  aria-label={`Open photo: ${img.projectTitle ?? img.caption}`}
                  className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand"
                >
                  <Img
                    src={img.url}
                    alt={img.projectTitle ? `${img.projectTitle}, ${img.caption}` : img.caption}
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                  />
                  <span className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-primary-deep/85 to-transparent p-3 pt-10 text-left opacity-0 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    <span className="block text-[11px] font-semibold uppercase tracking-[0.12em] text-gold-soft">{img.category}</span>
                    <span className="block text-[13px] font-medium text-white line-clamp-1">{img.caption}</span>
                  </span>
                </button>
              </li>
            ))}
          </ul>

          {visibleCount < filtered.length && (
            <div className="mt-12 flex justify-center">
              <button
                type="button"
                onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
                className="btn btn-outline"
              >
                Load more photos
              </button>
            </div>
          )}
          </>
          ) : (
            <div className="space-y-12 md:space-y-16">
              {groups.map((group) => (
                <ProjectRow
                  key={group.key}
                  group={group}
                  onOpen={(index) => setLightbox({ images: group.images, index })}
                />
              ))}
            </div>
          )}
          </div>
        </Container>
      </section>

      <AnimatePresence>
        {lightbox && lightbox.images[lightbox.index] && (
          <Lightbox
            images={lightbox.images}
            index={lightbox.index}
            onChange={(index) => setLightbox((lb) => (lb ? { ...lb, index } : lb))}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

const ProjectRow = ({ group, onOpen }: { group: ProjectGroup; onOpen: (index: number) => void }) => {
  const count = group.images.length;
  return (
    <section aria-labelledby={`group-${group.key}`}>
      <div className="mb-5 flex flex-wrap items-end justify-between gap-x-6 gap-y-2">
        <div className="min-w-0">
          <h2 id={`group-${group.key}`} className="font-serif text-xl font-semibold leading-snug text-ink md:text-2xl">
            {group.title}
          </h2>
          <p className="mt-1 text-[14px] text-ink-muted">
            {count} {count === 1 ? 'photo' : 'photos'}
          </p>
        </div>
        {group.slug && (
          <Link
            to={`/projects/${group.slug}`}
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-primary link-underline"
          >
            View project <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        )}
      </div>
      <ul className="no-scrollbar -mx-4 flex snap-x snap-mandatory scroll-px-4 gap-3 overflow-x-auto px-4 pb-1 md:mx-0 md:scroll-px-0 md:gap-4 md:px-0">
        {group.images.map((img, idx) => (
          <li key={img.url} className="w-[70%] shrink-0 snap-start sm:w-[42%] md:w-[31%] lg:w-[23.5%]">
            <button
              type="button"
              onClick={() => onOpen(idx)}
              aria-label={`Open photo ${idx + 1} of ${count}: ${group.title}`}
              className="group relative block aspect-[4/3] w-full overflow-hidden rounded-2xl bg-sand"
            >
              <Img
                src={img.url}
                alt={img.projectTitle ? `${img.projectTitle}, ${img.caption}` : img.caption}
                width={600}
                height={450}
                loading="lazy"
                decoding="async"
                sizes="(min-width: 1024px) 24vw, (min-width: 768px) 31vw, 70vw"
                className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
              />
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

interface LightboxProps {
  images: GalleryItem[];
  index: number;
  onChange: (index: number) => void;
  onClose: () => void;
}

const Lightbox = ({ images, index, onChange, onClose }: LightboxProps) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const img = images[index];
  const hasPrev = index > 0;
  const hasNext = index < images.length - 1;

  const prev = useCallback(() => hasPrev && onChange(index - 1), [hasPrev, index, onChange]);
  const next = useCallback(() => hasNext && onChange(index + 1), [hasNext, index, onChange]);

  // Scroll lock (works with Lenis) + focus management
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    lenisRef.current?.stop();
    closeRef.current?.focus();
    return () => {
      document.body.style.overflow = overflow;
      lenisRef.current?.start();
      previouslyFocused?.focus?.();
    };
  }, []);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      else if (e.key === 'ArrowRight') next();
      else if (e.key === 'ArrowLeft') prev();
      else if (e.key === 'Tab' && dialogRef.current) {
        const focusables = dialogRef.current.querySelectorAll<HTMLElement>(
          'button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [next, prev, onClose]);

  const navBtn =
    'absolute top-1/2 z-20 -translate-y-1/2 rounded-full bg-white/10 p-3 text-white transition-colors hover:bg-white/20 disabled:cursor-not-allowed disabled:opacity-30';

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label={`Photo ${index + 1} of ${images.length}: ${img.caption}`}
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25 }}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-primary-deep/95 overscroll-contain"
    >
      {/* Click outside to close */}
      <div className="absolute inset-0" onClick={onClose} aria-hidden="true" />

      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label="Close gallery"
        className="absolute right-4 top-4 z-20 rounded-full bg-white/10 p-2.5 text-white transition-colors hover:bg-white/20 md:right-8 md:top-8"
      >
        <X className="h-6 w-6" aria-hidden="true" />
      </button>

      <button type="button" onClick={prev} disabled={!hasPrev} aria-label="Previous photo" className={`${navBtn} left-3 md:left-8`}>
        <ChevronLeft className="h-7 w-7" aria-hidden="true" />
      </button>
      <button type="button" onClick={next} disabled={!hasNext} aria-label="Next photo" className={`${navBtn} right-3 md:right-8`}>
        <ChevronRight className="h-7 w-7" aria-hidden="true" />
      </button>

      <figure className="pointer-events-none relative z-10 flex w-full max-w-5xl flex-col items-center px-14 md:px-24">
        <motion.img
          key={img.url}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          src={img.url}
          alt={img.projectTitle ? `${img.projectTitle}, ${img.caption}` : img.caption}
          decoding="async"
          className="pointer-events-auto max-h-[70vh] w-auto rounded-xl object-contain"
        />
        <figcaption className="pointer-events-auto mt-6 text-center">
          <span className="mb-2 block text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">
            {img.category} · {index + 1} / {images.length}
          </span>
          <span className="mx-auto mb-4 block max-w-2xl font-serif text-lg text-white md:text-xl">{img.caption}</span>
          {img.projectSlug && (
            <Link
              to={`/projects/${img.projectSlug}`}
              onClick={onClose}
              className="inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-gold-soft link-underline"
            >
              Explore Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          )}
        </figcaption>
      </figure>
    </motion.div>
  );
};
