import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Droplets, HeartPulse } from 'lucide-react';
import { Container } from '../layout/Container';

type Segment = { text: string; className?: string };

const TypewriterParagraph = ({ segments, delay = 0, onComplete, isInView }: { segments: Segment[], delay?: number, onComplete?: () => void, isInView: boolean }) => {
  return (
    <motion.p
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 1 },
        visible: {
          opacity: 1,
          transition: { delayChildren: delay, staggerChildren: 0.012 },
        },
      }}
      onAnimationComplete={onComplete}
    >
      {segments.map((segment, sIdx) => (
        <span key={sIdx} className={segment.className}>
          {segment.text.split("").map((char, cIdx) => (
            <motion.span
              key={`${sIdx}-${cIdx}`}
              variants={{
                hidden: { opacity: 0 },
                visible: { opacity: 1 }
              }}
            >
              {char}
            </motion.span>
          ))}
        </span>
      ))}
    </motion.p>
  );
};

export const IntroductionSection = () => {
  const [isP1Done, setIsP1Done] = useState(false);
  const [isP2Done, setIsP2Done] = useState(false);
  
  const textRef = useRef(null);
  const isInView = useInView(textRef, { once: true, margin: "-100px" });

  const p1Segments = [
    { text: "Founded in " },
    { text: "2015, Sathwik Rural and Youth Integrated Association (SRYIA)", className: "font-serif font-black text-[#053e2f]" },
    { text: " is committed to uplifting rural communities by improving socio-economic conditions. Through initiatives in education, skill development, and healthcare, SRYIA has been a driving force for change, empowering youth and ensuring sustainable progress." }
  ];
  
  const p2Segments = [
    { text: "Over the past six months, we have focused on enhancing rural healthcare and infrastructure, ensuring access to clean drinking water and improved medical facilities. Our key initiatives include:" }
  ];

  return (
    <section className="pt-24 pb-8 lg:pt-32 lg:pb-0 relative overflow-hidden bg-[#FAFAF8] z-10">
      {/* EXACT FITTED BACKGROUND IMAGE WITH SEAMLESS FADES */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-end flex-col">
        {/* Massive Top Fade to create solid space for the stylish header */}
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-transparent z-10 pointer-events-none" />
        
        <img 
          src="/image%20copy%206.png" 
          alt="Introduction Background" 
          className="w-full h-full object-contain object-center opacity-85"
        />
        {/* Very soft white overlay to ensure content is readable, classic Apple style */}
        <div className="absolute inset-0 bg-white/40 z-0" />
        
        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
      </div>

      <Container className="relative z-10">
        
        {/* Stylish Inter-Section Space Heading */}
        <div className="flex flex-col items-center text-center mb-24 mt-0 w-full">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full"
          >
            <h2 
              className="text-6xl md:text-8xl text-[#053e2f]/10 tracking-tight leading-none mb-4"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Introduction to SRYIA
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-[#1d1d1f] tracking-tight -mt-10 md:-mt-12">
              Transforming Rural Lives <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053e2f] to-[#0a7a5c]">
                Through Development
              </span>
            </h3>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Content Side */}
          <div className="relative z-10 lg:pr-8" ref={textRef}>

            <div className="space-y-5 text-gray-700 font-medium text-[16px] leading-relaxed mb-8 relative">
              <div className="absolute -left-5 top-2 bottom-2 w-[3px] bg-gradient-to-b from-secondary via-[#053e2f]/30 to-transparent rounded-full hidden md:block" />
              
              <TypewriterParagraph 
                segments={p1Segments} 
                delay={0.2} 
                isInView={isInView} 
                onComplete={() => setIsP1Done(true)} 
              />
              
              <div className="flex items-center gap-4 py-1 opacity-40">
                <div className="h-px w-12 bg-current" />
                <Droplets className="w-3 h-3" />
                <div className="h-px w-12 bg-current" />
              </div>

              {isP1Done && (
                <TypewriterParagraph 
                  segments={p2Segments} 
                  delay={0} 
                  isInView={isInView} 
                  onComplete={() => setIsP2Done(true)} 
                />
              )}
            </div>

            {/* Initiative Tags (Apple Premium Inline Style) - Only show after typing completes */}
            {isP2Done && (
              <div className="flex flex-wrap gap-4 mb-10">
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                  className="group flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 rounded-full p-2 pr-5 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-[#053e2f] to-[#0a7a5c] flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    <Droplets className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-[15px] text-[#1d1d1f] tracking-tight group-hover:text-[#053e2f] transition-colors">
                    Clean Water (RO)
                  </span>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.15, duration: 0.4 }}
                  className="group flex items-center gap-3 bg-white/60 backdrop-blur-md border border-white shadow-[0_4px_12px_rgba(0,0,0,0.05)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] hover:-translate-y-0.5 transition-all duration-300 rounded-full p-2 pr-5 cursor-pointer"
                >
                  <div className="w-9 h-9 rounded-full bg-gradient-to-br from-amber-500 to-amber-600 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    <HeartPulse className="w-4 h-4 text-white" />
                  </div>
                  <span className="font-semibold text-[15px] text-[#1d1d1f] tracking-tight group-hover:text-amber-600 transition-colors">
                    Healthcare Access
                  </span>
                </motion.div>
              </div>
            )}

            {/* Read More button removed per user request */}
          </div>

          {/* Image Side (Properly Designed) */}
          <div className="relative h-[500px] w-full hidden lg:block">
            {/* Simple & Elegant Soft Glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] h-[90%] bg-gradient-to-tr from-[#053e2f]/5 to-[#0a7a5c]/5 rounded-full blur-[80px] pointer-events-none" />

            {/* Main Proper Image Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: -20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="absolute right-6 top-4 w-[70%] h-[75%] rounded-2xl overflow-hidden shadow-2xl z-10 border-[6px] border-white"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent z-10 pointer-events-none" />
              <img 
                src="/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg" 
                alt="Student getting water" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Overlapping Proper Image Frame */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, x: -30 }}
              whileInView={{ opacity: 1, scale: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="absolute left-0 bottom-6 w-[55%] h-[45%] rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.15)] border-[6px] border-white z-20"
            >
              <img 
                src="/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg" 
                alt="Rural housing" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>

            {/* Subtle Creative Watermarks */}
            <div className="absolute -right-4 bottom-20 -rotate-90 origin-bottom-right z-0 opacity-40">
              <p className="font-serif italic text-2xl text-gray-300 tracking-widest whitespace-nowrap">
                Empower • Educate • Build
              </p>
            </div>
            
            <div className="absolute left-12 top-6 z-0 opacity-40">
              <p className="font-serif italic text-2xl text-gray-300 tracking-[0.2em] whitespace-nowrap">
                Stronger Futures
              </p>
            </div>

          </div>
        </div>
      </Container>
    </section>
  );
};
