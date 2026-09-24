import { lazy, Suspense } from 'react';
import { CinematicHero } from '../components/ui/CinematicHero';

// Lazy load below-the-fold sections
const InteractiveTunnel = lazy(() => import('../components/ui/InteractiveTunnel').then(m => ({ default: m.InteractiveTunnel })));
const WhoWeAre = lazy(() => import('../components/ui/WhoWeAre').then(m => ({ default: m.WhoWeAre })));
const CommitmentStrategy = lazy(() => import('../components/ui/CommitmentStrategy').then(m => ({ default: m.CommitmentStrategy })));
const IntroductionSection = lazy(() => import('../components/ui/IntroductionSection').then(m => ({ default: m.IntroductionSection })));
const AreasOfFocus = lazy(() => import('../components/ui/AreasOfFocus').then(m => ({ default: m.AreasOfFocus })));
const CurvedGallery = lazy(() => import('../components/ui/CurvedGallery').then(m => ({ default: m.CurvedGallery })));
const GalleryStack = lazy(() => import('../components/ui/GalleryStack').then(m => ({ default: m.GalleryStack })));
const EditorialCarousel = lazy(() => import('../components/ui/EditorialCarousel').then(m => ({ default: m.EditorialCarousel })));
const FounderMessage = lazy(() => import('../components/ui/FounderMessage').then(m => ({ default: m.FounderMessage })));
const VoicesSection = lazy(() => import('../components/ui/VoicesSection').then(m => ({ default: m.VoicesSection })));
const PartnerLogos = lazy(() => import('../components/ui/PartnerLogos').then(m => ({ default: m.PartnerLogos })));

import { Container } from '../components/layout/Container';
import { ButtonLink } from '../components/ui/Button';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ImpactCounter } from '../components/ui/ImpactCounter';
import { projects } from '../data/projects';
import { impactStats } from '../data/impact';
import { ArrowRight, Users, HandCoins, CalendarDays, MapPin } from 'lucide-react';
import { JoinUsCTA } from '../components/ui/JoinUsCTA';
import { Img } from '../components/common/Img';

/** Neutral placeholder that reserves space while a lazy section loads (no dark flash). */
const SectionFallback = ({ minH = 'min-h-[600px]', bg = 'bg-background' }: { minH?: string; bg?: string }) => (
  <div className={`${minH} ${bg}`} aria-hidden="true" />
);

const impactIcons = [
  <HandCoins key="coins" className="h-5 w-5" strokeWidth={1.5} />,
  <Users key="users" className="h-5 w-5" strokeWidth={1.5} />,
  <MapPin key="map" className="h-5 w-5" strokeWidth={1.5} />,
  <CalendarDays key="cal" className="h-5 w-5" strokeWidth={1.5} />,
];

export const Home = () => {
  return (
    <div>
      {/* HERO */}
      <CinematicHero />

      {/* WHO WE ARE */}
      <Suspense fallback={<SectionFallback minH="min-h-[700px]" />}>
        <WhoWeAre />
      </Suspense>

      {/* IMPACT, BY THE NUMBERS */}
      <section id="impact" className="section relative overflow-hidden bg-primary-deep text-white">
        <Img
          src="/image%20copy%209.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.12]"
        />
        <Container className="relative">
          <SectionHeading eyebrow="By the Numbers" title={<>Our Collective <em>Impact</em></>} dark />

          <div className="mx-auto grid max-w-6xl grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y divide-white/10 sm:divide-y-0 lg:divide-x">
            {impactStats.slice(0, 4).map((stat, idx) => (
              <ImpactCounter
                key={stat.label}
                value={stat.value}
                prefix={stat.prefix}
                suffix={stat.suffix}
                label={stat.label}
                icon={impactIcons[idx]}
                dark
              />
            ))}
          </div>
        </Container>
      </section>

      {/* INTRODUCTION */}
      <Suspense fallback={<SectionFallback minH="min-h-[600px]" />}>
        <IntroductionSection />
      </Suspense>

      {/* CORE FOCUS AREAS */}
      <Suspense fallback={<SectionFallback minH="min-h-[700px]" />}>
        <InteractiveTunnel />
      </Suspense>

      {/* OUR APPROACH: COMMITMENT + STRATEGY */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[700px]" />}>
          <CommitmentStrategy />
        </Suspense>
      </div>

      {/* KEY AREAS OF FOCUS */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[800px]" bg="bg-sand" />}>
          <AreasOfFocus />
        </Suspense>
      </div>

      {/* FEATURED INITIATIVES */}
      <section className="section bg-white">
        <Container>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between">
            <SectionHeading eyebrow="Action On The Ground" title={<>Featured <em>Initiatives</em></>} alignment="left" />
            <ButtonLink to="/projects" variant="outline" className="mb-12 md:mb-16 w-max">
              View All Projects <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>

          <Suspense fallback={<SectionFallback minH="min-h-[560px]" bg="bg-white" />}>
            <EditorialCarousel projects={projects} />
          </Suspense>
        </Container>
      </section>

      {/* VOICES FROM THE GROUND */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[760px]" bg="bg-sand" />}>
          <VoicesSection />
        </Suspense>
      </div>

      {/* FOUNDER MESSAGE */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[700px]" bg="bg-sand" />}>
          <FounderMessage />
        </Suspense>
      </div>

      {/* FIELD ACTIVITIES + GALLERY */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[700px]" />}>
          <GalleryStack />
        </Suspense>
      </div>
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[640px]" bg="bg-white" />}>
          <CurvedGallery />
        </Suspense>
      </div>

      {/* CSR PARTNERS */}
      <div className="cv-auto">
        <Suspense fallback={<SectionFallback minH="min-h-[360px]" />}>
          <PartnerLogos />
        </Suspense>
      </div>

      {/* FINAL CTA */}
      <div className="cv-auto">
        <JoinUsCTA />
      </div>
    </div>
  );
};
