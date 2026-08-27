import { useState, useMemo, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { galleryImages } from '../data/gallery';
import { X, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('ALL');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['ALL', 'PEOPLE', 'EDUCATION', 'HEALTHCARE', 'WATER', 'NUTRITION', 'COMMUNITY', 'EVENTS'];

  const filteredImages = useMemo(() => {
    if (activeCategory === 'ALL') return galleryImages;
    return galleryImages.filter(img => img.category.toUpperCase() === activeCategory);
  }, [activeCategory]);

  // Handle keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') setLightboxIndex((prev) => prev !== null && prev < filteredImages.length - 1 ? prev + 1 : prev);
      if (e.key === 'ArrowLeft') setLightboxIndex((prev) => prev !== null && prev > 0 ? prev - 1 : prev);
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredImages.length]);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading 
              title="Interactive Gallery" 
              subtitle="A visual journey through our projects, communities, and impact."
              alignment="left"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mt-12">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-5 py-2 rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-[#054E38] text-white shadow-md'
                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </Container>
      </section>

      <Section className="pt-0 pb-32">
        <Container>
          <motion.div layout className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            <AnimatePresence mode="popLayout">
              {filteredImages.map((img, idx) => (
                <motion.div 
                  key={img.url}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4 }}
                  className="break-inside-avoid overflow-hidden rounded-xl group cursor-pointer relative shadow-sm border border-gray-100"
                  onClick={() => setLightboxIndex(idx)}
                >
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex flex-col items-center justify-center p-6 text-center">
                    <span className="text-white font-bold tracking-widest uppercase text-xs border border-white/40 px-5 py-2.5 rounded-full backdrop-blur-md mb-3 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      Expand Image
                    </span>
                    {img.projectSlug && (
                      <span className="text-amber-400 text-xs font-semibold tracking-wider flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-100">
                        Related Project <ArrowRight className="w-3 h-3" />
                      </span>
                    )}
                  </div>
                  <img 
                    src={img.url} 
                    alt={img.caption} 
                    loading="lazy"
                    className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out" 
                  />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </Section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIndex !== null && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-sm"
          >
            {/* Close Button */}
            <button 
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 p-2 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50"
            >
              <X className="w-6 h-6" />
            </button>

            {/* Previous Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (lightboxIndex > 0) setLightboxIndex(lightboxIndex - 1);
              }}
              className={`absolute left-4 md:left-10 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 ${lightboxIndex === 0 ? 'opacity-30 cursor-not-allowed' : ''}`}
              disabled={lightboxIndex === 0}
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Next Button */}
            <button 
              onClick={(e) => {
                e.stopPropagation();
                if (lightboxIndex < filteredImages.length - 1) setLightboxIndex(lightboxIndex + 1);
              }}
              className={`absolute right-4 md:right-10 p-3 text-white/70 hover:text-white bg-white/10 hover:bg-white/20 rounded-full transition-colors z-50 ${lightboxIndex === filteredImages.length - 1 ? 'opacity-30 cursor-not-allowed' : ''}`}
              disabled={lightboxIndex === filteredImages.length - 1}
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Image Container */}
            <div className="relative max-w-5xl w-full max-h-[85vh] px-12 md:px-24 flex flex-col items-center">
              <motion.img 
                key={filteredImages[lightboxIndex].url}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                src={filteredImages[lightboxIndex].url}
                alt={filteredImages[lightboxIndex].caption}
                className="max-h-[70vh] w-auto object-contain rounded-lg shadow-2xl"
              />
              
              {/* Caption & Project Link */}
              <motion.div 
                key={`caption-${lightboxIndex}`}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="mt-6 text-center"
              >
                <div className="inline-block px-3 py-1 bg-white/10 rounded-full text-xs font-bold text-white/80 tracking-widest uppercase mb-3">
                  {filteredImages[lightboxIndex].category}
                </div>
                <p className="text-white text-lg md:text-xl font-medium max-w-2xl mx-auto mb-4">
                  {filteredImages[lightboxIndex].caption}
                </p>
                
                {filteredImages[lightboxIndex].projectSlug && (
                  <Link 
                    to={`/projects/${filteredImages[lightboxIndex].projectSlug}`}
                    onClick={() => setLightboxIndex(null)}
                    className="inline-flex items-center gap-2 text-amber-400 hover:text-amber-300 font-bold tracking-wider uppercase text-sm group"
                  >
                    Explore Project <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                  </Link>
                )}
              </motion.div>
            </div>
            
            {/* Click outside to close */}
            <div className="absolute inset-0 z-0" onClick={() => setLightboxIndex(null)} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
