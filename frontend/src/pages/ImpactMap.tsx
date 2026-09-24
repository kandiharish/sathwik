import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';
import { Img } from '../components/common/Img';

// Extract unique states that actually have projects
const uniqueStates = Array.from(new Set(projects.filter(p => p.state).map(p => p.state as string))).sort();

export const ImpactMap = () => {
  const [activeState, setActiveState] = useState<string>(uniqueStates[0]);

  const stateProjects = useMemo(() => {
    return projects.filter(p => p.state === activeState);
  }, [activeState]);

  return (
    <div className="bg-background min-h-screen">
      <section className="page-hero pt-32 pb-10 md:pt-40 md:pb-14">
        <Container>
          <Link
            to="/impact"
            className="inline-flex items-center gap-2 text-sm font-medium text-ink-muted hover:text-primary transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> Back to Impact Dashboard
          </Link>

          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              eyebrow="Where We Work"
              title={<>Geographic <em>Reach</em></>}
              description={`Explore our project footprint across ${uniqueStates.length} states in India. Select a region to view local initiatives.`}
              alignment="left"
              className="!mb-0"
            />
          </div>
        </Container>
      </section>

      <section className="pb-16 md:pb-24">
        <Container>
          <div className="grid lg:grid-cols-[minmax(260px,1fr)_2fr] gap-10 lg:gap-12 items-start">
            {/* States list */}
            <div className="card p-4 md:p-5 lg:sticky lg:top-28">
              <h2 className="text-[11px] font-semibold tracking-[0.12em] uppercase text-gold mb-3 px-3 pt-2">Regions</h2>
              <ul className="flex flex-col gap-1" role="list">
                {uniqueStates.map((state) => {
                  const count = projects.filter(p => p.state === state).length;
                  const isActive = activeState === state;
                  return (
                    <li key={state}>
                      <button
                        type="button"
                        onClick={() => setActiveState(state)}
                        aria-pressed={isActive}
                        className={`flex items-center justify-between w-full px-4 py-3.5 rounded-xl text-left transition-colors duration-300 ${
                          isActive ? 'bg-primary text-white' : 'hover:bg-sand text-ink'
                        }`}
                      >
                        <span className="font-medium text-[15px]">{state}</span>
                        <span
                          className={`text-[12px] font-semibold px-2.5 py-1 rounded-full ${
                            isActive ? 'bg-white/15 text-white' : 'bg-sand text-ink-muted'
                          }`}
                        >
                          {count} Project{count !== 1 ? 's' : ''}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Projects in state */}
            <div aria-live="polite">
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-5 h-5 text-gold" aria-hidden="true" />
                <h2 className="font-serif font-semibold text-2xl md:text-3xl text-ink">
                  Projects in {activeState}
                </h2>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                {stateProjects.map((project) => (
                  <motion.article
                    key={`${activeState}-${project.id}`}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative card card-hover overflow-hidden flex flex-col h-full"
                  >
                    <div className="relative w-full aspect-[4/3] overflow-hidden bg-sand">
                      {project.images?.[0] && (
                        <Img
                          src={project.images[0]}
                          alt={project.title}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      )}
                      <span className="absolute top-4 left-4 px-3 py-1 bg-white text-primary rounded-full text-[11px] font-semibold uppercase tracking-[0.14em]">
                        {project.category}
                      </span>
                    </div>

                    <div className="p-6 flex flex-col flex-grow">
                      <h3 className="font-serif font-semibold text-xl text-ink leading-snug mb-2 line-clamp-2">
                        <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus:outline-none">
                          {project.title}
                        </Link>
                      </h3>
                      <p className="text-[15px] leading-relaxed text-ink-muted mb-6 line-clamp-2">{project.summary}</p>

                      <div className="mt-auto pt-4 border-t border-line flex items-center justify-between">
                        <span className="text-[12px] font-semibold text-ink-muted uppercase tracking-[0.12em]">
                          {project.location || project.state}
                        </span>
                        <span
                          className="w-8 h-8 rounded-full bg-sand flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors"
                          aria-hidden="true"
                        >
                          <ArrowRight className="w-4 h-4" />
                        </span>
                      </div>
                    </div>
                  </motion.article>
                ))}
              </div>
            </div>
          </div>
        </Container>
      </section>
    </div>
  );
};
