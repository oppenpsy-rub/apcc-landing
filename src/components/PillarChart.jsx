import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../LanguageContext';

const PillarChart = ({ variant = '1fach' }) => {
  const { t } = useLanguage();
  const [activeHover, setActiveHover] = useState(null);

  const pillars = [
    {
      id: 'culture',
      label: t('integration.pillars.culture.label'),
      description: t('integration.pillars.culture.description'),
      color: 'from-blue-600 to-blue-500',
      height: variant === '1fach' ? 'h-48' : 'h-52',
      accentColor: 'text-blue-600'
    },
    {
      id: 'romanistik',
      label: t('integration.pillars.romanistik.label'),
      description: t('integration.pillars.romanistik.description'),
      color: 'from-rub-green to-green-500',
      height: variant === '1fach' ? 'h-56' : 'h-64',
      accentColor: 'text-rub-green'
    },
    {
      id: 'praxis',
      label: t('integration.pillars.praxis.label'),
      description: t('integration.pillars.praxis.description'),
      color: 'from-orange-600 to-orange-500',
      height: variant === '1fach' ? 'h-44' : 'h-48',
      accentColor: 'text-orange-600'
    }
  ];

  return (
    <div className="flex flex-col items-center gap-8 py-8">
      {/* Pillar Container */}
      <div className="flex items-end justify-center gap-4 md:gap-6 h-80 w-full">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            className="flex flex-col items-center flex-1 max-w-xs cursor-pointer"
            onMouseEnter={() => setActiveHover(pillar.id)}
            onMouseLeave={() => setActiveHover(null)}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 300, damping: 10 }}
          >
            {/* Pillar Bar */}
            <motion.div
              className={`w-full ${pillar.height} bg-gradient-to-t ${pillar.color} rounded-t-lg shadow-lg transition-all duration-300 relative group`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: 'auto', 
                opacity: 1,
                boxShadow: activeHover === pillar.id 
                  ? '0 20px 40px rgba(0, 0, 0, 0.2)' 
                  : '0 10px 20px rgba(0, 0, 0, 0.1)'
              }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              {/* Label on pillar */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center"
                animate={{ 
                  opacity: activeHover === pillar.id ? 0 : 1,
                  scale: activeHover === pillar.id ? 0.8 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <span className="text-white font-bold text-center px-3 text-sm md:text-base leading-tight">
                  {pillar.label}
                </span>
              </motion.div>

              {/* Hover info */}
              <motion.div
                className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-80 rounded-t-lg p-3"
                animate={{ 
                  opacity: activeHover === pillar.id ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
              >
                <p className="text-white text-xs md:text-sm text-center font-medium leading-snug">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Base */}
            <div className="w-full h-3 bg-gray-200 rounded-b-lg"></div>
          </motion.div>
        ))}
      </div>

      {/* Legend / Info Section */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        {pillars.map((pillar) => (
          <div
            key={`legend-${pillar.id}`}
            className="flex flex-col items-center text-center p-3 rounded-lg bg-gray-50 border border-gray-100 hover:border-gray-300 transition-colors"
          >
            <div className={`w-4 h-4 rounded-full bg-gradient-to-br ${pillar.color} mb-2`}></div>
            <h4 className={`font-semibold text-sm md:text-base ${pillar.accentColor}`}>
              {pillar.label}
            </h4>
          </div>
        ))}
      </motion.div>

      {/* Info Text */}
      <motion.p
        className="text-gray-500 text-xs md:text-sm text-center italic mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {variant === '1fach' 
          ? t('integration.pillars_hover1fach') 
          : t('integration.pillars_hover2fach')}
      </motion.p>
    </div>
  );
};

export default PillarChart;
