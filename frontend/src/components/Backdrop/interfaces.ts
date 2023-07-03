export interface StyledProps {
  isVisible: boolean;
  isClicked: boolean;
}

export interface Props extends StyledProps {
  onBackdropClick: React.MouseEventHandler;
}