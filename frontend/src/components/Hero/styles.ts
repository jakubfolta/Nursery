import styled, { css, keyframes } from "styled-components"

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const StyledHeroContainer = styled.div<{theme: string, isMainPage?: boolean}>`
  display: flex;
  justify-content: center;
  width: 100%;
  padding-bottom: 90px;
  background: ${props => !props.isMainPage
    ? `linear-gradient(140deg, 
      ${`hsl(from ${props.theme} h s 23%)`} 0%,
      ${`hsl(from ${props.theme} h s 30%)`} 50%,
      ${props.theme} 100%)`
    : `linear-gradient(140deg, 
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
`

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
  font-size: var(--heading-font-size);

  @media only screen and (min-width: 992px) { text-align: left; }
  @media only screen and (min-width: 1200px) { padding-top: 0; }
`

export const StyledDescription = styled.p`
  font-size: var(--big-font-size);
`

export const StyledUnderline = styled.span`
  position: absolute;
  bottom: 30px;
  left: 0;
  min-width: var(--underline-width);
  max-width: 600px;
  width: var(--underline-width);
  height: 10px;
  border-radius: 3px;
  background-color: var(--color-white);
`