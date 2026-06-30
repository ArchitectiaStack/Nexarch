import React, { useState, useEffect } from 'react';
import { X, CheckCircle2, MessageSquare, ShieldCheck, Mail, Phone, Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { ContactMessage } from '../types';

interface GetInTouchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function GetInTouchModal({ isOpen, onClose }: GetInTouchModalProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'Residential Architecture',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [aiResponse, setAiResponse] = useState<string>('');
  const [pastSubmissions, setPastSubmissions] = useState<ContactMessage[]>([]);

  useEffect(() => {
    // Load existing messages
    const stored = localStorage.getItem('nexarch_messages');
    if (stored) {
      try {
        setPastSubmissions(JSON.parse(stored));
      } catch (e) {
        console.error(e);
      }
    }
  }, [isOpen]);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please enter a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please describe your project idea';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate sending inquiry and generating a personalized AI reply
    setTimeout(() => {
      const generatedReply = generateAiResponse(formData.name, formData.subject);
      
      const newMessage: ContactMessage = {
        id: crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2, 9),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        subject: formData.subject,
        message: formData.message,
        createdAt: new Date().toLocaleDateString('en-US', {
          month: 'short',
          day: 'numeric',
          year: 'numeric',
          hour: '2-digit',
          minute: '2-digit',
        }),
        status: 'responded',
        aiReply: generatedReply,
      };

      const updated = [newMessage, ...pastSubmissions];
      localStorage.setItem('nexarch_messages', JSON.stringify(updated));
      setPastSubmissions(updated);
      setAiResponse(generatedReply);
      setIsSubmitting(false);
      setIsSuccess(true);
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'Residential Architecture',
        message: '',
      });
    }, 1200);
  };

  const generateAiResponse = (name: string, subject: string) => {
    const greetings = [
      `Thank you for reaching out, ${name}. We are absolutely thrilled to read about your vision.`,
      `Greetings, ${name}. It is a pleasure to connect with someone who appreciates intentional, visionary design.`,
      `Dear ${name}, thank you for sharing your thoughts with Nexarch. Your inquiry has captured our attention.`
    ];

    const bodyTemplates: Record<string, string[]> = {
      'Residential Architecture': [
        `Designing private sanctuaries is our greatest privilege. A residential project should be a harmonious dialogue between modern structural form and natural landscape context. Our lead design team is already reviewing how we can integrate sustainable materials, high-density natural light vectors, and seamless indoor-outdoor transitions for your space.`,
        `Home is a legacy built in stone, concrete, and light. Your interest in residential design aligns perfectly with our core philosophy: creating timeless sanctuaries that stand the test of generations. We would love to explore custom site-specific solar orientations and modular organic spatial flow for your property.`
      ],
      'Commercial Architecture': [
        `Commercial workspaces must redefine human synergy. We approach corporate and retail designs with high-efficiency floorplates, dynamic public-private thresholds, and striking sustainable facades that establish a bold presence. Your inquiry suggests an ambitious corporate presence, and we are keen to construct a masterpiece.`,
        `Designing for high-density modern usage requires a seamless synthesis of programmatic efficiency and aesthetic grandeur. We would love to investigate how a sustainable timber or smart-concrete framework could elevate your corporate identity and operational workflow.`
      ],
      'Interior Design': [
        `The interior of a building is where tactile luxury meets daily human ritual. We select bespoke natural textures, curated light temperature balances, and integrated structural cabinetry to craft immersive, calm sanctuaries. Your vision will benefit from our detailed materiality catalogs and acoustic engineering.`,
        `Interior architecture is a highly intimate design discipline. By pairing minimalist Scandinavian proportions with deep organic bronze accents, we will ensure that your space exudes both spatial majesty and sensory comfort.`
      ],
      'Landscape Design': [
        `Architecture does not end at the glass line; it merges with the biosphere. Our sustainable landscape philosophy pairs local xeriscaping, living water paths, and dynamic light terraces to frame buildings perfectly. We are eager to map out your outdoor terrain to form an artistic organic ecosystem.`,
        `Connecting natural biodiversity with geometric concrete forms is where true architectural poetry happens. We look forward to weaving raw natural elements, structural pergolas, and ambient outdoor glowing paths into your property.`
      ],
      'Renovation': [
        `Reimagining a historical or pre-existing layout is an exercise in structural respect and contemporary adaptation. We preserve the organic character of historical structures while injecting high-tech glazing, advanced structural reinforcement, and sleek open-concept layouts.`,
        `Breathing modern, energy-efficient life into established frameworks is a beautiful architectural challenge. We look forward to analyzing your current structural shell and adapting it into a modern, sun-drenched sanctuary.`
      ]
    };

    const closings = [
      `Our managing partner will reach out to your email within 24 hours to schedule an initial digital whiteboard session and site assessment. Let's design the future together.\n\nWarm regards,\nArthur Vance\nPrincipal Architect, NEXARCH`,
      `We would love to invite you to our Manhattan studio for an interactive VR spatial walkthrough of our ongoing work. We will send a calendar invitation to schedule a preliminary design brief.\n\nSincerely,\nThe NEXARCH Design Council`,
    ];

    const greeting = greetings[Math.floor(Math.random() * greetings.length)];
    const templates = bodyTemplates[subject] || bodyTemplates['Residential Architecture'];
    const body = templates[Math.floor(Math.random() * templates.length)];
    const closing = closings[Math.floor(Math.random() * closings.length)];

    return `${greeting}\n\n${body}\n\n${closing}`;
  };

  const handleClearPastSubmissions = () => {
    localStorage.removeItem('nexarch_messages');
    setPastSubmissions([]);
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div id="modal-backdrop" className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Blur background overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-950/80 backdrop-blur-md"
          />

          {/* Modal Content container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            className="relative z-10 w-full max-w-4xl bg-bronze-50 rounded-2xl shadow-2xl border border-bronze-200 overflow-hidden flex flex-col md:flex-row max-h-[90vh]"
          >
            {/* Left sidebar / info panel in Modal */}
            <div className="w-full md:w-5/12 bg-charcoal-900 text-white p-8 flex flex-col justify-between relative overflow-hidden">
              {/* Background abstract overlay */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-bronze-500/10 rounded-full blur-3xl -mr-20 -mt-20" />
              <div className="absolute bottom-0 left-0 w-48 h-48 bg-bronze-300/5 rounded-full blur-2xl -ml-10 -mb-10" />

              <div className="relative z-10 flex flex-col gap-6">
                <div>
                  <span className="text-[10px] font-sans font-semibold uppercase tracking-[0.3em] text-bronze-400">
                    NEXT LEVEL LIVING
                  </span>
                  <h3 className="text-2xl font-display font-semibold mt-2 tracking-tight text-white">
                    Start Your Architecture Legacy
                  </h3>
                  <p className="text-xs font-sans text-charcoal-300 mt-3 leading-relaxed">
                    By submitting this request, you connect with our lead design directors. We review every architectural program individually.
                  </p>
                </div>

                <div className="flex flex-col gap-4 mt-4">
                  <div className="flex items-center gap-3 text-xs text-charcoal-200">
                    <Mail className="h-4 w-4 text-bronze-400 shrink-0" />
                    <span>consult@nexarch.com</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-charcoal-200">
                    <Phone className="h-4 w-4 text-bronze-400 shrink-0" />
                    <span>+1 (123) 456-7890</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-charcoal-200">
                    <Calendar className="h-4 w-4 text-bronze-400 shrink-0" />
                    <span>Mon - Fri: 9:00 AM - 6:00 PM EST</span>
                  </div>
                </div>
              </div>

              {/* Submissions list */}
              <div className="relative z-10 mt-8 pt-6 border-t border-charcoal-800">
                <div className="flex justify-between items-center mb-3">
                  <h4 className="text-xs font-sans font-bold text-bronze-300 tracking-wider uppercase">
                    Your Saved Inquiries ({pastSubmissions.length})
                  </h4>
                  {pastSubmissions.length > 0 && (
                    <button
                      onClick={handleClearPastSubmissions}
                      className="text-[9px] text-red-400 hover:text-red-300 underline uppercase tracking-wider font-semibold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                <div className="max-h-[140px] overflow-y-auto space-y-2 pr-2 custom-scroll">
                  {pastSubmissions.length === 0 ? (
                    <p className="text-[10px] text-charcoal-400 italic">No past inquiries stored in this browser session.</p>
                  ) : (
                    pastSubmissions.map((sub) => (
                      <div
                        key={sub.id}
                        className="bg-charcoal-800/80 p-2.5 rounded-lg border border-charcoal-700 hover:border-bronze-500/40 transition-colors"
                      >
                        <div className="flex justify-between items-start">
                          <span className="font-display font-medium text-[11px] text-white truncate max-w-[120px]">
                            {sub.name}
                          </span>
                          <span className="text-[8px] text-bronze-400 font-mono">{sub.createdAt}</span>
                        </div>
                        <div className="text-[9px] text-charcoal-300 mt-1 flex justify-between items-center">
                          <span className="bg-bronze-500/20 text-bronze-300 px-1.5 py-0.5 rounded text-[8px]">
                            {sub.subject}
                          </span>
                          <span className="text-green-400 flex items-center gap-0.5 text-[8px] font-medium">
                            <ShieldCheck className="h-3 w-3 shrink-0" /> AI Reviewed
                          </span>
                        </div>
                      </div>
                    ))
                  )}
                </div>
              </div>
            </div>

            {/* Right side form panel in Modal */}
            <div className="w-full md:w-7/12 p-8 overflow-y-auto max-h-[80vh] md:max-h-none flex flex-col justify-center">
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-charcoal-500 hover:text-charcoal-900 transition-colors p-1.5 rounded-full hover:bg-bronze-100"
              >
                <X className="h-5 w-5" />
              </button>

              <AnimatePresence mode="wait">
                {!isSuccess ? (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <h2 className="text-xl font-display font-semibold text-charcoal-950 tracking-tight">
                      Consultation Brief
                    </h2>
                    <p className="text-xs text-charcoal-500 mt-1">
                      Fill out the form below to initiate an architectural review.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 mb-1">
                            Your Name *
                          </label>
                          <input
                            type="text"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full bg-white border border-bronze-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500/30 transition-all text-charcoal-900"
                            placeholder="John Doe"
                          />
                          {errors.name && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.name}</span>}
                        </div>

                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 mb-1">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full bg-white border border-bronze-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500/30 transition-all text-charcoal-900"
                            placeholder="john@example.com"
                          />
                          {errors.email && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.email}</span>}
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full bg-white border border-bronze-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500/30 transition-all text-charcoal-900"
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>

                        <div>
                          <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 mb-1">
                            Project Program *
                          </label>
                          <select
                            value={formData.subject}
                            onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                            className="w-full bg-white border border-bronze-200 rounded-lg px-3 py-1.5 text-xs focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500/30 transition-all text-charcoal-900"
                          >
                            <option value="Residential Architecture">Residential Architecture</option>
                            <option value="Commercial Architecture">Commercial Architecture</option>
                            <option value="Interior Design">Interior Design</option>
                            <option value="Landscape Design">Landscape Design</option>
                            <option value="Renovation">Renovation & Adaptation</option>
                          </select>
                        </div>
                      </div>

                      <div>
                        <label className="block text-[10px] font-sans font-bold uppercase tracking-wider text-charcoal-600 mb-1">
                          Vision Description *
                        </label>
                        <textarea
                          rows={4}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full bg-white border border-bronze-200 rounded-lg px-3 py-2 text-xs focus:outline-none focus:border-bronze-500 focus:ring-1 focus:ring-bronze-500/30 transition-all text-charcoal-900 resize-none"
                          placeholder="Describe your site, budget goals, or dream spaces..."
                        />
                        {errors.message && <span className="text-[10px] text-red-500 mt-0.5 block">{errors.message}</span>}
                      </div>

                      <button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full bg-bronze-500 hover:bg-bronze-600 text-white font-display font-medium text-xs tracking-wider uppercase py-3 rounded-lg shadow-lg shadow-bronze-500/20 hover:shadow-bronze-600/30 transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer disabled:bg-bronze-300 disabled:shadow-none disabled:cursor-not-allowed"
                      >
                        {isSubmitting ? (
                          <span className="flex items-center gap-2">
                            <span className="animate-spin inline-block w-4 h-4 border-2 border-white border-t-transparent rounded-full" />
                            ANALYZING ARCHITECTURAL SCOPE...
                          </span>
                        ) : (
                          <>
                            SUBMIT CONSULTATION BRIEF
                            <span className="text-sm font-semibold">→</span>
                          </>
                        )}
                      </button>
                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 flex flex-col items-center justify-center h-full"
                  >
                    <div className="bg-green-100 p-3 rounded-full text-green-600 mb-4 shadow-inner">
                      <CheckCircle2 className="h-10 w-10" />
                    </div>
                    <h3 className="text-xl font-display font-semibold text-charcoal-950">
                      Brief Received Successfully!
                    </h3>
                    <p className="text-xs text-charcoal-500 mt-2 max-w-sm mx-auto leading-relaxed">
                      Our system has archived your project program.
                    </p>

                    {/* AI Feedback response block */}
                    <div className="mt-5 text-left bg-white border border-bronze-200 rounded-xl p-4 shadow-sm w-full max-h-[250px] overflow-y-auto">
                      <div className="flex items-center gap-2 mb-2 pb-2 border-b border-bronze-100">
                        <MessageSquare className="h-4 w-4 text-bronze-500" />
                        <span className="text-[10px] font-sans font-bold uppercase tracking-wider text-bronze-700">
                          INSTANT PRE-REVIEW FROM MASTER ARCHITECT
                        </span>
                      </div>
                      <p className="text-xs font-sans text-charcoal-700 leading-relaxed whitespace-pre-line">
                        {aiResponse}
                      </p>
                    </div>

                    <button
                      onClick={() => setIsSuccess(false)}
                      className="mt-6 border border-bronze-500 text-bronze-500 hover:bg-bronze-100 font-display font-medium text-xs tracking-wider uppercase px-6 py-2.5 rounded-lg transition-colors cursor-pointer"
                    >
                      SUBMIT ANOTHER BRIEF
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
