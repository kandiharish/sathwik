import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Clock, Heart, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Container } from './Container';
import { SocialLinks } from './SocialLinks';
import { siteSettings } from '../../data/settings';
import { Img } from '../common/Img';

const columns = [
  {
    heading: 'Organisation',
    links: [
      { name: 'About Us', to: '/about' },
      { name: 'Projects', to: '/projects' },
      { name: 'Impact', to: '/impact' },
      { name: 'Stories of Change', to: '/stories' },
      { name: 'Gallery', to: '/gallery' },
      { name: 'FAQ', to: '/faq' },
    ],
  },
  {
    heading: 'Our Work',
    links: [
      { name: 'Healthcare & Wellness', to: '/programs/healthcare-and-wellness' },
      { name: 'Education & Literacy', to: '/programs/education-and-infrastructure' },
      { name: 'Youth & Women Empowerment', to: '/programs/youth-and-women-empowerment' },
      { name: 'Environment', to: '/programs/environmental-sustainability' },
      { name: 'Where We Work', to: '/impact/map' },
    ],
  },
];

export const Footer = () => {
  const { contact } = siteSettings;
  const telHref = `tel:${contact.phone.replace(/\s+/g, '')}`;

  return (
    <footer className="relative overflow-hidden bg-[#071A18] text-white/70">
      {/* Brand hairline in the logo colours */}
      <div className="h-px w-full bg-[linear-gradient(90deg,transparent,#025955_15%,#0C87C2_50%,#F10328_85%,transparent)] opacity-70" aria-hidden="true" />
      {/* Soft light from above for depth */}
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,rgba(2,89,85,0.45),transparent_70%)]"
        aria-hidden="true"
      />

      {/* Call to action (from the original sathwik.org home page) */}
      <Container className="relative py-16 md:py-20">
        <div className="grid gap-10 lg:grid-cols-[1.35fr_1fr] lg:items-end">
          <div>
            <p className="mb-4 text-[13px] font-medium text-white/50">Empowering Rural Communities and Youth</p>
            <h2 className="font-serif text-[2rem] font-semibold leading-[1.1] tracking-[-0.035em] text-white md:text-5xl">
              For a Healthier, <span className="text-white/55">Sustainable Future</span>
            </h2>
            <p className="mt-5 max-w-xl text-[15px] leading-relaxed text-white/60">
              Join hands with us as we work together to uplift and transform lives in rural areas through education,
              healthcare, skill development, and sustainable initiatives.
            </p>
          </div>
          <div className="flex flex-wrap gap-3 lg:justify-end">
            <Link to="/donate" className="btn btn-donate !px-7 !py-3.5">
              <Heart className="h-4 w-4 fill-current" aria-hidden="true" /> Donate Now
            </Link>
            <Link to="/contact" className="btn !px-7 !py-3.5 bg-white text-ink hover:bg-white/90">
              Contact Us <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        </div>

        {/* Quick contact tiles */}
        <div className="mt-12 grid gap-3 sm:grid-cols-2">
          <a
            href={telHref}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <span className="flex items-center gap-4">
              <span className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white">
                <Phone className="h-4 w-4" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-[12px] text-white/45">Call us</span>
                <span className="block text-[15px] font-medium text-white">{contact.phone}</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
          </a>
          <a
            href={`mailto:${contact.email}`}
            className="group flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.04] px-5 py-4 transition-colors hover:border-white/20 hover:bg-white/[0.07]"
          >
            <span className="flex min-w-0 items-center gap-4">
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10 text-white">
                <Mail className="h-4 w-4" aria-hidden="true" />
              </span>
              <span className="min-w-0">
                <span className="block text-[12px] text-white/45">Write to us</span>
                <span className="block truncate text-[15px] font-medium text-white">{contact.email}</span>
              </span>
            </span>
            <ArrowUpRight className="h-4 w-4 shrink-0 text-white/40 transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-white" aria-hidden="true" />
          </a>
        </div>
      </Container>

      <Container className="relative border-t border-white/10 pt-14 pb-10">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1.1fr_1.3fr]">
          {/* Brand */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-4" aria-label="SRAYI Association, home">
              <span className="rounded-2xl bg-white p-2">
                <Img src="/logo.webp" alt="" width={56} height={56} loading="lazy" className="h-14 w-14 object-contain" />
              </span>
              <span className="flex flex-col">
                <span className="font-serif text-xl font-semibold tracking-[-0.02em] text-white">SRAYI Association</span>
                <span className="text-[12px] text-white/45">Est. 2015 · Hyderabad</span>
              </span>
            </Link>
            <p className="max-w-sm text-sm leading-relaxed text-white/55">
              Dedicated to uplifting rural communities through youth empowerment, education, and sustainable growth
              initiatives. Join us in building brighter futures.
            </p>
            <SocialLinks />
          </div>

          {columns.map((col) => (
            <nav key={col.heading} aria-label={col.heading}>
              <h3 className="mb-5 font-sans text-[13px] font-semibold text-white">{col.heading}</h3>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l.to}>
                    <Link to={l.to} className="text-[14px] text-white/55 transition-colors hover:text-white">
                      {l.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}

          {/* Visit */}
          <div>
            <h3 className="mb-5 font-sans text-[13px] font-semibold text-white">Get in Touch</h3>
            <address className="space-y-4 text-[14px] not-italic text-white/55">
              <p className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/35" aria-hidden="true" />
                <span className="leading-relaxed">{contact.address}</span>
              </p>
              <p className="flex items-center gap-3">
                <Clock className="h-4 w-4 shrink-0 text-white/35" aria-hidden="true" />
                {contact.workingHours}
              </p>
            </address>
            <Link
              to="/volunteer"
              className="group mt-6 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[14px] font-medium text-white transition-colors hover:border-white/30 hover:bg-white/5"
            >
              Become a Volunteer
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" aria-hidden="true" />
            </Link>
          </div>
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-3 border-t border-white/10 pt-8 text-[12px] text-white/40 md:flex-row">
          <p>© {new Date().getFullYear()} Sathwik Rural and Youth Integrated Association (SRAYI). All rights reserved.</p>
          <p>Registered non-profit · Hyderabad, Telangana, India</p>
        </div>
      </Container>

      {/* Oversized wordmark, cropped at the bottom edge */}
      <div className="pointer-events-none relative select-none overflow-hidden" aria-hidden="true">
        <p className="-mb-[0.22em] text-center font-serif text-[22vw] font-semibold leading-none tracking-[-0.06em] text-white/[0.04] md:text-[18vw]">
          SATHWIK
        </p>
      </div>
    </footer>
  );
};
