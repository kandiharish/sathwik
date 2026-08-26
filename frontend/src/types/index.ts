export interface ImpactStat {
  label: string;
  value: string;
  requiresConfirmation?: boolean;
}

export interface Program {
  id: string;
  name: string;
  slug: string;
  overview: string;
  theChallenge: string;
  ourApproach: string;
  coverImage?: string;
  stats: ImpactStat[];
}

export interface Project {
  id: string;
  title: string;
  slug: string;
  programId: string;
  objective: string;
  location: string;
  beneficiaries: string;
  impact: string;
  coverImage?: string;
  galleryImages?: string[];
}

export interface Story {
  id: string;
  title: string;
  slug: string;
  author: string;
  situation: string;
  action: string;
  impact: string;
  coverImage?: string;
  relatedProjectId?: string;
}

export interface SiteSettings {
  globalStats: ImpactStat[];
  contact: {
    phone: string;
    email: string;
    address: string;
  };
}
