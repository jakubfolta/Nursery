import styled from "styled-components"

export const StyledHero = styled.div`
  height: 2000px;
  max-width: 540px;
  padding: 0 1rem;
  color: var(--color-white);

  @media only screen and (min-width: 768px) { max-width: 768px; }
  @media only screen and (min-width: 1024px) { max-width: 1024px; }
`

export const StyledHeading = styled.h1`
  margin-bottom: 2rem;
  padding-top: 2rem;
  font-family: 'Itim', cursive;
  font-size: var(--heading-font-size);
`

export const StyledDescription = styled.p`
  font-size: var(--big-font-size);
`