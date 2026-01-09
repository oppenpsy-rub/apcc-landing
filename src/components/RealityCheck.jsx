import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { TrendingUp, AlertCircle, CheckCircle2, ZoomIn, X } from 'lucide-react';

const RealityCheck = ({ onOpenLightbox }) => {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-rub-blue/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Glassmorphism Card */}
          <motion.div 
            className="bg-white/60 backdrop-blur-md rounded-3xl shadow-xl border border-white/50 p-8 md:p-12 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex flex-col md:flex-row gap-12 items-center">
              
              {/* Left Content */}
              <div className="w-full md:w-1/2">
                <div className="flex items-center gap-3 mb-6">
                  <div className="bg-yellow-100 p-2 rounded-lg text-yellow-700">
                    <AlertCircle size={24} />
                  </div>
                  <h2 className="text-xl md:text-2xl font-bold text-rub-blue">
                    Reality Check: Warum APCC für M.Ed.-Studierende?
                  </h2>
                </div>

                <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 leading-tight">
                  Lehrkräftebedarfsprognose NRW: <br/>
                  <span className="text-rub-blue">Bereite dich vor.</span>
                </h3>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Die aktuellen Prognosen für NRW zeigen: Während MINT-Fächer gesucht werden, sinken die Einstellungschancen für Französisch, Spanisch und Italienisch.
                </p>

                <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                  Setze nicht alles auf eine Karte. Mit dem APCC-Zertifikat sicherst du dich ab. Du erwirbst eine wertvolle Doppelqualifikation für die freie Wirtschaft – falls es mit dem Referendariat nicht sofort klappt oder du später wechseln möchtest.
                </p>

                <ul className="space-y-4">
                  {[
                    "Plan B in der Tasche: Direkter Einstieg in Unternehmen möglich.",
                    "Auch als Lehrkraft profitierst du: Schulmanagement und Projektkoordination erfordern genau diese Wirtschaftskompetenzen.",
                    "Zusatzqualifikation: Hebe dich von anderen Bewerber:innen ab."
                  ].map((item, index) => (
                    <motion.li 
                      key={index}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + (index * 0.1) }}
                    >
                      <CheckCircle2 className="text-rub-green shrink-0 mt-1" size={20} />
                      <span className="text-gray-700">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Right Content: Image */}
              <div className="w-full md:w-2/5 flex flex-col justify-center">
                <div className="bg-white rounded-2xl p-6 shadow-lg border border-gray-100">
                  <div className="flex items-center gap-2 mb-4 text-gray-500 text-sm font-semibold uppercase tracking-wider">
                    <TrendingUp size={16} />
                    <span>Einstellungschancen Prognose 2030+</span>
                  </div>
                  
                  {/* Zoomable Image Container */}
                  <div 
                    className="relative group cursor-zoom-in overflow-hidden rounded-lg"
                    onClick={() => onOpenLightbox('Bedarfsprognosen.png')}
                  >
                    <motion.img 
                      src="Bedarfsprognosen.png" 
                      alt="Bedarfsprognosen Chart" 
                      className="w-full h-auto rounded-lg shadow-sm transition-transform duration-500 group-hover:scale-105"
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    />
                    
                    {/* Magnifying Glass Overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300 flex items-center justify-center">
                      <motion.div 
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileHover={{ scale: 1.1 }}
                        className="bg-white/90 p-3 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-all duration-300"
                      >
                        <ZoomIn size={24} className="text-rub-blue" />
                      </motion.div>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 text-center mt-2">(Klicken zum Vergrößern)</p>
                  
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a 
                      href="https://www.schulministerium.nrw/system/files/media/document/file/lehrkraeftebedarfsprognose_maerz_2023.pdf#page=24"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-xs text-gray-400 hover:text-gray-600 underline mt-2 block text-center"
                    >
                      Quelle: Schulministerium NRW (Prognose 2023, S. 24)
                    </a>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default RealityCheck;
