import React from 'react';
import { Mail, MapPin } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const Footer = ({ onOpenBooking }) => {
  const { t } = useLanguage();

  return (
    <footer className="bg-rub-blue text-white py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">{t('footer.apcc')}</h3>
            <p className="text-gray-400">{t('footer.subtitle')}</p>
          </div>
          
          <div className="flex flex-col gap-4 text-center md:text-left">
             <div className="flex items-center gap-3 justify-center md:justify-start">
               <MapPin size={20} className="text-rub-green" />
               <span>{t('footer.address')}</span>
             </div>
             <div className="flex items-center gap-3 justify-center md:justify-start">
               <Mail size={20} className="text-rub-green" />
               <a href="mailto:porta@rub.de" className="hover:text-rub-green transition-colors">porta@rub.de</a>
             </div>
          </div>

          <div>
            <button 
              onClick={onOpenBooking}
              className="bg-rub-green hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              {t('footer.button')}
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
          <div className="mb-4 md:mb-0">
            © {new Date().getFullYear()} {t('footer.copyright')}
          </div>
          <div className="flex gap-6">
            <a 
              href="https://www.ruhr-uni-bochum.de/de/impressum" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rub-green transition-colors"
            >
              {t('footer.impressum')}
            </a>
            <a 
              href="https://www.ruhr-uni-bochum.de/de/datenschutzerklaerung" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-rub-green transition-colors"
            >
              {t('footer.datenschutz')}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
