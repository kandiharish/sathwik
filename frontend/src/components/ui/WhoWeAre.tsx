import { useRef } from 'react';
import { motion, useReducedMotion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { Container } from '../layout/Container';
import { Img } from '../common/Img';

const EASE = [0.22, 1, 0.36, 1] as const;

const QUOTE = 'Transforming rural potential into self-reliant reality through accountable, transparent grassroots action.';

const photos = {
  main: {
    src: '/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM (2).webp',
    alt: 'Schoolgirls at the inauguration of an RO drinking water plant',
  },
  side: {
    src: '/Cycle project karimnagar/WhatsApp Image 2026-08-19 at 11.13.08 PM (1).webp',
    alt: 'Schoolgirls receiving bicycles',
  },
  round: {
    src: '/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.47 PM.webp',
    alt: 'Women receiving nutrition kits',
  },
};

/** One word of the quote: brightens from soft grey to ink as the reader scrolls past it. */
const QuoteWord = ({ word, progress, range }: { word: string; progress: MotionValue<number>; range: [number, number] }) => {
  const opacity = useTransform(progress, range, [0.18, 1]);
  return (
    <motion.span style={{ opacity }} className="inline-block">
      {word}&nbsp;
    </motion.span>
  );
};

export const WhoWeAre = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const reduce = useReducedMotion();

  // Gentle parallax for the photo arches (different speeds give depth without 3D).
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ['start end', 'end start'] });
  const yMain = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [40, -40]);
  const ySide = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [90, -70]);
  const yRound = useTransform(scrollYProgress, [0, 1], reduce ? [0, 0] : [-30, 60]);

  // Quote lights up word by word while it moves through the middle of the screen.
  const { scrollYProgress: quoteProgress } = useScroll({ target: quoteRef, offset: ['start 85%', 'end 45%'] });
  const words = QUOTE.split(' ');

  return (
    <section ref={sectionRef} className="section relative overflow-hidden bg-white">
      {/* Soft brand glow behind the arches */}
      <div
        className="pointer-events-none absolute right-[-10%] top-1/2 h-[720px] w-[720px] -translate-y-1/2 rounded-full bg-[radial-gradient(circle,rgba(2,89,85,0.10),transparent_65%)]"
        aria-hidden="true"
      />

      <Container className="relative">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-10 xl:gap-16">
          {/* Story */}
          <div className="lg:col-span-6">
            <motion.span
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: EASE }}
              className="eyebrow mb-5"
            >
              Our Story
            </motion.span>

            <h2 data-reveal="words" className="font-serif text-[3rem] font-medium leading-[1] tracking-[-0.03em] text-ink md:text-[4.5rem] lg:text-[5.25rem]">
              <span className="sw"><span className="sw-in" style={{ '--i': 0 } as React.CSSProperties}>Who</span></span>{' '}
              <span className="sw"><span className="sw-in" style={{ '--i': 1 } as React.CSSProperties}>We</span></span>{' '}
              <span className="sw"><span className="sw-in text-primary" style={{ '--i': 2 } as React.CSSProperties}>Are</span></span>
            </h2>

            <p
              ref={quoteRef}
              className="mt-8 font-serif text-[1.6rem] leading-[1.3] tracking-[-0.01em] text-ink md:text-[2rem] md:leading-[1.25]"
            >
              <span className="text-primary">“</span>
              {reduce
                ? QUOTE
                : words.map((w, i) => (
                    <QuoteWord key={i} word={w} progress={quoteProgress} range={[i / words.length, (i + 1) / words.length]} />
                  ))}
              <span className="text-primary">”</span>
            </p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
              className="mt-8 max-w-xl space-y-4 text-[16px] leading-relaxed text-ink-muted"
            >
              <p>
                The <strong className="font-semibold text-ink">Sathwik Rural and Youth Integrated Association (SRAYI)</strong> operates at
                the frontlines of rural transformation, bridging critical infrastructure gaps in medical equipment, safe drinking water,
                vocational skill training, and disability inclusion.
              </p>
              <p>
                By empowering youth and women to lead community initiatives, we build permanent self-sustaining ecosystems where every
                village member can thrive with dignity.
              </p>
            </motion.div>
          </div>

          {/* Arches */}
          <div className="relative mx-auto h-[460px] w-full max-w-[520px] sm:h-[560px] lg:col-span-6 lg:h-[640px] lg:max-w-none">
            {/* Thin brand ring framing the composition */}
            <div
              className="pointer-events-none absolute left-[18%] top-[14%] h-[72%] w-[72%] rounded-full border border-primary/15"
              aria-hidden="true"
            />

            {/* Main arch */}
            <motion.figure
              style={{ y: yMain }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: EASE }}
              className="absolute right-0 top-0 h-[88%] w-[64%] overflow-hidden rounded-t-full rounded-b-[28px] bg-sand shadow-[var(--shadow-lift)]"
            >
              <Img src={photos.main.src} alt={photos.main.alt} sizes="(max-width: 1024px) 60vw, 32vw" className="h-full w-full object-cover" />
            </motion.figure>

            {/* Side arch, overlapping bottom left */}
            <motion.figure
              style={{ y: ySide }}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: EASE, delay: 0.15 }}
              className="absolute bottom-0 left-0 h-[58%] w-[44%] overflow-hidden rounded-t-full rounded-b-[24px] border-[6px] border-white bg-sand shadow-[var(--shadow-lift)]"
            >
              <Img src={photos.side.src} alt={photos.side.alt} sizes="(max-width: 1024px) 40vw, 22vw" className="h-full w-full object-cover" />
            </motion.figure>

            {/* Round photo, top left */}
            <motion.figure
              style={{ y: yRound }}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 1, ease: EASE, delay: 0.3 }}
              className="absolute left-[8%] top-[4%] h-[30%] w-auto aspect-square overflow-hidden rounded-full border-[6px] border-white bg-sand shadow-[var(--shadow-lift)]"
            >
              <Img src={photos.round.src} alt={photos.round.alt} sizes="200px" className="h-full w-full object-cover" />
            </motion.figure>

          </div>
        </div>
      </Container>
    </section>
  );
};
