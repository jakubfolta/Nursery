import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavItem = styled.li`
  &:hover span::after { width: 100%; }
  color: var(--color-black);

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
  padding: 1rem 0;
  text-align: center;
  font-size: var(--big-font-size);
  color: inherit;
  text-decoration: none;
`

export const NavigationText = styled.span`
  position: relative;
  display: inline-block;
  padding: .4rem .5rem .8rem;
  
  &::after {
    position: absolute;
    content: '';
    bottom: 1px;
    left: 0;
    width: 0%;
    height: 3px;
    transform: rotate(-1deg);
    background-color: var(--color-black);
    transition: width .2s;
  }
`