import { useState } from 'react';
import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Img } from '../common/Img';
import { Lightbox, type LightboxImage } from './Lightbox';

// The home strip shows 12 photos (6 per row); the full set lives on /gallery.
const PER_ROW = 6;

const TOP_IMAGES = [
  "/gallery-thumb/top-1.webp",
  "/gallery-thumb/top-2.webp",
  "/gallery-thumb/top-3.webp",
  "/gallery-thumb/top-4.webp",
  "/gallery-thumb/top-5.webp",
  "/gallery-thumb/top-6.webp",
  "/gallery-thumb/top-7.webp",
  "/gallery-thumb/top-8.webp",
  "/gallery-thumb/top-9.webp",
  "/gallery-thumb/top-10.webp",
  "/gallery-thumb/top-11.webp",
  "/gallery-thumb/top-12.webp",
];

const BOTTOM_IMAGES = [
  "/gallery-thumb/bot-1.webp",
  "/gallery-thumb/bot-2.webp",
  "/gallery-thumb/bot-3.webp",
  "/gallery-thumb/bot-4.webp",
  "/gallery-thumb/bot-5.webp",
  "/gallery-thumb/bot-6.webp",
  "/gallery-thumb/bot-7.webp",
  "/gallery-thumb/bot-8.webp",
  "/gallery-thumb/bot-9.webp",
  "/gallery-thumb/bot-10.webp",
  "/gallery-thumb/bot-11.webp",
  "/gallery-thumb/bot-12.webp",
];

const altFor = (n: number) => `SRAYI field activity photograph ${n}`;

const HOME_IMAGES: LightboxImage[] = [...TOP_IMAGES.slice(0, PER_ROW), ...BOTTOM_IMAGES.slice(0, PER_ROW)].map((src, i) => ({
  src,
  alt: altFor(i + 1),
}));

interface RowProps {
  images: string[];
  reverse?: boolean;
  offset?: number;
  paused?: boolean;
  onOpen: (index: number) => void;
}

const Row = ({ images, reverse = false, offset = 0, paused = false, onOpen }: RowProps) => (
  <ul
    className={`flex w-max [animation:marquee_80s_linear_infinite] group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]
      motion-reduce:animate-none motion-reduce:w-auto motion-reduce:overflow-x-auto motion-reduce:px-6
      ${reverse ? '[animation-direction:reverse]' : ''}`}
    style={paused ? { animationPlayState: 'paused' } : undefined}
  >
    {[...images, ...images].map((src, i) => {
      const duplicate = i >= images.length;
      return (
        <li
          key={`${src}-${i}`}
          aria-hidden={duplicate || undefined}
          className={`mr-4 md:mr-5 w-[220px] md:w-[320px] shrink-0 overflow-hidden rounded-2xl border border-line bg-sand ${
            duplicate ? 'motion-reduce:hidden' : ''
          }`}
        >
          <button
            type="button"
            tabIndex={duplicate ? -1 : undefined}
            onClick={() => onOpen((i % images.length) + offset)}
            aria-label={duplicate ? undefined : `Open ${altFor((i % images.length) + 1 + offset)}`}
            className="block w-full cursor-zoom-in overflow-hidden rounded-2xl focus-visible:outline-offset-[-3px]"
          >
            <Img
              src={src}
              alt={duplicate ? '' : altFor((i % images.length) + 1 + offset)}
              width={560}
              height={400}
              loading="lazy"
              decoding="async"
              className="aspect-[7/5] h-auto w-full object-cover transition-transform duration-700 hover:scale-[1.04]"
            />
          </button>
        </li>
      );
    })}
  </ul>
);

export const CurvedGallery = () => {
  const [open, setOpen] = useState<number | null>(null);
  const paused = open !== null;

  return (
    <section className="section relative w-full overflow-hidden bg-white">
      <Container>
        <SectionHeading eyebrow="Our Impressive Works" title={<em>Gallery</em>} />
      </Container>

      <div
        className="group flex flex-col gap-4 md:gap-5"
        style={{
          maskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
          WebkitMaskImage: 'linear-gradient(to right, transparent, black 6%, black 94%, transparent)',
        }}
      >
        <Row images={TOP_IMAGES.slice(0, PER_ROW)} paused={paused} onOpen={setOpen} />
        <Row images={BOTTOM_IMAGES.slice(0, PER_ROW)} reverse offset={PER_ROW} paused={paused} onOpen={setOpen} />
      </div>

      <Lightbox images={HOME_IMAGES} index={open} onClose={() => setOpen(null)} onIndexChange={setOpen} />

      <div className="mt-12 flex justify-center">
        <Link to="/gallery" className="btn btn-outline">
          View Full Gallery <ArrowRight className="h-4 w-4" aria-hidden="true" />
        </Link>
      </div>
    </section>
  );
};
