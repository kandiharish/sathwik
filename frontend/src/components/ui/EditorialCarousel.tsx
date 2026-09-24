import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, ChevronLeft, ChevronRight, MapPin } from 'lucide-react';
import type { Project } from '../../types/content';
import { Img } from '../common/Img';

interface EditorialCarouselProps {
  projects: Project[];
}

const FALLBACK_IMAGE = "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.webp";

export const EditorialCarousel: React.FC<EditorialCarouselProps> = ({ projects }) => {
  const trackRef = useRef<HTMLUListElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const updateControls = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
  }, []);

  useEffect(() => {
    updateControls();
    const el = trackRef.current;
    if (!el) return;
    el.addEventListener('scroll', updateControls, { passive: true });
    window.addEventListener('resize', updateControls);
    return () => {
      el.removeEventListener('scroll', updateControls);
      window.removeEventListener('resize', updateControls);
    };
  }, [updateControls]);

  const scrollByCard = (dir: 1 | -1) => {
    const el = trackRef.current;
    if (!el) return;
    const card = el.querySelector('li');
    const step = card ? card.getBoundingClientRect().width + 24 : el.clientWidth * 0.8;
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    el.scrollBy({ left: dir * step, behavior: reduce ? 'auto' : 'smooth' });
  };

  const controlClass =
    'flex h-11 w-11 items-center justify-center rounded-full border border-line bg-white text-primary transition-colors hover:bg-primary hover:text-white hover:border-primary disabled:opacity-40 disabled:pointer-events-none';

  return (
    <div role="region" aria-roledescription="carousel" aria-label="Featured initiatives">
      <ul
        ref={trackRef}
        className="-mx-4 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-px-4 px-4 pt-2 pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {projects.map((project, index) => (
          <li
            key={project.id}
            className="w-[85%] shrink-0 snap-start sm:w-[60%] lg:w-[calc((100%-3rem)/3)]"
            aria-roledescription="slide"
            aria-label={`${index + 1} of ${projects.length}`}
          >
            <article className="card card-hover group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                <Img
                  src={project.images?.[0] || FALLBACK_IMAGE}
                  alt={project.title}
                  width={640}
                  height={480}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
                <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                  {project.category}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl md:text-[22px] font-semibold leading-snug text-ink mb-2 line-clamp-2">
                  {project.title}
                </h3>
                {project.location && (
                  <p className="mb-3 flex items-center gap-1.5 text-[13px] font-medium uppercase tracking-wider text-ink-muted">
                    <MapPin className="h-3.5 w-3.5 text-secondary" aria-hidden="true" />
                    {project.location}
                  </p>
                )}
                {project.response && (
                  <p className="mb-6 text-[15px] leading-relaxed text-ink-muted line-clamp-3">{project.response}</p>
                )}
                <Link
                  to={`/projects/${project.slug}`}
                  className="mt-auto inline-flex w-max items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                  aria-label={`View series: ${project.title}`}
                >
                  View Series <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </article>
          </li>
        ))}
      </ul>

      <div className="mt-8 flex items-center justify-end gap-3">
        <button type="button" className={controlClass} onClick={() => scrollByCard(-1)} disabled={!canPrev} aria-label="Previous initiatives">
          <ChevronLeft className="h-5 w-5" aria-hidden="true" />
        </button>
        <button type="button" className={controlClass} onClick={() => scrollByCard(1)} disabled={!canNext} aria-label="Next initiatives">
          <ChevronRight className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>
    </div>
  );
};
