export interface Props {
  isVisible: boolean;
  isClicked: boolean;
  isDesktop: boolean;
}

export interface StyledProps extends Props {
  navigationHeight: number;
  headerHeight: number;
}