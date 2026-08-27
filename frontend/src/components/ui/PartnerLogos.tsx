import { motion } from 'framer-motion';

const partners = [
  { name: 'GAIL', type: 'Public Sector Undertaking', image: '/gail_logo.jpg' },
  { name: 'ONGC', type: 'Public Sector Undertaking', image: '/ongc_logo.jpg' },
  { name: 'NTPC', type: 'Public Sector Undertaking', image: '/ntpc_logo.jpg' },
  { name: 'BPCL', type: 'Public Sector Undertaking', image: '/bpcl_logo.jpg' },
  { name: 'NMDC', type: 'Public Sector Undertaking', image: '/nmdc_logo.jpg' },
  { name: 'IOCL', type: 'Public Sector Undertaking', image: '/iocl_logo.jpg' },
  { name: 'HPCL', type: 'Public Sector Undertaking', image: '/hpcl_logo.jpg' },
];

export const PartnerLogos = () => {
  // Duplicate array multiple times to ensure a seamless infinite loop on ultra-wide screens
  const duplicatedPartners = [...partners, ...partners, ...partners];

  return (
    <section className="py-24 lg:py-32 bg-[#FAFAF8] relative overflow-hidden border-t border-[#eae5dd]">
      
      {/* Sleek Heading */}
      <div className="text-center mb-16 relative z-10 px-4">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center"
        >
          <h2 className="text-3xl md:text-5xl font-serif text-[#111] mb-2 tracking-tight">
            Trusted By <span className="text-[#054E38] italic">Industry Leaders</span>
          </h2>
          <div className="w-16 h-[2px] bg-[#054E38] mx-auto mt-6 mb-6" />
          <p className="text-xs font-bold tracking-[0.25em] uppercase text-[#666]">
            Our Corporate Social Responsibility Partners
          </p>
        </motion.div>
      </div>

      {/* Infinite Marquee Container */}
      <div className="relative w-full overflow-hidden flex items-center mt-8 py-4">
        
        {/* Fading gradients at edges to make them smoothly appear/disappear */}
        <div className="absolute left-0 top-0 w-24 md:w-48 h-full bg-gradient-to-r from-[#FAFAF8] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 w-24 md:w-48 h-full bg-gradient-to-l from-[#FAFAF8] to-transparent z-20 pointer-events-none" />

        {/* The scrolling track */}
        <div className="flex w-max animate-marquee">
          {duplicatedPartners.map((partner, idx) => (
            <div 
              key={`${partner.name}-${idx}`} 
              className="flex flex-col items-center justify-center mx-12 md:mx-20 group cursor-pointer relative"
            >
              {/* Logo / Name Placeholder */}
              <div className="flex items-center justify-center transition-all duration-500 grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 group-hover:-translate-y-2 w-32 h-32 md:w-40 md:h-40 mix-blend-multiply">
                {partner.image ? (
                  <img src={partner.image} alt={partner.name} className="w-full h-full object-contain mix-blend-multiply" />
                ) : (
                  <span className="font-serif font-black text-4xl md:text-6xl text-[#333] tracking-tighter">
                    {partner.name}
                  </span>
                )}
              </div>
              
              {/* Subtle Partner Type Tooltip below */}
              <span className="absolute -bottom-8 opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-[10px] font-bold tracking-widest uppercase text-amber-700 whitespace-nowrap">
                {partner.type}
              </span>
            </div>
          ))}
        </div>
        
      </div>
    </section>
  );
};
