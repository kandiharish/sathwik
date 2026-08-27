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
    <section ref={containerRef} className="relative h-[400vh] bg-black z-40">
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex items-center justify-center bg-slate-900"
      >
        {/* Section Heading Badge - Animated Spinning Border */}
        <div className="absolute top-10 lg:top-14 left-1/2 -translate-x-1/2 z-50 pointer-events-none text-center">
          <div className="relative inline-block rounded-full shadow-lg overflow-hidden bg-gray-100 p-[3px]">
            {/* Spinning lines */}
            <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(transparent_0%,transparent_85%,#009966_100%)] opacity-90" />
            <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite_2s] bg-[conic-gradient(transparent_0%,transparent_85%,#f59e0b_100%)] opacity-90" />
            
            {/* Inner Box */}
            <div className="relative bg-white/95 backdrop-blur-xl px-12 py-3 rounded-full flex items-center justify-center">
              <h2 
                className="text-3xl md:text-[42px] text-[#054E38] tracking-wide m-0 leading-none"
                style={{ fontFamily: '"Brush Script MT", cursive' }}
              >
                Our Story
              </h2>
            </div>
          </div>
        </div>

        {/* Perspective Viewport */}
        <div 
          className="absolute inset-0 w-full h-full flex items-center justify-center pointer-events-none z-10"
          style={{ perspective: '1000px', perspectiveOrigin: 'center center' }}
        >
          {/* The Moving Tunnel World */}
          <motion.div 
            className="w-full h-full relative"
            style={{ transformStyle: 'preserve-3d', z: cameraZ }}
          >
            
            {/* Image Panels placed strictly in the corners along the Z-axis */}
            {images.map((img, idx) => {
              const tagColors = [
                "text-amber-700 bg-amber-50/95 border-amber-200/60 shadow-amber-900/10",
                "text-emerald-700 bg-emerald-50/95 border-emerald-200/60 shadow-emerald-900/10",
                "text-blue-700 bg-blue-50/95 border-blue-200/60 shadow-blue-900/10",
                "text-rose-700 bg-rose-50/95 border-rose-200/60 shadow-rose-900/10",
                "text-purple-700 bg-purple-50/95 border-purple-200/60 shadow-purple-900/10",
              ];
              const colorClass = tagColors[idx % tagColors.length];

              return (
                <div
                  key={idx}
                  className="absolute flex flex-col items-center"
                  style={{
                    left: `calc(50% + ${img.x}vw)`,
                    top: `calc(50% + ${img.y}vh)`,
                    transform: `translate3d(-50%, -50%, ${img.z}px)`,
                  }}
                >
                  <div className="w-56 md:w-80 lg:w-96 aspect-video bg-white shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[4px] border-white rounded-xl overflow-hidden mb-4">
                    <img src={img.src} alt={img.tag} className="w-full h-full object-cover" />
                  </div>
                  <span className={`text-[10px] md:text-xs font-black tracking-widest uppercase px-5 py-2.5 rounded-full shadow-xl border backdrop-blur-md ${colorClass}`}>
                    {img.tag}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};
