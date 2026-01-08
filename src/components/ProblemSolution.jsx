import React from 'react';
import { motion } from 'framer-motion';

const ProblemSolution = () => {
  return (
    <section id="problem-solution" className="py-20 bg-rub-lightGray">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img 
              src="Arbeitswelt.png" 
              alt="Confident Student" 
              className="rounded-2xl shadow-2xl w-full object-cover h-[500px]"
            />
          </motion.div>
          <motion.div 
            className="w-full md:w-1/2"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-rub-blue mb-6">
              Schluss mit "Was macht man damit?"
            </h2>
            <p className="text-lg text-rub-darkText leading-relaxed mb-6">
              Die Wirtschaft sucht Talente, die Frankreich, Italien und Spanien verstehen. 
              Mit dem APCC-Zertifikat integrierst du BWL-Wissen und ein Unternehmenspraktikum direkt in deinen Master.
            </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rub-green"></div>
                <span className="font-medium">Ohne Zeitverlust</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-rub-green"></div>
                <span className="font-medium">Ohne PO-Wechsel</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSolution;
