
import { motion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { organizationInfo } from '../data/organization';
import { impactStats } from '../data/impact';

export const About = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#064E3B] opacity-90 z-10"></div>
        <img 
          src="/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg" 
          alt="About SRYIA" 
          className="absolute inset-0 w-full h-full object-cover z-0 grayscale"
        />
        <Container className="relative z-20 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Our Journey
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-200 max-w-2xl mx-auto font-light"
          >
            Since 2015, we have been dedicated to uplifting rural communities through education, healthcare, and sustainable growth.
          </motion.p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="max-w-4xl mx-auto">
            <div className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif italic border-l-4 border-primary pl-6 py-2 mb-10">
              "{organizationInfo.mission}"
            </div>
            
            <div className="space-y-6 text-gray-600 leading-relaxed text-lg">
              {organizationInfo.history.slice(0,2).map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
            
            <SectionHeading title="Who We Are" alignment="left" />
            <div className="prose prose-lg text-gray-600 max-w-none space-y-6">
              <p>
                The Sathwik Rural and Youth Integrated Association (SRYIA) was founded with a singular vision: to bring sustainable development to the grassroots of India. We recognize that true progress is impossible without addressing the fundamental needs of our rural communities.
              </p>
              <p>
                Our comprehensive approach targets the root causes of inequality. By focusing on youth empowerment, child health, education, and rural infrastructure, we don't just provide temporary relief—we build the foundations for long-term self-reliance.
              </p>
              <p>
                Over the past 9+ years, our dedicated team of volunteers and partners have transformed over {impactStats.find(s => s.label.includes('Lives'))?.value} lives, ensuring that geographical isolation does not mean an absence of opportunity.
              </p>
            </div>
          </div>
        </Container>
      </Section>

      <Section background="muted">
        <Container>
          <SectionHeading title="Our Core Values" alignment="center" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {[
              { title: 'Empowerment', desc: 'We believe in equipping individuals with the skills and resources they need to change their own lives.' },
              { title: 'Sustainability', desc: 'Our projects are designed to be self-sustaining, ensuring long-term impact without indefinite dependency.' },
              { title: 'Transparency', desc: 'We operate with complete openness, accountable to the communities we serve and the partners who support us.' }
            ].map((value, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 mx-auto bg-secondary/10 text-secondary rounded-full flex items-center justify-center font-serif font-bold text-2xl mb-6">
                  {idx + 1}
                </div>
                <h3 className="text-xl font-bold text-text-main mb-4">{value.title}</h3>
                <p className="text-gray-600">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      <Section className="bg-[#FAFAF8] py-24">
        <Container>
          <SectionHeading title="Milestones of Impact" subtitle="Our Journey Since Foundation" alignment="center" />
          
          <div className="max-w-4xl mx-auto mt-16 relative">
            {/* Vertical Line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gray-200 transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12">
              {organizationInfo.timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-4 md:left-1/2 w-8 h-8 rounded-full bg-white border-4 border-[#054E38] transform -translate-x-1/2 mt-1.5 z-10"></div>
                  
                  {/* Content Box */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                    <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                      <span className="inline-block px-3 py-1 bg-[#054E38]/10 text-[#054E38] font-bold text-sm rounded-full mb-3">
                        {item.year}
                      </span>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
