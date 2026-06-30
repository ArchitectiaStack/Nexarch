import React from 'react';
import { ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';
import heroVilla from '../assets/images/hero_villa_1782756920080.jpg';

interface HeroProps {
  onExploreWork: () => void;
}

export default function Hero({ onExploreWork }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center bg-bronze-50 overflow-hidden"
    >
      {/* Background elegant architectural line overlay */}
      <div className="absolute inset-0 pointer-events-none opacity-[0.03]">
        <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <line x1="10%" y1="0" x2="10%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="30%" y1="0" x2="30%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="50%" y1="0" x2="50%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="70%" y1="0" x2="70%" y2="100%" stroke="currentColor" strokeWidth="1" />
          <line x1="90%" y1="0" x2="90%" y2="100%" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center relative z-10">
        {/* Left Side Content */}
        <div id="hero-content" className="lg:col-span-5 flex flex-col gap-6 text-left">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="flex flex-col gap-1"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-charcoal-950 leading-tight">
              Designing Spaces.
            </h1>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-display font-extrabold tracking-tight text-bronze-500 leading-tight">
              Building Legacies.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-sm md:text-base font-sans text-charcoal-600 leading-relaxed max-w-lg"
          >
            We create innovative, functional, and sustainable architecture that inspires and stands the test of time.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex items-center gap-4 mt-2"
          >
            <button
              onClick={onExploreWork}
              className="bg-bronze-500 hover:bg-bronze-600 text-white font-display font-semibold text-xs tracking-widest uppercase px-8 py-4 rounded shadow-lg shadow-bronze-500/20 hover:shadow-bronze-600/30 transition-all duration-300 flex items-center gap-2 cursor-pointer group"
            >
              VIEW OUR WORK
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        {/* Right Side Image Container */}
        <motion.div
          id="hero-image-wrapper"
          initial={{ opacity: 0, x: 50, scale: 0.98 }}
          animate={{ opacity: 1, x: 0, scale: 1 }}
          transition={{ duration: 0.9, cubicBezier: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 relative h-[350px] md:h-[450px] lg:h-[550px] w-full rounded-2xl overflow-hidden shadow-2xl border border-bronze-100"
        >
          {/* Main Hero Image */}
          <img
            src={heroVilla}
            alt="Minimalist modern luxury villa with reflecting pool"
            className="w-full h-full object-cover transition-transform duration-10000 ease-out hover:scale-105"
            referrerPolicy="no-referrer"
          />

          {/* Ambient overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/20 to-transparent pointer-events-none" />

          {/* Small architectural overlay card */}
          <div className="absolute bottom-6 left-6 right-6 md:right-auto md:max-w-xs bg-white/90 backdrop-blur-md p-4 rounded-xl shadow-lg border border-bronze-100 flex flex-col gap-1">
            <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-bronze-600">
              FEATURED RESIDENCE
            </span>
            <span className="font-display font-bold text-xs text-charcoal-950">
              The Pavilion House, Hamptons
            </span>
            <div className="flex justify-between items-center mt-2 pt-2 border-t border-bronze-100 text-[10px] text-charcoal-500 font-mono">
              <span>EST. 2024</span>
              <span>8,400 SQ FT</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
