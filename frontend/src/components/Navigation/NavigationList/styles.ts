import styled, { css } from "styled-components";
import { StyledProps } from "./interfaces";

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
    ? css`animation: slideDown var(--menu-animation-time) ease forwards;`
    : !props.isVisible && props.isClicked && css`animation: slideUp var(--menu-animation-time) ease forwards;`}

  @keyframes slideDown {
    from { max-height: 0; }
    to { max-height: ${props => props.navigationHeight}px; }
  }
  
  @keyframes slideUp {
    from { max-height: ${props => props.navigationHeight}px; }
    to { max-height: 0; }
  }
`

export const Navigation = styled.ul<{isDesktop: boolean}>`
  display: ${props => props.isDesktop ? 'flex' : 'block'};
  list-style: none;
`