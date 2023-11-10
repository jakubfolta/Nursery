import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const line = css`
  position: relative;
  height: .3rem;
  background-color: var(--color-dark);
`

export const Line1 = styled.span`
  ${line};
  top: -.5rem;
  width: 4rem;
  
  &.opened { animation: joinLine1 var(--menu-animation-duration) forwards; }
  &.closed { animation: expandLine1 var(--menu-animation-duration); }

  @keyframes joinLine1 {
    100% {
      top: .3rem;
      rotate: 45deg;
    }
  }

  @keyframes expandLine1 {
    0% {
      top: .3rem;
      rotate: 45deg;
    }

    100% {
      top: -.5rem;
      rotate: 0;
    }
  }
`

export const Line2 = styled.span`
  ${line};
  top: .5rem;
  left: .5rem;
  width: 3rem;

  &.opened { animation: joinLine2 var(--menu-animation-duration) forwards; }
  &.closed { animation: expandLine2 var(--menu-animation-duration); }

  @keyframes joinLine2 {
    100% {
      top: .3rem;
      rotate: -45deg;
    }
  }

  @keyframes expandLine2 {
    0% {
      top: .3rem;
      rotate: -45deg;
    }
    
    100% {
      top: .5rem;
      rotate: 0;
    }
  }
`