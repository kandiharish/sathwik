import type { SiteSettings } from '../types/content';

export const siteSettings: SiteSettings = {
  contact: {
    address: '1-10-1/21, St. no. 5, Ashok Nagar, Hyderabad - 500 020',
    phone: '+91 9000088422',
    email: 'admin@sathwik.org',
    workingHours: 'Mon - Fri, 9:00 AM - 5:00 PM',
  },
  social: {
    facebook: '#',
    twitter: '#',
    instagram: '#',
    linkedin: '#',
    youtube: '#'
  },
  donationInfo: {
    requiresConfirmation: true,
    bankName: 'State Bank of India',
    accountName: 'SATHWIK RURAL AND YOUTH INTEGRATED ASSOCIATION',
    accountNumber: '[TO BE PROVIDED]',
    ifscCode: '[TO BE PROVIDED]',
    branch: 'Ashok Nagar, Hyderabad',
    taxExemption: 'Donations are eligible for tax exemption under section 80G of the Income Tax Act.'
  }
};
