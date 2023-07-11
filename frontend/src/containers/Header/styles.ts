import styled from "styled-components";

export const StyledHeader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  padding: var(--padding-small);
  background: var(--color-white);
`

export const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 540px;
  padding: 0 .5rem;
  z-index: 10;

  @media only screen and (min-width: 150px) { justify-content: space-between; }
  @media only screen and (min-width: 768px) {
    max-width: 768px;
    padding: 0;
  }

  @media only screen and (min-width: 1024px) { max-width: 1024px; }
  @media only screen and (min-width: 1400px) { max-width: 1400px; }
`