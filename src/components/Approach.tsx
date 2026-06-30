import React, { useState } from 'react';
import { Lightbulb, Compass, BrickWall, Leaf, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ApproachItem } from '../types';

export default function Approach() {
  const [activeItem, setActiveItem] = useState<ApproachItem | null>(null);

  const approachItems: ApproachItem[] = [
    {
      id: 'thoughtful-design',
      title: 'Thoughtful Design',
      description: 'We blend creativity and functionality to craft spaces tailored to your vision.',
      iconName: 'lightbulb',
    },
    {
      id: 'smart-planning',
      title: 'Smart Planning',
      description: 'Every detail is carefully planned for efficiency and purpose.',
      iconName: 'compass',
    },
    {
      id: 'quality-construction',
      title: 'Quality Construction',
      description: 'We ensure the highest standards in materials and craftsmanship.',
      iconName: 'brick-wall',
    },
    {
      id: 'timeless-spaces',
      title: 'Timeless Spaces',
      description: 'Our designs are built to inspire today and remain relevant for generations.',
      iconName: 'leaf',
    },
  ];

  // Specific expanded details for each tenet to enrich interactivity
  const detailsMap: Record<string, string[]> = {
    'thoughtful-design': [
      'Bespoke spatial mapping customized to the physical rituals and flow of your daily lifestyle.',
      'Advanced bioclimatic architectural positioning to optimize year-round solar warming and wind-cooling.',
      'Curated material palette selection matching emotional warmth with raw architectural resilience.',
    ],
    'smart-planning': [
      'Interactive 3D building information modeling (BIM) to map structural systems and mock environments.',
      'Comprehensive zoning and environmental compliance reporting integrated directly into pre-render stages.',
      'Strategic structural cost engineering keeping bespoke aesthetics within predictable budgets.',
    ],
    'quality-construction': [
      'Direct collaboration with multi-generational master craftsmen, masons, and custom carpenters.',
      'Strict quality checks with physical stress testing and material strength verification on site.',
      'Sustainable and certified supply lines verifying the sourcing of carbon-neutral materials.',
    ],
    'timeless-spaces': [
      'Adaptive structure shells designed to allow interior repurposing as the owner’s needs evolve over decades.',
      'Self-healing, low-maintenance protective coats that build beautiful natural patinas with age.',
      'Low energy-envelope systems targeting LEED gold parameters to safeguard ecological futures.',
    ],
  };

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'lightbulb':
        return <Lightbulb className="h-6 w-6 text-bronze-500" />;
      case 'compass':
        return <Compass className="h-6 w-6 text-bronze-500" />;
      case 'brick-wall':
        return <BrickWall className="h-6 w-6 text-bronze-500" />;
      case 'leaf':
        return <Leaf className="h-6 w-6 text-bronze-500" />;
      default:
        return <Lightbulb className="h-6 w-6 text-bronze-500" />;
    }
  };

  return (
    <section id="approach" className="py-24 bg-white relative overflow-hidden border-b border-bronze-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-bronze-500">
            OUR APPROACH
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-charcoal-950">
            Design. Plan. Build. Perfect.
          </h2>
          <div className="h-[2px] w-12 bg-bronze-500/50 mt-1" />
        </div>

        {/* Approach Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {approachItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              onClick={() => setActiveItem(item)}
              className="bg-bronze-50/50 hover:bg-bronze-50 border border-bronze-100 hover:border-bronze-300 p-8 rounded-xl transition-all duration-300 group cursor-pointer relative overflow-hidden flex flex-col justify-between min-h-[220px]"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-[3px] bg-transparent group-hover:bg-bronze-500 transition-colors" />

              <div className="flex flex-col gap-4">
                <div className="bg-white border border-bronze-200/50 p-3 rounded-lg w-fit group-hover:bg-bronze-100 transition-colors">
                  {getIcon(item.iconName)}
                </div>
                <h3 className="font-display font-bold text-base text-charcoal-950 group-hover:text-bronze-600 transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs font-sans text-charcoal-600 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="text-[10px] font-sans font-semibold tracking-wider text-bronze-600 uppercase mt-4 flex items-center gap-1 group-hover:gap-2 transition-all">
                EXPLORE DETAIL <span className="text-sm">→</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Tenet Detail Lightbox Modal */}
      <AnimatePresence>
        {activeItem && (
          <div id="approach-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveItem(null)}
              className="absolute inset-0 bg-charcoal-950/70 backdrop-blur-sm"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl bg-bronze-50 border border-bronze-200 rounded-xl p-8 shadow-2xl"
            >
              <button
                onClick={() => setActiveItem(null)}
                className="absolute top-4 right-4 text-charcoal-500 hover:text-charcoal-950 transition-colors p-1.5 hover:bg-bronze-100 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-3 mb-6 pb-4 border-b border-bronze-200">
                <div className="bg-white border border-bronze-200 p-3 rounded-lg">
                  {getIcon(activeItem.iconName)}
                </div>
                <div>
                  <span className="text-[8px] font-sans font-bold tracking-[0.3em] uppercase text-bronze-500">
                    NEXARCH PHILOSOPHY
                  </span>
                  <h3 className="font-display font-bold text-xl text-charcoal-950 mt-0.5">
                    {activeItem.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-charcoal-600 font-sans italic leading-relaxed mb-6">
                "{activeItem.description}"
              </p>

              <div>
                <h4 className="text-[10px] font-sans font-bold text-bronze-600 tracking-wider uppercase mb-3">
                  OUR METHODOLOGICAL FRAMEWORK:
                </h4>
                <ul className="space-y-3">
                  {(detailsMap[activeItem.id] || []).map((detail, idx) => (
                    <li key={idx} className="flex gap-3 text-xs font-sans text-charcoal-700 leading-relaxed">
                      <span className="text-bronze-500 font-semibold font-mono">0{idx + 1}.</span>
                      <span>{detail}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-4 border-t border-bronze-200 flex justify-end">
                <button
                  onClick={() => setActiveItem(null)}
                  className="bg-charcoal-950 text-white font-sans font-bold text-[10px] tracking-wider uppercase px-5 py-2.5 rounded hover:bg-bronze-500 transition-colors cursor-pointer"
                >
                  CLOSE CORE TENET
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
