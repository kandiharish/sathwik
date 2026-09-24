import { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useForm, useWatch } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { MapPin, Mail, Phone, Clock, ArrowRight, CheckCircle2, MessageCircle, Handshake, HeartHandshake, Heart } from 'lucide-react';
import { Container } from '../components/layout/Container';
import { SectionHeading } from '../components/ui/SectionHeading';
import { siteSettings } from '../data/settings';
import { tones, type Tone } from '../lib/tones';

const TOPICS = ['Donations', 'Volunteering', 'Partnerships', 'General Inquiry'] as const;
type Topic = (typeof TOPICS)[number];

/** The four ways in, shown as large cards at the top of the form. Each sets the topic field. */
const ENQUIRY_TYPES: { topic: Topic; label: string; description: string; icon: typeof MessageCircle; tone: Tone }[] = [
  { topic: 'General Inquiry', label: 'General enquiry', description: 'Questions about our work or programs', icon: MessageCircle, tone: 'teal' },
  { topic: 'Partnerships', label: 'CSR partnership', description: 'Fund or co-create a project with us', icon: Handshake, tone: 'blue' },
  { topic: 'Volunteering', label: 'Volunteer', description: 'Give your time and skills', icon: HeartHandshake, tone: 'green' },
  { topic: 'Donations', label: 'Donation', description: 'Support our work financially', icon: Heart, tone: 'red' },
];

const schema = z.object({
  firstName: z.string().trim().min(1, 'Please enter your first name.'),
  lastName: z.string().trim().optional(),
  email: z.string().trim().min(1, 'Please enter your email address.').email('Please enter a valid email address.'),
  phone: z
    .string()
    .trim()
    .optional()
    .refine((v) => !v || /^[+()\-\s\d]{7,20}$/.test(v), 'Please enter a valid phone number.'),
  topic: z.enum(TOPICS).optional(),
  organisation: z.string().trim().optional(),
  role: z.string().trim().optional(),
  message: z.string().trim().min(10, 'Please write a short message (at least 10 characters).'),
});

type FormValues = z.infer<typeof schema>;

const { address, phone, email, workingHours } = siteSettings.contact;
const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent('1-10-1/21, St. no. 5, Ashok Nagar, Hyderabad 500020')}&output=embed`;

const inputBase =
  'w-full rounded-xl border bg-background px-4 py-3 text-[15px] text-ink placeholder:text-ink-muted/60 outline-none transition-colors focus:border-primary focus:bg-white focus:ring-2 focus:ring-primary/15';

export const Contact = () => {
  const [sent, setSent] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>({ resolver: zodResolver(schema), defaultValues: { topic: 'General Inquiry' } });
  const topic = useWatch({ control, name: 'topic' });

  /**
   * There is no backend endpoint for this form yet, so submissions open the
   * visitor's email client with the message pre-filled (mailto fallback).
   */
  const onSubmit = (data: FormValues) => {
    const name = [data.firstName, data.lastName].filter(Boolean).join(' ');
    const subject = `${data.topic ?? 'General Inquiry'}, enquiry from ${name}`;
    const details = [`Name: ${name}`, `Email: ${data.email}`];
    if (data.phone) details.push(`Phone: ${data.phone}`);
    if (data.topic) details.push(`Interested in: ${data.topic}`);
    if (data.topic === 'Partnerships') {
      if (data.organisation) details.push(`Organisation: ${data.organisation}`);
      if (data.role) details.push(`Role: ${data.role}`);
    }
    const body = `${details.join('\n')}\n\n${data.message}`;
    window.location.assign(`mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`);
    setSent(true);
    reset();
  };

  const fieldClass = (hasError: boolean) => `${inputBase} ${hasError ? 'border-secondary' : 'border-line'}`;

  return (
    <div className="min-h-screen bg-background">
      {/* Page hero */}
      <section className="page-hero pt-32 md:pt-40 pb-10 md:pb-14 bg-background border-b border-line">
        <Container>
          <nav aria-label="Breadcrumb" className="mb-8 flex justify-center text-[13px] text-ink-muted">
            <ol className="flex items-center gap-2">
              <li><Link to="/" className="link-underline hover:text-primary">Home</Link></li>
              <li aria-hidden="true" className="text-line">/</li>
              <li aria-current="page" className="text-ink">Contact Us</li>
            </ol>
          </nav>
          <SectionHeading
            as="h1"
            eyebrow="Get in Touch"
            title={<>Let's Start a <em>Conversation</em></>}
            description="Whether you have a question about our programs, want to volunteer, or are interested in partnering with us, our team is ready to help."
            alignment="center"
            className="!mb-0"
          />
        </Container>
      </section>

      {/* Details + form */}
      <section className="section bg-white">
        <Container>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-8 lg:grid-cols-[5fr_7fr] lg:gap-12"
          >
            {/* Contact details */}
            <aside className="flex flex-col justify-between rounded-2xl bg-primary-deep p-8 text-white md:p-12">
              <div>
                <h2 className="mb-4 font-serif text-3xl font-semibold tracking-tight">Contact Information</h2>
                <p className="mb-10 text-[15px] leading-relaxed text-white/75">
                  Fill out the form and our dedicated team will get back to you within 24 hours.
                </p>

                <ul className="space-y-8">
                  <DetailItem icon={<MapPin className="h-5 w-5" />} label="Our Location">
                    <address className="not-italic">{address}</address>
                  </DetailItem>
                  <DetailItem icon={<Phone className="h-5 w-5" />} label="Phone Number">
                    <a href={`tel:${phone.replace(/\s+/g, '')}`} className="link-underline hover:text-gold-soft">
                      {phone}
                    </a>
                  </DetailItem>
                  <DetailItem icon={<Mail className="h-5 w-5" />} label="Email Address">
                    <a href={`mailto:${email}`} className="link-underline break-all hover:text-gold-soft">
                      {email}
                    </a>
                  </DetailItem>
                  <DetailItem icon={<Clock className="h-5 w-5" />} label="Working Hours">
                    {workingHours}
                  </DetailItem>
                </ul>
              </div>
            </aside>

            {/* Form */}
            <div className="card p-8 md:p-12">
              {sent ? (
                <div role="status" className="flex h-full flex-col items-center justify-center py-12 text-center">
                  <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
                    <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
                  </span>
                  <h2 className="mb-3 font-serif text-3xl font-semibold text-ink">Thank you</h2>
                  <p className="mb-8 max-w-md text-[15px] leading-relaxed text-ink-muted">
                    Your email app should now open with your message ready to send. If it didn't, write to us directly at{' '}
                    <a href={`mailto:${email}`} className="font-semibold text-primary link-underline">{email}</a>.
                  </p>
                  <button type="button" onClick={() => setSent(false)} className="btn btn-outline">
                    Send another message
                  </button>
                </div>
              ) : (
                <form noValidate onSubmit={handleSubmit(onSubmit)} className="space-y-6" aria-label="Contact form">
                  <fieldset>
                    <legend className="mb-3 text-[14px] font-semibold text-ink">How can we help?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {ENQUIRY_TYPES.map(({ topic: value, label, description, icon: Icon, tone }) => {
                        const t = tones[tone];
                        return (
                          <label key={value} className="relative cursor-pointer">
                            <input type="radio" value={value} className="peer sr-only" {...register('topic')} />
                            <span
                              className={`flex h-full items-start gap-3 rounded-2xl border border-line bg-white p-4 transition-colors hover:border-ink/20 peer-checked:border-current peer-checked:ring-1 peer-checked:ring-current peer-focus-visible:outline-2 peer-focus-visible:outline-offset-2 peer-focus-visible:outline-accent sm:flex-col sm:gap-4 sm:p-5 ${t.text}`}
                            >
                              <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${t.soft}`} aria-hidden="true">
                                <Icon className="h-5 w-5" />
                              </span>
                              <span>
                                <span className="block text-[15px] font-semibold text-ink">{label}</span>
                                <span className="mt-0.5 block text-[13px] leading-snug text-ink-muted">{description}</span>
                              </span>
                            </span>
                          </label>
                        );
                      })}
                    </div>
                  </fieldset>

                  {topic === 'Partnerships' && (
                    <div className="grid gap-6 md:grid-cols-2">
                      <Field id="organisation" label="Organisation" error={errors.organisation?.message}>
                        <input
                          id="organisation"
                          type="text"
                          autoComplete="organization"
                          className={fieldClass(!!errors.organisation)}
                          {...register('organisation')}
                        />
                      </Field>
                      <Field id="role" label="Your Role" error={errors.role?.message}>
                        <input
                          id="role"
                          type="text"
                          autoComplete="organization-title"
                          className={fieldClass(!!errors.role)}
                          {...register('role')}
                        />
                      </Field>
                    </div>
                  )}

                  {topic === 'Volunteering' && (
                    <p role="note" className="rounded-2xl bg-leaf-soft px-5 py-4 text-[14px] leading-relaxed text-ink">
                      Want to sign up? Our{' '}
                      <Link to="/volunteer" className="font-semibold text-leaf link-underline">volunteer form</Link>{' '}
                      lets you tell us your skills and availability. You can still send a message here.
                    </p>
                  )}

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="firstName" label="First Name" required error={errors.firstName?.message}>
                      <input
                        id="firstName"
                        type="text"
                        autoComplete="given-name"
                        aria-required="true"
                        aria-invalid={!!errors.firstName}
                        aria-describedby={errors.firstName ? 'firstName-error' : undefined}
                        className={fieldClass(!!errors.firstName)}
                        {...register('firstName')}
                      />
                    </Field>
                    <Field id="lastName" label="Last Name" error={errors.lastName?.message}>
                      <input
                        id="lastName"
                        type="text"
                        autoComplete="family-name"
                        aria-invalid={!!errors.lastName}
                        className={fieldClass(!!errors.lastName)}
                        {...register('lastName')}
                      />
                    </Field>
                  </div>

                  <div className="grid gap-6 md:grid-cols-2">
                    <Field id="email" label="Email Address" required error={errors.email?.message}>
                      <input
                        id="email"
                        type="email"
                        autoComplete="email"
                        aria-required="true"
                        aria-invalid={!!errors.email}
                        aria-describedby={errors.email ? 'email-error' : undefined}
                        className={fieldClass(!!errors.email)}
                        {...register('email')}
                      />
                    </Field>
                    <Field id="phone" label="Phone Number" error={errors.phone?.message}>
                      <input
                        id="phone"
                        type="tel"
                        autoComplete="tel"
                        aria-invalid={!!errors.phone}
                        aria-describedby={errors.phone ? 'phone-error' : undefined}
                        className={fieldClass(!!errors.phone)}
                        {...register('phone')}
                      />
                    </Field>
                  </div>


                  <Field id="message" label="Your Message" required error={errors.message?.message}>
                    <textarea
                      id="message"
                      rows={5}
                      aria-required="true"
                      aria-invalid={!!errors.message}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                      className={`${fieldClass(!!errors.message)} resize-y`}
                      {...register('message')}
                    />
                  </Field>

                  <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:justify-between">
                    <button type="submit" disabled={isSubmitting} className="btn btn-primary !px-8 !py-4 disabled:opacity-60">
                      Send Message <ArrowRight className="h-4 w-4" aria-hidden="true" />
                    </button>
                    <p className="text-[13px] text-ink-muted">
                      <span className="text-secondary" aria-hidden="true">*</span> Required fields
                    </p>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
        </Container>
      </section>

      {/* Map */}
      <section className="section bg-sand">
        <Container>
          <SectionHeading eyebrow="Our Location" title={<>Visit Our <em>Office</em></>} description={address} alignment="center" />
          <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-[var(--shadow-soft)]">
            <iframe
              title={`Map showing SRAYI Association office: ${address}`}
              src={mapSrc}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="block h-[380px] w-full rounded-2xl border-0 md:h-[460px]"
              allowFullScreen
            />
          </div>
        </Container>
      </section>
    </div>
  );
};

const DetailItem = ({ icon, label, children }: { icon: React.ReactNode; label: string; children: React.ReactNode }) => (
  <li className="flex items-start gap-4">
    <span className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full border border-white/15 text-gold-soft" aria-hidden="true">
      {icon}
    </span>
    <div>
      <h3 className="mb-1 font-sans text-[11px] font-semibold uppercase tracking-[0.2em] text-gold-soft">{label}</h3>
      <div className="text-[15px] leading-relaxed text-white">{children}</div>
    </div>
  </li>
);

const Field = ({
  id,
  label,
  required,
  error,
  children,
}: {
  id: string;
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) => (
  <div>
    <label htmlFor={id} className="mb-2 block text-[14px] font-semibold text-ink">
      {label}
      {required && <span className="ml-0.5 text-secondary" aria-hidden="true">*</span>}
    </label>
    {children}
    {error && (
      <p id={`${id}-error`} role="alert" className="mt-2 text-[13px] font-medium text-secondary">
        {error}
      </p>
    )}
  </div>
);
