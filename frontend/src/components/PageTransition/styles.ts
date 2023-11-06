import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  20% {
    top: 0;
    opacity: 1;
  }

  55% {
    top: 0;
    opacity: 1;
  }

  100% {
    top: -100vh;
    opacity: 1;
  }
`

export const TransitionPage = styled.div<{isFirstVisit: boolean}>`
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100vh;
  background-color: var(--color-white);
  opacity: ${props => props.isFirstVisit ? 1 : 0};
  z-index: 100;
  animation: ${slideUp} var(--page-transition-duration) forwards;
`