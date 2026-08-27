import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { impactStats } from '../data/impact';
import { ArrowRight, MapPin, Target, Landmark } from 'lucide-react';

export const Impact = () => {
  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading 
              title="Our Impact Dashboard" 
              subtitle="A Decade of Delivering Change"
              alignment="left"
            />
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              SATHWIK has a proven track record of over a decade implementing CSR projects in association with multiple Public Sector Undertakings.
            </p>
          </div>
        </Container>
      </section>

      {/* Main Stats Grid */}
      <Section className="pt-0 pb-20">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, idx) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white p-8 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col items-center text-center group hover:-translate-y-1 transition-transform duration-300"
              >
                <div className="text-4xl md:text-5xl font-serif font-bold text-[#054E38] mb-2 flex items-baseline justify-center">
                  {stat.prefix && <span className="text-2xl mr-1">{stat.prefix}</span>}
                  {stat.value}
                  {stat.suffix && <span className="text-2xl ml-1">{stat.suffix}</span>}
                </div>
                <div className="text-sm font-bold tracking-widest uppercase text-gray-900 mb-2">
                  {stat.label}
                </div>
                {stat.description && (
                  <div className="text-sm text-gray-500 mt-auto">
                    {stat.description}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </Container>
      </Section>

      {/* Deep Dive Categories */}
      <Section className="bg-white py-24 border-y border-gray-100">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-serif font-bold text-gray-900 mb-4">Explore Our Work</h2>
              <p className="text-lg text-gray-600">
                Discover the specific ways we are creating meaningful change across communities in India.
              </p>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Geographic Impact */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="group bg-[#FAFAF8] rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-gray-100"
            >
              <div className="w-14 h-14 bg-[#054E38]/10 text-[#054E38] rounded-2xl flex items-center justify-center mb-6">
                <MapPin className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Geographic Reach</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Explore our interactive map to see the communities and states we've reached across India.
              </p>
              <Link to="/impact/map" className="inline-flex items-center gap-2 text-[#054E38] font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                View Impact Map <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* Strategic Programs */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group bg-[#FAFAF8] rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-gray-100"
            >
              <div className="w-14 h-14 bg-amber-100 text-amber-700 rounded-2xl flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">Strategic Areas</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                We focus on Healthcare, Water & Sanitation, Education, and Community Development.
              </p>
              <Link to="/projects" className="inline-flex items-center gap-2 text-amber-700 font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                Browse Projects <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>

            {/* CSR Partners */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group bg-[#FAFAF8] rounded-[2rem] p-8 md:p-10 flex flex-col h-full border border-gray-100"
            >
              <div className="w-14 h-14 bg-blue-100 text-blue-700 rounded-2xl flex items-center justify-center mb-6">
                <Landmark className="w-7 h-7" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-gray-900 mb-4">CSR Partners</h3>
              <p className="text-gray-600 mb-8 flex-grow">
                Our initiatives are supported by major Public Sector Undertakings including GAIL, ONGC, and NTPC.
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-blue-700 font-bold uppercase tracking-wider text-sm hover:gap-4 transition-all">
                Learn More <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
