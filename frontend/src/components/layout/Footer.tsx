
import { Link } from 'react-router-dom';
import { Container } from './Container';
import { siteSettings } from '../../data/settings';
import { MapPin, Phone, Mail, Globe } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-20 pb-10">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & About */}
          <div className="flex flex-col gap-6">
            <Link to="/" className="flex items-center gap-2">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-primary font-serif font-bold text-xl">
                S
              </div>
              <span className="font-serif font-bold text-2xl tracking-wide">SRYIA</span>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Dedicated to uplifting rural communities through youth empowerment, education, and sustainable growth initiatives. Join us in building brighter futures.
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Globe className="w-5 h-5" /></a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"><Globe className="w-5 h-5" /></a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif font-bold text-lg tracking-wide uppercase">Quick Links</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/about" className="text-gray-400 hover:text-white transition-colors">About Us</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Programs & Projects</Link></li>
              <li><Link to="/stories" className="text-gray-400 hover:text-white transition-colors">Stories of Change</Link></li>
              <li><Link to="/gallery" className="text-gray-400 hover:text-white transition-colors">Gallery</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          {/* Our Work */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif font-bold text-lg tracking-wide uppercase">Our Work</h4>
            <ul className="flex flex-col gap-3">
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Education & Literacy</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Healthcare & Wellness</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Youth Empowerment</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Rural Development</Link></li>
              <li><Link to="/programs" className="text-gray-400 hover:text-white transition-colors">Environment</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="flex flex-col gap-6">
            <h4 className="font-serif font-bold text-lg tracking-wide uppercase">Contact</h4>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-gray-400">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm leading-relaxed">{siteSettings.contact.address}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{siteSettings.contact.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-gray-400">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span className="text-sm">{siteSettings.contact.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
          <p>Copyright © {new Date().getFullYear()} SRYIA. All Rights Reserved.</p>
          <div className="flex gap-6">
            <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};
