import React, { useContext, useEffect, useState } from "react"
import { WebpageContext } from "../../../store/webpage-context";
import Hero from "../../../components/Hero/Hero";
import mobileKidsGrass from "../../../assets/images/kids-on-the-grass-mobile.jpg";
import desktopKidsGrass from "../../../assets/images/kids-on-the-grass-desktop.jpg";
import mobilePaintingGirl from "../../../assets/images/painting-girl-mobile.jpg";
import desktopPaintingGirl from "../../../assets/images/painting-girl-desktop.jpg";
import mobileKidsPlayingWithWater from "../../../assets/images/kids-playing-with-water-mobile.jpg";
import desktopKidsPlayingWithWater from "../../../assets/images/kids-playing-with-water-desktop.jpg";
import { StyledImage, StyledImageContainer, StyledImageContainerShadow } from "./styles";
import { FacilitiesSection } from "./FacilitiesSection/FacilitiesSection";
import { ValuesSection } from "./ValuesSection/ValuesSection";
import { ExceptionalSection } from "./ExceptionalSection/ExceptionalSection";
import { getListItems } from "../../../utilities/getListItems";

export const MainPage: React.FC<{theme: string, isDesktopSize?: boolean, setFacilitiesSectionAvailability?: () => void}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [facilitiesSectionHeading, setFacilitiesSectionHeading] = useState<string>();
  const [facilitiesSectionDescription, setFacilitiesSectionDescription] = useState<string>();
  const [valuesSectionHeading, setValuesSectionHeading] = useState<string>();
  const [valuesSectionDescription, setValuesSectionDescription] = useState<string>();
  const [exceptionalSectionHeading, setExceptionalSectionHeading] = useState<string>();
  const [exceptionalSectionListItems, setExceptionalSectionListItems] = useState<[string, string][]>([]);

  const mainPageContent = useContext(WebpageContext).pages['Main page'];
  const aboutUsPageContent = useContext(WebpageContext).pages['About us'];
  let isNurseryContentAvailable = false;
  
  if (aboutUsPageContent) {
    isNurseryContentAvailable = !!((aboutUsPageContent.heading_3 && aboutUsPageContent.text_3) || (aboutUsPageContent.heading_4 && aboutUsPageContent.text_4));
  }

  useEffect(() => {
    if (mainPageContent) {
      setHeroHeading(mainPageContent.heading_1);
      setHeroDescription(mainPageContent.text_1);
      if (mainPageContent.heading_2 && mainPageContent.text_2) {
        setFacilitiesSectionHeading(mainPageContent.heading_2);
        setFacilitiesSectionDescription(mainPageContent.text_2);
      }
      if (mainPageContent.heading_3 && mainPageContent.text_3) {
        setValuesSectionHeading(mainPageContent.heading_3);
        setValuesSectionDescription(mainPageContent.text_3);
      }
      if (mainPageContent.heading_4) {
        const listItems = getListItems(mainPageContent);
        
        if (listItems.length) {
          setExceptionalSectionHeading(mainPageContent.heading_4);
          setExceptionalSectionListItems(listItems);
        }
      }
    }
  }, [mainPageContent]);

  useEffect(() => {
    if (isNurseryContentAvailable) {
      props.setFacilitiesSectionAvailability && props.setFacilitiesSectionAvailability();
    }
  }, [isNurseryContentAvailable]);

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

      {facilitiesSectionHeading &&
        <FacilitiesSection
          sectionHeading={facilitiesSectionHeading}
          sectionDescription={facilitiesSectionDescription}
          isNurseryContentAvailable={isNurseryContentAvailable}
          maluszkowoHeading={aboutUsPageContent.heading_3}
          maluszkowoDescription={aboutUsPageContent.text_3}
          starszakowoHeading={aboutUsPageContent.heading_4}
          starszakowoDescription={aboutUsPageContent.text_4}
        />
      }

      {valuesSectionHeading &&
        <ValuesSection
          sectionHeading={valuesSectionHeading}
          sectionDescription={valuesSectionDescription}
        />
      }

      {exceptionalSectionHeading &&
        <ExceptionalSection
          sectionHeading={exceptionalSectionHeading}
          listItems={exceptionalSectionListItems}
        /> 
      }
    </>
  );
};
