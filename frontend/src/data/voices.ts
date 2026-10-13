import type { LucideIcon } from 'lucide-react';
import { Ambulance, Bike, Building2, Camera, Dumbbell, Droplets, GraduationCap, HeartPulse, Hammer, ShieldPlus, Sparkles, Toilet, Apple } from 'lucide-react';
import { stories } from './stories';

/**
 * Slides for the home page "Voices from the Ground" section.
 * - `quote`: a beneficiary's words, taken from a story in stories.ts.
 * - `note`:  a field note. Every sentence states what the linked project report or
 *            press note documents; nothing here is attributed to a person.
 */
export interface Voice {
  id: string;
  kind: 'quote' | 'note';
  service: string;
  icon: LucideIcon;
  image: string;
  text: string;
  attribution: string;
  href: string;
  cta: string;
}

const quoteFor = (storyId: string, service: string, icon: LucideIcon): Voice[] => {
  const s = stories.find((x) => x.id === storyId);
  if (!s?.quote) return [];
  return [{
    id: s.id,
    kind: 'quote',
    service,
    icon,
    image: s.heroImage,
    text: s.quote.text,
    attribution: s.quote.role,
    href: `/stories/${s.slug}`,
    cta: 'Read the story',
  }];
};

export const voices: Voice[] = [
  ...quoteFor('story-lakshmi', 'Women Empowerment', Sparkles),
  {
    id: 'note-ambulances',
    kind: 'note',
    service: 'Emergency Healthcare',
    icon: Ambulance,
    image: '/images/projects/ambulances-mahabubabad/08.webp',
    text: 'Four new ambulances now carry emergency patients and referrals for rural and tribal communities across Mahabubabad district.',
    attribution: 'Press note · ONGC CSR · ₹1 Crore · September 2026',
    href: '/projects/ambulances-mahabubabad',
    cta: 'View project',
  },
  ...quoteFor('story-raju', 'Clean Water', Droplets),
  {
    id: 'note-cycles',
    kind: 'note',
    service: 'Girls’ Education',
    icon: Bike,
    image: '/images/projects/cycles-gudur/01.webp',
    text: 'Girl students in Gudur received new bicycles of their own for the daily journey to school.',
    attribution: 'Field note · GAIL (India) Limited CSR · September 2026',
    href: '/projects/cycles-for-girls-gudur',
    cta: 'View project',
  },
  {
    id: 'note-mgm',
    kind: 'note',
    service: 'Hospital Equipment',
    icon: HeartPulse,
    image: '/reports/mgm-warangal/14.webp',
    text: 'Ultrasound systems, a C-arm, ICU beds and anaesthesia workstations equipped MGM Hospital, Warangal.',
    attribution: 'Project report · GAIL (India) Limited CSR · 2020–21',
    href: '/projects/mgm-hospital-warangal',
    cta: 'View project',
  },
  {
    id: 'note-jangaon',
    kind: 'note',
    service: 'Higher Education',
    icon: GraduationCap,
    image: '/reports/jangaon-college/10.webp',
    text: 'A new two-storey campus for the Government Junior College for Girls in Jangaon, from foundation stone to completion.',
    attribution: 'Project report · GAIL (India) Limited CSR',
    href: '/projects/govt-junior-college-for-girls-jangaon',
    cta: 'View project',
  },
  {
    id: 'note-skills',
    kind: 'note',
    service: 'Skill Development',
    icon: Building2,
    image: '/reports/nagaram-skills/02.webp',
    text: 'Classrooms at the GAIL Institute of Skills, Nagaram, train young people for work.',
    attribution: 'Project report · GAIL (India) Limited CSR',
    href: '/projects/skill-development-mamidikudhuru',
    cta: 'View project',
  },
  {
    id: 'note-toilets',
    kind: 'note',
    service: 'School Sanitation',
    icon: Toilet,
    image: '/reports/nallagunta-toilets/12.webp',
    text: 'New toilet blocks for the students of ZPPSS Nallagunta, built under the Swachh Bharat Swachh Vidyalaya Abhiyan.',
    attribution: 'Project report · GAIL (India) Limited CSR',
    href: '/projects/school-toilets-nallagunta',
    cta: 'View project',
  },
  {
    id: 'note-nutrition',
    kind: 'note',
    service: 'Nutrition',
    icon: Apple,
    image: '/images/projects/nutrition-kits-hyderabad/01.webp',
    text: 'Nutrition kits for pregnant and lactating women in Hyderabad, supporting healthier mothers and families.',
    attribution: 'Field note · Hyderabad, Telangana',
    href: '/projects/nutrition-kits-hyderabad',
    cta: 'View project',
  },
  {
    id: 'note-bridge',
    kind: 'note',
    service: 'Rural Infrastructure',
    icon: Hammer,
    image: '/reports/gorantla-bridge/01.webp',
    text: 'A bridge at Gorantla, built from excavation of the river bed to completion, now lit with street lights.',
    attribution: 'Project report · Gorantla',
    href: '/projects/gorantla-bridge-works',
    cta: 'View project',
  },
  {
    id: 'note-cameras',
    kind: 'note',
    service: 'Community Safety',
    icon: Camera,
    image: '/reports/cc-cameras/03.webp',
    text: 'CC cameras with a live monitoring screen in Vardhannapet, inaugurated by the Minister for Panchayat Raj and the ACP, Vardhannapet.',
    attribution: 'Project report · Vardhannapet, Telangana',
    href: '/projects/cc-camera-installation',
    cta: 'View project',
  },
  {
    id: 'note-gym',
    kind: 'note',
    service: 'Sports & Fitness',
    icon: Dumbbell,
    image: '/images/projects/open-air-gym-hyderabad/04.webp',
    text: 'Open-air gym equipment gives the community in Hyderabad a shared place to stay fit together.',
    attribution: 'Field note · Hyderabad, Telangana',
    href: '/projects/open-air-gym-hyderabad',
    cta: 'View project',
  },
  {
    id: 'note-relief',
    kind: 'note',
    service: 'Relief Drives',
    icon: ShieldPlus,
    image: '/reports/masks-sanitizers/03.webp',
    text: 'Masks, sanitizers and essential supplies reached village families, distributed together with the local police.',
    attribution: 'Project report · Relief distribution',
    href: '/projects/masks-and-sanitizer-distribution',
    cta: 'View project',
  },
];
