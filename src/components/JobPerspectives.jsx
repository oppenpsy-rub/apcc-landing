import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Briefcase, HeartHandshake } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const JobPerspectives = () => {
  const { t } = useLanguage();

  const perspectives = [
    { icon: Globe2 },
    { icon: Users },
    { icon: Briefcase },
    { icon: HeartHandshake }
  ];

  return (
    <section className="py-20 bg-rub-lightGray">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold font-serif text-rub-blue mb-6"
          >
            {t('jobPerspectives.title')}
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-rub-darkText/80 leading-relaxed"
          >
            {t('jobPerspectives.subtitle')}
          </motion.p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {perspectives.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + 0.3 }}
              className="bg-white p-6 md:p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-rub-green"
            >
              <div className="w-14 h-14 bg-rub-blue/5 rounded-full flex items-center justify-center mb-6 mx-auto text-rub-blue">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-rub-blue mb-3 text-center">
                {t(`jobPerspectives.items.${index}.title`)}
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {t(`jobPerspectives.items.${index}.description`)}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Added Image Section */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative rounded-2xl overflow-hidden shadow-2xl max-w-4xl mx-auto"
        >
          <img 
            src="diversity_2.png" 
            alt="Multikulturelles Team bei der Arbeit" 
            className="w-full h-auto"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rub-blue/80 to-transparent flex items-end justify-center pb-10">
            <p className="text-white text-xl md:text-2xl font-serif italic text-center px-4 max-w-3xl">
              {t('jobPerspectives.quote')}
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobPerspectives;
