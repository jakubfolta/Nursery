import styled from "styled-components";

export const MainContainer = styled.main<{headerHeight: number, theme: string}>`
  height: 2000px;
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.headerHeight}px;
  background: ${props => props.theme};
  background: linear-gradient(140deg, 
    ${props => `hsl(from ${props.theme} h s 23%)`} 0%,
    ${props => `hsl(from ${props.theme} h s 30%)`} 50%,
    ${props => props.theme} 100%);

  @media only screen and (min-width: 536px) { align-items: center; }
`