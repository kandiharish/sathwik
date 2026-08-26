import { useEffect, useRef, useState } from 'react';
import { motion, useAnimationFrame, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { MoveHorizontal } from 'lucide-react';
import { Container } from '../layout/Container';

// 24 unique images for the top row
const TOP_IMAGES = [
  "/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM (1).jpeg",
  "/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM (2).jpeg",
  "/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM.jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.48 PM (1).jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.48 PM.jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.49 PM (1).jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.49 PM (2).jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.49 PM.jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.50 PM (1).jpeg",
  "/Nellore ap medical equipment 1 crore project/WhatsApp Image 2026-08-19 at 11.16.50 PM.jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM (1).jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM (2).jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.29 PM.jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.30 PM (1).jpeg",
  "/nellore waterplant project 1cr/WhatsApp Image 2026-08-19 at 11.16.30 PM.jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.47 PM (1).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.47 PM (2).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.47 PM.jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.48 PM (1).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.48 PM.jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.49 PM (1).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.49 PM (2).jpeg",
  "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.49 PM.jpeg",
];

// 24 unique images for the bottom row
const BOTTOM_IMAGES = [
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM.jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM (1).jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM (2).jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.21 PM.jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.22 PM (1).jpeg",
  "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.22 PM.jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM (1).jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM (2).jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.51 PM.jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.52 PM (1).jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.52 PM.jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.53 PM.jpeg",
  "/ranchi nutrition porject/WhatsApp Image 2026-08-19 at 11.13.54 PM.jpeg",
  "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg",
  "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM (1).jpeg",
  "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM (2).jpeg",
  "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM (3).jpeg",
  "/Sathanapally ap medical equipment/WhatsApp Image 2026-08-19 at 11.15.08 PM (1).jpeg",
  "/Sathanapally ap medical equipment/WhatsApp Image 2026-08-19 at 11.15.08 PM.jpeg",
  "/Sathanapally ap medical equipment/WhatsApp Image 2026-08-19 at 11.15.09 PM.jpeg",
  "/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.04 PM (1).jpeg",
  "/Up medical equipment 1 crore/WhatsApp Image 2026-08-19 at 11.11.54 PM (1).jpeg",
  "/Up medical equipment 1 crore/WhatsApp Image 2026-08-19 at 11.11.54 PM.jpeg",
];

const CYLINDER_FACES = 24;
const ANGLE_PER_FACE = 360 / CYLINDER_FACES;

export const CurvedGallery = () => {
  const [layout, setLayout] = useState({ width: 220, radius: 835, height: 300 });
  const isDragging = useRef(false);
  
  const rotation = useMotionValue(0);
  const smoothRotation = useSpring(rotation, { damping: 30, stiffness: 150, mass: 0.8 });
  
  // Bottom row rotates in opposite direction, staggered by half a card width
  const invertedRotation = useTransform(smoothRotation, r => -r + (ANGLE_PER_FACE / 2));

  // Handle responsiveness for the 3D cylinder
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        // Mobile sizes
        const w = 140;
        const r = Math.round((w / 2) / Math.tan(Math.PI / CYLINDER_FACES));
        setLayout({ width: w, radius: r, height: 200 });
      } else {
        // Desktop sizes (smaller cards, wider radius for 24 items)
        const w = 220;
        const r = Math.round((w / 2) / Math.tan(Math.PI / CYLINDER_FACES));
        setLayout({ width: w, radius: r, height: 300 });
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Continuous auto-rotation
  useAnimationFrame((_, delta) => {
    if (!isDragging.current) {
      rotation.set(rotation.get() - (delta * 0.015)); // Slow, premium movement
    }
  });

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      
      <Container className="relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-sans font-bold tracking-tight mb-4 text-black capitalize">
            Our Impressive Works
          </h2>
          <p className="text-gray-500 font-bold text-[14px] uppercase tracking-widest">
            Gallery
          </p>
        </div>
      </Container>

      {/* 3D Curved Carousel Container */}
      <div 
        className="relative w-full overflow-hidden flex items-center justify-center mt-6 select-none"
        // Height is enough for 2 rows plus a gap
        style={{ perspective: "1000px", height: (layout.height * 2) + 40 }}
      >
        
        {/* Drag overlay to capture pan gestures anywhere over the carousel */}
        <motion.div 
          className="absolute inset-0 z-30 cursor-grab active:cursor-grabbing"
          onPanStart={() => { isDragging.current = true; }}
          onPan={(_, info) => {
            rotation.set(rotation.get() + info.delta.x * 0.15); // Adjust sensitivity for 24 faces
          }}
          onPanEnd={() => { isDragging.current = false; }}
        />

        {/* TOP ROW */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{
            width: layout.width,
            height: layout.height,
            transformStyle: "preserve-3d",
            x: "-50%",
            y: `calc(-50% - ${layout.height / 2 + 10}px)`, // Shift up
            rotateY: smoothRotation,
            // Zoomed out by 350px so we see more of the curve
            z: layout.radius - 350 
          }}
        >
          {TOP_IMAGES.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                // Position each card on the surface of the cylinder, facing inward (concave)
                transform: `rotateY(${i * ANGLE_PER_FACE}deg) translateZ(${-layout.radius}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Inner div to provide the visual gap without breaking 3D math */}
              <div className="absolute inset-x-2 inset-y-0 overflow-hidden rounded-[1.5rem] shadow-sm">
                <img 
                  src={src} 
                  alt={`Gallery Top ${i}`} 
                  className="w-full h-full object-cover pointer-events-none" 
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* BOTTOM ROW */}
        <motion.div
          className="absolute top-1/2 left-1/2"
          style={{
            width: layout.width,
            height: layout.height,
            transformStyle: "preserve-3d",
            x: "-50%",
            y: `calc(-50% + ${layout.height / 2 + 10}px)`, // Shift down
            rotateY: invertedRotation,
            // Zoomed out identically
            z: layout.radius - 350 
          }}
        >
          {BOTTOM_IMAGES.map((src, i) => (
            <div
              key={i}
              className="absolute inset-0"
              style={{
                transform: `rotateY(${i * ANGLE_PER_FACE}deg) translateZ(${-layout.radius}px)`,
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              {/* Inner div to provide the visual gap */}
              <div className="absolute inset-x-2 inset-y-0 overflow-hidden rounded-[1.5rem] shadow-sm">
                <img 
                  src={src} 
                  alt={`Gallery Bottom ${i}`} 
                  className="w-full h-full object-cover pointer-events-none" 
                />
              </div>
            </div>
          ))}
        </motion.div>

        {/* Floating "Drag to Explore" label */}
        <div className="absolute bottom-6 left-6 md:bottom-12 md:left-24 z-40 bg-black/60 backdrop-blur-md border border-white/10 text-white px-5 py-2.5 rounded-full flex items-center gap-3 pointer-events-none shadow-xl">
          <MoveHorizontal className="w-4 h-4 text-white" />
          <span className="text-[11px] font-bold tracking-wide uppercase">Drag to Explore</span>
        </div>

      </div>
    </section>
  );
};
