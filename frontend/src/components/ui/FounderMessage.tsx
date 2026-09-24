import { motion } from 'framer-motion';

export const FounderMessage = () => {
  return (
    <section className="relative w-full min-h-[100dvh] lg:min-h-screen bg-[#d1d1d1] overflow-hidden flex items-center justify-center p-3 sm:p-6 md:p-12">
      
      {/* Inner Editorial Card */}
      <div className="relative w-full max-w-[1400px] min-h-[85vh] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row rounded-xl md:rounded-none">
        
        {/* Diagonal Grey Overlay on the right side */}
        <div 
          className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-[#e2e2e2] z-0 hidden md:block"
          style={{ clipPath: 'polygon(20% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />
        <div className="absolute inset-0 w-full h-full bg-[#e2e2e2] z-0 block md:hidden" />

        {/* Left Side - Portrait Image (Perfect Fit & Proportion) */}
        <div className="relative z-10 w-full md:w-[48%] min-h-[360px] md:min-h-[540px] flex items-end justify-center pt-6 md:pt-10 pb-0 bg-white md:bg-transparent overflow-hidden">
          <motion.img 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            src="/Gemini_Generated_Image_kxdjsfkxdjsfkxdj-removebg-preview.webp"
            alt="CH. RAMESH"
            loading="lazy"
            decoding="async"
            className="w-full h-full max-h-[540px] md:max-h-[600px] lg:max-h-[660px] object-contain object-bottom scale-100 md:scale-102 origin-bottom grayscale contrast-120 hover:grayscale-0 hover:contrast-100 transition-all duration-700 cursor-pointer"
          />
        </div>

        {/* Right Side - Editorial Content */}
        <div className="relative z-10 w-full md:w-[50%] flex flex-col justify-center px-6 sm:px-8 md:px-14 py-8 md:py-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="max-w-xl flex flex-col justify-center"
          >
            {/* Title with Shiny Animation */}
            <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif leading-tight mb-2 relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#111] via-[#a3a3a3] to-[#111] bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                Leadership Vision
              </span>
            </h3>
            
            <p className="text-[10px] md:text-xs font-bold tracking-[0.2em] text-[#666] uppercase mb-4 md:mb-6">
              FOUNDER & PRESIDENT, SRAYI ASSOCIATION
            </p>

            {/* Body Text - completely visible, no scrollbar, clean and decent */}
            <div className="space-y-3 sm:space-y-4 md:space-y-5 text-[#444] text-[13px] sm:text-[14px] md:text-[15px] leading-[1.6] md:leading-[1.8] font-sans">
              <p>
                At SATHWIK, our journey began with a simple belief: that every individual, regardless of their background, deserves access to quality healthcare, education, and the fundamental resources needed to build a dignified life. Over the past decade, we have partnered with communities and corporate leaders to turn this belief into action.
              </p>
              <p>
                True development is not just about building infrastructure; it is about building self-reliance. From providing life-saving medical equipment to rural hospitals, to ensuring children have clean drinking water in their schools, our work is deeply rooted in the realities of the people we serve.
              </p>
              <p>
                As we look to the future, we remain steadfast in our commitment to fostering sustainable, community-centric progress. Our business activity and innovative solutions have already changed the flow of many spheres, promising inevitably new life for the whole world.
              </p>
            </div>
            
            {/* Professional Signature Lockup - Non-italic, descent, institutional */}
            <div className="mt-6 md:mt-10 pt-5 border-t border-[#d8d8d8] flex flex-col items-start select-none">
              <div className="flex items-center gap-3">
                <span className="text-2xl sm:text-3xl md:text-4xl font-serif font-semibold tracking-wider text-[#111] uppercase not-italic">
                  CH. RAMESH
                </span>
              </div>
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] text-primary uppercase mt-1 not-italic">
                Founder & President, SRAYI Association
              </span>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
