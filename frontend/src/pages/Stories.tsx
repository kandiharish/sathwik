import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Quote, ArrowRight } from 'lucide-react';
import { stories } from '../data/stories';
import { Img } from '../components/common/Img';
import { tones, toneFor } from '../lib/tones';

export const Stories = () => {
  const [featured, ...rest] = stories;
  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="page-hero pt-32 md:pt-40 pb-10 md:pb-14 bg-background border-b border-line">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center text-[13px] text-ink-muted">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-line">/</li>
              <li aria-current="page" className="text-ink">Stories</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            eyebrow="Real Impact, Real Voices"
            title={<>Stories of <em>Change</em></>}
            description="Behind every number is a life changed. Read the personal journeys of the people in the communities we serve."
            alignment="center"
            className="!mb-0"
          />
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          {featured && <FeaturedStory story={featured} />}
          <ul className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((story, idx) => (
              <motion.li
                key={story.id}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: idx * 0.08, ease: [0.22, 1, 0.36, 1] }}
                className="card card-hover group relative flex h-full flex-col overflow-hidden"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-sand">
                  <Img
                    src={story.heroImage}
                    alt={story.title}
                    width={800}
                    height={600}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
                  />
                  <span className={`absolute left-4 top-4 rounded-full bg-white/95 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${tones[toneFor(story.category)].text}`}>
                    {story.category}
                  </span>
                </div>
                <div className="flex grow flex-col p-7">
                  <h2 className="mb-4 line-clamp-2 font-serif text-xl font-semibold leading-snug text-ink transition-colors group-hover:text-primary md:text-2xl">
                    <Link to={`/stories/${story.slug}`} className="after:absolute after:inset-0 after:content-['']">
                      {story.title}
                    </Link>
                  </h2>
                  <blockquote className="mb-6 grow border-l-2 border-gold pl-4">
                    <Quote className="mb-2 h-4 w-4 text-gold" aria-hidden="true" />
                    <p className="line-clamp-3 font-serif text-[16px] italic leading-relaxed text-ink-muted">
                      "{story.quote.text}"
                    </p>
                  </blockquote>
                  <div className="mt-auto flex items-center justify-between border-t border-line pt-5">
                    <div>
                      <p className="text-[15px] font-semibold text-ink">{story.quote.author}</p>
                      <p className="text-[12px] font-medium uppercase tracking-wider text-ink-muted">{story.quote.role}</p>
                    </div>
                    <span
                      className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full border border-line text-primary transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white"
                      aria-hidden="true"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </motion.li>
            ))}
          </ul>
        </Container>
      </section>
    </div>
  );
};

const FeaturedStory = ({ story }: { story: (typeof stories)[number] }) => {
  const tone = tones[toneFor(story.category)];
  return (
    <motion.article
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="card card-hover group relative mb-10 grid grid-cols-1 overflow-hidden md:mb-14 lg:grid-cols-12"
    >
      <div data-reveal="wipe" className="relative aspect-[4/3] overflow-hidden bg-sand lg:col-span-7 lg:aspect-auto lg:min-h-[460px]">
        <Img
          src={story.heroImage}
          alt={story.title}
          width={1200}
          height={900}
          sizes="(min-width: 1024px) 58vw, 100vw"
          className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-premium group-hover:scale-[1.04]"
        />
      </div>
      <div className="flex flex-col p-7 md:p-10 lg:col-span-5 lg:p-12">
        <div className="mb-5 flex flex-wrap items-center gap-3">
          <span className={`rounded-full px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] ${tone.soft} ${tone.text}`}>
            {story.category}
          </span>
          <span className="text-[12px] font-semibold uppercase tracking-[0.12em] text-ink-muted">Featured story</span>
        </div>
        <h2 className="mb-5 font-serif text-2xl font-semibold leading-tight tracking-tight text-ink transition-colors group-hover:text-primary md:text-3xl lg:text-[2.25rem]">
          <Link to={`/stories/${story.slug}`} className="after:absolute after:inset-0 after:content-['']">
            {story.title}
          </Link>
        </h2>
        {story.introduction && (
          <p className="mb-6 line-clamp-4 text-[16px] leading-relaxed text-ink-muted">{story.introduction}</p>
        )}
        <blockquote className="mb-8 grow">
          <Quote className={`mb-3 h-5 w-5 ${tone.text}`} aria-hidden="true" />
          <p className="line-clamp-4 font-serif text-[17px] leading-relaxed text-ink">"{story.quote.text}"</p>
        </blockquote>
        <div className="mt-auto flex items-center justify-between border-t border-line pt-6">
          <div>
            <p className="text-[15px] font-semibold text-ink">{story.quote.author}</p>
            <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-ink-muted">{story.quote.role}</p>
          </div>
          <span className="inline-flex items-center gap-2 text-sm font-semibold text-primary">
            Read story <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
          </span>
        </div>
      </div>
    </motion.article>
  );
};
