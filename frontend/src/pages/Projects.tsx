import { useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { ArrowRight, MapPin, ChevronDown } from 'lucide-react';
import { Img } from '../components/common/Img';

const ALL_CATEGORIES = 'All Categories';
const ALL_STATES = 'All States';

const categories = [ALL_CATEGORIES, ...Array.from(new Set(projects.map((p) => p.category)))];
const states = [ALL_STATES, ...(Array.from(new Set(projects.map((p) => p.state).filter(Boolean))) as string[])];

const formatLocation = (location?: string, state?: string) => {
  if (location && state && location !== state) return `${location}, ${state}`;
  return location || state || '';
};

export const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  // The URL is the single source of truth for the filters.
  const activeCategory = searchParams.get('category') || ALL_CATEGORIES;
  const activeState = searchParams.get('state') || ALL_STATES;

  const updateFilters = (category: string, state: string) => {
    const params = new URLSearchParams();
    if (category !== ALL_CATEGORIES) params.set('category', category);
    if (state !== ALL_STATES) params.set('state', state);
    setSearchParams(params, { preventScrollReset: true });
  };

  const filteredProjects = useMemo(
    () =>
      projects.filter((p) => {
        const categoryMatch = activeCategory === ALL_CATEGORIES || p.category === activeCategory;
        const stateMatch = activeState === ALL_STATES || p.state === activeState;
        return categoryMatch && stateMatch;
      }),
    [activeCategory, activeState],
  );

  const hasFilters = activeCategory !== ALL_CATEGORIES || activeState !== ALL_STATES;

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="page-hero pt-32 md:pt-40 pb-10 md:pb-14 bg-background border-b border-line">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-ink-muted">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-line">/</li>
              <li aria-current="page" className="text-ink">Projects</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            eyebrow="Track Record"
            title={<>Our <em>Work</em></>}
            description="Every project begins with a need. Every intervention is designed to create meaningful change."
            alignment="left"
            className="!mb-0"
          />
        </Container>
      </section>

      {/* Filters + grid */}
      <section className="section bg-white">
        <Container>
          <div className="mb-12 flex flex-col gap-6 border-b border-line pb-8 md:flex-row md:items-end md:justify-between">
            <div className="flex flex-col gap-4 sm:flex-row">
              <FilterSelect
                id="filter-category"
                label="Category"
                value={activeCategory}
                options={categories}
                onChange={(v) => updateFilters(v, activeState)}
              />
              <FilterSelect
                id="filter-state"
                label="State"
                value={activeState}
                options={states}
                onChange={(v) => updateFilters(activeCategory, v)}
              />
            </div>
            <div className="flex items-center gap-5 text-[14px] text-ink-muted" aria-live="polite">
              <span>
                <span className="font-semibold text-ink">{filteredProjects.length}</span>{' '}
                {filteredProjects.length === 1 ? 'project' : 'projects'}
              </span>
              {hasFilters && (
                <button
                  type="button"
                  onClick={() => updateFilters(ALL_CATEGORIES, ALL_STATES)}
                  className="font-semibold text-primary link-underline"
                >
                  Clear filters
                </button>
              )}
            </div>
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <AnimatePresence mode="popLayout" initial={false}>
              {filteredProjects.map((project) => (
                <motion.article
                  key={project.id}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                >
                  <Link
                    to={`/projects/${project.slug}`}
                    className="card card-hover group flex h-full flex-col overflow-hidden"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                      {project.images && project.images.length > 0 ? (
                        <Img
                          src={project.images[0]}
                          alt={project.title}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                        />
                      ) : (
                        <div className="flex h-full w-full items-center justify-center text-[14px] text-ink-muted">
                          No Image Available
                        </div>
                      )}
                      <span className="absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                        {project.category}
                      </span>
                      {project.investment && (
                        <span className="absolute right-4 top-4 rounded-full bg-primary-deep/90 px-3 py-1.5 text-[12px] font-semibold text-white">
                          {project.investment}
                        </span>
                      )}
                    </div>

                    <div className="flex grow flex-col p-6 md:p-7">
                      {formatLocation(project.location, project.state) && (
                        <p className="mb-3 flex items-center gap-1.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                          <MapPin className="h-3.5 w-3.5 text-gold" aria-hidden="true" />
                          {formatLocation(project.location, project.state)}
                        </p>
                      )}

                      <h3 className="mb-3 line-clamp-2 font-serif text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary md:text-2xl">
                        {project.title}
                      </h3>

                      <p className="mb-6 line-clamp-3 grow text-[15px] leading-relaxed text-ink-muted">
                        {project.summary}
                      </p>

                      {project.tags && project.tags.length > 0 && (
                        <ul className="mb-6 flex flex-wrap gap-2" aria-label="Tags">
                          {project.tags.slice(0, 3).map((tag) => (
                            <li
                              key={tag}
                              className="rounded-full border border-line px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-ink-muted"
                            >
                              {tag}
                            </li>
                          ))}
                        </ul>
                      )}

                      <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
                        <span className="text-sm font-semibold text-primary">Explore Project</span>
                        <span className="flex h-9 w-9 items-center justify-center rounded-full border border-line text-primary transition-colors duration-300 group-hover:border-primary group-hover:bg-primary group-hover:text-white">
                          <ArrowRight className="h-4 w-4" aria-hidden="true" />
                        </span>
                      </div>
                    </div>
                  </Link>
                </motion.article>
              ))}
            </AnimatePresence>
          </div>

          {filteredProjects.length === 0 && (
            <div className="card mx-auto max-w-xl p-10 text-center">
              <p className="font-serif text-2xl font-semibold text-ink">No projects match these filters.</p>
              <button
                type="button"
                onClick={() => updateFilters(ALL_CATEGORIES, ALL_STATES)}
                className="btn btn-outline mt-6"
              >
                Show all projects
              </button>
            </div>
          )}
        </Container>
      </section>
    </div>
  );
};

interface FilterSelectProps {
  id: string;
  label: string;
  value: string;
  options: string[];
  onChange: (value: string) => void;
}

const FilterSelect = ({ id, label, value, options, onChange }: FilterSelectProps) => (
  <div className="flex flex-col gap-2">
    <label htmlFor={id} className="text-[11px] font-semibold uppercase tracking-[0.2em] text-gold">
      {label}
    </label>
    <div className="relative">
      <select
        id={id}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full appearance-none rounded-full border border-line bg-background py-2.5 pl-5 pr-11 text-[15px] font-medium text-ink outline-none transition-colors hover:border-primary/40 focus:border-primary sm:min-w-[220px]"
      >
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      <ChevronDown
        className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-ink-muted"
        aria-hidden="true"
      />
    </div>
  </div>
);
