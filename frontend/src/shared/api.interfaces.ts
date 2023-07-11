export interface PagesProps {
  [pageType: string]: UpdatedPageProps;
}

export interface FetchedPageProps {
  description: string;
  heading_1: string;
  text_1: string;
  heading_2?: string;
  text_2?: string;
  heading_3?: string;
  text_3?: string;
}

export interface UpdatedPageProps {
  heading_1: string;
  text_1: string;
  heading_2?: string;
  text_2?: string;
  heading_3?: string;
  text_3?: string;
}

export interface NavigationItemProps {
  title: string;
  order: number;
  slug: string;
}

export interface NurseryDetailsProps {
  description: string;
  address: string;
  email: string;
  facebook_link: string;
  phone: string;
  year: number;
}