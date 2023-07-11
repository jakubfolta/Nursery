import styled from "styled-components";

export const MainContainer = styled.main<{headerHeight: number}>`
  margin-top: ${props => props.headerHeight}px;
`