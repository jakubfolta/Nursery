import styled, { css } from "styled-components";

export const ButtonContainer = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 5rem;
  height: 5rem;
  border: none;
  background-color: transparent;
  cursor: pointer;
`

const line = css`
  width: 2.8rem;
  height: .3rem;
  background-color: var(--color-dark);
`

export const Button = styled.span`
  ${line}
  position: relative;
  display: flex;
  justify-content: center;
  bottom: -1rem;
  
  &::before,
  &::after {
    ${line}
    position: absolute;
    content: '';
    visibility: visible;
  }

  &::before { top: -2rem; }
  &::after { top: -1rem; }

  &.opened {
    visibility: hidden;
    transition: visibility 0s calc(var(--menu-animation-time) * 0.70);
  }

  &.closed {
    visibility: visible;
    transition: visibility 0s calc(var(--menu-animation-time) * 0.70);
  }

  &.opened::before,
  &.opened::after,
  &.closed::before,
  &.closed::after {
    animation-duration: var(--menu-animation-time);
    animation-timing-function: ease-in;
    animation-fill-mode: forwards;
  }

  &.opened::before { animation-name: joinBefore; }
  &.opened::after { animation-name: joinAfter; }

  &.closed::before { animation-name: expandBefore; }
  &.closed::after { animation-name: expandAfter; }  

  @keyframes joinBefore {
    0% { top: -2rem; }
    10% { transform: rotate(-20deg); }
    32% { transform: rotate(0deg); }
    
    33% {
      top: -1rem;
      visibility: hidden;
    }

    34% { top: 0; }
    69% { visibility: hidden; }
    
    70% {
      top: 0;
      visibility: visible;
    }

    90% {
      top: -1rem;
      transform: rotate(0deg);
    }

    100% {
      top: -1rem;
      transform: rotate(-45deg);
    }
  }

  @keyframes expandBefore {
    0% {
      top: -1rem;
      transform: rotate(-45deg);
    }

    32% { transform: rotate(180deg); }
    
    32.1% {
      visibility: hidden;
      transform: rotate(0deg);
    }
    
    33% {
      top: -1rem; 
      visibility: visible;
    }

    70% { top: 0rem; }
    100% { top: -2rem; }
  }

  
  @keyframes joinAfter {
    33% {
      top: -1rem;
      transform: rotate(0deg);
    }

    43% { transform: rotate(20deg); }
    65% { transform: rotate(0deg); }
    66% { top: 0rem; }
    
    70% {
      top: 0;
      visibility: visible;
    }
    
    90% {
      top: -1rem;
      transform: rotate(0deg);
    }
    
    100% {
      top: -1rem;
      transform: rotate(45deg);
    }
  }

  @keyframes expandAfter {
    0% {
      top: -1rem;
      transform: rotate(45deg);
    }

    32% { transform: rotate(-180deg); }
    
    32.1% {
      visibility: hidden;
      transform: rotate(0deg);
    }
    
    33% {
      top: -1rem; 
      visibility: visible;
    }
    
    70% { top: 0rem; }
    100% { top: -1rem; }
  }
`