import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  // Pulled in closer to the center to create a tight "box" that you fly through
  { src: '/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg', x: -25, y: -10, z: -500, tag: 'Nutrition Drive' },
  { src: '/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg', x: 25, y: 15, z: -1500, tag: 'RO Water Plant' },
  { src: '/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg', x: -10, y: 25, z: -2500, tag: 'Inclusive Education' },
  { src: '/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg', x: 15, y: -25, z: -3500, tag: 'Community Gym' },
  { src: '/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.17 PM (1).jpeg', x: -25, y: 15, z: -4500, tag: 'Medical Equipment' },
  { src: '/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.50 PM.jpeg', x: 25, y: -15, z: -5500, tag: 'Health Support' },
  { src: '/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.53 PM.jpeg', x: 10, y: 25, z: -6500, tag: 'Clean Drinking Water' },
  { src: '/blind school porject/WhatsApp Image 2026-08-19 at 11.13.23 PM.jpeg', x: -15, y: -25, z: -7500, tag: 'School Infrastructure' },
  { src: '/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.19 PM.jpeg', x: -25, y: -5, z: -8500, tag: 'Hospital Upgrades' },
  { src: '/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM.jpeg', x: 25, y: 10, z: -9500, tag: 'Fitness Initiatives' },
  { src: '/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg', x: 0, y: 25, z: -10500, tag: 'Rural Outreach' },
  { src: '/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg', x: 20, y: -25, z: -11500, tag: 'Sustainability' },
  { src: '/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg', x: -25, y: 15, z: -12500, tag: 'Youth Empowerment' },
  { src: '/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg', x: 25, y: -15, z: -13500, tag: 'Health & Wellness' },
];

export const InteractiveTunnel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  // The camera moves up exactly past the last image to prevent blank scrolling space
  const cameraZ = useTransform(scrollYProgress, [0, 1], [0, 13800]);

  return (
    <section ref={containerRef} className="relative h-[400vh] bg-[#FAFAF9] z-40">
      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-[#FAFAF9]">
        
        {/* Section Heading Badge */}
        <div className="absolute top-10 lg:top-14 left-1/2 -translate-x-1/2 z-50 pointer-events-none">
          <h3 className="text-sm md:text-base font-black tracking-[0.3em] uppercase text-white bg-gradient-to-r from-primary via-[#0000B3] to-primary bg-[length:200%_auto] px-8 py-3 rounded-full shadow-[0_8px_30px_rgba(0,0,179,0.25)] border border-white/20">
            Our Story
          </h3>
        </div>

        {/* Perspective Viewport */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none"
          style={{ perspective: '1000px', perspectiveOrigin: 'center center' }}
        >
          {/* The Moving Tunnel World */}
          <motion.div 
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d', z: cameraZ }}
          >
            
            {/* Simple infinite zooming grid background */}
            <div className="absolute left-1/2 top-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                 style={{ 
                   transform: 'translateZ(-15000px)',
                   backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.04) 2px, transparent 2px)',
                   backgroundSize: '100px 100px',
                 }}
            />
            <div className="absolute left-1/2 top-1/2 w-[300vw] h-[300vh] -translate-x-1/2 -translate-y-1/2 pointer-events-none"
                 style={{ 
                   transform: 'translateZ(-7000px)',
                   backgroundImage: 'linear-gradient(rgba(0,0,0,0.04) 2px, transparent 2px), linear-gradient(90deg, rgba(0,0,0,0.04) 2px, transparent 2px)',
                   backgroundSize: '200px 200px',
                 }}
            />

            {/* Image Panels placed strictly in the corners along the Z-axis */}
            {images.map((img, idx) => (
              <div
                key={idx}
                className="absolute flex flex-col items-center"
                style={{
                  left: `calc(50% + ${img.x}vw)`,
                  top: `calc(50% + ${img.y}vh)`,
                  transform: `translate3d(-50%, -50%, ${img.z}px)`,
                }}
              >
                <div className="w-56 md:w-80 lg:w-96 aspect-video bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[4px] border-white rounded-xl overflow-hidden mb-3">
                  <img src={img.src} alt={img.tag} className="w-full h-full object-cover" />
                </div>
                <span className="text-[9px] md:text-[11px] font-bold tracking-widest uppercase text-gray-500 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full shadow-sm border border-white/50">
                  {img.tag}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Screen-Space UI removed as per request */}

        {/* Ambient Overlay for depth */}
        <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_center,transparent_0%,rgba(250,250,249,0.9)_100%)] z-10"></div>
      </div>
    </section>
  );
};
