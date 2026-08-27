import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';

const BLOGS = [
  {
    image: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg",
    title: "Clean Water Access"
  },
  {
    image: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg",
    title: "Rural Health Camps"
  },
  {
    image: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.19 PM.jpeg",
    title: "Healthcare Access"
  },
  {
    image: "ngo_homepage_accordion_1787718405546.jpg",
    title: "Eco Sustainability"
  },
  {
    image: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.07 PM.jpeg",
    title: "Youth Education"
  },
  {
    image: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.52 PM.jpeg",
    title: "Safe Drinking Water"
  },
  {
    image: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.20 PM.jpeg",
    title: "Medical Equipment"
  },
  {
    image: "premium_3d_hero_1787720558156.jpg",
    title: "Community Outreach"
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
    <section className="py-12 lg:py-16 relative overflow-hidden bg-[#FAFAF8] z-10 min-h-[100vh] max-h-[900px] flex items-center justify-center">
      
      {/* EXACT FITTED BACKGROUND IMAGE WITH SEAMLESS FADES */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-end flex-col">
        {/* Massive Top Fade to create solid space for the stylish header */}
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-transparent z-10 pointer-events-none" />
        
        <img 
          src="/image%20copy%208.png" 
          alt="Blogs Background" 
          className="w-full h-full object-contain object-center opacity-70"
        />
        {/* Very soft white overlay to ensure content is readable, classic Apple style */}
        <div className="absolute inset-0 bg-white/40 z-0" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
      </div>
      
      <Container className="relative z-10">
        <div className="flex flex-col items-center">
          
          {/* Stylish Inter-Section Space Heading */}
          <div className="flex flex-col items-center text-center mb-8 mt-0 w-full max-w-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="w-full"
            >
              <h2 
                className="text-5xl md:text-7xl text-[#d4c8b8]/40 tracking-tight leading-none mb-3"
                style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
              >
                Building Brighter Futures
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-[#1d1d1f] tracking-tight -mt-8 md:-mt-10">
                Our Latest Blogs
              </h3>
              <p className="text-gray-600 font-medium text-[15px] mt-4 max-w-lg mx-auto">
                Explore our recent field activities and the real-world impact we are making across rural areas.
              </p>
            </motion.div>
          </div>

          {/* Stack Container */}
          <div className="relative w-full max-w-[320px] aspect-[4/5] perspective-[1000px] mt-4">
            <AnimatePresence mode="popLayout">
              {cards.map((blogIndex, arrayIndex) => {
                const isTop = arrayIndex === 0;
                const offset = CARD_OFFSETS[Math.min(arrayIndex, CARD_OFFSETS.length - 1)];
                const blog = BLOGS[blogIndex];

                // Initial fan-out calculation
                const fanOutX = offset.x * (Math.abs(offset.x) > 10 ? 3 : -3);
                const fanOutRotate = offset.rotate * 3;

                return (
                  <motion.div
                    key={blogIndex}
                    layout
                    initial={{
                      rotate: fanOutRotate,
                      scale: offset.scale,
                      y: offset.y + 100,
                      x: fanOutX,
                      opacity: 0
                    }}
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
                      stiffness: 120,
                      damping: 16,
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
                      
                      {/* Overlapping White Content Box at the bottom (Smaller, Shiny, Bold) */}
                      <div className={`absolute bottom-3 left-3 right-3 bg-white/60 backdrop-blur-md rounded-[14px] p-3 shadow-[0_4px_15px_rgba(0,0,0,0.1)] border border-white/60 z-20 transition-all duration-500 group-hover/blog:bg-white/80 ${isTop ? 'opacity-100' : 'opacity-80'}`}>
                        <div className="flex items-center justify-between gap-2">
                          <h4 className="text-[#053e2f] font-black tracking-tight text-[15px] leading-none line-clamp-1">
                            {blog.title}
                          </h4>
                          <span className="text-[#A42C25] flex-shrink-0 text-[11px] font-bold transition-colors group-hover/blog:text-red-800 flex items-center gap-1 uppercase tracking-wide">
                            Read <ArrowRight className="w-3 h-3" />
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
