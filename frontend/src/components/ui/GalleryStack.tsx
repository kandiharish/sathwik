import { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { MapPin } from 'lucide-react';
import { Img } from '../common/Img';
import { Lightbox, type LightboxImage } from './Lightbox';

// Using real, high-resolution project photographs from actual field interventions
const STORIES = [
  {
    image: "/real-stories/story-1.webp",
    category: "Healthcare",
    title: "Rural Mobile Health Camps",
    location: "Andhra Pradesh"
  },
  {
    image: "/real-stories/story-2.webp",
    category: "Skill Training",
    title: "GAIL Institute of Skills",
    location: "Nagaram, AP"
  },
  {
    image: "/real-stories/story-3.webp",
    category: "Water & Sanitation",
    title: "Drinking Water RO Plants",
    location: "Janaagama, TS"
  },
  {
    image: "/real-stories/story-4.webp",
    category: "Education Support",
    title: "School Bicycle Distribution",
    location: "Karimnagar"
  },
  {
    image: "/real-stories/story-5.webp",
    category: "Nutrition Aid",
    title: "Poshak Protein Kits for Women",
    location: "Hyderabad"
  },
  {
    image: "/real-stories/story-6.webp",
    category: "Sports & Wellness",
    title: "Open-Air Community Gym",
    location: "Hyderabad"
  },
  {
    image: "/real-stories/story-7.webp",
    category: "Disability Inclusion",
    title: "Hospital Wheelchairs & Monitors",
    location: "Sattenapalle, AP"
  },
  {
    image: "/real-stories/story-8.webp",
    category: "Clean Water",
    title: "Govt School Water Infrastructure",
    location: "Banka, Bihar"
  }
];

type Story = (typeof STORIES)[number];

const LIGHTBOX_IMAGES: LightboxImage[] = STORIES.map((s) => ({
  src: s.image,
  alt: s.title,
  caption: `${s.title} · ${s.location}`,
}));

const HangingCard = ({ story, hidden = false, onOpen }: { story: Story; hidden?: boolean; onOpen: () => void }) => (
  <li
    className={`relative mr-10 md:mr-14 flex shrink-0 flex-col items-center ${hidden ? 'motion-reduce:hidden' : ''}`}
    aria-hidden={hidden || undefined}
  >
    {/* String + clip on the rope */}
    <div className="relative flex h-7 w-px flex-col items-center bg-gold/60" aria-hidden="true">
      <span className="absolute -top-[5px] h-2.5 w-2.5 rounded-full border-2 border-gold bg-background" />
    </div>

    <article className="group/card relative w-[240px] md:w-[272px] overflow-hidden rounded-2xl border border-line bg-white shadow-[0_10px_30px_-12px_rgba(26,28,25,0.18)] transition-shadow duration-500 hover:shadow-[0_18px_40px_-14px_rgba(26,28,25,0.25)]">
      {/* Clip / tape */}
      <span className="absolute left-1/2 top-0 z-10 h-2.5 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-gold/40 bg-gold-soft" aria-hidden="true" />

      <button
        type="button"
        onClick={onOpen}
        tabIndex={hidden ? -1 : undefined}
        aria-label={hidden ? undefined : `Open photo: ${story.title}`}
        className="block aspect-[4/3] w-full cursor-zoom-in overflow-hidden bg-sand focus-visible:outline-offset-[-3px]"
      >
        <Img
          src={story.image}
          alt={hidden ? '' : story.title}
          width={544}
          height={408}
          loading="lazy"
          decoding="async"
          className="h-full w-full object-cover transition-transform duration-700 group-hover/card:scale-[1.04]"
        />
      </button>

      <div className="flex flex-col gap-2 p-5">
        <span className="text-[11px] font-semibold uppercase tracking-[0.12em] text-primary">{story.category}</span>
        <h3 className="font-serif text-lg font-semibold leading-snug text-ink line-clamp-2 min-h-[2.8em]">{story.title}</h3>
        <div className="mt-1 flex items-center gap-1.5 border-t border-line pt-3 text-[13px] text-ink-muted">
          <MapPin className="h-3.5 w-3.5 shrink-0 text-secondary" aria-hidden="true" />
          <span className="truncate">{story.location}</span>
        </div>
      </div>
    </article>
  </li>
);

export const GalleryStack = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="section relative overflow-hidden bg-background">
      {/* Decorative background photo, very low opacity */}
      <Img
        src="/image%20copy%208.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="pointer-events-none absolute inset-0 h-full w-full object-contain object-center opacity-[0.12]"
      />

      <Container className="relative">
        <SectionHeading
          eyebrow="Stories of Change"
          title={<>Recent <em>Field Activities</em></>}
          description="Authentic moments from our verified grassroots projects, health camps, and community infrastructure across rural India."
        />
      </Container>

      {/* Clothesline */}
      <div
        className="group relative w-full overflow-hidden pt-2"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        {/* Rope */}
        <div className="absolute left-0 top-2 h-px w-full bg-gold/70" aria-hidden="true" />

        <ul
          className="flex w-max pb-6 [animation:marquee_60s_linear_infinite]
            group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]
            motion-reduce:animate-none motion-reduce:w-auto motion-reduce:overflow-x-auto motion-reduce:px-6"
          style={open !== null ? { animationPlayState: 'paused' } : undefined}
        >
          {STORIES.map((story, i) => (
            <HangingCard key={story.title} story={story} onOpen={() => setOpen(i)} />
          ))}
          {/* Duplicate set for a seamless loop (hidden from assistive tech and when motion is reduced) */}
          {STORIES.map((story, i) => (
            <HangingCard key={`dup-${story.title}`} story={story} hidden onOpen={() => setOpen(i)} />
          ))}
        </ul>
      </div>

      <Lightbox images={LIGHTBOX_IMAGES} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />
    </section>
  );
};
