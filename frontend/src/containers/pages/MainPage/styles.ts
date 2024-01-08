import styled, { css, keyframes } from "styled-components";
import Background from "./../../../assets/images/waves.svg";
import CheckIcon from "./../../../assets/images/check-icon.png";
import { NavLink } from "react-router-dom";

const showUp1 = keyframes`
  0% { opacity: 1; }
  16.66% { opacity: 1; }
  33.32% { opacity: 0; }
  83.30% { opacity: 0; }
  100% { opacity: 1; }
`

const showUp2 = keyframes`
  0% { opacity: 0; }
  16.66% { opacity: 0; }
  33.32% { opacity: 1; }
  49.98% { opacity: 1; }
  66.64% { opacity: 0; }
  100% { opacity: 0; }
`

const showUp3 = keyframes`
  0% { opacity: 0; }
  49.98% { opacity: 0; }
  66.64% { opacity: 1; }
  83.3% { opacity: 1; }
  100% { opacity: 0; }
`

const shapeChange = keyframes`
  0% { border-radius: 73% 27% 41% 59% / 43% 54% 46% 57%; }
  25% { border-radius: 73% 27% 29% 71% / 71% 71% 29% 29%; }
  50% { border-radius: 47% 53% 46% 54% / 37% 35% 65% 63%; }
  75% { border-radius: 77% 23% 77% 23% / 37% 67% 33% 63%; }
  100% { border-radius: 73% 27% 41% 59% / 43% 54% 46% 57%; }
`

const shake = keyframes`
  0% { transform: rotate(0deg); }
  10% { transform: rotate(3deg); }
  20% { transform: rotate(-3deg); }
  30% { transform: rotate(3deg); }
  40% { transform: rotate(-3deg); }
  50% { transform: rotate(3deg); }
  60% { transform: rotate(-3deg); }
  70% { transform: rotate(3deg); }
  80% { transform: rotate(-3deg); }
  90% { transform: rotate(3deg); }
  100% { transform: rotate(0deg); }
`

const waveAnimation = css`
  @keyframes wave {
    100% { background-position: 700px; }
  }

  @media only screen and (min-width: 536px) {
    @keyframes wave {
      100% { background-position: 1000px; }
    }
  }
`

const imageContainer = css`
  width: 80%;
  border-radius: 73% 27% 41% 59% / 43% 54% 46% 57%;
  box-shadow: 4px 4px 8px 0 rgba(0, 0, 0, 0.4);
  animation: ${shapeChange} 20s infinite;
  @media only screen and (min-width: 992px) { width: 90%; }
`

export const StyledImageContainer = styled.div`
  ${imageContainer}

  position: relative;
  display: flex;
  background-color: hsl(0, 0%, 60%);
  overflow: hidden;
  z-index: 1;  
`

export const StyledImageContainerShadow = styled.div`
  ${imageContainer}

  position: absolute;
  top: 30px;
  left: 8px;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.3);

  @media only screen and (min-width: 536px) { left: 107px; }
  @media only screen and (min-width: 992px) { left: 56px; }
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
  animation-duration: 18s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${showUp1};

  @media only screen and (min-width: 768px) { height: 50rem; }
  @media only screen and (min-width: 992px) { height: 40rem; }
  
  &:nth-child(even) { animation-name: ${showUp2}; }
  &:last-child { animation-name: ${showUp3}; }

  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
  }
`

export const StyledDivider = styled.div`
  position: relative;
  bottom: 90px;
  width: 100%;
  height: 90px;
`

export const Wave = styled.div`
  ${waveAnimation}
  
  position: absolute;
  width: 100%;
  height: 100px;
  bottom: 0;
  background-image: url(${Background});
  background-size: 700px;
  transform: rotate(180deg);
  animation: wave 20s reverse linear infinite;

  @media only screen and (min-width: 536px) { background-size: 1000px; }
  
   &:nth-child(2) {
    opacity: .8;
    height: 120px;
    animation-duration: 15s;
    animation-direction: normal;
   }

   &:nth-child(3) {
    opacity: .4;
    height: 150px;
    animation-duration: 8s;
    animation-direction: normal;
   }

   &:nth-child(4) {
    opacity: .2;
    height: 110px;
    animation-duration: 12s;
   }
`

export const FacilitiesSection = styled.section`
  margin-top: -3rem;

  @media only screen and (min-width: 992px) { margin-top: 0; }
`

export const FacilitiesDescriptionContainer = styled.div`
  align-self: stretch;
  margin-bottom: 8rem;
`

export const FacilitiesImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* margin-top: 8rem; */
  width: 100%;
  font-size: var(--xl-font-size);

  @media only screen and (min-width: 768px) { width: 80%; }
  @media only screen and (min-width: 992px) { flex-direction: initial; }
`

export const FacilitiesImageBox = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  padding: 3rem;
  background: linear-gradient(70deg, 
    var(--color-accent) 0%,
    var(--color-accent-2) 100%);
  background-size: 220%;
  border-radius: 29% 71% 45% 55% / 30% 30% 70% 70%;
  color: var(--color-white);
  transition: all 1s;
    
  &:hover {
    background-position: 100%;
    border-radius: 36% 64% 27% 73% / 71% 73% 27% 29%;
  }

  &:hover img { animation: ${shake} 1s; }
  &:hover span { transform: scale(1.2); }

  &:last-child {
    background: linear-gradient(70deg, 
      var(--color-accent-4) 0%,
      var(--color-accent-3) 100%);
    background-size: 220%;
    margin-top: 10rem;
    border-radius: 71% 29% 45% 55% / 30% 30% 70% 70%;

    &:hover {
      background-position: 100%;
      border-radius: 66% 34% 74% 26% / 73% 73% 27% 27%;
    }

    @media only screen and (min-width: 992px) { margin: 0 0 0 4rem; }
  } 
`

export const FacilitiesImage = styled.img`
  position: relative;
  top: -30px;
  width: 130%;

  @media only screen and (min-width: 320px) { width: 100%; }
  @media only screen and (min-width: 536px) { top: -10px; }
`

export const FacilitiesImageHeading = styled.span`
  position: absolute;
  bottom: 60px;
  font-size: 8vw;
  transition: transform 1s;

  @media only screen and (min-width: 320px) {
    bottom: 70px;
    font-size: inherit;
  }
`

export const ValuesSection = styled.section`
  @media only screen and (min-width: 992px) { flex-direction: initial; }

  & div + div {
    margin-top: 4rem;

    @media only screen and (min-width: 992px) { margin: 0 0 0 5rem; }
  }
`
export const ValuesDescriptionContainer = styled.div`
  flex: 0 1 40%;
`

export const ValuesImageContainer = styled.div`
  flex: 0 1 50%;
  overflow: hidden;
  border-radius: 13% 87% 12% 88% / 88% 20% 80% 12%;
`

export const ValuesImage = styled.img`
  width: 100%;
`

export const ExceptionalSection = styled.section`
  position: relative;

  @media only screen and (min-width: 992px) { flex-direction: initial; }
`

export const ExceptionalList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
  padding-left: 3rem;

  @media only screen and (min-width: 992px) {
    flex-direction: initial;
    flex-wrap: wrap;
  }
`

export const ExceptionalListItem = styled.li`
  position: relative;

  &:nth-child(-n+3) { margin-bottom: 2rem; }

  &::before {
    position: absolute;
    top: 0.4rem;
    left: -3rem;
    content: url(${CheckIcon});
  }

  @media only screen and (min-width: 992px) {
    position: relative;
    width: 35%;

    &:nth-child(-n+2) { margin-bottom: 3rem; }
    &:nth-child(even) { left: 30%; }
    &:nth-child(n+3) { margin-bottom: 0; }
  }
`

export const ExceptionalListItemHeading = styled.h3`
  font-weight: 600;
  font-size: var(--big-font-size);
`

export const ExceptionalImageContainer = styled.div`
  width: 40%;
  margin-top: 2rem;

  @media only screen and (min-width: 992px) {
    position: absolute;
    top: 7rem;
    left: 0;
    display: flex;
    justify-content: center;
    width: 100%;
    margin-top: 0;
  }
`

export const ExceptionalImage = styled.img`
  width: 100%;

  @media only screen and (min-width: 992px) { width: 25%; }
  @media only screen and (min-width: 1200px) { width: 22%; }
  @media only screen and (min-width: 1400px) { width: 18%; }
`

