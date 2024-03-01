import styled, { css, keyframes } from "styled-components";

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
  top: 3rem;
  left: 2rem;
  height: 100%;
  background-color: hsla(0, 0%, 0%, 0.3);

  @media only screen and (min-width: 536px) { left: 8rem; }
  @media only screen and (min-width: 992px) {
    top: 5rem;
    left: 4rem;
    height: 90%;
  }

  @media only screen and (min-width: 1200px) {
    left: 6rem;
    height: 85%;
  }

  @media only screen and (min-width: 1400px) {
    width: 550px;
    height: 520px;
    top: 50%;
    transform: translateY(-50%);
  }
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