import styled, { css } from "styled-components";

export const CurriculumStyledSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 2rem;

  &:has(div:nth-child(3)) {
    margin-bottom: 4rem;

    @media only screen and (min-width: 992px) { margin-bottom: 6rem; }
  }
`

export const CurriculumContentContainer = styled.div`
  width: 100%;
  max-width: 540px;
  color: var(--color-dark);
  padding: 0 1rem;
  
  @media only screen and (min-width: 768px) { max-width: 720px; }
  @media only screen and (min-width: 992px) { max-width: 960px; }
  @media only screen and (min-width: 1200px) { max-width: 1140px; }
  @media only screen and (min-width: 1400px) { max-width: 1320px; }
  @media only screen and (min-width: 1700px) { max-width: 1608px; }
`

export const CurriculumList = styled.ul`
  list-style: none;
`

const textGradient = css`
  background-clip: text;
  -webkit-text-fill-color: transparent;
`

export const CurriculumListItem = styled.li`
  display: flex;
  flex-direction: column;

  &:not(:first-child) { margin-top: 2rem; }

  @media only screen and (min-width: 768px) {
    &:nth-child(odd) { margin-right: 15%; }
    &:nth-child(even) { margin-left: 15%; }

    &[data-sequel]:nth-child(odd) {
      margin-right: 0;
      margin-left: 15%;
    }

    &[data-sequel]:nth-child(even) {
      margin-left: 0;
      margin-right: 15%;
    }
  }

  @media only screen and (min-width: 992px) {
    &:not(:first-child) { margin-top: 3rem; }
    &:nth-child(odd) { margin-right: 20%; }
    &:nth-child(even) { margin-left: 20%; }

    &[data-sequel]:nth-child(odd) {
      margin-right: 0;
      margin-left: 20%;
    }

    &[data-sequel]:nth-child(even) {
      margin-left: 0;
      margin-right: 20%;
    }
  }

  &:nth-child(even):not([data-sequel]) div,
  &[data-sequel]:nth-child(odd) div { @media only screen and (min-width: 556px) { align-self: flex-end; } }
  &:nth-child(1) h3 {
    background: linear-gradient(90deg, var(--color-accent-5) 0%, #5d67bb 100%);
    ${textGradient}
  }
  &:nth-child(2) h3 {
    background: linear-gradient(90deg, #c059b2 0%, var(--color-accent-4) 100%);
    ${textGradient}
  }
  &:nth-child(3) h3 {
    background: linear-gradient(90deg, #f4aa0b 0%, #f7c455 100%);
    ${textGradient}
  }
  &[data-sequel]:nth-child(1) h3 {
    background: linear-gradient(90deg, #6cf 0%, #3bf 100%);
    ${textGradient}
  }
  &[data-sequel]:nth-child(2) h3 {
    background: linear-gradient(90deg, #1ec804 0%, #3bfa1e 100%);
    ${textGradient}
  }
  &[data-sequel]:nth-child(3) h3 {
    background: linear-gradient(90deg, #5d67bb 0%, var(--color-accent-5) 100%);
    ${textGradient}
  }
  &[data-sequel]:nth-child(4) h3 {
    background: linear-gradient(90deg, var(--color-accent-4) 0%, #c059b2 100%);
    ${textGradient}
  }
  &[data-sequel]:nth-child(5) h3 {
    background: linear-gradient(90deg, #f7c455 0%, #f4aa0b 100%);
    ${textGradient}
  }

  &:nth-child(1) div div { background: linear-gradient(90deg, var(--color-accent-5) 0%, #5d67bb 100%); }
  &:nth-child(2) div div { background: linear-gradient(90deg, #c059b2 0%, var(--color-accent-4) 100%); }
  &:nth-child(3) div div { background: linear-gradient(90deg, #f4aa0b 0%, #f7c455 100%); }
  &[data-sequel]:nth-child(1) div div { background: linear-gradient(90deg, #6cf 0%, #3bf 100%); }
  &[data-sequel]:nth-child(2) div div { background: linear-gradient(90deg, #1ec804 0%, #3bfa1e 100%); }
  &[data-sequel]:nth-child(3) div div { background: linear-gradient(90deg, #5d67bb 0%, var(--color-accent-5) 100%); }
  &[data-sequel]:nth-child(4) div div { background: linear-gradient(90deg, var(--color-accent-4) 0%, #c059b2 100%); }
  &[data-sequel]:nth-child(5) div div { background: linear-gradient(90deg, #f7c455 0%, #f4aa0b 100%); }

  &:nth-child(even):not([data-sequel]) div div,  
  &[data-sequel]:nth-child(odd) div div {  
    @media only screen and (min-width: 556px) {
      left: initial;
      right: -16px;
    }

    @media only screen and (min-width: 640px) { right: -23px; }
  
    &::before {
      @media only screen and (min-width: 556px) {
        left: initial;
        right: 9px;
      }  
    }
  }
`

export const CurriculumListItemContainer = styled.div`
  position: relative;
  align-self: center;
  margin-bottom: 2rem;

  @media only screen and (min-width: 556px) { align-self: flex-start; }
`

export const CurriculumListItemHeading = styled.h3`
  position: relative;
  z-index: 1;
`

export const CurriculumListItemDecoration = styled.div`
  position: absolute;
  top: -11px;
  left: 50%;
  width: 120%;
  height: 170%;
  border-radius: 50%;
  transform: translateX(-50%);
  
  @media only screen and (min-width: 556px) {
    top: -6px;
    left: -16px;
    height: 160%;
    transform: none;
  }

  @media only screen and (min-width: 640px) {
    top: -8px;
    left: -23px;
  }
  
  &::before {
    position: absolute;
    content: "";
    bottom: 5px;
    left: 50%;
    width: 96%;
    height: 95%;
    border-radius: 50%; 
    background: var(--color-white);
    transform: translateX(-50%);

    @media only screen and (min-width: 556px) {
      width: 102%;
      height: 96%;
      bottom: 4px;
      left: 9px;
      border-radius: 45%;
      transform: none;
    }

    @media only screen and (min-width: 640px) {
      height: 100%;
      border-radius: 50%;
    }
  }
`

const imageContainer = css`
  display: flex;
  margin-top: 3rem;
  
  @media only screen and (min-width: 768px) { margin-top: 4rem; }
`

export const CurriculumFullImageContainer = styled.div`
  ${imageContainer}
  width: 100%;

  & + div ul {
    margin-top: 3rem;
  
    @media only screen and (min-width: 768px) { margin-top: 4rem; }
  }
`

export const CurriculumImageContainer = styled.div`
  ${imageContainer}
  width: 50%;
  border-radius: 50px;
  overflow: hidden;
  
  @media only screen and (min-width: 992px) { width: 50rem; }
`

export const CurriculumImage = styled.img`
  width: 100%;
`