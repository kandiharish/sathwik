import { useEffect, useRef, useState, type ReactNode } from 'react';
import { motion, useInView, useMotionValue, useReducedMotion, useSpring, useTransform } from 'framer-motion';

interface ImpactCounterProps {
  value: string | number;
  label: string;
  prefix?: string;
  suffix?: string;
  icon?: ReactNode;
  /** Render for a dark (primary-deep) band. */
  dark?: boolean;
}

const format = (n: number) => Math.floor(n).toLocaleString('en-IN');

// Progress ring around the icon (viewBox 0 0 48 48).
const RING_R = 22.5;
const RING_C = 2 * Math.PI * RING_R;

export const ImpactCounter: React.FC<ImpactCounterProps> = ({
  value,
  label,
  prefix = '',
  suffix = '',
  icon,
  dark = false,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-60px' });
  const reduceMotion = useReducedMotion();

  const numericValue = typeof value === 'string' ? parseInt(value.replace(/,/g, ''), 10) || 0 : value;

  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, { damping: 60, stiffness: 100, mass: 1 });
  const [display, setDisplay] = useState(() => format(0));
  // The ring fills in step with the count-up and ends fully closed.
  const ringOffset = useTransform(springValue, (v) =>
    numericValue > 0 ? RING_C * (1 - Math.min(Math.max(v / numericValue, 0), 1)) : 0,
  );

  useEffect(() => {
    if (reduceMotion) return;
    if (isInView) motionValue.set(numericValue);
  }, [isInView, numericValue, motionValue, reduceMotion]);

  useEffect(() => springValue.on('change', (latest) => setDisplay(format(latest))), [springValue]);

  // Reduced motion: show the final value immediately, no counting.
  const shown = reduceMotion ? format(numericValue) : display;
  const finalText = `${prefix}${format(numericValue)}${suffix}`;

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="flex flex-col items-center text-center px-4 py-6"
    >
      {icon && (
        <div
          className={`relative mb-5 flex h-12 w-12 items-center justify-center rounded-full ${
            dark ? 'text-gold-soft' : 'text-primary'
          }`}
          aria-hidden="true"
        >
          <svg className="absolute inset-0 h-full w-full -rotate-90" viewBox="0 0 48 48" fill="none">
            <circle cx="24" cy="24" r={RING_R} strokeWidth="1.5" className={dark ? 'stroke-white/15' : 'stroke-line'} />
            <motion.circle
              cx="24"
              cy="24"
              r={RING_R}
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeDasharray={RING_C}
              style={{ strokeDashoffset: reduceMotion ? 0 : ringOffset }}
              className={dark ? 'stroke-gold-soft' : 'stroke-primary'}
            />
          </svg>
          {icon}
        </div>
      )}

      {/* Screen readers get the final value only */}
      <span className="sr-only">
        {finalText} {label}
      </span>

      <div
        aria-hidden="true"
        className={`font-serif font-semibold tracking-tight leading-none whitespace-nowrap tabular-nums text-5xl md:text-6xl ${
          dark ? 'text-white' : 'text-ink'
        }`}
      >
        {prefix && <span className="mr-0.5">{prefix}</span>}
        {shown}
        {suffix && (
          <span className={`ml-1 text-2xl md:text-3xl font-medium ${dark ? 'text-gold-soft' : 'text-gold'}`}>
            {suffix}
          </span>
        )}
      </div>

      <div
        aria-hidden="true"
        className={`mt-5 text-xs md:text-[13px] font-semibold uppercase tracking-[0.12em] leading-relaxed max-w-[200px] ${
          dark ? 'text-white/75' : 'text-ink-muted'
        }`}
      >
        {label}
      </div>
    </motion.div>
  );
};
