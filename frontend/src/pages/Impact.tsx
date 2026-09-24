import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { impactStats } from '../data/impact';
import { ArrowRight, MapPin, Target, Landmark } from 'lucide-react';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const EXPLORE = [
  {
    title: 'Geographic Reach',
    text: "Explore our interactive map to see the communities and states we've reached across India.",
    cta: 'View Impact Map',
    to: '/impact/map',
    icon: MapPin,
  },
  {
    title: 'Strategic Areas',
    text: 'We focus on Healthcare, Water & Sanitation, Education, and Community Development.',
    cta: 'Browse Projects',
    to: '/projects',
    icon: Target,
  },
  {
    title: 'CSR Partners',
    text: 'Our initiatives are supported by major Public Sector Undertakings including GAIL, ONGC, and NTPC.',
    cta: 'Learn More',
    to: '/about',
    icon: Landmark,
  },
];

export const Impact = () => {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero */}
      <section className="page-hero pt-32 pb-10 md:pt-40 md:pb-14">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading
              as="h1"
              eyebrow="A Decade of Delivering Change"
              title={<>Our Impact <em>Dashboard</em></>}
              description="SATHWIK has a proven track record of over a decade implementing CSR projects in association with multiple Public Sector Undertakings."
              alignment="left"
              className="!mb-0"
            />
          </div>
        </Container>
      </section>

      {/* Main stats */}
      <section className="pb-16 md:pb-24" aria-label="Impact figures">
        <Container>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-px bg-line border border-line rounded-2xl overflow-hidden">
            {impactStats.map((stat) => (
              <motion.div key={stat.label} {...fadeUp} className="bg-white p-8 md:p-10 flex flex-col-reverse justify-end">
                <dt>
                  <span className="block mt-3 text-[12px] font-semibold tracking-[0.12em] uppercase text-ink">
                    {stat.label}
                  </span>
                  {stat.description && (
                    <span className="block mt-2 text-[15px] leading-relaxed text-ink-muted">{stat.description}</span>
                  )}
                </dt>
                <dd className="font-serif font-semibold text-primary tracking-tight flex items-baseline flex-wrap">
                  {stat.prefix && <span className="text-3xl md:text-4xl mr-0.5">{stat.prefix}</span>}
                  <span className="text-5xl md:text-6xl">{stat.value}</span>
                  {stat.suffix && <span className="text-2xl md:text-3xl ml-1 text-gold">{stat.suffix}</span>}
                </dd>
              </motion.div>
            ))}
          </dl>
        </Container>
      </section>

      {/* Explore */}
      <section className="section bg-white border-t border-line">
        <Container>
          <SectionHeading
            eyebrow="Go Deeper"
            title={<>Explore Our <em>Work</em></>}
            description="Discover the specific ways we are creating meaningful change across communities in India."
            alignment="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {EXPLORE.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} {...fadeUp} className="group relative card card-hover p-8 md:p-10 flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary mb-6">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif font-semibold text-2xl text-ink mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted mb-8 flex-grow">{item.text}</p>
                  <Link
                    to={item.to}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-primary after:absolute after:inset-0"
                  >
                    {item.cta}
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </Link>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>
    </div>
  );
};
