import { useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Container } from '../layout/Container';
import { Target, Heart, Sprout } from 'lucide-react';

export const WhoWeAre = () => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  const stats = [
    { label: "Vision", value: "Sustainable", icon: Sprout, color: "text-emerald-500", bg: "bg-emerald-50" },
    { label: "Mission", value: "Grassroots", icon: Target, color: "text-amber-500", bg: "bg-amber-50" },
    { label: "Focus", value: "Community", icon: Heart, color: "text-rose-500", bg: "bg-rose-50" }
  ];

  return (
    <section 
      ref={containerRef}
      className="py-24 md:py-32 bg-white relative overflow-hidden selection:bg-[#054E38] selection:text-white"
    >
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-emerald-50/30 rounded-full blur-[120px] -z-10 translate-x-1/3 -translate-y-1/3" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-amber-50/30 rounded-full blur-[100px] -z-10 -translate-x-1/3 translate-y-1/3" />

      <Container>
        <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Typography & Content */}
          <div className="w-full lg:w-1/2 relative z-10" ref={textRef}>
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-slate-50 border border-slate-100 mb-8">
                <span className="w-2 h-2 rounded-full bg-[#054E38] animate-pulse" />
                <span className="text-sm font-bold tracking-widest uppercase text-slate-500">Discover SRYIA</span>
              </div>

              <h2 className="text-5xl md:text-7xl font-serif font-black text-slate-900 leading-[1.1] tracking-tight mb-8">
                Who <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#054E38] to-[#0a7a5c]">We Are</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
              className="space-y-6"
            >
              <p className="text-xl md:text-2xl text-slate-700 leading-relaxed font-medium">
                The Sathwik Rural and Youth Integrated Association (SRYIA) was founded with a singular vision: to bring <span className="text-[#054E38] font-bold">sustainable development</span> to the grassroots of India.
              </p>
              
              <p className="text-lg text-slate-600 leading-relaxed border-l-4 border-amber-400 pl-6 my-8 italic">
                "We recognize that true progress is impossible without addressing the fundamental needs of our rural communities."
              </p>

              <p className="text-lg text-slate-600 leading-relaxed">
                Through collaborative efforts, innovative solutions, and unwavering dedication, we empower individuals to become architects of their own future. From healthcare and education to skill development and environmental sustainability, our holistic approach ensures no community is left behind.
              </p>
            </motion.div>
          </div>

          {/* Right Side: Interactive Visuals */}
          <div className="w-full lg:w-1/2 relative h-[600px] flex items-center justify-center">
            
            {/* Central Floating Image Frame */}
            <motion.div 
              style={{ y, opacity }}
              className="absolute z-20 w-[80%] h-[70%] rounded-3xl overflow-hidden shadow-2xl border-8 border-white"
            >
              <div className="absolute inset-0 bg-[#054E38]/10 mix-blend-overlay z-10" />
              <img 
                src="/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM (1).jpeg" 
                alt="Community Empowerment" 
                className="w-full h-full object-cover"
              />
            </motion.div>

            {/* Orbiting / Floating Stat Cards */}
            <div className="absolute inset-0 z-30 pointer-events-none">
              {stats.map((stat, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
                  transition={{ delay: 0.5 + (idx * 0.2), type: "spring", stiffness: 100 }}
                  className={`absolute bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.12)] border border-white/50 flex items-center gap-4 pointer-events-auto hover:scale-105 transition-transform cursor-default`}
                  style={{
                    top: idx === 0 ? '10%' : idx === 1 ? '70%' : '40%',
                    left: idx === 0 ? '0%' : idx === 1 ? '10%' : '75%',
                    zIndex: 40 + idx
                  }}
                >
                  <div className={`w-12 h-12 rounded-full ${stat.bg} ${stat.color} flex items-center justify-center`}>
                    <stat.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-xs font-bold text-slate-400 uppercase tracking-wider">{stat.label}</div>
                    <div className="text-lg font-bold text-slate-900">{stat.value}</div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Background Pattern */}
            <svg className="absolute inset-0 w-full h-full text-slate-100 -z-10" viewBox="0 0 100 100" preserveAspectRatio="none">
              <defs>
                <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                  <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
                </pattern>
              </defs>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>

          </div>

        </div>
      </Container>
    </section>
  );
};
