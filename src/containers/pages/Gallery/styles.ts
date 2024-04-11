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

export const GalleryContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 10px;

  @media only screen and (min-width: 768px) { gap: 20px; }
`

export const GalleryStyledImage = styled.img`
  width: 45%;
  height: 160px;
  border-radius: 20px;
  object-fit: cover;
  cursor: zoom-in;
  filter: drop-shadow(7px 9px 9px var(--color-dark));
  transition: all .4s;

  @media only screen and (min-width: 768px) { height: 210px; }
  @media only screen and (min-width: 992px) {
    width: 30%;
    height: 190px;
  }

  @media only screen and (min-width: 1024px) {
    &:nth-child(6n + 1):hover {
      border-radius: 45% 74% 34% 46% / 64% 77% 33% 46%;
      filter: drop-shadow(7px 9px 4px var(--color-accent));
    }
  
    &:nth-child(6n + 2):hover {
      border-radius: 25% 54% 14% 66% / 44% 57% 33% 26%;
      filter: drop-shadow(7px 9px 4px var(--color-accent-2));
    }
  
    &:nth-child(6n + 3):hover {
      border-radius: 15% 34% 54% 26% / 24% 37% 43% 36%;
      filter: drop-shadow(7px 9px 4px var(--color-accent-3));
    }
  
    &:nth-child(6n + 4):hover {
      border-radius: 25% 14% 34% 46% / 64% 27% 43% 46%;
      filter: drop-shadow(7px 9px 4px var(--color-accent-4));
    }
  
    &:nth-child(6n + 5):hover {
      border-radius: 25% 34% 34% 46% / 64% 36% 73% 46%;
      filter: drop-shadow(7px 9px 4px var(--color-accent-5));
    }
  
    &:nth-child(6n + 6):hover {
      border-radius: 65% 24% 34% 26% / 54% 47% 53% 26%;
      filter: drop-shadow(7px 9px 4px var(--color-accent-6));
    }
  }

  @media only screen and (min-width: 1200px) { height: 225px; }
  @media only screen and (min-width: 1400px) { height: 260px; }
  @media only screen and (min-width: 1700px) { height: 320px; }
`

export const CarouselContainer = styled.div`
  position: fixed;
  width: 100%;
  height: 100dvh;
  z-index: 1;
`

export const CarouselImagesContainer = styled.div<{isClicked: boolean, headerHeight: number}>`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, calc(${props => props.headerHeight / 2}px - 50%)) scale(0);
  display: flex;
  width: 80%;
  height: 65%;
  max-width: var(--gallery-image-max-width);
  overflow: hidden;
  cursor: zoom-out;
  animation: carouselAppear var(--menu-animation-duration) forwards;

	${props => props.isClicked && css`animation: carouselHide var(--menu-animation-duration);`}

  @media only screen and (min-width: 640px) { height: 90%; }
  @media only screen and (min-width: 768px) { height: 115%; }
  @media only screen and (min-width: 992px) {
    width: 70%;
    height: 135%;
  }

	@keyframes carouselAppear {
		100% { transform: translate(-50%, calc(${props => props.headerHeight / 2}px - 50%)) scale(1); }
	}

	@keyframes carouselHide {
		0% { transform: translate(-50%, calc(${props => props.headerHeight / 2}px - 50%)) scale(1); }
	}
`

export const CarouselSlides = styled.div<{translateValue: string}>`
  display: flex;
  align-items: center;
  width: 100%;
  transform: translateX(-${props => props.translateValue}%);
  transition: transform .5s;
`

export const CarouselImageContainer = styled.div`
  display: flex;
  flex-shrink: 0;
  width: 100%;
  max-height: 70%;

  @media only screen and (min-width: 640px) { max-height: 65%; }
  @media only screen and (min-width: 768px) { max-height: 55%; }
`

export const CarouselImage = styled.img`
  width: 100%;
  object-fit: contain;
  display: none; // Change display to block when arrow clicked to show next image
  display: block;
`

export const ArrowContainer = styled.div<{isLeft?: boolean, isBackdropClicked: boolean, headerHeight: number, isFirstImage?: boolean, isLastImage?: boolean}>`
  position: absolute;
  top: 50%;
  
  ${props => props.isLeft
    ? css<{isFirstImage?: boolean}>`
      left: 0;

      &:hover :first-child {
        ${props => !props.isFirstImage && css`
          filter: drop-shadow(1px 4px 2px var(--color-accent-6));
          animation: moveLeft .5s linear infinite alternate;
        `}
      }`
    : css<{isLastImage?: boolean}>`
      right: 0;

      &:hover :first-child {
        ${props => !props.isLastImage && css`
          filter: drop-shadow(1px 4px 2px var(--color-accent-6));
          animation: moveRight .5s linear infinite alternate;
        `}
      }`
  }

  ${props => props.isLeft && props.isFirstImage || !props.isLeft && props.isLastImage
    ? css`
      cursor: not-allowed;
      opacity: .4;`
    : css`cursor: pointer;`
  }

  width: 10%;
  height: 30%;
  transform: translateY(calc(${props => props.headerHeight / 2}px - 50%)) scale(0);
  animation: arrowAppear var(--menu-animation-duration) forwards;

  ${props => props.isBackdropClicked && css`animation: arrowHide var(--menu-animation-duration);`}

  @media only screen and (min-width: 536px) { height: 40%; }
  @media only screen and (min-width: 768px) { height: 60%; }
  @media only screen and (min-width: 992px) { width: 15%; }
  @media only screen and (min-width: 1200px) { width: calc((100% - var(--gallery-image-max-width)) / 2); }

  @keyframes arrowAppear {
		100% { transform: translateY(calc(${props => props.headerHeight / 2}px - 50%)) scale(1); }
	}

	@keyframes arrowHide {
		0% { transform: translateY(calc(${props => props.headerHeight / 2}px - 50%)) scale(1); }
	}

  @keyframes moveRight {
		100% { right: 5px}
	}

  @keyframes moveLeft {
		100% { left: 5px}
	}
`

export const ArrowIconContainer = styled.div<{isLeft?: boolean}>`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  transition: filter .2s linear;

  ${props => props.isLeft
    ? css`left: 0;`
    : css`right: 0;`
  }
`

const arrow = css`
  width: 35px;
  height: 15px; 
  border-top: 4px solid var(--color-dark);

  @media only screen and (min-width: 536px) { width: 45px; }
  @media only screen and (min-width: 768px) {
    width: 65px;
    border-top: 6px solid var(--color-dark);
  }
`

export const Arrow = styled.span<{isLeft?: boolean}>`
  ${arrow}

  transform: ${props => props.isLeft ? 'rotate(-200deg)' : 'rotate(200deg)'};
  transform-origin: top;

  ${props => props.isLeft 
    ? css`
      border-top-left-radius: 80%;
      border-top-right-radius: 30%;
      @media only screen and (min-width: 768px) {
        border-top-left-radius: 100%;
        border-top-right-radius: 80%;
      }`
    : css`
      border-top-left-radius: 30%;
      border-top-right-radius: 80%;
      @media only screen and (min-width: 768px) {
        border-top-left-radius: 80%;
        border-top-right-radius: 100%;
      }`
  }

  &::before {
    ${arrow}

    position: absolute;
    top: -17px;
    content: '';
    transform: ${props => props.isLeft ? 'rotate(55deg)' : 'rotate(-55deg)'};

    ${props => props.isLeft 
      ? css`
        border-top-left-radius: 80%;
        border-top-right-radius: 30%;` 
      : css`
        border-top-left-radius: 30%;
        border-top-right-radius: 80%;`
      }

    @media only screen and (min-width: 536px) {
      top: -20px;
      ${props => props.isLeft 
        ? css`left: 2px;` 
        : css`right: 2px;`
      }
    }

    @media only screen and (min-width: 768px) {
      top: -26px;
      ${props => props.isLeft 
        ? css`
          left: 8px;
          border-top-left-radius: 100%;
          border-top-right-radius: 80%;` 
        : css`
          right: 8px;
          border-top-left-radius: 80%;
          border-top-right-radius: 100%;`
      }
    }
  }
`


