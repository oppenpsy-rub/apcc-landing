import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';

const Header = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > 50);
  });

  return (
    <motion.header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-4' : 'bg-transparent py-6'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <div className={`text-xl font-bold tracking-tight ${isScrolled ? 'text-rub-blue' : 'text-white'}`}>
          RUB <span className="font-normal">| Romanisches Seminar</span>
        </div>
        <button 
          onClick={onOpenBooking}
          className="bg-rub-green hover:bg-opacity-90 text-white font-medium py-2 px-6 rounded-full transition-all shadow-lg hover:shadow-xl"
        >
          Beratungstermin
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
