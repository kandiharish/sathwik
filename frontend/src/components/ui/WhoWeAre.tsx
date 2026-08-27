import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';
import { ButtonLink } from './Button';

const tags = [
  "Healthcare & Medical Infrastructure",
  "Water, Sanitation & Hygiene",
  "Education & School Infrastructure",
  "Nutrition & Maternal Health",
  "Sports & Community Wellness",
  "Community Infrastructure",
  "Disability Inclusion",
  "Community Development"
];

export const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-emerald-50/50 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-rose-50/50 rounded-full blur-[100px] pointer-events-none z-0" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 xl:grid-cols-2 gap-16 xl:gap-8 items-center">
          
          {/* Left Side: Content */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col pr-0 xl:pr-12"
          >
            <div className="inline-flex items-center gap-2 bg-emerald-50 text-[#054E38] px-4 py-1.5 rounded-full text-sm font-bold tracking-widest uppercase mb-6 w-max">
              About Us
            </div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl font-serif font-black text-slate-900 tracking-tight leading-[1.1] mb-8">
              Who We <span className="text-[#054E38]">Are</span>
            </h2>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                The <strong className="text-slate-900">Sathwik Rural and Youth Integrated Association (SRYIA)</strong> was founded with a singular vision: to bring sustainable development to the grassroots of India. 
              </p>
              <p>
                We recognize that true progress is impossible without addressing the fundamental needs of our rural communities. What started as a small initiative has blossomed into a comprehensive force for change.
              </p>
              <p>
                Our approach is deeply rooted in the belief that empowering individuals—especially youth and women—creates a ripple effect that transforms entire communities. We work tirelessly across multiple sectors to build resilient, self-sustaining ecosystems where every individual has the opportunity to thrive.
              </p>
            </div>

            <div className="mt-10">
              <ButtonLink to="/about" variant="primary" className="inline-flex items-center">
                Read Our Full Story <ArrowRight className="w-4 h-4 ml-2" />
              </ButtonLink>
            </div>
          </motion.div>

          {/* Right Side: Orbiting Tags */}
          <div className="relative w-full h-[500px] md:h-[700px] flex items-center justify-center overflow-hidden xl:overflow-visible">
            {/* Center Logo */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="absolute z-30 w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_20px_60px_rgb(0,0,0,0.1)] flex items-center justify-center p-6 border-4 border-white"
            >
              <img src="/logo.png" alt="SRYIA" className="w-full h-full object-contain" />
              {/* Pulsing ring behind logo */}
              <div className="absolute inset-0 rounded-full border-2 border-[#054E38]/20 animate-ping" style={{ animationDuration: '3s' }} />
            </motion.div>

            {/* Orbital Rings */}
            <div className="absolute w-[280px] h-[280px] md:w-[480px] md:h-[480px] border border-slate-200/60 rounded-full z-10" />
            <div className="absolute w-[380px] h-[380px] md:w-[680px] md:h-[680px] border border-slate-100 rounded-full z-0" />

            {/* Orbiting Elements - Using CSS animations instead of JS for huge performance gain */}
            <div 
              style={{ animation: 'spin 50s linear infinite' }}
              className="absolute inset-0 z-20 will-change-transform"
            >
              {tags.map((tag, i) => {
                const angle = (i * 360) / tags.length;
                // Responsive radius based on screen size approximations.
                // In CSS we'll use a clamping approach or just rely on the component size.
                return (
                  <div 
                    key={i}
                    className="absolute top-1/2 left-1/2 w-0 h-0"
                    style={{ transform: `rotate(${angle}deg)` }}
                  >
                    <div 
                      className="absolute top-1/2 left-1/2"
                      style={{ 
                        // Desktop radius ~240px, Mobile ~140px. 
                        transform: `translate(-50%, -50%) translateX(min(32vw, 240px))` 
                      }}
                    >
                      <div
                        style={{ animation: 'spin 50s linear infinite reverse' }}
                        className="will-change-transform"
                      >
                        <div 
                          style={{ transform: `rotate(${-angle}deg)` }}
                          className="whitespace-nowrap bg-white/90 backdrop-blur-sm border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.06)] hover:shadow-[0_8px_30px_rgb(5,78,56,0.15)] hover:border-[#054E38]/30 transition-all duration-300 px-5 py-3 rounded-full text-[13px] md:text-sm font-bold text-slate-700 flex items-center gap-2.5 cursor-default"
                        >
                          <div className="w-2 h-2 rounded-full bg-[#054E38] animate-pulse"></div>
                          {tag}
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
            
            {/* Very faint gradient overlay to ensure tags don't get cut off harshly if they overflow slightly on mobile */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_60%,white_95%)] pointer-events-none z-30 xl:hidden" />
          </div>

        </div>
      </Container>
    </section>
  );
};
