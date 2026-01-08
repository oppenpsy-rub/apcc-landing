import React from 'react';
import { motion } from 'framer-motion';
import { Globe2, Users, Briefcase, HeartHandshake } from 'lucide-react';

const perspectives = [
  {
    icon: Globe2,
    title: "Corporate Communications",
    description: "Kommunikation für internationale Märkte steuern."
  },
  {
    icon: Users,
    title: "International HR",
    description: "Fachkräfte aus Europa gewinnen & integrieren."
  },
  {
    icon: Briefcase,
    title: "Executive Assistant",
    description: "Die rechte Hand der Geschäftsführung im Frankreich/Italien-Geschäft."
  },
  {
    icon: HeartHandshake,
    title: "Diversity & Culture",
    description: "Zusammenarbeit in multikulturellen Teams moderieren."
  }
];

const JobPerspectives = () => {
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
            Wo Romanist:innen gebraucht werden
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-xl text-rub-darkText/80 leading-relaxed"
          >
            Unternehmen suchen nicht nur BWLer. Sie suchen auch DICH, weil du zwischen den Zeilen lesen und Kulturen übersetzen kannst.
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
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow border-t-4 border-rub-green"
            >
              <div className="w-14 h-14 bg-rub-blue/5 rounded-full flex items-center justify-center mb-6 mx-auto text-rub-blue">
                <item.icon size={28} />
              </div>
              <h3 className="text-xl font-bold text-rub-blue mb-3 text-center">{item.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">
                {item.description}
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
          className="relative rounded-2xl overflow-hidden shadow-2xl"
        >
          <img 
            src="diversity_2.png" 
            alt="Multikulturelles Team bei der Arbeit" 
            className="w-full h-[400px] object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-rub-blue/80 to-transparent flex items-end justify-center pb-10">
            <p className="text-white text-xl md:text-2xl font-serif italic text-center px-4 max-w-3xl">
              "Kulturelle Kompetenz ist der Schlüssel zu globalem Erfolg."
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default JobPerspectives;
