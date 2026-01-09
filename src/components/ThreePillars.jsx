import React from 'react';
import { motion } from 'framer-motion';
import { Briefcase, BookOpen, Rocket } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Card = ({ icon: Icon, title, description, highlight = false, blueBorder = false, delay, highlightLabel }) => (
  <motion.div 
    className={`p-6 md:p-8 rounded-2xl border transition-all duration-300 hover:shadow-xl relative overflow-hidden ${
      highlight 
        ? 'bg-white border-rub-green shadow-lg ring-1 ring-rub-green/20' 
        : blueBorder
          ? 'bg-white border-rub-blue shadow-md'
          : 'bg-white border-gray-100'
    }`}
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay }}
  >
    {highlight && (
      <div className="absolute top-0 right-0 bg-rub-green text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
        {highlightLabel}
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
  const { t } = useLanguage();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-rub-blue mb-4">
            {t('threePillars.title')}
          </h2>
          <p className="text-xl text-gray-500">{t('threePillars.subtitle')}</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card 
            icon={Briefcase}
            title={t('threePillars.cards.0.title')}
            description={t('threePillars.cards.0.description')}
            delay={0}
            blueBorder={true}
          />
          <Card 
            icon={BookOpen}
            title={t('threePillars.cards.1.title')}
            description={t('threePillars.cards.1.description')}
            delay={0.2}
            blueBorder={true}
          />
          <Card 
            icon={Rocket}
            title={t('threePillars.cards.2.title')}
            description={t('threePillars.cards.2.description')}
            highlight={true}
            highlightLabel={t('threePillars.highlight')}
            delay={0.4}
          />
        </div>

        {/* Added diversity_4 image */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl relative max-w-4xl mx-auto"
        >
          <img 
            src="diversity_4.png" 
            alt="Studierende im Austausch" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rub-blue/80 to-transparent flex items-end p-8">
            <p className="text-white text-lg md:text-xl font-medium max-w-2xl">
              {t('threePillars.imageCaption')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ThreePillars;
