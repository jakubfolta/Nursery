import { PagesProps, NavigationItemProps, NurseryDetailsProps } from "../shared/api.interfaces";

export interface Context {
  pages: PagesProps;
  navigationItems: NavigationItemProps[];
  nurseryDetails: NurseryDetailsProps;
  isFetchingError: boolean;
}