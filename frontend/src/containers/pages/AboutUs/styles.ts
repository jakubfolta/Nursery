import styled from "styled-components";

export const StyledImageContainer = styled.div`
  width: 90%;
  border-radius: 51% 49% 21% 79% / 51% 40% 60% 49%;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.4);
  background-color: hsl(0, 0%, 60%);
  overflow: hidden;
  z-index: 1;

  @media only screen and (min-width: 992px) { width: 100%; }
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const SuccessSection = styled.section`
  && { margin-bottom: 6rem; }
  margin-top: 6rem;

  @media only screen and (min-width: 768px) { && { margin-bottom: 4rem; } }
  @media only screen and (min-width: 992px) { && { margin-bottom: 2rem; } }
  @media only screen and (min-width: 1200px) { && { margin-bottom: 3rem; } }
`

