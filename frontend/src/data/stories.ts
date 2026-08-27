import type { Story } from '../types/content';

export const stories: Story[] = [
  {
    id: 'story-lakshmi',
    slug: 'lakshmi-tailoring-business',
    title: 'From Struggle to Self-Reliance: Lakshmi’s Story',
    category: 'Women Empowerment',
    heroImage: '/Bihar ro plant 50 lakhs/WhatsApp Image 2026-08-19 at 11.17.09 PM (1).jpeg',
    situation: 'Lakshmi, a mother of two in a remote village, struggled to provide for her family on a single irregular income.',
    challenge: 'With no formal vocational training, she was unable to find steady employment and faced severe financial instability.',
    action: 'She enrolled in SRYIA’s women’s empowerment tailoring program, completing a 6-month intensive course.',
    change: 'Upon graduation, SRYIA provided her with a sewing machine as seed capital.',
    impact: 'Today, Lakshmi runs her own successful tailoring business and employs three other women from her village. Her children are now back in school.',
    quote: {
      text: 'Before the vocational training center opened, I struggled to support my family. Now, I run my own tailoring business and employ three other women from my village.',
      author: 'Lakshmi',
      role: 'Beneficiary, Women Empowerment Program'
    },
    relatedProgramId: 'prog-empowerment'
  },
  {
    id: 'story-raju',
    slug: 'raju-clean-water',
    title: 'Healthier Students, Better Attendance',
    category: 'Health & Education',
    heroImage: '/Medical equipment ghatkesar hyd 1 crore/WhatsApp Image 2026-08-19 at 11.19.11 PM.jpeg',
    situation: 'Students at the ZPHS Rural School were frequently falling ill, leading to high absenteeism.',
    challenge: 'The school’s only water source was contaminated, causing regular outbreaks of waterborne diseases among the children.',
    action: 'SRYIA installed a commercial-grade RO water purification plant directly on the school premises.',
    change: 'The school now has a reliable source of safe, clean drinking water for all 400 students and staff.',
    impact: 'Absenteeism due to illness dropped by 80% within the first six months.',
    quote: {
      text: 'The new RO plant at our school means we no longer get sick from the water. I haven’t missed a day of class this whole year.',
      author: 'Raju',
      role: 'Student, ZPHS Rural School'
    },
    relatedProjectId: 'proj-ro-water',
    relatedProgramId: 'prog-health'
  },
  {
    id: 'story-dr-sharma',
    slug: 'dr-sharma-rural-healthcare',
    title: 'Elevating Rural Healthcare Diagnostics',
    category: 'Healthcare',
    heroImage: '/Cycle project karimnagar/WhatsApp Image 2026-08-19 at 11.13.06 PM (2).jpeg',
    situation: 'The local Primary Health Center served 15 surrounding villages but lacked basic diagnostic equipment.',
    challenge: 'Doctors were forced to refer patients to city hospitals 50km away for routine tests, which many patients could not afford to travel to.',
    action: 'SRYIA supplied BP monitors, an ECG machine, and emergency ward beds to the health center.',
    change: 'The center is now fully equipped to handle basic diagnostics and stabilize emergency patients.',
    impact: 'Hundreds of patients now receive timely, accurate diagnoses locally, saving both money and lives.',
    quote: {
      text: 'The medical equipment supplied by SRYIA has allowed us to perform basic diagnostic tests locally. We are saving lives by catching illnesses early.',
      author: 'Dr. Sharma',
      role: 'Medical Officer, Rural Health Center'
    },
    relatedProjectId: 'proj-med-equip',
    relatedProgramId: 'prog-health'
  }
];
