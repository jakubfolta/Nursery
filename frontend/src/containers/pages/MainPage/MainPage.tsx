import React, { useContext, useEffect, useState } from "react"
import { WebpageContext } from "../../../store/webpage-context";
import Hero from "../../../components/Hero/Hero";
import mobileKidsGrass from "../../../assets/images/kids-on-the-grass-mobile.jpg";
import desktopKidsGrass from "../../../assets/images/kids-on-the-grass-desktop.jpg";
import mobilePaintingGirl from "../../../assets/images/painting-girl-mobile.jpg";
import desktopPaintingGirl from "../../../assets/images/painting-girl-desktop.jpg";
import mobileKidsPlayingWithWater from "../../../assets/images/kids-playing-with-water-mobile.jpg";
import desktopKidsPlayingWithWater from "../../../assets/images/kids-playing-with-water-desktop.jpg";
import mobileRainbowHands from "../../../assets/images/rainbow-hands-mobile.jpg";
import desktopRainbowHands from "../../../assets/images/rainbow-hands-desktop.jpg";
import funnyMonkey from "../../../assets/images/funny-monkey.png";
import funnyDog from "../../../assets/images/funny-dog.png";

import {
  FacilitiesImage,
  FacilitiesImageBox,
  FacilitiesImageHeading,
  FacilitiesImagesContainer,
  FacilitiesSection,
  StyledDivider,
  StyledImage,
  StyledImageContainer,
  StyledImageContainerShadow,
  ValuesDescriptionContainer,
  ValuesImage,
  ValuesImageContainer,
  ValuesSection,
  Wave } from "./styles";

export const MainPage: React.FC<{theme: string, isDesktopSize?: boolean}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [facilitiesSectionHeading, setFacilitiesSectionHeading] = useState<string | undefined>('');
  const [facilitiesSectionDescription, setFacilitiesSectionDescription] = useState<string | undefined>('');
  const [valuesSectionHeading, setValuesSectionHeading] = useState<string | undefined>('');
  const [valuesSectionDescription, setValuesSectionDescription] = useState<string | undefined>('');

  const mainPageContent = useContext(WebpageContext).pages['Main page'];

  useEffect(() => {
    if (mainPageContent) {
      setHeroHeading(mainPageContent.heading_1);
      setHeroDescription(mainPageContent.text_1);
      setFacilitiesSectionHeading(mainPageContent.heading_2);
      setFacilitiesSectionDescription(mainPageContent.text_2);
      setValuesSectionHeading(mainPageContent.heading_3);
      setValuesSectionDescription(mainPageContent.text_3);
    }
  }, [mainPageContent]);

  return (
    <>
      <Hero
        isMainPage
        theme={props.theme}
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

      <FacilitiesSection>
        <div>
          <h2>{facilitiesSectionHeading}</h2>
          <p>{facilitiesSectionDescription}</p>
        </div>

        <FacilitiesImagesContainer id="facilities-images-container">
          {/* <FacilitiesImageBox to="/o-nas#sectionId"> */}
          <FacilitiesImageBox to="/">
            <FacilitiesImage id="funny-maluszkowo-image" src={funnyMonkey} alt="Zabawna małpka" />
            <FacilitiesImageHeading>Maluszkowo</FacilitiesImageHeading>
          </FacilitiesImageBox>
          <FacilitiesImageBox to="/">
            <FacilitiesImage id="funny-starszakowo-image" src={funnyDog} alt="Zabawny piesek" />
            <FacilitiesImageHeading>Starszakowo</FacilitiesImageHeading>
          </FacilitiesImageBox>
        </FacilitiesImagesContainer>
      </FacilitiesSection>

      <ValuesSection>
        <ValuesDescriptionContainer>
          <h2>{valuesSectionHeading}</h2>
          <p>{valuesSectionDescription}</p>
        </ValuesDescriptionContainer>

        <ValuesImageContainer>
          <ValuesImage 
            srcSet={`${mobileRainbowHands} 520w, ${desktopRainbowHands} 700w`}
            sizes="(max-width: 767px) 520px, 700px"
            src={desktopRainbowHands}
            alt="Kolorowe rece"
          />
        </ValuesImageContainer>
      </ValuesSection>
    </>
  );
};
