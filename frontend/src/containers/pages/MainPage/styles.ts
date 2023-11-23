import styled, { keyframes } from "styled-components";

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

export const StyledImageContainer = styled.div`
  position: relative;
  display: flex;
  width: 80%;
  border-radius: 20%;
  overflow: hidden;
  
  @media only screen and (min-width: 992px) { width: 90%; }
`

export const StyledImage = styled.img`
  width: 100%;
  height: 50rem;
  object-fit: cover;
  animation-duration: 12s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: ${showUp1};

  @media only screen and (min-width: 992px) { height: 40rem; }
  
  &:nth-child(even) { animation-name: ${showUp2}; }
  &:last-child { animation-name: ${showUp3}; }

  &:not(:first-child) {
    position: absolute;
    top: 0;
    left: 0;
  }
`