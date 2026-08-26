// Shared Content Types for SRYIA Frontend

export interface ImpactStat {
  label: string;
  value: string | number;
  suffix?: string;
  prefix?: string;
  description?: string;
  category?: string;
  requiresConfirmation?: boolean;
}

export interface Program {
  id: string;
  slug: string;
  title: string;
  overview: string;
  whyItMatters?: string;
  challenge: string;
  approach: string;
  activities?: string[];
  communitiesServed?: string;
  coverImage?: string;
  galleryImages?: string[];
  impactStats?: ImpactStat[];
  relatedProgramIds?: string[];
}

export interface Project {
  id: string;
  slug: string;
  programId: string;
  title: string;
  category: string;
  location: string;
  year?: string;
  summary: string;
  challenge: string;
  objective: string;
  approach: string;
  implementation?: string;
  beneficiaries: string;
  impact: string;
  outcomes?: string[];
  coverImage?: string;
  galleryImages?: string[];
  requiresConfirmation?: boolean;
}

export interface Story {
  id: string;
  slug: string;
  title: string;
  category: string;
  date?: string;
  location?: string;
  heroImage: string;
  introduction?: string;
  situation: string;
  challenge: string;
  action: string;
  change: string;
  impact: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
  galleryImages?: string[];
  relatedProjectId?: string;
  relatedProgramId?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  image?: string;
}

export interface OrganizationInfo {
  name: string;
  acronym: string;
  foundedYear: string;
  mission: string;
  vision: string;
  values: { title: string; description: string }[];
  history: string[];
  timeline: TimelineEvent[];
}

export interface SiteSettings {
  contact: {
    address: string;
    phone: string;
    email: string;
    workingHours: string;
  };
  social: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
  donationInfo: {
    bankName?: string;
    accountName?: string;
    accountNumber?: string;
    ifscCode?: string;
    branch?: string;
    taxExemption?: string;
    requiresConfirmation?: boolean;
  };
}
