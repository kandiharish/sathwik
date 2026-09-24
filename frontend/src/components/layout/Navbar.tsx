import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Heart, ChevronDown, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { siteSettings } from '../../data/settings';
import { lenisRef } from '../../lib/lenis';
import { SocialLinks } from './SocialLinks';
import { Img } from '../common/Img';
import { programs } from '../../data/programs';

const firstSentence = (text: string) => text.split(/(?<=[.!?])\s/)[0];

type NavItem = { name: string; path: string; children?: { name: string; path: string }[] };

export const navLinks: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'About Us', path: '/about' },
  {
    name: 'Programs',
    path: '/programs',
    children: [
      { name: 'Healthcare & Wellness', path: '/programs/healthcare-and-wellness' },
      { name: 'Education & Infrastructure', path: '/programs/education-and-infrastructure' },
      { name: 'Youth & Women Empowerment', path: '/programs/youth-and-women-empowerment' },
      { name: 'Environmental Sustainability', path: '/programs/environmental-sustainability' },
    ],
  },
  { name: 'Projects', path: '/projects' },
  { name: 'Impact', path: '/impact' },
  { name: 'Stories', path: '/stories' },
  { name: 'Gallery', path: '/gallery' },
  { name: 'Contact', path: '/contact' },
];

const telHref = `tel:${siteSettings.contact.phone.replace(/\s+/g, '')}`;

const Logo = () => (
  <Link to="/" className="flex items-center gap-3 shrink-0" aria-label="Sathwik Rural and Youth Integrated Association, home">
    <Img src="/logo.webp" alt="" width={68} height={68} loading="eager" fetchPriority="high" className="h-12 w-auto md:h-14 lg:h-[60px] object-contain" />
    <span className="flex flex-col justify-center">
      <span className="font-sans font-black text-[19px] lg:text-[21px] leading-none tracking-tight text-[#0000B3]">Sathwik</span>
      <span className="font-sans font-bold text-[9px] lg:text-[9.5px] leading-tight mt-1 text-[#009966]">
        Rural And Youth
        <br />
        Integrated Association
      </span>
    </span>
  </Link>
);

const DesktopDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const closeTimer = useRef<number | undefined>(undefined);
  const active = pathname.startsWith(item.path);

  useEffect(() => setOpen(false), [pathname]);

  const show = () => {
    window.clearTimeout(closeTimer.current);
    setOpen(true);
  };
  const hide = () => {
    closeTimer.current = window.setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={(e) => !e.currentTarget.contains(e.relatedTarget as Node) && hide()}
      onKeyDown={(e) => e.key === 'Escape' && setOpen(false)}
    >
      <div className="flex items-center">
        <Link to={item.path} className={`nav-link ${active ? 'is-active' : ''}`}>
          {item.name}
        </Link>
        <button
          type="button"
          aria-label={`${item.name} menu`}
          aria-expanded={open}
          aria-haspopup="true"
          onClick={() => setOpen((o) => !o)}
          className="-ml-2 p-1 text-ink-muted hover:text-primary"
        >
          <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-300 ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 8 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="absolute left-1/2 -translate-x-1/2 top-full pt-3 z-50"
          >
            <div className="w-150 rounded-2xl bg-white border border-line p-3" style={{ boxShadow: 'var(--shadow-lift)' }}>
              <div className="grid grid-cols-2 gap-1">
                {programs.map((program) => (
                  <NavLink
                    key={program.slug}
                    to={`/programs/${program.slug}`}
                    className={({ isActive }) =>
                      `group flex items-center gap-3.5 rounded-xl p-2.5 transition-colors ${isActive ? 'bg-primary-soft' : 'hover:bg-sand'}`
                    }
                  >
                    <span className="block h-14 w-14 shrink-0 overflow-hidden rounded-lg bg-sand">
                      <Img src={program.coverImage} alt="" width={56} height={56} sizes="56px" className="h-full w-full object-cover" />
                    </span>
                    <span className="min-w-0 flex-1">
                      <span className="block text-sm font-semibold text-ink group-hover:text-primary transition-colors">{program.title}</span>
                      <span className="mt-0.5 text-[13px] leading-snug text-ink-muted line-clamp-2">{firstSentence(program.overview)}</span>
                    </span>
                  </NavLink>
                ))}
              </div>
              <Link
                to={item.path}
                className="group mt-2 flex items-center justify-between rounded-xl border-t border-line px-3 pt-3 pb-1.5 text-xs font-semibold uppercase tracking-[0.12em] text-accent hover:text-primary transition-colors"
              >
                All programs <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" aria-hidden="true" />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [programsOpen, setProgramsOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setIsScrolled(window.scrollY > 40);
        ticking = false;
      });
    };
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the drawer on navigation.
  useEffect(() => setIsOpen(false), [pathname]);

  // Lock page scroll while the mobile drawer is open.
  useEffect(() => {
    if (!isOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    lenisRef.current?.stop();
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setIsOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = prev;
      lenisRef.current?.start();
      window.removeEventListener('keydown', onKey);
    };
  }, [isOpen]);

  return (
    <header className="fixed top-0 inset-x-0 z-50">
      <style>{`
        .nav-link { position: relative; display: inline-flex; padding: 0.5rem 0.7rem; font-size: 14px; font-weight: 500; color: var(--color-ink); transition: color .25s; }
        .nav-link:hover, .nav-link.is-active { color: var(--color-primary); }
        .nav-link::after { content: ""; position: absolute; left: 0.7rem; right: 0.7rem; bottom: 0.2rem; height: 1.5px; background: var(--color-gold); transform: scaleX(0); transform-origin: left; transition: transform .35s var(--ease-premium); }
        .nav-link:hover::after, .nav-link.is-active::after { transform: scaleX(1); }
        @media (min-width: 1280px) { .nav-link { padding: 0.5rem 0.95rem; } .nav-link::after { left: .95rem; right: .95rem; } }
      `}</style>

      {/* Utility bar */}
      <div
        className={`hidden md:block bg-primary-deep text-white/85 overflow-hidden transition-[height,opacity] duration-300 ease-out ${
          isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
        }`}
      >
        <div className="max-w-[1400px] mx-auto h-10 px-6 lg:px-10 flex items-center justify-between text-xs">
          <div className="flex items-center gap-6">
            <a href={telHref} className="flex items-center gap-2 hover:text-gold-soft transition-colors">
              <Phone className="w-3.5 h-3.5" aria-hidden="true" />
              {siteSettings.contact.phone}
            </a>
            <a href={`mailto:${siteSettings.contact.email}`} className="flex items-center gap-2 hover:text-gold-soft transition-colors">
              <Mail className="w-3.5 h-3.5" aria-hidden="true" />
              {siteSettings.contact.email}
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" aria-hidden="true" />
              Hyderabad, India
            </span>
            <SocialLinks size="sm" />
          </div>
        </div>
      </div>

      {/* Main bar */}
      <div
        className={`relative border-b transition-[background-color,border-color] duration-300 ${
          isScrolled ? 'bg-white/80 backdrop-blur-xl border-line/80' : 'bg-white border-line'
        }`}
      >
        <div className="scroll-progress" aria-hidden="true" />
        <div className="max-w-[1400px] mx-auto h-[76px] px-4 md:px-6 lg:px-10 flex items-center justify-between gap-4">
          <Logo />

          <nav aria-label="Main" className="hidden lg:flex items-center">
            {navLinks.slice(1).map((link) =>
              link.children ? (
                <DesktopDropdown key={link.path} item={link} />
              ) : (
                <NavLink key={link.path} to={link.path} className={({ isActive }) => `nav-link ${isActive ? 'is-active' : ''}`}>
                  {link.name}
                </NavLink>
              ),
            )}
          </nav>

          <div className="flex items-center gap-2">
            <Link to="/donate" className="btn btn-donate hidden sm:inline-flex !px-5 !py-2.5">
              <Heart className="w-4 h-4 fill-current" aria-hidden="true" />
              Donate Now
            </Link>
            <button
              type="button"
              className="lg:hidden p-2.5 -mr-2 rounded-full text-ink hover:bg-sand transition-colors"
              aria-label={isOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={isOpen}
              aria-controls="mobile-menu"
              onClick={() => setIsOpen((o) => !o)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            data-lenis-prevent
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            className="lg:hidden absolute inset-x-0 top-full h-[calc(100dvh-76px)] overflow-y-auto bg-background border-t border-line"
          >
            <nav aria-label="Mobile" className="px-5 py-4">
              <ul className="divide-y divide-line">
                {navLinks.map((link) => (
                  <li key={link.path}>
                    {link.children ? (
                      <>
                        <div className="flex items-center justify-between">
                          <NavLink to={link.path} end className="flex-1 py-4 font-serif text-xl text-ink">
                            {link.name}
                          </NavLink>
                          <button
                            type="button"
                            aria-label="Show programs"
                            aria-expanded={programsOpen}
                            onClick={() => setProgramsOpen((o) => !o)}
                            className="p-3 -mr-3 text-ink-muted"
                          >
                            <ChevronDown className={`w-5 h-5 transition-transform ${programsOpen ? 'rotate-180' : ''}`} />
                          </button>
                        </div>
                        {programsOpen && (
                          <ul className="pb-3 pl-4 border-l border-gold/40 ml-1 space-y-1">
                            {link.children.map((child) => (
                              <li key={child.path}>
                                <NavLink to={child.path} className="block py-2 text-[15px] text-ink-muted hover:text-primary">
                                  {child.name}
                                </NavLink>
                              </li>
                            ))}
                          </ul>
                        )}
                      </>
                    ) : (
                      <NavLink
                        to={link.path}
                        end={link.path === '/'}
                        className={({ isActive }) => `block py-4 font-serif text-xl ${isActive ? 'text-primary' : 'text-ink'}`}
                      >
                        {link.name}
                      </NavLink>
                    )}
                  </li>
                ))}
              </ul>

              <div className="mt-6 grid gap-3">
                <Link to="/donate" className="btn btn-donate w-full !py-3.5">
                  <Heart className="w-4 h-4 fill-current" aria-hidden="true" /> Donate Now
                </Link>
                <Link to="/volunteer" className="btn btn-outline w-full !py-3.5">
                  Become a Volunteer
                </Link>
              </div>

              <div className="mt-8 space-y-3 text-sm text-ink-muted">
                <a href={telHref} className="flex items-center gap-3">
                  <Phone className="w-4 h-4 text-gold" aria-hidden="true" /> {siteSettings.contact.phone}
                </a>
                <a href={`mailto:${siteSettings.contact.email}`} className="flex items-center gap-3 break-all">
                  <Mail className="w-4 h-4 text-gold shrink-0" aria-hidden="true" /> {siteSettings.contact.email}
                </a>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
