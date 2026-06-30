import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize, Calendar, Award, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import featuredProjectVilla from '../assets/images/featured_project_villa_1782756934449.jpg';

export default function FeaturedProject() {
  const [isDetailOpen, setIsDetailOpen] = useState(false);

  return (
    <section id="featured" className="py-24 bg-bronze-50/30 border-b border-bronze-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 rounded-2xl overflow-hidden shadow-2xl border border-bronze-100 bg-white">
          
          {/* Left Column: Image (Takes up 7 cols in large screens) */}
          <div className="lg:col-span-7 h-[300px] md:h-[400px] lg:h-[500px] relative overflow-hidden group">
            <img
              src={featuredProjectVilla}
              alt="Modern Living Redefined - luxury concrete villa with illuminated swimming pool"
              className="w-full h-full object-cover transition-transform duration-700 hover:scale-103"
              referrerPolicy="no-referrer"
            />
            {/* Dark glass overlay */}
            <div className="absolute inset-0 bg-charcoal-950/10 group-hover:bg-charcoal-950/0 transition-colors" />
            
            {/* Award badge */}
            <div className="absolute top-6 left-6 bg-bronze-500 text-white flex items-center gap-2 px-4 py-1.5 rounded-full text-[10px] font-sans font-bold uppercase tracking-wider shadow-md">
              <Award className="h-3.5 w-3.5" />
              <span>AIA Gold Medal Winner 2025</span>
            </div>
          </div>

          {/* Right Column: Spec card (Takes up 5 cols in large screens) */}
          <div className="lg:col-span-5 p-8 md:p-12 lg:p-16 flex flex-col justify-center bg-bronze-50/50 relative">
            <div className="flex flex-col gap-4 text-left">
              <span className="text-[10px] font-sans font-bold uppercase tracking-[0.3em] text-bronze-500">
                FEATURED PROJECT
              </span>
              <h2 className="text-3xl font-display font-extrabold tracking-tight text-charcoal-950">
                Modern Living Redefined
              </h2>
              <div className="h-[2px] w-12 bg-bronze-500/50 my-1" />
              <p className="text-xs md:text-sm font-sans text-charcoal-600 leading-relaxed">
                A seamless blend of modern architecture and natural surroundings. Designed for comfort, built for life.
              </p>
              
              {/* Highlight architectural parameters */}
              <div className="grid grid-cols-2 gap-4 my-4 pt-4 border-t border-bronze-200 text-xs">
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-sans font-bold text-bronze-400 uppercase tracking-wider">LOCATION</span>
                  <span className="font-display font-bold text-charcoal-950">Aspen, Colorado</span>
                </div>
                <div className="flex flex-col gap-1">
                  <span className="text-[9px] font-sans font-bold text-bronze-400 uppercase tracking-wider">AREA</span>
                  <span className="font-display font-bold text-charcoal-950">6,200 SQ FT</span>
                </div>
              </div>

              <button
                onClick={() => setIsDetailOpen(true)}
                className="bg-bronze-500 hover:bg-bronze-600 text-white font-display font-semibold text-xs tracking-widest uppercase px-6 py-3.5 rounded mt-2 shadow-lg shadow-bronze-500/15 hover:shadow-bronze-600/25 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer group"
              >
                EXPLORE PROJECT
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </button>
            </div>
          </div>

        </div>
      </div>

      {/* Featured Project Detail Lightbox Modal */}
      <AnimatePresence>
        {isDetailOpen && (
          <div id="project-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsDetailOpen(false)}
              className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-4xl bg-white border border-bronze-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setIsDetailOpen(false)}
                className="absolute top-4 right-4 text-white md:text-charcoal-500 hover:text-charcoal-950 transition-colors p-1.5 hover:bg-bronze-100 rounded-full z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Lightbox Left side: Huge photo */}
              <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-none h-auto">
                <img
                  src={featuredProjectVilla}
                  alt="Modern villa detail"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent md:hidden" />
              </div>

              {/* Lightbox Right side: Rich details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[50vh] md:max-h-[90vh] flex flex-col justify-between">
                <div className="text-left">
                  <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-bronze-500">
                    RESIDENTIAL SHOWCASE
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-charcoal-950 mt-1">
                    Modern Living Redefined
                  </h3>
                  <p className="text-xs text-charcoal-500 font-mono mt-1">Aspen Wilderness Compound</p>

                  <div className="mt-6 space-y-4 text-xs font-sans text-charcoal-600 leading-relaxed">
                    <p>
                      Nestled inside the serene forests of Aspen, Colorado, "Modern Living Redefined" is a striking exercise in modern minimalist architectural restraint and environmental symbiosis.
                    </p>
                    <p>
                      The home features self-shading overhangs, custom glass thermal glazing, and locally sourced gray concrete and charred pine cladding. A structural glass spine runs through the center of the villa, drawing passive sunlight into every lower-level sanctuary.
                    </p>
                    <p>
                      The integrated heated outdoor lap pool reflects the warm ambient timber accents of the main cantilevered pavilion, turning dusk into a cinematic visual sequence.
                    </p>
                  </div>

                  {/* Structural Metadata Table */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-bronze-100 pt-6 text-[11px]">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">LOCATION</p>
                        <p className="font-display font-bold text-charcoal-950">Aspen, Colorado</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">AREA</p>
                        <p className="font-display font-bold text-charcoal-950">6,200 SQ FT</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">TIMELINE</p>
                        <p className="font-display font-bold text-charcoal-950">Completed Feb 2025</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Award className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">HONOR</p>
                        <p className="font-display font-bold text-charcoal-950">AIA Gold Winner</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-bronze-100 flex justify-end">
                  <button
                    onClick={() => setIsDetailOpen(false)}
                    className="bg-charcoal-950 text-white font-sans font-bold text-[10px] tracking-wider uppercase px-5 py-2.5 rounded hover:bg-bronze-500 transition-colors cursor-pointer"
                  >
                    CLOSE DETAILS
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
