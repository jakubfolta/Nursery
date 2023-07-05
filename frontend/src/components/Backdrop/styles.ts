import styled, { css } from "styled-components";
import { StyledProps } from "./interfaces";

export const StyledBackdrop = styled.div<StyledProps>`
	position: absolute;
	visibility: hidden;
	top: 0;
	left: 0;
	width: 100vw;
	height: 100vh;
	background-color: var(--color-white);
	opacity: 0;

	${props => props.isVisible
		? css`animation: appear var(--menu-animation-duration) forwards;`
		: !props.isVisible && props.isClicked && css`animation: hide var(--menu-animation-duration);`
	}

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