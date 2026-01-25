import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { X } from 'lucide-react';

const PillarChart = ({ variant = '1fach' }) => {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState(null);

  const pillars = [
    {
      id: 'pillar1',
      data: t('integration.pillars.pillar1')
    },
    {
      id: 'pillar2',
      data: t('integration.pillars.pillar2')
    },
    {
      id: 'pillar3',
      data: t('integration.pillars.pillar3')
    }
  ];

  const pillarColors = {
    pillar1: { bg: 'bg-rub-blue', border: 'border-rub-blue', light: 'bg-blue-50' },
    pillar2: { bg: 'bg-rub-green', border: 'border-rub-green', light: 'bg-green-50' },
    pillar3: { bg: 'bg-amber-600', border: 'border-amber-700', light: 'bg-amber-50' }
  };

  const pillarHeights = {
    pillar1: variant === '1fach' ? '320px' : '360px',
    pillar2: variant === '1fach' ? '280px' : '320px',
    pillar3: variant === '1fach' ? '280px' : '320px'
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 py-8 w-full">
        {/* Main Pillar Container */}
        <div className="flex items-end justify-center gap-2 md:gap-4 w-full" style={{ minHeight: '450px' }}>
          {pillars.map((pillar, index) => {
            const colors = pillarColors[pillar.id];
            const height = pillarHeights[pillar.id];

            return (
              <motion.div
                key={pillar.id}
                className="flex flex-col items-center flex-1 max-w-xs"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                {/* Pillar Header */}
                <div className={`w-full ${colors.bg} text-white py-3 px-3 rounded-t-2xl border-4 ${colors.border}`}>
                  <h3 className="font-bold text-sm md:text-base text-center">
                    {pillar.data.label}
                  </h3>
                  <p className="text-xs text-blue-100 text-center mt-1 font-semibold">
                    {pillar.data.cp}
                  </p>
                </div>

                {/* Pillar Body - Modules */}
                <motion.div
                  className={`w-full border-l-4 border-r-4 border-b-4 ${colors.border} ${colors.light} p-3 md:p-4 flex-1 flex flex-col gap-2`}
                  style={{ height: height }}
                >
                  {pillar.data.modules.map((module, idx) => (
                    <motion.button
                      key={module.id}
                      onClick={() => setSelectedModule(module)}
                      className={`w-full p-2 rounded-lg text-xs md:text-sm font-semibold text-center transition-all cursor-pointer border-2 border-transparent ${colors.bg} text-white hover:shadow-lg hover:scale-105 active:scale-95`}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {module.name}
                      {module.cp && <div className="text-xs font-normal opacity-90">{module.cp}</div>}
                    </motion.button>
                  ))}
                </motion.div>

                {/* Pillar Footer - Info */}
                <div className={`w-full text-xs text-gray-600 text-center p-2 bg-gray-100 rounded-b-lg border-4 border-t-0 ${colors.border}`}>
                  <p className="font-semibold">{pillar.data.info}</p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Info Text */}
        <motion.p
          className="text-gray-600 text-xs md:text-sm text-center italic"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.5 }}
        >
          📚 {t('integration.pillars_hover1fach')}
        </motion.p>
      </div>

      {/* Module Modal */}
      <AnimatePresence>
        {selectedModule && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedModule(null)}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div className="sticky top-0 bg-gradient-to-r from-rub-blue to-rub-green text-white p-6 border-b flex justify-between items-start">
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedModule.name}</h2>
                  <p className="text-blue-100 mt-2 text-sm md:text-base">
                    {selectedModule.type} • {selectedModule.cp}
                  </p>
                  {selectedModule.duration && (
                    <p className="text-blue-100 text-sm">
                      Dauer: {selectedModule.duration}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => setSelectedModule(null)}
                  className="text-white hover:bg-white hover:bg-opacity-20 p-2 rounded-lg transition"
                >
                  <X size={24} />
                </button>
              </div>

              {/* Modal Content */}
              <div className="p-6 space-y-6">
                {/* Description */}
                <div>
                  <h3 className="text-lg font-bold text-rub-blue mb-3">Beschreibung</h3>
                  <p className="text-gray-700 leading-relaxed">
                    {selectedModule.description}
                  </p>
                </div>

                {/* Courses/Sessions */}
                {selectedModule.courses && (
                  <div>
                    <h3 className="text-lg font-bold text-rub-blue mb-3">
                      {selectedModule.id === 'internship' ? 'Anforderungen' : 'Veranstaltungen'}
                    </h3>
                    <ul className="space-y-2">
                      {selectedModule.courses.map((course, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-rub-green font-bold mt-1">✓</span>
                          <span className="text-gray-700">{course}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Requirements for internship */}
                {selectedModule.requirements && (
                  <div>
                    <h3 className="text-lg font-bold text-rub-blue mb-3">Anforderungen</h3>
                    <ul className="space-y-2">
                      {selectedModule.requirements.map((req, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="text-rub-green font-bold mt-1">✓</span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CP Info */}
                <div className="bg-blue-50 border-2 border-rub-blue rounded-lg p-4">
                  <p className="text-sm text-gray-700">
                    <span className="font-bold text-rub-blue">Credit Points: </span>
                    {selectedModule.cp}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t">
                <button
                  onClick={() => setSelectedModule(null)}
                  className="w-full bg-rub-blue text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition"
                >
                  Schließen
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default PillarChart;
