import { createGlobalStyle } from 'styled-components';

//MEDIA QUERY MANAGER
/*
[0 - 640px]     is where our normal styles apply
640 - 768px:    small
768 - 1024px:   medium
1024 - 1280px:  large
1280 - 1536px:  extra large
1536px + :      2xl
*/

const COLORS = {
  accentOne: '#21e004',
  accentTwo: '#61CAFF',
  accentThree: '#F6BA39',
  accentFour: '#8D3682',
  accentFive: '#303772',
  accentSix: '#91C952'
}

export const CONSTANTS = {
  menuAnimationDuration: .3,
  pageTransitionDuration: 1.2,
  underlineWidth: 100,
  mainPageTheme: COLORS.accentOne,
  aboutUsPageTheme: COLORS.accentTwo,
  offerPageTheme: COLORS.accentThree,
  contactPageTheme: COLORS.accentFour,
  parentsPageTheme: COLORS.accentFive,
};

export const GlobalStyle = createGlobalStyle`
  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }

  html {
    font-size: 62.5%; // 1rem = 10px
    scroll-behavior: smooth;
    -webkit-tap-highlight-color: transparent;

    @media only screen and (min-width: 640px) {
      font-size: 68.75% // 1rem = 11px
    }

    @media only screen and (min-width: 768px) {
      font-size: 75% // 1rem = 12px
    }

    @media only screen and (min-width: 1280px) {
      font-size: 81.25% // 1rem = 13px
    }

    input:-webkit-autofill,
    input:-webkit-autofill:hover, 
    input:-webkit-autofill:focus, 
    input:-webkit-autofill:active {
      -webkit-background-clip: text;
      -webkit-text-fill-color: var(--color-contact-text);
    }
  }

  body {
    height: 100vh;
    background-color: var(--color-white);
    box-sizing: border-box;
    /* font-family: 'Nunito', sans-serif; */
    /* font-family: 'Playpen Sans', cursive; */
    font-family: 'Sono', monospace;
    font-size: var(--medium-font-size);

    /* &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;
    scrollbar-width: none; */
  }

  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    max-width: 540px;
    color: var(--color-dark);
    margin-bottom: 7rem;
    padding: 0 1rem;

    @media only screen and (min-width: 768px) { max-width: 720px; }
    @media only screen and (min-width: 992px) { max-width: 960px; }
    @media only screen and (min-width: 1200px) { max-width: 1140px; }
    @media only screen and (min-width: 1400px) { max-width: 1320px; }
  }

  section p {
    margin-top: 2rem;
    line-height: 1.7;
  }

  h1, h2 {
    font-family: 'Itim', cursive;
    line-height: 1.125;
  }

  h2 { font-size: var(--section-heading-font-size); }

  p, li {
    line-height: 1.5;
    letter-spacing: -1px;
  }

  :root {
    // Measures
    --menu-animation-duration: ${CONSTANTS.menuAnimationDuration}s;
    --page-transition-duration: ${CONSTANTS.pageTransitionDuration}s;
    --underline-width: ${CONSTANTS.underlineWidth}px;
    --header-border: 6px;
    --padding-xsmall: 0.3rem;
    --padding-small: 1rem;
    --padding-medium: 2rem;
    
    // Colors
    --color-accent: ${COLORS.accentOne};
    --color-accent-2: ${COLORS.accentTwo};
    --color-accent-3: ${COLORS.accentThree};
    --color-accent-4: ${COLORS.accentFour};
    --color-accent-5: ${COLORS.accentFive};

    --color-accent-copyright: hsl(200, 95%, 10%);
    --color-contact-text: hsl(192, 20%, 99%);
    --color-contact-invalid: hsl(192, 20%, 69%);
    --color-footer-background: hsl(200, 95%, 15%);
    --color-form-placeholder: #A0BABF;
    --color-footer-text: hsl(200, 20%, 99%);
    --color-warning: 	hsl(0, 100%, 55%);
    --color-white: hsl(112, 67%, 97%);
    --color-dark: hsl(24, 5%, 20%);
    
    // Fonts
    --xsmall-font-size: 1.2rem;
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --big-font-size: 2rem;
    --xl-font-size: 2.7rem;
    --section-heading-font-size: 4.7rem;
    --heading-font-size: 5rem;
    
    // Animations
    
  }
`