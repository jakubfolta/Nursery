import styled, { css } from "styled-components";

export const StyledImageContainer = styled.div`
  display: flex;
  margin-bottom: -4rem;

  @media only screen and (min-width: 992px) { margin-bottom: 0; }
`

export const StyledImage = styled.img`
  width: 100%;
  object-fit: cover;
`

export const OfferSection = styled.section<{isScheduleSection: boolean}>`
  ${props => props.isScheduleSection && css`
    && { margin-bottom: 2rem; }
    @media only screen and (min-width: 1200px) { && { margin-bottom: 3rem; } }
  `}
`

export const PickupSection = styled.section<{isScheduleSection: boolean}>`
  ${props => props.isScheduleSection && css`
    margin-top: 4rem;
  `}
`
