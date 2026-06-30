import React, { useState } from 'react';
import { Users, PenTool, Compass, Hammer, Home, Headphones, X, CheckSquare } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ProcessStep } from '../types';

export default function Process() {
  const [activeStep, setActiveStep] = useState<ProcessStep | null>(null);

  const steps: ProcessStep[] = [
    {
      stepNumber: '01',
      title: 'Consultation',
      description: 'Understanding your needs and vision.',
      detail: 'The foundation of every legacy. We host immersive discovery sessions to map site parameters, ecological micro-climates, personal rituals, and long-term programmatic goals.',
      iconName: 'users',
    },
    {
      stepNumber: '02',
      title: 'Concept Design',
      description: 'Creating initial ideas and design concepts.',
      detail: 'Our design council cooks up raw physical volumes, custom structural orientation drafts, and ambient light temperature models, translating your vision into 3D renders.',
      iconName: 'concept',
    },
    {
      stepNumber: '03',
      title: 'Design Development',
      description: 'Refining the design with every detail.',
      detail: 'Fleshing out the structural matrix. We draft comprehensive Building Information Modeling (BIM) programs, specify natural custom finishes, and refine engineering details.',
      iconName: 'development',
    },
    {
      stepNumber: '04',
      title: 'Construction',
      description: 'Bringing the design to life with precision.',
      detail: 'Partnering with certified master masons and custom steelworkers. We perform structural checks, material density reviews, and coordinate on-site execution perfectly.',
      iconName: 'construction',
    },
    {
      stepNumber: '05',
      title: 'Project Handover',
      description: 'Delivering a space ready to enjoy.',
      detail: 'Delivering your bespoke sanctuary completely turn-key. We coordinate systems validation, provide physical materiality manuals, and celebrate the birth of your legacy.',
      iconName: 'handover',
    },
    {
      stepNumber: '06',
      title: 'Ongoing Support',
      description: "We're here for you, even after completion.",
      detail: 'A long-term architectural partnership. We perform seasonal insulation inspections, assist with landscaping adaptations, and advise on structural enhancements as you grow.',
      iconName: 'support',
    },
  ];

  const getIcon = (iconName: string) => {
    const classes = "h-5 w-5 text-white";
    switch (iconName) {
      case 'users':
        return <Users className={classes} />;
      case 'concept':
        return <PenTool className={classes} />;
      case 'development':
        return <Compass className={classes} />;
      case 'construction':
        return <Hammer className={classes} />;
      case 'handover':
        return <Home className={classes} />;
      case 'support':
        return <Headphones className={classes} />;
      default:
        return <Users className={classes} />;
    }
  };

  const getStepMilestones = (stepNum: string) => {
    switch (stepNum) {
      case '01':
        return ['Site topography & climate evaluation', 'Budget constraints & zoning assessment', 'Lifestyle brief & mood board delivery'];
      case '02':
        return ['Volumetric massing options', 'Sun path & shadow simulation analysis', 'Bespoke hand-drawn structural sketches'];
      case '03':
        return ['Detailed BIM computer modeling', 'Sourcing custom local materials', 'MEP (mechanical, electrical) coordination'];
      case '04':
        return ['Concrete strength & slab test logs', 'Custom framing & glaze fit oversight', 'Subcontractor verification checks'];
      case '05':
        return ['Systems pressure & thermal validation', 'Complete material warranty hand-back', 'Physical architecture plaque installation'];
      case '06':
        return ['12-month thermal envelope inspection', 'Adaptive renovation guidelines advice', 'Structural database maintenance sync'];
      default:
        return ['Standard quality review checks'];
    }
  };

  return (
    <section id="process" className="py-24 bg-charcoal-950 text-white relative overflow-hidden border-b border-charcoal-800">
      {/* Abstract structural grid line background for tech-architect vibe */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
        <div className="w-full h-full border-t border-b border-white grid grid-cols-6 divide-x divide-white">
          <div /><div /><div /><div /><div /><div />
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Section Header */}
        <div className="text-center flex flex-col items-center gap-3 mb-20">
          <span className="text-[10px] font-sans font-bold uppercase tracking-[0.4em] text-bronze-400">
            OUR PROCESS
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-extrabold tracking-tight text-white">
            From Concept to Creation
          </h2>
          <div className="h-[2px] w-12 bg-bronze-500 mt-2" />
        </div>

        {/* Process Horizontal Timeline (Grid in Desktop, Column in Mobile) */}
        <div className="relative">
          {/* Connecting Line (Only on Large Screens) */}
          <div className="hidden lg:block absolute top-7 left-[8%] right-[8%] h-[2px] bg-gradient-to-r from-bronze-700 via-bronze-500 to-bronze-700 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-10 lg:gap-6 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={step.stepNumber}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.5, delay: index * 0.08 }}
                onClick={() => setActiveStep(step)}
                className="flex flex-col items-center text-center group cursor-pointer"
              >
                {/* Step badge outer wrapper */}
                <div className="relative mb-5">
                  {/* Outer breathing ring */}
                  <div className="absolute -inset-1.5 rounded-full bg-bronze-500/20 group-hover:bg-bronze-500/40 blur transition-all duration-300" />
                  
                  {/* Circular Badge */}
                  <div className="relative h-14 w-14 rounded-full bg-gradient-to-br from-bronze-500 to-bronze-700 flex items-center justify-center border-2 border-charcoal-950 shadow-lg group-hover:scale-105 transition-all duration-300">
                    {getIcon(step.iconName)}
                  </div>

                  {/* Connecting Line (Only on Medium Screens) */}
                  <div className="hidden md:block lg:hidden absolute top-7 left-full w-20 h-[1.5px] bg-bronze-600 z-0" />
                </div>

                {/* Step Number */}
                <span className="text-[10px] font-mono font-bold tracking-widest text-bronze-400">
                  {step.stepNumber}
                </span>

                {/* Step Title */}
                <h3 className="font-display font-bold text-sm tracking-tight text-white group-hover:text-bronze-400 transition-colors mt-2">
                  {step.title}
                </h3>

                {/* Step Short Description */}
                <p className="text-[11px] font-sans text-charcoal-400 mt-2 leading-relaxed max-w-[150px]">
                  {step.description}
                </p>

                {/* Micro CTA */}
                <span className="text-[9px] font-mono text-bronze-500 group-hover:text-bronze-300 underline uppercase tracking-wider mt-4 opacity-0 group-hover:opacity-100 transition-opacity">
                  See Milestones
                </span>
              </motion.div>
            ))}
          </div>
        </div>

      </div>

      {/* Process Step Detail Lightbox Modal */}
      <AnimatePresence>
        {activeStep && (
          <div id="process-modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setActiveStep(null)}
              className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
            />

            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              className="relative z-10 w-full max-w-xl bg-charcoal-900 border border-charcoal-800 rounded-2xl p-8 shadow-2xl text-left"
            >
              <button
                onClick={() => setActiveStep(null)}
                className="absolute top-4 right-4 text-charcoal-400 hover:text-white transition-colors p-1.5 hover:bg-charcoal-800 rounded-full"
              >
                <X className="h-5 w-5" />
              </button>

              <div className="flex items-center gap-4 mb-6 pb-4 border-b border-charcoal-800">
                <div className="h-12 w-12 rounded-full bg-bronze-500 flex items-center justify-center border-2 border-charcoal-900 shrink-0">
                  {getIcon(activeStep.iconName)}
                </div>
                <div>
                  <span className="text-[9px] font-mono font-bold tracking-[0.3em] uppercase text-bronze-400">
                    STAGE {activeStep.stepNumber} ARCHITECTURAL PIPELINE
                  </span>
                  <h3 className="font-display font-bold text-xl text-white mt-0.5">
                    {activeStep.title}
                  </h3>
                </div>
              </div>

              <p className="text-xs text-charcoal-300 font-sans leading-relaxed mb-6">
                {activeStep.detail}
              </p>

              <div>
                <h4 className="text-[9px] font-sans font-bold text-bronze-400 tracking-wider uppercase mb-3.5">
                  CORE MILESTONES & STANDARDS:
                </h4>
                <div className="space-y-3">
                  {getStepMilestones(activeStep.stepNumber).map((milestone, idx) => (
                    <div key={idx} className="flex gap-3 items-start text-xs font-sans text-charcoal-200">
                      <CheckSquare className="h-4 w-4 text-bronze-500 shrink-0 mt-0.5" />
                      <span>{milestone}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-charcoal-800 flex justify-end">
                <button
                  onClick={() => setActiveStep(null)}
                  className="bg-bronze-500 hover:bg-bronze-600 text-white font-sans font-bold text-[10px] tracking-wider uppercase px-5 py-2.5 rounded transition-colors cursor-pointer"
                >
                  CLOSE STAGE OVERVIEW
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
