export interface StyledProps {
  isVisible?: boolean;
  isClicked: boolean;
  isGallery?: boolean;
}

export interface Props extends StyledProps {
  onBackdropClick: () => void;
}