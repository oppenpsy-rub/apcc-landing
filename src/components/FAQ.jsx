import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Info } from 'lucide-react';

const FAQItem = ({ question, answer }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
      >
        <span className="text-lg font-semibold text-rub-blue group-hover:text-rub-green transition-colors">{question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.2 }}
        >
          <ChevronDown className="text-rub-green" />
        </motion.div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pb-6 flex gap-4 items-start">
              <Info className="text-rub-green shrink-0 mt-1" size={20} />
              <p className="text-gray-600 leading-relaxed">
                {answer}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const FAQ = () => {
  const faqs = [
    {
      q: "Dauert mein Studium dadurch länger?",
      a: "Nein. Im 1-Fach-Master ist das Profil vollständig in die regulären 100 CP integriert (über Wahl- und Ergänzungsbereiche). Du studierst in Regelstudienzeit. Im 2-Fach-Master nutzt du die vorlesungsfreie Zeit für das Praktikum, sodass auch hier keine Verzögerung entstehen muss."
    },
    {
      q: "Wird mir ein Job garantiert?",
      a: "Seriöse Antwort: Nein – das kann keine Uni. Aber: Das Zertifikat löst das Hauptproblem von Geisteswissenschaftlern (fehlende Praxis). Du hast durch das Projektpraktikum oft schon den Fuß in der Tür und hebst dich durch BWL-Kenntnisse massiv von Mitbewerbern ab."
    },
    {
      q: "Für wen ist APCC geeignet?",
      a: "Für alle Romanisten, die mehr Optionen als nur 'Schule' wollen. Ideal für 1-Fach-Studierende mit Ziel Wirtschaft/Kultur, aber auch perfekt als 'Plan B'-Qualifikation für Lehramtsstudierende (M.Ed.), die ihre Berufschancen breiter aufstellen wollen."
    },
    {
      q: "Muss ich die Prüfungsordnung wechseln?",
      a: "Nein, das Profil nutzt die freien Bereiche deiner PO 2016. Du kannst es nahtlos in deinen bestehenden Studienplan integrieren."
    },
    {
      q: "Kostet das Zertifikat etwas?",
      a: "Nein, es ist Teil deines Studiums an der RUB und vollständig kostenfrei für eingeschriebene Studierende."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6 max-w-3xl">
        <h2 className="text-3xl font-bold text-center text-rub-blue mb-12">Häufige Fragen</h2>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 px-8">
          {faqs.map((faq, idx) => (
            <FAQItem key={idx} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
