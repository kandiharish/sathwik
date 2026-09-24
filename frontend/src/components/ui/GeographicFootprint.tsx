import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { MapPin, Droplets, HeartPulse, GraduationCap, Building2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Img } from '../common/Img';

interface ProjectHotspot {
  id: string;
  name: string;
  state: string;
  sector: 'water' | 'healthcare' | 'education' | 'infrastructure';
  sectorLabel: string;
  outlay: string;
  impact: string;
  description: string;
  // Percentage coordinates relative to the map container
  x: number;
  y: number;
  icon: typeof MapPin;
}

const HOTSPOTS: ProjectHotspot[] = [
  {
    id: 'nandhyala',
    name: 'Nandhyala District',
    state: 'Andhra Pradesh',
    sector: 'infrastructure',
    sectorLabel: 'Integrated Development',
    outlay: '₹3.00 Crore',
    impact: '15,000+ Village Residents',
    description: 'Flagship multi-sectoral initiative featuring community RO drinking water plants, solar installations, and primary healthcare infrastructure.',
    x: 46.5,
    y: 71.5,
    icon: Building2
  },
  {
    id: 'hyderabad',
    name: 'Hyderabad & Ghatkesar',
    state: 'Telangana',
    sector: 'healthcare',
    sectorLabel: 'Hospital Equipment',
    outlay: '₹1.00 Crore',
    impact: '10,000+ Patients Monthly',
    description: 'Equipped government hospitals with critical care monitors, patient stretchers, phototherapy units, and maternity diagnostic devices.',
    x: 45.2,
    y: 63.8,
    icon: HeartPulse
  },
  {
    id: 'nellore',
    name: 'Nellore Region',
    state: 'Andhra Pradesh',
    sector: 'water',
    sectorLabel: 'RO Drinking Water Plant',
    outlay: '₹1.00 Crore',
    impact: '8,500+ Daily Beneficiaries',
    description: 'High-capacity RO purification plant providing free, tested potable water to government school students and surrounding rural families.',
    x: 48.8,
    y: 76.2,
    icon: Droplets
  },
  {
    id: 'jangaon',
    name: 'Jangaon',
    state: 'Telangana',
    sector: 'water',
    sectorLabel: 'Community RO Facility',
    outlay: '₹75 Lakhs',
    impact: '4,000+ Children & Families',
    description: 'State-of-the-art multi-stage water filtration and cooling plant deployed in underserved communities to eliminate waterborne fluorosis.',
    x: 47.0,
    y: 61.5,
    icon: Droplets
  },
  {
    id: 'ranchi',
    name: 'Ranchi District',
    state: 'Jharkhand',
    sector: 'healthcare',
    sectorLabel: 'Maternal Nutrition',
    outlay: '₹50 Lakhs',
    impact: '3,200+ Mothers & Infants',
    description: 'Distribution of Poshan healthcare and micro-nutrient kits to pregnant women and lactating mothers, with medical checkup camps.',
    x: 55.6,
    y: 51.5,
    icon: HeartPulse
  },
  {
    id: 'bihar',
    name: 'Rural Bihar Clusters',
    state: 'Bihar',
    sector: 'water',
    sectorLabel: 'School RO Water Plants',
    outlay: '₹50 Lakhs',
    impact: '5,000+ Students Daily',
    description: 'Clean drinking water plants established across rural government schools to secure student health and improve daily attendance.',
    x: 54.0,
    y: 44.5,
    icon: Droplets
  },
  {
    id: 'mamidikudhuru',
    name: 'Mamidikudhuru',
    state: 'Andhra Pradesh',
    sector: 'education',
    sectorLabel: 'Skill & Youth Center',
    outlay: '₹1.00 Crore',
    impact: '800+ Youth Trained',
    description: 'Dedicated vocational training complex empowering rural youths with market-aligned job skills, digital literacy, and entrepreneurship tools.',
    x: 50.8,
    y: 68.0,
    icon: GraduationCap
  },
  {
    id: 'up',
    name: 'Uttar Pradesh District',
    state: 'Uttar Pradesh',
    sector: 'healthcare',
    sectorLabel: 'Medical Facilities',
    outlay: '₹1.00 Crore',
    impact: '7,000+ Rural Patients',
    description: 'Comprehensive medical equipment and hospital upgrades delivered to rural primary health centers to modernize patient diagnosis.',
    x: 48.5,
    y: 39.5,
    icon: HeartPulse
  }
];

const SECTORS = [
  { key: 'all', label: 'All Footprint' },
  { key: 'water', label: 'Clean Water' },
  { key: 'healthcare', label: 'Healthcare' },
  { key: 'education', label: 'Education & Skills' },
  { key: 'infrastructure', label: 'Infrastructure' }
] as const;

export const GeographicFootprint = () => {
  const [selectedId, setSelectedId] = useState<string>('nandhyala');
  const [activeSector, setActiveSector] = useState<string>('all');

  const filteredHotspots = activeSector === 'all'
    ? HOTSPOTS
    : HOTSPOTS.filter(h => h.sector === activeSector);

  const activeHotspot = HOTSPOTS.find(h => h.id === selectedId) || HOTSPOTS[0];
  const ActiveIcon = activeHotspot.icon;

  return (
    <section className="section bg-background">
      <Container>
        <SectionHeading
          eyebrow="National Geographic Presence"
          title={<>Ground Realities Across <em>India</em></>}
          description="From drought-affected rural belts to remote healthcare centers, explore our verified CSR footprint delivering clean water, healthcare, and educational infrastructure."
          className="!mb-8"
        />

        {/* Sector filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12 md:mb-16" role="group" aria-label="Filter by sector">
          {SECTORS.map(s => {
            const isActive = activeSector === s.key;
            return (
              <button
                key={s.key}
                type="button"
                onClick={() => setActiveSector(s.key)}
                aria-pressed={isActive}
                className={`px-4 py-2 rounded-full text-[13px] font-medium transition-colors duration-300 border ${
                  isActive
                    ? 'bg-primary border-primary text-white'
                    : 'bg-white border-line text-ink hover:border-primary hover:text-primary'
                }`}
              >
                {s.label}
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Map */}
          <div className="lg:col-span-7 relative card p-4 sm:p-6 overflow-hidden">
            <div className="absolute top-6 left-6 z-20 hidden sm:flex flex-col gap-0.5 bg-white px-4 py-2.5 rounded-xl border border-line">
              <span className="text-[11px] uppercase font-semibold tracking-[0.12em] text-gold">Verified Deployment</span>
              <span className="text-sm font-semibold text-ink">5+ States &bull; 10+ Flagship Clusters</span>
            </div>

            <div className="relative w-full aspect-[16/10] sm:aspect-[16/9] overflow-hidden rounded-xl bg-sand/60">
              <Img
                src="/india_map_footprint.webp"
                alt="Map of India highlighting SRAYI project footprint"
                width={1600}
                height={900}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 w-full h-full object-contain object-center select-none pointer-events-none"
              />

              {filteredHotspots.map((spot) => {
                const isSelected = spot.id === selectedId;
                return (
                  <button
                    key={spot.id}
                    type="button"
                    onClick={() => setSelectedId(spot.id)}
                    onMouseEnter={() => setSelectedId(spot.id)}
                    aria-label={`View ${spot.name}`}
                    aria-pressed={isSelected}
                    style={{ left: `${spot.x}%`, top: `${spot.y}%` }}
                    className="absolute -translate-x-1/2 -translate-y-1/2 z-30 group cursor-pointer"
                  >
                    {isSelected && (
                      <span className="absolute -inset-2 rounded-full border border-primary/40 bg-primary/10 pointer-events-none" aria-hidden="true" />
                    )}
                    <span
                      className={`relative flex w-6 h-6 sm:w-7 sm:h-7 rounded-full items-center justify-center border-2 transition-transform duration-300 shadow-sm ${
                        isSelected
                          ? 'bg-primary border-white text-white scale-110'
                          : 'bg-white border-primary text-primary group-hover:scale-110'
                      }`}
                    >
                      <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
                    </span>
                    <span
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2.5 py-1 rounded-md text-[11px] font-semibold whitespace-nowrap shadow-sm transition-opacity duration-200 pointer-events-none ${
                        isSelected
                          ? 'bg-primary-deep text-white opacity-100'
                          : 'bg-white text-ink border border-line opacity-0 group-hover:opacity-100'
                      }`}
                    >
                      {spot.name}
                    </span>
                  </button>
                );
              })}
            </div>

            <p className="mt-4 text-center text-[12px] text-ink-muted">
              Click or hover over any glowing pin on the map to inspect project investments and on-ground impact.
            </p>
          </div>

          {/* Spotlight card */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeHotspot.id}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="card p-6 sm:p-8"
                aria-live="polite"
              >
                <div className="flex items-center justify-between gap-3 mb-5">
                  <span className="inline-flex items-center gap-2 text-[11px] uppercase font-semibold tracking-[0.12em] text-primary bg-primary-soft px-3 py-1 rounded-full">
                    <ActiveIcon className="w-3.5 h-3.5" aria-hidden="true" />
                    {activeHotspot.sectorLabel}
                  </span>
                  <span className="text-[13px] font-semibold text-ink bg-gold-soft px-3 py-1 rounded-full">
                    {activeHotspot.outlay}
                  </span>
                </div>

                <h3 className="font-serif font-semibold text-2xl sm:text-3xl text-ink tracking-tight">
                  {activeHotspot.name}
                </h3>
                <p className="mt-1 mb-4 text-[12px] font-semibold uppercase tracking-[0.14em] text-ink-muted">
                  {activeHotspot.state}
                </p>

                <p className="text-[15px] leading-relaxed text-ink-muted mb-6">
                  {activeHotspot.description}
                </p>

                <dl className="grid grid-cols-2 gap-px bg-line border border-line rounded-xl overflow-hidden mb-6">
                  <div className="bg-background p-4">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-muted font-semibold mb-1">Investment</dt>
                    <dd className="font-serif font-semibold text-lg text-ink">{activeHotspot.outlay}</dd>
                  </div>
                  <div className="bg-background p-4">
                    <dt className="text-[11px] uppercase tracking-[0.14em] text-ink-muted font-semibold mb-1">Direct Impact</dt>
                    <dd className="font-serif font-semibold text-lg text-primary">{activeHotspot.impact}</dd>
                  </div>
                </dl>

                <Link to="/projects" className="btn btn-primary w-full">
                  Explore Project Dossier
                  <ArrowRight className="w-4 h-4" aria-hidden="true" />
                </Link>
              </motion.div>
            </AnimatePresence>

            {/* Quick location list */}
            <div className="flex flex-wrap gap-1.5 mt-5 justify-center lg:justify-start" role="group" aria-label="Project locations">
              {HOTSPOTS.map((h) => {
                const isActive = selectedId === h.id;
                return (
                  <button
                    key={h.id}
                    type="button"
                    onClick={() => setSelectedId(h.id)}
                    aria-pressed={isActive}
                    className={`text-[12px] px-3 py-1.5 rounded-full border transition-colors ${
                      isActive
                        ? 'bg-primary-deep border-primary-deep text-white font-semibold'
                        : 'bg-white border-line text-ink-muted hover:text-primary hover:border-primary'
                    }`}
                  >
                    {h.name}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
