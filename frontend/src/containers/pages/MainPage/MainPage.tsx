import React, { useContext, useEffect, useState } from "react"
import { WebpageContext } from "../../../store/webpage-context";
import Hero from "../../../components/Hero/Hero";
import mobileKidsGrass from "../../../assets/images/kids-on-the-grass-mobile.jpg";
import desktopKidsGrass from "../../../assets/images/kids-on-the-grass-desktop.jpg";
import mobilePaintingGirl from "../../../assets/images/painting-girl-mobile.jpg";
import desktopPaintingGirl from "../../../assets/images/painting-girl-desktop.jpg";
import mobileKidsPlayingWithWater from "../../../assets/images/kids-playing-with-water-mobile.jpg";
import desktopKidsPlayingWithWater from "../../../assets/images/kids-playing-with-water-desktop.jpg";

import { StyledDivider, StyledImage, StyledImageContainer, StyledImageContainerShadow, Wave } from "./styles";

export const MainPage: React.FC<{isDesktopSize: boolean}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const mainPageContent = useContext(WebpageContext).pages['Main page'];

  useEffect(() => {
    if (mainPageContent) {
      setHeroHeading(mainPageContent.heading_1);
      setHeroDescription(mainPageContent.text_1);
    }
  }, [mainPageContent]);

  return (
    <>
    
      <Hero
        isMainPage
        isDesktopSize={props.isDesktopSize}
        heading={heroHeading}
        description={heroDescription}>
        <StyledImageContainer>
          <StyledImage 
            srcSet={`${mobileKidsGrass} 420w, ${desktopKidsGrass} 560w`}
            sizes="(max-width: 767px) 420px, 560px"
            src={desktopKidsGrass}
            alt="Dzieci na trawie"
          />
          <StyledImage 
            srcSet={`${mobilePaintingGirl} 420w, ${desktopPaintingGirl} 560w`}
            sizes="(max-width: 767px) 420px, 560px"
            src={desktopPaintingGirl}
            alt="Malujaca dziewczynka"
          />
          <StyledImage 
            srcSet={`${mobileKidsPlayingWithWater} 420w, ${desktopKidsPlayingWithWater} 560w`}
            sizes="(max-width: 767px) 420px, 560px"
            src={desktopKidsPlayingWithWater}
            alt="Dzieci bawiace sie woda"
          />
        </StyledImageContainer>
        <StyledImageContainerShadow />
      </Hero>
      <StyledDivider>
        <Wave />
        <Wave />
        <Wave />
        <Wave />
      </StyledDivider>
    </>
  );
};
