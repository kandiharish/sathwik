import { motion } from 'framer-motion';
import { Leaf, HeartHandshake, Users, BookOpen, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Img } from '../common/Img';

export const JoinUsCTA = () => {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_15px_60px_rgb(0,0,0,0.06)] border border-line overflow-hidden relative">
          
          {/* Background Wavy Shape */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 opacity-90 z-0">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[120px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-leaf-bright opacity-30"></path>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V3A433.86,433.86,0,0,1,985.66,92.83Z" className="fill-primary opacity-80"></path>
            </svg>
          </div>

          {/* Background Gradients */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-rose-soft/60 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-leaf-soft/60 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-8 p-8 md:p-10 lg:p-12 relative z-10">
            {/* Left Column - Text & CTAs */}
            <div className="flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 bg-primary-soft text-primary px-4 py-1.5 rounded-sm text-xs font-bold tracking-[0.12em] uppercase mb-6 w-max">
                <Leaf className="w-4 h-4" />
                TOGETHER, WE CAN
              </div>

              <h2 className="text-4xl md:text-5xl font-serif font-semibold text-ink leading-[1.15] mb-4">
                Join Us in <br />
                Building <span className="text-primary">Brighter</span> <br />
                <span className="text-primary">Futures.</span>
              </h2>

              <p className="text-ink-muted text-sm md:text-[15px] mb-8 max-w-md leading-relaxed font-medium">
                Your support allows us to continue providing vital resources, education, and healthcare to rural communities. Become a part of the change today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-10">
                <Link to="/donate" className="group relative flex items-center gap-3 bg-secondary hover:bg-secondary-dark text-white p-2.5 pr-4 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="bg-white/20 p-2 rounded-lg flex items-center justify-center">
                    <HeartHandshake className="w-5 h-5 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[14px] leading-tight">Make a Donation</span>
                    <span className="text-white/90 text-[10px] font-medium leading-tight">Help us create impact</span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 text-white/80 group-hover:text-white transition-colors group-hover:translate-x-1" />
                </Link>

                <Link to="/volunteer" className="group flex items-center gap-3 bg-white hover:bg-sand border-[1.5px] border-primary p-2.5 pr-4 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <div className="bg-primary-soft p-2 rounded-lg flex items-center justify-center group-hover:bg-leaf-soft transition-colors">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-primary text-[14px] leading-tight">Become a Volunteer</span>
                    <span className="text-ink-muted text-[10px] font-medium leading-tight">Join hands for change</span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-2 text-primary group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats - Single line layout without any vertical lines */}
              <div className="flex flex-row items-center gap-x-4 sm:gap-x-6 lg:gap-x-7 pt-2">
                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="bg-primary-soft p-1.5 sm:p-2 rounded-lg text-primary shrink-0">
                    <Users className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="font-bold text-[13px] sm:text-[14px] text-ink">1000+</span>
                    <span className="text-[11px] sm:text-[12px] text-ink-muted font-medium">Lives Impacted</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="bg-primary-soft p-1.5 sm:p-2 rounded-lg text-primary shrink-0">
                    <BookOpen className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="font-bold text-[13px] sm:text-[14px] text-ink">50+</span>
                    <span className="text-[11px] sm:text-[12px] text-ink-muted font-medium">Education Programs</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 sm:gap-2">
                  <div className="bg-primary-soft p-1.5 sm:p-2 rounded-lg text-primary shrink-0">
                    <HeartPulse className="w-3.5 h-3.5 sm:w-4 sm:h-4" />
                  </div>
                  <div className="flex items-baseline gap-1 whitespace-nowrap">
                    <span className="font-bold text-[13px] sm:text-[14px] text-ink">20+</span>
                    <span className="text-[11px] sm:text-[12px] text-ink-muted font-medium">Healthcare Camps</span>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column - Images Layout */}
            <div className="relative flex items-center justify-center min-h-[350px] lg:min-h-[400px]">
              
              {/* Brush Stroke / Abstract Background Circle - Lightly styled & moving continuously */}
              <div className="absolute inset-0 flex items-center justify-center z-0 pointer-events-none">
                {/* Moving Organic Brush Stroke Circle */}
                <div className="absolute animate-[spin_35s_linear_infinite] will-change-transform">
                  <svg className="w-[330px] sm:w-[430px] h-[330px] sm:h-[430px] text-leaf-bright opacity-45" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97,-2.4C97.1,13.2,91.4,29,81.4,41.4C71.4,53.8,57,62.8,42.4,70.6C27.8,78.4,13.9,85.1,-0.7,86.2C-15.3,87.3,-30.6,83,-43.3,74.5C-56,66,-66,53.3,-74.6,39.3C-83.2,25.3,-90.4,10,-89.9,-4.9C-89.4,-19.8,-81.3,-34.3,-71,-45.5C-60.7,-56.7,-48.2,-64.5,-35,-72.1C-21.8,-79.6,-7.9,-86.9,6.5,-88C20.9,-89.1,41.9,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(0.9)" />
                  </svg>
                </div>

                {/* Outer Moving Ring - lightly framed */}
                <div className="absolute w-[280px] h-[280px] sm:w-[380px] sm:h-[380px] rounded-full border-[6px] sm:border-[8px] border-primary/30 animate-[spin_50s_linear_infinite_reverse] will-change-transform">
                  <div className="absolute inset-0 bg-leaf-soft opacity-20 mix-blend-multiply filter blur-xl"></div>
                </div>

                {/* Subtle Inner Accent Ring - lightly layered */}
                <div className="absolute w-[235px] h-[235px] sm:w-[315px] sm:h-[315px] rounded-full border-2 border-dashed border-leaf-bright/30 animate-[spin_40s_linear_infinite] will-change-transform" />
              </div>

              {/* Main Center Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-[200px] h-[200px] sm:w-[260px] sm:h-[260px] rounded-full border-[6px] sm:border-[8px] border-white shadow-2xl overflow-hidden bg-sand"
              >
                <Img 
                  src="/real-cta/donation_handover.webp" 
                  alt="Rural bicycle donation ceremony with smiling students and dignitaries" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Top Left Floating Image */}
              <motion.div 
                initial={{ opacity: 0, x: -30, y: -10 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
                className="absolute top-14 sm:top-20 left-4 sm:left-8 z-20 w-[100px] h-[100px] sm:w-[130px] sm:h-[130px] rounded-full border-[4px] sm:border-[6px] border-white shadow-xl overflow-hidden bg-sand"
              >
                <Img 
                  src="/real-cta/doctor_exam.webp" 
                  alt="Rural medical doctor and health camp" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Top Right Floating Image */}
              <motion.div 
                initial={{ opacity: 0, x: 30, y: -30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute top-4 right-4 sm:right-12 z-20 w-[110px] h-[110px] sm:w-[140px] sm:h-[140px] rounded-full border-[4px] sm:border-[6px] border-white shadow-xl overflow-hidden bg-sand"
              >
                <Img 
                  src="/real-cta/women_empowerment.webp" 
                  alt="Women nutrition and poshak distribution" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover object-center"
                />
              </motion.div>

              {/* Bottom Right Floating Image */}
              <motion.div 
                initial={{ opacity: 0, x: 20, y: 30 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-2 sm:bottom-4 right-8 sm:right-16 z-20 w-[120px] h-[120px] sm:w-[160px] sm:h-[160px] rounded-full border-[4px] sm:border-[6px] border-white shadow-xl overflow-hidden bg-sand"
              >
                <Img 
                  src="/real-cta/community_leaders.webp" 
                  alt="Community leaders and youth at open-air gym" 
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Heart Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="absolute bottom-6 sm:bottom-10 right-28 sm:right-40 z-30 bg-primary text-white p-2 sm:p-2.5 rounded-full shadow-lg"
              >
                <HeartPulse className="w-4 h-4 sm:w-5 sm:h-5" />
              </motion.div>
              
              {/* Decorative Sun */}
              <div className="absolute -top-4 sm:-top-8 right-16 sm:right-24 z-0 text-brand-red opacity-90 animate-[spin_30s_linear_infinite]">
                 <svg className="w-[50px] h-[50px] sm:w-[60px] sm:h-[60px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </div>

              {/* Decorative Paper Plane */}
              <div className="absolute top-1/4 -left-4 sm:-left-6 z-20 text-leaf-bright opacity-80">
                 <svg className="w-[30px] h-[30px] sm:w-[40px] sm:h-[40px] -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              
              {/* Decorative Leaf dots */}
              <div className="absolute bottom-6 left-6 sm:left-10 z-20 text-leaf-bright opacity-60">
                 <svg width="30" height="30" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16 5.9 16C5.9 16 9 17.5 14 14C19.5 10 17 8 17 8Z"/><path d="M16 14C11 17 7 19 7 19C7 19 9 20 14.5 18.5C18.5 17.5 16 14 16 14Z"/></svg>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
