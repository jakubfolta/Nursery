import styled from "styled-components";

export const StyledHero = styled.div`
  height: 60vh;
  /* background-color: var(--color-accent); */
  max-width: 540px;
  padding: 0 1rem;

  @media only screen and (min-width: 768px) { max-width: 768px; }
  @media only screen and (min-width: 1024px) { max-width: 1024px; }
`

export const StyledHeading = styled.h1`
  padding-top: 3rem;
  font-family: 'Itim', cursive;
  font-size: var(--heading-font-size);
  color: var(--color-white);
`