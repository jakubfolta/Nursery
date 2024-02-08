import styled from "styled-components";

export const ContactDetailsHeading = styled.h2`
  text-align: center;

  @media only screen and (min-width: 992px) { text-align: initial; }
`

export const ContactDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin-top: 3rem;

  @media only screen and (min-width: 768px) {
    flex-direction: initial;
    flex-wrap: wrap;
  }
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) { margin-bottom: 3rem; }

  @media only screen and (min-width: 768px) { width: 50%; }
`

export const ContactImageContainer = styled.div`
  display: flex;
`

export const ContactImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ContactDescription = styled.p`
  font-size: var(--big-font-size);
`