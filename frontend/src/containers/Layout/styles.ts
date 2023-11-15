import styled from "styled-components";

export const MainContainer = styled.main<{headerHeight: number, theme: string}>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.headerHeight}px;
  background-color: ${props => props.theme};

  @media only screen and (min-width: 536px) { align-items: center; }
`