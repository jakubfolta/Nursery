import styled from "styled-components";

export const StyledImageContainer = styled.div`
  display: flex;
  margin-bottom: -4rem;

  @media only screen and (min-width: 992px) { margin-bottom: 0; }
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`