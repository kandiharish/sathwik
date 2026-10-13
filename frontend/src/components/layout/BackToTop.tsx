import { useEffect, useState } from 'react';
import { AnimatePresence, motion, useScroll, useSpring } from 'framer-motion';
import { ArrowUp } from 'lucide-react';
import { scrollToTop } from '../../lib/lenis';

const R = 20;
const CIRC = 2 * Math.PI * R;

/** Floating "back to top" button whose ring fills as the page is read. */
export const BackToTop = () => {
  const [visible, setVisible] = useState(false);
  const { scrollYProgress, scrollY } = useScroll();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 26 });

  useEffect(() => scrollY.on('change', (y) => setVisible(y > 900)), [scrollY]);

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={() => scrollToTop(true)}
          aria-label="Back to top"
          initial={{ opacity: 0, scale: 0.6, y: 12 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.6, y: 12 }}
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="group fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary shadow-[var(--shadow-lift)] backdrop-blur-md transition-colors hover:bg-primary hover:text-white md:bottom-8 md:right-8 md:h-14 md:w-14"
        >
          <svg viewBox="0 0 48 48" className="absolute inset-0 h-full w-full -rotate-90" aria-hidden="true">
            <circle cx="24" cy="24" r={R} fill="none" stroke="currentColor" strokeOpacity="0.15" strokeWidth="2" />
            <motion.circle
              cx="24"
              cy="24"
              r={R}
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeDasharray={CIRC}
              style={{ pathLength: progress }}
            />
          </svg>
          <ArrowUp className="relative h-4 w-4 transition-transform duration-300 group-hover:-translate-y-0.5" aria-hidden="true" />
        </motion.button>
      )}
    </AnimatePresence>
  );
};
