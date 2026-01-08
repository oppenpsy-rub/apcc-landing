import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    image: "Testimonial.png",
    quote: "Dank APCC habe ich nicht nur Dante gelesen, sondern gelernt, wie man italienische Unternehmenskultur analysiert. Heute arbeite ich in der Unternehmenskommunikation eines globalen Konzerns in Mailand.",
    name: "Marie S.",
    title: "Absolventin (M.A. Romanistik Italienisch)"
  },
  {
    image: "Testimonial_2.png",
    quote: "Ich liebe die französische Sprache, aber ins Lehramt wollte ich nie. Das APCC-Profil war der Gamechanger: Mein Praktikum bei einem Logistik-Riesen in Paris war der direkte Türöffner in den Job.",
    name: "Jonas B.",
    title: "Absolvent (M.A. Romanistik Französisch)"
  }
];

const Testimonial = () => {
  return (
    <section className="py-24 bg-rub-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rub-green opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.h2 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-white text-center mb-20"
        >
          Was unsere Absolventen sagen
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 max-w-6xl mx-auto">
          {testimonials.map((t, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="bg-white rounded-2xl shadow-xl p-8 relative mt-12 pt-16 flex flex-col items-center text-center"
            >
              {/* Floating Avatar */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-rub-green overflow-hidden shadow-lg bg-gray-200">
                <img 
                  src={t.image} 
                  alt={t.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Icon */}
              <Quote size={48} className="absolute top-6 right-6 text-rub-blue/10" />

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-6 italic relative z-10">
                "{t.quote}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="text-rub-blue font-bold text-xl">{t.name}</div>
                <div className="text-rub-green font-medium text-sm mt-1">{t.title}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
