import styled, { css, keyframes } from "styled-components";
import Background from "./../../../../assets/images/waves.svg";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const NurseryStyledSection = styled.section<{starszakowo?: boolean, isMaluszkowo?: boolean, isStarszakowo?: boolean, isCharacteristic: boolean}>`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-bottom: ${props => (props.isCharacteristic && (props.starszakowo || !props.isStarszakowo)) ? '2rem' : '0'};
  padding-bottom: 4rem;
  background: linear-gradient(90deg, 
    #004e75 0%,
    #069 50%,
    var(--color-accent-2) 100%) 0% 0% / 250%;
  animation: ${gradient} 5s linear infinite alternate;
  white-space: pre-wrap;

  @media only screen and (min-width: 992px) { padding-bottom: 6rem; }

  ${props => props.starszakowo && css<{isMaluszkowo?: boolean}>`
    top: -1px;
    padding-top: ${props => props.isMaluszkowo ? '5rem' : '0'};

    @media only screen and (min-width: 768px) {
      margin-top: ${props => props.isMaluszkowo ? '-8rem' : '0'};
      padding-top: 0;
    }

    @media only screen and (min-width: 992px) { margin-top: ${props => props.isMaluszkowo ? '-7rem' : '0'}; }
  `}
`

export const NurseryContentContainer = styled.div<{isCharacteristic: boolean, isStarszakowo?: boolean}>`
  width: 100%;
  max-width: 540px;
  color: var(--color-white);
  margin-top: -13rem;
  margin-bottom: ${props => props.isStarszakowo ? '7rem' : props.isCharacteristic && '3rem'};
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

export const NurseryContentHeading = styled.h2<{starszakowo?: boolean}>`
  text-align: ${props => props.starszakowo ? 'right' : 'left'};
`

export const NurseryWaveTop = styled.img`
  position: relative;
  top: -1px;
  width: 100%;
  height: var(--wave-height);
`

export const NurseryWaveBottom = styled.div`
  position: relative;
  bottom: -4.1rem;
  width: 100%;
  height: var(--wave-height);
  background-image: url(${Background});
  background-size: 100% 100%;
  transform: rotate(180deg);
  margin-top: -10rem;

  @media only screen and (min-width: 992px) { bottom: -6rem; }
`

export const StyledNurseryImageContainer = styled.div<{starszakowo?: boolean}>`
  position: relative;
  top: -14rem;
  right: 1rem;
  display: flex;
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
`