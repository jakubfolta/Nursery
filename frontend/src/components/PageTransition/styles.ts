import styled, { keyframes } from "styled-components";

const slideUp = keyframes`
  50% {
    top: 0;
    opacity: 1;
  }

  100% {
    top: -100%;
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
  width: 100vw;
  height: 100vh;
  background-color: var(--color-white);
  opacity: ${props => props.isFirstVisit ? 1 : 0};
  z-index: 10;
  animation: ${slideUp} var(--page-transition-duration) forwards;
`