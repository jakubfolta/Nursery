import styled, { css, keyframes } from "styled-components";
import { StyledProps } from "./interfaces";

const slideDown = (height: number) => keyframes`
  from { max-height: 0; }
  to { max-height: ${height}px; }
`

const slideUp = (height: number) => keyframes`
  from { max-height: ${height}px; }
  to { max-height: 0; }
`

export const Container = styled.div<StyledProps>`
  background: var(--color-white);
  overflow: hidden;

  ${props => !props.isDesktop && css`
    position: absolute;
    top: ${props.headerHeight}px;
    left: 0px;
    max-height: 0px;
    width: 100%;
  `}
  
  ${props => props.isVisible
    ? css`animation: ${slideDown(props.navigationHeight)} var(--menu-animation-duration) ease forwards;`
    : !props.isVisible && props.isClicked && css`animation: ${slideUp(props.navigationHeight)} var(--menu-animation-duration) ease forwards;
  `}
`

export const Navigation = styled.ul<{isDesktop: boolean}>`
  display: ${props => props.isDesktop ? 'flex' : 'block'};
  list-style: none;
`