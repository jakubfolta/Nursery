import { PagesProps, NavigationItemProps, NurseryDetailsProps, SchedulesProps } from "../shared/api.interfaces";

export interface Context {
  pages: PagesProps;
  navigationItems: NavigationItemProps[];
  nurseryDetails: NurseryDetailsProps;
  isFetchingError: boolean;
  headerHeight: number;
  isNurseriesContentAvailable: boolean;
  schedules: SchedulesProps;
}