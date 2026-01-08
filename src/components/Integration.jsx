import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Integration = () => {
  const [activeTab, setActiveTab] = useState('1fach');

  const tabs = [
    { id: '1fach', label: '1-Fach Master' },
    { id: '2fach', label: '2-Fach Master / M.Ed.' },
  ];

  return (
    <section className="py-20 bg-rub-lightGray">
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-rub-blue mb-12">
          So passt es in dein Studium
        </h2>

        <div className="flex justify-center mb-8">
          <div className="bg-white p-1 rounded-full shadow-sm inline-flex">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all duration-300 ${
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
              className="text-lg md:text-xl text-gray-700 w-full"
            >
              {activeTab === '1fach' ? (
                <div className="flex flex-col items-center gap-6">
                  <p>
                    <span className="font-bold text-rub-green">Voll integriert.</span> Nutze deinen Ergänzungsbereich (Modul B) und Wahlbereich. Du machst keine Extra-CP.
                  </p>
                  <img 
                    src="integration-1-fach.png" 
                    alt="Integration 1-Fach Master" 
                    className="rounded-xl shadow-lg w-full max-w-2xl mt-4 border border-gray-100"
                  />
                </div>
              ) : (
                <div className="flex flex-col items-center gap-6">
                  <p>
                    <span className="font-bold text-rub-green">Das Exzellenz-Zertifikat.</span> Nutze den Wahlbereich und absolviere das Praktikum als wertvolle Zusatzqualifikation.
                  </p>
                  <img 
                    src="integration-2-fach.png" 
                    alt="Integration 2-Fach Master" 
                    className="rounded-xl shadow-lg w-full max-w-2xl mt-4 border border-gray-100"
                  />
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
