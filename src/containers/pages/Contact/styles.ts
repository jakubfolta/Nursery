import styled, { keyframes } from "styled-components";
import Background from "./../../../assets/images/waves.svg";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const StyledImageContainer = styled.div`
  display: flex;
  margin-bottom: -4rem;

  @media only screen and (min-width: 992px) { margin-bottom: 0; }
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const ContactFormSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-bottom: 2rem;
  background: linear-gradient(90deg, 
    hsl(from var(--color-accent-4) h s 23%) 0%,
    hsl(from var(--color-accent-4) h s 40%) 50%,
    var(--color-accent-4) 100%);
  background-size: 250%;
  animation: ${gradient} 5s linear infinite alternate;
  white-space: pre-wrap;

  @media only screen and (min-width: 992px) { padding-bottom: 4rem; }
  @media only screen and (min-width: 1400px) { padding-bottom: 5rem; }
`

export const ContactFormContainer = styled.div`
  width: 100%;
  margin-top: -2rem;
  max-width: 540px;
  color: var(--color-white);
  padding: 0 1rem;
  
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    max-width: 720px;
  }

  @media only screen and (min-width: 992px) { max-width: 960px; }
  @media only screen and (min-width: 1200px) { max-width: 1140px; }
  @media only screen and (min-width: 1400px) { max-width: 1320px; }
  @media only screen and (min-width: 1700px) { max-width: 1608px; }
`

export const ContactFormWaveTop = styled.div`
  position: relative;
  top: -1px;
  width: 100%;
  height: var(--wave-height);
  background-image: url(${Background});
`