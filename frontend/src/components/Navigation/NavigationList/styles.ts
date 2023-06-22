import styled, { css } from "styled-components";
import { StyledProps } from "./interfaces";

export const Container = styled.div<StyledProps>`
  position: absolute;
  top: ${props => props.headerHeight}px;
  width: 100%;
  max-height: 0px;
  background: var(--color-white);
  border-bottom: 1px solid var(--color-grey);
  overflow: hidden;
  
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

export const Navigation = styled.ul`
  list-style: none;
  color: var(--color-white);
`