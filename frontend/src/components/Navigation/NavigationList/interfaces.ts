export interface Props {
  isVisible: boolean;
  isClicked: boolean;
}

export interface StyledProps extends Props {
  navigationHeight: number;
  headerHeight: number;
}