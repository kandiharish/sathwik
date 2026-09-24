import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';
import { Img } from '../common/Img';
import { lenisRef } from '../../lib/lenis';

export interface LightboxImage {
  src: string;
  alt: string;
  caption?: string;
}

interface LightboxProps {
  images: LightboxImage[];
  /** Index of the open image, or null when closed. */
  index: number | null;
  onClose: () => void;
  onIndexChange: (index: number) => void;
}

const FOCUSABLE = 'button:not([disabled]), [href], [tabindex]:not([tabindex="-1"])';
const EASE = [0.22, 1, 0.36, 1] as const;

const iconBtn =
  'flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors duration-300 hover:bg-white/20';

const Dialog = ({ images, index, onClose, onIndexChange }: LightboxProps & { index: number }) => {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);
  const total = images.length;
  const image = images[index];

  // Keep the latest callbacks without re-binding listeners each render.
  const stateRef = useRef({ index, total, onClose, onIndexChange });
  useEffect(() => {
    stateRef.current = { index, total, onClose, onIndexChange };
  });

  // Scroll lock (page + Lenis), initial focus and focus return.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const { overflow } = document.body.style;
    document.body.style.overflow = 'hidden';
    lenisRef.current?.stop();
    closeRef.current?.focus();

    return () => {
      document.body.style.overflow = overflow;
      lenisRef.current?.start();
      previouslyFocused?.focus?.({ preventScroll: true });
    };
  }, []);

  // Esc closes, arrows navigate, Tab stays inside the dialog.
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const s = stateRef.current;
      if (e.key === 'Escape') {
        e.preventDefault();
        s.onClose();
      } else if (e.key === 'ArrowRight' && s.total > 1) {
        e.preventDefault();
        s.onIndexChange((s.index + 1) % s.total);
      } else if (e.key === 'ArrowLeft' && s.total > 1) {
        e.preventDefault();
        s.onIndexChange((s.index - 1 + s.total) % s.total);
      } else if (e.key === 'Tab' && dialogRef.current) {
        const nodes = Array.from(dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE));
        if (!nodes.length) return;
        const first = nodes[0];
        const last = nodes[nodes.length - 1];
        const active = document.activeElement;
        if (e.shiftKey && (active === first || !dialogRef.current.contains(active))) {
          e.preventDefault();
          last.focus();
        } else if (!e.shiftKey && (active === last || !dialogRef.current.contains(active))) {
          e.preventDefault();
          first.focus();
        }
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, []);

  if (!image) return null;

  return (
    <motion.div
      ref={dialogRef}
      role="dialog"
      aria-modal="true"
      aria-label="Photo viewer"
      data-lenis-prevent
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3, ease: EASE }}
      className="fixed inset-0 z-[200] flex flex-col bg-ink/90 backdrop-blur-sm"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      {/* Top bar */}
      <div className="flex items-center justify-between px-4 py-4 md:px-6">
        <span className="text-[13px] font-semibold tabular-nums text-white/80" aria-live="polite">
          {index + 1} / {total}
        </span>
        <button ref={closeRef} type="button" onClick={onClose} className={iconBtn} aria-label="Close photo viewer">
          <X className="h-5 w-5" aria-hidden="true" />
        </button>
      </div>

      {/* Photo */}
      <div
        className="relative flex min-h-0 flex-1 items-center justify-center px-4 md:px-20"
        onClick={(e) => {
          if (e.target === e.currentTarget) onClose();
        }}
      >
        <AnimatePresence mode="wait" initial={false}>
          <motion.figure
            key={image.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: EASE }}
            className="flex max-h-full max-w-full flex-col items-center"
          >
            <Img
              src={image.src}
              alt={image.alt}
              sizes="100vw"
              loading="eager"
              className="max-h-[calc(100svh-180px)] w-auto max-w-full rounded-xl object-contain"
            />
            {image.caption && (
              <figcaption className="mt-4 max-w-2xl text-center text-[15px] leading-relaxed text-white/85">
                {image.caption}
              </figcaption>
            )}
          </motion.figure>
        </AnimatePresence>

        {total > 1 && (
          <>
            <button
              type="button"
              onClick={() => onIndexChange((index - 1 + total) % total)}
              className={`${iconBtn} absolute left-3 top-1/2 -translate-y-1/2 md:left-6`}
              aria-label="Previous photo"
            >
              <ChevronLeft className="h-5 w-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => onIndexChange((index + 1) % total)}
              className={`${iconBtn} absolute right-3 top-1/2 -translate-y-1/2 md:right-6`}
              aria-label="Next photo"
            >
              <ChevronRight className="h-5 w-5" aria-hidden="true" />
            </button>
          </>
        )}
      </div>
      <div className="h-6 shrink-0" aria-hidden="true" />
    </motion.div>
  );
};

/**
 * Accessible photo lightbox: Esc closes, arrow keys navigate, focus is trapped
 * inside and returned to the trigger on close, and page scrolling (including
 * Lenis smooth scroll) is locked while open.
 */
export const Lightbox = (props: LightboxProps) => {
  if (typeof document === 'undefined') return null;
  return createPortal(
    <AnimatePresence>{props.index !== null && <Dialog key="lightbox" {...props} index={props.index} />}</AnimatePresence>,
    document.body,
  );
};
