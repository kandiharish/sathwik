import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { Quote, ArrowRight } from 'lucide-react';
import { stories } from '../data/stories';

export const Stories = () => {

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <section className="pt-32 pb-20">
        <Container className="text-center max-w-3xl">
          <SectionHeading 
            title="Stories of Change" 
            subtitle="Real Impact, Real Voices"
            alignment="center"
          />
          <p className="text-xl text-gray-600 mt-6 font-light leading-relaxed">
            Behind every number is a life changed. Read the personal journeys of the people in the communities we serve.
          </p>
        </Container>
      </section>

      <Section className="pt-0 pb-32">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stories.map((story, idx) => (
              <motion.div 
                key={story.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group bg-white rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 overflow-hidden flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                <div className="h-64 relative overflow-hidden">
                  <img src={story.heroImage} alt={story.quote.author} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  <div className="absolute top-4 right-4 w-10 h-10 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center text-[#054E38] shadow-md">
                    <Quote className="w-4 h-4" fill="currentColor" />
                  </div>
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-sm text-white text-[10px] font-bold px-3 py-1.5 rounded-full tracking-widest uppercase">
                    {story.category}
                  </div>
                </div>
                <div className="p-8 flex-grow flex flex-col">
                  <h3 className="text-xl font-bold text-gray-900 mb-4 line-clamp-2">
                    {story.title}
                  </h3>
                  <p className="text-gray-600 italic leading-relaxed mb-6 flex-grow line-clamp-3">
                    "{story.quote.text}"
                  </p>
                  <div className="mt-auto pt-6 border-t border-gray-100 flex items-center justify-between">
                    <div>
                      <h4 className="font-bold text-gray-900 text-sm">{story.quote.author}</h4>
                      <span className="text-[10px] text-gray-500 font-bold uppercase tracking-wider">{story.quote.role}</span>
                    </div>
                    <Link 
                      to={`/stories/${story.slug}`}
                      className="w-10 h-10 rounded-full bg-[#054E38]/5 text-[#054E38] flex items-center justify-center group-hover:bg-[#054E38] group-hover:text-white transition-colors"
                    >
                      <ArrowRight className="w-4 h-4" />
                    </Link>
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
