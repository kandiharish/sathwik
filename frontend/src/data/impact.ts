import type { ImpactStat } from '../types/content';

export const impactStats: ImpactStat[] = [
  {
    label: 'Total Project Value',
    value: 30,
    prefix: '₹',
    suffix: '+ Crore',
    category: 'Financial',
    description: 'Across selected CSR initiatives',
    requiresConfirmation: false
  },
  {
    label: 'Beneficiaries Reached',
    value: '10,000',
    suffix: '+',
    category: 'People',
    requiresConfirmation: false
  },
  {
    label: 'States Reached',
    value: 7,
    category: 'Geographic',
    description: 'Telangana, Andhra Pradesh, Gujarat, Karnataka, Bihar, Jharkhand, Uttar Pradesh',
    requiresConfirmation: false
  },
  {
    label: 'Decade of Impact',
    value: 10,
    suffix: '+ Years',
    category: 'Organization',
    requiresConfirmation: false
  }
];
