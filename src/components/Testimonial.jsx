import React from 'react';
import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';

const Testimonial = () => {
  return (
    <section className="py-24 bg-rub-blue relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-rub-green opacity-10 rounded-full translate-x-1/3 translate-y-1/3"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Quote size={48} className="text-rub-green mx-auto mb-8 opacity-50" />
          <blockquote className="text-2xl md:text-4xl font-medium text-white leading-relaxed mb-10 max-w-4xl mx-auto">
            "Dank APCC habe ich nicht nur Dante gelesen, sondern gelernt, wie man italienische Unternehmenskultur analysiert. Heute arbeite ich im Marketing eines globalen Konzerns in Mailand."
          </blockquote>
          
          <div className="flex flex-col items-center">
            <div className="w-16 h-16 rounded-full bg-gray-300 mb-4 overflow-hidden border-2 border-rub-green">
               <img 
                 src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80" 
                 alt="Marie S." 
                 className="w-full h-full object-cover"
               />
            </div>
            <div className="text-white font-bold text-lg">Marie S.</div>
            <div className="text-rub-green text-sm">Absolventin</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonial;
