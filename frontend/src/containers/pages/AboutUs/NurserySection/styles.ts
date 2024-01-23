import styled, { css, keyframes } from "styled-components";
import Background from "./../../../../assets/images/waves.svg";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const NurseryStyledSection = styled.section<{starszakowo?: boolean, isMaluszkowo?: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(90deg, 
    hsl(from var(--color-accent-2) h s 23%) 0%,
    hsl(from var(--color-accent-2) h s 30%) 50%,
    var(--color-accent-2) 100%);
  background-size: 250%;
  animation: ${gradient} 5s linear infinite alternate;
  white-space: pre-wrap;

  ${props => props.starszakowo && css<{isMaluszkowo?: boolean}>`
    padding-top: ${props => props.isMaluszkowo ? '9rem' : '0'};

    @media only screen and (min-width: 768px) {
      margin-top: -4rem;
      padding: 0;
    }

    @media only screen and (min-width: 992px) { margin-top: -2rem; }
  `}
`

export const NurseryContentContainer = styled.div`
  width: 100%;
  max-width: 540px;
  color: var(--color-white);
  margin-top: -13rem;
  margin-bottom: 7rem;
  padding: 0 1rem;
  
  @media only screen and (min-width: 768px) {
    margin-top: 0;
    max-width: 720px;
  }

  @media only screen and (min-width: 992px) { max-width: 960px; }
  @media only screen and (min-width: 1200px) { max-width: 1140px; }
  @media only screen and (min-width: 1400px) { max-width: 1320px; }
`

export const NurseryContentHeading = styled.h2<{starszakowo?: boolean}>`
  text-align: ${props => props.starszakowo ? 'right' : 'left'};
`

export const NurseryWaveTop = styled.div`
  width: 100%;
  height: var(--wave-height);
  bottom: 0;
  background-image: url(${Background});
`

export const StyledNurseryImageContainer = styled.div<{starszakowo?: boolean}>`
  position: relative;
  top: -14rem;
  right: 1rem;
  width: 70%;
  border-radius: ${props => props.starszakowo ? '22% 78% 65% 35% / 27% 82% 18% 73%' : '74% 26% 32% 68% / 75% 23% 77% 25%'};
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.4);
  background-color: hsl(0, 0%, 60%);
  overflow: hidden;
  z-index: 1;

  @media only screen and (min-width: 768px) {
   top: 0rem;
   right: ${props => props.starszakowo ? '2rem' : '-2rem'};
   width: 80%;
   border-radius: ${props => props.starszakowo ? '52% 48% 73% 27% / 35% 39% 61% 65%' : '51% 49% 21% 79% / 51% 40% 60% 49%'};
  }
   
  @media only screen and (min-width: 992px) {
    right: 1rem;
    width: 55%;
  }

  @media only screen and (min-width: 1400px) { max-width: 1020px; }
`

export const StyledNurseryImage = styled.img`
  width: 100%;
  object-fit: cover;
`