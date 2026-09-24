import type { OrganizationInfo } from '../types/content';

export const organizationInfo: OrganizationInfo = {
  name: 'Sathwik Rural and Youth Integrated Association',
  acronym: 'SRAYI',
  foundedYear: '2015',
  mission: 'To bring sustainable development to the grassroots of India through holistic rural development, education, and youth empowerment.',
  vision: 'A society where rural communities are self-reliant, educated, and equipped with the resources for continuous sustainable growth.',
  values: [
    {
      title: 'Grassroots Empowerment',
      description: 'We believe that lasting change comes from empowering individuals within the community to take charge of their own development.'
    },
    {
      title: 'Sustainability',
      description: 'Our interventions are designed to be self-sustaining, minimizing long-term dependency on external aid.'
    },
    {
      title: 'Transparency',
      description: 'We operate with accountability to our donors, partners, and most importantly, the communities we serve.'
    }
  ],
  history: [
    'Founded in 2015, SRAYI Association started with a focus on addressing the immediate educational and infrastructural needs of rural schools.',
    'Over the years, we expanded our footprint into healthcare, providing crucial medical equipment to rural centers that lacked basic diagnostic capabilities.',
    'Recognizing that health and education are deeply intertwined with sanitation, we launched major initiatives to install RO water plants and build sanitation facilities.',
    'Today, SRAYI Association is a multi-disciplinary NGO actively managing projects in education, healthcare, youth skill development, and disaster relief across multiple districts.'
  ],
  timeline: [
    {
      year: '2015',
      title: 'Foundation',
      description: 'SRAYI Association was officially registered and began its first educational support initiatives.'
    },
    {
      year: '2017',
      title: 'Healthcare Expansion',
      description: 'Launched the medical equipment supplies program to support rural healthcare centers.'
    },
    {
      year: '2019',
      title: 'Clean Water Initiative',
      description: 'Started the installation of RO plants in schools and Anganwadi centers.'
    },
    {
      year: '2023',
      title: 'Major Milestone',
      description: 'Surpassed 10,000 lives transformed through combined initiatives.'
    }
  ]
};

/**
 * Milestone periods from the organisation's original About page.
 * The About page groups `organizationInfo.timeline` events under these phases,
 * so there is a single, merged history timeline.
 */
export const milestonePhases = [
  {
    period: '2015 to 2018',
    startYear: 2015,
    endYear: 2018,
    description: 'Established foundational programs in education and vocational skills.'
  },
  {
    period: '2018 to 2021',
    startYear: 2018,
    endYear: 2021,
    description: 'Launched healthcare and environmental sustainability initiatives.'
  },
  {
    period: '2021 to Present',
    startYear: 2021,
    endYear: Number.POSITIVE_INFINITY,
    description: 'Expanded partnerships for rural entrepreneurship and youth leadership programs.'
  }
];

/** Returns the timeline events that fall inside a phase (start inclusive, end exclusive). */
export const eventsForPhase = (phase: (typeof milestonePhases)[number]) =>
  organizationInfo.timeline.filter((event) => {
    const year = parseInt(event.year, 10);
    return year >= phase.startYear && year < phase.endYear;
  });
