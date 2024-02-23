export interface Props {
  heading: string;
  description: string;
  theme: string;
  isMainPage?: boolean;
  isDesktopSize?: boolean;
  children?: React.ReactNode;
}