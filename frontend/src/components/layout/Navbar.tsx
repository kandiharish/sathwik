import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, Mail, MapPin, Heart } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const [hoveredPath, setHoveredPath] = useState(location.pathname);

  useEffect(() => {
    setHoveredPath(location.pathname);
  }, [location.pathname]);

  // Handle scroll to transform navbar
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { 
      name: 'Programs', 
      path: '/programs', 
      hasDropdown: true,
      dropdownItems: [
        { name: 'Education & Infrastructure', path: '/programs' },
        { name: 'Healthcare & Wellness', path: '/programs' },
        { name: 'Youth & Women Empowerment', path: '/programs' },
        { name: 'Water, Sanitation & Hygiene', path: '/programs' },
        { name: 'Community Development', path: '/programs' }
      ]
    },
    { name: 'Projects', path: '/projects' },
    { name: 'Impact', path: '/impact' },
    { name: 'Stories', path: '/stories' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="fixed top-0 w-full z-50 flex flex-col">
      
      {/* TOP BAR - Smoothly shrinks to 0 height on scroll */}
      <div 
        className="bg-[#054E38] text-white w-full hidden md:flex items-center transition-all duration-300 ease-out overflow-hidden origin-top"
        style={{ height: isScrolled ? '0px' : '40px', opacity: isScrolled ? 0 : 1 }}
      >
        <div className="max-w-[1400px] w-full mx-auto px-6 lg:px-10 flex justify-between items-center text-xs font-medium">
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer">
              <Phone className="w-3.5 h-3.5" />
              <span>+91 98765 43210</span>
            </div>
            <div className="flex items-center gap-2 hover:text-orange-400 transition-colors cursor-pointer">
              <Mail className="w-3.5 h-3.5" />
              <span>info@sathwik.org</span>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <MapPin className="w-3.5 h-3.5" />
              <span>Hyderabad, India</span>
            </div>
            <div className="flex items-center gap-4">
              <a href="#" className="hover:text-orange-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"/></svg>
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a href="#" className="hover:text-orange-400 transition-colors">
                <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* MAIN NAVBAR CONTAINER */}
      <div className={`w-full bg-white transition-all duration-300 ease-out ${isScrolled ? 'shadow-md rounded-none' : 'shadow-[0_4px_20px_rgb(0,0,0,0.05)] rounded-b-[2rem]'}`}>
        
        {/* SOLID BAR */}
        <div className="w-full max-w-[1500px] mx-auto flex items-center justify-between h-[76px] px-4 md:px-8">
          
          {/* LEFT: Logo */}
          <Link to="/" className={`flex items-center gap-3 group hover:opacity-90 transition-opacity ${isScrolled ? '' : 'pl-2'}`}>
            <img 
              src="/logo.png" 
              alt="SATHWIK Logo" 
              className="h-14 md:h-16 lg:h-[68px] w-auto object-contain py-1"
            />
            <div className="flex flex-col justify-center">
              <span className="font-sans font-black text-[18px] md:text-xl lg:text-[22px] leading-none tracking-tight text-[#0000B3]">
                Sathwik
              </span>
              <span className="font-sans font-bold text-[8px] md:text-[9px] leading-tight mt-0.5 text-[#009966]">
                Rural And Youth<br />Integrated Association
              </span>
            </div>
          </Link>

          {/* MIDDLE: Links */}
          <nav 
            className="hidden lg:flex items-center justify-center flex-1 mx-4"
            onMouseLeave={() => setHoveredPath(location.pathname)}
          >
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              const isHovered = hoveredPath === link.path;
              
              return (
                <div 
                  key={link.name}
                  className="relative group h-full flex items-center"
                  onMouseEnter={() => setHoveredPath(link.path)}
                >
                  <Link 
                    to={link.path}
                    className={`relative px-4 xl:px-5 py-6 text-[13px] xl:text-[14px] font-bold tracking-wide transition-colors z-10 flex flex-col items-center ${
                      isActive || isHovered ? 'text-[#054E38]' : 'text-gray-700'
                    }`}
                  >
                    <span className="relative z-10 flex items-center gap-1">
                      {link.name}
                      {link.hasDropdown && (
                        <svg className={`w-2.5 h-2.5 ml-1 transition-transform duration-300 ${isHovered ? 'rotate-180' : ''}`} fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                        </svg>
                      )}
                    </span>
                  </Link>

                  {/* Dropdown Menu */}
                  {link.hasDropdown && link.dropdownItems && (
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, y: 10, scale: 0.95 }}
                          animate={{ opacity: 1, y: 0, scale: 1 }}
                          exit={{ opacity: 0, y: 10, scale: 0.95 }}
                          transition={{ duration: 0.2, ease: "easeOut" }}
                          className="absolute top-[100%] left-0 min-w-[260px] bg-white rounded-2xl shadow-[0_20px_40px_rgba(0,0,0,0.1)] border border-gray-100 overflow-hidden py-3 z-50 flex flex-col origin-top-left"
                        >
                          {link.dropdownItems.map((item, idx) => (
                            <Link
                              key={idx}
                              to={item.path}
                              className="px-6 py-3 text-[13px] font-bold text-gray-700 hover:text-[#054E38] hover:bg-gray-50/80 transition-colors flex items-center justify-between group/item"
                              onClick={() => setHoveredPath('')}
                            >
                              {item.name}
                              <svg className="w-3.5 h-3.5 opacity-0 -translate-x-2 group-hover/item:opacity-100 group-hover/item:translate-x-0 transition-all duration-300 text-[#054E38]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                              </svg>
                            </Link>
                          ))}
                        </motion.div>
                      )}
                    </AnimatePresence>
                  )}
                </div>
              );
            })}
          </nav>

          <style>{`
            @keyframes glassy-shine {
              0% { left: -100%; opacity: 0; }
              20% { opacity: 1; }
              100% { left: 200%; opacity: 0; }
            }
            .btn-glassy-click {
              position: relative;
              overflow: hidden;
            }
            .btn-glassy-click:active::after {
              content: '';
              position: absolute;
              top: 0;
              left: -100%;
              width: 100%;
              height: 100%;
              background: linear-gradient(to right, rgba(255,255,255,0) 0%, rgba(255,255,255,0.6) 50%, rgba(255,255,255,0) 100%);
              transform: skewX(-25deg);
              animation: glassy-shine 0.4s ease-out forwards;
              pointer-events: none;
            }
          `}</style>

          {/* RIGHT: Donate Button & Mobile Toggle */}
          <div className="flex items-center gap-3">
            <Link 
              to="/donate" 
              className="btn-glassy-click hidden md:flex items-center gap-2 bg-[#F43F5E] hover:bg-[#E11D48] text-white px-6 py-3 rounded-full font-bold text-sm transition-all shadow-[0_4px_14px_rgba(244,63,94,0.39)] hover:shadow-[0_6px_20px_rgba(244,63,94,0.23)] active:scale-95"
            >
              <Heart className="w-4 h-4 fill-white relative z-10" />
              <span className="relative z-10">Donate Now</span>
            </Link>

            {/* Mobile Toggle */}
            <button 
              className="lg:hidden p-2 text-gray-800 hover:text-[#054E38] transition-colors focus:outline-none"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="lg:hidden absolute top-[100%] left-0 w-full bg-white shadow-xl border-t border-gray-100 flex flex-col z-50"
          >
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.path}
                className="text-sm font-bold text-gray-700 hover:text-[#054E38] hover:bg-gray-50 px-6 py-4 border-b border-gray-50 transition-colors flex items-center justify-between"
                onClick={() => setIsOpen(false)}
              >
                {link.name}
                {link.hasDropdown && <span className="text-[10px] opacity-60">▼</span>}
              </Link>
            ))}
            <div className="p-6">
              <Link 
                to="/donate" 
                className="flex items-center justify-center gap-2 bg-[#F43F5E] text-white px-6 py-3.5 rounded-full font-bold text-sm w-full shadow-lg shadow-rose-500/30"
                onClick={() => setIsOpen(false)}
              >
                <Heart className="w-4 h-4 fill-white" />
                Donate Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
