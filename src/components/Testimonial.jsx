import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const testimonials = [
  {
    image: "Testimonial.png",
    quote: "Dank APCC habe ich nicht nur Dante gelesen, sondern gelernt, wie man italienische Unternehmenskultur analysiert. Heute arbeite ich im Marketing eines globalen Konzerns in Mailand.",
    name: "Marie S.",
    title: "Absolventin (M.A. Romanistik Italienisch)"
  },
  {
    image: "Testimonial_2.png",
    quote: "Ich liebe die französische Sprache, aber ins Lehramt wollte ich nie. Das APCC-Profil war der Gamechanger: Mein Praktikum bei einem Logistik-Riesen in Paris war der direkte Türöffner in den Job.",
    name: "Jonas B.",
    title: "Absolvent (M.A. Romanistik Französisch)"
  },
  {
    image: "Testimonial_3.png",
    quote: "Referendariat bestanden, aber keine Planstelle bekommen – das ist leider Realität. Statt auf eine Stelle zu warten, studiere ich jetzt das APCC-Zertifikat oben drauf. Es ist meine Brücke in die Wirtschaft: Zu meinen didaktischen Skills hole ich mir jetzt das Management-Wissen.",
    name: "Mario R.",
    title: "Absolvent (2. Staatsexamen) & APCC-Teilnehmer"
  }
];

const Testimonial = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    let interval;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const nextSlide = () => {
    setDirection(1);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0
    }),
    center: {
      zIndex: 1,
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      zIndex: 0,
      x: direction < 0 ? 1000 : -1000,
      opacity: 0
    })
  };

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
          className="text-3xl md:text-4xl font-bold text-white text-center mb-24"
        >
          Was unsere Absolvent:innen sagen
        </motion.h2>

        <div 
          className="relative max-w-2xl mx-auto min-h-[300px] md:min-h-[400px]"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={currentIndex}
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: "spring", stiffness: 300, damping: 30 },
                opacity: { duration: 0.2 }
              }}
              className="bg-white rounded-2xl shadow-xl p-8 md:p-12 relative pt-20 flex flex-col items-center text-center w-full"
            >
              {/* Floating Avatar */}
              <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 w-24 h-24 rounded-full border-4 border-rub-green overflow-hidden shadow-lg bg-gray-200 z-20">
                <img 
                  src={testimonials[currentIndex].image} 
                  alt={testimonials[currentIndex].name} 
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Quote Icon */}
              <Quote size={48} className="absolute top-6 right-6 text-rub-blue/10" />

              <blockquote className="text-lg md:text-xl text-gray-700 leading-relaxed mb-8 italic relative z-10 mt-4">
                "{testimonials[currentIndex].quote}"
              </blockquote>
              
              <div className="mt-auto">
                <div className="text-rub-blue font-bold text-xl">{testimonials[currentIndex].name}</div>
                <div className="text-rub-green font-medium text-sm mt-1">{testimonials[currentIndex].title}</div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Buttons */}
          <button 
            onClick={prevSlide}
            className="absolute top-1/2 -left-4 md:-left-16 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/20"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={32} />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute top-1/2 -right-4 md:-right-16 transform -translate-y-1/2 bg-white/10 hover:bg-white/20 text-white p-2 rounded-full backdrop-blur-sm transition-all border border-white/20"
            aria-label="Next testimonial"
          >
            <ChevronRight size={32} />
          </button>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setDirection(index > currentIndex ? 1 : -1);
                  setCurrentIndex(index);
                }}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex ? "bg-rub-green w-8" : "bg-white/30 hover:bg-white/50"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
