import styled, { css, keyframes } from "styled-components";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const StyledHeader = styled.header<{theme: string, isMainPage: boolean}>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--padding-small);
  background: var(--color-white);
  border-top: var(--header-border) solid transparent;
  z-index: 10;

  &::before {
    position: absolute;
    top: calc(-1 * var(--header-border));
    left: 0;
    content: '';
    width: 100%;
    height: var(--header-border);
    background: ${props => props.theme};
    background: ${props => !props.isMainPage
      ? `linear-gradient(to right, 
        ${`hsl(from ${props.theme} h s 23%)`} 0%,
        ${`hsl(from ${props.theme} h s 30%)`} 50%,
        ${props.theme} 100%)`
      : `linear-gradient(to right, 
        ${`hsl(from ${props.theme} h s 23%)`} 0%,
        ${props.theme} 11.1%,
        
        var(--color-accent-2) 22.2%,
        hsl(from var(--color-accent-2) h s 23%) 33.3%,

        hsl(from var(--color-accent-3) h s 23%) 44.4%,
        var(--color-accent-3) 55.5%,

        var(--color-accent-4) 66.6%,
        hsl(from var(--color-accent-4) h s 23%) 77.7%,

        hsl(from var(--color-accent-5) h s 23%) 88.8%,
        var(--color-accent-5) 100%)`
    };
  
    ${props => props.isMainPage && css`
      animation: ${gradient} 60s linear infinite alternate;
      background-size: 1000%;
    `}
  }
`

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 540px;
  padding: 0 .5rem;
  z-index: 10;

  @media only screen and (min-width: 150px) { justify-content: space-between; }
  @media only screen and (min-width: 768px) {
    max-width: 720px;
    padding: 0;
  }

  @media only screen and (min-width: 1200px) { max-width: 1140px; }
  @media only screen and (min-width: 1400px) { max-width: 1400px; }
`