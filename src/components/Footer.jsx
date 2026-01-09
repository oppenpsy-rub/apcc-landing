import React from 'react';
import { Mail, MapPin } from 'lucide-react';

const Footer = ({ onOpenBooking }) => {
  return (
    <footer className="bg-rub-blue text-white py-10 md:py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-center md:text-left">
            <h3 className="text-2xl font-bold mb-2">APCC</h3>
            <p className="text-gray-400">Angewandte Philologie & Corporate Culture</p>
          </div>
          
          <div className="flex flex-col gap-4 text-center md:text-left">
             <div className="flex items-center gap-3 justify-center md:justify-start">
               <MapPin size={20} className="text-rub-green" />
               <span>APCC Koordinationsteam, GB 7/29</span>
             </div>
             <div className="flex items-center gap-3 justify-center md:justify-start">
               <Mail size={20} className="text-rub-green" />
               <a href="mailto:apcc@rub.de" className="hover:text-rub-green transition-colors">apcc@rub.de</a>
             </div>
          </div>

          <div>
            <button 
              onClick={onOpenBooking}
              className="bg-rub-green hover:bg-opacity-90 text-white font-bold py-3 px-8 rounded-full transition-all shadow-lg hover:shadow-xl"
            >
              Jetzt Beratungstermin buchen
            </button>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-12 pt-8 text-center text-sm text-gray-500">
          © {new Date().getFullYear()} Ruhr-Universität Bochum. Alle Rechte vorbehalten.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
