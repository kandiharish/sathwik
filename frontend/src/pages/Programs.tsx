import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { programs } from '../data/programs';
import { projects } from '../data/projects';
import { ArrowRight, MapPin, CheckCircle2 } from 'lucide-react';

export const Programs = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const tabParam = searchParams.get('tab');
  
  // Default to the first program if no valid tab is found
  const initialProgram = programs.find(p => p.id === tabParam) || programs[0];
  const [activeTab, setActiveTab] = useState(initialProgram.id);

  // Sync state when URL parameter changes (e.g., clicking Navbar links)
  useEffect(() => {
    if (tabParam && programs.some(p => p.id === tabParam)) {
      setActiveTab(tabParam);
    }
  }, [tabParam]);

  const handleTabChange = (id: string) => {
    setActiveTab(id);
    setSearchParams({ tab: id });
  };

  const activeProgram = programs.find(p => p.id === activeTab) || programs[0];
  const activeProjects = projects.filter(p => p.programId === activeProgram.id);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section - Pure White Theme */}
      <section className="pt-32 pb-16 bg-white border-b border-gray-100 relative overflow-hidden">
        {/* Subtle background decoration */}
        <div className="absolute top-0 right-0 -mr-32 -mt-32 w-[600px] h-[600px] bg-emerald-50/40 rounded-full blur-3xl pointer-events-none z-0" />
        
        <Container className="text-center relative z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl font-serif font-bold mb-6 text-slate-900"
          >
            Programs & Initiatives
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Discover our comprehensive initiatives designed to foster self-reliance and sustainable development.
          </motion.p>
        </Container>
      </section>

      <Section className="bg-white py-12 md:py-20">
        <Container>
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {programs.map((program) => {
              const isActive = activeTab === program.id;
              return (
                <button
                  key={program.id}
                  onClick={() => handleTabChange(program.id)}
                  className={`px-6 py-3 rounded-full text-sm font-bold transition-all duration-300 shadow-sm ${
                    isActive 
                      ? 'bg-[#054E38] text-white shadow-md scale-105'
                      : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200 hover:border-slate-300'
                  }`}
                >
                  {program.title}
                </button>
              );
            })}
          </div>

          {/* Active Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
              className="bg-white"
            >
              <div className="flex flex-col lg:flex-row gap-12 lg:gap-20">
                {/* Left Column: Program Info */}
                <div className="lg:w-1/3 flex flex-col">
                  <div className="sticky top-32">
                    <h2 className="text-3xl lg:text-4xl font-serif font-bold text-slate-900 mb-6">{activeProgram.title}</h2>
                    <p className="text-slate-600 text-[16px] leading-relaxed mb-8">{activeProgram.overview}</p>
                    
                    <div className="bg-slate-50 border border-slate-100 rounded-2xl p-6 mb-8">
                      <h4 className="font-bold text-slate-900 mb-4 text-sm uppercase tracking-wider">Key Activities</h4>
                      <ul className="space-y-3">
                        {activeProgram.activities?.map((activity, idx) => (
                          <li key={idx} className="flex items-start gap-3">
                            <CheckCircle2 className="w-5 h-5 text-[#009966] shrink-0 mt-0.5" />
                            <span className="text-sm text-slate-700 font-medium">{activity}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      {activeProgram.impactStats?.map((stat, idx) => (
                        <div key={idx} className="bg-white border border-slate-100 p-4 rounded-xl shadow-sm text-center">
                          <div className="text-2xl font-black text-[#054E38] mb-1">
                            {stat.value}{stat.suffix}
                          </div>
                          <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wide">
                            {stat.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
                
                {/* Right Column: Projects */}
                <div className="lg:w-2/3">
                  <div className="mb-10 pb-4 border-b border-slate-100">
                    <h3 className="text-2xl font-serif font-bold text-slate-900 flex items-center gap-4">
                      Featured Projects
                      <span className="h-px bg-slate-200 flex-1 ml-4 hidden sm:block"></span>
                    </h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {activeProjects.length > 0 ? (
                      activeProjects.map((project, idx) => (
                        <motion.div 
                          key={project.id}
                          initial={{ opacity: 0, scale: 0.95 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          className="group bg-white border border-slate-100 rounded-2xl overflow-hidden hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300 flex flex-col h-full"
                        >
                          <div className="h-56 bg-slate-100 relative overflow-hidden">
                            <img 
                              src={project.images?.[0] || "/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.04 PM (1).jpeg"} 
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                          </div>
                          <div className="p-6 flex flex-col flex-1">
                            <div className="flex items-center text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-4 gap-1.5">
                              <MapPin className="w-3.5 h-3.5 text-[#F43F5E]" /> {project.location}
                            </div>
                            <h4 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-[#054E38] transition-colors leading-tight">
                              {project.title}
                            </h4>
                            <p className="text-slate-600 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                              {project.response}
                            </p>
                            <Link to={`/projects/${project.slug}`} className="inline-flex items-center gap-2 text-sm font-bold text-[#054E38] hover:text-[#009966] transition-colors group/link mt-auto w-max">
                              Read Full Story 
                              <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                            </Link>
                          </div>
                        </motion.div>
                      ))
                    ) : (
                      <div className="col-span-full py-12 text-center text-slate-500 bg-slate-50 rounded-2xl border border-dashed border-slate-200">
                        No featured projects found for this program yet.
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </Container>
      </Section>
    </div>
  );
};
