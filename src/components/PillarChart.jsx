import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import { X } from 'lucide-react';

const PillarChart = ({ variant = '1fach' }) => {
  const { t } = useLanguage();
  const [selectedModule, setSelectedModule] = useState(null);
  const [selectedPillarId, setSelectedPillarId] = useState(null);

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
    pillar2: { bg: 'bg-stone-700', border: 'border-stone-800', light: 'bg-stone-100', hex: '#527236' },
    pillar3: { bg: 'bg-rub-green', border: 'border-rub-green', light: 'bg-green-50', hex: '#8dae10' }
  };

  return (
    <>
      <div className="flex flex-col items-center gap-8 py-8 w-full">
        {/* Main Pillar Container */}
        <div className="flex items-stretch justify-center gap-2 md:gap-4 w-full max-w-4xl mx-auto" style={{ minHeight: '400px' }}>
          {pillars.map((pillar, index) => {
            const colors = pillarColors[pillar.id];

            return (
              <motion.div
                key={pillar.id}
                className="flex flex-col flex-1"
                initial={{ scaleY: 0, opacity: 0 }}
                animate={{ scaleY: 1, opacity: 1 }}
                transition={{ delay: index * 0.2, duration: 0.6, ease: 'easeOut' }}
              >
                {/* Pillar Header */}
                <div 
                  className={`w-full text-white rounded-t-2xl border-4 flex flex-col items-center justify-center`}
                  style={{
                    backgroundColor: colors.hex || (pillar.id === 'pillar1' ? '#17365c' : '#8dae10'),
                    borderColor: colors.hex || (pillar.id === 'pillar1' ? '#17365c' : '#8dae10'),
                    height: '80px'
                  }}
                >
                  <h3 className="font-bold text-sm md:text-base text-center leading-tight">
                    {pillar.data.label}
                  </h3>
                  <p className="text-xs text-white text-opacity-80 text-center font-semibold mt-1">
                    {pillar.data.cp}
                  </p>
                </div>

                {/* Pillar Body - Modules */}
                <motion.div
                  className={`w-full border-l-4 border-r-4 border-b-4 p-3 md:p-4 flex-1 flex flex-col gap-2`}
                  style={{
                    borderColor: colors.hex || (pillar.id === 'pillar1' ? '#17365c' : '#8dae10'),
                    backgroundColor: colors.hex ? '#f5f5f0' : (pillar.id === 'pillar1' ? '#eff6ff' : '#f7fce4')
                  }}
                >
                  {pillar.data.modules.map((module, idx) => (
                    <motion.button
                      key={module.id}
                      onClick={() => {
                        setSelectedModule(module);
                        setSelectedPillarId(pillar.id);
                      }}
                      className={`w-full flex-1 rounded-lg text-xs md:text-sm font-semibold text-center transition-all cursor-pointer border-2 border-transparent text-white hover:shadow-lg hover:scale-105 active:scale-95 flex items-center justify-center p-2`}
                      style={{
                        backgroundColor: colors.hex || (pillar.id === 'pillar1' ? '#17365c' : '#8dae10')
                      }}
                      whileHover={{ y: -2 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <div className="flex flex-col items-center gap-1">
                        <span>{module.name}</span>
                        {module.cp && <span className="text-xs font-normal opacity-90">{module.cp}</span>}
                      </div>
                    </motion.button>
                  ))}
                </motion.div>

                {/* Pillar Footer - Info */}
                <div 
                  className={`w-full text-xs text-center rounded-b-lg border-4 border-t-0 flex items-center justify-center`}
                  style={{
                    borderColor: colors.hex || (pillar.id === 'pillar1' ? '#17365c' : '#8dae10'),
                    backgroundColor: '#f8f8f8',
                    color: '#666',
                    height: '50px'
                  }}
                >
                  <p className="font-semibold px-2">{pillar.data.info}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Module Modal */}
      <AnimatePresence>
        {selectedModule && selectedPillarId && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => {
              setSelectedModule(null);
              setSelectedPillarId(null);
            }}
          >
            <motion.div
              className="bg-white rounded-2xl max-w-2xl w-full max-h-[85vh] overflow-y-auto shadow-2xl"
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Header */}
              <div 
                className="sticky top-0 text-white p-6 border-b flex justify-between items-start"
                style={{
                  backgroundColor: pillarColors[selectedPillarId].hex || (selectedPillarId === 'pillar1' ? '#17365c' : selectedPillarId === 'pillar2' ? '#8dae10' : '#527236')
                }}
              >
                <div>
                  <h2 className="text-2xl md:text-3xl font-bold">{selectedModule.name}</h2>
                  <p className="text-white text-opacity-90 mt-2 text-sm md:text-base">
                    {selectedModule.type} • {selectedModule.cp}
                  </p>
                  {selectedModule.duration && (
                    <p className="text-white text-opacity-90 text-sm">
                      Dauer: {selectedModule.duration}
                    </p>
                  )}
                </div>
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    setSelectedPillarId(null);
                  }}
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
                          <span className={`${pillarColors[selectedPillarId].bg} text-white font-bold mt-1 rounded-full w-5 h-5 flex items-center justify-center text-sm`}>✓</span>
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
                          <span className={`${pillarColors[selectedPillarId].bg} text-white font-bold mt-1 rounded-full w-5 h-5 flex items-center justify-center text-sm`}>✓</span>
                          <span className="text-gray-700">{req}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* CP Info */}
                <div className={`${pillarColors[selectedPillarId].light} border-2 ${pillarColors[selectedPillarId].border} rounded-lg p-4`}>
                  <p className="text-sm text-gray-700">
                    <span style={{ color: pillarColors[selectedPillarId].hex || (pillarColors[selectedPillarId].bg === 'bg-rub-blue' ? '#17365c' : '#8dae10') }} className="font-bold">Credit Points: </span>
                    {selectedModule.cp}
                  </p>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="bg-gray-50 px-6 py-4 rounded-b-2xl border-t">
                <button
                  onClick={() => {
                    setSelectedModule(null);
                    setSelectedPillarId(null);
                  }}
                  className={`w-full ${pillarColors[selectedPillarId].bg} text-white py-3 rounded-lg font-semibold hover:bg-opacity-90 transition`}
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
