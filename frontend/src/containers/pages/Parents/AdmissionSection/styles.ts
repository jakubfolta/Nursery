import { Link } from "react-router-dom";
import styled from "styled-components";

export const EntryFormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 2rem;
`

export const EntryFormHeading = styled.h3`
  margin-bottom: 2rem;

  @media only screen and (min-width: 992px) { margin-bottom: 1rem; }
`

export const EntryFormLink = styled(Link)`
  text-decoration: none;
  color: var(--color-accent-5);
  font-weight: bold;
  font-size: var(--big-font-size);
  border-bottom: 3px solid;
  transition: transform .3s;

  &:hover { transform: translate(2px, -2px); }
  &:first-of-type {
    margin-bottom: 2rem;

    @media only screen and (min-width: 992px) { margin-bottom: 1rem; }
  }
`