import styled, { css, keyframes } from "styled-components";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const MainContainer = styled.main<{headerHeight: number, theme: string, isMainPage: boolean}>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.headerHeight}px;
  background: ${props => props.theme};
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

  @media only screen and (min-width: 536px) { align-items: center; }
`