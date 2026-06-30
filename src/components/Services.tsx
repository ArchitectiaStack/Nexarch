import React, { useState } from 'react';
import { Home, Building2, Paintbrush, Trees, Hammer, ArrowRight, CheckCircle2 } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface Service {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  iconName: string;
  deliverables: string[];
}

export default function Services() {
  const [activeService, setActiveService] = useState<string | null>('residential');

  const services: Service[] = [
    {
      id: 'residential',
      title: 'Residential Architecture',
      subtitle: 'Bespoke Private Sanctuaries',
      description: 'We construct premium, high-contrast modern estates, luxury cabins, and multi-family units that integrate structural wood, natural concrete, and passive thermal control panels.',
      iconName: 'home',
      deliverables: [
        'Site evaluation & bioclimatic solar analysis',
        'High-resolution photorealistic 3D VR mockups',
        'Structural, engineering & material specification plans',
        'Direct subcontractor coordination & timber sourcing',
      ],
    },
    {
      id: 'commercial',
      title: 'Commercial Architecture',
      subtitle: 'High-Performance Modern Workspaces',
      description: 'Redefining programmatic workspace flow. We build high-efficiency office layouts, retail flagships, and wellness centers using green mass timber shells and responsive glass envelopes.',
      iconName: 'commercial',
      deliverables: [
        'Advanced space optimization & workflow planning',
        'Acoustic and thermal shell analysis',
        'Double-skinned environmental breathing facades',
        'LEED carbon-neutral gold parameter certification',
      ],
    },
    {
      id: 'interior',
      title: 'Interior Architecture',
      subtitle: 'Tactile Immersive Journeys',
      description: 'Integrating warm Scandinavian minimalism with deep bronze accents. We specify bespoke furniture programs, local stone benchtops, and smart circadian lighting sequences.',
      iconName: 'interior',
      deliverables: [
        'Spatial layout mapping & physical ritual analysis',
        'Bespoke cabinetry & integrated millwork drawings',
        'Texture, lighting & acoustic balancing catalogs',
        'Curation and supply coordination of luxury fixtures',
      ],
    },
    {
      id: 'landscape',
      title: 'Landscape Architecture',
      subtitle: 'Symbiotic Outdoor Living Worlds',
      description: 'The structures do not end at the glass thresholds; they merge with local ecosystems. We combine xeriscaping, living rain filtering streams, and concrete terraces to frame assets perfectly.',
      iconName: 'landscape',
      deliverables: [
        'Topographic modeling & soil hydrology analysis',
        'Native flora pairing & bio-filtration pools',
        'Custom structural pergolas, fire bowls & outdoor light templates',
        'Eco-responsible resource-smart irrigation mapping',
      ],
    },
    {
      id: 'renovation',
      title: 'Renovation & Adaptation',
      subtitle: 'Historical Respect & High-Tech Injection',
      description: 'Respecting old-world shells while injecting new thermal panels, floorplans, and modern steel spines to adapt historical frames for another century of seamless living.',
      iconName: 'renovation',
      deliverables: [
        'Historical shell integrity assessment',
        'Internal steel frame reinforcement modeling',
        'High-efficiency thermal glazing replacement plans',
        'Dynamic open-concept conversions',
      ],
    },
  ];

  const getIcon = (iconName: string, active: boolean) => {
    const classes = `h-6 w-6 transition-colors duration-300 ${active ? 'text-white' : 'text-bronze-500'}`;
    switch (iconName) {
      case 'home':
        return <Home className={classes} />;
      case 'commercial':
        return <Building2 className={classes} />;
      case 'interior':
        return <Paintbrush className={classes} />;
      case 'landscape':
        return <Trees className={classes} />;
      case 'renovation':
        return <Hammer className={classes} />;
      default:
        return <Home className={classes} />;
    }
  };

  const selectedService = services.find((s) => s.id === activeService) || services[0];

  return (
    <section id="services" className="py-24 bg-bronze-50/20 relative overflow-hidden border-b border-bronze-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-16">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-bronze-500">
            OUR SPECIALIZATIONS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-charcoal-950">
            Bespoke Architectural Programs
          </h2>
          <div className="h-[2px] w-12 bg-bronze-500/50 mt-1" />
        </div>

        {/* Services Split Bento Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Left Column: Interactive Menu (Takes 5 cols) */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            {services.map((service) => {
              const isActive = activeService === service.id;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveService(service.id)}
                  className={`w-full text-left p-6 rounded-xl border transition-all duration-300 flex items-center gap-5 cursor-pointer group ${
                    isActive
                      ? 'bg-charcoal-950 border-charcoal-950 text-white shadow-xl shadow-charcoal-950/15'
                      : 'bg-white border-bronze-100 hover:border-bronze-300 text-charcoal-800'
                  }`}
                >
                  <div
                    className={`p-3 rounded-lg border transition-colors ${
                      isActive
                        ? 'bg-bronze-500 border-bronze-400/30'
                        : 'bg-bronze-50 border-bronze-100 group-hover:bg-bronze-100'
                    }`}
                  >
                    {getIcon(service.iconName, isActive)}
                  </div>
                  <div className="flex-grow">
                    <h3 className="font-display font-bold text-sm tracking-tight">
                      {service.title}
                    </h3>
                    <p
                      className={`text-[11px] font-sans mt-0.5 ${
                        isActive ? 'text-bronze-300' : 'text-charcoal-400'
                      }`}
                    >
                      {service.subtitle}
                    </p>
                  </div>
                  <ArrowRight
                    className={`h-4 w-4 transition-transform duration-300 ${
                      isActive ? 'text-bronze-400 translate-x-1' : 'text-charcoal-300 group-hover:translate-x-1'
                    }`}
                  />
                </button>
              );
            })}
          </div>

          {/* Right Column: Display Card (Takes 7 cols) */}
          <div className="lg:col-span-7 bg-white rounded-2xl border border-bronze-100 p-8 md:p-12 shadow-xl flex flex-col justify-between text-left relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-bronze-500/5 rounded-full blur-3xl -mr-16 -mt-16 pointer-events-none" />
            
            <AnimatePresence mode="wait">
              <motion.div
                key={selectedService.id}
                initial={{ opacity: 0, x: 15 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -15 }}
                transition={{ duration: 0.3 }}
                className="flex flex-col gap-6"
              >
                <div>
                  <span className="text-[9px] font-sans font-bold uppercase tracking-widest text-bronze-500 bg-bronze-50 px-2.5 py-1 rounded-full border border-bronze-100">
                    PROGRAM FOCUS
                  </span>
                  <h3 className="text-2xl font-display font-extrabold text-charcoal-950 mt-3 tracking-tight">
                    {selectedService.title}
                  </h3>
                  <p className="text-xs font-sans text-charcoal-400 font-mono mt-1 italic">
                    {selectedService.subtitle}
                  </p>
                </div>

                <p className="text-xs md:text-sm font-sans text-charcoal-600 leading-relaxed">
                  {selectedService.description}
                </p>

                {/* Scope of Deliverables */}
                <div>
                  <h4 className="text-[10px] font-sans font-bold text-bronze-600 tracking-wider uppercase mb-3.5 border-b border-bronze-100 pb-2">
                    SCOPE & DELIVERABLES:
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                    {selectedService.deliverables.map((item, index) => (
                      <div key={index} className="flex gap-2.5 items-start">
                        <CheckCircle2 className="h-4 w-4 text-bronze-500 shrink-0 mt-0.5" />
                        <span className="text-xs font-sans text-charcoal-700 leading-normal">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            <div className="mt-8 pt-6 border-t border-bronze-100 flex items-center justify-between text-xs text-charcoal-400">
              <span className="font-mono">PROGRAM CODE: NX-{selectedService.id.toUpperCase()}</span>
              <span className="font-sans font-semibold text-bronze-500 hover:text-bronze-600 cursor-pointer flex items-center gap-1">
                Download Technical Brief <span className="text-sm">↓</span>
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
