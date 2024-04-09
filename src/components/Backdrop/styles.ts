import styled, { css } from "styled-components";
import { StyledProps } from "./interfaces";

export const StyledBackdrop = styled.div<StyledProps>`
	position: absolute;
	visibility: hidden;
	top: 0;
	left: 0;
	width: 100%;
	height: ${props => props.isGallery ? '100%' : '100vh'};
	background-color: var(--color-white);
	opacity: 0;
  animation: appear var(--menu-animation-duration) forwards;

  ${props => props.isGallery && css`cursor: zoom-out;`}
	${props => !props.isVisible && props.isClicked && css`animation: hide var(--menu-animation-duration);`}

	@keyframes appear {
		100% {
			opacity: .5;
			visibility: visible;
		}
	}

	@keyframes hide {
		0% {
			opacity: 0.5;
			visibility: visible;
		}
	}
`