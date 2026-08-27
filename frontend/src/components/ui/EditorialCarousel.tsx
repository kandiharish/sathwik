import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import type { Project } from '../../types/content';

interface EditorialCarouselProps {
  projects: Project[];
}

export const EditorialCarousel: React.FC<EditorialCarouselProps> = ({ projects }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="w-full h-[350px] md:h-[450px] lg:h-[500px] flex gap-2 md:gap-4 overflow-hidden">
      {projects.map((project, index) => {
        const isActive = index === activeIndex;

        return (
          <motion.div
            key={project.id}
            onHoverStart={() => setActiveIndex(index)}
            onClick={() => setActiveIndex(index)}
            animate={{
              width: isActive ? '75%' : '8.33%',
            }}
            transition={{ type: "spring", damping: 25, stiffness: 120 }}
            className="relative h-full cursor-pointer overflow-hidden bg-[#1a1a1a] rounded-sm group flex-shrink-0"
          >
            {/* Background Image */}
            <motion.img 
              src={project.images?.[0] || "/Nutrition kits in hyd/WhatsApp Image 2026-08-19 at 11.15.46 PM.jpeg"} 
              alt={project.title}
              className="absolute inset-0 w-full h-full object-cover origin-center"
              animate={{ 
                scale: isActive ? 1 : 1.1,
                opacity: isActive ? 1 : 0.5,
                filter: isActive ? 'grayscale(0%) sepia(10%)' : 'grayscale(50%) sepia(20%)'
              }}
              transition={{ duration: 0.8 }}
            />
            
            {/* Gradient Overlay */}
            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent transition-opacity duration-700 ${isActive ? 'opacity-100' : 'opacity-0'}`} />

            {/* Vertical Title for Inactive State (Optional, but looks cool) */}
            <AnimatePresence>
              {!isActive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="absolute inset-0 flex items-end justify-center pb-8"
                >
                  <p className="text-white/50 tracking-widest uppercase text-xs rotate-180" style={{ writingMode: 'vertical-rl' }}>
                    {project.title}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Content for Active Panel */}
            <AnimatePresence>
              {isActive && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, transition: { duration: 0.2 } }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                  className="absolute bottom-0 left-0 w-full p-6 md:p-12 text-white flex flex-col justify-end h-full"
                >
                  <div className="max-w-4xl w-full">
                    <div className="flex items-center gap-3 mb-4">
                      <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/80">
                        {project.category}
                      </span>
                      <span className="w-8 h-[1px] bg-white/40" />
                    </div>
                    
                    <div className="flex flex-col md:flex-row md:justify-between md:items-end mb-6 border-b border-white/20 pb-4 gap-2">
                      <h3 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold tracking-tight leading-tight">
                        {project.title}
                      </h3>
                      <span className="text-xs md:text-sm font-medium tracking-wider text-white/60 md:pb-2 uppercase">
                        {project.location}
                      </span>
                    </div>
                    
                    <p className="text-sm md:text-lg text-white/80 mb-8 max-w-2xl leading-relaxed line-clamp-2 md:line-clamp-none">
                      {project.response}
                    </p>
                    
                    <Link to={`/projects/${project.id}`} className="inline-flex items-center gap-2 px-5 py-2 md:px-6 md:py-2.5 border border-white/30 rounded-sm hover:bg-white hover:text-black transition-colors text-xs md:text-sm font-medium uppercase tracking-wider backdrop-blur-sm w-max">
                      View Series <ArrowUpRight className="w-4 h-4" />
                    </Link>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
};
