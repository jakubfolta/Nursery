import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import mobileTortoise from "../../../assets/images/tortoise-mobile.png";
import desktopTortoise from "../../../assets/images/tortoise-desktop.png";
import { WebpageContext } from "../../../store/webpage-context";
import { OfferSection, PickupSection, StyledImage, StyledImageContainer } from "./styles";
import { getListItems } from "../../../utilities/getListItems";
import { ScheduleSection } from "./ScheduleSection/ScheduleSection";

const Offer: React.FC<{theme: string}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [offerSectionHeading, setOfferSectionHeading] = useState('');
  const [offerSectionDescription, setOfferSectionDescription] = useState('');
  const [scheduleSectionHeading, setScheduleSectionHeading] = useState('');
  const [scheduleSectionSubheading, setScheduleSectionSubheading] = useState('');
  const [scheduleSectionSubheading2, setScheduleSectionSubheading2] = useState('');
  const [maluszkowoSchedule, setMaluszkowoSchedule] = useState<[string, string][]>([]);
  const [starszakowoSchedule, setStarszakowoSchedule] = useState<[string, string][]>([]);
  const [pickupSectionHeading, setPickupSectionHeading] = useState('');
  const [pickupSectionDescription, setPickupSectionDescription] = useState('');

  const offerPageContent = useContext(WebpageContext).pages['Offer'];
  const offerPageSchedule = useContext(WebpageContext).schedules;

  useEffect(() => {
    if (offerPageContent) {
      setHeroHeading(offerPageContent.heading_1);
      setHeroDescription(offerPageContent.text_1);
      if (offerPageContent.heading_2 && offerPageContent.text_2) {
        setOfferSectionHeading(offerPageContent.heading_2);
        setOfferSectionDescription(offerPageContent.text_2);
      }
      if (offerPageContent.heading_3) {
        const maluszkowoScheduleItems = getListItems(offerPageSchedule['Maluszkowo']);
        const starszakowoScheduleItems = getListItems(offerPageSchedule['Starszakowo']);
        
        if (maluszkowoScheduleItems.length && offerPageContent.text_3) {
          setScheduleSectionHeading(offerPageContent.heading_3);
          setScheduleSectionSubheading(offerPageContent.text_3);
          setMaluszkowoSchedule(maluszkowoScheduleItems);
        }
        if (starszakowoScheduleItems.length && offerPageContent.text_4) {
          !scheduleSectionHeading && setScheduleSectionHeading(offerPageContent.heading_3);
          setScheduleSectionSubheading2(offerPageContent.text_4);
          setStarszakowoSchedule(starszakowoScheduleItems);
        }
      }
      if (offerPageContent.heading_5 && offerPageContent.text_5) {
        setPickupSectionHeading(offerPageContent.heading_5);
        setPickupSectionDescription(offerPageContent.text_5);
      }
    }
  }, [offerPageContent]);

  return (
    <>
      <Hero
        theme={props.theme}
        heading={heroHeading}
        description={heroDescription}>
        <StyledImageContainer>
          <StyledImage 
            srcSet={`${mobileTortoise} 520w, ${desktopTortoise} 700w`}
            sizes="(max-width: 767px) 520px, 700px"
            src={desktopTortoise}
            alt="Zolwik"
          />
        </StyledImageContainer>
      </Hero>

      {offerSectionHeading &&
        <OfferSection isScheduleSection={!!scheduleSectionHeading}>
          <div>
            <h2>{offerSectionHeading}</h2>
            <p>{offerSectionDescription}</p>
          </div>
        </OfferSection>
      }

      {scheduleSectionHeading &&
        <ScheduleSection 
          sectionHeading={scheduleSectionHeading}
          sectionSubheading={scheduleSectionSubheading}
          sectionSubheading2={scheduleSectionSubheading2}
          maluszkowoSchedule={maluszkowoSchedule}
          starszakowoSchedule={starszakowoSchedule}
          isPickupSection={!!pickupSectionHeading}
        />
      }

      {pickupSectionHeading &&
        <PickupSection isScheduleSection={!!scheduleSectionHeading}>
          <div>
            <h2>{pickupSectionHeading}</h2>
            <p>{pickupSectionDescription}</p>
          </div>
        </PickupSection>
      }
    </>
  );
};

export default Offer;
