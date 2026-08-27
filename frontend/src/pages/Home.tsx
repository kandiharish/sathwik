
import { CinematicHero } from '../components/ui/CinematicHero';
import { InteractiveTunnel } from '../components/ui/InteractiveTunnel';
import { CommitmentCards } from '../components/ui/CommitmentCards';
import { IntroductionSection } from '../components/ui/IntroductionSection';
import { AreasOfFocus } from '../components/ui/AreasOfFocus';
import { CurvedGallery } from '../components/ui/CurvedGallery';
import { GalleryStack } from '../components/ui/GalleryStack';
import { EditorialCarousel } from '../components/ui/EditorialCarousel';
import { FounderMessage } from '../components/ui/FounderMessage';
import { PartnerLogos } from '../components/ui/PartnerLogos';

import { Container } from '../components/layout/Container';
import { ButtonLink } from '../components/ui/Button';
import { ImpactCounter } from '../components/ui/ImpactCounter';
import { projects } from '../data/projects';
import { impactStats } from '../data/impact';
import { ArrowRight, Users, HandCoins, CalendarDays } from 'lucide-react';
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
      <section id="impact" className="py-12 lg:py-16 relative bg-[#FAFAF8] overflow-hidden min-h-[100vh] max-h-[900px] flex items-center justify-center">
        {/* Background Image - Perfectly fitted */}
        <div className="absolute inset-0 w-full h-full z-0 flex items-center justify-center">
          <img 
            src="/image%20copy%209.png" 
            alt="Impact Background" 
            className="w-full h-full object-cover object-center opacity-80"
          />
          <div className="absolute inset-0 bg-white/10 mix-blend-overlay" />
        </div>

        <Container className="relative z-10 w-full">
          <div className="text-center mb-16 w-full flex flex-col items-center">
            <h2 className="text-5xl md:text-7xl text-[#d97706]/15 tracking-tight leading-none mb-3" style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}>
              By the Numbers
            </h2>
            <h3 className="text-4xl md:text-5xl lg:text-6xl font-serif font-black text-[#1d1d1f] tracking-tight -mt-6 md:-mt-8">
              Our Collective <span className="text-[#054E38]">Impact</span>
            </h3>
            
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent mx-auto mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {impactStats.slice(0, 4).map((stat, idx) => {
              let Icon;
              if (idx === 0) Icon = <HandCoins className="w-7 h-7 text-[#d97706]" strokeWidth={1.5} />;
              if (idx === 1) Icon = <Users className="w-7 h-7 text-[#054E38]" strokeWidth={1.5} />;
              if (idx === 2) Icon = (
                <svg className="w-7 h-7 text-[#054E38]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/>
                  <circle cx="12" cy="9" r="2.5"/>
                </svg>
              ); 
              if (idx === 3) Icon = <CalendarDays className="w-7 h-7 text-[#d97706]" strokeWidth={1.5} />;
              
              return (
                <ImpactCounter 
                  key={idx} 
                  value={stat.value} 
                  suffix={stat.suffix}
                  label={stat.label} 
                  icon={Icon}
                />
              );
            })}
          </div>
        </Container>
      </section>

      {/* FEATURED INITIATIVES - CONTENT CAROUSEL */}
      <div className="py-24 lg:py-32 bg-white relative overflow-hidden">
        <Container className="relative z-10">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div className="flex flex-col mb-6 md:mb-0">
              <h2 className="text-5xl md:text-7xl text-[#d4c8b8]/40 tracking-tight leading-none mb-3" style={{ fontFamily: '"Brush Script MT", "Great Vibes", cursive' }}>
                Action On The Ground
              </h2>
              <h3 className="text-3xl md:text-4xl lg:text-[42px] font-serif font-black text-[#1d1d1f] tracking-tight -mt-6 md:-mt-8">
                Featured <span className="text-[#054E38]">Initiatives</span>
              </h3>
            </div>
            <ButtonLink to="/programs" variant="ghost" className="hidden md:flex mb-6 text-amber-800 hover:bg-amber-50/50 border border-amber-200/50 transition-colors">
              View All Projects <ArrowRight className="w-4 h-4 ml-2" />
            </ButtonLink>
          </div>
          
          <div className="pb-12">
            <EditorialCarousel projects={projects} />
          </div>
        </Container>
      </div>

      {/* FOUNDER MESSAGE */}
      <FounderMessage />

      {/* CSR PARTNERS */}
      <PartnerLogos />

      {/* FINAL CTA */}
      <JoinUsCTA />
    </div>
  );
};
