import { motion } from 'framer-motion';
import { Users, ShieldPlus, FileSearch, Heart } from 'lucide-react';
import { Container } from '../layout/Container';

const cards = [
  {
    title: "Community-Centric Approach",
    desc: "SRYIA prioritizes empowerment, offering skills and resources that enable individuals to achieve lasting self-reliance rather than dependency.",
    color: "text-orange-500",
    borderColor: "border-orange-500",
    borderBottom: "border-b-orange-500",
    icon: <Users className="w-8 h-8" />,
    image: "/blind school porject/WhatsApp Image 2026-08-19 at 11.13.06 PM.jpeg"
  },
  {
    title: "Improving Health Through Water & Infrastructure",
    desc: "SRYIA is improving public health by installing RO plants in schools, developing healthcare facilities, and providing essential medical equipment to enhance healthcare access in underserved regions.",
    color: "text-green-600",
    borderColor: "border-green-600",
    borderBottom: "border-b-green-600",
    icon: <ShieldPlus className="w-8 h-8" />,
    image: "/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.19 PM.jpeg"
  },
  {
    title: "Transparency and Accountability",
    desc: "With a commitment to integrity, SRYIA maintains transparency across all operations, ensuring stakeholders are well-informed about program impacts and resource allocations.",
    color: "text-blue-600",
    borderColor: "border-blue-600",
    borderBottom: "border-b-blue-600",
    icon: <FileSearch className="w-8 h-8" />,
    image: "/RO plant janaagama/WhatsApp Image 2026-08-19 at 11.17.51 PM.jpeg"
  }
];

export const CommitmentCards = () => {
  return (
    <section className="py-24 bg-[#FAFAF9] relative overflow-hidden">
      {/* Subtle dotted background pattern */}
      <div className="absolute inset-0 pointer-events-none opacity-40" 
           style={{ backgroundImage: 'radial-gradient(#e5e7eb 2px, transparent 2px)', backgroundSize: '30px 30px' }} />

      <Container>
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16 relative z-10">
          <motion.h4 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-orange-500 font-bold tracking-widest uppercase text-sm mb-4"
          >
            Our Commitment
          </motion.h4>
          <motion.h2 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-5xl font-serif font-black text-[#1A202C] mb-6"
          >
            Building a Stronger, Healthier Tomorrow
          </motion.h2>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="flex items-center justify-center gap-4 mb-4"
          >
            <div className="h-px bg-gray-300 w-16" />
            <Heart className="w-5 h-5 text-orange-500 fill-orange-500" />
            <div className="h-px bg-gray-300 w-16" />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-gray-500 font-medium"
          >
            Driven by values, focused on impact.
          </motion.p>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
          {cards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + idx * 0.1, duration: 0.5 }}
              className="relative h-[240px] md:h-[260px] max-w-[260px] mx-auto w-full group cursor-pointer"
              style={{ perspective: '1000px' }}
            >
              {/* Flip Container */}
              <div 
                className="w-full h-full relative transition-transform duration-700 ease-out group-hover:[transform:rotateY(180deg)]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* Front Side (White Card) */}
                <div 
                  className={`absolute inset-0 bg-white rounded-[20px] p-5 shadow-xl border-b-[4px] ${card.borderBottom} flex flex-col items-center text-center`}
                  style={{ backfaceVisibility: 'hidden' }}
                >
                  <div className={`w-12 h-12 rounded-full border-[2px] border-dotted ${card.borderColor} flex items-center justify-center mb-4 bg-white`}>
                    <div className={`${card.color} scale-75`}>
                      {card.icon}
                    </div>
                  </div>
                  <h3 className="text-base font-serif font-bold text-text-main mb-2 leading-snug">
                    {card.title}
                  </h3>
                  <div className="w-8 h-[1px] bg-gray-200 mb-2" />
                  <p className="text-[11px] text-gray-500 leading-tight font-medium line-clamp-4">
                    {card.desc}
                  </p>
                </div>

                {/* Back Side (Image) */}
                <div 
                  className={`absolute inset-0 rounded-3xl shadow-2xl border-b-[8px] ${card.borderBottom} overflow-hidden`}
                  style={{ backfaceVisibility: 'hidden', transform: 'rotateY(180deg)' }}
                >
                  <img 
                    src={card.image} 
                    alt={card.title} 
                    className="w-full h-full object-cover scale-110 group-hover:scale-100 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-700 delay-200">
                    <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/50 bg-black/40 backdrop-blur-md px-6 py-2 rounded-full">
                      View Project
                    </span>
                  </div>
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
};
