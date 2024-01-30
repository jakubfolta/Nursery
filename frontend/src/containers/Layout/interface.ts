import { JSXElementConstructor, ReactElement } from "react";

export interface Props {
  children: ReactElement<any, string | JSXElementConstructor<any>>;
  isFirstVisit: boolean;
  showTransitionPage: boolean;
  theme: string;
  displayLocation: string;
}