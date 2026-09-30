export type PageTab = 
  | 'home'
  | 'rovers'
  | 'story'
  | 'mission'
  | 'team'
  | 'partners'
  | 'press'
  | 'join'
  | 'contact'
  | 'gentoo'
  | 'ice-cube';

export interface BoardMember {
  name: string;
  role: string;
}

export interface ManagementMember {
  name: string;
  role: string;
  domain: string;
}

export interface AdvisoryMember {
  name: string;
  role: string;
  affiliation: string;
}

export interface Subteam {
  id: string;
  order: number;
  name: string;
  color: string;
  leadRole?: string;
  leadName?: string;
  engineers: string[];
  scope: string;
  keyDeliverables: string[];
}

export interface PartnerTier {
  tierName: string;
  speciesName: string;
  speciesHeightCm: number;
  description: string;
  partners: string[];
}

export interface PressEntry {
  id: string;
  date: string;
  headline: string;
  summary: string;
  category?: string;
}

export interface TechnicalSpecification {
  metric: string;
  value: string;
  gentooValue: string;
  iceCubeValue: string;
  notes: string;
}

export interface HistoryMilestone {
  year: string;
  headline: string;
  membersCount: string;
  details: string;
}

export interface PartnershipBenefit {
  category: string;
  deliverable: string;
  emperor: boolean | string;
  king: boolean | string;
  gentoo: boolean | string;
  chinstrap: boolean | string;
  adelie: boolean | string;
  rockhopper: boolean | string;
}

export interface BrochureChapter {
  id: string;
  title: string;
  pageRange: string;
  summary: string;
  highlights: string[];
}
