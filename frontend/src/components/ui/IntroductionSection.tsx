import { motion } from 'framer-motion';
import { ArrowRight, Droplets, HeartPulse } from 'lucide-react';
import { Container } from '../layout/Container';
import { ButtonLink } from './Button';

export const IntroductionSection = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-white">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-br from-[#053e2f]/5 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-gradient-to-tr from-orange-100/40 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/4 pointer-events-none" />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          
          {/* Content Side */}
          <div className="relative z-10 lg:pr-8">
            
            {/* Animated Traveling Border Label */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative inline-block mb-8 rounded shadow-sm overflow-hidden bg-gray-100"
            >
              {/* Spinning lines */}
              <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite] bg-[conic-gradient(transparent_0%,transparent_85%,#053e2f_100%)] opacity-70" />
              <div className="absolute inset-[-200%] animate-[spin_4s_linear_infinite_2s] bg-[conic-gradient(transparent_0%,transparent_85%,#C2410C_100%)] opacity-70" />
              
              {/* Classic Inner Box */}
              <div className="m-[2px] relative bg-white px-8 py-3.5 z-10 rounded-[2px] flex items-center justify-center">
                <span className="text-sm md:text-base font-serif font-black tracking-[0.2em] uppercase">
                  <span className="text-[#053e2f]">Introduction to</span>{' '}
                  <span className="text-[#C2410C]">SRYIA</span>
                </span>
              </div>
            </motion.div>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-text-main mb-6 leading-[1.2]"
            >
              Transforming Rural Lives <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#053e2f] to-[#0a7a5c]">
                Through Development
              </span>
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-5 text-gray-600 font-medium text-[15px] leading-relaxed mb-8 relative"
            >
              <div className="absolute -left-5 top-2 bottom-2 w-[3px] bg-gradient-to-b from-secondary via-[#053e2f]/30 to-transparent rounded-full hidden md:block" />
              
              <p>
                Founded in 2015, <strong className="text-text-main">Sathwik Rural and Youth Integrated Association (SRYIA)</strong> is committed to uplifting rural communities by improving socio-economic conditions. Through initiatives in education, skill development, and healthcare, SRYIA has been a driving force for change, empowering youth and ensuring sustainable progress.
              </p>
              
              <div className="flex items-center gap-4 py-1 opacity-40">
                <div className="h-px w-12 bg-current" />
                <Droplets className="w-3 h-3" />
                <div className="h-px w-12 bg-current" />
              </div>

              <p>
                Over the past six months, we have focused on enhancing rural healthcare and infrastructure, ensuring access to clean drinking water and improved medical facilities. Our key initiatives include:
              </p>
            </motion.div>

            {/* Initiative Cards (Sleek & Zoomed Out) */}
            <div className="space-y-3 mb-8">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(5,62,47,0.08)] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#053e2f] opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-[#053e2f]/5 group-hover:bg-[#053e2f] flex items-center justify-center transition-colors duration-300">
                  <Droplets className="w-5 h-5 text-[#053e2f] group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black text-gray-400 font-serif">01</span>
                    <h4 className="text-[15px] font-bold text-text-main">RO Plants in Government Schools</h4>
                  </div>
                  <p className="text-[13px] text-gray-500">Providing clean and safe drinking water to students.</p>
                </div>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="group flex items-start gap-5 p-5 rounded-2xl bg-white border border-gray-100 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_8px_30px_rgba(194,65,12,0.08)] transition-all cursor-pointer relative overflow-hidden"
              >
                <div className="absolute left-0 top-0 bottom-0 w-1 bg-secondary opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="flex-shrink-0 w-12 h-12 rounded-full bg-secondary/5 group-hover:bg-secondary flex items-center justify-center transition-colors duration-300">
                  <HeartPulse className="w-5 h-5 text-secondary group-hover:text-white transition-colors duration-300" />
                </div>
                <div>
                  <div className="flex items-center gap-3 mb-1">
                    <span className="text-[10px] font-black text-gray-400 font-serif">02</span>
                    <h4 className="text-[15px] font-bold text-text-main">Healthcare Infrastructure</h4>
                  </div>
                  <p className="text-[13px] text-gray-500">Creating better access to quality healthcare facilities.</p>
                </div>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              <ButtonLink to="/about" variant="primary" className="group text-sm px-6 py-2.5">
                Read More <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </ButtonLink>
            </motion.div>
          </div>

          {/* Image Side (Properly Designed) */}
          <div className="relative h-[500px] w-full hidden lg:block">
            
            {/* Soft decorative background */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#053e2f]/5 rounded-full blur-3xl pointer-events-none" />

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
