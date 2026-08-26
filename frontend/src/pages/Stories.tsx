
import { motion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Quote } from 'lucide-react';
import { stories } from '../data/stories';

export const Stories = () => {

  return (
    <div>
      <section className="pt-32 pb-20 bg-[#Fdfbf7]">
        <Container className="text-center">
          <SectionHeading 
            title="Stories of Change" 
            subtitle="Real Impact, Real Voices"
            alignment="center"
          />
          <p className="text-xl text-gray-600 max-w-2xl mx-auto font-light">
            Behind every number is a life changed. Read the personal journeys of the people in the communities we serve.
          </p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-lg transition-shadow"
              >
                <div className="h-64 relative">
                  <img src={story.heroImage} alt={story.quote.author} className="w-full h-full object-cover" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary shadow-md">
                    <Quote className="w-5 h-5" fill="currentColor" />
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <p className="text-gray-700 font-serif italic text-lg leading-relaxed mb-6 flex-grow">
                    "{story.quote.text}"
                  </p>
                  <div>
                    <h4 className="font-bold text-text-main text-lg">{story.quote.author}</h4>
                    <span className="text-sm text-secondary font-bold uppercase tracking-wider">{story.quote.role}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>
    </div>
  );
};
