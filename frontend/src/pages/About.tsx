import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  Users,
  Briefcase,
  MapPin,
  Heart,
  Target,
  Eye,
  Leaf,
  Sprout,
  ShieldCheck,
  Quote,
  Check,
  ArrowRight,
  Compass,
  HandHeart,
} from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { GeographicFootprint } from '../components/ui/GeographicFootprint';
import { projects } from '../data/projects';
import { Img } from '../components/common/Img';

const fadeUp = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

const METRICS = [
  { value: '20,000+', label: 'Lives Transformed', note: 'across rural communities', icon: Users },
  { value: '21+', label: 'CSR Projects', note: 'Successfully implemented', icon: Briefcase },
  { value: '7', label: 'States Reached', note: 'Across India', icon: MapPin },
  { value: '10,000+', label: 'Beneficiaries', note: 'Students, patients, and community members', icon: Heart },
];

const VALUES = [
  {
    title: 'Empowerment',
    desc: 'We believe in equipping individuals with the skills, dignity, and resources they need to transform their own lives.',
    takeaway: 'Skill-building & Self-reliance',
    icon: Leaf,
  },
  {
    title: 'Inclusivity',
    desc: 'We work towards a more equitable society, ensuring no community is left behind.',
    takeaway: 'Equal Opportunities',
    icon: Users,
  },
  {
    title: 'Sustainability',
    desc: 'Our projects are designed to create long-term impact and community ownership.',
    takeaway: 'Lasting Change',
    icon: Sprout,
  },
  {
    title: 'Transparency',
    desc: 'We operate with complete openness and integrity, accountable to every community member and partner.',
    takeaway: 'Uncompromising Accountability',
    icon: ShieldCheck,
  },
];

const MISSION_VISION = [
  {
    heading: 'Our Mission',
    subheading: 'Empowering Rural Communities',
    icon: Target,
    statement:
      'To create equitable opportunities for rural communities through education, healthcare, infrastructure and youth empowerment.',
    body:
      'SRAYI is committed to uplifting rural communities and empowering youth through sustainable, community-driven initiatives. By promoting self-reliance and resilience, SRAYI aligns its work with the ideals of national growth, focusing on poverty reduction, education, healthcare, and economic empowerment.',
    points: [
      'Enhancing access to quality education.',
      'Developing skills for better livelihoods.',
      'Providing essential healthcare services.',
    ],
  },
  {
    heading: 'Our Vision',
    subheading: 'A World of Opportunities for Rural Individuals',
    icon: Eye,
    statement:
      'A self-reliant, healthier and more empowered rural India where every individual can thrive with dignity and opportunity.',
    body:
      'SRAYI envisions self-sustaining communities where individuals, especially youth, thrive with dignity and purpose. Through local talent and leadership, SRAYI aims to create flourishing rural areas with economic, environmental, and social growth, fostering independence and community pride.',
    points: [
      'Empowering individuals through education.',
      'Providing access to healthcare and resources.',
      'Encouraging community involvement and development.',
    ],
  },
];

const ASPIRATIONS = [
  {
    title: 'Welfare and Empowerment',
    description:
      'Our primary aspiration is to enhance the welfare of rural and unemployed youth by providing essential amenities and facilities.',
  },
  {
    title: 'Employment and Skill Development',
    description: 'At Sathwik Rural and Youth Integrated Association, our aspiration is to empower individuals.',
  },
  {
    title: 'Community Organization and Social Development',
    description: 'We strive to foster community-driven initiatives that promote social work and human resource development.',
  },
  {
    title: 'Education and Awareness',
    description:
      'Recognizing the transformative power of education, our aspiration is to break the cycle of poverty by providing access to knowledge and skills.',
  },
  {
    title: 'Disaster Relief & Emergency Response',
    description: 'In times of crisis, our aspiration is to be a reliable source of immediate relief for communities.',
  },
  {
    title: 'Advocacy and Policy Support',
    description: 'We aspire to influence policies that support the education and development of underprivileged communities.',
  },
];

const LEADERSHIP = [
  {
    title: 'Founding Purpose',
    icon: Compass,
    description:
      "SRAYI was founded on a mission to assist the poorest communities and elevate rural youth, inspired by India's vision of self-reliance. With a leadership team committed to service, SRAYI's founders have set a standard of dedication and community empowerment.",
  },
  {
    title: 'Social Impact & Community Reach',
    icon: HandHeart,
    description:
      'SRAYI has impacted numerous lives by addressing challenges in education, healthcare, economic opportunities, and sustainable practices. Its community-centric approach involves residents in all project phases, ensuring solutions that align with local needs and aspirations.',
  },
];

// Existing RO plant photograph from the project archive, reused for the clean-water section.
const waterProject = projects.find((p) => p.slug === 'nellore-waterplant-project');
const waterImage = waterProject?.images?.[0];

export const About = () => {
  return (
    <div className="w-full bg-background text-ink">
      {/* 1. HERO */}
      <section className="page-hero relative w-full pt-32 pb-16 md:pt-40 md:pb-20 bg-primary-deep text-white overflow-hidden">
        <Container className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-7 flex flex-col items-start"
            >
              <span className="eyebrow !text-gold-soft mb-6">About Us</span>
              <h1 className="font-serif font-semibold text-white tracking-tight leading-[1.08] text-4xl sm:text-5xl lg:text-[4rem] mb-8">
                A Stronger <br className="hidden sm:inline" />
                <em className="italic font-medium text-gold-soft">Tomorrow, Together</em>
              </h1>
              <p className="text-base sm:text-lg text-white/75 leading-relaxed max-w-xl">
                Sathwik Rural and Youth Integrated Association (SRAYI) is a non-profit organization working towards sustainable development in rural communities through education, healthcare, and holistic empowerment.
              </p>
            </motion.div>

            <motion.figure
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative aspect-[4/5] sm:aspect-[5/4] lg:aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-primary-dark">
                <Img
                  src="/about/about_hero.webp"
                  alt="Students and community members empowered by SRAYI"
                  width={900}
                  height={1125}
                  fetchPriority="high"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
                <figcaption className="absolute bottom-5 left-6 right-6 font-serif italic text-xl sm:text-2xl text-white">
                  Communities for a Brighter Tomorrow
                </figcaption>
              </div>
            </motion.figure>
          </div>
        </Container>
      </section>

      {/* 2. OUR STORY */}
      <section className="section bg-background">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            <motion.div {...fadeUp} className="lg:col-span-6">
              <SectionHeading
                eyebrow="Our Story"
                title={<>From a Simple Vision <br className="hidden sm:inline" />to a <em>Stronger India</em></>}
                alignment="left"
                className="!mb-8"
              />
              <div className="space-y-6 text-ink-muted text-base sm:text-[17px] leading-relaxed">
                <p>
                  The Sathwik Rural and Youth Integrated Association (SRAYI) was founded in 2015 with a singular vision: to bring sustainable development to the grassroots of India. We recognized that true progress is impossible without addressing the fundamental needs of our rural communities.
                </p>
                <p>
                  Sathwik Rural and Youth Integrated Association was founded with a vision to uplift rural communities and create opportunities for the youth. Our journey began with a small group of passionate volunteers who believed in the potential of every individual. Over the years, we have grown into a dedicated organization with a wide-reaching impact.
                </p>
                <p>
                  What began as a focused effort to address the immediate educational and infrastructural needs of rural schools has grown into a comprehensive organization working across healthcare, water, nutrition, youth development, and community infrastructure.
                </p>
              </div>
            </motion.div>

            <motion.div {...fadeUp} className="lg:col-span-6 relative pb-12 sm:pb-16">
              <div data-reveal="wipe" className="relative aspect-[4/3] sm:aspect-[5/4] rounded-2xl overflow-hidden border border-line bg-sand">
                <Img
                  src="/about/about_story.webp"
                  alt="School development and student support program"
                  width={1000}
                  height={800}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
              </div>

              <blockquote className="relative sm:absolute -mt-10 sm:mt-0 sm:-bottom-2 sm:right-6 z-10 mx-4 sm:mx-0 max-w-md bg-primary text-white p-7 rounded-2xl shadow-[var(--shadow-lift)]">
                <Quote className="w-7 h-7 text-gold-soft/70 mb-3 rotate-180" aria-hidden="true" />
                <p className="font-serif italic text-base sm:text-lg text-white leading-relaxed">
                  "To bring sustainable development to the grassroots of India through holistic rural development, education, and youth empowerment."
                </p>
                <footer className="mt-5 pt-4 border-t border-white/15 flex items-center justify-between">
                  <span className="text-[11px] font-semibold tracking-[0.2em] uppercase text-gold-soft">SRAYI Core Mission</span>
                  <Leaf className="w-4 h-4 text-gold-soft" aria-hidden="true" />
                </footer>
              </blockquote>
            </motion.div>
          </div>
        </Container>
      </section>

      {/* 3. KEY METRICS */}
      <section className="bg-white border-y border-line" aria-label="Key figures">
        <Container>
          <dl className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 divide-line">
            {METRICS.map((metric, idx) => {
              const Icon = metric.icon;
              return (
                <motion.div
                  key={metric.label}
                  {...fadeUp}
                  className={`flex flex-col-reverse items-center text-center py-10 md:py-14 px-6 ${
                    idx > 0 ? 'lg:border-l lg:border-line' : ''
                  } ${idx % 2 === 1 ? 'sm:border-l sm:border-line' : ''} ${idx > 1 ? 'sm:border-t sm:border-line lg:border-t-0' : ''}`}
                >
                  <dt className="mt-2">
                    <span className="block text-base font-semibold text-ink">{metric.label}</span>
                    <span className="block mt-1 text-[13px] text-ink-muted">{metric.note}</span>
                  </dt>
                  <dd className="flex flex-col items-center font-serif font-semibold text-4xl md:text-5xl text-primary tracking-tight">
                    <Icon className="w-5 h-5 text-gold mb-4" aria-hidden="true" />
                    {metric.value}
                  </dd>
                </motion.div>
              );
            })}
          </dl>
        </Container>
      </section>

      {/* 5. OUR APPROACH */}
      <section className="section bg-sand">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-end">
            <div className="lg:col-span-6">
              <SectionHeading
                eyebrow="Our Approach"
                title={<>Transforming Lives Through <em>Sustainable Development</em></>}
                alignment="left"
                className="!mb-0"
              />
            </div>
            <motion.p {...fadeUp} className="lg:col-span-6 lead">
              Our approach is rooted in collaboration and community involvement. We believe in working closely with local stakeholders to identify needs and design sustainable solutions that foster empowerment and growth.
            </motion.p>
          </div>
        </Container>
      </section>

      {/* 6. MISSION & VISION */}
      <section className="section bg-primary-deep text-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
            <div className="lg:col-span-5">
              <SectionHeading
                dark
                eyebrow="What Drives Us"
                title={<>Our Mission, <br /><em>Our Vision</em></>}
                alignment="left"
                className="!mb-10"
              />
              <motion.figure {...fadeUp} className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-white/10 bg-primary-dark lg:sticky lg:top-28">
                <Img
                  src="/about/about_mission.webp"
                  alt="Rural community healthcare and mobile clinic engagement"
                  width={900}
                  height={1125}
                  loading="lazy"
                  decoding="async"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-black/60 to-transparent pointer-events-none" aria-hidden="true" />
                <figcaption className="absolute bottom-5 left-6 right-6 font-serif italic text-xl sm:text-2xl text-white">
                  Real People, Real Change
                </figcaption>
              </motion.figure>
            </div>

            <div className="lg:col-span-7 divide-y divide-white/10">
              {MISSION_VISION.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.article key={item.heading} {...fadeUp} className="py-10 first:pt-0 last:pb-0">
                    <div className="flex items-center gap-4 mb-5">
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-soft">
                        <Icon className="w-5 h-5" aria-hidden="true" />
                      </span>
                      <div>
                        <h3 className="font-serif font-semibold text-2xl md:text-3xl text-white">{item.heading}</h3>
                        <p className="text-[13px] font-semibold uppercase tracking-[0.12em] text-gold-soft mt-1">{item.subheading}</p>
                      </div>
                    </div>
                    <p className="font-serif italic text-lg md:text-xl text-white leading-relaxed">{item.statement}</p>
                    <p className="mt-4 text-base leading-relaxed text-white/75">{item.body}</p>
                    <ul className="mt-6 space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3 text-[15px] text-white/90">
                          <Check className="w-4 h-4 mt-1 shrink-0 text-gold-soft" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.article>
                );
              })}
            </div>
          </div>
        </Container>
      </section>

      {/* 7. CORE VALUES */}
      <section className="section bg-background">
        <Container>
          <SectionHeading
            eyebrow="What We Stand For"
            title={<>Our Core <em>Values</em></>}
            description="These principles guide every initiative, every partnership, and every community we serve."
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {VALUES.map((value) => {
              const Icon = value.icon;
              return (
                <motion.article key={value.title} {...fadeUp} className="card card-hover p-7 flex flex-col">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary mb-6">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif font-semibold text-xl text-ink mb-3">{value.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted flex-1">{value.desc}</p>
                  <div className="mt-8 pt-4 border-t border-line flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-gold shrink-0" aria-hidden="true" />
                    <span className="text-[13px] font-medium text-ink-muted">{value.takeaway}</span>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </Container>
      </section>

      {/* 8. ASPIRATIONS & DELIVERABLES */}
      <section className="section bg-sand">
        <Container>
          <SectionHeading
            eyebrow="Goals & Objectives"
            title={<>Aspirations &amp; <em>Deliverables</em></>}
            description="At Sathwik Rural and Youth Integrated Association, our aspirations and deliverables guide our mission to uplift rural and unemployed youth. We are committed to creating a sustainable impact through various initiatives, ensuring the well-being and empowerment of the communities we serve."
          />
          <ol className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ASPIRATIONS.map((item, idx) => (
              <motion.li key={item.title} {...fadeUp} className="card card-hover p-7 md:p-8">
                <span className="font-serif text-3xl font-semibold text-gold/80" aria-hidden="true">
                  {String(idx + 1).padStart(2, '0')}
                </span>
                <h3 className="mt-4 font-serif font-semibold text-xl text-ink leading-snug">{item.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{item.description}</p>
              </motion.li>
            ))}
          </ol>
        </Container>
      </section>

      {/* 9. SAFE DRINKING WATER FOR ALL */}
      <section className="section bg-white">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            {waterImage && (
              <motion.div {...fadeUp} className="lg:col-span-5">
                <div data-reveal="wipe" className="relative aspect-[4/5] rounded-2xl overflow-hidden border border-line bg-sand">
                  <Img
                    src={waterImage}
                    alt="RO water purification plant installed by SRAYI"
                    width={800}
                    height={1000}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            )}
            <div className={waterImage ? 'lg:col-span-7' : 'lg:col-span-12 max-w-3xl'}>
              <SectionHeading
                eyebrow="Safe Drinking Water for All"
                title={<>Empowering Communities Through <em>Clean Water Solutions</em></>}
                alignment="left"
                className="!mb-8"
              />
              <motion.div {...fadeUp} className="space-y-5 text-base sm:text-[17px] leading-relaxed text-ink-muted">
                <p>
                  Access to clean drinking water is a fundamental right, yet many rural communities struggle with water contamination and scarcity. As part of our mission to improve public health, SRAYI has actively installed RO water purification plants in government schools and healthcare centers.
                </p>
                <p>
                  These initiatives ensure that students and patients have access to safe, hygienic drinking water, reducing waterborne diseases and promoting overall well-being. Our goal is to continue expanding this effort to reach more underserved regions and build a healthier future for all.
                </p>
              </motion.div>
              <Link
                to="/programs/healthcare-and-wellness"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-primary link-underline"
              >
                Explore our Healthcare &amp; Wellness program <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Link>
            </div>
          </div>
        </Container>
      </section>

      {/* 10. GEOGRAPHIC FOOTPRINT */}
      <GeographicFootprint />

      {/* 11. LEADERSHIP AND FOUNDERS */}
      <section className="section bg-sand">
        <Container>
          <SectionHeading eyebrow="Our Leadership" title={<>Leadership and <em>Founders</em></>} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto mb-12 md:mb-16">
            {LEADERSHIP.map((item) => {
              const Icon = item.icon;
              return (
                <motion.article key={item.title} {...fadeUp} className="card card-hover p-8">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-soft text-gold mb-5">
                    <Icon className="w-5 h-5" aria-hidden="true" />
                  </span>
                  <h3 className="font-serif font-semibold text-xl text-ink mb-3">{item.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{item.description}</p>
                </motion.article>
              );
            })}
          </div>

          <motion.div {...fadeUp} className="max-w-5xl mx-auto card p-8 sm:p-12 md:p-14">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-center">
              <div className="md:col-span-4">
                <div data-reveal="wipe" className="relative w-full max-w-[300px] aspect-[3/4] rounded-2xl overflow-hidden border border-line bg-sand">
                  <Img
                    src="/about/about_founder.webp"
                    alt="CH. Ramesh - Founder & President"
                    width={600}
                    height={800}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 w-full h-full object-cover object-top"
                  />
                </div>
              </div>

              <div className="md:col-span-8">
                <span className="eyebrow mb-4">Message from the Founder</span>
                <h3 className="font-serif font-semibold text-3xl sm:text-4xl text-ink tracking-tight mb-6">
                  A Personal <em className="italic font-medium text-primary">Commitment</em>
                </h3>
                <blockquote className="font-serif italic text-lg sm:text-xl leading-relaxed text-ink">
                  "At Sathwik, we believe that real change begins at the grassroots. Our journey has always been about people, their aspirations, their challenges, and their incredible potential. We remain committed to working alongside communities to build a healthier, more educated, and more empowered rural India."
                </blockquote>
                <div className="mt-7 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                  <div>
                    <p className="font-serif font-semibold text-xl text-ink">CH. Ramesh</p>
                    <p className="text-[12px] font-semibold tracking-[0.14em] text-ink-muted uppercase mt-1">
                      Founder & President, SRAYI Association
                    </p>
                  </div>
                  <span className="font-serif italic text-base sm:text-lg text-ink-muted">
                    Stronger Communities, Brighter Futures
                  </span>
                </div>
              </div>
            </div>
          </motion.div>
        </Container>
      </section>
    </div>
  );
};
