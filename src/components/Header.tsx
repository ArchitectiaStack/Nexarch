import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import Logo from './Logo';

interface HeaderProps {
  onOpenContact: () => void;
}

export default function Header({ onOpenContact }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section based on scroll position
      const sections = ['hero', 'approach', 'projects', 'featured', 'process', 'footer'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, targetId: string) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      const offset = 80; // height of fixed header
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

  const navLinks = [
    { label: 'HOME', targetId: 'hero', key: 'home' },
    { label: 'ABOUT', targetId: 'approach', key: 'approach' },
    { label: 'PROJECTS', targetId: 'projects', key: 'projects' },
    { label: 'SERVICES', targetId: 'services', key: 'services' },
    { label: 'PROCESS', targetId: 'process', key: 'process' },
    { label: 'CONTACT', targetId: 'footer', key: 'footer' },
  ];

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-bronze-100/50 py-3'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Logo size="md" light={false} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} />

        {/* Desktop Navigation */}
        <nav id="desktop-nav" className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.key}
              href={`#${link.targetId}`}
              onClick={(e) => handleNavClick(e, link.targetId)}
              className={`text-xs font-sans font-semibold tracking-widest transition-colors duration-300 hover:text-bronze-500 relative py-1 ${
                activeSection === link.targetId ? 'text-bronze-500' : 'text-charcoal-700'
              }`}
            >
              {link.label}
              {activeSection === link.targetId && (
                <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-bronze-500 rounded" />
              )}
            </a>
          ))}
        </nav>

        {/* Get in Touch CTA */}
        <div className="hidden lg:flex items-center">
          <button
            onClick={onOpenContact}
            className="bg-charcoal-950 text-white font-sans font-bold text-xs tracking-widest uppercase px-6 py-3 rounded hover:bg-bronze-500 hover:shadow-lg hover:shadow-bronze-500/20 transition-all duration-300 cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-charcoal-800 hover:text-bronze-500 transition-colors p-1"
        >
          {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Drawer */}
      {isMobileMenuOpen && (
        <div id="mobile-nav-drawer" className="lg:hidden absolute top-full left-0 right-0 bg-white border-b border-bronze-100 shadow-xl px-6 py-8 flex flex-col gap-6 animate-fade-in">
          <div className="flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.key}
                href={`#${link.targetId}`}
                onClick={(e) => handleNavClick(e, link.targetId)}
                className={`text-sm font-sans font-bold tracking-widest transition-colors duration-300 hover:text-bronze-500 py-2 border-b border-bronze-50/50 ${
                  activeSection === link.targetId ? 'text-bronze-500' : 'text-charcoal-700'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>
          <button
            onClick={() => {
              setIsMobileMenuOpen(false);
              onOpenContact();
            }}
            className="w-full bg-charcoal-950 text-white text-center font-sans font-bold text-xs tracking-widest uppercase py-3.5 rounded hover:bg-bronze-500 transition-colors cursor-pointer"
          >
            GET IN TOUCH
          </button>
        </div>
      )}
    </header>
  );
}
