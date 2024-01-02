import styled from "styled-components";

export const MainContainer = styled.main<{headerHeight: number}>`
  display: flex;
  flex-direction: column;
  margin-top: ${props => props.headerHeight}px;

  @media only screen and (min-width: 536px) { align-items: center; }
`