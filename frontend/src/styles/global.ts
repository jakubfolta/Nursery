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
  accentTwo: '#21e004',
  accentThree: '#21e004',
  accentFour: '#21e004',
}

export const CONSTANTS = {
  menuAnimationDuration: .3,
  pageTransitionDuration: 1.2,
  mainPageTheme: COLORS.accentOne,
  aboutUsTheme: COLORS.accentTwo,
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
    background-color: var(--color-background);
    box-sizing: border-box;
    font-family: 'Nunito', sans-serif;
    font-size: var(--medium-font-size);
    color: var(--color-primary);

    &::-webkit-scrollbar { display: none; }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }

  h1 { line-height: 1.125; }
  h2 {
    font-size: var(--xl-font-size);
    line-height: 1.25;
  }

  p, li { line-height: 1.5; }

  :root {
    // Measures
    --menu-animation-duration: ${CONSTANTS.menuAnimationDuration}s;
    --page-transition-duration: ${CONSTANTS.pageTransitionDuration}s;
    --padding-xsmall: 0.3rem;
    --padding-small: 1rem;
    --padding-medium: 2rem;
    
    // Colors
    --color-accent: ${COLORS.accentOne};
    --color-accent-2: #188507;
    --color-accent-3: hsl(200, 95%, 15%);
    --color-accent-copyright: hsl(200, 95%, 10%);
    --color-contact: hsl(192, 70%, 40%);
    --color-contact-text: hsl(192, 20%, 99%);
    --color-contact-invalid: hsl(192, 20%, 69%);
    --color-form-placeholder: hsl(192, 20%, 40%);
    --color-background: #f7f7f7;
    --color-footer-text: hsl(200, 20%, 99%);
    --color-warning: 	hsl(0, 100%, 55%);
    --color-white: #fcfcfc;
    --color-grey: #f2f2f2;
    --color-dark: #0e3f00;
    --color-dark-2: #0b2d00;    
    
    // Fonts
    --xsmall-font-size: 1.2rem;
    --small-font-size: 1.4rem;
    --default-font-size: 1.6rem;
    --medium-font-size: 1.8rem;
    --big-font-size: 2rem;
    --xl-font-size: 2.7rem;
    --heading-font-size: 4rem;
    
    // Animations
    
  }
`