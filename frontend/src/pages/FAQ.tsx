import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Section } from '../components/layout/Section';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ChevronDown } from 'lucide-react';

const faqs = [
  {
    question: "What is the mission of SATHWIK?",
    answer: "SATHWIK's mission is to bring sustainable development to the grassroots of India through holistic rural development, education, healthcare, and youth empowerment."
  },
  {
    question: "How are your projects funded?",
    answer: "Our initiatives are primarily supported by Corporate Social Responsibility (CSR) partnerships with major Public Sector Undertakings (PSUs) such as GAIL, ONGC, and NTPC, alongside individual donations."
  },
  {
    question: "How can I volunteer with SATHWIK?",
    answer: "You can apply to volunteer through our Contact page. We are always looking for passionate individuals to help with on-ground implementations, teaching, and medical camps."
  },
  {
    question: "Where do you operate?",
    answer: "We have an extensive geographic reach across 7 states in India, focusing deeply on rural and underserved communities in Telangana, Andhra Pradesh, Gujarat, Karnataka, Bihar, Jharkhand, and Uttar Pradesh."
  },
  {
    question: "How do you ensure accountability and transparency?",
    answer: "We publish regular impact reports and maintain strict financial auditing. Every project we undertake is rigorously documented with before-and-after metrics, community testimonials, and financial transparency to our CSR partners."
  }
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="bg-[#FAFAF8] min-h-screen">
      <section className="pt-32 pb-16">
        <Container>
          <div className="max-w-3xl">
            <SectionHeading 
              title="Frequently Asked Questions" 
              subtitle="Everything You Need to Know"
              alignment="left"
            />
            <p className="text-xl text-gray-600 mt-6 leading-relaxed">
              Find answers to common questions about our mission, operations, and how you can get involved.
            </p>
          </div>
        </Container>
      </section>

      <Section className="pt-0 pb-32">
        <Container>
          <div className="max-w-3xl mx-auto space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <div 
                  key={idx}
                  className={`bg-white rounded-2xl border transition-all duration-300 ${isOpen ? 'border-[#054E38] shadow-md' : 'border-gray-200 hover:border-[#054E38]/30'}`}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : idx)}
                    className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none"
                  >
                    <span className="font-bold text-gray-900 text-lg pr-8">{faq.question}</span>
                    <ChevronDown className={`w-5 h-5 text-[#054E38] flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: 'easeInOut' }}
                        className="overflow-hidden"
                      >
                        <div className="px-8 pb-6 text-gray-600 leading-relaxed border-t border-gray-100 pt-4">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </Section>
    </div>
  );
};
