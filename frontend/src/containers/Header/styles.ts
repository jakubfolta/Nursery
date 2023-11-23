import styled from "styled-components";

export const StyledHeader = styled.header<{theme: string}>`
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
    background: linear-gradient(to left, 
      ${props => `hsl(from ${props.theme} h s 23%)`} 0%,
      ${props => `hsl(from ${props.theme} h s 30%)`} 50%,
      ${props => props.theme} 100%);
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