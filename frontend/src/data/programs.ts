import type { Program, ProgramInitiativeGroup } from '../types/content';

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
    coverImage: '/Medical equipment hyd 1 crore/WhatsApp Image 2026-08-19 at 11.12.18 PM.webp',
    impactStats: [
      { label: 'RO Plants Installed', value: '17', suffix: '+' },
      { label: 'Healthcare Centers Supported', value: '12', suffix: '+' }
    ],
    initiativeGroups: [
      {
        heading: 'Revamping Healthcare and Infrastructure in Rural Areas',
        intro: 'SRAYI is dedicated to transforming rural healthcare and infrastructure through impactful initiatives. We aim to foster sustainable growth and improve well-being in underserved regions. Our efforts include installing RO plants in government schools for clean drinking water, developing hospital infrastructure across CHCs, PHCs, Area Hospitals, and Anganwadi centers, and enhancing medical facilities by providing essential equipment and resources.',
        items: []
      },
      {
        heading: 'Safe Drinking Water for All',
        subheading: 'Empowering Communities Through Clean Water Solutions',
        intro: 'Access to clean drinking water is a fundamental right, yet many rural communities struggle with water contamination and scarcity. As part of our mission to improve public health, SRAYI has actively installed RO water purification plants in government schools and healthcare centers.\n\nThese initiatives ensure that students and patients have access to safe, hygienic drinking water, reducing waterborne diseases and promoting overall well-being. Our goal is to continue expanding this effort to reach more underserved regions and build a healthier future for all.',
        items: []
      }
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
    coverImage: '/Bihar ro plant 50 lakhs/WhatsApp Image 2026-08-19 at 11.17.10 PM (2).webp',
    impactStats: [
      { label: 'Children Educated', value: '10,000', suffix: '+' },
      { label: 'Schools Supported', value: '45', suffix: '+' }
    ],
    intro: 'At SRAYI, we believe that education is the bedrock of sustainable development and personal empowerment. Our programs in education and skill development address the critical need for accessible, quality education.',
    initiativesHeading: 'Education and Skill Development',
    initiatives: [
      {
        title: 'Educational Access and Infrastructure',
        description: 'We establish and support local schools and learning centers, providing essential resources such as books, teaching materials, and infrastructure enhancements. This ensures a conducive learning environment for children and young adults.'
      },
      {
        title: 'Adult Literacy Programs',
        description: 'Acknowledging the need for adult education, SRAYI runs literacy programs that empower adults with basic reading, writing, and numeracy skills, enabling them to engage more fully in community life and economic activities.'
      },
      {
        title: 'Skill Development Initiatives',
        description: 'Beyond formal education, our skill development programs focus on practical life skills, including financial literacy, technology basics, and vocational training. These skills enable individuals to navigate daily challenges and improve their socioeconomic conditions.'
      }
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
    coverImage: '/Skill development Mamidikudhuru ap 1 cr/WhatsApp Image 2026-08-19 at 11.16.05 PM (2).webp',
    impactStats: [
      { label: 'Youth Trained', value: '500', suffix: '+' },
      { label: 'Entrepreneurs Supported', value: '100', suffix: '+' }
    ],
    initiativeGroups: [
      {
        heading: 'Youth Empowerment',
        intro: "Youth empowerment is central to SRAYI's commitment to societal transformation. We believe that an educated, skilled, and motivated youth is the cornerstone of a prosperous society.",
        items: [
          {
            title: 'Vocational Training and Employment Opportunities',
            description: 'Our vocational training programs equip youth with job-ready skills in fields like carpentry, computer literacy, and digital marketing. By bridging the gap between education and employment, we provide young individuals with a pathway to economic self-sufficiency.'
          },
          {
            title: 'Leadership Development',
            description: 'We conduct workshops on leadership skills, problem-solving, and community organizing to inspire youth to take active roles in their communities. Through youth clubs and volunteer opportunities, they can initiate positive change in their own localities.'
          },
          {
            title: 'Entrepreneurial Support',
            description: 'For those with an entrepreneurial spirit, SRAYI offers mentorship, resources, and seed funding to support small business ventures. By fostering entrepreneurship, we encourage youth to innovate within their communities, reducing migration to urban areas.'
          }
        ]
      },
      {
        heading: 'Women Empowerment',
        intro: "Empowering women is essential to fostering inclusive development. SRAYI's women empowerment programs focus on enabling women to be active, equal participants in all aspects of community life.",
        items: [
          {
            title: 'Vocational Training for Women',
            description: 'Through skill-building programs, women learn crafts such as weaving, tailoring, and baking. These skills allow women to contribute to household income and build confidence in their abilities.'
          },
          {
            title: 'Financial Literacy and Self-Help Groups',
            description: 'We organize financial literacy workshops to help women manage finances, save, and invest wisely. Additionally, self-help groups encourage women to support each other, share resources, and collaborate on small-scale entrepreneurial ventures.'
          },
          {
            title: 'Health and Safety Education',
            description: "SRAYI provides education on women's health, including reproductive health, personal hygiene, and safety awareness. These programs empower women to make informed health choices and improve their overall well-being."
          }
        ]
      }
    ]
  },
  {
    id: 'prog-environment',
    slug: 'environmental-sustainability',
    title: 'Environmental Sustainability',
    overview: 'Through initiatives in tree planting, waste management, and clean energy adoption, SRAYI Association encourages eco-friendly practices to preserve natural resources and promote sustainable community growth.',
    // No separate challenge/approach copy exists for this programme yet, left empty and hidden in the UI.
    challenge: '',
    approach: '',
    coverImage: '/about/about_hero_bg.webp',
    initiativesHeading: 'Promoting Sustainable Practices',
    initiatives: [
      {
        title: 'Afforestation and Tree-Planting Drives',
        description: 'We organize community tree-planting drives to combat deforestation, improve air quality, and enhance green cover. These drives involve community members, including youth and children, fostering a sense of environmental responsibility.'
      },
      {
        title: 'Nutrition & Hygiene Awareness',
        description: 'Education on proper nutrition, hygiene, and sanitation practices is provided to prevent common health issues. By empowering individuals with knowledge, we help reduce the occurrence of preventable diseases.'
      },
      {
        title: 'Water Conservation Initiatives',
        description: 'Recognizing the scarcity of clean water in many rural areas, we actively promote rainwater harvesting and efficient water use practices. Our initiatives focus on educating communities about water conservation to ensure sustainable access for future generations.'
      },
      {
        title: 'Waste Management and Clean Energy',
        description: "SRAYI advocates for sustainable waste management practices such as composting and recycling to reduce waste. Additionally, we promote the adoption of clean energy sources like solar power, aiming to minimize reliance on fossil fuels and lower the community's carbon footprint."
      }
    ]
  }
];

/** Normalises `initiatives` / `initiativeGroups` into a single list of groups for rendering. */
export const getInitiativeGroups = (program: Program): ProgramInitiativeGroup[] => {
  if (program.initiativeGroups?.length) return program.initiativeGroups;
  if (program.initiatives?.length) {
    return [{ heading: program.initiativesHeading ?? 'Key Initiatives', items: program.initiatives }];
  }
  return [];
};
