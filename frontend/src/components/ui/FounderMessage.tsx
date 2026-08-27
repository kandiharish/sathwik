import { motion } from 'framer-motion';

export const FounderMessage = () => {
  return (
    <section className="relative w-full h-[100dvh] bg-[#d1d1d1] overflow-hidden flex items-center justify-center p-4 md:p-12">
      
      {/* Inner Editorial Card */}
      <div className="relative w-full max-w-[1400px] h-[90vh] bg-white shadow-2xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Diagonal Grey Overlay on the right side */}
        <div 
          className="absolute top-0 right-0 w-full md:w-[60%] h-full bg-[#e2e2e2] z-0"
          style={{ clipPath: 'polygon(40% 0, 100% 0, 100% 100%, 0% 100%)' }}
        />

        {/* Left Side - Portrait Image */}
        <div className="relative z-10 w-full md:w-[45%] h-[40vh] md:h-full flex items-center justify-center pt-10">
          <motion.img 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            src="/Gemini_Generated_Image_kxdjsfkxdjsfkxdj-removebg-preview.png"
            alt="Raghuveer Reddy"
            className="w-[110%] h-[110%] object-contain object-bottom -translate-y-8 md:-translate-y-12 grayscale contrast-125 hover:grayscale-0 hover:contrast-100 transition-all duration-500 cursor-pointer"
          />
        </div>

        {/* Right Side - Editorial Content */}
        <div className="relative z-10 w-full md:w-[55%] h-full flex flex-col justify-center px-8 md:px-16 py-12 md:py-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-xl"
          >
            {/* Header / Overline */}
            <div className="mb-4">
              <h2 className="text-sm font-bold tracking-[0.15em] text-[#333] uppercase">
                Raghuveer Reddy
              </h2>
              <div className="w-12 h-[2px] bg-[#333] mt-2" />
            </div>

            {/* Title with Shiny Animation */}
            <h3 className="text-5xl md:text-6xl font-serif leading-tight mb-2 relative group">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#111] via-[#a3a3a3] to-[#111] bg-[length:200%_auto] animate-[shine_3s_linear_infinite]">
                Leadership Vision
              </span>
            </h3>
            
            <p className="text-xs font-bold tracking-[0.2em] text-[#666] uppercase mb-8">
              Founder & President, SRYIA
            </p>

            {/* Body Text */}
            <div className="space-y-5 text-[#444] text-[15px] leading-[1.8] font-sans">
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
            
            {/* Signature at bottom left */}
            <div className="mt-10 flex flex-col items-start opacity-100">
              <span 
                className="text-4xl text-[#111] inline-block -rotate-2 mb-3 drop-shadow-sm" 
                style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
              >
                Raghuveer Reddy
              </span>
              <div className="flex flex-col items-start border-l-2 border-amber-600 pl-3">
                <p className="text-[10px] font-bold tracking-[0.2em] text-[#111] uppercase mb-0.5">
                  Raghuveer Reddy
                </p>
                <p className="text-[11px] font-serif italic tracking-wide text-[#555]">
                  Member of Parliament Nalgonda
                </p>
              </div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
};
