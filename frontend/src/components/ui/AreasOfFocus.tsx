import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Users, BookOpen, HeartPulse, Leaf, ArrowRight } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Img } from '../common/Img';
import { tones, type Tone } from '../../lib/tones';

const areas = [
  {
    num: '01',
    title: 'Empowerment',
    to: '/programs/youth-and-women-empowerment',
    desc: 'SRAYI Association provides skill development, vocational training, and employment opportunities, helping youth become economically self-sufficient and community leaders.',
    tone: 'green' as Tone,
    icon: Users,
    image: '/real-focus/empowerment_real.webp',
  },
  {
    num: '02',
    title: 'Education and Literacy',
    to: '/programs/education-and-infrastructure',
    desc: 'By establishing learning centers and literacy programs, SRAYI Association ensures access to quality education, focusing on academic and life skills to empower individuals in making informed life choices.',
    tone: 'indigo' as Tone,
    icon: BookOpen,
    image: '/real-focus/education_real.webp',
  },
  {
    num: '03',
    title: 'Healthcare & Wellness',
    to: '/programs/healthcare-and-wellness',
    desc: 'SRAYI Association promotes preventive healthcare, nutrition, and sanitation awareness through health camps and partnerships with healthcare professionals, improving community well-being.',
    tone: 'red' as Tone,
    icon: HeartPulse,
    image: '/real-focus/healthcare_real.webp',
  },
  {
    num: '04',
    title: 'Environmental Sustainability',
    to: '/programs/environmental-sustainability',
    desc: 'Through initiatives in tree planting, waste management, and clean energy adoption, SRAYI Association encourages eco-friendly practices to preserve natural resources and promote sustainable community growth.',
    tone: 'teal' as Tone,
    icon: Leaf,
    image: '/real-focus/environment_real.webp',
  },
];

export const AreasOfFocus = () => {
  return (
    <section className="section relative overflow-hidden bg-sand">
      {/* Decorative background photo, very low opacity */}
      <Img
        src="/image%20copy%207.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-cover object-center opacity-[0.12]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Key Areas of Focus"
          title={<>Promoting Rural <em>Growth &amp; Development</em></>}
          description="Sathwik Rural and Youth Integrated Association (SRAYI) works across key sectors to build stronger, self-reliant rural communities."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-7">
          {areas.map((area, i) => {
            const Icon = area.icon;
            const tone = tones[area.tone];
            return (
              <motion.div
                key={area.num}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              >
              <Link
                to={area.to}
                className="card card-hover group relative flex h-full flex-col overflow-hidden"
              >
                <div data-reveal="wipe" className="relative aspect-[4/3] overflow-hidden bg-primary-soft">
                  <Img
                    src={area.image}
                    alt={area.title}
                    width={600}
                    height={450}
                    loading="lazy"
                    decoding="async"
                    className="h-full w-full object-cover"
                  />
                  <span className={`absolute bottom-0 left-0 h-1 w-full ${tone.bg}`} aria-hidden="true" />
                </div>

                <div className="relative flex flex-1 flex-col px-6 pt-9 pb-7">
                  <span
                    className={`absolute -top-6 left-6 flex h-12 w-12 items-center justify-center rounded-full border-4 border-white shadow-sm ${tone.soft} ${tone.text}`}
                    aria-hidden="true"
                  >
                    <Icon className="h-5 w-5" strokeWidth={1.6} />
                  </span>
                  <span className={`mb-1 text-[13px] font-semibold ${tone.text}`} aria-hidden="true">
                    {area.num}
                  </span>
                  <h3 className="font-serif text-xl font-semibold leading-snug text-ink mb-3">{area.title}</h3>
                  <p className="text-[15px] leading-relaxed text-ink-muted">{area.desc}</p>
                  <span className={`mt-auto inline-flex items-center gap-1.5 pt-6 text-[14px] font-semibold ${tone.text}`}>
                    Explore program
                    <ArrowRight
                      className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1 motion-reduce:transition-none"
                      aria-hidden="true"
                    />
                  </span>
                </div>
              </Link>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
