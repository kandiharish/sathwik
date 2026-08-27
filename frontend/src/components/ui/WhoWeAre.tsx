import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { ArrowRight } from 'lucide-react';
import { ButtonLink } from './Button';

const tags = [
  { text: "Healthcare & Medical", color: "text-emerald-900 bg-gradient-to-br from-emerald-500/10 to-transparent border-emerald-500/30 hover:border-emerald-500/50" },
  { text: "Water & Sanitation", color: "text-blue-900 bg-gradient-to-br from-blue-500/10 to-transparent border-blue-500/30 hover:border-blue-500/50" },
  { text: "Education Infrastructure", color: "text-amber-900 bg-gradient-to-br from-amber-500/10 to-transparent border-amber-500/30 hover:border-amber-500/50" },
  { text: "Nutrition & Health", color: "text-rose-900 bg-gradient-to-br from-rose-500/10 to-transparent border-rose-500/30 hover:border-rose-500/50" },
  { text: "Sports & Wellness", color: "text-indigo-900 bg-gradient-to-br from-indigo-500/10 to-transparent border-indigo-500/30 hover:border-indigo-500/50" },
  { text: "Community Infrastructure", color: "text-orange-900 bg-gradient-to-br from-orange-500/10 to-transparent border-orange-500/30 hover:border-orange-500/50" },
  { text: "Disability Inclusion", color: "text-teal-900 bg-gradient-to-br from-teal-500/10 to-transparent border-teal-500/30 hover:border-teal-500/50" },
  { text: "Community Development", color: "text-stone-900 bg-gradient-to-br from-stone-500/10 to-transparent border-stone-500/30 hover:border-stone-500/50" }
];

export const WhoWeAre = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background Soft Glows based on logo colors */}
      <div className="absolute top-0 right-0 -mr-40 -mt-40 w-[600px] h-[600px] bg-[#e11d48]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute bottom-0 left-0 -ml-40 -mb-40 w-[600px] h-[600px] bg-[#0017a5]/5 rounded-full blur-[100px] pointer-events-none z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#054E38]/5 rounded-full blur-[120px] pointer-events-none z-0" />

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
            <h2 
              className="text-5xl md:text-7xl text-[#053e2f]/10 tracking-tight leading-none mb-0 md:mb-2"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Our Story
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-[56px] font-serif font-black text-[#1d1d1f] tracking-tight leading-tight -mt-4 md:-mt-8 mb-8">
              Who We <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053e2f] to-[#0a7a5c]">Are</span>
            </h3>

            <div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed">
              <p>
                The <strong className="text-slate-900">Sathwik Rural and Youth Integrated Association (SRYIA)</strong> was founded with a singular vision: to bring sustainable development to the grassroots of India. 
              </p>
              <p>
                We recognize that true progress is impossible without addressing the fundamental needs of our rural communities. What started as a small initiative has blossomed into a comprehensive force for change.
              </p>
              <p>
                Our approach is deeply rooted in the belief that empowering individuals, especially youth and women, creates a ripple effect that transforms entire communities. We work tirelessly across multiple sectors to build resilient, self sustaining ecosystems where every individual has the opportunity to thrive.
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
            {/* Center Logo & Name */}
            <motion.div 
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: 0.2 }}
              className="absolute z-30 flex flex-col items-center justify-center"
            >
              <div className="relative w-32 h-32 md:w-40 md:h-40 bg-white rounded-full shadow-[0_20px_60px_rgb(0,0,0,0.1)] flex items-center justify-center p-3 border-4 border-white">
                <img src="/logo.png" alt="SRYIA" className="w-full h-full object-contain relative z-10 scale-110" />
                {/* Pulsing rings behind logo for circular waves effect using logo colors */}
                <div className="absolute inset-[-20px] rounded-full border border-[#0017a5]/20 animate-[ping_4s_linear_infinite] pointer-events-none" />
                <div className="absolute inset-[-40px] rounded-full border border-[#e11d48]/15 animate-[ping_4s_linear_infinite_1s] pointer-events-none" />
                <div className="absolute inset-[-60px] rounded-full border border-[#054E38]/10 animate-[ping_4s_linear_infinite_2s] pointer-events-none" />
                <div className="absolute inset-[-80px] rounded-full border border-[#0017a5]/5 animate-[ping_4s_linear_infinite_3s] pointer-events-none" />
              </div>
              
              {/* Organization Name matching the exact typography requested */}
              <div className="flex flex-col items-start mt-2 ml-6 md:ml-8 pointer-events-none">
                <span className="text-xl md:text-2xl font-black text-[#0017a5] tracking-tight leading-none mb-0.5">
                  Sathwik
                </span>
                <span className="text-[10px] md:text-[11px] font-bold text-[#0b9c66] tracking-tight leading-tight">
                  Rural And Youth<br/>
                  Integrated Association
                </span>
              </div>
            </motion.div>

            {/* Orbital Rings - More concentric waves */}
            <div className="absolute w-[220px] h-[220px] md:w-[340px] md:h-[340px] border border-slate-200/40 rounded-full z-10" />
            <div className="absolute w-[300px] h-[300px] md:w-[480px] md:h-[480px] border border-slate-200/60 rounded-full z-10" />
            <div className="absolute w-[380px] h-[380px] md:w-[620px] md:h-[620px] border border-slate-100 rounded-full z-0" />
            <div className="absolute w-[460px] h-[460px] md:w-[760px] md:h-[760px] border border-slate-50 rounded-full z-0" />

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
                          className={`whitespace-nowrap backdrop-blur-md border shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_8px_30px_rgba(0,0,0,0.04)] transition-all duration-300 px-5 py-3 rounded-full text-[13px] md:text-sm font-semibold flex items-center justify-center cursor-default ${tag.color}`}
                        >
                          {tag.text}
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
