import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Container } from '../layout/Container';

// Reduced array sizes for performance (12 per row instead of 24)
const TOP_IMAGES = [
  "/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM (1).jpeg",
  "/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM.jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.48 PM (1).jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.49 PM (1).jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.50 PM.jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM (1).jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM.jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.30 PM.jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.47 PM (1).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.48 PM (1).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.49 PM.jpeg",
];

const BOTTOM_IMAGES = [
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM (1).jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM.jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.22 PM.jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM (1).jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM.jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.53 PM.jpeg",
  "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg",
  "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM (1).jpeg",
  "/Sathanapally ap medical equipment/WhatsApp Image 2026-08-19 at 11.15.08 PM (1).jpeg",
  "/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.04 PM (1).jpeg",
  "/Up medical equipment 1 crore/WhatsApp Image 2026-08-19 at 11.11.54 PM.jpeg",
];

export const CurvedGallery = () => {
  const containerRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax scroll effect attached to page scroll, drastically cheaper than continuous requestAnimationFrame
  const topX = useTransform(scrollYProgress, [0, 1], ["0%", "-30%"]);
  const bottomX = useTransform(scrollYProgress, [0, 1], ["-30%", "0%"]);

  return (
    <section ref={containerRef} className="py-24 bg-white relative overflow-hidden">
      <Container className="relative z-10 mb-12">
        <div className="flex flex-col items-center text-center w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8 }}
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

      {/* 2D Performant Marquee Rows */}
      <div className="flex flex-col gap-6 lg:gap-8 w-full overflow-hidden will-change-transform">
        
        {/* TOP ROW */}
        <motion.div 
          style={{ x: topX }}
          className="flex gap-4 lg:gap-6 w-max pl-4"
        >
          {/* Double the array to ensure smooth continuous visuals without snapping */}
          {[...TOP_IMAGES, ...TOP_IMAGES].map((src, i) => (
            <div 
              key={`top-${i}`} 
              className="relative w-[280px] h-[200px] md:w-[350px] md:h-[250px] rounded-2xl overflow-hidden shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-slate-50"
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 z-10 cursor-pointer" />
              <img 
                src={src} 
                alt={`Gallery Top ${i}`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 will-change-transform" 
              />
            </div>
          ))}
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div 
          style={{ x: bottomX }}
          className="flex gap-4 lg:gap-6 w-max pl-4 ml-[-20vw]" // Offset start position
        >
          {[...BOTTOM_IMAGES, ...BOTTOM_IMAGES].map((src, i) => (
            <div 
              key={`bottom-${i}`} 
              className="relative w-[280px] h-[200px] md:w-[350px] md:h-[250px] rounded-2xl overflow-hidden shrink-0 shadow-[0_8px_30px_rgb(0,0,0,0.06)] bg-slate-50"
            >
              <div className="absolute inset-0 bg-black/0 hover:bg-black/10 transition-colors duration-300 z-10 cursor-pointer" />
              <img 
                src={src} 
                alt={`Gallery Bottom ${i}`} 
                loading="lazy"
                decoding="async"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700 will-change-transform" 
              />
            </div>
          ))}
        </motion.div>
        
      </div>
    </section>
  );
};
