import { Children, useEffect, useRef, useState, type ReactNode } from 'react';

/**
 * Phones: a swipeable, snapping card rail (next card peeks in) with position dots.
 * Tablets and up: a regular 2 / 3 column grid.
 */
export const ReportRail = ({ children, label }: { children: ReactNode; label: string }) => {
  const railRef = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);
  const items = Children.toArray(children);

  useEffect(() => {
    const rail = railRef.current;
    if (!rail) return;
    const onScroll = () => {
      const first = rail.firstElementChild as HTMLElement | null;
      if (!first) return;
      const step = first.offsetWidth + 16;
      setActive(Math.min(items.length - 1, Math.max(0, Math.round(rail.scrollLeft / step))));
    };
    rail.addEventListener('scroll', onScroll, { passive: true });
    return () => rail.removeEventListener('scroll', onScroll);
  }, [items.length]);

  const goTo = (i: number) => {
    const rail = railRef.current;
    const el = rail?.children[i] as HTMLElement | undefined;
    const first = rail?.children[0] as HTMLElement | undefined;
    if (rail && el && first) rail.scrollTo({ left: el.offsetLeft - first.offsetLeft, behavior: 'smooth' });
  };

  return (
    <div>
      <div
        ref={railRef}
        role="list"
        aria-label={label}
        className="no-scrollbar -mx-4 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-px-4 px-4 pb-2 sm:mx-0 sm:grid sm:snap-none sm:grid-cols-2 sm:gap-x-8 sm:gap-y-14 sm:overflow-visible sm:px-0 sm:pb-0 lg:grid-cols-3"
      >
        {items.map((child, i) => (
          <div key={i} role="listitem" className="w-[84%] shrink-0 snap-start sm:w-auto">
            {child}
          </div>
        ))}
      </div>

      {/* Position dots (phones only) */}
      {items.length > 1 && (
        <div className="mt-4 flex items-center justify-center sm:hidden">
          {items.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to report ${i + 1}`}
              aria-current={i === active}
              onClick={() => goTo(i)}
              className="flex h-10 min-w-8 items-center justify-center"
            >
              <span className={`block h-1.5 rounded-full transition-all duration-300 ${i === active ? 'w-6 bg-primary' : 'w-1.5 bg-ink/20'}`} />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};
