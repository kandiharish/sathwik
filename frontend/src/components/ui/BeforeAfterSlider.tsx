import { useId, useState } from 'react';
import { ChevronsLeftRight } from 'lucide-react';
import { Img } from '../common/Img';

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeAlt?: string;
  afterAlt?: string;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}

/**
 * Before / after comparison. The divider is driven by a native range input laid
 * over the photos, so it works with mouse, touch and keyboard (arrow keys,
 * Home / End, Page Up / Down) and is announced by screen readers.
 */
export const BeforeAfterSlider = ({
  beforeImage,
  afterImage,
  beforeAlt = 'Before',
  afterAlt = 'After',
  beforeLabel = 'Before',
  afterLabel = 'After',
  className = '',
}: BeforeAfterSliderProps) => {
  const [position, setPosition] = useState(50);
  const id = useId();

  return (
    <div
      className={`group relative aspect-[4/3] w-full select-none overflow-hidden rounded-2xl border border-line bg-sand md:aspect-[16/9] ${className}`}
    >
      {/* After (full) */}
      <Img
        src={afterImage}
        alt={afterAlt}
        width={1600}
        height={900}
        draggable={false}
        className="pointer-events-none absolute inset-0 h-full w-full object-cover"
      />

      {/* Before (clipped to the divider) */}
      <div className="pointer-events-none absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
        <Img
          src={beforeImage}
          alt={beforeAlt}
          width={1600}
          height={900}
          draggable={false}
          className="absolute inset-0 h-full w-full object-cover"
        />
      </div>

      {/* Divider + handle (visual only; the range input below is the control) */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 -translate-x-1/2 bg-white"
        style={{ left: `${position}%` }}
      >
        <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white text-primary shadow-[var(--shadow-lift)] transition-transform duration-200 group-has-[input:focus-visible]:outline-2 group-has-[input:focus-visible]:outline-offset-2 group-has-[input:focus-visible]:outline-accent">
          <ChevronsLeftRight className="h-5 w-5" />
        </span>
      </div>

      {/* Labels */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute left-4 top-4 z-10 rounded-full bg-ink/70 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-white backdrop-blur-sm"
      >
        {beforeLabel}
      </span>
      <span
        aria-hidden="true"
        className="pointer-events-none absolute right-4 top-4 z-10 rounded-full bg-white/90 px-3 py-1.5 text-[11px] font-semibold uppercase tracking-[0.12em] text-primary backdrop-blur-sm"
      >
        {afterLabel}
      </span>

      <label htmlFor={id} className="sr-only">
        Drag or use the arrow keys to compare the {beforeLabel.toLowerCase()} and {afterLabel.toLowerCase()} photos
      </label>
      <input
        id={id}
        type="range"
        min={0}
        max={100}
        step={1}
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        aria-valuetext={`${Math.round(position)}% ${beforeLabel.toLowerCase()}`}
        className="absolute inset-0 z-20 h-full w-full cursor-ew-resize appearance-none bg-transparent opacity-0 [touch-action:pan-y]"
      />
    </div>
  );
};
