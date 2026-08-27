import { motion } from 'framer-motion';
import { Users, ShieldPlus, FileSearch } from 'lucide-react';

const cards = [
  {
    title: "Community-Centric Approach",
    desc: "SRYIA prioritizes empowerment, offering skills and resources that enable individuals to achieve lasting self-reliance rather than dependency.",
    color: "text-orange-500",
    hoverBg: "group-hover:bg-orange-500 group-hover:text-white",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(249,115,22,0.2)]",
    borderColor: "border-orange-500",
    Icon: Users,
    symbol: "/symbols/community.jpg",
  },
  {
    title: "Improving Health Through Water",
    desc: "SRYIA is improving public health by installing RO plants in schools, developing healthcare facilities, and providing essential medical equipment.",
    color: "text-green-600",
    hoverBg: "group-hover:bg-green-600 group-hover:text-white",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(22,163,74,0.2)]",
    borderColor: "border-green-600",
    Icon: ShieldPlus,
    symbol: "/symbols/health.jpg",
  },
  {
    title: "Transparency & Accountability",
    desc: "With a commitment to integrity, SRYIA maintains transparency across operations, ensuring stakeholders are well-informed about program impacts.",
    color: "text-blue-600",
    hoverBg: "group-hover:bg-blue-600 group-hover:text-white",
    hoverShadow: "hover:shadow-[0_12px_40px_rgba(37,99,235,0.2)]",
    borderColor: "border-blue-600",
    Icon: FileSearch,
    symbol: "/symbols/transparency.jpg",
  }
];

export const CommitmentCards = () => {
  return (
    <section className="relative w-full py-24 lg:py-32 bg-[#FAFAF8] overflow-hidden flex flex-col items-center justify-center min-h-screen z-10">
      
      <style>{`
        .perspective-1000 { perspective: 1000px; }
        .backface-hidden { backface-visibility: hidden; }
        .rotate-y-180 { transform: rotateY(180deg); }
      `}</style>

      {/* FITTED BACKGROUND IMAGE WITH SEAMLESS FADES */}
      <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-end flex-col bg-[#FAFAF8]">
        {/* Massive Top Fade to create solid space for the stylish header */}
        <div className="absolute top-0 left-0 w-full h-[40vh] bg-gradient-to-b from-[#FAFAF8] via-[#FAFAF8] to-transparent z-10 pointer-events-none" />
        
        <img 
          src="/image%20copy%205.png" 
          alt="SATHWIK Background" 
          className="w-full h-full object-contain object-center opacity-70"
        />
        {/* Soft, clean fade to ensure text is readable but keeps image bright */}
        <div className="absolute inset-0 bg-white/40 z-0" />

        {/* Bottom Fade */}
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[#FAFAF8] to-transparent z-10 pointer-events-none" />
      </div>

      {/* FOREGROUND CONTENT */}
      <div className="relative w-full max-w-[1000px] mx-auto px-6 md:px-8 z-10 flex flex-col items-center h-full">
        
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
              className="text-6xl md:text-8xl text-[#d4c8b8]/40 tracking-tight leading-none mb-4"
              style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}
            >
              Our Commitment
            </h2>
            <h3 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-bold text-[#1d1d1f] tracking-tight -mt-10 md:-mt-12">
              Building a Stronger, Healthier Tomorrow
            </h3>
          </motion.div>
        </div>

        {/* Centered Cards Grid at the Bottom with 3D Flip */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 w-full mt-auto pb-8">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + (idx * 0.1), duration: 0.5 }}
              className="relative group w-full"
            >
              <div className={`w-full h-full relative transition-all duration-700 bg-white rounded-xl p-8 shadow-[0_4px_20px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col items-center text-center group ${card.hoverShadow} overflow-hidden`}>
                
                {/* Transparent AI-generated watermark symbol */}
                <div 
                  className="absolute inset-0 z-0 opacity-5 group-hover:opacity-10 transition-opacity duration-700 mix-blend-multiply pointer-events-none"
                  style={{
                    backgroundImage: `url(${card.symbol})`,
                    backgroundSize: '150%',
                    backgroundPosition: 'center center',
                    backgroundRepeat: 'no-repeat',
                  }}
                />

                {/* Classic Thin Circle Icon */}
                <div className={`relative z-10 w-14 h-14 rounded-full border border-gray-200 flex items-center justify-center mb-6 transition-colors duration-500 ${card.color} ${card.hoverBg}`}>
                  <card.Icon className="w-6 h-6 transition-colors duration-500" strokeWidth={1.5} />
                </div>
                
                <h3 className="relative z-10 text-lg md:text-xl font-serif font-bold text-[#1d1d1f] leading-snug mb-3">
                  {card.title}
                </h3>

                <div className="w-8 h-[1px] bg-gray-300 mb-4 transition-all duration-500 group-hover:w-16 group-hover:bg-gray-800" />
                
                <p className="relative z-10 text-gray-500 text-sm leading-relaxed font-medium">
                  {card.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};
