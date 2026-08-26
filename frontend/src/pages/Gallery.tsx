
import { motion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { galleryImages } from '../data/gallery';

export const Gallery = () => {

  return (
    <div>
      <section className="pt-32 pb-20">
        <Container>
          <SectionHeading 
            title="Our Photo Story" 
            subtitle="A visual journey"
            alignment="left"
          />
        </Container>
      </section>

      <Section className="pt-0">
        <Container>
          <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
            {galleryImages.map((img, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: (idx % 3) * 0.1 }}
                className="break-inside-avoid overflow-hidden rounded-xl group cursor-pointer relative"
              >
                <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center">
                  <span className="text-white font-bold tracking-wider uppercase text-sm border border-white/30 px-4 py-2 rounded-full backdrop-blur-sm">View</span>
                </div>
                <img src={img.url} alt={img.caption} className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700" />
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
