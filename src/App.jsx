import React, { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import ProblemSolution from './components/ProblemSolution';
import RealityCheck from './components/RealityCheck';
import ThreePillars from './components/ThreePillars';
import Integration from './components/Integration';
import Partners from './components/Partners';
import Testimonial from './components/Testimonial';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';

function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);

  const openBooking = () => setIsBookingOpen(true);

  return (
    <div className="font-sans antialiased bg-white">
      <Header onOpenBooking={openBooking} />
      <main>
        <Hero onOpenBooking={openBooking} />
        <ProblemSolution />
        <JobPerspectives />
        <RealityCheck />
        <ThreePillars />
        <Integration />
        <Partners />
        <Testimonial />
        <FAQ />
      </main>
      <Footer onOpenBooking={openBooking} />
      <BookingModal isOpen={isBookingOpen} onClose={() => setIsBookingOpen(false)} />
    </div>
  );
}

export default App;
