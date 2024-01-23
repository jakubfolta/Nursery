import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import mobilePlayingBoy from "../../../assets/images/playing-boy-mobile.jpg";
import desktopPlayingBoy from "../../../assets/images/playing-boy-desktop.jpg";
import { WebpageContext } from "../../../store/webpage-context";
import { StyledImage, StyledImageContainer, SuccessSection } from "./styles";
import { Scrollbar } from "smooth-scrollbar/scrollbar";
import { CONSTANTS } from "../../../styles/global";
import { NurserySection } from "./NurserySection/NurserySection";

const waveHeight = CONSTANTS.waveHeight;

const AboutUs: React.FC<{theme: string, scrollbar?: Scrollbar}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [successHeading, setSuccessHeading] = useState('');
  const [successDescription, setSuccessDescription] = useState('');
  const [maluszkowoHeading, setMaluszkowoHeading] = useState('');
  const [maluszkowoDescription, setMaluszkowoDescription] = useState('');
  const [starszakowoHeading, setStarszakowoHeading] = useState('');
  const [starszakowoDescription, setStarszakowoDescription] = useState('');
  
  const aboutUsPageContent = useContext(WebpageContext).pages['About us'];
  const hash = window.location.hash.replace('#', '');
  
  useEffect(() => {
    if (aboutUsPageContent) {
      setHeroHeading(aboutUsPageContent.heading_1);
      setHeroDescription(aboutUsPageContent.text_1);
      if (aboutUsPageContent.heading_2 && aboutUsPageContent.text_2) {
        setSuccessHeading(aboutUsPageContent.heading_2);
        setSuccessDescription(aboutUsPageContent.text_2);
      }
      if (aboutUsPageContent.heading_3 && aboutUsPageContent.text_3) {
        setMaluszkowoHeading(aboutUsPageContent.heading_3);
        setMaluszkowoDescription(aboutUsPageContent.text_3);
      }
      if (aboutUsPageContent.heading_4 && aboutUsPageContent.text_4) {
        setStarszakowoHeading(aboutUsPageContent.heading_4);
        setStarszakowoDescription(aboutUsPageContent.text_4);
      }
      // if (aboutUsPageContent.heading_5) {
        
      // }
    }
  }, [aboutUsPageContent]);

  useEffect(() => {
    if ((hash === 'maluszkowo' && maluszkowoHeading) || (hash === 'starszakowo' && starszakowoHeading)) {
      setTimeout(() => {
        scrollToSection(hash);
      }, 100);
    }
  }, [hash, maluszkowoHeading, starszakowoHeading]);

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

      {successHeading &&
        <SuccessSection>
          <div>
            <h2>{successHeading}</h2>
            <p>{successDescription}</p>
          </div>
        </SuccessSection>
      }

      {maluszkowoHeading &&
        <NurserySection
          id="maluszkowo"
          sectionHeading={maluszkowoHeading}
          sectionDescription={maluszkowoDescription}
        />
      }

      {starszakowoHeading &&
        <NurserySection
          id="starszakowo"
          starszakowo
          sectionHeading={starszakowoHeading}
          sectionDescription={starszakowoDescription}
          isMaluszkowo={!!maluszkowoHeading}
        />
      }
    </>
  );
};

export default AboutUs;