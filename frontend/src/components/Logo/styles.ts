import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  position: relative;
`

export const StyledLogoContainer = styled.div`
  position: relative;
  flex-shrink: 0;
  bottom: 0rem;
  width: 7rem;
  height: 7rem;
  background-color: var(--color-white);

  @media only screen and (min-width: 640px) {
    width: 10rem;
    height: 10rem;
  }

  @media only screen and (min-width: 992px) {
    position: absolute;
    display: flex;
    justify-content: center;
    align-items: center;
    bottom: -10rem;
    width: 11.5rem;
    height: 11rem;
    border-radius: 5px;
  }
`

export const StyledLogo = styled.img`
  width: 100%;

  @media only screen and (min-width: 1024px) {
    width: 90%;
  }
`