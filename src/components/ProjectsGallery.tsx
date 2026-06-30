import React, { useState } from 'react';
import { ArrowRight, MapPin, Maximize, Calendar, Filter, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Project } from '../types';

import heroVilla from '../assets/images/hero_villa_1782756920080.jpg';
import featuredProjectVilla from '../assets/images/featured_project_villa_1782756934449.jpg';
import interiorLivingRoom from '../assets/images/interior_living_room_1782756945098.jpg';

export default function ProjectsGallery() {
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const projects: Project[] = [
    {
      id: 'ridge-pavilion',
      title: 'Modern Living Redefined',
      category: 'Residential',
      location: 'Aspen, Colorado',
      area: '6,200 SQ FT',
      year: '2025',
      client: 'The Vance Family Trust',
      description: 'An AIA Gold Medal winner, this low-profile home pairs advanced passive climate architecture with raw structural glass facades, integrated natural-source heating loops, and an immersive outdoor reflecting pool.',
      imageUrl: featuredProjectVilla,
    },
    {
      id: 'glass-oasis',
      title: 'The Pavilion House',
      category: 'Residential',
      location: 'Hamptons, New York',
      area: '8,400 SQ FT',
      year: '2024',
      client: 'Vanderbilt Holdings',
      description: 'A striking multi-story luxury concrete-and-timber retreat set in manicured meadows. Built with deep double-cantilever overhangs, full structural steel columns, and an integrated automated glass slider system.',
      imageUrl: heroVilla,
    },
    {
      id: 'nordic-loft',
      title: 'Scandinavian Calm Sanctuary',
      category: 'Interior',
      location: 'Stockholm, Sweden',
      area: '1,800 SQ FT',
      year: '2024',
      client: 'Eklund Estates',
      description: 'A bright, open-plan, minimalist penthouse remodel utilizing tactile white oak cabinetry, custom acoustic slatted panels, limestone island benchtops, and warm integrated smart light temperature curves.',
      imageUrl: interiorLivingRoom,
    },
    {
      id: 'vanguard-hq',
      title: 'Vanguard Glass Tower',
      category: 'Commercial',
      location: 'Chicago, Illinois',
      area: '120,000 SQ FT',
      year: '2025',
      client: 'Vanguard Media Group',
      description: 'A highly responsive, double-skinned office skyscraper utilizing automatic natural wind venting, high-efficiency solar glazing facades, and multiple open-air corporate garden terraces.',
      imageUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'linear-gardens',
      title: 'Ethereal Moss Terraces',
      category: 'Landscape',
      location: 'Kyoto, Japan',
      area: '42,000 SQ FT',
      year: '2023',
      client: 'Zenith Cultural Centre',
      description: 'A contemporary dry-landscape garden integration weaving native pines, geometric structural granite pathways, passive rain filtering reservoirs, and glowing architectural ambient paths.',
      imageUrl: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&q=80&w=800',
    },
    {
      id: 'helix-corp',
      title: 'Helix Bio-Science Labs',
      category: 'Commercial',
      location: 'Seattle, Washington',
      area: '85,000 SQ FT',
      year: '2024',
      client: 'Helix Genomics LLC',
      description: 'A state-of-the-art bio-research laboratory facility designed around an active central atrium. Built using load-bearing mass timber skeletons and smart solar-tracking louvers.',
      imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800',
    }
  ];

  const categories = ['All', 'Residential', 'Commercial', 'Interior', 'Landscape'];

  const filteredProjects = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="py-24 bg-white relative overflow-hidden border-b border-bronze-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-12">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-bronze-500">
            PORTFOLIO
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-charcoal-950">
            Curated Architectural Works
          </h2>
          <div className="h-[2px] w-12 bg-bronze-500/50 mt-1" />
        </div>

        {/* Categories Tab Bar */}
        <div className="flex flex-wrap justify-center items-center gap-2 md:gap-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2.5 rounded-full text-xs font-sans font-bold uppercase tracking-wider transition-all duration-300 cursor-pointer ${
                activeCategory === cat
                  ? 'bg-bronze-500 text-white shadow-lg shadow-bronze-500/20'
                  : 'bg-bronze-50 hover:bg-bronze-100 text-charcoal-700 hover:text-charcoal-900 border border-bronze-200/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((p, index) => (
              <motion.div
                layout
                key={p.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                onClick={() => setSelectedProject(p)}
                className="bg-white border border-bronze-100 rounded-xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500 group cursor-pointer flex flex-col justify-between"
              >
                {/* Photo container */}
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={p.imageUrl}
                    alt={p.title}
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  {/* Category Pill Tag */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-bronze-100 text-bronze-600 font-sans font-bold text-[9px] uppercase tracking-widest px-3 py-1 rounded-full shadow-sm">
                    {p.category}
                  </div>
                </div>

                {/* Content info card */}
                <div className="p-6 text-left flex flex-col gap-2 flex-grow justify-between">
                  <div>
                    <div className="flex justify-between items-start text-xs font-mono text-charcoal-400">
                      <span>{p.location}</span>
                      <span>{p.year}</span>
                    </div>
                    <h3 className="font-display font-bold text-lg text-charcoal-950 mt-1.5 group-hover:text-bronze-500 transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-charcoal-500 font-sans mt-2 line-clamp-2 leading-relaxed">
                      {p.description}
                    </p>
                  </div>

                  <div className="text-[10px] font-sans font-bold tracking-wider text-bronze-600 uppercase mt-4 pt-4 border-t border-bronze-50 flex items-center justify-between group-hover:text-bronze-700">
                    <span>VIEW CASE STUDY</span>
                    <ArrowRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-1" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

      </div>

      {/* Project Lightbox Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div id="gallery-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-4xl bg-white border border-bronze-200 rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 text-white md:text-charcoal-500 hover:text-charcoal-950 transition-colors p-1.5 hover:bg-bronze-100 rounded-full z-10"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Lightbox Left side: Huge photo */}
              <div className="w-full md:w-1/2 relative min-h-[250px] md:min-h-none h-auto">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/50 to-transparent md:hidden" />
              </div>

              {/* Lightbox Right side: Rich details */}
              <div className="w-full md:w-1/2 p-8 md:p-12 overflow-y-auto max-h-[50vh] md:max-h-[90vh] flex flex-col justify-between">
                <div className="text-left">
                  <span className="text-[9px] font-sans font-bold tracking-[0.3em] uppercase text-bronze-500">
                    {selectedProject.category} PORTFOLIO CASE STUDY
                  </span>
                  <h3 className="font-display font-extrabold text-2xl text-charcoal-950 mt-1">
                    {selectedProject.title}
                  </h3>
                  <p className="text-xs text-charcoal-500 font-mono mt-1">{selectedProject.location}</p>

                  <div className="mt-6 space-y-4 text-xs font-sans text-charcoal-600 leading-relaxed">
                    <p>{selectedProject.description}</p>
                    <p>
                      Through a rigorous, detail-oriented blueprint process, we integrated state-of-the-art climate-control strategies and highly premium raw finishes (sand-blasted limestone, sustainably milled larchwood, and raw concrete paneling) to forge an authentic context-specific shelter.
                    </p>
                  </div>

                  {/* Structural Metadata Table */}
                  <div className="mt-8 grid grid-cols-2 gap-4 border-t border-bronze-100 pt-6 text-[11px]">
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">LOCATION</p>
                        <p className="font-display font-bold text-charcoal-950">{selectedProject.location}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Maximize className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">AREA</p>
                        <p className="font-display font-bold text-charcoal-950">{selectedProject.area}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-bronze-500 shrink-0" />
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">YEAR</p>
                        <p className="font-display font-bold text-charcoal-950">{selectedProject.year}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="font-sans font-bold text-[10px] text-bronze-500 border border-bronze-200 px-1.5 py-0.5 rounded">CLIENT</div>
                      <div>
                        <p className="font-bold text-charcoal-400 text-[8px] tracking-wider uppercase">SPONSOR</p>
                        <p className="font-display font-bold text-charcoal-950">{selectedProject.client}</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8 pt-4 border-t border-bronze-100 flex justify-end">
                  <button
                    onClick={() => setSelectedProject(null)}
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
