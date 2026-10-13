import { useCallback, useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { AnimatePresence, motion, useInView, useReducedMotion } from 'framer-motion';
import { ArrowLeft, ArrowRight, Quote } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from '../ui/SectionHeading';
import { Img } from '../common/Img';
import { voices } from '../../data/voices';

const DURATION = 7000;
const EASE = [0.22, 1, 0.36, 1] as const;
const pad = (n: number) => String(n).padStart(2, '0');

/**
 * "Voices from the Ground": one slide per kind of service. Beneficiary quotes and
 * field notes (facts from project reports) share a photo that wipes in, a text panel
 * and a filmstrip of services with a timed progress bar. Autoplay pauses on hover or
 * focus, while off-screen, and when reduced motion is requested. Photos can be swiped.
 */
export const VoicesSection = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1);
  const [paused, setPaused] = useState(false);
  const reduceMotion = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);
  const stripRef = useRef<HTMLDivElement>(null);
  const inView = useInView(sectionRef, { amount: 0.3 });
  const total = voices.length;

  const go = useCallback(
    (i: number, dir?: number) => {
      setDirection(dir ?? (i >= index ? 1 : -1));
      setIndex((i + total) % total);
    },
    [index, total],
  );

  const autoplay = inView && !paused && !reduceMotion && total > 1;
  useEffect(() => {
    if (!autoplay) return;
    const t = window.setTimeout(() => go(index + 1, 1), DURATION);
    return () => window.clearTimeout(t);
  }, [index, autoplay, go]);

  // Keep the active service centred in the filmstrip (scrolls the strip only, never the page).
  useEffect(() => {
    const strip = stripRef.current;
    const chip = strip?.children[index] as HTMLElement | undefined;
    if (!strip || !chip) return;
    strip.scrollTo({
      left: chip.offsetLeft - (strip.clientWidth - chip.offsetWidth) / 2,
      behavior: reduceMotion ? 'auto' : 'smooth',
    });
  }, [index, reduceMotion]);

  if (!total) return null;
  const v = voices[index];
  const Icon = v.icon;
  const isQuote = v.kind === 'quote';

  return (
    <section
      ref={sectionRef}
      className="section overflow-hidden bg-sand"
      aria-roledescription="carousel"
      aria-label="Voices from the ground"
    >
      <Container>
        <SectionHeading
          eyebrow="Voices from the Ground"
          title={<>Real Impact, <em>Real Voices</em></>}
          description={`${total} kinds of service, one mission: stronger, healthier and self-reliant rural communities.`}
        />

        <div
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && setPaused(false)}
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
            {/* Photo (swipe left or right to change slide) */}
            <div className="relative">
              <motion.div
                className="relative aspect-[4/3] cursor-grab touch-pan-y overflow-hidden rounded-[28px] bg-primary-deep active:cursor-grabbing sm:aspect-[5/4] lg:aspect-[4/5]"
                drag={total > 1 ? 'x' : false}
                dragConstraints={{ left: 0, right: 0 }}
                dragElastic={0.12}
                onDragEnd={(_, info) => {
                  if (info.offset.x < -60) go(index + 1, 1);
                  else if (info.offset.x > 60) go(index - 1, -1);
                }}
              >
                <AnimatePresence initial={false} mode="sync">
                  <motion.div
                    key={v.id}
                    className="absolute inset-0"
                    initial={{ clipPath: direction > 0 ? 'inset(0 0 0 100%)' : 'inset(0 100% 0 0)', scale: 1.1 }}
                    animate={{ clipPath: 'inset(0 0% 0 0%)', scale: 1 }}
                    exit={{ opacity: 0.4, transition: { duration: 0.9 } }}
                    transition={{ duration: 1.05, ease: EASE }}
                  >
                    <Img
                      src={v.image}
                      alt={`${v.service}: project photograph`}
                      width={800}
                      height={1000}
                      sizes="(max-width: 1024px) 100vw, 45vw"
                      className="pointer-events-none h-full w-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-primary-deep/75 via-primary-deep/5 to-transparent" />
                  </motion.div>
                </AnimatePresence>

                <span className="absolute left-4 top-4 z-10 inline-flex items-center gap-2 rounded-full bg-white/92 py-1.5 pl-1.5 pr-3.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary backdrop-blur-sm md:left-5 md:top-5">
                  <span className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-white">
                    <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                  </span>
                  {v.service}
                </span>
              </motion.div>

              {/* Counter badge */}
              <div className="absolute -bottom-6 right-6 z-10 flex h-24 w-24 flex-col items-center justify-center rounded-full bg-secondary text-white shadow-[var(--shadow-lift)] md:h-28 md:w-28">
                <span className="font-serif text-3xl leading-none tabular-nums md:text-4xl">{pad(index + 1)}</span>
                <span className="mt-1 text-[10px] uppercase tracking-[0.2em] text-white/80">of {pad(total)}</span>
              </div>
            </div>

            {/* Text */}
            <div className="relative min-h-[300px] md:min-h-[340px]" aria-live={paused || reduceMotion ? 'polite' : 'off'}>
              <AnimatePresence mode="wait">
                <motion.figure
                  key={v.id}
                  initial={{ opacity: 0, y: 24, filter: 'blur(6px)' }}
                  animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
                  exit={{ opacity: 0, y: -16, filter: 'blur(4px)' }}
                  transition={{ duration: 0.6, ease: EASE }}
                >
                  <div className="flex items-center gap-3">
                    {isQuote ? (
                      <Quote className="h-12 w-12 text-gold/40 md:h-14 md:w-14" strokeWidth={1} aria-hidden="true" />
                    ) : (
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-primary-soft text-primary md:h-14 md:w-14">
                        <Icon className="h-6 w-6" strokeWidth={1.6} aria-hidden="true" />
                      </span>
                    )}
                    <span className="text-[11px] font-semibold uppercase tracking-[0.16em] text-ink-muted">
                      {isQuote ? 'In their words' : 'From the field'}
                    </span>
                  </div>

                  <blockquote
                    className={`mt-5 font-serif leading-snug text-ink ${
                      isQuote ? 'text-[1.6rem] italic md:text-[2rem] md:leading-[1.3]' : 'text-[1.5rem] md:text-[1.9rem] md:leading-[1.3]'
                    }`}
                  >
                    {isQuote ? <>“{v.text}”</> : v.text}
                  </blockquote>

                  <figcaption className="mt-8 flex flex-wrap items-center gap-x-5 gap-y-4">
                    <p className="text-[14px] font-medium text-ink-muted md:text-[15px]">{v.attribution}</p>
                    <Link to={v.href} className="btn btn-outline ml-auto !px-5 !py-2.5">
                      {v.cta} <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </Link>
                  </figcaption>
                </motion.figure>
              </AnimatePresence>
            </div>
          </div>

          {/* Filmstrip of services */}
          <div className="mt-14 flex items-center gap-3 md:mt-16">
            <button
              type="button"
              onClick={() => go(index - 1, -1)}
              aria-label="Previous"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-primary hover:text-primary md:flex"
            >
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            </button>

            <div
              ref={stripRef}
              role="tablist"
              aria-label="Choose a service"
              className="no-scrollbar relative -mx-4 flex flex-1 snap-x gap-3 overflow-x-auto scroll-px-4 px-4 py-1 [mask-image:linear-gradient(90deg,transparent,#000_16px,#000_calc(100%-16px),transparent)] md:mx-0 md:px-1"
            >
              {voices.map((item, i) => {
                const selected = i === index;
                const ItemIcon = item.icon;
                return (
                  <button
                    key={item.id}
                    type="button"
                    role="tab"
                    aria-selected={selected}
                    onClick={() => go(i)}
                    className={`group relative flex shrink-0 snap-start items-center gap-2.5 overflow-hidden rounded-full border py-1.5 pl-1.5 pr-4 text-left transition-colors duration-300 ${
                      selected ? 'border-primary bg-primary text-white' : 'border-line bg-white text-ink hover:border-primary/40'
                    }`}
                  >
                    <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full">
                      <Img
                        src={item.image}
                        alt=""
                        width={36}
                        height={36}
                        sizes="36px"
                        className={`h-full w-full object-cover transition duration-500 ${selected ? '' : 'grayscale-[50%] group-hover:grayscale-0'}`}
                      />
                      <span
                        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${
                          selected ? 'bg-primary/55 opacity-100' : 'bg-black/35 opacity-0 group-hover:opacity-100'
                        }`}
                      >
                        <ItemIcon className="h-4 w-4 text-white" aria-hidden="true" />
                      </span>
                    </span>
                    <span className="whitespace-nowrap text-[13px] font-semibold">{item.service}</span>

                    {selected && (
                      <span className="absolute inset-x-4 bottom-0 h-[2px] overflow-hidden rounded-full bg-white/25" aria-hidden="true">
                        <motion.span
                          key={`${item.id}-${autoplay}`}
                          className="block h-full origin-left bg-white"
                          initial={{ scaleX: autoplay ? 0 : 1 }}
                          animate={{ scaleX: 1 }}
                          transition={{ duration: autoplay ? DURATION / 1000 : 0, ease: 'linear' }}
                        />
                      </span>
                    )}
                  </button>
                );
              })}
            </div>

            <button
              type="button"
              onClick={() => go(index + 1, 1)}
              aria-label="Next"
              className="hidden h-11 w-11 shrink-0 items-center justify-center rounded-full border border-line bg-white text-ink transition-colors hover:border-primary hover:text-primary md:flex"
            >
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </Container>
    </section>
  );
};
