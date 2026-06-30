import React from 'react';
import { Phone, Mail, MapPin, Clock, Instagram, Facebook, Linkedin, Pointer, ArrowUpRight } from 'lucide-react';
import { motion } from 'motion/react';
import Logo from './Logo';
import interiorLivingRoom from '../assets/images/interior_living_room_1782756945098.jpg';

export default function Footer() {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
    }
  };

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer id="footer" className="bg-charcoal-950 text-white pt-20 pb-10 border-t border-charcoal-800 relative overflow-hidden">
      {/* Subtle line background overlay */}
      <div className="absolute top-0 left-0 right-0 h-[1.5px] bg-gradient-to-r from-transparent via-bronze-500/30 to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 relative z-10 text-left">
        
        {/* Brand description column (Takes up 4 cols) */}
        <div className="lg:col-span-4 flex flex-col gap-6">
          <Logo light={true} size="md" onClick={handleScrollToTop} />
          
          <p className="text-xs font-sans text-charcoal-400 leading-relaxed max-w-sm">
            We are a passionate team of architects and designers creating spaces that inspire and elevate everyday living.
          </p>

          {/* Social circle links */}
          <div id="socials-container" className="flex items-center gap-3">
            {[
              { icon: <Instagram className="h-4 w-4" />, url: 'https://instagram.com/nexarch' },
              { icon: <Facebook className="h-4 w-4" />, url: 'https://facebook.com/nexarch' },
              { icon: <Linkedin className="h-4 w-4" />, url: 'https://linkedin.com/company/nexarch' },
              { icon: <Pointer className="h-4 w-4 rotate-45" />, url: 'https://pinterest.com/nexarch' },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.url}
                target="_blank"
                rel="noreferrer"
                className="h-8 w-8 rounded-full border border-charcoal-700 hover:border-bronze-400 hover:text-bronze-400 flex items-center justify-center transition-all duration-300 hover:-translate-y-0.5"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links Column (Takes up 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-xs font-sans font-bold text-bronze-400 uppercase tracking-[0.2em] border-b border-charcoal-800 pb-2">
            Quick Links
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs text-charcoal-400">
            {[
              { name: 'Home', target: 'hero' },
              { name: 'About Us', target: 'approach' },
              { name: 'Projects', target: 'projects' },
              { name: 'Services', target: 'services' },
              { name: 'Our Process', target: 'process' },
            ].map((link) => (
              <a
                key={link.name}
                href={`#${link.target}`}
                onClick={(e) => handleScrollToSection(e, link.target)}
                className="hover:text-bronze-300 transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Services Column (Takes up 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-xs font-sans font-bold text-bronze-400 uppercase tracking-[0.2em] border-b border-charcoal-800 pb-2">
            Services
          </h4>
          <nav className="flex flex-col gap-2.5 text-xs text-charcoal-400">
            {[
              { name: 'Residential Architecture', target: 'services' },
              { name: 'Commercial Architecture', target: 'services' },
              { name: 'Interior Design', target: 'services' },
              { name: 'Landscape Design', target: 'services' },
              { name: 'Renovation', target: 'services' },
            ].map((serv) => (
              <a
                key={serv.name}
                href={`#${serv.target}`}
                onClick={(e) => handleScrollToSection(e, serv.target)}
                className="hover:text-bronze-300 transition-colors duration-200"
              >
                {serv.name}
              </a>
            ))}
          </nav>
        </div>

        {/* Contact Info Column (Takes up 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-xs font-sans font-bold text-bronze-400 uppercase tracking-[0.2em] border-b border-charcoal-800 pb-2">
            Contact Us
          </h4>
          <div className="flex flex-col gap-4 text-xs text-charcoal-400">
            <div className="flex items-start gap-3">
              <Phone className="h-4 w-4 text-bronze-500 shrink-0 mt-0.5" />
              <span>+1 (123) 456-7890</span>
            </div>
            <div className="flex items-start gap-3">
              <Mail className="h-4 w-4 text-bronze-500 shrink-0 mt-0.5" />
              <span className="break-all">hello@nexarch.com</span>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="h-4 w-4 text-bronze-500 shrink-0 mt-0.5" />
              <span className="leading-relaxed">123 Design Street, New York, NY 10001</span>
            </div>
            <div className="flex items-start gap-3">
              <Clock className="h-4 w-4 text-bronze-500 shrink-0 mt-0.5" />
              <span>Mon - Fri: 9AM - 6PM</span>
            </div>
          </div>
        </div>

        {/* Interior Render Image Column (Takes up 2 cols) */}
        <div className="lg:col-span-2 flex flex-col gap-5">
          <h4 className="text-xs font-sans font-bold text-bronze-400 uppercase tracking-[0.2em] border-b border-charcoal-800 pb-2">
            Interior Work
          </h4>
          <div className="relative h-24 w-full rounded-lg overflow-hidden border border-charcoal-800 shadow-md group">
            <img
              src={interiorLivingRoom}
              alt="Scandinavian minimalist design"
              className="w-full h-full object-cover transition-all duration-500 ease-out group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            {/* Pop/Hover badge */}
            <div className="absolute inset-0 bg-charcoal-950/20 group-hover:bg-charcoal-950/10 flex items-center justify-center transition-colors pointer-events-none">
              <ArrowUpRight className="h-5 w-5 text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-1 group-hover:translate-y-0 duration-300" />
            </div>
          </div>
          <span className="text-[10px] text-charcoal-400 font-mono tracking-wide italic">Stockholm Penthouse Render</span>
        </div>

      </div>

      {/* Footer Bottom copyright container */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 pt-8 border-t border-charcoal-900/60 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-[10px] font-sans text-charcoal-500">
          © {new Date().getFullYear()} NEXARCH Architects. All Rights Reserved.
        </p>
        <div className="flex items-center gap-6 text-[10px] font-sans text-charcoal-500">
          <a href="#hero" className="hover:text-bronze-400 transition-colors">Privacy Policy</a>
          <a href="#hero" className="hover:text-bronze-400 transition-colors">Terms of Service</a>
          <button
            onClick={handleScrollToTop}
            className="hover:text-bronze-400 transition-colors flex items-center gap-1 font-semibold"
          >
            Back to Top <span className="text-[11px]">↑</span>
          </button>
        </div>
      </div>
    </footer>
  );
}
