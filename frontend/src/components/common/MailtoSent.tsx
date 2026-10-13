import { useState } from 'react';
import { CheckCircle2, Copy, Check, Mail } from 'lucide-react';
import { mailtoHref, type ComposedMail } from '../../lib/mailto';

interface Props {
  to: string;
  mail: ComposedMail;
  title: string;
  onBack: () => void;
  backLabel: string;
}

/**
 * Shown after a form hands its message to the visitor's email app. A mailto link can
 * fail silently (no mail app set up), so the composed message stays available to copy.
 */
export const MailtoSent = ({ to, mail, title, onBack, backLabel }: Props) => {
  const [copied, setCopied] = useState(false);
  const text = `To: ${to}\nSubject: ${mail.subject}\n\n${mail.body}`;

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  return (
    <div role="status" className="flex h-full flex-col items-center justify-center py-8 text-center md:py-12">
      <span className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-primary-soft text-primary">
        <CheckCircle2 className="h-8 w-8" aria-hidden="true" />
      </span>
      <h2 className="mb-3 font-serif text-3xl font-semibold text-ink">{title}</h2>
      <p className="mb-6 max-w-md text-[15px] leading-relaxed text-ink-muted">
        Your email app should have opened with everything filled in. Just press send there. If it didn’t open, copy
        your message and email it to{' '}
        <a href={`mailto:${to}`} className="font-semibold text-primary link-underline break-all">{to}</a>.
      </p>
      <div className="flex w-full max-w-md flex-col gap-3 sm:flex-row sm:justify-center">
        <a href={mailtoHref(to, mail)} className="btn btn-primary">
          <Mail className="h-4 w-4" aria-hidden="true" /> Open email again
        </a>
        <button type="button" onClick={copy} className="btn btn-outline">
          {copied ? <Check className="h-4 w-4" aria-hidden="true" /> : <Copy className="h-4 w-4" aria-hidden="true" />}
          {copied ? 'Copied' : 'Copy message'}
        </button>
      </div>
      <button type="button" onClick={onBack} className="mt-6 text-[14px] font-semibold text-primary hover:underline">
        {backLabel}
      </button>
    </div>
  );
};
