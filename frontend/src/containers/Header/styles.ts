import styled from "styled-components";

export const StyledHeader = styled.header<{theme: string}>`
  position: fixed;
  top: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  padding: var(--padding-small);
  background: var(--color-white);
  border-top: var(--header-border) solid ${props => props.theme};
  z-index: 10;
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
    max-width: 768px;
    padding: 0;
  }

  @media only screen and (min-width: 1024px) { max-width: 1024px; }
  @media only screen and (min-width: 1400px) { max-width: 1400px; }
`