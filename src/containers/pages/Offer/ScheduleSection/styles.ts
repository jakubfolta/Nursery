import styled, { keyframes } from "styled-components";
import Background from "./../../../../assets/images/waves.svg";

const gradient = keyframes`
  0% { background-position: 0%; }
  100% { background-position: 100%; }
`

export const ScheduleStyledSection = styled.section`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  background: linear-gradient(90deg,
    #704e05 0%,
    #926607 50%,
    var(--color-accent-3) 100%) 0% 0% / 250%;
  animation: ${gradient} 5s linear infinite alternate;
  white-space: pre-wrap;
`

export const ScheduleContentContainer = styled.div<{isPickupSection: boolean}>`
  position: relative;
  z-index: 2;


  width: 100%;
  margin-top: -2rem;
  margin-bottom: ${props => props.isPickupSection ? '3rem' : '0'};
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

export const ScheduleHoursSubheading = styled.h3`
  text-align: center;
`

export const ScheduleHoursList = styled.ul`
  list-style: none;
  margin-top: 2rem;
`

export const ScheduleHoursSpan = styled.span`
  font-weight: bold;
  font-size: var(--big-font-size);
  font-style: italic;
  border-bottom: 1px solid;
`

export const StyledScheduleImageContainer = styled.div`
  display: flex;
  justify-content: center;
  margin: 3rem 0;

  @media only screen and (min-width: 768px) { margin: 4rem 0; }
`

export const StyledScheduleImage = styled.img`
  width: 100%;
  max-width: 1120px;
  border-radius: 50px;
  object-fit: cover;
`

export const ScheduleWaveTop = styled.img`
  position: relative;
  top: -1px;
  width: 100%;
  height: var(--wave-height);
`

export const ScheduleWaveBottom = styled.div`
  position: relative;
  width: 100%;
  height: var(--wave-height);
  background-image: url(${Background});
  background-size: 100% 100%;
  top: 1px;
  transform: rotate(180deg);
  margin-top: -6rem;

  @media only screen and (min-width: 992px) { margin-top: -4rem; }
`