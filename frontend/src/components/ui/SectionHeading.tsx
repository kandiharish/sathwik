import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';

interface SectionHeadingProps {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  dark?: boolean;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({ 
  title, 
  subtitle, 
  alignment = 'center',
  dark = false
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center mx-auto',
    right: 'text-right ml-auto'
  };

  // Split title into words for kinetic animation
  const words = title.split(' ');

  const container: Variants = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.04 * i },
    }),
  };

  const child: Variants = {
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
    hidden: {
      opacity: 0,
      y: 40,
      rotateX: -90,
      transition: {
        type: 'spring',
        damping: 12,
        stiffness: 100,
      },
    },
  };

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          className={`block text-sm font-bold tracking-[0.2em] uppercase mb-4 ${dark ? 'text-emerald-400' : 'text-[#054E38]'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        variants={container}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
        className={`text-4xl md:text-5xl lg:text-6xl font-serif font-bold ${dark ? 'text-white' : 'text-gray-900'} flex flex-wrap gap-x-3 gap-y-2 justify-${alignment === 'center' ? 'center' : alignment === 'right' ? 'end' : 'start'}`}
        style={{ perspective: "1000px" }}
      >
        {words.map((word, index) => (
          <motion.span 
            variants={child} 
            key={index}
            style={{ transformOrigin: 'bottom center' }}
            className="inline-block"
          >
            {word}
          </motion.span>
        ))}
      </motion.h2>
    </div>
  );
};
