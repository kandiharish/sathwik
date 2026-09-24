import { useId, useRef, useState, type KeyboardEvent } from 'react';
import { motion } from 'framer-motion';
import { Users, ShieldPlus, FileSearch, Sprout, Recycle, Handshake } from 'lucide-react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Img } from '../common/Img';
import { tones, type Tone } from '../../lib/tones';

const commitments = [
  {
    title: 'Community-Centric Approach',
    desc: 'SRAYI Association prioritizes empowerment, offering skills and resources that enable individuals to achieve lasting self-reliance rather than dependency.',
    Icon: Users,
    symbol: '/symbols/community.webp',
  },
  {
    title: 'Improving Health Through Water',
    desc: 'SRAYI Association is improving public health by installing RO plants in schools, developing healthcare facilities, and providing essential medical equipment.',
    Icon: ShieldPlus,
    symbol: '/symbols/health.webp',
  },
  {
    title: 'Transparency & Accountability',
    desc: 'With a commitment to integrity, SRAYI Association maintains transparency across operations, ensuring stakeholders are well-informed about program impacts.',
    Icon: FileSearch,
    symbol: '/symbols/transparency.webp',
  },
];

const pillars = [
  {
    title: 'Community-Driven Programs',
    desc: 'Involving local leaders and communities in planning and implementing projects for impactful change.',
    Icon: Users,
  },
  {
    title: 'Youth Integration',
    desc: 'Empowering the youth to take active roles in driving change through training and development.',
    Icon: Sprout,
  },
  {
    title: 'Sustainability',
    desc: 'Ensuring long-term success by focusing on self-sustaining initiatives that reduce dependency.',
    Icon: Recycle,
  },
  {
    title: 'Collaboration',
    desc: 'Partnering with government, NGOs, and corporate sponsors for resources and expertise.',
    Icon: Handshake,
  },
];

const COMMITMENT_TONES: Tone[] = ['teal', 'blue', 'red'];
const PILLAR_TONES: Tone[] = ['teal', 'blue', 'green', 'red'];

const TABS = [
  { key: 'commitment', label: 'Our Commitment' },
  { key: 'strategy', label: 'Our Strategy' },
] as const;

const reveal = (i: number) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const, delay: i * 0.08 },
});

const CommitmentPanel = () => (
  <div className="mx-auto grid max-w-6xl grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
    {commitments.map((card, idx) => {
      const tone = tones[COMMITMENT_TONES[idx % 3]];
      return (
        <motion.div key={card.title} {...reveal(idx)}>
          <article className="card card-hover group relative flex h-full flex-col overflow-hidden p-8 lg:p-10">
            {/* Faint watermark symbol */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04] mix-blend-multiply transition-opacity duration-700 group-hover:opacity-[0.08]"
              style={{
                backgroundImage: `url(${card.symbol})`,
                backgroundSize: '150%',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
              }}
              aria-hidden="true"
            />
            <div className="relative mb-8 flex items-start justify-between">
              <span className={`font-serif text-4xl font-bold leading-none tabular-nums ${tone.text}`} aria-hidden="true">
                {String(idx + 1).padStart(2, '0')}
              </span>
              <span className={`flex h-12 w-12 items-center justify-center rounded-full ${tone.soft} ${tone.text}`}>
                <card.Icon className="h-5 w-5" strokeWidth={1.25} aria-hidden="true" />
              </span>
            </div>
            <h3 className="relative mb-4 font-serif text-xl font-semibold leading-snug text-ink md:text-2xl">{card.title}</h3>
            <p className="relative text-[15px] leading-relaxed text-ink-muted">{card.desc}</p>
          </article>
        </motion.div>
      );
    })}
  </div>
);

const StrategyPanel = () => (
  <div className="mx-auto max-w-6xl">
    <h3 className="mb-8 text-center font-serif text-2xl font-semibold tracking-tight text-ink md:text-[1.75rem]">
      Enriching <span className="text-primary">Rural Communities</span>
    </h3>
    <ol className="grid grid-cols-1 border-t border-line sm:grid-cols-2 lg:grid-cols-4">
      {pillars.map(({ title, desc, Icon }, i) => {
        const tone = tones[PILLAR_TONES[i % 4]];
        return (
          <motion.li
            key={title}
            {...reveal(i)}
            className={`relative flex flex-col border-b border-line px-2 pb-10 pt-10 sm:px-8 lg:border-b-0
              ${i % 2 === 1 ? 'sm:border-l' : ''} ${i > 0 ? 'lg:border-l' : 'lg:pl-0'} ${i === 3 ? 'lg:pr-0' : ''}`}
          >
            <div className="mb-8 flex items-start justify-between">
              <span className={`font-serif text-5xl font-bold leading-none tabular-nums md:text-6xl ${tone.text}`} aria-hidden="true">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className={`flex h-11 w-11 items-center justify-center rounded-full ${tone.soft} ${tone.text}`} aria-hidden="true">
                <Icon className="h-5 w-5" strokeWidth={1.6} />
              </span>
            </div>
            <h4 className="mb-3 font-serif text-xl font-semibold leading-snug text-ink md:text-[22px]">{title}</h4>
            <p className="text-[15px] leading-relaxed text-ink-muted">{desc}</p>
          </motion.li>
        );
      })}
    </ol>
  </div>
);

/**
 * "Our Approach": the commitments and the strategy pillars in one section,
 * switched with accessible tabs. Both panels share one grid cell so the
 * switch is a soft crossfade without the section jumping in height.
 */
export const CommitmentStrategy = () => {
  const [selected, setSelected] = useState(0);
  const tabRefs = useRef<(HTMLButtonElement | null)[]>([]);
  const baseId = useId();

  const select = (index: number) => {
    const next = (index + TABS.length) % TABS.length;
    setSelected(next);
    tabRefs.current[next]?.focus();
  };

  const onKeyDown = (e: KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (e.key === 'ArrowRight' || e.key === 'ArrowDown') { e.preventDefault(); select(index + 1); }
    else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') { e.preventDefault(); select(index - 1); }
    else if (e.key === 'Home') { e.preventDefault(); select(0); }
    else if (e.key === 'End') { e.preventDefault(); select(TABS.length - 1); }
  };

  return (
    <section className="section relative overflow-hidden bg-background">
      {/* Subtle background photo */}
      <div className="pointer-events-none absolute inset-0" aria-hidden="true">
        <Img
          src="/image%20copy%205.webp"
          alt=""
          width={1717}
          height={916}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover object-center opacity-[0.12]"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/60 to-background" />
      </div>

      <Container className="relative">
        <SectionHeading eyebrow="Our Approach" title={<>Building a Stronger, <em>Healthier Tomorrow</em></>} />

        <div className="mb-10 flex justify-center md:mb-12">
          <div role="tablist" aria-label="Our approach" className="inline-flex rounded-full border border-line bg-white p-1 shadow-[var(--shadow-soft)]">
            {TABS.map((tab, i) => {
              const isSelected = i === selected;
              return (
                <button
                  key={tab.key}
                  ref={(el) => { tabRefs.current[i] = el; }}
                  type="button"
                  role="tab"
                  id={`${baseId}-tab-${tab.key}`}
                  aria-selected={isSelected}
                  aria-controls={`${baseId}-panel-${tab.key}`}
                  tabIndex={isSelected ? 0 : -1}
                  onClick={() => setSelected(i)}
                  onKeyDown={(e) => onKeyDown(e, i)}
                  className={`rounded-full px-5 py-2 text-[14px] font-semibold transition-colors duration-300 md:px-6 ${
                    isSelected ? 'bg-primary text-white' : 'text-ink-muted hover:text-ink'
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        <div className="grid">
          {TABS.map((tab, i) => {
            const isSelected = i === selected;
            return (
              <div
                key={tab.key}
                role="tabpanel"
                id={`${baseId}-panel-${tab.key}`}
                aria-labelledby={`${baseId}-tab-${tab.key}`}
                aria-hidden={!isSelected}
                inert={!isSelected}
                className={`[grid-area:1/1] transition-[opacity,visibility] duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] motion-reduce:transition-none ${
                  isSelected ? 'visible opacity-100' : 'invisible opacity-0'
                }`}
              >
                {tab.key === 'commitment' ? <CommitmentPanel /> : <StrategyPanel />}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
};
