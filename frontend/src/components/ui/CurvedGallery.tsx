import { Container } from '../layout/Container';
import { motion } from 'framer-motion';

const TOP_IMAGES = [
  encodeURI("/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM (1).jpeg"),
  encodeURI("/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM.jpeg"),
  encodeURI("/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.48 PM (1).jpeg"),
  encodeURI("/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.49 PM (1).jpeg"),
  encodeURI("/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.50 PM.jpeg"),
  encodeURI("/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM (1).jpeg"),
  encodeURI("/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM.jpeg"),
  encodeURI("/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.30 PM.jpeg"),
  encodeURI("/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg"),
  encodeURI("/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.47 PM (1).jpeg"),
  encodeURI("/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.48 PM (1).jpeg"),
  encodeURI("/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.49 PM.jpeg"),
];

const BOTTOM_IMAGES = [
  encodeURI("/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg"),
  encodeURI("/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM (1).jpeg"),
  encodeURI("/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM.jpeg"),
  encodeURI("/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.22 PM.jpeg"),
  encodeURI("/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM (1).jpeg"),
  encodeURI("/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM.jpeg"),
  encodeURI("/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.53 PM.jpeg"),
  encodeURI("/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg"),
  encodeURI("/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM (1).jpeg"),
  encodeURI("/Sathanapally ap medical equipment/WhatsApp Image 2026-08-19 at 11.15.08 PM (1).jpeg"),
  encodeURI("/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.04 PM (1).jpeg"),
  encodeURI("/Up medical equipment 1 crore/WhatsApp Image 2026-08-19 at 11.11.54 PM.jpeg"),
];

// Double the arrays to pack more items onto a massively wide cylinder
const EXTENDED_TOP = [...TOP_IMAGES, ...TOP_IMAGES];
const EXTENDED_BOTTOM = [...BOTTOM_IMAGES, ...BOTTOM_IMAGES];

export const CurvedGallery = () => {
  // Constants for massive 3D Geometry to span the entire screen
  // Radius of 1300px creates a 2600px wide cylinder, spanning ultra-wide monitors effortlessly.
  const radius = 1300;
  const numItems = 24; // 24 items in the circle

  return (
    <section className="py-24 bg-white relative overflow-hidden w-full">
      <Container className="relative z-10 mb-8">
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

      {/* Global CSS for 3D animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes rotateCylinderRight {
          from { transform: translateZ(-${radius}px) rotateY(0deg); }
          to { transform: translateZ(-${radius}px) rotateY(-360deg); }
        }
        @keyframes rotateCylinderLeft {
          from { transform: translateZ(-${radius}px) rotateY(0deg); }
          to { transform: translateZ(-${radius}px) rotateY(360deg); }
        }
        .preserve-3d {
          transform-style: preserve-3d;
        }
        .cylinder-track-right {
          animation: rotateCylinderRight 80s infinite linear;
        }
        .cylinder-track-left {
          animation: rotateCylinderLeft 80s infinite linear;
        }
        .cylinder-track-right:hover, .cylinder-track-left:hover {
          animation-play-state: paused;
        }
        /* Fade the extreme left and right edges smoothly into the background */
        .edge-mask {
          mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
          -webkit-mask-image: linear-gradient(to right, transparent, black 10%, black 90%, transparent);
        }
      `}} />

      {/* 3D Scene Container - Covers full window */}
      <div className="relative w-full overflow-hidden edge-mask pt-10 pb-10">
        
        {/* Perspective wrapper: Deep perspective to make the distant cards look correct */}
        <div className="w-full flex flex-col gap-10 md:gap-14 items-center" style={{ perspective: '2000px' }}>
          
          {/* TOP ROW - 3D Cylinder */}
          <div className="relative w-[280px] h-[200px] preserve-3d cylinder-track-right will-change-transform">
            {EXTENDED_TOP.map((src, i) => {
              const angle = i * (360 / numItems);
              return (
                <div 
                  key={`top-${i}`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    // Hide the back of the cylinder so it's strictly convex facing the viewer
                    backfaceVisibility: 'hidden', 
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.12)] border border-slate-100/50 bg-slate-50 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                  <img 
                    src={src} 
                    alt={`Gallery Top ${i}`} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" 
                  />
                </div>
              );
            })}
          </div>

          {/* BOTTOM ROW - 3D Cylinder */}
          <div className="relative w-[280px] h-[200px] preserve-3d cylinder-track-left will-change-transform">
            {EXTENDED_BOTTOM.map((src, i) => {
              const angle = i * (360 / numItems);
              return (
                <div 
                  key={`bottom-${i}`}
                  style={{
                    transform: `rotateY(${angle}deg) translateZ(${radius}px)`,
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                  className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden shadow-[0_15px_40px_rgb(0,0,0,0.12)] border border-slate-100/50 bg-slate-50 cursor-pointer group"
                >
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 z-10" />
                  <img 
                    src={src} 
                    alt={`Gallery Bottom ${i}`} 
                    loading="lazy"
                    decoding="async"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 will-change-transform" 
                  />
                </div>
              );
            })}
          </div>

        </div>
      </div>

    </section>
  );
};
