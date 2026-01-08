import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="Titelbild.png"
          alt="Students working"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-rub-blue/90 to-rub-blue/70 mix-blend-multiply" />
      </div>

      <div className="container mx-auto px-6 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-rub-green/20 border border-rub-green text-rub-green font-semibold text-sm mb-6 backdrop-blur-sm">
            Neu an der RUB
          </span>
          <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Dein Ticket in <br /> die Wirtschaft.
          </h1>
          <p className="text-xl md:text-2xl mb-10 text-gray-100 max-w-2xl mx-auto font-light">
            Romanistik studieren. Karriere machen. <br />
            Das neue Profilzertifikat APCC.
          </p>
          <button 
            onClick={() => document.getElementById('problem-solution').scrollIntoView({ behavior: 'smooth' })}
            className="bg-rub-green hover:bg-[#7c990e] text-white text-lg font-semibold py-4 px-10 rounded-full transition-all transform hover:scale-105 shadow-xl"
          >
            Mehr erfahren
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
