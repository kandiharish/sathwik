import { motion } from 'framer-motion';
import { Container } from '../layout/Container';

export const Recognition = () => {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <Container>
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row items-center gap-8 md:gap-12 bg-[#FAFAF8] rounded-[2rem] p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-[#eae5dd]"
          >
            {/* MP Photo */}
            <div className="flex-shrink-0 relative w-48 h-48 md:w-56 md:h-56">
              <div className="absolute inset-0 bg-amber-600 rounded-full blur-2xl opacity-10 translate-x-4 translate-y-4" />
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop" 
                alt="Kunduru Raghuveer Reddy" 
                className="relative w-full h-full object-cover rounded-full border-4 border-white shadow-xl"
              />
            </div>

            {/* Content */}
            <div className="text-center md:text-left flex-grow">
              <div className="mb-4 inline-flex items-center gap-2 bg-white px-4 py-1.5 rounded-full shadow-sm border border-gray-100">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span className="text-xs font-bold tracking-widest uppercase text-gray-500">Recognition & Support</span>
              </div>
              
              <h3 className="text-3xl font-serif font-bold text-[#1d1d1f] mb-2">
                Kunduru Raghuveer Reddy
              </h3>
              <p className="text-[#86868b] font-medium text-lg uppercase tracking-wide">
                Member of Parliament – Nalgonda
              </p>
              
              <div className="mt-6 pt-6 border-t border-[#eae5dd]">
                <p className="text-gray-600 font-serif italic text-lg leading-relaxed">
                  "Recognizing the dedicated efforts of SRYIA in bringing impactful development to the communities."
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
