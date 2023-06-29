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

export const CONSTANTS = {
  seconds: .3
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
  }

  body {
    background-color: var(--color-background);
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-size: var(--medium-font-size);
    color: var(--color-primary);
  }

  :root {
    // Measures
    --menu-animation-time: ${CONSTANTS.seconds}s;
    --padding-xsmall: 0.3rem;
    --padding-small: 1rem;
    --padding-medium: 2rem;
    
    // Colors
    --color-accent: #21e004;
    --color-accent-2: #188507;
    --color-accent-3: #023047;
    --color-accent-4: #219ebc;
    --color-background: #f7f7f7;
    --color-white: #fcfcfc;
    --color-grey: #f2f2f2;
    --color-dark: #0e3f00;
    --color-dark-2: #0b2d00;
    /* --color-text-gray: #e2e0e0; */
    
    
    // Fonts
    --xsmall-font-size: 1.2rem;
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --big-font-size: 2rem;
    --xl-font-size: 2.4rem;
    --heading-font-size: 4rem;
    
    // Animations
    
  }
`