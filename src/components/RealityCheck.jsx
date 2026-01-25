import React from 'react';
import { motion } from 'framer-motion';
import { AlertCircle, CheckCircle2 } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const RealityCheck = () => {
  const { t } = useLanguage();

  const listItems = [
    t('realityCheck.list.0'),
    t('realityCheck.list.1'),
    t('realityCheck.list.2')
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rub-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Glassmorphism Card */}
          <motion.div 
            className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                <AlertCircle size={24} />
              </div>
              <h2 className="text-xl md:text-2xl font-bold text-rub-blue">
                {t('realityCheck.badge')}
              </h2>
            </div>

            <h3 className="text-2xl md:text-4xl font-bold text-gray-800 mb-6 leading-tight">
              {t('realityCheck.title')} <br/>
              <span className="text-rub-blue">{t('realityCheck.titleHighlight')}</span>
            </h3>

            <p className="text-gray-600 mb-6 leading-relaxed text-lg">
              {t('realityCheck.text1')}
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed font-medium text-lg">
              {t('realityCheck.text2')}
            </p>

            <ul className="space-y-4">
              {listItems.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-start gap-3"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + (index * 0.1) }}
                >
                  <CheckCircle2 className="text-rub-green shrink-0 mt-1" size={20} />
                  <span className="text-gray-700 text-lg">{item}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
