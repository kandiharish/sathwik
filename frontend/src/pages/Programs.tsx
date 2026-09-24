import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/Button';
import { programs, getInitiativeGroups } from '../data/programs';
import { projects } from '../data/projects';
import { Img } from '../components/common/Img';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export const Programs = () => {
  const [searchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  const [highlighted, setHighlighted] = useState<string | null>(null);

  // Backward compatibility: /programs?tab=prog-education scrolls to and highlights that program.
  useEffect(() => {
    if (!tabParam || !programs.some((p) => p.id === tabParam)) return;
    const el = document.getElementById(tabParam);
    if (!el) return;
    const frame = requestAnimationFrame(() => el.scrollIntoView({ behavior: 'smooth', block: 'start' }));
    setHighlighted(tabParam);
    const timer = window.setTimeout(() => setHighlighted(null), 2400);
    return () => {
      cancelAnimationFrame(frame);
      window.clearTimeout(timer);
    };
  }, [tabParam]);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="page-hero pt-32 pb-10 md:pt-40 md:pb-14 bg-background border-b border-line">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="eyebrow eyebrow-center justify-center mb-6"
            >
              What We Do
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="font-serif font-semibold text-ink tracking-tight leading-[1.08] text-4xl md:text-6xl mb-6"
            >
              Programs &amp; <em className="italic font-medium text-primary">Initiatives</em>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="lead max-w-2xl mx-auto"
            >
              Discover our comprehensive initiatives designed to foster self-reliance and sustainable development.
            </motion.p>
          </div>

          {/* Quick index */}
          <nav aria-label="Programs" className="mt-12">
            <ul className="flex flex-wrap justify-center gap-3">
              {programs.map((program) => (
                <li key={program.id}>
                  <Link
                    to={`/programs/${program.slug}`}
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-white px-5 py-2.5 text-sm font-medium text-ink hover:border-primary hover:text-primary transition-colors"
                  >
                    {program.title}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </Container>
      </section>

      {/* Program rows */}
      <section className="section bg-white">
        <Container>
          <div className="space-y-20 md:space-y-28">
            {programs.map((program, idx) => {
              const related = projects.filter((p) => p.programId === program.id);
              const reversed = idx % 2 === 1;
              const isHighlighted = highlighted === program.id;
              const highlights = program.activities?.length
                ? program.activities
                : getInitiativeGroups(program).flatMap((g) => g.items.map((i) => i.title));
              return (
                <motion.article
                  key={program.id}
                  id={program.id}
                  {...fadeUp}
                  className={`scroll-mt-28 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center rounded-3xl transition-shadow duration-700 ${
                    isHighlighted ? 'ring-2 ring-gold ring-offset-8 ring-offset-white' : ''
                  }`}
                >
                  <Link
                    to={`/programs/${program.slug}`}
                    className={`group lg:col-span-6 block ${reversed ? 'lg:order-2' : ''}`}
                    aria-hidden="true"
                    tabIndex={-1}
                  >
                    <div data-reveal="wipe" className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand border border-line">
                      {program.coverImage && (
                        <Img
                          src={program.coverImage}
                          alt={program.title}
                          width={1200}
                          height={900}
                          loading={idx === 0 ? 'eager' : 'lazy'}
                          decoding="async"
                          className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                        />
                      )}
                    </div>
                  </Link>

                  <div className={`lg:col-span-6 ${reversed ? 'lg:order-1' : ''}`}>
                    <span className="font-serif text-sm text-gold" aria-hidden="true">
                      {String(idx + 1).padStart(2, '0')}
                    </span>
                    <h2 className="mt-2 font-serif font-semibold text-3xl md:text-4xl text-ink tracking-tight leading-tight">
                      <Link to={`/programs/${program.slug}`} className="hover:text-primary transition-colors">
                        {program.title}
                      </Link>
                    </h2>
                    <p className="mt-5 text-base md:text-[17px] leading-relaxed text-ink-muted">{program.overview}</p>

                    {highlights.length > 0 && (
                      <ul className="mt-7 grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                        {highlights.map((activity) => (
                          <li key={activity} className="flex items-start gap-3 text-[15px] text-ink">
                            <Check className="w-4 h-4 mt-1 shrink-0 text-primary" aria-hidden="true" />
                            <span>{activity}</span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {program.impactStats && program.impactStats.length > 0 && (
                      <dl className="mt-8 flex flex-wrap gap-x-10 gap-y-4 border-t border-line pt-6">
                        {program.impactStats.map((stat) => (
                          <div key={stat.label} className="flex flex-col-reverse">
                            <dt className="mt-1 text-[12px] font-medium uppercase tracking-[0.14em] text-ink-muted">
                              {stat.label}
                            </dt>
                            <dd className="font-serif font-semibold text-3xl text-primary tracking-tight">
                              {stat.prefix}{stat.value}{stat.suffix}
                            </dd>
                          </div>
                        ))}
                      </dl>
                    )}

                    {related.length > 0 && (
                      <div className="mt-8">
                        <h3 className="text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted mb-3">
                          Featured Projects
                        </h3>
                        <ul className="flex flex-wrap gap-2">
                          {related.slice(0, 4).map((project) => (
                            <li key={project.id}>
                              <Link
                                to={`/projects/${project.slug}`}
                                className="inline-block rounded-full bg-sand px-3.5 py-1.5 text-[13px] text-ink hover:bg-primary-soft hover:text-primary transition-colors"
                              >
                                {project.title}
                              </Link>
                            </li>
                          ))}
                          {related.length > 4 && (
                            <li className="inline-block px-2 py-1.5 text-[13px] text-ink-muted">
                              +{related.length - 4} more
                            </li>
                          )}
                        </ul>
                      </div>
                    )}

                    <div className="mt-9">
                      <ButtonLink to={`/programs/${program.slug}`} variant="outline">
                        Explore program <ArrowRight className="w-4 h-4" aria-hidden="true" />
                      </ButtonLink>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="section bg-primary-deep text-white">
        <Container>
          <SectionHeading
            dark
            eyebrow="Get Involved"
            title={<>Partner with us to <em>scale impact</em></>}
            description="Support a program or collaborate with SRAYI Association on your next CSR initiative."
            className="!mb-10"
          />
          <div className="flex flex-wrap justify-center gap-3">
            <ButtonLink to="/donate" variant="donate" size="lg">Donate now</ButtonLink>
            <ButtonLink to="/contact" variant="ghost-light" size="lg">Contact us</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
};
