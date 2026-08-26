
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { programs } from '../data/programs';
import { projects } from '../data/projects';
import { ArrowRight, MapPin } from 'lucide-react';

export const Programs = () => {
  return (
    <div>
      <section className="pt-32 pb-20 bg-primary text-white">
        <Container className="text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-6xl font-serif font-bold mb-6"
          >
            Programs & Projects
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-xl text-primary-light max-w-2xl mx-auto font-light"
          >
            Discover our comprehensive initiatives designed to foster self-reliance and sustainable development.
          </motion.p>
        </Container>
      </section>

      <Section>
        <Container>
          <div className="space-y-24">
            {programs.map((program, idx) => {
              const programProjects = projects.filter(p => p.programId === program.id);
              
              return (
                <div key={program.id} className="relative">
                  {/* Decorative line connecting programs */}
                  {idx !== programs.length - 1 && (
                    <div className="hidden lg:block absolute left-8 top-32 bottom-[-96px] w-0.5 bg-gray-200 z-0"></div>
                  )}
                  
                  <div className="flex flex-col lg:flex-row gap-12 relative z-10">
                    <div className="lg:w-1/3">
                      <div className="sticky top-32 bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
                        <h2 className="text-3xl font-serif font-bold text-primary mb-4">{program.title}</h2>
                        <p className="text-gray-600 mb-6">{program.overview}</p>
                        <Link to={`/programs/${program.slug}`} className="text-secondary font-bold inline-flex items-center hover:text-primary transition-colors">
                          View Program Details <ArrowRight className="w-4 h-4 ml-2" />
                        </Link>
                      </div>
                    </div>
                    
                    <div className="lg:w-2/3">
                      <h3 className="text-xl font-bold mb-8 flex items-center gap-3">
                        <span className="w-8 h-px bg-gray-300"></span>
                        Featured Projects
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        {programProjects.map(project => (
                          <motion.div 
                            key={project.id}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="group bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-xl transition-all"
                          >
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                              <img 
                                src={project.coverImage || "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2013&auto=format&fit=crop"} 
                                alt={project.title}
                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                              />
                            </div>
                            <div className="p-6">
                              <div className="flex items-center text-xs font-bold text-gray-500 uppercase tracking-wide mb-3 gap-1">
                                <MapPin className="w-3 h-3 text-secondary" /> {project.location}
                              </div>
                              <h4 className="text-xl font-serif font-bold text-text-main mb-3 group-hover:text-primary transition-colors">
                                {project.title}
                              </h4>
                              <p className="text-gray-600 text-sm mb-4 line-clamp-2">
                                {project.objective}
                              </p>
                              <Link to={`/projects/${project.slug}`} className="text-sm font-bold text-primary hover:text-secondary transition-colors">
                                Read More &rarr;
                              </Link>
                            </div>
                          </motion.div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};
