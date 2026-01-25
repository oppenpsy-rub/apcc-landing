import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import PillarChart from './PillarChart';

const Integration = ({ onOpenLightbox }) => {
  const [activeTab, setActiveTab] = useState('1fach');
  const { t } = useLanguage();

  const tabs = [
    { id: '1fach', label: t('integration.tabs.oneSubject') },
    { id: '2fach', label: t('integration.tabs.twoSubject') },
  ];

  return (
    <section className="py-20 bg-rub-lightGray">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-rub-blue mb-12">
          {t('integration.title')}
        </h2>

        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-sm inline-flex flex-wrap justify-center gap-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-2 md:px-6 md:py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-rub-blue text-white shadow-md'
                    : 'text-gray-500 hover:text-rub-blue'
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Main Content Card */}
        <div className="max-w-4xl mx-auto bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 min-h-[400px] flex items-center justify-center">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full"
            >
              {activeTab === '1fach' ? (
                <div className="flex flex-col items-center gap-6">
                  <p className="text-lg md:text-xl text-gray-700">
                    <span className="font-bold text-rub-green">{t('integration.content.oneSubject.highlight')}</span> {t('integration.content.oneSubject.text')}
                  </p>
                  <PillarChart variant="1fach" />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <p className="text-lg md:text-xl text-gray-700">
                    <span className="font-bold text-rub-green">{t('integration.content.twoSubject.highlight')}</span> {t('integration.content.twoSubject.text')}
                  </p>
                  <PillarChart variant="2fach" />
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Integration;
