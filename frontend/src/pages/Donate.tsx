import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Landmark, Handshake, Users, Phone, Mail, ArrowRight, Droplets, HeartPulse, GraduationCap, Leaf } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteSettings } from '../data/settings';

const causes = [
  { icon: Droplets, title: 'Clean Water', text: 'Installing RO plants in government schools ensures safe and pure drinking water, promoting better health and learning for students.', to: '/programs/healthcare-and-wellness' },
  { icon: HeartPulse, title: 'Medical Support & Sanitation', text: 'Offering essential medical care through free health camps to improve overall health and well-being.', to: '/programs/healthcare-and-wellness' },
  { icon: GraduationCap, title: 'Education & Schools', text: 'Supplying quality school furniture to create a comfortable and supportive learning environment, helping students focus and excel in their studies.', to: '/programs/education-and-infrastructure' },
  { icon: Leaf, title: 'Nutritional Support for Women', text: 'Providing essential nutrition to pregnant women and lactating mothers to support their health and well-being.', to: '/programs/youth-and-women-empowerment' },
];

const isPlaceholder = (v?: string) => !v || v.includes('TO BE PROVIDED');

const fade = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: '-60px' },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
};

export const Donate = () => {
  const { donationInfo: bank, contact } = siteSettings;
  const bankReady = !isPlaceholder(bank.accountNumber) && !isPlaceholder(bank.ifscCode);

  return (
    <>
      <PageHero
        eyebrow="Donate"
        title={<>Your gift builds a <em>brighter</em> rural India</>}
        description="Your support allows us to continue providing vital resources, education, and healthcare to rural communities. Become a part of the change today."
        image="/real-cta/donation_handover.webp"
      >
        <a href="#ways-to-give" className="btn btn-donate !px-7 !py-3.5">Ways to Give</a>
        <Link to="/contact" className="btn btn-ghost-light !px-7 !py-3.5">Talk to Us</Link>
      </PageHero>

      {/* Causes */}
      <section className="section bg-background">
        <Container>
          <SectionHeading eyebrow="Where your support goes" title={<>Enriching <em>Happiness</em></>} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {causes.map(({ icon: Icon, title, text, to }, i) => (
              <motion.div key={title} {...fade} transition={{ ...fade.transition, delay: i * 0.06 }}>
                <Link to={to} className="card card-hover group flex h-full flex-col p-7">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <Icon className="h-5 w-5" strokeWidth={1.6} aria-hidden="true" />
                  </span>
                  <h3 className="font-serif text-xl text-ink">{title}</h3>
                  <p className="mt-3 flex-1 text-[15px] leading-relaxed text-ink-muted">{text}</p>
                  <span className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Learn more <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" aria-hidden="true" />
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      {/* Ways to give */}
      <section id="ways-to-give" className="section bg-white scroll-mt-24">
        <Container>
          <SectionHeading eyebrow="Ways to give" title={<>Support our <em>mission</em></>} />
          <div className="grid gap-6 lg:grid-cols-3">
            <motion.div {...fade} className="card card-hover p-8 lg:col-span-1 border-t-4 !border-t-secondary">
              <Landmark className="h-7 w-7 text-secondary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-ink">Bank Transfer</h3>
              {bankReady ? (
                <dl className="mt-6 space-y-3 text-sm">
                  {[
                    ['Account Name', bank.accountName],
                    ['Bank', bank.bankName],
                    ['Account No.', bank.accountNumber],
                    ['IFSC', bank.ifscCode],
                    ['Branch', bank.branch],
                  ].map(([k, v]) => (
                    <div key={k} className="flex justify-between gap-4 border-b border-line pb-3">
                      <dt className="text-ink-muted">{k}</dt>
                      <dd className="text-right font-medium text-ink">{v}</dd>
                    </div>
                  ))}
                </dl>
              ) : (
                <>
                  <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                    Exciting news! Our online “Donate Now” feature is coming soon. We’re working hard to make it easier for you to
                    support our mission. Until then, please contact us and we will share our bank details for a direct transfer to{' '}
                    <strong className="font-semibold text-ink">{bank.accountName}</strong>, {bank.bankName}, {bank.branch}.
                  </p>
                  <div className="mt-6 space-y-3 text-sm">
                    <a href={`tel:${contact.phone.replace(/\s+/g, '')}`} className="flex items-center gap-3 font-medium text-primary">
                      <Phone className="h-4 w-4" aria-hidden="true" /> {contact.phone}
                    </a>
                    <a href={`mailto:${contact.email}?subject=Donation%20enquiry`} className="flex items-center gap-3 font-medium text-primary break-all">
                      <Mail className="h-4 w-4 shrink-0" aria-hidden="true" /> {contact.email}
                    </a>
                  </div>
                </>
              )}
            </motion.div>

            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.06 }} className="card card-hover p-8">
              <Handshake className="h-7 w-7 text-primary" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-ink">CSR Partnership</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                Partner with SRAYI for corporate CSR initiatives and project proposals. We have delivered projects with leading
                public sector undertakings including GAIL, NTPC and HAL.
              </p>
              <Link to="/contact" className="btn btn-outline mt-8">
                Start a conversation <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>

            <motion.div {...fade} transition={{ ...fade.transition, delay: 0.12 }} className="card card-hover p-8">
              <Users className="h-7 w-7 text-gold" strokeWidth={1.5} aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-ink">Give Your Time</h3>
              <p className="mt-4 text-[15px] leading-relaxed text-ink-muted">
                Join hands for change. Volunteers help us run health camps, nutrition drives and youth programs on the ground.
              </p>
              <Link to="/volunteer" className="btn btn-outline mt-8">
                Become a Volunteer <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </motion.div>
          </div>


          <p className="mt-12 text-center font-serif text-xl italic text-ink-muted">
            Thank you for believing in our cause. Together, we can build a better future!
          </p>
        </Container>
      </section>
    </>
  );
};
