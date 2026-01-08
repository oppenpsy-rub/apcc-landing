import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Rocket } from 'lucide-react';

const Card = ({ icon: Icon, title, description, highlight = false, delay }) => (
  <motion.div 
    className={`p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
      highlight 
        ? 'bg-white border-rub-green shadow-lg ring-1 ring-rub-green/20' 
        : 'bg-white border-gray-100'
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {highlight && (
      <div className="absolute top-0 right-0 bg-rub-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        HIGHLIGHT
      </div>
    )}
    <div className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
      highlight ? 'bg-rub-green text-white' : 'bg-rub-blue/10 text-rub-blue'
    }`}>
      <Icon size={28} />
    </div>
    <h3 className="text-xl font-bold text-rub-blue mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{description}</p>
  </motion.div>
);

const ThreePillars = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rub-blue mb-4">
            Das 3-Säulen-Zertifikat
          </h2>
          <p className="text-xl text-gray-500">Gesamtumfang ca. 40 CP</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            icon={Briefcase}
            title="Corporate Culture"
            description="Wirtschaftswissen aus BWL, Marketing & HR. (Importbereich, ca. 10-15 CP)"
            delay={0}
          />
          <Card 
            icon={BookOpen}
            title="Angewandte Philologie"
            description="Fachseminare wie 'Interkulturelle Verhandlung' & 'Corporate Storytelling'. (Wahlbereich, 10 CP)"
            delay={0.2}
          />
          <Card 
            icon={Rocket}
            title="Praxis & Transfer"
            description="Unternehmenspraktikum & Masterarbeit als reales Consulting-Projekt. (Praxisphase, 15 CP)"
            highlight={true}
            delay={0.4}
          />
        </div>
      </div>
    </section>
  );
};

export default ThreePillars;
