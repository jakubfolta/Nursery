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
import mobileGirlWithBook from "../../../assets/images/girl-with-book-mobile.png";
import desktopGirlWithBook from "../../../assets/images/girl-with-book-desktop.png";
import funnyMonkey from "../../../assets/images/funny-monkey.png";
import funnyDog from "../../../assets/images/funny-dog.png";

import {
  ExceptionalImage,
  ExceptionalImageContainer,
  ExceptionalList,
  ExceptionalListItem,
  ExceptionalListItemHeading,
  ExceptionalSection,
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
import { ListItems } from "./interface";

export const MainPage: React.FC<{theme: string, isDesktopSize?: boolean}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [facilitiesSectionHeading, setFacilitiesSectionHeading] = useState<string | undefined>('');
  const [facilitiesSectionDescription, setFacilitiesSectionDescription] = useState<string | undefined>('');
  const [valuesSectionHeading, setValuesSectionHeading] = useState<string | undefined>('');
  const [valuesSectionDescription, setValuesSectionDescription] = useState<string | undefined>('');
  const [exceptionalSectionHeading, setExceptionalSectionHeading] = useState<string | undefined>('');
  const [exceptionalSectionListItems, setExceptionalSectionListItems] = useState<ListItems | undefined>();

  const mainPageContent = useContext(WebpageContext).pages['Main page'];

  useEffect(() => {
    if (mainPageContent) {
      setHeroHeading(mainPageContent.heading_1);
      setHeroDescription(mainPageContent.text_1);
      setFacilitiesSectionHeading(mainPageContent.heading_2);
      setFacilitiesSectionDescription(mainPageContent.text_2);
      setValuesSectionHeading(mainPageContent.heading_3);
      setValuesSectionDescription(mainPageContent.text_3);
      setExceptionalSectionHeading(mainPageContent.heading_4);
      setExceptionalSectionListItems({
        firstItem: {
          heading: mainPageContent.list_item_heading_1,
          description: mainPageContent.list_item_description_1
        },
        secondItem: {
          heading: mainPageContent.list_item_heading_2,
          description: mainPageContent.list_item_description_2
        },
        thirdItem: {
          heading: mainPageContent.list_item_heading_3,
          description: mainPageContent.list_item_description_3
        },
        fourthItem: {
          heading: mainPageContent.list_item_heading_4,
          description: mainPageContent.list_item_description_4
        }
      })
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

      <ExceptionalSection>
        <div>
          <h2>{exceptionalSectionHeading}</h2>
          <ExceptionalList>
            <ExceptionalListItem>
              <ExceptionalListItemHeading>{exceptionalSectionListItems?.firstItem.heading}</ExceptionalListItemHeading>
              <p>{exceptionalSectionListItems?.firstItem.description}</p>
            </ExceptionalListItem>
            <ExceptionalListItem>
              <ExceptionalListItemHeading>{exceptionalSectionListItems?.secondItem.heading}</ExceptionalListItemHeading>
              <p>{exceptionalSectionListItems?.secondItem.description}</p>
            </ExceptionalListItem>
            <ExceptionalListItem>
              <ExceptionalListItemHeading>{exceptionalSectionListItems?.thirdItem.heading}</ExceptionalListItemHeading>
              <p>{exceptionalSectionListItems?.thirdItem.description}</p>
            </ExceptionalListItem>
            <ExceptionalListItem>
              <ExceptionalListItemHeading>{exceptionalSectionListItems?.fourthItem.heading}</ExceptionalListItemHeading>
              <p>{exceptionalSectionListItems?.fourthItem.description}</p>
            </ExceptionalListItem>
          </ExceptionalList>
        </div>

        <ExceptionalImageContainer>
          <ExceptionalImage 
            srcSet={`${mobileGirlWithBook} 210w, ${desktopGirlWithBook} 280w`}
            sizes="(max-width: 767px) 210px, 280px"
            src={desktopGirlWithBook}
            alt="Dziewczynka z ksiazka"
          />
        </ExceptionalImageContainer>
      </ExceptionalSection>
    </>
  );
};
