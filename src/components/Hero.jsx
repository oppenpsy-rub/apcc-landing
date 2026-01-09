import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Hero = () => {
  const { t } = useLanguage();

  return (
    <section className="relative h-screen min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="Titelbild.png"
          alt="Students working collaboratively"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-rub-blue/90 via-rub-blue/40 to-transparent" />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="flex justify-center mb-8">
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-lg"
            >
              <Sparkles size={16} className="text-rub-green" />
              <span className="text-white text-xs font-medium uppercase tracking-widest">{t('hero.badge')}</span>
            </motion.div>
          </div>
          <h1 className="text-5xl md:text-7xl font-bold font-serif mb-6 leading-tight drop-shadow-lg">
            {t('hero.titleLine1')} <br /> {t('hero.titleLine2')}
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-3xl mx-auto font-light leading-relaxed drop-shadow-md">
            {t('hero.descriptionLine1')} <br className="hidden md:block" />
            {t('hero.descriptionLine2')}
          </p>
          <button 
            onClick={() => document.getElementById('problem-solution').scrollIntoView({ behavior: 'smooth' })}
            className="bg-rub-green hover:bg-[#7c990e] text-white text-lg font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            {t('hero.learnMoreButton')}
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
