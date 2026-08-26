import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Heart, Phone, Mail, MapPin } from 'lucide-react';
import { motion } from 'framer-motion';
import { ButtonLink } from '../ui/Button';

const FacebookIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
  </svg>
);

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ className }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33 2.78 2.78 0 0 0 1.94 2c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.33 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setHoveredPath(location.pathname);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Programs', path: '/programs' },
    { name: 'Projects', path: '/projects' },
    { name: 'Stories', path: '/stories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 pt-0">
      {/* Full Width Green Background - Covers corners completely, extending to the bottom of the white pill */}
      <div 
        className={`absolute top-0 w-full bg-[#054E38] z-0 transition-all duration-500 ${
          isScrolled ? 'h-[60px]' : 'h-[120px] md:h-[124px]'
        }`}
      />

      <div className="relative z-10 w-full flex flex-col">
        {/* Top Info Content */}
        <div 
          className={`w-full transition-all duration-500 overflow-hidden flex items-center justify-center ${
            isScrolled ? 'h-0 opacity-0' : 'h-10 opacity-100'
          }`}
        >
          <div className="w-full max-w-[1400px] px-6 md:px-12 flex justify-between items-center text-white/90 text-[11px] font-medium tracking-wide">
            <div className="flex items-center gap-6">
              <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Phone className="w-3.5 h-3.5" /> +91 98765 43210</span>
              <span className="flex items-center gap-2 hover:text-white cursor-pointer transition-colors"><Mail className="w-3.5 h-3.5" /> info@sathwik.org</span>
            </div>
            <div className="flex items-center gap-6">
              <span className="hidden md:flex items-center gap-2"><MapPin className="w-3.5 h-3.5" /> Hyderabad, India</span>
              <div className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors"><FacebookIcon className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-white transition-colors"><InstagramIcon className="w-3.5 h-3.5" /></a>
                <a href="#" className="hover:text-white transition-colors"><YoutubeIcon className="w-3.5 h-3.5" /></a>
              </div>
            </div>
          </div>
        </div>

        {/* Main Curved White Navbar */}
        <div className="w-full px-4 md:px-8">
          <div className="bg-white rounded-[2.5rem] w-full max-w-[1400px] mx-auto h-[80px] md:h-[84px] shadow-[0_12px_40px_rgb(0,0,0,0.12)] flex items-center justify-between px-6 md:px-10 transition-transform duration-500">
            {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group hover:opacity-90 transition-opacity">
            <img 
              src="/logo.png" 
              alt="SATHWIK Logo" 
              className="h-12 md:h-16 w-auto object-contain transition-all duration-300"
            />
            <div className="flex flex-col justify-center">
              <span className="font-sans font-black text-xl md:text-2xl leading-none tracking-tight text-[#0000B3]">
                Sathwik
              </span>
              <span className="font-sans font-bold text-[9px] md:text-[10px] leading-tight mt-0.5 text-[#009966]">
                Rural And Youth<br />Integrated Association
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <nav 
            className="hidden lg:flex items-center gap-1"
            onMouseLeave={() => setHoveredPath(location.pathname)}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredPath === link.path;
              
              return (
                <Link 
                  key={link.name} 
                  to={link.path}
                  onMouseEnter={() => setHoveredPath(link.path)}
                  className={`relative px-5 py-3 text-[14px] font-bold tracking-wide transition-colors z-10 flex flex-col items-center ${
                    isActive || isHovered ? 'text-[#054E38]' : 'text-gray-700'
                  }`}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.name}
                    {link.name === 'Programs' && <span className="text-[10px] opacity-60">▼</span>}
                  </span>
                  {isActive && (
                    <motion.div
                      layoutId="nav-active-underline"
                      className="absolute bottom-1 w-6 h-[3px] rounded-full bg-[#054E38]"
                      transition={{ type: 'spring', bounce: 0.15, duration: 0.5 }}
                    />
                  )}
                </Link>
              );
            })}
          </nav>

          {/* CTA & Mobile Toggle */}
          <div className="flex items-center gap-4">
            <Link 
              to="/donate" 
              className="hidden sm:flex items-center gap-2 px-8 py-3.5 rounded-full font-bold tracking-wide text-[13px] transition-all duration-300 bg-[#f44336] text-white hover:bg-red-600 hover:shadow-lg hover:-translate-y-0.5"
            >
              <Heart className="w-4 h-4" /> 
              Donate Now
            </Link>
            
            <button 
              className="lg:hidden p-2 text-gray-600 hover:text-[#054E38] transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden absolute top-[100px] left-4 right-4 bg-white rounded-2xl border border-gray-100 shadow-xl py-4 px-4 flex flex-col gap-2 z-50">
          {navLinks.map((link) => (
            <Link 
              key={link.name} 
              to={link.path}
              className="text-sm font-bold text-gray-700 hover:text-[#054E38] px-4 py-3 rounded-xl hover:bg-gray-50 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <ButtonLink to="/donate" variant="secondary" className="w-full flex justify-center gap-2 mt-2 bg-[#f44336] text-white hover:bg-red-600" onClick={() => setIsOpen(false)}>
            <Heart className="w-4 h-4" /> Donate Now
          </ButtonLink>
        </div>
      )}
    </header>
  );
};
