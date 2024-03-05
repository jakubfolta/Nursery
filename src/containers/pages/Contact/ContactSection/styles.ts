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
  @media only screen and (min-width: 1200px) { flex-wrap: nowrap;}
`

export const ContactContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  &:not(:last-child) { margin-bottom: 3rem; }

  @media only screen and (min-width: 768px) { width: 50%; }
  @media only screen and (min-width: 1200px) { && { margin-bottom: 0; } }
`

export const ContactImageContainer = styled.div`
  display: flex;
`

export const ContactImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ContactDescription = styled.p`
  margin-top: 1.5rem;
  font-size: var(--big-font-size);
`