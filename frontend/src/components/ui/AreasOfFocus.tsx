import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Users, BookOpen, HeartPulse, Leaf, ChevronLeft, ChevronRight } from 'lucide-react';
import { Container } from '../layout/Container';

const areas = [
  {
    num: "01",
    title: "Empowerment",
    desc: "SRYIA provides skill development, vocational training, and employment opportunities, helping youth become economically self-sufficient and community leaders.",
    color: "bg-[#054E38]",
    textColor: "text-[#054E38]",
    glowColor: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-[#054E38]/80 group-hover:to-[#054E38]/20 group-hover:scale-110",
    icon: <Users className="w-5 h-5" />,
    image: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg"
  },
  {
    num: "02",
    title: "Education and Literacy",
    desc: "By establishing learning centers and literacy programs, SRYIA ensures access to quality education, focusing on academic and life skills to empower individuals in making informed life choices.",
    color: "bg-[#B84018]",
    textColor: "text-[#B84018]",
    glowColor: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-[#B84018]/80 group-hover:to-[#B84018]/20 group-hover:scale-110",
    icon: <BookOpen className="w-5 h-5" />,
    image: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg"
  },
  {
    num: "03",
    title: "Healthcare & Wellness",
    desc: "SRYIA promotes preventive healthcare, nutrition, and sanitation awareness through health camps and partnerships with healthcare professionals, improving community well-being.",
    color: "bg-[#1C4E52]",
    textColor: "text-[#1C4E52]",
    glowColor: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-[#1C4E52]/80 group-hover:to-[#1C4E52]/20 group-hover:scale-110",
    icon: <HeartPulse className="w-5 h-5" />,
    image: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.19 PM.jpeg"
  },
  {
    num: "04",
    title: "Environmental Sustainability",
    desc: "Through initiatives in tree planting, waste management, and clean energy adoption, SRYIA encourages eco-friendly practices to preserve natural resources and promote sustainable community growth.",
    color: "bg-[#064E3B]",
    textColor: "text-[#064E3B]",
    glowColor: "group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-b group-hover:from-[#064E3B]/80 group-hover:to-[#064E3B]/20 group-hover:scale-110",
    icon: <Leaf className="w-5 h-5" />,
    image: "ngo_homepage_accordion_1787718405546.jpg"
  }
];

export const AreasOfFocus = () => {
  const [startIndex, setStartIndex] = useState(0);

  // Infinite Loop Logic
  const nextSlide = () => {
    setStartIndex((prev) => (prev + 1) % areas.length);
  };

  const prevSlide = () => {
    setStartIndex((prev) => (prev - 1 + areas.length) % areas.length);
  };

  // Auto-play carousel
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 4500); // 4.5 seconds
    return () => clearInterval(timer);
  }, []);

  // On desktop, map exactly 3 sequential cards starting from startIndex and wrapping around
  const displayedAreas = typeof window !== 'undefined' && window.innerWidth < 768 
    ? areas 
    : [0, 1, 2].map(i => areas[(startIndex + i) % areas.length]);

  return (
    <section className="py-24 relative overflow-hidden bg-[#FAFAF9]">
      <div className="absolute top-0 right-0 w-full h-[400px] opacity-10 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]" />
      
      <Container>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px bg-green-700 w-12" />
            <div className="flex items-center gap-2 text-green-700 font-bold tracking-[0.2em] uppercase text-xs">
              <Leaf className="w-4 h-4 fill-green-700" />
              Key Areas of Focus
            </div>
            <div className="h-px bg-green-700 w-12" />
          </motion.div>

          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif font-black text-text-main mb-6"
          >
            Promoting Rural <span className="text-[#B84018]">Growth & Development</span>
          </motion.h2>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-gray-600 font-medium text-[15px]"
          >
            Sathwik Rural and Youth Integrated Association (SRYIA) works across
            key sectors to build stronger, self-reliant rural communities.
          </motion.p>
        </div>

        {/* Dynamic Grid Layout with Side Controls */}
        <div className="relative w-full z-10 group/slider">
          
          {/* Left Arrow (Desktop Only) */}
          <button 
            onClick={prevSlide}
            className="hidden md:flex absolute -left-6 lg:-left-12 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 shadow-md items-center justify-center bg-white text-gray-500 hover:bg-green-50 hover:text-[#054E38] transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          
          {/* Right Arrow (Desktop Only) */}
          <button 
            onClick={nextSlide}
            className="hidden md:flex absolute -right-6 lg:-right-12 top-[45%] -translate-y-1/2 z-20 w-10 h-10 rounded-full border border-gray-200 shadow-md items-center justify-center bg-white text-gray-500 hover:bg-green-50 hover:text-[#054E38] transition-all duration-300 opacity-0 group-hover/slider:opacity-100"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 pt-4 pl-4 min-h-[380px]">
            <AnimatePresence mode="popLayout">
              {displayedAreas.map((area) => (
                <motion.div
                  layout
                  key={area.num}
                  initial={{ opacity: 0, scale: 0.9, x: 50 }}
                  animate={{ opacity: 1, scale: 1, x: 0 }}
                  exit={{ opacity: 0, scale: 0.8, x: -50 }}
                  transition={{ duration: 0.5, type: 'spring', bounce: 0.15 }}
                  className="relative group h-full"
                >
                  {/* Colored decorative block behind the card (Top Left) */}
                  <div 
                    className={`absolute top-0 left-0 w-[40%] h-[40%] rounded-tl-[1.5rem] rounded-br-[1.5rem] ${area.color} z-0 transition-transform duration-700 group-hover:scale-110 group-hover:-translate-x-1 group-hover:-translate-y-1`} 
                  />
                  
                  {/* Main Card (Ultra Compact & Premium) */}
                  <div className="relative z-10 bg-white rounded-[1.5rem] rounded-tl-[2rem] shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.08)] overflow-hidden flex flex-col h-full border border-gray-100/50 transition-all duration-700">
                    
                    {/* Image Section */}
                    <div className="h-[140px] overflow-hidden relative rounded-t-[1.5rem] rounded-tl-[2rem]">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                      <img 
                        src={area.image} 
                        alt={area.title}
                        className="w-full h-full object-cover transition-transform duration-[1.5s] group-hover:scale-110" 
                      />
                    </div>

                    {/* Circular Overlapping Icon */}
                    <div className="absolute top-[140px] left-5 -translate-y-1/2 w-[52px] h-[52px] bg-white rounded-full flex items-center justify-center shadow-md z-20">
                      <div className={`w-[85%] h-[85%] rounded-full border-[1.5px] ${area.textColor.replace('text-', 'border-')} flex items-center justify-center bg-white transition-transform duration-500 group-hover:scale-110`}>
                        <div className={area.textColor}>
                          {area.icon}
                        </div>
                      </div>
                    </div>

                    {/* Text Content */}
                    <div className="pt-8 pb-5 px-5 relative flex-1 flex flex-col bg-white">
                      
                      {/* Flex row for Number and Title */}
                      <div className="flex items-center gap-3 mb-3">
                        <span className={`text-[38px] font-sans font-black text-gray-200/60 leading-none transition-all duration-500 origin-left select-none ${area.glowColor}`}>
                          {area.num}
                        </span>
                        <h3 className={`text-[14px] font-bold leading-snug relative z-10 ${area.textColor}`}>
                          {area.title}
                        </h3>
                      </div>
                      
                      <p className="text-gray-500 text-[11.5px] leading-[1.7] relative z-10 font-medium">
                        {area.desc}
                      </p>
                      
                      {/* Dotted decorative pattern at bottom left */}
                      <div className="mt-5 pt-3 relative z-10 opacity-30">
                        <div className="w-10 h-5" style={{ backgroundImage: 'radial-gradient(circle, #054E38 1px, transparent 1px)', backgroundSize: '5px 5px' }} />
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </Container>
    </section>
  );
};
