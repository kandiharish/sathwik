import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

const TOP_IMAGES = [
  "/gallery-thumb/top-1.webp",
  "/gallery-thumb/top-2.webp",
  "/gallery-thumb/top-3.webp",
  "/gallery-thumb/top-4.webp",
  "/gallery-thumb/top-5.webp",
  "/gallery-thumb/top-6.webp",
  "/gallery-thumb/top-7.webp",
  "/gallery-thumb/top-8.webp",
  "/gallery-thumb/top-9.webp",
  "/gallery-thumb/top-10.webp",
  "/gallery-thumb/top-11.webp",
  "/gallery-thumb/top-12.webp",
];

const BOTTOM_IMAGES = [
  "/gallery-thumb/bot-1.webp",
  "/gallery-thumb/bot-2.webp",
  "/gallery-thumb/bot-3.webp",
  "/gallery-thumb/bot-4.webp",
  "/gallery-thumb/bot-5.webp",
  "/gallery-thumb/bot-6.webp",
  "/gallery-thumb/bot-7.webp",
  "/gallery-thumb/bot-8.webp",
  "/gallery-thumb/bot-9.webp",
  "/gallery-thumb/bot-10.webp",
  "/gallery-thumb/bot-11.webp",
  "/gallery-thumb/bot-12.webp",
];

// Double the arrays to pack more items onto a massively wide cylinder
const EXTENDED_TOP = [...TOP_IMAGES, ...TOP_IMAGES];
const EXTENDED_BOTTOM = [...BOTTOM_IMAGES, ...BOTTOM_IMAGES];

const radius = 1300;
const numItems = 24;

// Pre-compute angles to avoid recalculating on every render
const TOP_ITEMS = EXTENDED_TOP.map((src, i) => ({
  src,
  angle: i * (360 / numItems),
  key: `top-${i}`,
}));

const BOTTOM_ITEMS = EXTENDED_BOTTOM.map((src, i) => ({
  src,
  angle: i * (360 / numItems),
  key: `bottom-${i}`,
}));

export const CurvedGallery = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden w-full">
      <Container className="relative z-10 mb-8">
        <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <h2 
              className="text-5xl md:text-7xl text-[#d4c8b8]/40 tracking-tight leading-none mb-3"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Our Impressive Works
            </h2>
            <h3 className="text-5xl md:text-6xl lg:text-[72px] font-serif font-black text-[#054E38] tracking-tighter -mt-6 md:-mt-8 drop-shadow-sm">
              Gallery
            </h3>
          </motion.div>
        </div>
      </Container>

      {/* 3D Scene Container - Covers full window */}
      <div
        className="relative w-full overflow-hidden pt-10 pb-10"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)',
        }}
      >
        {/* Perspective wrapper */}
        <div className="w-full flex flex-col gap-10 md:gap-14 items-center" style={{ perspective: '2000px' }}>
          
          {/* TOP ROW - 3D Cylinder */}
          <div
            className="relative w-[280px] h-[200px]"
            style={{
              transformStyle: 'preserve-3d',
              animation: `rotateCylinderRight 45s infinite linear`,
              willChange: 'transform',
            }}
          >
            {TOP_ITEMS.map(({ src, angle, key }) => (
              <div 
                key={key}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  contain: 'strict',
                }}
                className="rounded-2xl overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.12)] border border-slate-100/50 bg-slate-50"
              >
                <img 
                  src={src} 
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{ willChange: 'auto' }}
                />
              </div>
            ))}
          </div>

          {/* BOTTOM ROW - 3D Cylinder */}
          <div
            className="relative w-[280px] h-[200px]"
            style={{
              transformStyle: 'preserve-3d',
              animation: `rotateCylinderLeft 45s infinite linear`,
              willChange: 'transform',
            }}
          >
            {BOTTOM_ITEMS.map(({ src, angle, key }) => (
              <div 
                key={key}
                style={{
                  position: 'absolute',
                  inset: 0,
                  transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  contain: 'strict',
                }}
                className="rounded-2xl overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.12)] border border-slate-100/50 bg-slate-50"
              >
                <img 
                  src={src} 
                  alt=""
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                  style={{ willChange: 'auto' }}
                />
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* CSS keyframes injected once at module level via a style tag outside the animated elements */}
      <style>{`
        @keyframes rotateCylinderRight {
          from { transform: translateZ(-${radius}px) rotateY(0deg); }
          to   { transform: translateZ(-${radius}px) rotateY(-360deg); }
        }
        @keyframes rotateCylinderLeft {
          from { transform: translateZ(-${radius}px) rotateY(0deg); }
          to   { transform: translateZ(-${radius}px) rotateY(360deg); }
        }
      `}</style>
    </section>
  );
};
