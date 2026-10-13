import { useId, useRef } from 'react';
import { motion, useMotionValue, useReducedMotion, useScroll, useSpring, useTransform } from 'framer-motion';

const WORD = 'SATHWIK';

/**
 * Footer signature: the name drawn faintly, then filling with the logo colours
 * as the visitor reaches the bottom of the page. On a mouse, a soft light follows
 * the pointer across the letters. SVG `textLength` keeps it edge to edge at any width.
 */
export const FooterWordmark = () => {
  const ref = useRef<HTMLDivElement>(null);
  const id = useId().replace(/:/g, '');
  const reduceMotion = useReducedMotion();

  // 0 when the wordmark enters the viewport, 1 when the page bottom is reached.
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start end', 'end end'] });
  const progress = useSpring(scrollYProgress, { stiffness: 90, damping: 24, mass: 0.4 });
  const fillWidth = useTransform(progress, [0.15, 1], reduceMotion ? [1000, 1000] : [0, 1000]);
  const rise = useTransform(progress, [0, 1], reduceMotion ? [0, 0] : [40, 0]);

  // Pointer light (desktop only; stays parked off-canvas otherwise).
  const lightX = useMotionValue(-400);
  const lightY = useMotionValue(-400);

  const onPointerMove = (e: React.PointerEvent<SVGSVGElement>) => {
    if (e.pointerType !== 'mouse' || reduceMotion) return;
    const svg = e.currentTarget;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const local = pt.matrixTransform(svg.getScreenCTM()?.inverse());
    lightX.set(local.x);
    lightY.set(local.y);
  };
  const onPointerLeave = () => {
    lightX.set(-400);
    lightY.set(-400);
  };

  const text = (props: React.SVGProps<SVGTextElement>) => (
    <text
      x="500"
      y="168"
      textAnchor="middle"
      textLength="980"
      lengthAdjust="spacingAndGlyphs"
      className="font-serif"
      style={{ fontSize: 214, fontWeight: 600, letterSpacing: '-0.02em' }}
      {...props}
    >
      {WORD}
    </text>
  );

  return (
    <div ref={ref} className="relative select-none px-3 pb-2 sm:px-6" aria-hidden="true">
      <motion.svg
        viewBox="0 0 1000 200"
        className="block h-auto w-full overflow-visible"
        style={{ y: rise }}
        onPointerMove={onPointerMove}
        onPointerLeave={onPointerLeave}
      >
        <defs>
          <linearGradient id={`${id}-brand`} x1="0" x2="1" y1="0" y2="0">
            <stop offset="0%" stopColor="#0E8F86" />
            <stop offset="45%" stopColor="#0C87C2" />
            <stop offset="100%" stopColor="#F10328" />
          </linearGradient>
          <linearGradient id={`${id}-fade`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor="#fff" stopOpacity="1" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0.15" />
          </linearGradient>
          <mask id={`${id}-fadeMask`}>
            <rect width="1000" height="200" fill={`url(#${id}-fade)`} />
          </mask>
          <clipPath id={`${id}-reveal`}>
            <motion.rect x="0" y="0" height="200" width={fillWidth} />
          </clipPath>
          <radialGradient id={`${id}-light`}>
            <stop offset="0%" stopColor="#fff" stopOpacity="0.9" />
            <stop offset="100%" stopColor="#fff" stopOpacity="0" />
          </radialGradient>
          <mask id={`${id}-lightMask`}>
            <motion.circle r="170" fill={`url(#${id}-light)`} cx={lightX} cy={lightY} />
          </mask>
        </defs>

        {/* 1. Faint base, always visible (a fill, not a stroke: the font's overlapping
               contours would show through an outline) */}
        <g mask={`url(#${id}-fadeMask)`}>{text({ fill: 'rgba(255,255,255,0.06)' })}</g>

        {/* 2. Brand-colour fill, revealed left to right with scroll, fading toward the bottom */}
        <g clipPath={`url(#${id}-reveal)`} mask={`url(#${id}-fadeMask)`} opacity="0.5">
          {text({ fill: `url(#${id}-brand)` })}
        </g>

        {/* 3. Pointer light: brightens the letters under the cursor */}
        <g mask={`url(#${id}-lightMask)`}>
          {text({ fill: `url(#${id}-brand)` })}
          {text({ fill: 'rgba(255,255,255,0.18)' })}
        </g>
      </motion.svg>
    </div>
  );
};
