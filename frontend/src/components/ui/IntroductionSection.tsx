import { motion } from 'framer-motion';
import { Droplets, HeartPulse } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Img } from '../common/Img';

const EASE = [0.22, 1, 0.36, 1] as const;

export const IntroductionSection = () => {
  return (
    <section className="section relative overflow-hidden bg-background">
      {/* Subtle background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Img
          src="/image%20copy%206.webp"
          alt=""
          width={1024}
          height={606}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-[0.1]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </div>

      <Container className="relative">
        <SectionHeading
          eyebrow="Introduction to SRAYI"
          title={<>Transforming Rural Lives <br /><em>Through Development</em></>}
        />

        <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-2 lg:gap-16">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE }}
            className="lg:pr-6"
          >
            <div className="relative space-y-6 border-l border-gold/50 pl-6 text-base leading-relaxed text-ink-muted md:text-[17px]">
              <p>
                Founded in{' '}
                <span className="font-serif font-semibold text-primary">2015, Sathwik Rural and Youth Integrated Association (SRAYI)</span>
                {' '}is committed to uplifting rural communities by improving socio-economic conditions. Through initiatives in education, skill development, and healthcare, SRAYI Association has been a driving force for change, empowering youth and ensuring sustainable progress.
              </p>
              <p>
                Over the past six months, we have focused on enhancing rural healthcare and infrastructure, ensuring access to clean drinking water and improved medical facilities. Our key initiatives include:
              </p>
            </div>

            {/* Initiative tags (informational chips) */}
            <ul className="mt-8 flex flex-wrap gap-3">
              <li className="inline-flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-soft text-primary">
                  <Droplets className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-ink">Clean Water (RO)</span>
              </li>
              <li className="inline-flex items-center gap-3 rounded-full border border-line bg-white py-2 pl-2 pr-5">
                <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gold-soft text-gold">
                  <HeartPulse className="h-4 w-4" strokeWidth={1.75} aria-hidden="true" />
                </span>
                <span className="text-[15px] font-semibold tracking-tight text-ink">Healthcare Access</span>
              </li>
            </ul>
          </motion.div>

          {/* Image collage */}
          <motion.figure
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: EASE, delay: 0.1 }}
            className="relative mx-auto w-full max-w-xl"
          >
            <div className="relative pb-[22%]">
              {/* Main image */}
              <div data-reveal="wipe" className="group ml-auto w-[82%] overflow-hidden rounded-2xl border border-line bg-sand shadow-[var(--shadow-lift)]">
                <Img
                  src="/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.webp"
                  alt="Student getting water"
                  width={800}
                  height={600}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>

              {/* Overlapping image */}
              <div data-reveal="wipe" className="group absolute bottom-0 left-0 w-[52%] overflow-hidden rounded-2xl border-4 border-white bg-sand shadow-[var(--shadow-lift)] ring-1 ring-line">
                <Img
                  src="/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.webp"
                  alt="Rural housing"
                  width={600}
                  height={450}
                  loading="lazy"
                  decoding="async"
                  className="aspect-[4/3] h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                />
              </div>
            </div>

            <figcaption className="mt-6 flex flex-wrap items-baseline justify-end gap-x-3 gap-y-1 text-right">
              <span className="font-serif text-base italic text-ink-muted">Stronger Futures</span>
              <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-gold">
                Empower • Educate • Build
              </span>
            </figcaption>
          </motion.figure>
        </div>
      </Container>
    </section>
  );
};
