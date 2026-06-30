import React from 'react';
import { Landmark, FolderCheck, Users, Medal, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface StatItem {
  number: string;
  label: string;
  icon: React.ReactNode;
}

export default function Stats() {
  const statsList: StatItem[] = [
    {
      number: '10+',
      label: 'Years of Experience',
      icon: <Landmark className="h-5 w-5 text-bronze-500" />,
    },
    {
      number: '250+',
      label: 'Projects Completed',
      icon: <FolderCheck className="h-5 w-5 text-bronze-500" />,
    },
    {
      number: '98%',
      label: 'Client Satisfaction',
      icon: <Users className="h-5 w-5 text-bronze-500" />,
    },
    {
      number: '20+',
      label: 'Awards Won',
      icon: <Medal className="h-5 w-5 text-bronze-500" />,
    },
    {
      number: '5',
      label: 'Countries Served',
      icon: <Globe className="h-5 w-5 text-bronze-500" />,
    },
  ];

  return (
    <section id="stats" className="py-12 bg-white border-b border-bronze-100/50">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 md:gap-12 justify-center items-center divide-y md:divide-y-0 lg:divide-x divide-bronze-100/70">
          
          {statsList.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.08 }}
              className={`flex flex-col items-center text-center p-4 gap-2.5 ${
                index > 0 ? 'pt-8 md:pt-4 lg:pt-4' : ''
              }`}
            >
              {/* Animated Icon Circle */}
              <div className="bg-bronze-50 border border-bronze-100 p-3.5 rounded-full shadow-sm hover:bg-bronze-100 transition-colors duration-300">
                {stat.icon}
              </div>

              {/* Number Count */}
              <span className="text-3xl font-display font-extrabold text-charcoal-950 tracking-tight">
                {stat.number}
              </span>

              {/* Label */}
              <span className="text-[10px] md:text-xs font-sans font-semibold text-charcoal-500 uppercase tracking-wider">
                {stat.label}
              </span>
            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
