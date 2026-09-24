import { motion } from 'framer-motion';
import { Container } from '../layout/Container';
import { Img } from '../common/Img';

export const Recognition = () => {
  return (
    <section className="section bg-white">
      <Container>
        <motion.figure
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto card flex flex-col md:flex-row items-center gap-8 md:gap-12 p-8 md:p-12"
        >
          {/* MP photo */}
          <div className="flex-shrink-0 w-44 h-44 md:w-52 md:h-52 rounded-full overflow-hidden border border-line bg-sand p-1.5">
            <Img
              src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
              alt="Kunduru Raghuveer Reddy"
              width={416}
              height={416}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover rounded-full"
            />
          </div>

          {/* Content */}
          <div className="text-center md:text-left flex-grow">
            <span className={`eyebrow mb-5 justify-center md:justify-start`}>Recognition &amp; Support</span>
            <blockquote className="font-serif italic text-xl md:text-2xl leading-relaxed text-ink">
              "Recognizing the dedicated efforts of SRAYI Association in bringing impactful development to the communities."
            </blockquote>
            <figcaption className="mt-6 pt-6 border-t border-line">
              <h3 className="font-serif font-semibold text-2xl text-ink">Kunduru Raghuveer Reddy</h3>
              <p className="mt-1 text-[13px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                Member of Parliament, Nalgonda
              </p>
            </figcaption>
          </div>
        </motion.figure>
      </Container>
    </section>
  );
};
