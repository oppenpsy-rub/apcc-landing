import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const CorporateTestimonial = () => {
  const { t } = useLanguage();

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto mt-16"
    >
      <div className="bg-blue-50/50 rounded-2xl p-8 md:p-10 relative">
        <div className="flex flex-col md:flex-row gap-6 items-start">
          <div className="flex-shrink-0">
            <div className="p-3 bg-white rounded-full shadow-sm">
              <Quote className="w-8 h-8" style={{ color: '#8DAE10' }} />
            </div>
          </div>
          
          <div className="flex-1">
            <blockquote className="text-xl md:text-2xl font-medium text-gray-800 mb-6 italic leading-relaxed">
              {t('corporateTestimonial.quote')}
            </blockquote>
            
            <div className="border-t border-gray-200 pt-4 flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4">
              <span className="font-bold text-gray-900">
                {t('corporateTestimonial.author')}
              </span>
              <span className="hidden sm:inline text-gray-300">|</span>
              <span className="text-gray-500 text-sm uppercase tracking-wide">
                {t('corporateTestimonial.context')}
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CorporateTestimonial;
