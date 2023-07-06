export interface SharedProps {
  isVisible: boolean;
  isClicked: boolean;
  isDesktop: boolean;
}

export interface Props extends SharedProps {
  onNavItemClick: () => void;
}

export interface StyledProps extends SharedProps {
  navigationHeight: number;
  headerHeight: number;
}