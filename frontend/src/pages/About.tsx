
import { motion } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { organizationInfo } from '../data/organization';
import { impactStats } from '../data/impact';
import { Compass, Leaf, ShieldCheck, Calendar } from 'lucide-react';

export const About = () => {
  return (
    <div>
      <section className="relative pt-32 pb-20 bg-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[#064E3B] opacity-90 z-10"></div>
        <img 
          src="/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg" 
          alt="About SRAYI Association" 
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
                The Sathwik Rural and Youth Integrated Association (SRAYI) was founded with a singular vision: to bring sustainable development to the grassroots of India. We recognize that true progress is impossible without addressing the fundamental needs of our rural communities.
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

      {/* OUR CORE VALUES */}
      <Section className="py-24 bg-[#FAFAF8] relative overflow-hidden">
        <Container className="relative z-10">
          <SectionHeading title="Our Core Values" alignment="center" />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14 max-w-6xl mx-auto">
            {[
              { 
                index: '01',
                pillar: 'Core Principle',
                title: 'Empowerment', 
                desc: 'We believe in equipping individuals with the skills, dignity, and practical resources they need to transform their own lives and lead their communities.',
                takeaway: 'Skill-building & Self-reliance',
                topBar: 'bg-[#054E38]',
                iconBg: 'bg-emerald-50 text-[#054E38] border-emerald-100',
                dotColor: 'bg-[#054E38]',
                icon: Compass
              },
              { 
                index: '02',
                pillar: 'Core Principle',
                title: 'Sustainability', 
                desc: 'Our projects are designed from day one to be self-sustaining, generating lasting impact and continuous growth without creating indefinite dependency.',
                takeaway: 'Long-term Community Ownership',
                topBar: 'bg-[#c2410c]',
                iconBg: 'bg-orange-50 text-[#c2410c] border-orange-100',
                dotColor: 'bg-[#c2410c]',
                icon: Leaf
              },
              { 
                index: '03',
                pillar: 'Core Principle',
                title: 'Transparency', 
                desc: 'We operate with complete openness and integrity, accountable to every community member we serve and every partner who supports our vision.',
                takeaway: 'Uncompromising Accountability',
                topBar: 'bg-[#0f766e]',
                iconBg: 'bg-teal-50 text-[#0f766e] border-teal-100',
                dotColor: 'bg-[#0f766e]',
                icon: ShieldCheck
              }
            ].map((value, idx) => {
              const Icon = value.icon;
              return (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1, duration: 0.5 }}
                  className="relative bg-white rounded-2xl border border-slate-200/80 p-8 sm:p-9 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:border-slate-300 transition-colors duration-300 flex flex-col justify-between overflow-hidden"
                >
                  {/* Top Solid Accent Bar */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 ${value.topBar}`} />

                  {/* Upper Content */}
                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <div className={`w-12 h-12 rounded-xl flex items-center justify-center border ${value.iconBg}`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-serif font-bold text-2xl text-slate-300 select-none">
                        {value.index}
                      </span>
                    </div>

                    <span className="text-[10px] font-bold tracking-[0.2em] text-slate-400 uppercase block mb-1.5">
                      {value.pillar}
                    </span>

                    <h3 className="text-2xl font-serif font-bold text-slate-900 mb-3 tracking-tight">
                      {value.title}
                    </h3>
                    
                    <p className="text-slate-600 text-[14px] sm:text-[15px] leading-relaxed font-normal">
                      {value.desc}
                    </p>
                  </div>

                  {/* Bottom Reassuring Takeaway */}
                  <div className="mt-8 pt-5 border-t border-slate-100 flex items-center gap-2.5">
                    <div className={`w-2 h-2 rounded-full ${value.dotColor} shrink-0`} />
                    <span className="text-[12px] font-semibold text-slate-500 tracking-tight">
                      {value.takeaway}
                    </span>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </Container>
      </Section>

      {/* MILESTONES OF IMPACT */}
      <Section className="bg-[#FAFAF8] py-24 relative overflow-hidden">
        {/* Soft Background Accents */}
        <div className="absolute top-1/3 left-0 w-80 h-80 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/3 right-0 w-80 h-80 bg-[#d9531e]/5 rounded-full blur-3xl pointer-events-none" />

        <Container className="relative z-10">
          <SectionHeading title="Milestones of Impact" subtitle="Our Journey Since Foundation" alignment="center" />
          
          <div className="max-w-4xl mx-auto mt-16 relative">
            {/* Center Gradient Connecting Line */}
            <div className="absolute left-4 md:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-transparent via-[#054E38]/30 to-transparent transform md:-translate-x-1/2"></div>
            
            <div className="space-y-12 md:space-y-14">
              {organizationInfo.timeline.map((item, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.12, duration: 0.6 }}
                  className={`relative flex flex-col md:flex-row items-start ${idx % 2 === 0 ? 'md:flex-row-reverse' : ''} group`}
                >
                  {/* Timeline Glowing Dot */}
                  <div className="absolute left-4 md:left-1/2 w-9 h-9 rounded-full bg-white border-2 border-[#054E38] shadow-md flex items-center justify-center transform -translate-x-1/2 mt-2 z-10 group-hover:shadow-[0_0_16px_rgba(5,78,56,0.3)] group-hover:scale-110 transition-all duration-300">
                    <div className="w-3 h-3 rounded-full bg-[#054E38] group-hover:scale-125 transition-transform" />
                  </div>
                  
                  {/* Milestone Card */}
                  <div className={`ml-12 md:ml-0 md:w-1/2 ${idx % 2 === 0 ? 'md:pl-12' : 'md:pr-12 text-left md:text-right'}`}>
                    <div className="relative p-6 sm:p-7 rounded-2xl bg-white/95 backdrop-blur-sm border border-slate-200/80 shadow-[0_8px_25px_rgba(0,0,0,0.03)] hover:shadow-[0_16px_36px_rgba(5,78,56,0.08)] hover:border-[#054E38]/35 transition-all duration-400 overflow-hidden text-left">
                      
                      {/* Left Accent Color Indicator */}
                      <div className="absolute top-0 bottom-0 left-0 w-1 bg-gradient-to-b from-[#054E38] to-[#0a7a5c] rounded-l-2xl opacity-80" />

                      {/* Large Watermark Year in Background */}
                      <div className="absolute -top-2 right-4 font-serif font-black text-6xl text-slate-900/[0.03] select-none pointer-events-none group-hover:text-[#054E38]/[0.06] transition-colors duration-500">
                        {item.year}
                      </div>

                      {/* Year Pill Badge */}
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#054E38]/10 text-[#054E38] border border-[#054E38]/20 font-bold text-xs tracking-wider rounded-full mb-3 shadow-xs">
                        <Calendar className="w-3.5 h-3.5 text-[#054E38]" />
                        <span>{item.year}</span>
                      </div>

                      <h3 className="text-xl font-serif font-bold text-slate-900 mb-2 group-hover:text-[#054E38] transition-colors">
                        {item.title}
                      </h3>
                      
                      <p className="text-slate-600 text-[14px] md:text-[15px] leading-relaxed font-normal">
                        {item.description}
                      </p>
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
