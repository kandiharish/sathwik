import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';

const BLOGS = [
  {
    image: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg",
    title: "Providing Clean Water in Schools"
  },
  {
    image: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg",
    title: "Healthcare Camp in Rural Villages"
  },
  {
    image: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.19 PM.jpeg",
    title: "Providing Healthcare in rural areas"
  },
  {
    image: "ngo_homepage_accordion_1787718405546.jpg",
    title: "Promoting Environmental Sustainability"
  },
  {
    image: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.07 PM.jpeg",
    title: "Empowering Youth with Education"
  },
  {
    image: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM.jpeg",
    title: "Safe Drinking Water Initiatives"
  },
  {
    image: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.20 PM.jpeg",
    title: "Medical Equipment Donation"
  },
  {
    image: "premium_3d_hero_1787720558156.jpg",
    title: "Community Outreach & Support"
  }
];

// Pre-calculate rotations and offsets for a chaotic but beautiful stack
const CARD_OFFSETS = [
  { rotate: 0, scale: 1, y: 0, x: 0 },
  { rotate: -3, scale: 0.96, y: -10, x: -15 },
  { rotate: 4, scale: 0.92, y: 5, x: 20 },
  { rotate: -2, scale: 0.88, y: -15, x: 5 },
  { rotate: 5, scale: 0.84, y: 10, x: -10 },
  { rotate: -4, scale: 0.8, y: 0, x: 25 },
  { rotate: 2, scale: 0.76, y: -5, x: -25 },
  { rotate: 4, scale: 0.72, y: 15, x: 10 },
];

export const GalleryStack = () => {
  const [cards, setCards] = useState(BLOGS.map((_, i) => i));
  const [isAnimating, setIsAnimating] = useState(false);

  const handleNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    
    setCards((prev) => {
      const newArray = [...prev];
      const top = newArray.shift();
      if (top !== undefined) {
        newArray.push(top);
      }
      return newArray;
    });

    setTimeout(() => setIsAnimating(false), 500); // Prevent spam clicking during animation
  };

  return (
    <section className="py-32 relative overflow-hidden bg-[#FAFAF9] min-h-[900px] flex items-center justify-center">
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Top text matching the screenshot, with added description */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 max-w-2xl"
          >
            <h2 className="text-2xl md:text-3xl font-serif italic text-[#054E38] mb-3" style={{ fontFamily: '"Brush Script MT", cursive' }}>
              Building Brighter Futures
            </h2>
            <h3 className="text-4xl md:text-5xl font-sans font-black text-[#A42C25] mb-4">
              Our Latest Blogs
            </h3>
            <p className="text-gray-600 font-medium text-[15px]">
              Explore our recent field activities, community outreach programs, and the real-world impact we are making every single day across rural areas.
            </p>
          </motion.div>

          {/* Stack Container */}
          <div className="relative w-full max-w-[400px] aspect-[4/5] perspective-[1000px] mt-4">
            <AnimatePresence mode="popLayout">
              {cards.map((blogIndex, arrayIndex) => {
                const isTop = arrayIndex === 0;
                const offset = CARD_OFFSETS[Math.min(arrayIndex, CARD_OFFSETS.length - 1)];
                const blog = BLOGS[blogIndex];

                return (
                  <motion.div
                    key={blogIndex}
                    layout
                    initial={false}
                    animate={{
                      rotate: offset.rotate,
                      scale: offset.scale,
                      y: offset.y,
                      // When it's the last card (just moved to back), we slide it slightly to the right first to look like a swipe
                      x: arrayIndex === cards.length - 1 && isAnimating ? offset.x + 100 : offset.x,
                      zIndex: cards.length - arrayIndex,
                      opacity: arrayIndex < 5 ? 1 : 0
                    }}
                    transition={{
                      type: "spring",
                      stiffness: 200,
                      damping: 20,
                      mass: 1,
                    }}
                    onClick={isTop ? handleNext : undefined}
                    className={`absolute inset-0 bg-transparent cursor-pointer origin-center
                      ${isTop ? 'hover:-translate-y-2 hover:scale-[1.02] transition-transform duration-300' : 'pointer-events-none'}
                    `}
                  >
                    <div className="w-full h-full relative rounded-[1.2rem] shadow-[0_15px_40px_rgba(0,0,0,0.12)] bg-white overflow-hidden flex flex-col group/blog border border-gray-100">
                      {/* Image taking up most of the card */}
                      <div className="w-full h-full relative overflow-hidden">
                        <div className="absolute inset-0 bg-black/5 group-hover/blog:bg-transparent transition-colors duration-500 z-10" />
                        <img
                          src={blog.image}
                          alt={blog.title}
                          className="w-full h-full object-cover select-none pointer-events-none transition-transform duration-1000 group-hover/blog:scale-105"
                        />
                      </div>
                      
                      {/* Overlapping White Content Box at the bottom (Smaller Size) */}
                      <div className={`absolute bottom-3 left-3 right-3 bg-white/95 backdrop-blur-sm rounded-[0.8rem] p-4 shadow-[0_8px_20px_rgba(0,0,0,0.06)] z-20 transition-opacity duration-500 ${isTop ? 'opacity-100' : 'opacity-80'}`}>
                        <h4 className="text-gray-900 font-bold text-[15px] leading-tight mb-3 pr-2 line-clamp-2">
                          {blog.title}
                        </h4>
                        
                        <div className="flex justify-end mt-1">
                          <span className="text-[#A42C25] text-[12px] font-bold transition-colors hover:text-red-800 flex items-center gap-1 group-hover/blog:underline decoration-2 underline-offset-4">
                            &rarr; Read More
                          </span>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </AnimatePresence>
            
            {/* Instruction Label */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute -right-12 md:-right-28 top-1/2 -translate-y-1/2 bg-[#054E38] text-white text-[10px] font-bold uppercase tracking-[0.2em] py-2 px-4 rounded-full shadow-lg rotate-90 origin-left hidden md:block"
            >
              Click To Next Blog
            </motion.div>
          </div>
          
        </div>
      </Container>
    </section>
  );
};
