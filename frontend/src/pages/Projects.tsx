import { motion } from 'framer-motion';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { projectsList } from '../data/projectsList';

export const Projects = () => {
  return (
    <div className="pt-32 pb-24 bg-[#FAFAF8] min-h-screen">
      <Container>
        <div className="mb-16">
          <SectionHeading 
            title="Our Projects" 
            subtitle="Making an Impact on the Ground" 
            alignment="center"
          />
        </div>
        
        <style>{`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            animation: marquee linear infinite;
          }
          .animate-marquee:hover {
            animation-play-state: paused;
          }
        `}</style>
        
        <div className="space-y-16 md:space-y-20 overflow-hidden">
          {projectsList.map((project) => {
            // Duplicate images to create a seamless loop
            // If very few images, duplicate multiple times to ensure it fills the screen
            const repeatCount = project.images.length < 4 ? 4 : 2;
            const marqueeImages = Array(repeatCount).fill(project.images).flat();
            
            return (
              <motion.div 
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                className="bg-white rounded-[1.5rem] py-6 md:py-10 shadow-[0_2px_15px_rgb(0,0,0,0.03)] border border-black/[0.02]"
              >
                <div className="px-6 md:px-10 mb-6">
                  <h3 className="text-xl md:text-2xl font-serif font-bold text-[#1d1d1f] capitalize">
                    {project.name.replace(/-/g, ' ')}
                  </h3>
                </div>
                
                {/* Continuous Slow Marquee */}
                <div className="w-full overflow-hidden relative">
                  {/* Fading edges for the marquee */}
                  <div className="absolute left-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
                  <div className="absolute right-0 top-0 bottom-0 w-8 md:w-20 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
                  
                  <div 
                    className="flex gap-3 md:gap-5 animate-marquee w-max px-4"
                    style={{ animationDuration: \`\${project.images.length * 15}s\` }} 
                  >
                    {marqueeImages.map((img, i) => (
                      <div 
                        key={i}
                        className="flex-none w-[180px] sm:w-[220px] md:w-[260px] aspect-[4/3] rounded-xl overflow-hidden relative group bg-slate-100/50"
                      >
                        <img 
                          src={encodeURI(img)}
                          alt={`${project.name} image ${i + 1}`} 
                          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                          loading="lazy" 
                        />
                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors duration-300" />
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};
