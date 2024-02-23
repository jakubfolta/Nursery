import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import mobilePlayingBoy from "../../../assets/images/playing-boy-mobile.jpg";
import desktopPlayingBoy from "../../../assets/images/playing-boy-desktop.jpg";
import { WebpageContext } from "../../../store/webpage-context";
import { StyledImage, StyledImageContainer, SuccessSection } from "./styles";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import { CONSTANTS } from "../../../styles/global";
import { NurserySection } from "./NurserySection/NurserySection";
import { getListItems } from "../../../utilities/getListItems";
import { CurriculumSection } from "./CurriculumSection/CurriculumSection";

const waveHeight = CONSTANTS.waveHeight;

const AboutUs: React.FC<{theme: string, scrollbar?: Scrollbar}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [successSectionHeading, setSuccessSectionHeading] = useState('');
  const [successSectionDescription, setSuccessSectionDescription] = useState('');
  const [maluszkowoSectionHeading, setMaluszkowoSectionHeading] = useState('');
  const [maluszkowoSectionDescription, setMaluszkowoSectionDescription] = useState('');
  const [starszakowoSectionHeading, setStarszakowoSectionHeading] = useState('');
  const [starszakowoSectionDescription, setStarszakowoSectionDescription] = useState('');
  const [curriculumSectionHeading, setCurriculumSectionHeading] = useState('');
  const [curriculumSectionListItems, setCurriculumSectionListItems] = useState<[string, string][]>([]);
  
  const aboutUsPageContent = useContext(WebpageContext).pages['About us'];
  const hash = window.location.hash.replace('#', '');
  
  useEffect(() => {
    if (aboutUsPageContent) {
      setHeroHeading(aboutUsPageContent.heading_1);
      setHeroDescription(aboutUsPageContent.text_1);
      if (aboutUsPageContent.heading_2 && aboutUsPageContent.text_2) {
        setSuccessSectionHeading(aboutUsPageContent.heading_2);
        setSuccessSectionDescription(aboutUsPageContent.text_2);
      }
      if (aboutUsPageContent.heading_3 && aboutUsPageContent.text_3) {
        setMaluszkowoSectionHeading(aboutUsPageContent.heading_3);
        setMaluszkowoSectionDescription(aboutUsPageContent.text_3);
      }
      if (aboutUsPageContent.heading_4 && aboutUsPageContent.text_4) {
        setStarszakowoSectionHeading(aboutUsPageContent.heading_4);
        setStarszakowoSectionDescription(aboutUsPageContent.text_4);
      }
      if (aboutUsPageContent.heading_5) {
        const listItems = getListItems(aboutUsPageContent);
        
        if (listItems.length) {
          setCurriculumSectionHeading(aboutUsPageContent.heading_5);
          setCurriculumSectionListItems(listItems);
        }
      }
    }
  }, [aboutUsPageContent]);

  useEffect(() => {
    if ((hash === 'maluszkowo' && maluszkowoSectionHeading) || (hash === 'starszakowo' && starszakowoSectionHeading)) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [hash, maluszkowoSectionHeading, starszakowoSectionHeading]);

  const scrollToSection = ((sectionId: string) => {
    const sectionElement = document.getElementById(sectionId);
    const position = sectionElement!.offsetTop - waveHeight;
    props.scrollbar?.scrollTo(0, position);    
  });

  return (
    <>
      <Hero 
        theme={props.theme}
        heading={heroHeading}
        description={heroDescription}>
        <StyledImageContainer>
          <StyledImage 
            srcSet={`${mobilePlayingBoy} 520w, ${desktopPlayingBoy} 630w`}
            sizes="(max-width: 767px) 520px, 630px"
            src={desktopPlayingBoy}
            alt="Bawiacy sie chlopiec"
          />
        </StyledImageContainer>
      </Hero>

      {successSectionHeading &&
        <SuccessSection
          isMaluszkowo={!!maluszkowoSectionHeading}
          isStarszakowo={!!starszakowoSectionHeading}>
          <div>
            <h2>{successSectionHeading}</h2>
            <p>{successSectionDescription}</p>
          </div>
        </SuccessSection>
      }

      {maluszkowoSectionHeading &&
        <NurserySection
          id="maluszkowo"
          sectionHeading={maluszkowoSectionHeading}
          sectionDescription={maluszkowoSectionDescription}
          isStarszakowo={!!starszakowoSectionHeading}
          isCharacteristic={!!curriculumSectionHeading}
        />
      }
      
      {starszakowoSectionHeading &&
        <NurserySection
          id="starszakowo"
          starszakowo
          sectionHeading={starszakowoSectionHeading}
          sectionDescription={starszakowoSectionDescription}
          isMaluszkowo={!!maluszkowoSectionHeading}
          isCharacteristic={!!curriculumSectionHeading}
        />
      }

      {curriculumSectionHeading &&
        <CurriculumSection
          sectionHeading={curriculumSectionHeading}
          listItems={curriculumSectionListItems}
        />
      }
    </>
  );
};

export default AboutUs;