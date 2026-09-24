import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { ButtonLink } from '../components/ui/Button';
import { stories } from '../data/stories';
import { projects } from '../data/projects';
import { programs } from '../data/programs';
import { usePageMeta, breadcrumbs } from '../lib/seo';
import { Img } from '../components/common/Img';

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

export const StoryDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const story = stories.find((s) => s.slug === slug);

  usePageMeta(
    story
      ? {
          title: `${story.title} | SATHWIK Stories`,
          description: truncate(story.situation),
          path: `/stories/${story.slug}`,
          image: story.heroImage,
          type: 'article',
          jsonLd: [
            breadcrumbs([
              { name: 'Stories', path: '/stories' },
              { name: story.title, path: `/stories/${story.slug}` },
            ]),
          ],
        }
      : null,
  );

  if (!story) {
    return (
      <section className="min-h-[70vh] bg-background pt-36 pb-24 md:pt-44">
        <Container className="max-w-2xl text-center">
          <span className="eyebrow eyebrow-center mb-5">Stories</span>
          <h1 className="display-title mb-6">Story Not Found</h1>
          <ButtonLink to="/stories" variant="outline">
            <ArrowLeft className="h-4 w-4" aria-hidden="true" /> Back to Stories
          </ButtonLink>
        </Container>
      </section>
    );
  }

  const relatedProject = story.relatedProjectId ? projects.find((p) => p.id === story.relatedProjectId) : null;
  const relatedProgram = story.relatedProgramId ? programs.find((p) => p.id === story.relatedProgramId) : null;
  const moreStories = stories.filter((s) => s.id !== story.id).slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <article>
        {/* HERO */}
        <header className="bg-background page-hero pt-32 pb-10 md:pt-40 md:pb-14">
          <Container>
            <nav aria-label="Breadcrumb" className="mb-10 flex justify-center text-[13px] text-ink-muted">
              <ol className="flex flex-wrap items-center justify-center gap-2">
                <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
                <li aria-hidden="true" className="text-line">/</li>
                <li><Link to="/stories" className="link-underline hover:text-primary">Stories</Link></li>
                <li aria-hidden="true" className="text-line">/</li>
                <li aria-current="page" className="text-ink line-clamp-1">{story.title}</li>
              </ol>
            </nav>

            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="mx-auto max-w-4xl text-center"
            >
              <span className="eyebrow eyebrow-center mb-6">{story.category}</span>
              <h1 className="font-serif text-4xl font-semibold leading-[1.08] tracking-tight text-ink md:text-5xl lg:text-6xl">
                {story.title}
              </h1>
              {(story.location || story.date) && (
                <p className="mt-6 text-[14px] text-ink-muted">
                  {[story.location, story.date].filter(Boolean).join(' · ')}
                </p>
              )}
            </motion.div>
          </Container>
        </header>

        <Container>
          <figure data-reveal="wipe" className="mx-auto aspect-[16/10] max-w-6xl overflow-hidden rounded-2xl bg-sand md:aspect-[2/1]">
            <Img
              src={story.heroImage}
              alt={story.title}
              width={1600}
              height={800}
              fetchPriority="high"
              sizes="(max-width: 1280px) 100vw, 1216px"
              decoding="async"
              className="h-full w-full object-cover"
            />
          </figure>
        </Container>

        {/* CONTENT */}
        <section className="section bg-background">
          <Container>
            <div className="mx-auto max-w-3xl">
              {story.introduction && (
                <p className="mb-8 text-[17px] leading-[1.8] text-ink-muted">{story.introduction}</p>
              )}
              <p className="mb-14 font-serif text-2xl leading-snug text-ink md:text-[1.75rem]">{story.situation}</p>

              <motion.div {...fadeUp} className="mb-12">
                <h2 className="eyebrow mb-4">The Challenge</h2>
                <p className="text-[17px] leading-[1.8] text-ink-muted">{story.challenge}</p>
              </motion.div>

              <motion.div {...fadeUp} className="mb-12">
                <h2 className="eyebrow mb-4">The Action</h2>
                <p className="text-[17px] leading-[1.8] text-ink-muted">{story.action}</p>
              </motion.div>

              {/* PULL QUOTE */}
              <motion.figure {...fadeUp} className="my-16 border-y border-line py-12 md:my-20">
                <blockquote>
                  <p className="font-serif text-2xl italic leading-snug text-ink md:text-[2rem] md:leading-[1.3]">
                    "{story.quote.text}"
                  </p>
                </blockquote>
                <figcaption className="mt-8">
                  <span className="block text-[15px] font-semibold text-ink">{story.quote.author}</span>
                  <span className="block text-[12px] font-medium uppercase tracking-[0.12em] text-ink-muted">
                    {story.quote.role}
                  </span>
                </figcaption>
              </motion.figure>

              <motion.div {...fadeUp}>
                <h2 className="eyebrow mb-4">The Impact</h2>
                <div className="space-y-5 text-[17px] leading-[1.8] text-ink-muted">
                  <p>{story.change}</p>
                  <p>{story.impact}</p>
                </div>
              </motion.div>

              {/* RELATED LINKS */}
              {(relatedProject || story.relatedProgramId) && (
                <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-line pt-8 sm:flex-row sm:items-center">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.2em] text-ink-muted">Explore Related</span>
                  <div className="flex flex-wrap gap-6">
                    {relatedProject && (
                      <Link
                        to={`/projects/${relatedProject.slug}`}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                      >
                        View Related Project <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                    {story.relatedProgramId && (
                      <Link
                        to={relatedProgram ? `/programs/${relatedProgram.slug}` : '/programs'}
                        className="inline-flex items-center gap-1.5 text-sm font-semibold text-primary link-underline"
                      >
                        View Related Program <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    )}
                  </div>
                </div>
              )}
            </div>
          </Container>
        </section>

        {/* STORY GALLERY */}
        {story.galleryImages && story.galleryImages.length > 0 && (
          <section className="section bg-white">
            <Container>
              <div className="mb-12 text-center">
                <h2 className="display-title">Gallery</h2>
              </div>
              <ul className="grid grid-cols-2 gap-3 md:gap-5 lg:grid-cols-3">
                {story.galleryImages.map((img, idx) => (
                  <li key={img} className="group aspect-[4/3] overflow-hidden rounded-2xl bg-sand">
                    <Img
                      src={img}
                      alt={`${story.title} photo ${idx + 1}`}
                      width={800}
                      height={600}
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                    />
                  </li>
                ))}
              </ul>
            </Container>
          </section>
        )}
      </article>

      {/* MORE STORIES */}
      {moreStories.length > 0 && (
        <section className="section bg-sand" aria-labelledby="more-stories">
          <Container>
            <div className="mb-10 flex flex-col gap-4 md:mb-14 md:flex-row md:items-end md:justify-between">
              <div>
                <span className="eyebrow mb-4">Stories of Change</span>
                <h2 id="more-stories" className="display-title">More <em className="font-medium text-primary">Stories</em></h2>
              </div>
              <Link to="/stories" className="inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline">
                All stories <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid grid-cols-1 gap-8 md:grid-cols-3">
              {moreStories.map((s) => (
                <li key={s.id}>
                  <Link to={`/stories/${s.slug}`} className="card card-hover group flex h-full flex-col overflow-hidden">
                    <div className="aspect-[4/3] overflow-hidden bg-sand">
                      <Img
                        src={s.heroImage}
                        alt={s.title}
                        width={800}
                        height={600}
                        loading="lazy"
                        decoding="async"
                        className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                      />
                    </div>
                    <div className="flex grow flex-col p-6">
                      <span className="mb-2 text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">{s.category}</span>
                      <h3 className="font-serif text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary">
                        {s.title}
                      </h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </Container>
        </section>
      )}
    </div>
  );
};
