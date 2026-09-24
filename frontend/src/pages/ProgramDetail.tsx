import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { Link, useParams } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Check, MapPin, Users } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/Button';
import { programs, getInitiativeGroups } from '../data/programs';
import { projects } from '../data/projects';
import { usePageMeta, breadcrumbs } from '../lib/seo';
import { Img } from '../components/common/Img';
import { scrollToElement } from '../lib/lenis';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

/** Fixed navbar (~76px) + sub-nav (~50px) + breathing room. */
const NAV_OFFSET = 136;
const SCROLL_MT = 'scroll-mt-[136px]';

interface SubNavItem {
  id: string;
  label: string;
}

const paragraphs = (text?: string) => (text ? text.split(/\n\s*\n/).filter(Boolean) : []);

export const ProgramDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const program = programs.find((p) => p.slug === slug);

  usePageMeta(
    program
      ? {
          title: `${program.title} | Programs | SATHWIK`,
          description: program.overview,
          path: `/programs/${program.slug}`,
          image: program.coverImage,
          type: 'article',
          jsonLd: [
            breadcrumbs([
              { name: 'Programs', path: '/programs' },
              { name: program.title, path: `/programs/${program.slug}` },
            ]),
          ],
        }
      : null,
  );

  if (!program) {
    return (
      <section className="section bg-background min-h-[70vh] flex items-center pt-40">
        <Container className="text-center">
          <span className="eyebrow eyebrow-center justify-center mb-5">Programs</span>
          <h1 className="display-title mb-5">Program not found</h1>
          <p className="lead max-w-xl mx-auto mb-10">
            We couldn't find the program you were looking for. It may have moved. Please browse all of our programs instead.
          </p>
          <ButtonLink to="/programs" variant="primary">
            <ArrowLeft className="w-4 h-4" aria-hidden="true" /> View all programs
          </ButtonLink>
        </Container>
      </section>
    );
  }

  const groups = getInitiativeGroups(program);
  const relatedProjects = projects.filter((p) => p.programId === program.id);
  const otherPrograms = programs.filter((p) => p.id !== program.id);
  const hasChallengeOrApproach = Boolean(program.challenge || program.approach);
  const hasStats = Boolean(program.impactStats && program.impactStats.length > 0);
  const hasActivities = Boolean(program.activities?.length || program.communitiesServed);

  const sections: SubNavItem[] = [
    { id: 'overview', label: 'Overview' },
    ...(program.intro || hasChallengeOrApproach
      ? [{ id: 'challenge', label: hasChallengeOrApproach ? 'Challenge & Approach' : 'Introduction' }]
      : []),
    ...(groups.length > 0 ? [{ id: 'initiatives', label: 'Initiatives' }] : []),
    ...(hasActivities ? [{ id: 'activities', label: 'Activities' }] : []),
    ...(hasStats ? [{ id: 'impact', label: 'Impact' }] : []),
    ...(relatedProjects.length > 0 ? [{ id: 'projects', label: 'Projects' }] : []),
  ];

  return (
    <div className="bg-background">
      {/* Hero */}
      <section id="overview" className={`page-hero relative pt-32 pb-12 md:pt-40 md:pb-16 bg-background ${SCROLL_MT}`}>
        <Container>
          <nav aria-label="Breadcrumb" className="mb-10 text-[13px] text-ink-muted">
            <ol className="flex flex-wrap items-center gap-2">
              <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
              <li aria-hidden="true">/</li>
              <li><Link to="/programs" className="link-underline hover:text-primary">Programs</Link></li>
              <li aria-hidden="true">/</li>
              <li aria-current="page" className="text-ink">{program.title}</li>
            </ol>
          </nav>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-6"
            >
              <span className="eyebrow mb-5">Our Programs</span>
              <h1 className="font-serif font-semibold text-ink tracking-tight leading-[1.08] text-4xl md:text-5xl lg:text-[3.75rem] mb-6">
                {program.title}
              </h1>
              <p className="lead max-w-xl">{program.overview}</p>
              <div className="flex flex-wrap gap-3 mt-10">
                <ButtonLink to="/donate" variant="donate">Support this program</ButtonLink>
                <ButtonLink to="/contact" variant="outline">Partner with us</ButtonLink>
              </div>
            </motion.div>

            {program.coverImage && (
              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="lg:col-span-6"
              >
                <div data-reveal="wipe" className="relative aspect-[4/3] rounded-2xl overflow-hidden bg-sand border border-line">
                  <Img
                    src={program.coverImage}
                    alt={program.title}
                    width={1200}
                    height={900}
                    fetchPriority="high"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
          </div>

        </Container>
      </section>

      {sections.length > 1 && <ProgramSubNav items={sections} />}

      {/* Intro + Challenge / Approach */}
      {(program.intro || hasChallengeOrApproach) && (
        <section id="challenge" className={`section bg-white border-b border-line ${SCROLL_MT}`}>
          <Container>
            {program.intro && (
              <motion.p {...fadeUp} className="font-serif text-2xl md:text-[1.85rem] leading-snug text-ink max-w-4xl mb-16 md:mb-20">
                {program.intro}
              </motion.p>
            )}
            {hasChallengeOrApproach && (
              <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
                {program.challenge && (
                  <motion.div {...fadeUp}>
                    <span className="eyebrow mb-4">The Challenge</span>
                    <h2 className="font-serif font-semibold text-2xl md:text-3xl text-ink mb-4">Why it matters</h2>
                    <p className="text-base leading-relaxed text-ink-muted">{program.challenge}</p>
                  </motion.div>
                )}
                {program.approach && (
                  <motion.div {...fadeUp}>
                    <span className="eyebrow mb-4">Our Approach</span>
                    <h2 className="font-serif font-semibold text-2xl md:text-3xl text-ink mb-4">How we respond</h2>
                    <p className="text-base leading-relaxed text-ink-muted">{program.approach}</p>
                  </motion.div>
                )}
              </div>
            )}
          </Container>
        </section>
      )}

      {/* Initiatives */}
      {groups.length > 0 && (
        <section id="initiatives" className={`section bg-sand ${SCROLL_MT}`}>
          <Container>
            <SectionHeading eyebrow="Key Initiatives" title={<>What we <em>do</em></>} alignment="left" />
            <div className="space-y-16 md:space-y-20">
              {groups.map((group) => (
                <div key={group.heading} className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                  <motion.div {...fadeUp} className="lg:col-span-4">
                    <h3 className="font-serif font-semibold text-2xl md:text-3xl text-ink leading-tight">{group.heading}</h3>
                    {group.subheading && (
                      <p className="mt-2 font-serif font-medium text-lg text-primary">{group.subheading}</p>
                    )}
                  </motion.div>
                  <div className="lg:col-span-8">
                    {paragraphs(group.intro).map((para, i) => (
                      <motion.p key={i} {...fadeUp} className="text-base md:text-[17px] leading-relaxed text-ink-muted mb-5 last:mb-0">
                        {para}
                      </motion.p>
                    ))}
                    {group.items.length > 0 && (
                      <ul className={`grid grid-cols-1 md:grid-cols-2 gap-5 ${group.intro ? 'mt-8' : ''}`}>
                        {group.items.map((item, idx) => (
                          <motion.li
                            key={item.title}
                            {...fadeUp}
                            className={`card p-7 ${group.items.length % 2 === 1 && idx === group.items.length - 1 ? 'md:col-span-2' : ''}`}
                          >
                            <span className="font-serif text-sm text-gold" aria-hidden="true">
                              {String(idx + 1).padStart(2, '0')}
                            </span>
                            <h4 className="mt-2 font-serif font-semibold text-xl text-ink leading-snug">{item.title}</h4>
                            <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{item.description}</p>
                          </motion.li>
                        ))}
                      </ul>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Activities & communities */}
      {hasActivities && (
        <section id="activities" className={`section bg-background ${SCROLL_MT}`}>
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
              {program.activities && program.activities.length > 0 && (
                <motion.div {...fadeUp} className="lg:col-span-7">
                  <span className="eyebrow mb-4">On the Ground</span>
                  <h2 className="font-serif font-semibold text-3xl md:text-4xl text-ink mb-8">Key Activities</h2>
                  <ul className="divide-y divide-line border-y border-line">
                    {program.activities.map((activity) => (
                      <li key={activity} className="flex items-start gap-4 py-5">
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary-soft text-primary">
                          <Check className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                        <span className="text-base text-ink">{activity}</span>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              {program.communitiesServed && (
                <motion.aside {...fadeUp} className="lg:col-span-5">
                  <div className="card card-hover p-8 md:p-10 h-full">
                    <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold mb-6">
                      <Users className="w-5 h-5" aria-hidden="true" />
                    </span>
                    <h2 className="font-serif font-semibold text-2xl text-ink mb-3">Communities Served</h2>
                    <p className="text-base leading-relaxed text-ink-muted">{program.communitiesServed}</p>
                  </div>
                </motion.aside>
              )}
            </div>
          </Container>
        </section>
      )}

      {/* Impact */}
      {hasStats && (
        <section id="impact" className={`section bg-sand border-t border-line ${SCROLL_MT}`}>
          <Container>
            <SectionHeading eyebrow="Impact" title={<>Impact at a <em>glance</em></>} alignment="left" />
            <dl className="max-w-3xl grid grid-cols-2 gap-px bg-line rounded-2xl overflow-hidden border border-line">
              {program.impactStats?.map((stat) => (
                <div key={stat.label} className="bg-white p-6 md:p-8 flex flex-col-reverse">
                  <dt className="mt-2 text-[13px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                    {stat.label}
                  </dt>
                  <dd className="font-serif font-semibold text-3xl md:text-4xl text-primary tracking-tight">
                    {stat.prefix}{stat.value}{stat.suffix}
                  </dd>
                </div>
              ))}
            </dl>
          </Container>
        </section>
      )}

      {/* Related projects */}
      {relatedProjects.length > 0 && (
        <section id="projects" className={`section bg-white border-t border-line ${SCROLL_MT}`}>
          <Container>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
              <SectionHeading
                eyebrow="Track Record"
                title={<>Related <em>Projects</em></>}
                alignment="left"
                className="!mb-0"
              />
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline w-max">
                All projects <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {relatedProjects.map((project) => (
                <motion.article key={project.id} {...fadeUp} className="group relative card card-hover overflow-hidden flex flex-col">
                  <div className="relative aspect-[4/3] overflow-hidden bg-sand">
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
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <div className="flex items-center justify-between gap-3 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted mb-3">
                      <span className="inline-flex items-center gap-1.5">
                        <MapPin className="w-3.5 h-3.5 text-gold" aria-hidden="true" /> {project.location}
                      </span>
                      {project.investment && <span className="text-primary">{project.investment}</span>}
                    </div>
                    <h3 className="font-serif font-semibold text-xl text-ink leading-snug mb-3">
                      <Link to={`/projects/${project.slug}`} className="after:absolute after:inset-0 focus:outline-none">
                        {project.title}
                      </Link>
                    </h3>
                    <p className="text-[15px] leading-relaxed text-ink-muted line-clamp-3 flex-1">{project.summary}</p>
                    <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                      View project <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                    </span>
                  </div>
                </motion.article>
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="section bg-primary-deep text-white">
        <Container>
          <div className="max-w-3xl mx-auto text-center">
            <SectionHeading
              dark
              eyebrow="Get Involved"
              title={<>Help us take <em>{program.title}</em> further</>}
              description="Your donation or CSR partnership helps SRAYI Association reach more rural communities."
              className="!mb-10"
            />
            <div className="flex flex-wrap justify-center gap-3">
              <ButtonLink to="/donate" variant="donate" size="lg">Donate now</ButtonLink>
              <ButtonLink to="/contact" variant="ghost-light" size="lg">Contact us</ButtonLink>
            </div>
          </div>
        </Container>
      </section>

      {/* Other programs */}
      <section className="section bg-background">
        <Container>
          <SectionHeading eyebrow="Explore More" title={<>Other <em>Programs</em></>} alignment="left" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {otherPrograms.map((other) => (
              <Link
                key={other.id}
                to={`/programs/${other.slug}`}
                className="group card card-hover overflow-hidden flex flex-col"
              >
                <div className="relative aspect-[16/10] overflow-hidden bg-sand">
                  {other.coverImage && (
                    <Img
                      src={other.coverImage}
                      alt={other.title}
                      width={800}
                      height={500}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                    />
                  )}
                </div>
                <div className="p-6 flex items-center justify-between gap-4">
                  <h3 className="font-serif font-semibold text-lg text-ink leading-snug">{other.title}</h3>
                  <ArrowRight className="w-4 h-4 shrink-0 text-primary transition-transform group-hover:translate-x-1" aria-hidden="true" />
                </div>
              </Link>
            ))}
          </div>
        </Container>
      </section>
    </div>
  );
};

const ProgramSubNav = ({ items }: { items: SubNavItem[] }) => {
  const [active, setActive] = useState(items[0]?.id);
  const listRef = useRef<HTMLUListElement>(null);
  const ids = items.map((i) => i.id).join(',');

  // Scrollspy: the first section crossing the band just below the two bars is "current".
  useEffect(() => {
    const els = ids
      .split(',')
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));
    if (!els.length) return;
    const visible = new Set<string>();
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => (e.isIntersecting ? visible.add(e.target.id) : visible.delete(e.target.id)));
        const first = els.find((el) => visible.has(el.id));
        if (first) setActive(first.id);
      },
      { rootMargin: `-${NAV_OFFSET}px 0px -55% 0px`, threshold: 0 },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [ids]);

  // Keep the active item visible when the bar scrolls horizontally (mobile).
  useEffect(() => {
    const list = listRef.current;
    const link = list?.querySelector<HTMLElement>(`[data-id="${active}"]`);
    if (!list || !link) return;
    const left = link.offsetLeft - list.offsetLeft;
    if (left < list.scrollLeft || left + link.offsetWidth > list.scrollLeft + list.clientWidth) {
      list.scrollTo({ left: Math.max(0, left - 16), behavior: 'smooth' });
    }
  }, [active]);

  return (
    <nav
      aria-label="On this page"
      className="sticky top-[76px] z-40 border-b border-line bg-white/90 backdrop-blur-md supports-[backdrop-filter]:bg-white/80"
    >
      <Container>
        <ul ref={listRef} className="no-scrollbar -mx-4 flex gap-1 overflow-x-auto px-4 md:mx-0 md:gap-2 md:px-0">
          {items.map((item) => {
            const isActive = item.id === active;
            return (
              <li key={item.id} className="shrink-0">
                <a
                  href={`#${item.id}`}
                  data-id={item.id}
                  aria-current={isActive ? 'location' : undefined}
                  onClick={(e) => {
                    e.preventDefault();
                    setActive(item.id);
                    scrollToElement(document.getElementById(item.id), -NAV_OFFSET + 8);
                    window.history.replaceState(null, '', `#${item.id}`);
                  }}
                  className={`relative block whitespace-nowrap px-3 py-3.5 text-[13px] font-medium transition-colors md:text-[14px] ${
                    isActive ? 'text-primary' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {item.label}
                  <span
                    aria-hidden="true"
                    className={`absolute inset-x-3 bottom-0 h-0.5 rounded-full bg-primary transition-opacity duration-300 ${
                      isActive ? 'opacity-100' : 'opacity-0'
                    }`}
                  />
                </a>
              </li>
            );
          })}
        </ul>
      </Container>
    </nav>
  );
};
