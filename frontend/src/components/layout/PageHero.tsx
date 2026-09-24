import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Container } from './Container';
import { SplitWords } from '../ui/SplitWords';
import { Img } from '../common/Img';

interface PageHeroProps {
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  image?: string;
  children?: ReactNode;
}

/** Standard inner-page hero: ivory band, or a photo band with a deep green overlay when `image` is set. */
export const PageHero = ({ eyebrow, title, description, image, children }: PageHeroProps) => {
  const dark = Boolean(image);
  return (
    <section className={`page-hero relative overflow-hidden pt-32 pb-14 md:pt-40 md:pb-20 ${dark ? 'bg-primary-deep text-white' : 'bg-sand'}`}>
      {image && (
        <>
          <Img src={image} alt="" aria-hidden="true" fetchPriority="high" sizes="100vw" className="absolute inset-0 h-full w-full object-cover opacity-35" />
          <div className="absolute inset-0 bg-gradient-to-t from-primary-deep via-primary-deep/70 to-primary-deep/40" />
        </>
      )}
      <Container className="relative">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-3xl"
        >
          <span className={`eyebrow mb-6 ${dark ? '!text-gold-soft' : ''}`}>{eyebrow}</span>
          <h1
            data-reveal="words"
            className={`font-serif font-medium leading-[1.08] tracking-tight text-4xl md:text-6xl [&_em]:italic ${
              dark ? 'text-white [&_em]:text-gold-soft' : 'text-ink [&_em]:text-primary'
            }`}
          >
            <SplitWords>{title}</SplitWords>
          </h1>
          {description && (
            <p className={`mt-6 text-lg leading-relaxed max-w-2xl ${dark ? 'text-white/75' : 'text-ink-muted'}`}>{description}</p>
          )}
          {children && <div className="mt-8 flex flex-wrap gap-3">{children}</div>}
        </motion.div>
      </Container>
    </section>
  );
};
