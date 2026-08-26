import { motion } from 'framer-motion';
import { CinematicHero } from '../components/ui/CinematicHero';
import { InteractiveTunnel } from '../components/ui/InteractiveTunnel';
import { CommitmentCards } from '../components/ui/CommitmentCards';
import { IntroductionSection } from '../components/ui/IntroductionSection';
import { AreasOfFocus } from '../components/ui/AreasOfFocus';
import { CurvedGallery } from '../components/ui/CurvedGallery';
import { GalleryStack } from '../components/ui/GalleryStack';
import { EditorialCarousel } from '../components/ui/EditorialCarousel';

import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/Button';
import { ImpactCounter } from '../components/ui/ImpactCounter';
import { programs } from '../data/programs';
import { projects } from '../data/projects';
import { impactStats } from '../data/impact';
import { ArrowRight, Droplets, BookOpen, Users } from 'lucide-react';
import { Link } from 'react-router-dom';
import { JoinUsCTA } from '../components/ui/JoinUsCTA';
export const Home = () => {
  return (
    <div>
      {/* HERO SECTION */}
      <CinematicHero />

      {/* 3D INTERACTIVE TUNNEL (About Us) */}
      <InteractiveTunnel />

      {/* COMMITMENT CARDS */}
      <CommitmentCards />

      {/* INTRODUCTION SECTION */}
      <IntroductionSection />
      <AreasOfFocus />
      <GalleryStack />
      <CurvedGallery />
      {/* IMPACT DASHBOARD - REDESIGNED */}
      <section className="py-32 relative bg-white overflow-hidden border-y border-slate-100">
        {/* Subtle light background texture/glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-amber-50/60 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-50/60 rounded-full blur-3xl mix-blend-multiply pointer-events-none" />
        </div>

        <Container className="relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] uppercase text-amber-600 mb-4">
              By the Numbers
            </h2>
            <p className="text-5xl md:text-6xl font-serif font-medium text-slate-900 mb-6">
              Our Collective Impact
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.slice(0, 4).map((stat, idx) => (
              <ImpactCounter 
                key={idx} 
                value={stat.value} 
                suffix={stat.suffix}
                label={stat.label} 
              />
            ))}
          </div>
        </Container>
      </section>

      {/* AREAS OF WORK - CLOTHESLINE THEME */}
      <div className="py-32 bg-[#FAFAF8] relative overflow-hidden">
        <Container className="relative z-10">
          
          <SectionHeading 
            title="Areas of Focus" 
            subtitle="How We Create Change" 
            alignment="left"
            dark={false}
          />
          
          {/* Areas of Focus - Hanging Cards */}
          <div className="relative mt-24 mb-32 pt-12">
            {/* The Rope - perfectly aligned to the top of this container */}
            <div className="absolute top-0 left-0 w-full h-[1px] bg-[#d2c4b4] shadow-sm hidden lg:block z-0" />
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
              {programs.map((program, idx) => (
                <motion.div 
                  key={program.id}
                  className="relative -mt-12 pt-12 flex flex-col items-center cursor-pointer group z-10 h-full"
                  style={{ transformOrigin: "top center" }}
                  // Continuous breeze animation
                  animate={{ rotate: idx % 2 === 0 ? [-1.5, 1.5, -1.5] : [1.5, -1.5, 1.5] }}
                  transition={{ repeat: Infinity, duration: 6 + idx, ease: "easeInOut" }}
                >
                  {/* Strings from the rope (top-0) to the card (top-12) */}
                  <div className="absolute top-0 left-1/3 w-[1px] h-12 bg-[#a39485] hidden lg:block" />
                  <div className="absolute top-0 right-1/3 w-[1px] h-12 bg-[#a39485] hidden lg:block" />
                  
                  {/* Clips perfectly biting the rope (-translate-y-1/2 centers it on the top-0 edge) */}
                  <div className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 w-2 h-4 bg-[#7a6452] shadow-sm hidden lg:block rounded-[2px] z-20" />
                  <div className="absolute top-0 right-1/3 translate-x-1/2 -translate-y-1/2 w-2 h-4 bg-[#7a6452] shadow-sm hidden lg:block rounded-[2px] z-20" />

                  {/* Premium Apple Style Minimal Card - Smaller Size */}
                  <div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-6 w-[95%] max-w-[260px] mx-auto h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1">
                    <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-amber-500 to-amber-600 text-white flex items-center justify-center mb-5 shadow-inner">
                      {program.title.includes('Health') ? <Droplets className="w-5 h-5" /> : program.title.includes('Empowerment') ? <Users className="w-5 h-5" /> : <BookOpen className="w-5 h-5" />}
                    </div>
                    <h3 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f] mb-2">{program.title}</h3>
                    <p className="text-[#86868b] mb-6 flex-grow leading-relaxed text-[13px] font-medium">
                      {program.overview}
                    </p>
                    <Link to={`/programs/${program.slug}`} className="inline-flex items-center gap-1.5 font-medium text-[#0066cc] text-[13px] hover:underline transition-colors mt-auto">
                      Learn more <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </motion.div>
              ))}

              {/* 4th Card for 4-column layout */}
              <motion.div 
                className="relative -mt-12 pt-12 flex flex-col items-center cursor-pointer group z-10 h-full"
                style={{ transformOrigin: "top center" }}
                animate={{ rotate: [-2, 2, -2] }}
                transition={{ repeat: Infinity, duration: 7.5, ease: "easeInOut" }}
              >
                <div className="absolute top-0 left-1/3 w-[1px] h-12 bg-[#a39485] hidden lg:block" />
                <div className="absolute top-0 right-1/3 w-[1px] h-12 bg-[#a39485] hidden lg:block" />
                <div className="absolute top-0 left-1/3 -translate-x-1/2 -translate-y-1/2 w-2 h-4 bg-[#7a6452] shadow-sm hidden lg:block rounded-[2px] z-20" />
                <div className="absolute top-0 right-1/3 translate-x-1/2 -translate-y-1/2 w-2 h-4 bg-[#7a6452] shadow-sm hidden lg:block rounded-[2px] z-20" />

                <div className="bg-white/90 backdrop-blur-xl rounded-[24px] p-6 w-[95%] max-w-[260px] mx-auto h-full flex flex-col shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-black/[0.04] transition-all duration-500 group-hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] group-hover:-translate-y-1">
                  <div className="w-10 h-10 rounded-[14px] bg-gradient-to-br from-emerald-500 to-emerald-600 text-white flex items-center justify-center mb-5 shadow-inner">
                    <Droplets className="w-5 h-5" />
                  </div>
                  <h3 className="text-[17px] font-semibold tracking-tight text-[#1d1d1f] mb-2">Community Dev</h3>
                  <p className="text-[#86868b] mb-6 flex-grow leading-relaxed text-[13px] font-medium">
                    Building robust community infrastructure and fostering sustainable livelihood practices across villages.
                  </p>
                  <Link to={`/programs`} className="inline-flex items-center gap-1.5 font-medium text-[#0066cc] text-[13px] hover:underline transition-colors mt-auto">
                    Learn more <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* FEATURED INITIATIVES - CONTENT CAROUSEL */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 pt-16 border-t border-[#eae5dd]">
            <SectionHeading 
              title="Featured Initiatives" 
              subtitle="Action On The Ground" 
              alignment="left"
              dark={false}
            />
            <ButtonLink to="/programs" variant="ghost" className="hidden md:flex mb-6 text-amber-800 hover:bg-amber-50/50 border border-amber-200/50 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </ButtonLink>
          </div>
          
          <div className="pb-24">
            <EditorialCarousel projects={projects} />
          </div>
        </Container>
      </div>

      {/* FINAL CTA */}
      <JoinUsCTA />
    </div>
  );
};
