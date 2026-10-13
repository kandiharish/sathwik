export interface ComposedMail {
  subject: string;
  body: string;
}

/** A mailto: link that opens the visitor's email app with the message filled in. */
export const mailtoHref = (to: string, { subject, body }: ComposedMail) =>
  `mailto:${to}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
