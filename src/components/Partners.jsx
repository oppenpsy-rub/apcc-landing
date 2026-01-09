import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import CorporateTestimonial from './CorporateTestimonial';

const Partners = () => {
  const { t } = useLanguage();
  const partners = [
    "ALDI SÜD/NORD", "THYSSENKRUPP", "EVONIK", "HOCHTIEF", "RUHRTRIENNALE"
  ];

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-10">
          {t('partners.title')}
        </p>
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-60 mb-16">
          {partners.map((partner, index) => (
            <motion.div
              key={index}
              className="text-2xl font-bold text-gray-400 hover:text-rub-blue transition-colors duration-300 cursor-default"
              whileHover={{ scale: 1.05, opacity: 1 }}
            >
              {partner}
            </motion.div>
          ))}
        </div>

        <CorporateTestimonial />
      </div>
    </section>
  );
};

export default Partners;
