import styled, { css } from "styled-components";

const hover = css`
  transition: color .3s;

  &:hover { color: var(--color-accent); }
`

export const FooterContainer = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--color-footer-background);
  font-size: 18px;
  color: var(--color-footer-text);
`

export const SectionsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 3rem 1.5rem;
  max-width: 540px;

  & > *:not(:first-child) { margin-top: 2rem; }

  @media only screen and (min-width: 768px) { max-width: 720px; }
  @media only screen and (min-width: 1200px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    padding: 3rem 2.5rem;
    max-width: 1024px;

    & > *:not(:first-child) { margin-top: 0; }
    & > *:last-child { margin-top: 2rem; }
  }

  @media only screen and (min-width: 1400px) { max-width: 1400px; }
`

export const Description = styled.div`
  flex-basis: 50%;
  display: flex;
  flex-direction: column;
`

export const LogoContainer = styled.div`
  align-self: center;

  @media only screen and (min-width: 1200px) { align-self: flex-start; }
`

export const FooterContact = styled.div`
  flex-basis: 50%;
  display: flex;

  @media only screen and (min-width: 640px) { justify-content: center; }
`

export const ContactList = styled.ul`
  list-style: none;
  margin-top: 1rem;
`

export const ContactLink = styled.a`
  display: inline-block;
  text-decoration: none;
  color: var(--color-footer-text);
  padding: .5rem 0;
  ${hover};
`

export const FooterSocial = styled.div`
  display: flex;
  justify-content: center;

  @media only screen and (min-width: 1200px) { flex-basis: 100%; }
`

export const SocialLink = styled.a`
  display: inline-flex;
  align-items: center;
  color: var(--color-footer-text);
  font-size: 3rem;
  padding: .5rem;
`

export const FooterCopyright = styled.div`
  align-self: stretch;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: var(--color-accent-copyright);
  padding: 1rem 1.5rem;
`

export const WebsiteAuthorLink = styled.a`
  color: var(--color-footer-text);
  text-decoration: none;
  ${hover};
`