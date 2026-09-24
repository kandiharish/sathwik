import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Users, GraduationCap, HeartPulse, Leaf, Send, CheckCircle2 } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { PageHero } from '../components/layout/PageHero';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteSettings } from '../data/settings';
import { Img } from '../components/common/Img';

const areas = [
  {
    icon: Users,
    title: 'Youth Empowerment',
    text: 'SRAYI Association provides skill development, vocational training, and employment opportunities, helping youth become economically self-sufficient and community leaders.',
  },
  {
    icon: GraduationCap,
    title: 'Education and Literacy',
    text: 'By establishing learning centers and literacy programs, SRAYI Association ensures access to quality education, focusing on academic and life skills to empower individuals in making informed life choices.',
  },
  {
    icon: HeartPulse,
    title: 'Healthcare & Wellness',
    text: 'SRAYI Association promotes preventive healthcare, nutrition, and sanitation awareness through health camps and partnerships with healthcare professionals, improving community well-being.',
  },
  {
    icon: Leaf,
    title: 'Environmental Sustainability',
    text: 'Through initiatives in tree planting, waste management, and clean energy adoption, SRAYI Association encourages eco-friendly practices to preserve natural resources and promote sustainable community growth.',
  },
];

const inputClass =
  'w-full rounded-xl border border-line bg-white px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none transition focus:border-primary focus:ring-4 focus:ring-primary/10';

export const Volunteer = () => {
  const [sent, setSent] = useState(false);

  // No backend yet: compose the application as an email to the organisation.
  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Name: ${data.get('name')}`,
      `Phone: ${data.get('phone')}`,
      `Email: ${data.get('email')}`,
      `City: ${data.get('city')}`,
      `Area of interest: ${data.get('area')}`,
      '',
      `${data.get('message') ?? ''}`,
    ].join('\n');
    window.location.href = `mailto:${siteSettings.contact.email}?subject=${encodeURIComponent(
      'Volunteer application, ' + data.get('name'),
    )}&body=${encodeURIComponent(body)}`;
    setSent(true);
  };

  return (
    <>
      <PageHero
        eyebrow="Volunteer"
        title={<>Become a <em>Volunteer</em></>}
        description="Join hands for change. Together, we can uplift and transform lives in rural areas through education, healthcare, skill development, and sustainable initiatives."
        image="/real-cta/community_leaders.webp"
      >
        <a href="#apply" className="btn btn-light !px-7 !py-3.5">Apply Now</a>
      </PageHero>

      <section className="section bg-background">
        <Container>
          <SectionHeading eyebrow="Where you can help" title={<>Key Areas of <em>Focus</em></>} />
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {areas.map(({ icon: Icon, title, text }, i) => (
              <motion.div
                key={title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.7, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
                className="card card-hover p-7"
              >
                <span className="font-serif text-3xl text-gold">0{i + 1}</span>
                <Icon className="mt-5 h-6 w-6 text-primary" strokeWidth={1.5} aria-hidden="true" />
                <h3 className="mt-4 font-serif text-xl text-ink">{title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-ink-muted">{text}</p>
              </motion.div>
            ))}
          </div>
        </Container>
      </section>

      <section id="apply" className="section bg-white scroll-mt-24">
        <Container className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:items-start">
          <div className="lg:sticky lg:top-32">
            <SectionHeading
              alignment="left"
              eyebrow="Apply"
              title={<>Join hands <em>with us</em></>}
              description="Tell us a little about yourself and how you would like to contribute. Our team will get in touch with you."
              className="!mb-8"
            />
            <Img
              src="/real-cta/women_empowerment.webp"
              alt="Women nutrition and poshak distribution"
              loading="lazy"
              decoding="async"
              width={640}
              height={420}
              className="hidden lg:block w-full aspect-[3/2] object-cover rounded-2xl"
            />
          </div>

          {sent ? (
            <div className="card p-10 text-center" role="status">
              <CheckCircle2 className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
              <h3 className="mt-5 font-serif text-2xl text-ink">Thank you!</h3>
              <p className="mt-3 text-[15px] text-ink-muted">
                Your email app should open with your application. If it didn’t, write to us at{' '}
                <a className="text-primary underline" href={`mailto:${siteSettings.contact.email}`}>
                  {siteSettings.contact.email}
                </a>{' '}
                or call {siteSettings.contact.phone}.
              </p>
            </div>
          ) : (
            <form onSubmit={onSubmit} className="card p-6 md:p-10 grid gap-5 sm:grid-cols-2">
              <label className="grid gap-2 text-sm font-medium text-ink">
                Full name
                <input name="name" required autoComplete="name" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Phone
                <input name="phone" type="tel" required autoComplete="tel" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                Email
                <input name="email" type="email" required autoComplete="email" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink">
                City / Village
                <input name="city" autoComplete="address-level2" className={inputClass} />
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
                Area of interest
                <select name="area" className={inputClass} defaultValue={areas[0].title}>
                  {areas.map((a) => (
                    <option key={a.title}>{a.title}</option>
                  ))}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-medium text-ink sm:col-span-2">
                Message
                <textarea name="message" rows={4} className={inputClass} />
              </label>
              <button type="submit" className="btn btn-primary sm:col-span-2 !py-3.5">
                <Send className="h-4 w-4" aria-hidden="true" /> Send Application
              </button>
            </form>
          )}
        </Container>
      </section>
    </>
  );
};
