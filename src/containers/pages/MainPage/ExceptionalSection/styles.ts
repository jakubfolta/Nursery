import styled from "styled-components";
import CheckIcon from "./../../../../assets/images/check-icon.png";

export const ExceptionalStyledSection = styled.section`
  position: relative;

  @media only screen and (min-width: 992px) {
    flex-direction: initial;

    &:has(li:nth-last-child(1)) {
      justify-content: flex-start;
      
      & div:last-child {
        top: 2rem;
        left: 40rem;
        width: 55%;
      }
    }

    &:has(li:nth-last-child(2)) {
      & div:last-child {
        top: 4rem;
        left: 32rem;
        width: 85%;
      }
    }

    &:has(li:nth-last-child(3)) {
      justify-content: center;

      & div:last-child {
        top: 7rem;
        left: 0;
        width: 100%;
      }
    }
  }
`

export const ExceptionalList = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  padding-left: 3rem;

  @media only screen and (min-width: 992px) {
    flex-direction: initial;
    flex-wrap: wrap;

    &:has(> li:nth-last-child(1)) {
      flex-direction: column;

      & li {
        left: 0;
        width: 50%;
      }
    }

    &:has(> li:nth-last-child(3)) {
      flex-direction: initial;

      & li { width: 35%; }
      & li:nth-child(even) { left: 30%; }
    }    
  }
`

export const ExceptionalListItem = styled.li`
  position: relative;
  margin-bottom: 2rem;

  &:last-child { margin-bottom: 0; }
  &::before {
    position: absolute;
    top: 0.4rem;
    left: -3rem;
    content: url(${CheckIcon});
  }

  @media only screen and (min-width: 992px) {
    margin-bottom: 3rem;

    &:nth-child(3) { margin-bottom: 0; }
  }
  @media only screen and (min-width: 1700px) { margin-bottom: 4rem; }
`

export const ExceptionalListItemHeading = styled.h3`
  font-weight: 600;
  font-size: var(--big-font-size);
`

export const ExceptionalImageContainer = styled.div`
  && { align-self: center; }
  width: 40%;
  margin-top: 2rem;

  @media only screen and (min-width: 992px) {
    position: absolute;
    display: flex;
    justify-content: center;
    margin-top: 0;
  }
`

export const ExceptionalImage = styled.img`
  width: 100%;

  @media only screen and (min-width: 992px) { width: 25%; }
  @media only screen and (min-width: 1200px) { width: 22%; }
  @media only screen and (min-width: 1400px) { width: 18%; }
  @media only screen and (min-width: 1700px) { width: 15%; }
`