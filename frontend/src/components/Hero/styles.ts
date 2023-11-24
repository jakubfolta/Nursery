import styled, { css } from "styled-components"

export const StyledHero = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 540px;
  margin-top: 2rem;
  margin-bottom: 2rem;
  padding: 0 1rem 4rem;
  color: var(--color-white);

  @media only screen and (min-width: 768px) { max-width: 720px; }
  @media only screen and (min-width: 992px) {
    flex-direction: row;
    max-width: 960px;
    margin-top: 8rem;
  }

  @media only screen and (min-width: 1200px) {
    max-width: 1140px;
    margin-top: 6rem;
    padding-left: 0;
    padding-right: 0;
  }
  
  @media only screen and (min-width: 1400px) { max-width: 1320px; }
`

export const StyledContainer = styled.div`
  position: relative;
  flex: 1 1 50%;
  
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:last-child {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    
    @media only screen and (min-width: 992px) { margin: 0 0 0 7rem; }
  }
`

export const StyledHeading = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
  font-family: 'Itim', cursive;
  font-size: var(--heading-font-size);

  @media only screen and (min-width: 992px) { text-align: left; }
  @media only screen and (min-width: 1200px) { padding-top: 0; }
`

export const StyledDescription = styled.p`
  font-size: var(--big-font-size);
`