import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import JobPerspectives from './components/JobPerspectives';
import RealityCheck from './components/RealityCheck';
import ThreePillars from './components/ThreePillars';
import Integration from './components/Integration';
import Partners from './components/Partners';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);

  const openBooking = () => setIsBookingOpen(true);
  const openLightbox = (imageSrc) => setSelectedImage(imageSrc);

  return (
    <div className="font-sans antialiased bg-white">
      <Header onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <ProblemSolution />
        <JobPerspectives />
        <RealityCheck onOpenLightbox={openLightbox} />
        <ThreePillars />
        <Integration onOpenLightbox={openLightbox} />
        <Partners />
        <Testimonial />
        <FAQ />
      </main>
      <Footer onOpenBooking={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
      <ScrollToTop />

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-[100] flex items-center justify-center p-4 cursor-zoom-out"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-[90vw] max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-12 right-0 text-white/80 hover:text-white transition-colors p-2"
              >
                <X size={32} />
              </button>
              <img
                src={selectedImage}
                alt="Detailansicht"
                className="max-w-full max-h-[90vh] rounded-lg shadow-2xl object-contain"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
