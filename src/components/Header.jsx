import React, { useState } from 'react';
import { motion, useScroll, useMotionValueEvent } from 'framer-motion';
import { useLanguage } from '../LanguageContext';
import LanguageSwitcher from './LanguageSwitcher';
import PortaLogo from './PortaLogo';

const Header = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const { scrollY } = useScroll();
  const { t } = useLanguage();

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
      <div className="container mx-auto px-4 md:px-6 flex justify-between items-center">
        <div className="flex items-center gap-3 md:gap-4">
          <PortaLogo size="sm" isDark={isScrolled} />
          <div className="h-6 w-px bg-white/20" style={{ backgroundColor: isScrolled ? '#ddd' : 'rgba(255,255,255,0.2)' }}></div>
          <a 
            href="https://www.romanistik.rub.de" 
            target="_blank" 
            rel="noopener noreferrer"
            className={`text-xs sm:text-sm md:text-base font-bold tracking-tight hover:opacity-80 transition-opacity ${isScrolled ? 'text-rub-blue' : 'text-white'}`}
          >
            RUB <span className="font-normal">| {t('header.title')}</span>
          </a>
        </div>
        
        <div className="flex items-center gap-2 md:gap-4">
          <LanguageSwitcher isScrolled={isScrolled} />
          
          <button 
            onClick={onOpenBooking}
            className="bg-rub-green hover:bg-opacity-90 text-white font-medium py-2 px-3 md:px-6 text-xs md:text-base rounded-full transition-all shadow-lg hover:shadow-xl shrink-0"
          >
            {t('header.bookingButton')}
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
