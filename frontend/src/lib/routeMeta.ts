import type { PageMeta } from './seo';

/** Static meta for top-level routes. Also consumed by scripts/seo-prerender.mjs. */
export const routeMeta: Record<string, Omit<PageMeta, 'path'>> = {
  '/': {
    title: 'SATHWIK | Rural and Youth Integrated Association (SRAYI) | NGO in Hyderabad',
    description:
      'SRAYI Association empowers rural communities across India through clean RO drinking water, healthcare equipment, school infrastructure, nutrition and youth skill development since 2015.',
  },
  '/about': {
    title: 'About Us | Our Story, Vision & Mission | SATHWIK',
    description:
      'Discover the story, leadership, milestones and values of Sathwik Rural and Youth Integrated Association, serving rural India since 2015.',
  },
  '/programs': {
    title: 'Our Programs | Health, Education, Water & Empowerment | SATHWIK',
    description:
      'Explore SRAYI programs in rural healthcare, education and school infrastructure, clean water RO plants, youth and women empowerment, and environmental sustainability.',
  },
  '/projects': {
    title: 'Flagship CSR Projects | Track Record | SATHWIK',
    description:
      'Verified track record of CSR projects executed with GAIL, NTPC, HAL and other PSUs across Andhra Pradesh, Telangana, Karnataka, Bihar, Jharkhand, Gujarat and Uttar Pradesh.',
  },
  '/impact': {
    title: 'Impact | Measurable Change by the Numbers | SATHWIK',
    description:
      '₹30+ crore of projects delivered, 10,000+ beneficiaries reached and sustainable infrastructure built across seven Indian states.',
  },
  '/impact/map': {
    title: 'Geographic Reach | Where We Work | SATHWIK',
    description: 'See the states and districts where SRAYI Association has delivered healthcare, water, education and livelihood projects.',
  },
  '/stories': {
    title: 'Stories of Change | Voices from Rural India | SATHWIK',
    description:
      'Real narratives of rural transformation: health camps, school development, clean water and women-led livelihoods supported by SRAYI.',
  },
  '/gallery': {
    title: 'Photo Gallery | Our Work on the Ground | SATHWIK',
    description:
      'Photographs from SRAYI field work: RO water plants, hospital equipment handovers, nutrition drives, school projects and community programs.',
  },
  '/contact': {
    title: 'Contact Us & CSR Partnerships | SATHWIK',
    description:
      'Reach SRAYI Association in Ashok Nagar, Hyderabad for CSR partnerships, project proposals, volunteering and community enquiries.',
  },
  '/faq': {
    title: 'Frequently Asked Questions | SATHWIK',
    description: 'Answers about our registration, CSR eligibility, donations and operational transparency.',
  },
  '/donate': {
    title: 'Donate | Support Rural Communities | SATHWIK',
    description:
      'Support clean water, healthcare, education and livelihoods in rural India.',
  },
  '/volunteer': {
    title: 'Volunteer With Us | SATHWIK',
    description: 'Join SRAYI Association as a volunteer and help rural communities through education, healthcare, and youth empowerment programs.',
  },
};
