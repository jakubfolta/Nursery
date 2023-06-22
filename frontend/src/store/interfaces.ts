import { PagesProps, NavigationItemProps } from "../shared/api.interfaces";

export interface Context {
  pages: PagesProps;
  navigationItems: NavigationItemProps[],
  isFetchingError: boolean;
}