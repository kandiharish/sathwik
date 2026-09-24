import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight, MapPin, Tag, Banknote, CheckCircle2, CalendarDays, Map as MapIcon } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { ButtonLink } from '../components/ui/Button';
import { projects } from '../data/projects';
import { usePageMeta, breadcrumbs } from '../lib/seo';
import { Img } from '../components/common/Img';
import { BeforeAfterSlider } from '../components/ui/BeforeAfterSlider';
import { tones, toneFor } from '../lib/tones';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const truncate = (text: string, max = 155) => {
  const clean = text.replace(/\s+/g, ' ').trim();
  if (clean.length <= max) return clean;
  return `${clean.slice(0, max - 1).replace(/\s+\S*$/, '')}…`;
};

export const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  usePageMeta(
    project
      ? {
          title: `${project.title} | SATHWIK Projects`,
          description: truncate(project.summary || project.response || project.title),
          path: `/projects/${project.slug}`,
          image: project.images?.[0],
          type: 'article',
          jsonLd: [
            breadcrumbs([
              { name: 'Projects', path: '/projects' },
              { name: project.title, path: `/projects/${project.slug}` },
            ]),
          ],
        }
      : null,
  );

  if (!project) {
    return (
      <section className="min-h-[70vh] bg-background pt-36 pb-24 md:pt-44">
        <Container className="max-w-2xl text-center">
          <span className="eyebrow eyebrow-center mb-5">Projects</span>
          <h1 className="display-title mb-6">Project Not Found</h1>
          <ButtonLink to="/projects" variant="outline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Projects
          </ButtonLink>
        </Container>
      </section>
    );
  }

  const coverImage = project.images?.[0];
  const tone = tones[toneFor(project.category)];
  const categoryHref = `/projects?category=${encodeURIComponent(project.category)}`;
  const related = [
    ...projects.filter((p) => p.id !== project.id && p.category === project.category),
    ...projects.filter((p) => p.id !== project.id && p.category !== project.category && p.state === project.state),
  ].slice(0, 3);

  const chapters = [
    project.problem && { key: 'need', eyebrow: '01 · The Need', title: 'Identifying the Challenge', body: <p>{project.problem}</p> },
    project.response && { key: 'response', eyebrow: '02 · The Response', title: 'Our Objective', body: <p>{project.response}</p> },
    (project.implementation || project.impact) && {
      key: 'impact',
      eyebrow: '03 · Implementation & Impact',
      title: 'Creating Meaningful Change',
      body: (
        <>
          {project.implementation && <p>{project.implementation}</p>}
          {project.impact && (
            <div className="mt-8 rounded-2xl border border-line bg-background p-6 md:p-8">
              <h3 className="mb-4 font-serif text-xl font-semibold text-ink">Key Outcomes:</h3>
              <ul className="space-y-3">
                {project.impact.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-1 h-4 w-4 flex-shrink-0 text-primary" aria-hidden="true" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </>
      ),
    },
  ].filter(Boolean) as { key: string; eyebrow: string; title: string; body: React.ReactNode }[];

  return (
    <div className="min-h-screen bg-background">
      <article>
        {/* 1. HERO */}
        <header className="bg-background page-hero pt-32 pb-10 md:pt-40 md:pb-14">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-10 text-[13px] text-ink-muted">
              <ol className="flex flex-wrap items-center gap-2">
                <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
                <li aria-hidden="true" className="text-line">/</li>
                <li><Link to="/projects" className="link-underline hover:text-primary">Projects</Link></li>
                <li aria-hidden="true" className="text-line">/</li>
                <li aria-current="page" className="text-ink line-clamp-1">{project.title}</li>
              </ol>
            </nav>

            <div className="max-w-4xl">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 flex flex-wrap items-center gap-2.5"
              >
                <Link
                  to={categoryHref}
                  className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] transition-opacity hover:opacity-80 ${tone.soft} ${tone.text}`}
                >
                  {project.category}
                </Link>
                {project.investment && (
                  <span className="flex items-center gap-1.5 rounded-full bg-primary-soft px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">
                    <Banknote className="h-3.5 w-3.5" aria-hidden="true" />
                    Investment: {project.investment}
                  </span>
                )}
                {project.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-line px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted"
                  >
                    {tag}
                  </span>
                ))}
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
                className="mb-6 font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl"
              >
                {project.title}
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
                className="lead max-w-3xl md:!text-xl"
              >
                {project.summary}
              </motion.p>
            </div>
          </Container>
        </header>

        {/* 2. COVER + KEY FACTS */}
        <section className="bg-background pb-4 md:pb-8">
          <Container>
            {coverImage && (
              <figure data-reveal="wipe" className="relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-sand md:aspect-[2/1]">
                <Img
                  src={coverImage}
                  alt={project.title}
                  width={1600}
                  height={800}
                  fetchPriority="high"
                  sizes="(max-width: 1280px) 100vw, 1216px"
                  decoding="async"
                  className="h-full w-full object-cover"
                />
              </figure>
            )}

          </Container>
        </section>

        {/* 3. CASE STUDY, editorial reading column + sticky project facts */}
        <section className="section bg-white">
          <Container>
            <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-16">
              <div className="space-y-16 md:space-y-20 lg:col-span-8">
                {project.beforeImage && coverImage && (
                  <motion.div {...fadeUp}>
                    <span className="eyebrow mb-4">Before and After</span>
                    <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                      See the difference
                    </h2>
                    <BeforeAfterSlider
                      beforeImage={project.beforeImage}
                      afterImage={coverImage}
                      beforeAlt={`${project.title}, before`}
                      afterAlt={`${project.title}, after`}
                    />
                  </motion.div>
                )}
                {chapters.map((c) => (
                  <motion.div key={c.key} {...fadeUp}>
                    <span className="eyebrow mb-4">{c.eyebrow}</span>
                    <h2 className="mb-6 font-serif text-3xl font-semibold leading-tight tracking-tight text-ink md:text-4xl">
                      {c.title}
                    </h2>
                    <div className="space-y-5 text-[17px] leading-[1.8] text-ink-muted">{c.body}</div>
                  </motion.div>
                ))}
              </div>

              <aside aria-labelledby="project-facts" className="lg:col-span-4">
                <div className="card p-6 md:p-8 lg:sticky lg:top-28">
                  <h2 id="project-facts" className="mb-6 font-serif text-xl font-semibold text-ink">Project facts</h2>
                  <dl className="divide-y divide-line">
                    <Fact icon={<Tag className="h-4 w-4" />} label="Category">
                      <Link to={categoryHref} className={`link-underline ${tone.text}`}>{project.category}</Link>
                    </Fact>
                    {project.location && (
                      <Fact icon={<MapPin className="h-4 w-4" />} label="Location">{project.location}</Fact>
                    )}
                    {project.state && <Fact icon={<MapIcon className="h-4 w-4" />} label="State">{project.state}</Fact>}
                    {project.year && <Fact icon={<CalendarDays className="h-4 w-4" />} label="Year">{project.year}</Fact>}
                    {project.investment && (
                      <Fact icon={<Banknote className="h-4 w-4" />} label="Investment">{project.investment}</Fact>
                    )}
                    <Fact icon={<CheckCircle2 className="h-4 w-4" />} label="Status">
                      <span className="text-primary">Completed</span>
                    </Fact>
                  </dl>
                  {project.tags && project.tags.length > 0 && (
                    <ul className="mt-6 flex flex-wrap gap-2 border-t border-line pt-6" aria-label="Tags">
                      {project.tags.map((tag) => (
                        <li
                          key={tag}
                          className="rounded-full border border-line px-3 py-1 text-[11px] font-medium uppercase tracking-[0.12em] text-ink-muted"
                        >
                          {tag}
                        </li>
                      ))}
                    </ul>
                  )}
                  <ButtonLink to="/donate" variant="donate" className="mt-8 w-full">
                    Support work like this
                  </ButtonLink>
                </div>
              </aside>
            </div>
          </Container>
        </section>

        {/* 4. PROJECT GALLERY */}
        {project.images && project.images.length > 0 && (
          <section className="section bg-sand">
            <Container>
              <div className="mb-12 text-center md:mb-16">
                <span className="eyebrow eyebrow-center mb-5">04 · Project Gallery</span>
                <h2 className="display-title">Visual Documentation</h2>
              </div>

              <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
                {project.images.map((img, idx) => (
                  <li key={img} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-line">
                    <a href={img} target="_blank" rel="noopener" aria-label={`Open ${project.title} photo ${idx + 1} in full size`}>
                      <Img
                        src={img}
                        alt={`${project.title} gallery image ${idx + 1}`}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                      />
                    </a>
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}
      </article>

      {/* 5. RELATED PROJECTS */}
      {related.length > 0 && (
        <section className="section bg-background" aria-labelledby="related-projects">
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow mb-4">Keep Exploring</span>
                <h2 id="related-projects" className="display-title">Related <em className="font-medium text-primary">Projects</em></h2>
              </div>
              <Link to="/projects" className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline">
                All projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {related.map((p) => (
                <li key={p.id}>
                  <Link to={`/projects/${p.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden bg-sand">
                      {p.images?.[0] && (
                        <Img
                          src={p.images[0]}
                          alt={p.title}
                          width={800}
                          height={600}
                          loading="lazy"
                          decoding="async"
                          className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                        />
                      )}
                    </div>
                    <div className="flex grow flex-col p-6">
                      <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">{p.category}</span>
                      <h3 className="font-serif text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                        {p.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}

      {/* 6. CALL TO ACTION */}
      <section className="section bg-primary-deep text-center text-white">
        <Container className="max-w-3xl">
          <h2 className="mb-6 font-serif text-3xl font-semibold tracking-tight md:text-5xl">Support Work Like This</h2>
          <p className="mx-auto mb-10 max-w-2xl text-base leading-relaxed text-white/75 md:text-lg">
            Your contribution helps us continue delivering impactful projects to the communities that need it most.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink to="/donate" variant="donate" size="lg">Make a Donation</ButtonLink>
            <ButtonLink to="/projects" variant="ghost-light" size="lg">Explore More Projects</ButtonLink>
          </div>
        </Container>
      </section>
    </div>
  );
};

const Fact = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <div className="flex items-start justify-between gap-4 py-3.5 first:pt-0 last:pb-0">
    <dt className="flex items-center gap-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">
      <span className="text-ink-muted/80" aria-hidden="true">{icon}</span>
      {label}
    </dt>
    <dd className="text-right text-[15px] font-semibold text-ink">{children}</dd>
  </div>
);
