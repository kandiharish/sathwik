import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link, useSearchParams } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projects } from '../data/projects';
import { ArrowRight, MapPin } from 'lucide-react';

export const Projects = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  
  const [activeCategory, setActiveCategory] = useState<string>(searchParams.get('category') || 'All Categories');
  const [activeState, setActiveState] = useState<string>(searchParams.get('state') || 'All States');

  // Sync state with URL changes
  useEffect(() => {
    setActiveCategory(searchParams.get('category') || 'All Categories');
    setActiveState(searchParams.get('state') || 'All States');
  }, [searchParams]);

  // Sync URL with state changes
  const updateFilters = (category: string, state: string) => {
    const params = new URLSearchParams();
    if (category !== 'All Categories') params.set('category', category);
    if (state !== 'All States') params.set('state', state);
    setSearchParams(params);
  };

  const categories = ['All Categories', ...Array.from(new Set(projects.map(p => p.category)))];
  const states = ['All States', ...Array.from(new Set(projects.map(p => p.state).filter(Boolean))) as string[]];

  const filteredProjects = useMemo(() => {
    return projects.filter(p => {
      const categoryMatch = activeCategory === 'All Categories' || p.category === activeCategory;
      const stateMatch = activeState === 'All States' || p.state === activeState;
      return categoryMatch && stateMatch;
    });
  }, [activeCategory, activeState]);

  return (
    <div className="relative pt-32 pb-32 min-h-screen bg-[#FAFAF8] overflow-hidden">
      
      {/* Editorial Header */}
      <Container className="relative z-10 mb-16">
        <div className="max-w-3xl">
          <SectionHeading 
            title="Our Work" 
            subtitle="Every project begins with a need. Every intervention is designed to create meaningful change." 
            alignment="left"
          />
        </div>

        {/* Smart Project Filter */}
        <div className="mt-12 bg-white p-6 rounded-2xl shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex flex-col md:flex-row gap-4">
            {/* Category Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">Category</label>
              <select 
                value={activeCategory} 
                onChange={(e) => updateFilters(e.target.value, activeState)}
                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#054E38] focus:border-[#054E38] block w-full p-2.5 font-medium outline-none transition-colors"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>
            
            {/* State Select */}
            <div className="flex flex-col gap-1.5">
              <label className="text-xs font-bold text-gray-500 uppercase tracking-wider ml-1">State</label>
              <select 
                value={activeState} 
                onChange={(e) => updateFilters(activeCategory, e.target.value)}
                className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-xl focus:ring-[#054E38] focus:border-[#054E38] block w-full p-2.5 font-medium outline-none transition-colors"
              >
                {states.map(state => <option key={state} value={state}>{state}</option>)}
              </select>
            </div>
          </div>
          
          {/* Live Counter */}
          <div className="text-sm font-semibold text-gray-500 bg-gray-50 px-4 py-2.5 rounded-xl border border-gray-100 self-start md:self-end">
            Showing <span className="text-[#054E38] font-bold">{filteredProjects.length}</span> {filteredProjects.length === 1 ? 'Project' : 'Projects'}
          </div>
        </div>
      </Container>
      
      <Container className="relative z-10">
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4, ease: "easeInOut" }}
              >
                <Link to={`/projects/${project.slug}`} className="group block h-full">
                  <div className="bg-white rounded-2xl overflow-hidden h-full flex flex-col shadow-[0_4px_20px_rgb(0,0,0,0.03)] border border-gray-100 transition-all duration-500 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] hover:-translate-y-2">
                    
                    {/* Image Container with Zoom */}
                    <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                      {project.images && project.images.length > 0 ? (
                        <img 
                          src={project.images[0]} 
                          alt={project.title} 
                          className="w-full h-full object-cover transition-transform duration-700 ease-in-out group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full flex items-center justify-center text-gray-400">
                          No Image Available
                        </div>
                      )}
                      
                      {/* Overlay gradient */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/0 to-black/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      
                      {/* Investment Badge */}
                      {project.investment && (
                        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-[#054E38] shadow-sm transform translate-y-0 opacity-100 transition-all duration-300">
                          {project.investment}
                        </div>
                      )}
                      
                      {/* Category Badge */}
                      <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur-sm px-3 py-1.5 rounded-full text-xs font-bold text-gray-800 shadow-sm transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-6 md:p-8 flex flex-col flex-grow">
                      <div className="flex items-center gap-1.5 text-xs font-semibold text-amber-600 uppercase tracking-wider mb-3">
                        <MapPin className="w-3.5 h-3.5" />
                        {project.location} {project.state ? `, ${project.state}` : ''}
                      </div>
                      
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-gray-900 mb-4 group-hover:text-[#054E38] transition-colors line-clamp-2">
                        {project.title}
                      </h3>
                      
                      <p className="text-gray-600 text-sm leading-relaxed mb-6 flex-grow line-clamp-3">
                        {project.summary}
                      </p>

                      {/* Project Tags */}
                      {project.tags && project.tags.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                          {project.tags.slice(0, 3).map(tag => (
                            <span key={tag} className="text-[10px] font-bold uppercase tracking-wider text-gray-500 bg-gray-100 px-2.5 py-1 rounded-full">
                              {tag}
                            </span>
                          ))}
                        </div>
                      )}
                      
                      {/* Arrow Footer */}
                      <div className="mt-auto flex items-center justify-between border-t border-gray-100 pt-5">
                        <span className="text-sm font-semibold text-[#054E38]">Explore Project</span>
                        <div className="w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center group-hover:bg-[#054E38] transition-colors duration-300">
                          <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors duration-300 transform group-hover:translate-x-0.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </div>
  );
};
