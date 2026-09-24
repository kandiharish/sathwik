import { useCallback, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, Quote } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Img } from '../common/Img';
import { stories } from '../../data/stories';

const DURATION = 8000;
const EASE = [0.22, 1, 0.36, 1] as const;
const voices = stories.filter((s) => s.quote);

/**
 * "Voices from the Ground": beneficiaries' own words, with a photo that wipes in,
 * the quote rising line by line and a timed progress rail. Autoplay pauses on
 * hover/focus and when reduced motion is requested.
 */
export const VoicesSection = () => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const go = useCallback((i: number) => setIndex((i + voices.length) % voices.length), []);

  useEffect(() => {
    if (paused || reduceMotion || voices.length < 2) return;
    const t = window.setTimeout(() => go(index + 1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, paused, reduceMotion, go]);

  if (!voices.length) return null;
  const story = voices[index];
  const quote = story.quote!;

  return (
    <section className="section overflow-hidden bg-sand" aria-roledescription="carousel" aria-label="Voices from the ground">
      <Container>
        <SectionHeading eyebrow="Voices from the Ground" title={<>Real Impact, <em>Real Voices</em></>} />

        <div
          className="grid items-center gap-10 lg:grid-cols-[1fr_1.15fr] lg:gap-16"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Photo */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-primary-deep sm:aspect-[5/4] lg:aspect-[4/5]">
              <AnimatePresence initial={false} mode="sync">
                <motion.div
                  key={story.id}
                  className="absolute inset-0"
                  initial={{ clipPath: 'inset(0 0 0 100%)', scale: 1.1 }}
                  animate={{ clipPath: 'inset(0 0 0 0%)', scale: 1 }}
                  exit={{ opacity: 0.4, transition: { duration: 0.9 } }}
                  transition={{ duration: 1.1, ease: EASE }}
                >
                  <Img
                    src={story.heroImage}
                    alt={`${story.category} project photograph`}
                    width={800}
                    height={1000}
                    sizes="(max-width: 1024px) 100vw, 45vw"
                    className="h-full w-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/70 via-transparent to-transparent" />
                </motion.div>
              </AnimatePresence>

              <span className="absolute left-5 top-5 z-10 rounded-full bg-white/90 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary backdrop-blur-sm">
                {story.category}
              </span>
            </div>

            {/* Floating counter badge */}
            <div className="absolute -bottom-6 right-6 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-secondary text-white shadow-[var(--shadow-lift)] md:h-28 md:w-28">
              <span className="font-serif text-3xl leading-none md:text-4xl">0{index + 1}</span>
              <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80">of 0{voices.length}</span>
            </div>
          </div>

          {/* Quote */}
          <div className="relative" aria-live="polite">
            <Quote className="h-14 w-14 text-gold/40" strokeWidth={1} aria-hidden="true" />
            <AnimatePresence mode="wait">
              <motion.figure
                key={story.id}
                initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                transition={{ duration: 0.7, ease: EASE }}
              >
                <blockquote className="mt-4 font-serif text-2xl italic leading-snug text-ink md:text-[2rem] md:leading-[1.3]">
                  “{quote.text}”
                </blockquote>
                <figcaption className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-3">
                  <p className="text-[15px] font-medium text-ink-muted">{quote.role}</p>
                  <Link to={`/stories/${story.slug}`} className="btn btn-outline !px-5 !py-2.5 ml-auto">
                    Read the story <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                </figcaption>
              </motion.figure>
            </AnimatePresence>

            {/* Person selector with timed progress */}
            <div className="mt-12 grid grid-cols-3 gap-3" role="tablist" aria-label="Choose a story">
              {voices.map((v, i) => {
                const selected = i === index;
                return (
                  <button
                    key={v.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    aria-label={v.quote!.role}
                    onClick={() => go(i)}
                    className={`group relative overflow-hidden rounded-2xl border p-3 text-left transition-colors duration-300 ${
                      selected ? 'border-gold/50 bg-white' : 'border-line bg-white/50 hover:bg-white'
                    }`}
                  >
                    <span className="flex items-center gap-3">
                      <Img
                        src={v.heroImage}
                        alt=""
                        width={40}
                        height={40}
                        sizes="40px"
                        className={`h-10 w-10 shrink-0 rounded-full object-cover transition duration-500 ${selected ? '' : 'grayscale-[60%] group-hover:grayscale-0'}`}
                      />
                      <span className="hidden min-w-0 truncate text-sm font-semibold text-ink sm:block">{v.category}</span>
                    </span>
                    <span className="absolute inset-x-0 bottom-0 h-[3px] bg-line/60" aria-hidden="true">
                      {selected && (
                        <motion.span
                          key={`${v.id}-${paused}`}
                          className="block h-full origin-left bg-gradient-to-r from-gold to-secondary"
                          initial={{ scaleX: reduceMotion || paused ? 1 : 0 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: reduceMotion || paused ? 0 : DURATION / 1000, ease: 'linear' }}
                        />
                      )}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
