import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { ButtonLink } from '../components/ui/Button';
import { Plus } from 'lucide-react';

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

/** Injects FAQPage structured data while this page is mounted. */
const useFaqJsonLd = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'application/ld+json';
    script.setAttribute('data-faq-jsonld', '');
    script.textContent = JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.answer },
      })),
    });
    document.head.appendChild(script);
    return () => script.remove();
  }, []);
};

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  useFaqJsonLd();

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="page-hero pt-32 md:pt-40 pb-10 md:pb-14 bg-background border-b border-line">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 text-[13px] text-ink-muted">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-line">/</li>
              <li aria-current="page" className="text-ink">FAQ</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            eyebrow="Everything You Need to Know"
            title={<>Frequently Asked <em>Questions</em></>}
            description="Find answers to common questions about our mission, operations, and how you can get involved."
            alignment="left"
            className="!mb-0"
          />
        </Container>
      </section>

      <section className="section bg-white">
        <Container>
          <div className="mx-auto max-w-3xl divide-y divide-line border-y border-line">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              const buttonId = `faq-q-${idx}`;
              const panelId = `faq-a-${idx}`;
              return (
                <div key={idx}>
                  <h2 className="m-0">
                    <button
                      id={buttonId}
                      type="button"
                      aria-expanded={isOpen}
                      aria-controls={panelId}
                      onClick={() => setOpenIndex(isOpen ? null : idx)}
                      className="group flex w-full items-center justify-between gap-6 py-6 text-left md:py-7"
                    >
                      <span
                        className={`font-serif text-lg font-semibold leading-snug transition-colors md:text-xl ${
                          isOpen ? 'text-primary' : 'text-ink group-hover:text-primary'
                        }`}
                      >
                        {faq.question}
                      </span>
                      <span
                        className={`flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full border transition-all duration-300 ${
                          isOpen ? 'rotate-45 border-primary bg-primary text-white' : 'border-line text-primary group-hover:border-primary'
                        }`}
                        aria-hidden="true"
                      >
                        <Plus className="h-4 w-4" />
                      </span>
                    </button>
                  </h2>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={panelId}
                        role="region"
                        aria-labelledby={buttonId}
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="pb-7 pr-12 text-base leading-relaxed text-ink-muted">{faq.answer}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </Container>
      </section>

      <section className="section bg-sand">
        <Container className="max-w-3xl text-center">
          <SectionHeading
            eyebrow="Still curious?"
            title={<>We&rsquo;re happy to <em>help</em></>}
            alignment="center"
            className="!mb-8"
          />
          <ButtonLink to="/contact" variant="primary">Contact Us</ButtonLink>
        </Container>
      </section>
    </div>
  );
};
