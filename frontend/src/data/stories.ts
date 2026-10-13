import type { Story } from '../types/content';

export const stories: Story[] = [
  {
    id: 'story-lakshmi',
    slug: 'lakshmi-tailoring-business',
    title: 'From Struggle to Self-Reliance: Lakshmi’s Story',
    category: 'Women Empowerment',
    heroImage: '/images/cta/women_empowerment.webp',
    situation: 'Lakshmi, a mother of two in a remote village, struggled to provide for her family on a single irregular income.',
    challenge: 'With no formal vocational training, she was unable to find steady employment and faced severe financial instability.',
    action: 'She enrolled in SRAYI Association’s women’s empowerment tailoring program, completing a 6-month intensive course.',
    change: 'Upon graduation, SRAYI Association provided her with a sewing machine as seed capital.',
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
    heroImage: '/images/projects/ro-plant-janaagama/06.webp',
    situation: 'Students at the ZPHS Rural School were frequently falling ill, leading to high absenteeism.',
    challenge: 'The school’s only water source was contaminated, causing regular outbreaks of waterborne diseases among the children.',
    action: 'SRAYI Association installed a commercial-grade RO water purification plant directly on the school premises.',
    change: 'The school now has a reliable source of safe, clean drinking water for all 400 students and staff.',
    impact: 'Absenteeism due to illness dropped by 80% within the first six months.',
    quote: {
      text: 'The new RO plant at our school means we no longer get sick from the water. I haven’t missed a day of class this whole year.',
      author: 'Raju',
      role: 'Student, ZPHS Rural School'
    },
    relatedProjectId: 'proj-14',
    relatedProgramId: 'prog-health'
  }
];
