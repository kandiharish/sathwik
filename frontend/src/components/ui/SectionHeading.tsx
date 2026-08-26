
import { motion } from 'framer-motion';

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

  return (
    <div className={`mb-12 md:mb-16 max-w-3xl ${alignmentClasses[alignment]}`}>
      {subtitle && (
        <motion.span 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`block text-sm font-bold tracking-wider uppercase mb-3 ${dark ? 'text-primary-light' : 'text-primary'}`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`text-3xl md:text-4xl lg:text-5xl font-serif font-bold ${dark ? 'text-white' : 'text-text-main'}`}
      >
        {title}
      </motion.h2>
    </div>
  );
};
