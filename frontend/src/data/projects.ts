import type { Project } from '../types/content';

export const projects: Project[] = [
  {
    id: 'proj-ro-water',
    slug: 'ro-drinking-water-initiative',
    programId: 'prog-health',
    title: 'RO Drinking Water Initiative',
    category: 'Healthcare & Sanitation',
    location: 'Multiple Rural Districts',
    summary: 'Installing RO plants in primary schools, colleges, Anganwadi centres, and hospitals to provide safe drinking water.',
    challenge: 'Contaminated groundwater in specific rural belts leads to widespread waterborne diseases, severely affecting the attendance of students and the health of the general population.',
    objective: 'To ensure zero waterborne diseases in targeted communities by providing reliable, free access to purified drinking water.',
    approach: 'Identify high-need institutions, install commercial-grade RO purification plants, and train local staff on basic maintenance to ensure longevity.',
    implementation: 'We have successfully installed over 17 RO plants. Each plant is handed over to the institution\'s administration with a maintenance contract for the first year.',
    beneficiaries: 'Thousands of students, patients, and local community members.',
    impact: 'Drastic reduction in waterborne illnesses. Increased school attendance due to better student health.',
    coverImage: '/assets/images/projects/ro-water-cover.jpg',
    requiresConfirmation: true
  },
  {
    id: 'proj-med-equip',
    slug: 'medical-equipment-supplies',
    programId: 'prog-health',
    title: 'Medical Equipment Supplies Program',
    category: 'Healthcare',
    location: 'Rural Healthcare Centres',
    summary: 'Delivering crucial medical equipment to healthcare centres in rural regions to elevate healthcare services.',
    challenge: 'Rural Primary Health Centers (PHCs) often lack basic diagnostic and emergency equipment, forcing patients to travel long distances for simple procedures.',
    objective: 'Equip local health centers with the tools they need to provide immediate, accurate care.',
    approach: 'Conduct needs assessments at PHCs and supply requested medical devices ranging from BP monitors to ECG machines and emergency beds.',
    beneficiaries: 'Patients in rural areas relying on government health infrastructure.',
    impact: 'Elevated healthcare services, improved patient outcomes, and reduced out-of-pocket travel expenses for patients.',
    coverImage: '/assets/images/projects/med-equip-cover.jpg',
    requiresConfirmation: true
  },
  {
    id: 'proj-shauchalay',
    slug: 'shauchalay-sanitation-initiative',
    programId: 'prog-health',
    title: 'Shauchalay - Sanitation and Hygiene Initiative',
    category: 'Sanitation',
    location: 'Primary and High Schools',
    summary: 'Constructing new sanitation facilities in schools to promote hygiene, health, and a safe environment.',
    challenge: 'Lack of proper, segregated toilet facilities in schools is a primary reason for high dropout rates among adolescent girls in rural areas.',
    objective: 'Build gender-segregated, clean, and secure toilet blocks in schools.',
    approach: 'Partner with school management committees to construct facilities and conduct hygiene awareness sessions for students.',
    beneficiaries: 'School children, particularly female students.',
    impact: 'Improved overall hygiene and significantly reduced dropout rates among female students.',
    coverImage: '/assets/images/projects/sanitation-cover.jpg',
    requiresConfirmation: true
  },
  {
    id: 'proj-furniture',
    slug: 'furniture-supply-educational-institutes',
    programId: 'prog-education',
    title: 'Furniture Supply To Educational Institutes',
    category: 'Education Infrastructure',
    location: 'Rural Government Schools',
    summary: 'Delivering essential furniture to primary schools and Anganwadi centres to create a comfortable learning environment.',
    challenge: 'Students sitting on cold or damp floors face discomfort and health risks, which distracts from learning.',
    objective: 'Provide high-quality, durable desks and benches to schools lacking basic classroom furniture.',
    approach: 'Procure and distribute dual-desks specifically sized for different age groups in primary and secondary schools.',
    beneficiaries: 'Thousands of students across rural schools.',
    impact: 'Created comfortable, dignified learning environments that improve student concentration and posture.',
    coverImage: '/assets/images/projects/furniture-cover.jpg',
    requiresConfirmation: true
  }
];
