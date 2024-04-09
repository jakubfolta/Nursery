export interface PagesProps {
  [pageType: string]: UpdatedPageProps;
}

export interface SchedulesProps {
  [facility: string]: UpdatedScheduleProps;
}

export interface GalleryProps {
  [facility: string]: string[];
}

export interface FetchedPageProps {
  description: string;
  heading_1: string;
  text_1: string;
  heading_2: string;
  text_2: string;
  heading_3: string;
  text_3: string;
}

export interface UpdatedPageProps {
  heading_1: string;
  text_1: string;
  heading_2: string;
  text_2: string;
  heading_3: string;
  text_3: string;
  heading_4: string;
  text_4: string;
  heading_5: string;
  text_5: string;
  list_item_heading_1: string;
  list_item_description_1: string;
  list_item_heading_2: string;
  list_item_description_2: string;
  list_item_heading_3: string;
  list_item_description_3: string;
  list_item_heading_4: string;
  list_item_description_4: string;
  list_item_heading_5: string;
  list_item_description_5: string;
  list_item_heading_6: string;
  list_item_description_6: string;
  list_item_heading_7: string;
  list_item_description_7: string;
  list_item_heading_8: string;
  list_item_description_8: string;
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

export interface FetchedScheduleProps {
  facility: string;
  list_item_heading_1: string;
  list_item_description_1: string;
  list_item_heading_2: string;
  list_item_description_2: string;
  list_item_heading_3: string;
  list_item_description_3: string;
  list_item_heading_4: string;
  list_item_description_4: string;
}

export interface UpdatedScheduleProps {
  list_item_heading_1: string;
  list_item_description_1: string;
  list_item_heading_2: string;
  list_item_description_2: string;
  list_item_heading_3: string;
  list_item_description_3: string;
  list_item_heading_4: string;
  list_item_description_4: string;
  list_item_heading_5: string;
  list_item_description_5: string;
  list_item_heading_6: string;
  list_item_description_6: string;
  list_item_heading_7: string;
  list_item_description_7: string;
  list_item_heading_8: string;
  list_item_description_8: string;
  list_item_heading_9: string;
  list_item_description_9: string;
  list_item_heading_10: string;
  list_item_description_10: string;
  list_item_heading_11: string;
  list_item_description_11: string;
  list_item_heading_12: string;
  list_item_description_12: string;
  list_item_heading_13: string;
  list_item_description_13: string;
  list_item_heading_14: string;
  list_item_description_14: string;
  list_item_heading_15: string;
  list_item_description_15: string;
  list_item_heading_16: string;
  list_item_description_16: string;
}