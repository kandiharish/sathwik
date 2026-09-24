import type { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { SplitWords } from './SplitWords';

interface SectionHeadingProps {
  /** Main heading. Pass a node to italicise/colour part of it, e.g. <>Our <em>Impact</em></> */
  title: ReactNode;
  /** Small uppercase label above the title. */
  eyebrow?: string;
  /**
   * Legacy prop: short labels render as the eyebrow, longer sentences render
   * as the lead paragraph under the title.
   */
  subtitle?: string;
  /** Supporting paragraph below the title. */
  description?: ReactNode;
  alignment?: 'left' | 'center';
  dark?: boolean;
  as?: 'h1' | 'h2';
  className?: string;
}

export const SectionHeading = ({
  title,
  eyebrow,
  subtitle,
  description,
  alignment = 'center',
  dark = false,
  as = 'h2',
  className = '',
}: SectionHeadingProps) => {
  const subtitleIsLabel = subtitle && subtitle.split(' ').length <= 6;
  const label = eyebrow ?? (subtitleIsLabel ? subtitle : undefined);
  const lead = description ?? (!subtitleIsLabel ? subtitle : undefined);
  const centered = alignment === 'center';
  const Heading = as;

  return (
    <div className={`mb-10 md:mb-12 max-w-3xl ${centered ? 'mx-auto text-center' : 'text-left'} ${className}`}>
      {label && (
        <motion.span
          initial={{ opacity: 0, y: 8 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className={`eyebrow mb-5 ${centered ? 'eyebrow-center' : ''} ${dark ? '!text-gold-soft' : ''}`}
        >
          {label}
        </motion.span>
      )}
      <Heading
        data-reveal="words"
        className={`display-title [&_em]:italic [&_em]:font-medium [&_em]:text-primary ${dark ? '!text-white [&_em]:!text-gold-soft' : ''}`}
      >
        <SplitWords>{title}</SplitWords>
      </Heading>
      {lead && (
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-40px' }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.25 }}
          className={`lead mt-5 ${centered ? 'mx-auto max-w-2xl' : 'max-w-2xl'} ${dark ? '!text-white/70' : ''}`}
        >
          {lead}
        </motion.p>
      )}
    </div>
  );
};
