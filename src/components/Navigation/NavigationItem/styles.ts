import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled.li`
  &:hover span::after { width: 100%; }
  color: var(--color-dark);

  &:nth-of-type(odd) span::after {
    transform: rotate(1deg);
    left: auto;
    right: 0;
  }
`

export const NavigationLink = styled(NavLink)`
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 1rem 0.5rem;
  text-align: center;
  font-size: 18px;
  color: inherit;
  text-decoration: none;

  @media only screen and (min-width: 1024px) { padding: 0.5rem; }

  &&.active span::after { width: 100%; }
`

export const NavigationText = styled.span`
  position: relative;
  display: inline-block;
  padding: .4rem .5rem .8rem;
  letter-spacing: 1px;
  
  &::after {
    position: absolute;
    content: '';
    bottom: 1px;
    left: 0;
    width: 0%;
    height: 3px;
    border-radius: 10px;
    transform: rotate(-1deg);
    background-color: var(--color-dark);
    transition: width .2s;
  }

  @media only screen and (min-width: 1024px) {
    padding: .5rem var(--padding-xsmall);
  }

  @media only screen and (min-width: 1400px) {
    padding: .5rem var(--padding-small);
  }
`