import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Calendar as CalendarIcon, Clock, CheckCircle, ChevronLeft, ChevronRight } from 'lucide-react';
import { useLanguage } from '../LanguageContext';

const BookingModal = ({ isOpen, onClose }) => {
  const { t } = useLanguage();
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState(null);
  const [selectedTime, setSelectedTime] = useState(null);
  const [currentMonth, setCurrentMonth] = useState(new Date(2026, 0)); // Start at Jan 2026
  const [contactData, setContactData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const days = t('booking.days') || ['Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa', 'So'];
  const monthNames = t('booking.months') || [
    'Januar', 'Februar', 'März', 'April', 'Mai', 'Juni',
    'Juli', 'August', 'September', 'Oktober', 'November', 'Dezember'
  ];
  
  const getDaysInMonth = (date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate();
  };

  const getFirstDayOfMonth = (date) => {
    // JS getDay(): 0=Sun, 1=Mon, ... 6=Sat
    // We want: 0=Mon, ... 6=Sun
    const day = new Date(date.getFullYear(), date.getMonth(), 1).getDay();
    return day === 0 ? 6 : day - 1;
  };

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
    setSelectedDate(null);
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
    setSelectedDate(null);
  };

  const numDays = getDaysInMonth(currentMonth);
  const startOffset = getFirstDayOfMonth(currentMonth);
  const dates = Array.from({ length: numDays }, (_, i) => i + 1);

  const timeSlots = [
    '09:00', '10:00', '11:00', '13:00', '14:00', '15:30'
  ];

  const handleDateClick = (date) => {
    setSelectedDate(date);
    setSelectedTime(null); // Reset time when date changes
  };

  const handleNextStep = () => {
    setStep(2);
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    setStep(3);
    // Here you would typically send data to a backend
    console.log({
      date: selectedDate,
      time: selectedTime,
      ...contactData
    });
    
    setTimeout(() => {
      // Auto close after success message if needed
    }, 3000);
  };

  const reset = () => {
    onClose();
    setTimeout(() => {
      setStep(1);
      setSelectedDate(null);
      setSelectedTime(null);
      setContactData({ name: '', email: '', message: '' });
      setCurrentMonth(new Date(2026, 0)); // Reset to Jan 2026
    }, 300);
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={reset}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-[60] flex items-center justify-center p-4"
          >
            {/* Modal Content */}
            <motion.div
              initial={{ scale: 0.95, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0, y: 20 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-2xl shadow-2xl w-full max-w-md overflow-hidden relative max-h-[90vh] overflow-y-auto mx-4"
            >
              {/* Close Button */}
              <button 
                onClick={reset}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-full transition-colors z-10"
              >
                <X size={20} className="text-gray-500" />
              </button>

              {step === 1 && (
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <h3 className="text-2xl font-bold text-rub-blue mb-2">{t('booking.title')}</h3>
                    <p className="text-gray-500 text-sm">{t('booking.subtitle')}</p>
                  </div>

                  {/* Calendar View */}
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <button 
                        onClick={handlePrevMonth}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <ChevronLeft size={20} className="text-gray-600" />
                      </button>
                      
                      <div className="flex items-center gap-2">
                        <span className="font-semibold text-gray-700">
                          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
                        </span>
                        <CalendarIcon size={16} className="text-rub-green" />
                      </div>

                      <button 
                        onClick={handleNextMonth}
                        className="p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <ChevronRight size={20} className="text-gray-600" />
                      </button>
                    </div>
                    
                    <div className="grid grid-cols-7 gap-1 mb-2">
                      {days.map(day => (
                        <div key={day} className="text-center text-xs text-gray-400 font-medium py-1">
                          {day}
                        </div>
                      ))}
                    </div>
                    <div className="grid grid-cols-7 gap-1">
                      {Array.from({ length: startOffset }).map((_, i) => (
                        <div key={`empty-${i}`} />
                      ))}
                      {dates.map(date => (
                        <button
                          key={date}
                          onClick={() => handleDateClick(date)}
                          className={`
                            aspect-square rounded-lg flex items-center justify-center text-sm font-medium transition-all
                            ${selectedDate === date 
                              ? 'bg-rub-blue text-white shadow-md' 
                              : 'hover:bg-gray-100 text-gray-700'}
                          `}
                        >
                          {date}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Time Slots */}
                  {selectedDate && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      className="mb-6"
                    >
                      <div className="flex items-center gap-2 mb-3">
                        <Clock size={16} className="text-rub-green" />
                        <span className="font-semibold text-sm text-gray-700">{t('booking.availableTimes')}</span>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        {timeSlots.map(time => (
                          <button
                            key={time}
                            onClick={() => setSelectedTime(time)}
                            className={`
                              py-2 rounded-lg text-sm font-medium border transition-all
                              ${selectedTime === time
                                ? 'border-rub-green bg-rub-green/10 text-rub-green'
                                : 'border-gray-200 hover:border-rub-blue/30 text-gray-600'}
                            `}
                          >
                            {time}
                          </button>
                        ))}
                      </div>
                    </motion.div>
                  )}

                  <button
                    disabled={!selectedDate || !selectedTime}
                    onClick={handleNextStep}
                    className={`
                      w-full py-3 rounded-xl font-bold text-white transition-all
                      ${(!selectedDate || !selectedTime)
                        ? 'bg-gray-300 cursor-not-allowed'
                        : 'bg-rub-green hover:bg-opacity-90 shadow-lg hover:shadow-xl'}
                    `}
                  >
                    {t('booking.next')}
                  </button>
                </div>
              )}

              {step === 2 && (
                <div className="p-6 md:p-8">
                  <div className="mb-6">
                    <button 
                      onClick={() => setStep(1)}
                      className="flex items-center gap-1 text-sm text-gray-500 hover:text-rub-blue mb-4 transition-colors"
                    >
                      <ChevronLeft size={16} /> {t('booking.back')}
                    </button>
                    <h3 className="text-2xl font-bold text-rub-blue mb-2">{t('booking.contactTitle')}</h3>
                    <p className="text-gray-500 text-sm">
                      {t('booking.appointmentSummaryLabel')} {selectedDate}. {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()} {t('booking.atTime')} {selectedTime} {t('booking.clock')}
                    </p>
                  </div>

                  <form onSubmit={handleConfirm} className="space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.nameLabel')}</label>
                      <input
                        type="text"
                        id="name"
                        required
                        value={contactData.name}
                        onChange={(e) => setContactData({...contactData, name: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rub-blue focus:border-transparent outline-none transition-all"
                        placeholder={t('booking.namePlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.emailLabel')}</label>
                      <input
                        type="email"
                        id="email"
                        required
                        value={contactData.email}
                        onChange={(e) => setContactData({...contactData, email: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rub-blue focus:border-transparent outline-none transition-all"
                        placeholder={t('booking.emailPlaceholder')}
                      />
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">{t('booking.messageLabel')}</label>
                      <textarea
                        id="message"
                        rows={3}
                        value={contactData.message}
                        onChange={(e) => setContactData({...contactData, message: e.target.value})}
                        className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-rub-blue focus:border-transparent outline-none transition-all resize-none"
                        placeholder={t('booking.messagePlaceholder')}
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full py-3 rounded-xl font-bold text-white bg-rub-green hover:bg-opacity-90 shadow-lg hover:shadow-xl transition-all mt-6"
                    >
                      {t('booking.submit')}
                    </button>
                  </form>
                </div>
              )}

              {step === 3 && (
                <div className="p-12 flex flex-col items-center text-center">
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 200, damping: 10 }}
                    className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6"
                  >
                    <CheckCircle size={40} className="text-green-600" />
                  </motion.div>
                  <h3 className="text-2xl font-bold text-rub-blue mb-2">{t('booking.successTitle')}</h3>
                  <p className="text-gray-600 mb-8">
                    {t('booking.successMessagePart1')} {contactData.name}, {t('booking.successMessagePart2')} {contactData.email} {t('booking.successMessagePart3')} {selectedDate}. {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()} {t('booking.atTime')} {selectedTime} {t('booking.clock')}.
                  </p>
                  <button
                    onClick={reset}
                    className="bg-gray-100 hover:bg-gray-200 text-gray-800 font-semibold py-2 px-6 rounded-lg transition-colors"
                  >
                    {t('booking.close')}
                  </button>
                </div>
              )}
            </motion.div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default BookingModal;
