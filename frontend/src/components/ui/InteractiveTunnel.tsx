import { useEffect, useRef, useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Img } from '../common/Img';
import { tones, toneFor } from '../../lib/tones';
import { scrollToElement } from '../../lib/lenis';

/** Sticky offset of card `i` (matches the inline `top` on each list item). */
const STICKY_TOP = 96;
const STICKY_STEP = 12;

export const FOCUS_AREAS = [
  {
    tag: "HEALTHCARE",
    title: "Healthcare & Medical Infrastructure",
    subtitle: "Healing communities from within.",
    description: "We believe that access to quality healthcare is a fundamental human right. Our initiatives focus on equipping rural hospitals with life-saving medical devices, establishing local health camps, and building robust infrastructure that can serve generations.",
    img: "/tunnel-thumb/tunnel-1.webp",
  },
  {
    tag: "WASH",
    title: "Water, Sanitation & Hygiene",
    subtitle: "The foundation of a healthy life.",
    description: "Clean water is the starting point for all community development. We install advanced RO water plants and build modern sanitation facilities in underserved villages, drastically reducing waterborne diseases and improving overall public health.",
    img: "/tunnel-thumb/tunnel-2.webp",
  },
  {
    tag: "EDUCATION",
    title: "Education & School Infrastructure",
    subtitle: "Empowering the minds of tomorrow.",
    description: "Education is the most powerful tool to break the cycle of poverty. We reconstruct dilapidated rural schools, provide essential learning materials, and create safe, inspiring environments where every child has the opportunity to thrive.",
    img: "/tunnel-thumb/tunnel-3.webp",
  },
  {
    tag: "NUTRITION",
    title: "Nutrition & Maternal Health",
    subtitle: "Nourishing mothers, protecting futures.",
    description: "A community cannot grow if its people are undernourished. Our targeted nutrition drives provide essential sustenance to expecting mothers and young children, ensuring they receive the vital vitamins and calories needed for healthy development.",
    img: "/tunnel-thumb/tunnel-4.webp",
  },
  {
    tag: "WELLNESS",
    title: "Sports & Community Wellness",
    subtitle: "Building strength and solidarity.",
    description: "Physical fitness is crucial for a vibrant community. By constructing open-air gyms and sports facilities in rural areas, we provide youth with healthy outlets for their energy, fostering teamwork, discipline, and long-term physical well-being.",
    img: "/tunnel-thumb/tunnel-5.webp",
  },
  {
    tag: "INFRASTRUCTURE",
    title: "Infrastructure Development",
    subtitle: "Paving the way to progress.",
    description: "We lay the groundwork for economic growth by developing essential community infrastructure. From community halls to skill development centers, we build the physical spaces where communities can gather, learn, and grow together.",
    img: "/tunnel-thumb/tunnel-6.webp",
  },
  {
    tag: "INCLUSION",
    title: "Disability Inclusion",
    subtitle: "Ensuring no one is left behind.",
    description: "A truly developed society is measured by how it treats its most vulnerable. We provide specialized support, medical equipment, and accessible infrastructure for individuals with disabilities, ensuring they can participate fully in community life.",
    img: "/tunnel-thumb/tunnel-7.webp",
  },
  {
    tag: "HOLISTIC",
    title: "Holistic Development",
    subtitle: "Integrating all facets of life.",
    description: "True development requires a multi-dimensional approach. We integrate economic, social, and environmental strategies to create self-sustaining rural ecosystems where every individual has the resources and agency to build a better life.",
    img: "/tunnel-thumb/tunnel-8.webp",
  }
];


/**
 * Core Focus Areas, a CSS `position: sticky` card stack.
 * Each card pins slightly lower than the previous one, so the stack builds up
 * as the user scrolls. No scroll listeners or per-frame JS transforms.
 * On small screens the cards simply stack in normal flow.
 */
export const InteractiveTunnel = () => {
  const total = FOCUS_AREAS.length;
  const listRef = useRef<HTMLOListElement>(null);
  const itemRefs = useRef<(HTMLLIElement | null)[]>([]);
  const anchorRef = useRef<HTMLSpanElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Highlight the top-most card currently pinned / in the upper part of the viewport.
  // One IntersectionObserver entry per card; stuck cards stay "intersecting", so the
  // highest intersecting index is the card the reader is looking at.
  useEffect(() => {
    const items = itemRefs.current.filter((el): el is HTMLLIElement => el !== null);
    if (!items.length || typeof IntersectionObserver === 'undefined') return;
    const visible = new Set<number>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          const idx = Number((entry.target as HTMLElement).dataset.index);
          if (entry.isIntersecting) visible.add(idx);
          else visible.delete(idx);
        }
        if (visible.size) setActiveIndex(Math.max(...visible));
      },
      { rootMargin: '0px 0px -60% 0px', threshold: 0 },
    );
    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  // Sticky cards report their pinned position, so compute each card's natural
  // (in-flow) position, park an invisible anchor there and scroll to it.
  const goTo = (index: number) => {
    const list = listRef.current;
    const anchor = anchorRef.current;
    if (!list || !anchor) return;
    let top = 0;
    for (let i = 0; i < index; i++) {
      const el = itemRefs.current[i];
      if (!el) continue;
      top += el.offsetHeight + (parseFloat(getComputedStyle(el).marginBottom) || 0);
      const next = itemRefs.current[i + 1];
      if (next) top += parseFloat(getComputedStyle(next).marginTop) || 0;
    }
    anchor.style.top = `${top}px`;
    scrollToElement(anchor, -(STICKY_TOP + index * STICKY_STEP));
  };

  return (
    <section className="section relative bg-sand" aria-labelledby="focus-areas-heading">
      {/* Subtle background photo */}
      <Img
        src="/image%20copy.webp"
        alt=""
        aria-hidden="true"
        width={1777}
        height={885}
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] w-full object-cover object-center opacity-15"
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-[70vh] bg-gradient-to-b from-sand/40 via-sand/70 to-sand" />

      <Container className="relative">
        <div id="focus-areas-heading">
          <SectionHeading eyebrow="What we do" title={<>Our Core <em>Focus Areas</em></>} />
        </div>

        <div className="lg:grid lg:grid-cols-[200px_minmax(0,1fr)] lg:gap-10 xl:grid-cols-[230px_minmax(0,1fr)] xl:gap-12">
          {/* Sticky index (lg+) */}
          <nav aria-label="Core focus areas" className="hidden lg:block">
            <ol className="sticky space-y-1" style={{ top: `${STICKY_TOP}px` }}>
              {FOCUS_AREAS.map((item, index) => {
                const tone = tones[toneFor(item.tag)];
                const isActive = index === activeIndex;
                return (
                  <li key={item.tag}>
                    <button
                      type="button"
                      onClick={() => goTo(index)}
                      aria-current={isActive ? 'true' : undefined}
                      className={`flex w-full items-start gap-3 rounded-xl px-3 py-2.5 text-left transition-colors duration-300 ${
                        isActive ? `${tone.soft} ${tone.text}` : 'text-ink-muted hover:bg-white hover:text-ink'
                      }`}
                    >
                      <span className="pt-px text-[12px] font-semibold tabular-nums">{String(index + 1).padStart(2, '0')}</span>
                      <span className="text-[14px] font-semibold leading-snug">{item.title}</span>
                    </button>
                  </li>
                );
              })}
            </ol>
          </nav>

        <div className="relative mx-auto max-w-5xl lg:mx-0 lg:max-w-none">
        <span ref={anchorRef} className="pointer-events-none absolute left-0 h-px w-px" aria-hidden="true" />
        <ol ref={listRef} className="relative space-y-6 md:space-y-10 md:pb-10">
          {FOCUS_AREAS.map((item, index) => (
            <li
              key={item.tag}
              ref={(el) => { itemRefs.current[index] = el; }}
              data-index={index}
              className="md:sticky"
              style={{ top: `calc(${STICKY_TOP}px + ${index * STICKY_STEP}px)`, zIndex: index + 1 }}
            >
              <article className="card flex flex-col overflow-hidden md:min-h-[360px] md:flex-row">
                {/* Image */}
                <div data-reveal="wipe" className="relative aspect-[16/10] w-full shrink-0 overflow-hidden bg-sand md:aspect-auto md:w-1/2">
                  <Img
                    src={item.img}
                    alt={item.title}
                    width={700}
                    height={500}
                    loading="lazy"
                    decoding="async"
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>

                {/* Content */}
                <div className="relative flex w-full flex-col justify-center p-7 sm:p-9 md:w-1/2 lg:p-10">

                  <div className="mb-5 flex items-center justify-between gap-4">
                    <span className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.12em] ${tones[toneFor(item.tag)].soft} ${tones[toneFor(item.tag)].text}`}>
                      {item.tag}
                    </span>
                    <span className="text-[13px] font-medium tabular-nums text-ink-muted" aria-hidden="true">
                      {String(index + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}
                    </span>
                  </div>

                  <h3 className="mb-3 font-serif text-2xl font-semibold leading-tight tracking-tight text-ink md:text-3xl lg:text-[2.1rem]">
                    {item.title}
                  </h3>

                  <p className={`mb-5 text-lg font-medium ${tones[toneFor(item.tag)].text}`}>
                    “{item.subtitle}”
                  </p>


                  <p className="text-[15px] leading-relaxed text-ink-muted">
                    {item.description}
                  </p>
                </div>
              </article>
            </li>
          ))}
        </ol>
        </div>
        </div>
      </Container>
    </section>
  );
};
