import type { Program } from '../types/content';

export const programs: Program[] = [
  {
    id: 'prog-health',
    slug: 'healthcare-and-wellness',
    title: 'Healthcare & Wellness',
    overview: 'Delivering crucial medical equipment and ensuring clean drinking water to rural healthcare centres and schools.',
    challenge: 'Rural areas often lack access to basic medical equipment, proper sanitation, and safe drinking water. This geographical isolation leads to preventable diseases and poor health outcomes, which disproportionately affect children and the elderly.',
    approach: 'We partner with local authorities, schools, and hospitals to install Reverse Osmosis (RO) plants, supply essential medical diagnostic equipment, and construct dedicated sanitation facilities (Shauchalay).',
    activities: [
      'Installation of RO water purification plants',
      'Supply of medical equipment to rural health centers',
      'Construction of school sanitation facilities',
      'Health and hygiene awareness camps'
    ],
    communitiesServed: 'Rural villages, Anganwadi centers, and primary schools across multiple districts.',
    coverImage: '/assets/images/programs/health-cover.jpg',
    impactStats: [
      { label: 'RO Plants Installed', value: '17', suffix: '+' },
      { label: 'Healthcare Centers Supported', value: '12', suffix: '+' }
    ]
  },
  {
    id: 'prog-education',
    slug: 'education-and-infrastructure',
    title: 'Education & School Infrastructure',
    overview: 'Enhancing the physical infrastructure of schools and providing essential furniture and digital classrooms.',
    challenge: 'Many rural schools lack the basic infrastructure needed to provide a comfortable and effective learning environment. Students often sit on the floor, and teachers lack modern instructional tools, leading to high dropout rates.',
    approach: 'We focus on structural improvements by supplying desks and benches, building digital classrooms, and distributing educational kits. Our goal is to create environments where students are eager to learn and stay in school.',
    activities: [
      'Distribution of school furniture (desks/benches)',
      'Setup of digital classrooms and computer labs',
      'Distribution of student kits (bags, books, stationery)',
      'Infrastructure repairs and school painting'
    ],
    communitiesServed: 'Government primary and high schools in underserved regions.',
    coverImage: '/assets/images/programs/education-cover.jpg',
    impactStats: [
      { label: 'Children Educated', value: '10,000', suffix: '+' },
      { label: 'Schools Supported', value: '45', suffix: '+' }
    ]
  },
  {
    id: 'prog-empowerment',
    slug: 'youth-and-women-empowerment',
    title: 'Youth & Women Empowerment',
    overview: 'Providing skill development, vocational training, and entrepreneurship opportunities to foster self-reliance.',
    challenge: 'High unemployment rates and lack of vocational skills trap many rural youth and women in a cycle of poverty. Without marketable skills, they are unable to participate in the growing economy.',
    approach: 'We conduct specialized training programs in tailoring, computer literacy, and small business management. We also provide seed support for micro-entrepreneurs to help them launch their own sustainable businesses.',
    activities: [
      'Vocational training centers (e.g., tailoring for women)',
      'Computer literacy programs for youth',
      'Entrepreneurship workshops and seed funding guidance',
      'Leadership and life skills training'
    ],
    communitiesServed: 'Unemployed youth, young women, and aspiring rural entrepreneurs.',
    coverImage: '/assets/images/programs/empowerment-cover.jpg',
    impactStats: [
      { label: 'Youth Trained', value: '500', suffix: '+' },
      { label: 'Entrepreneurs Supported', value: '100', suffix: '+' }
    ]
  }
];
