import { NavLink } from "react-router-dom";
import styled, { keyframes } from "styled-components";

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

export const FacilitiesDescriptionContainer = styled.div`
  align-self: stretch;
`

export const FacilitiesImagesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  font-size: var(--xl-font-size);
  margin-top: 5rem;

  @media only screen and (min-width: 768px) { width: 80%; }
  @media only screen and (min-width: 992px) {
    flex-direction: initial;
    margin-top: 8rem;
  }
`

export const FacilitiesImageBox = styled(NavLink)`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  max-width: 40rem;
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

  &:nth-child(2) {
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