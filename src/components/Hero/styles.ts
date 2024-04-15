import styled, { css, keyframes } from "styled-components";
import Background from "./../../assets/images/waves.svg";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

const waveAnimation = css`
  @keyframes wave {
    100% { background-position: 700px 0px; }
  }

  @media only screen and (min-width: 536px) {
    @keyframes wave {
      100% { background-position: 1000px 0px; }
    }
  }
`

export const StyledHeroContainer = styled.div<{theme: string, firefoxColorOne: string, firefoxColorTwo: string, isMainPage?: boolean, headerHeight: number}>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;

  // Firefox compatibility
  @supports(background-color: hsl(from #117302 h s 23%)) {
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
        var(--color-accent-5) 100%) 0% 0% / 1000%`
    };
  }

  background: ${props => !props.isMainPage
    ? `linear-gradient(140deg,
        ${props.firefoxColorOne} 0%,
        ${props.firefoxColorTwo} 50%,
        ${props.theme} 100%)`
    : `linear-gradient(140deg, 
        #117302 0%,
        #21e004 11.1%,
        #61CAFF 22.2%,
        #004e75 33.3%,
        #704e05 44.4%,
        #F6BA39 55.5%,
        #8D3682 66.6%,
        #55204e 77.7%,
        #232753 88.8%,
        #303772 100%) 0% 0% / 1000%`
    };
  
  ${props => props.isMainPage && css`
    animation: ${gradient} 60s linear infinite alternate;
  `}

  @media only screen and (min-width: 992px) { height: calc(100vh - (${props => props.headerHeight}px + var(--header-border))); }
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
    flex: 1;
    flex-direction: row;
    max-width: 960px;
    margin-top: 8rem;
    margin-bottom: 0;
    padding-bottom: 0;
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
  overflow-wrap: anywhere;

  @media only screen and (min-width: 992px) { overflow-wrap: normal; }
  @media only screen and (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  &:nth-child(2) {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 5rem;
    
    @media only screen and (min-width: 992px) { margin: 0 0 0 7rem; }
  }
`

export const StyledHeading = styled.h1<{isMainPage?: boolean}>`
  text-align: center;
  margin-bottom: 2rem;
  padding-top: 2rem;
  font-size: var(--main-page-heading);

  @media only screen and (min-width: 768px) {
    font-size: ${props => props.isMainPage ? `var(--main-page-heading)` : 'var(--other-pages-heading)'};
  }

  @media only screen and (min-width: 992px) { text-align: left; }
  @media only screen and (min-width: 1200px) { padding-top: 0; }
`

export const StyledDescription = styled.p`
  position: relative;
  font-size: var(--big-font-size);
`

export const StyledUnderline = styled.span`
  position: absolute;
  bottom: -20px;
  left: 0;
  min-width: var(--underline-width);
  max-width: 600px;
  width: var(--underline-width);
  height: 10px;
  border-radius: 3px;
  background-color: var(--color-white);
`

export const StyledDivider = styled.div`
  position: relative;
  bottom: -1px;
  width: 100%;
  height: 90px;
`

export const Wave = styled.div`
  ${waveAnimation}
  
  position: absolute;
  bottom: 0;
  width: 100%;
  height: var(--wave-height);
  background-image: url(${Background});
  background-size: 700px;
  background-repeat: repeat-x;
  transform: rotate(180deg);
  animation: wave 20s reverse linear infinite;

  @media only screen and (min-width: 536px) { background-size: 1000px; }
  
  &:nth-child(2) {
    opacity: .8;
    height: 120px;
    animation-duration: 15s;
    animation-direction: normal;

    // Firefox wave height issue
    @supports not (background-color: hsl(from #117302 h s 23%)) {
      bottom: -25px;  
    }
  }

  &:nth-child(3) {
    opacity: .4;
    height: 150px;
    animation-duration: 8s;
    animation-direction: normal;

    // Firefox wave height issue
    @supports not (background-color: hsl(from #117302 h s 23%)) {
      bottom: -10px;
    }
  }

  &:nth-child(4) {
    opacity: .2;
    height: 110px;
    animation-duration: 12s;

    // Firefox wave height issue
    @supports not (background-color: hsl(from #117302 h s 23%)) {
      bottom: -35px;
    }
  }
`