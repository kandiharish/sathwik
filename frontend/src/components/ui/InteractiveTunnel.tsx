import { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

const FOCUS_AREAS = [
  {
    tag: "HEALTHCARE",
    title: "Healthcare & Medical Infrastructure",
    subtitle: "Healing communities from within.",
    description: "We believe that access to quality healthcare is a fundamental human right. Our initiatives focus on equipping rural hospitals with life-saving medical devices, establishing local health camps, and building robust infrastructure that can serve generations.",
    img: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.17 PM (1).jpeg"
  },
  {
    tag: "WASH",
    title: "Water, Sanitation & Hygiene",
    subtitle: "The foundation of a healthy life.",
    description: "Clean water is the starting point for all community development. We install advanced RO water plants and build modern sanitation facilities in underserved villages, drastically reducing waterborne diseases and improving overall public health.",
    img: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg"
  },
  {
    tag: "EDUCATION",
    title: "Education & School Infrastructure",
    subtitle: "Empowering the minds of tomorrow.",
    description: "Education is the most powerful tool to break the cycle of poverty. We reconstruct dilapidated rural schools, provide essential learning materials, and create safe, inspiring environments where every child has the opportunity to thrive.",
    img: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg"
  },
  {
    tag: "NUTRITION",
    title: "Nutrition & Maternal Health",
    subtitle: "Nourishing mothers, protecting futures.",
    description: "A community cannot grow if its people are undernourished. Our targeted nutrition drives provide essential sustenance to expecting mothers and young children, ensuring they receive the vital vitamins and calories needed for healthy development.",
    img: "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg"
  },
  {
    tag: "WELLNESS",
    title: "Sports & Community Wellness",
    subtitle: "Building strength and solidarity.",
    description: "Physical fitness is crucial for a vibrant community. By constructing open-air gyms and sports facilities in rural areas, we provide youth with healthy outlets for their energy, fostering teamwork, discipline, and long-term physical well-being.",
    img: "/Open air gym in hyd/WhatsApp Image 2026-08-19 at 11.15.20 PM (1).jpeg"
  },
  {
    tag: "INFRASTRUCTURE",
    title: "Infrastructure Development",
    subtitle: "Paving the way to progress.",
    description: "We lay the groundwork for economic growth by developing essential community infrastructure. From community halls to skill development centers, we build the physical spaces where communities can gather, learn, and grow together.",
    img: "/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.04 PM (1).jpeg"
  },
  {
    tag: "INCLUSION",
    title: "Disability Inclusion",
    subtitle: "Ensuring no one is left behind.",
    description: "A truly developed society is measured by how it treats its most vulnerable. We provide specialized support, medical equipment, and accessible infrastructure for individuals with disabilities, ensuring they can participate fully in community life.",
    img: "/Sathanapally ap medical equipment/WhatsApp Image 2026-08-19 at 11.15.08 PM (1).jpeg"
  },
  {
    tag: "HOLISTIC",
    title: "Holistic Development",
    subtitle: "Integrating all facets of life.",
    description: "True development requires a multi-dimensional approach. We integrate economic, social, and environmental strategies to create self-sustaining rural ecosystems where every individual has the resources and agency to build a better life.",
    img: "/nandhyala project 3cr/WhatsApp Image 2026-08-19 at 11.12.45 PM (1).jpeg"
  }
];

// Helper component for individual cards in the stack
const StackCard = ({ 
  item, 
  index, 
  total, 
  scrollYProgress 
}: { 
  item: typeof FOCUS_AREAS[0]; 
  index: number; 
  total: number; 
  scrollYProgress: MotionValue<number>;
}) => {
  // Define the scroll range for this specific card
  // Cards enter one by one. 
  // Card 0 enters immediately. Card 1 enters after.
  const startEntry = index / total;
  const endEntry = (index + 0.5) / total;
  
  // As subsequent cards enter, this card scales down and moves up slightly
  const startExit = (index + 1) / total;
  const endExit = (index + 2) / total;

  // Transformations
  // Fly in from bottom (100vh) to center (0)
  const yEntry = useTransform(scrollYProgress, [startEntry, endEntry], ["100vh", "0vh"]);
  
  // When next card comes in, move this one up slightly for a stacking effect
  const yExit = useTransform(scrollYProgress, [startExit, endExit], ["0vh", "-4vh"]);
  
  // Combine Y movements
  const y = useTransform(() => {
    if (scrollYProgress.get() < endEntry) return yEntry.get();
    return yExit.get();
  });

  // Scale down as newer cards stack on top
  const scale = useTransform(scrollYProgress, [startExit, endExit], [1, 0.95 - (total - index) * 0.01]);
  
  // Dim slightly as newer cards stack on top
  const opacity = useTransform(scrollYProgress, [startExit, endExit], [1, 1]);

  return (
    <motion.div
      style={{
        y,
        scale,
        opacity,
        zIndex: index + 10,
        // willChange forces GPU acceleration
        willChange: "transform"
      }}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[90%] md:max-w-5xl h-[70vh] md:h-[500px] bg-white rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] overflow-hidden flex flex-col md:flex-row border border-slate-100"
    >
      {/* Left Half - Image */}
      <div className="w-full md:w-1/2 h-[40%] md:h-full relative overflow-hidden bg-slate-100">
        <img 
          src={item.img} 
          alt={item.title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/10 to-transparent pointer-events-none" />
      </div>

      {/* Right Half - Content */}
      <div className="w-full md:w-1/2 h-[60%] md:h-full p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-[#FAFAF8]">
        <div className="inline-block bg-[#ebf2ed] text-[#164626] text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase px-3 py-1.5 rounded-sm mb-6 w-max">
          {item.tag}
        </div>
        
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-slate-900 leading-tight mb-4">
          {item.title}
        </h3>
        
        <p className="font-serif italic text-lg md:text-xl text-[#054E38] mb-6">
          "{item.subtitle}"
        </p>
        
        <p className="text-slate-600 text-sm md:text-[15px] leading-relaxed">
          {item.description}
        </p>
      </div>
    </motion.div>
  );
};

export const InteractiveTunnel = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  return (
    // Total height determines how long it takes to scroll through the whole stack
    <section ref={containerRef} className="relative h-[600vh] bg-[#FAFAF8] z-40">
      
      {/* Sticky Viewport */}
      <div 
        className="sticky top-0 h-screen w-full overflow-hidden flex flex-col items-center justify-center"
        style={{
          backgroundImage: `url('/image%20copy.png')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      >
        {/* Soft white overlay for premium aesthetic */}
        <div className="absolute inset-0 bg-white/60 pointer-events-none z-0" />

        {/* Section Heading Badge */}
        <div className="absolute top-10 lg:top-14 left-1/2 -translate-x-1/2 z-50 pointer-events-none text-center">
          <div className="relative inline-block rounded-full shadow-sm overflow-hidden bg-white/40 backdrop-blur-md border border-white p-[3px]">
            <div className="relative bg-white/90 backdrop-blur-xl px-12 py-3 rounded-full flex items-center justify-center">
              <h2 
                className="text-3xl md:text-[42px] text-[#054E38] tracking-wide m-0 leading-none"
                style={{ fontFamily: '"Brush Script MT", cursive' }}
              >
                Our Core Focus Areas
              </h2>
            </div>
          </div>
        </div>

        {/* The Card Stack Viewport */}
        <div className="absolute inset-0 w-full h-full flex items-center justify-center z-10 perspective-1000">
          {FOCUS_AREAS.map((item, idx) => (
            <StackCard 
              key={idx} 
              item={item} 
              index={idx} 
              total={FOCUS_AREAS.length} 
              scrollYProgress={scrollYProgress} 
            />
          ))}
        </div>
        
      </div>
    </section>
  );
};
