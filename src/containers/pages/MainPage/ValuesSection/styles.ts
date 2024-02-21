import styled from "styled-components";

export const ValuesStyledSection = styled.section`
  && { @media only screen and (min-width: 992px) { flex-direction: initial; } }

  & div + div {
    margin-top: 4rem;

    @media only screen and (min-width: 992px) { margin: 0 0 0 5rem; }
  }
`
export const ValuesDescriptionContainer = styled.div`
  flex: 1 1 40%;
`

export const ValuesImageContainer = styled.div`
  display: flex;
  flex: 0 1 50%;
  overflow: hidden;
  border-radius: 13% 87% 12% 88% / 88% 20% 80% 12%;
`

export const ValuesImage = styled.img`
  width: 100%;
`