export interface ServiceItem {
  number: string;
  title: string;
  description: string;
}

export interface ProjectItem {
  id: string;
  number: string;
  title: string;
  category: string;
  badge?: string;
  badgeType?: 'award' | 'live' | 'repo';
  description: string;
  longDescription?: string;
  highlights?: string[];
  tags: string[];
  col1Image1: string;
  col1Image2: string;
  col2Image: string;
  liveUrl?: string;
  githubUrl?: string;
}

export interface AchievementItem {
  id: string;
  number: string;
  title: string;
  organization: string;
  category: string;
  badge: string;
  year: string;
  description: string;
  highlights: string[];
  certificateImg: string;
  secondaryImg?: string;
  tags: string[];
  link?: string;
}

export interface NavLinkItem {
  label: string;
  href: string;
  action?: 'scroll' | 'modal';
}
