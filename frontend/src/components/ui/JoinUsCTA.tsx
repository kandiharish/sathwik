import { motion } from 'framer-motion';
import { Leaf, HeartHandshake, Users, BookOpen, HeartPulse, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const JoinUsCTA = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="bg-white rounded-[2.5rem] shadow-[0_15px_60px_rgb(0,0,0,0.06)] border border-slate-100/50 overflow-hidden relative">
          
          {/* Background Wavy Shape */}
          <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none rotate-180 opacity-90 z-0">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="relative block w-[calc(100%+1.3px)] h-[120px]">
              <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="fill-[#688a70] opacity-30"></path>
              <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V3A433.86,433.86,0,0,1,985.66,92.83Z" className="fill-[#497055] opacity-80"></path>
            </svg>
          </div>

          {/* Background Gradients */}
          <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-orange-50/50 rounded-full blur-3xl pointer-events-none z-0" />
          <div className="absolute bottom-0 left-0 -ml-32 -mb-32 w-[600px] h-[600px] bg-green-50/50 rounded-full blur-3xl pointer-events-none z-0" />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 p-8 md:p-14 lg:p-16 relative z-10">
            {/* Left Column - Text & CTAs */}
            <div className="flex flex-col justify-center">
              
              <div className="inline-flex items-center gap-2 bg-[#eaf2ed] text-[#164626] px-4 py-1.5 rounded-sm text-xs font-bold tracking-widest uppercase mb-8 w-max">
                <Leaf className="w-4 h-4" />
                TOGETHER, WE CAN
              </div>

              <h2 className="text-5xl md:text-6xl font-serif font-bold text-slate-900 leading-[1.15] mb-6">
                Join Us in <br />
                Building <span className="text-[#154625]">Brighter</span> <br />
                <span className="text-[#154625]">Futures.</span>
                <div className="h-1 w-32 bg-gradient-to-r from-[#d9531e] to-transparent mt-6 rounded-full" />
              </h2>

              <p className="text-slate-600 text-[17px] mb-10 max-w-md leading-relaxed font-medium">
                Your support allows us to continue providing vital resources, education, and healthcare to rural communities. Become a part of the change today.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16">
                <Link to="/donate" className="group relative flex items-center gap-4 bg-[#cc4a14] hover:bg-[#b03d0e] text-white p-3 pr-5 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                  <div className="bg-white/20 p-2.5 rounded-lg flex items-center justify-center">
                    <HeartHandshake className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[15px] leading-tight">Make a Donation</span>
                    <span className="text-white/90 text-[11px] font-medium leading-tight">Help us create impact</span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-3 text-white/80 group-hover:text-white transition-colors group-hover:translate-x-1" />
                </Link>

                <Link to="/volunteer" className="group flex items-center gap-4 bg-white hover:bg-slate-50 border-[1.5px] border-[#396347] p-3 pr-5 rounded-xl transition-all duration-300 shadow-sm hover:shadow-md hover:-translate-y-0.5">
                  <div className="bg-[#ebf2ed] p-2.5 rounded-lg flex items-center justify-center group-hover:bg-[#dfede3] transition-colors">
                    <Users className="w-6 h-6 text-[#1a4a2a]" />
                  </div>
                  <div className="flex flex-col text-left">
                    <span className="font-bold text-[#154625] text-[15px] leading-tight">Become a Volunteer</span>
                    <span className="text-slate-500 text-[11px] font-medium leading-tight">Join hands for change</span>
                  </div>
                  <ArrowRight className="w-4 h-4 ml-3 text-[#154625] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>

              {/* Stats */}
              <div className="flex flex-wrap items-center gap-x-10 gap-y-6">
                <div className="flex items-center gap-3">
                  <div className="bg-[#ebf2ed] p-3 rounded-xl text-[#154625]">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[17px] text-slate-900 leading-none mb-1">1000+</div>
                    <div className="text-[12px] text-slate-500 font-medium leading-none">Lives Impacted</div>
                  </div>
                </div>

                {/* Vertical Divider */}
                <div className="hidden md:block w-px h-10 bg-slate-200" />

                <div className="flex items-center gap-3">
                  <div className="bg-[#ebf2ed] p-3 rounded-xl text-[#154625]">
                    <BookOpen className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[17px] text-slate-900 leading-none mb-1">50+</div>
                    <div className="text-[12px] text-slate-500 font-medium leading-none">Education Programs</div>
                  </div>
                </div>

                <div className="hidden lg:block w-px h-10 bg-slate-200" />

                <div className="flex items-center gap-3">
                  <div className="bg-[#ebf2ed] p-3 rounded-xl text-[#154625]">
                    <HeartPulse className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="font-bold text-[17px] text-slate-900 leading-none mb-1">20+</div>
                    <div className="text-[12px] text-slate-500 font-medium leading-none">Healthcare Camps</div>
                  </div>
                </div>
              </div>
              
            </div>

            {/* Right Column - Images Layout */}
            <div className="relative flex items-center justify-center min-h-[450px] lg:min-h-[550px]">
              
              {/* Brush Stroke / Abstract Background Circle */}
              <div className="absolute inset-0 flex items-center justify-center z-0">
                <div className="w-[350px] h-[350px] sm:w-[480px] sm:h-[480px] rounded-full border-[12px] sm:border-[16px] border-[#6b8e76] border-opacity-60 relative overflow-hidden">
                    <div className="absolute inset-0 bg-[#d8e3db] opacity-30 mix-blend-multiply filter blur-xl"></div>
                </div>
                {/* Additional decorative brush effects */}
                <svg className="absolute w-[400px] sm:w-[550px] h-[400px] sm:h-[550px] text-[#4d7559] opacity-70 rotate-12" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                  <path fill="currentColor" d="M44.7,-76.4C58.8,-69.2,71.8,-59.1,81.3,-46.3C90.8,-33.5,96.8,-18,97,-2.4C97.1,13.2,91.4,29,81.4,41.4C71.4,53.8,57,62.8,42.4,70.6C27.8,78.4,13.9,85.1,-0.7,86.2C-15.3,87.3,-30.6,83,-43.3,74.5C-56,66,-66,53.3,-74.6,39.3C-83.2,25.3,-90.4,10,-89.9,-4.9C-89.4,-19.8,-81.3,-34.3,-71,-45.5C-60.7,-56.7,-48.2,-64.5,-35,-72.1C-21.8,-79.6,-7.9,-86.9,6.5,-88C20.9,-89.1,41.9,-83.6,44.7,-76.4Z" transform="translate(100 100) scale(0.9)" />
                </svg>
              </div>

              {/* Main Image */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="relative z-10 w-[260px] h-[260px] sm:w-[380px] sm:h-[380px] rounded-full border-[8px] sm:border-[12px] border-white shadow-2xl overflow-hidden bg-slate-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1594708767771-a7502209ff51?auto=format&fit=crop&q=80&w=800" 
                  alt="Happy smiling child" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Top Right Floating Image */}
              <motion.div 
                initial={{ opacity: 0, x: 50, y: -50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                className="absolute top-0 right-4 sm:right-12 z-20 w-[140px] h-[140px] sm:w-[190px] sm:h-[190px] rounded-full border-[6px] sm:border-[8px] border-white shadow-xl overflow-hidden bg-slate-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?auto=format&fit=crop&q=80&w=400" 
                  alt="Child studying" 
                  className="w-full h-full object-cover object-top"
                />
              </motion.div>

              {/* Bottom Right Floating Image */}
              <motion.div 
                initial={{ opacity: 0, x: 30, y: 50 }}
                whileInView={{ opacity: 1, x: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
                className="absolute -bottom-4 sm:bottom-4 right-8 sm:right-16 z-20 w-[160px] h-[160px] sm:w-[220px] sm:h-[220px] rounded-full border-[6px] sm:border-[8px] border-white shadow-xl overflow-hidden bg-slate-100"
              >
                <img 
                  src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=400" 
                  alt="Doctor and patient" 
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Heart Badge */}
              <motion.div 
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
                className="absolute bottom-10 sm:bottom-16 right-36 sm:right-48 z-30 bg-[#164626] text-white p-2.5 sm:p-3 rounded-full shadow-lg"
              >
                <HeartPulse className="w-5 h-5 sm:w-6 sm:h-6" />
              </motion.div>
              
              {/* Decorative Sun */}
              <div className="absolute -top-4 sm:-top-8 right-24 sm:right-32 z-0 text-[#d9531e] opacity-90 animate-[spin_30s_linear_infinite]">
                 <svg className="w-[60px] h-[60px] sm:w-[80px] sm:h-[80px]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>
              </div>

              {/* Decorative Paper Plane */}
              <div className="absolute top-1/4 -left-4 sm:-left-8 z-20 text-[#688a70] opacity-80">
                 <svg className="w-[40px] h-[40px] sm:w-[50px] sm:h-[50px] -rotate-12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="m22 2-7 20-4-9-9-4Z"/><path d="M22 2 11 13"/></svg>
              </div>
              
              {/* Decorative Leaf dots */}
              <div className="absolute bottom-8 left-10 z-20 text-[#688a70] opacity-60">
                 <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor"><path d="M17 8C8 10 5.9 16 5.9 16C5.9 16 9 17.5 14 14C19.5 10 17 8 17 8Z"/><path d="M16 14C11 17 7 19 7 19C7 19 9 20 14.5 18.5C18.5 17.5 16 14 16 14Z"/></svg>
              </div>
              
              <div className="absolute bottom-4 right-4 z-20 opacity-30">
                 <div className="grid grid-cols-3 gap-2">
                    {[...Array(9)].map((_, i) => (
                        <div key={i} className="w-1.5 h-1.5 rounded-full bg-[#688a70]"></div>
                    ))}
                 </div>
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
};
