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

const rotateSquare = keyframes`
  0% {
    transform: rotate(0deg);
    left: 0;
  }

  50% {
    transform: rotate(360deg);
    left: 87%;
  }
  
  100% {
    transform: rotate(0deg);
    left: 0%;
  }
`

const rotateTriangle = keyframes`
  0% {
    transform: rotate(0deg);
    right: 0;
  }

  50% {
    transform: rotate(270deg);
    right: 87%;
  }
  100% {
    transform: rotate(0deg);
    right: 0%;
  }
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
  object-fit: cover;
  animation-duration: 12s;
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

export const StyledSquare = styled.div`
  position: absolute;
  top: -30px;
  left: 0;
  width: 50px;
  height: 50px;
  background: var(--color-accent-2);
  background: linear-gradient(to left, 
    hsl(from var(--color-accent-2) h s 23%) 0%,
    var(--color-accent-2) 100%);    
  border-radius: 10%;
  opacity: .7;
  z-index: 1;
  animation: ${rotateSquare} 6s infinite;

  @media only screen and (min-width: 536px) {
    width: 70px;
    height: 70px;
  }

  @media only screen and (min-width: 768px) {
    width: 90px;
    height: 90px;
  }

  @media only screen and (min-width: 992px) {
    width: 70px;
    height: 70px;
    opacity: 1;
  }
`

export const StyledTriangle = styled.div`
  position: absolute;
  bottom: -30px;
  right: 0px;
  width: 50px;
  height: 50px;
  clip-path: polygon(0px 0px, 10% 0px, 12% 1px, 13% 2px, 14% 2px, 98% 86%, 98% 87%, 99% 88%, 100% 90%, 100% 100%, 0px 100%);
  background: var(--color-accent-3);
  background: linear-gradient(to left, 
    hsl(from var(--color-accent-3) h s 23%) 0%,
    var(--color-accent-3) 100%);
  border-radius: 15%;
  opacity: .7;
  z-index: 1;
  animation: ${rotateTriangle} 6s infinite;

  @media only screen and (min-width: 536px) {
    width: 70px;
    height: 70px;
  }

  @media only screen and (min-width: 768px) {
    bottom: -100px;
    width: 90px;
    height: 90px;
  }
  
  @media only screen and (min-width: 992px) {
    bottom: -30px;
    width: 70px;
    height: 70px;
    opacity: 1;
  }
`