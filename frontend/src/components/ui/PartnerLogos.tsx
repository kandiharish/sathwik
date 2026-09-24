import { Container } from '../layout/Container';
import { SectionHeading } from './SectionHeading';
import { Img } from '../common/Img';

const partners = [
  { name: 'GAIL', type: 'Public Sector Undertaking', image: '/partners/gail.webp' },
  { name: 'NTPC', type: 'Public Sector Undertaking', image: '/partners/ntpc.webp' },
  { name: 'HAL', type: 'Public Sector Undertaking', image: '/partners/hal.webp' },
  { name: 'BPCL', type: 'Public Sector Undertaking', image: '/partners/bpcl.webp' },
  { name: 'NMDC', type: 'Public Sector Undertaking', image: '/partners/nmdc.webp' },
  { name: 'IOCL', type: 'Public Sector Undertaking', image: '/partners/iocl.webp' },
  { name: 'HPCL', type: 'Public Sector Undertaking', image: '/partners/hpcl.webp' },
];

export const PartnerLogos = () => {
  // Two copies for a seamless -50% loop; the copy is hidden from AT and when motion is reduced.
  const items = [...partners, ...partners];

  return (
    <section className="section border-t border-line bg-background overflow-hidden">
      <Container>
        <SectionHeading
          title={<>Trusted By <em>Industry Leaders</em></>}
          eyebrow="Our Visionary Corporate Social Responsibility Partners"
        />
      </Container>

      <div className="group relative w-full overflow-hidden">
        {/* Edge fades */}
        <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-16 md:w-40 bg-gradient-to-r from-background to-transparent motion-reduce:hidden" aria-hidden="true" />
        <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-16 md:w-40 bg-gradient-to-l from-background to-transparent motion-reduce:hidden" aria-hidden="true" />

        <ul
          className="flex w-max items-center py-4 [animation:marquee_45s_linear_infinite]
            group-hover:[animation-play-state:paused] group-focus-within:[animation-play-state:paused]
            motion-reduce:animate-none motion-reduce:w-full motion-reduce:flex-wrap motion-reduce:justify-center motion-reduce:gap-y-8 motion-reduce:px-6"
        >
          {items.map((partner, idx) => {
            const duplicate = idx >= partners.length;
            return (
              <li
                key={`${partner.name}-${idx}`}
                aria-hidden={duplicate || undefined}
                className={`flex shrink-0 flex-col items-center px-8 md:px-14 ${duplicate ? 'motion-reduce:hidden' : ''}`}
                title={`${partner.name}, ${partner.type}`}
              >
                <Img
                  src={partner.image}
                  alt={duplicate ? '' : `${partner.name} logo`}
                  width={160}
                  height={56}
                  loading="lazy"
                  decoding="async"
                  className="h-14 md:h-16 w-auto max-w-[170px] object-contain transition-transform duration-500 hover:scale-105"
                />
                <span className="sr-only">{partner.type}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};
