import { useRef } from 'react';
import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';

// Using clean, properly formatted images from the public folder to ensure they always load
const BLOGS = [
  {
    image: "/healthcare_rural.jpg",
    title: "Healthcare Access"
  },
  {
    image: "/education_rural.jpg",
    title: "Youth Education"
  },
  {
    image: "/environment_rural.jpg",
    title: "Eco Sustainability"
  },
  {
    image: "/empowerment_rural.jpg",
    title: "Community Empowerment"
  },
  {
    image: "/clean_water.jpg",
    title: "Clean Water Access"
  },
  {
    image: "/healthcare_rural.jpg", // Reusing clean assets to maintain aesthetic
    title: "Rural Health Camps"
  },
  {
    image: "/education_rural.jpg",
    title: "Medical Equipment"
  },
  {
    image: "/empowerment_rural.jpg",
    title: "Community Outreach"
  }
];

// Duplicate for continuous seamless scrolling (Marquee)
const EXTENDED_BLOGS = [...BLOGS, ...BLOGS];

export const GalleryStack = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAF8] z-10 flex flex-col">
      {/* Background with seamless fades */}
      <div className="absolute inset-0 w-full h-full z-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-[30vh] bg-gradient-to-b from-[#FAFAF8] to-transparent z-10" />
        <img 
          src="/image%20copy%208.png" 
          alt="Blogs Background" 
          className="w-full h-full object-contain object-center opacity-[0.35]"
        />
        <div className="absolute bottom-0 left-0 w-full h-[30vh] bg-gradient-to-t from-[#FAFAF8] to-transparent z-10" />
      </div>
      
      <Container className="relative z-10 pointer-events-none">
        <div className="flex flex-col items-center text-center mb-16 mt-0 w-full max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-5xl md:text-7xl text-[#d4c8b8]/40 tracking-tight leading-none mb-3"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Stories of Change
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-[#1d1d1f] tracking-tight -mt-8 md:-mt-10">
              Our Latest Blogs
            </h3>
            <p className="text-gray-600 font-medium text-[15px] mt-4 max-w-lg mx-auto">
              Swipe through our recent field activities and see the real-world impact we're making across rural areas.
            </p>
          </motion.div>
        </div>
      </Container>

      {/* Global Style for high-performance GPU animations */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes gentleSway1 {
          0%, 100% { transform: rotate(-1.5deg); }
          50% { transform: rotate(1.5deg); }
        }
        @keyframes gentleSway2 {
          0%, 100% { transform: rotate(1.5deg); }
          50% { transform: rotate(-1.5deg); }
        }
        @keyframes gentleSway3 {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(1deg); }
        }
        @keyframes marqueeScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .marquee-track:hover {
          animation-play-state: paused;
        }
      `}} />

      {/* Clothesline Container */}
      <div className="relative w-full mt-10 z-20" ref={containerRef}>
        
        {/* The infinite horizontal line (the brown clothesline rope) */}
        <div className="absolute top-0 left-0 w-full h-[2px] bg-[#8b5a2b]/80 z-0 shadow-sm" />

        {/* The scrollable track of hanging cards - Uses CSS marquee animation */}
        <div 
          className="flex gap-12 md:gap-16 px-8 pb-32 pt-0 w-max will-change-transform marquee-track"
          style={{ animation: 'marqueeScroll 40s linear infinite' }}
        >
          
          {EXTENDED_BLOGS.map((blog, idx) => {
            const animType = (idx % 3) + 1;
            const duration = 4.5 + (idx % 2); // 4.5s or 5.5s
            
            return (
              <div key={idx} className="relative flex flex-col items-center flex-shrink-0 group">
                
                {/* The "Clip" and String (Brown colored) */}
                <div className="w-[1.5px] h-8 bg-[#8b5a2b]/70 relative z-10 flex flex-col items-center transition-all duration-300 group-hover:bg-[#8b5a2b]">
                  {/* Top ring/clip on the wire */}
                  <div className="absolute -top-[5px] w-3 h-3 rounded-full border-[2px] border-[#8b5a2b] bg-[#FAFAF8] shadow-sm transition-all duration-300 group-hover:scale-125 group-hover:border-[#6b421a]" />
                </div>
                
                {/* The Hanging Card */}
                {/* Pauses swaying when hovered, scales up massively, and comes to front */}
                <div
                  style={{
                    animation: `gentleSway${animType} ${duration}s ease-in-out infinite`,
                    transformOrigin: 'top center'
                  }}
                  className="group-hover:[animation-play-state:paused] w-[240px] md:w-[280px] h-[320px] md:h-[360px] bg-white rounded-2xl shadow-[0_15px_40px_rgba(0,0,0,0.06)] border border-slate-100 flex flex-col cursor-pointer transition-all duration-500 group-hover:z-50 group-hover:scale-110 group-hover:-translate-y-2 group-hover:shadow-[0_30px_60px_rgba(0,0,0,0.2)] will-change-transform"
                >
                  
                  {/* Decorative tape/clip at the top of the card (now matches brown theme) */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-2.5 bg-[#8b5a2b]/20 backdrop-blur-md border border-[#8b5a2b]/30 rounded-full z-20 shadow-sm" />

                  {/* Blog Image */}
                  <div className="w-full h-[60%] relative overflow-hidden bg-slate-100 rounded-t-2xl">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent pointer-events-none" />
                  </div>
                  
                  {/* Blog Content */}
                  <div className="flex-1 p-5 flex flex-col justify-between bg-white relative rounded-b-2xl">
                    <div>
                      <div className="flex items-center gap-2 mb-2">
                        <span className="text-[9px] font-bold tracking-widest uppercase text-[#054E38]/70 bg-[#054E38]/5 px-2 py-1 rounded-sm">
                          Impact Story
                        </span>
                      </div>
                      <h4 className="text-lg font-serif font-black text-slate-900 tracking-tight leading-tight line-clamp-2">
                        {blog.title}
                      </h4>
                    </div>
                    
                    <div className="flex items-center gap-2 text-[#cc4a14] font-bold text-[11px] uppercase tracking-widest group-hover:text-[#a3380e] transition-colors">
                      Read Article <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                </div>
              </div>
            );
          })}
          
        </div>
      </div>
    </section>
  );
};
