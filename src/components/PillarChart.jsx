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
      bgColor: 'bg-blue-500',
      borderColor: 'border-blue-600',
      height: variant === '1fach' ? '280px' : '320px',
      order: 1
    },
    {
      id: 'romanistik',
      label: t('integration.pillars.romanistik.label'),
      description: t('integration.pillars.romanistik.description'),
      bgColor: 'bg-rub-green',
      borderColor: 'border-rub-green',
      height: variant === '1fach' ? '360px' : '400px',
      order: 2
    },
    {
      id: 'praxis',
      label: t('integration.pillars.praxis.label'),
      description: t('integration.pillars.praxis.description'),
      bgColor: 'bg-amber-600',
      borderColor: 'border-amber-700',
      height: variant === '1fach' ? '240px' : '280px',
      order: 3
    }
  ];

  return (
    <div className="flex flex-col items-center gap-8 py-8 w-full">
      {/* Main Pillar Container */}
      <div className="flex items-end justify-center gap-2 md:gap-4 w-full h-96">
        {pillars.map((pillar, index) => (
          <motion.div
            key={pillar.id}
            className="flex flex-col items-center flex-1 max-w-sm h-full"
            onMouseEnter={() => setActiveHover(pillar.id)}
            onMouseLeave={() => setActiveHover(null)}
          >
            {/* Pillar */}
            <motion.div
              className={`w-full ${pillar.bgColor} rounded-t-2xl shadow-xl border-4 ${pillar.borderColor} border-b-8 flex flex-col items-center justify-between p-4 relative transition-all duration-300 cursor-pointer`}
              style={{ height: pillar.height }}
              initial={{ scaleY: 0, opacity: 0 }}
              animate={{ 
                scaleY: 1, 
                opacity: 1,
                boxShadow: activeHover === pillar.id 
                  ? '0 30px 60px rgba(0, 0, 0, 0.3)' 
                  : '0 15px 35px rgba(0, 0, 0, 0.15)'
              }}
              transition={{ delay: index * 0.15, duration: 0.6, ease: 'easeOut' }}
            >
              {/* Pillar Content */}
              <motion.div
                className="text-center flex flex-col items-center justify-center flex-1"
                animate={{
                  opacity: activeHover === pillar.id ? 0 : 1,
                  scale: activeHover === pillar.id ? 0.8 : 1
                }}
                transition={{ duration: 0.2 }}
              >
                <h3 className="text-white font-bold text-sm md:text-lg leading-snug px-2">
                  {pillar.label}
                </h3>
              </motion.div>

              {/* Hover Overlay */}
              <motion.div
                className="absolute inset-0 bg-black bg-opacity-40 rounded-t-2xl flex items-center justify-center p-6"
                animate={{
                  opacity: activeHover === pillar.id ? 1 : 0
                }}
                transition={{ duration: 0.2 }}
                pointerEvents={activeHover === pillar.id ? 'auto' : 'none'}
              >
                <p className="text-white text-xs md:text-sm text-center font-medium leading-snug">
                  {pillar.description}
                </p>
              </motion.div>
            </motion.div>

            {/* Base/Foundation */}
            <div className={`w-full h-2 ${pillar.bgColor} rounded-b-lg`}></div>
          </motion.div>
        ))}
      </div>

      {/* Details Grid Below */}
      <motion.div
        className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.6, duration: 0.5 }}
      >
        {pillars.map((pillar) => (
          <div
            key={`detail-${pillar.id}`}
            className={`rounded-lg p-5 md:p-6 text-center border-2 ${pillar.borderColor} bg-opacity-5 ${pillar.bgColor} hover:shadow-md transition-all`}
          >
            <div className={`w-3 h-3 rounded-full ${pillar.bgColor} mx-auto mb-3`}></div>
            <h4 className="font-bold text-gray-800 text-sm md:text-base">
              {pillar.label}
            </h4>
            <p className="text-gray-600 text-xs md:text-sm mt-2">
              {pillar.description}
            </p>
          </div>
        ))}
      </motion.div>

      {/* Info Text */}
      <motion.p
        className="text-gray-500 text-xs md:text-sm text-center italic mt-4"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.5 }}
      >
        💡 {variant === '1fach' 
          ? t('integration.pillars_hover1fach') 
          : t('integration.pillars_hover2fach')}
      </motion.p>
    </div>
  );
};

export default PillarChart;
