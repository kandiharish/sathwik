import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { MapPin, ArrowRight, ArrowLeft } from 'lucide-react';

// Extract unique states that actually have projects
const uniqueStates = Array.from(new Set(projects.filter(p => p.state).map(p => p.state as string))).sort();

export const ImpactMap = () => {
  const [activeState, setActiveState] = useState<string>(uniqueStates[0]);

  const stateProjects = useMemo(() => {
    return projects.filter(p => p.state === activeState);
  }, [activeState]);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <section className="pt-32 pb-16">
        <Container>
          <Link to="/impact" className="inline-flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-[#054E38] transition-colors mb-10">
            <ArrowLeft className="w-4 h-4" /> Back to Impact Dashboard
          </Link>
          
          <div className="max-w-3xl">
            <SectionHeading 
              title="Geographic Reach" 
              subtitle="Where We Work"
              alignment="left"
            />
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Explore our project footprint across {uniqueStates.length} states in India. Select a region to view local initiatives.
            </p>
          </div>
        </Container>
      </section>

      <Section className="pt-0 pb-32">
        <Container>
          <div className="grid lg:grid-cols-[1fr_2fr] gap-12 items-start">
            
            {/* States List */}
            <div className="bg-white p-6 rounded-[2rem] shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col gap-2">
              <h3 className="text-sm font-bold tracking-[0.2em] uppercase text-gray-500 mb-4 px-4">Regions</h3>
              {uniqueStates.map((state) => {
                const count = projects.filter(p => p.state === state).length;
                const isActive = activeState === state;
                return (
                  <button
                    key={state}
                    onClick={() => setActiveState(state)}
                    className={`flex items-center justify-between w-full p-4 rounded-xl text-left transition-all duration-300 ${
                      isActive 
                        ? 'bg-[#054E38] text-white shadow-md' 
                        : 'hover:bg-gray-50 text-gray-700'
                    }`}
                  >
                    <span className="font-semibold">{state}</span>
                    <span className={`text-xs font-bold px-3 py-1 rounded-full ${
                      isActive ? 'bg-white/20 text-white' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {count} Project{count !== 1 ? 's' : ''}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Projects in State */}
            <div>
              <div className="flex items-center gap-3 mb-8">
                <MapPin className="w-6 h-6 text-[#054E38]" />
                <h3 className="text-2xl font-serif font-bold text-gray-900">
                  Projects in {activeState}
                </h3>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <AnimatePresence mode="popLayout">
                  {stateProjects.map((project, idx) => (
                    <motion.div
                      key={project.id}
                      layout
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.95 }}
                      transition={{ delay: idx * 0.05, duration: 0.3 }}
                      className="group bg-white rounded-2xl overflow-hidden shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 flex flex-col h-full hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-shadow duration-300"
                    >
                      {project.images?.[0] ? (
                        <div className="relative w-full aspect-[4/3] overflow-hidden">
                          <img 
                            src={project.images[0]} 
                            alt={project.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                          />
                          <div className="absolute top-4 left-4">
                            <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-[#054E38] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                              {project.category}
                            </span>
                          </div>
                        </div>
                      ) : (
                        <div className="w-full aspect-[4/3] bg-gray-100 flex items-center justify-center p-6 text-center">
                          <span className="px-3 py-1 bg-white text-[#054E38] rounded-full text-[10px] font-bold uppercase tracking-widest shadow-sm">
                            {project.category}
                          </span>
                        </div>
                      )}
                      
                      <div className="p-6 flex flex-col flex-grow">
                        <h4 className="text-lg font-bold text-gray-900 mb-2 line-clamp-2">
                          {project.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-6 line-clamp-2">
                          {project.summary}
                        </p>
                        
                        <div className="mt-auto pt-4 border-t border-gray-100 flex items-center justify-between">
                          <div className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
                            {project.location || project.state}
                          </div>
                          <Link 
                            to={`/projects/${project.slug}`}
                            className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center text-gray-400 group-hover:bg-[#054E38] group-hover:text-white transition-colors"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </Link>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>
            </div>
          </div>
        </Container>
      </Section>
    </div>
  );
};
