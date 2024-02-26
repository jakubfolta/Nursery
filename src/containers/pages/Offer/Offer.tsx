import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import mobileTortoise from "../../../assets/images/tortoise-mobile.png";
import desktopTortoise from "../../../assets/images/tortoise-desktop.png";
import { WebpageContext } from "../../../store/webpage-context";
import { OfferSection, PickupSection, StyledImage, StyledImageContainer } from "./styles";
import { getListItems } from "../../../utilities/getListItems";
import { ScheduleSection } from "./ScheduleSection/ScheduleSection";
import { ScheduleContentContainer, ScheduleHoursSubheading, ScheduleStyledSection, ScheduleWaveBottom, ScheduleWaveTop } from "./ScheduleSection/styles";
import { ContactFormContainer, ContactFormSection, ContactFormWaveTop } from "../Contact/styles";

import mySVG from '../../../assets/images/waves.svg';

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

<ContactFormSection data-full>
          <ContactFormWaveTop />
          <ContactFormContainer>
            <h2>Formularz kontaktowy</h2>
            {/* <ContactForm 
              onFieldChange={onChangeHandler}
              onFormSubmit={onSubmitFormHandler}
              nameValue={formState.formFields.name.value}
              emailValue={formState.formFields.email.value}
              messageValue={formState.formFields.message.value}
              isNameValid={formState.formFields.name.isValid}
              isNameTouched={formState.formFields.name.isTouched}
              isEmailValid={formState.formFields.email.isValid}
              isEmailTouched={formState.formFields.email.isTouched}
              isFormValid={isValidForm}
              isLoading={isLoading}
              showMessage={showMessage}
              isMessageSent={isMessageSent}
              message={message} 
            /> */}
          </ContactFormContainer>
        </ContactFormSection>




<ScheduleStyledSection data-full>
    <img src={mySVG} alt="hello" style={{width: "100%"}}/>
    <ScheduleContentContainer isPickupSection={!!pickupSectionHeading}>
      <h2>{scheduleSectionHeading}</h2>

      
        <div>
          <ScheduleHoursSubheading>{scheduleSectionSubheading}</ScheduleHoursSubheading>
          
        </div>

    </ScheduleContentContainer>
    {/* <ScheduleWaveContainer> */}

    {/* </ScheduleWaveContainer> */}
    <ScheduleWaveTop />
    <ScheduleContentContainer isPickupSection={!!pickupSectionHeading}>
      <h2>{scheduleSectionHeading}</h2>

      {scheduleSectionSubheading &&
        <div>
          <ScheduleHoursSubheading>{scheduleSectionSubheading}</ScheduleHoursSubheading>
          {/* <ScheduleHoursList>
            {props.maluszkowoSchedule!.map((item, index) => 
              <li key={index}>
                <ScheduleHoursSpan>{item[0]}</ScheduleHoursSpan>
                <span>  {item[1]}</span>
              </li>
            )}
          </ScheduleHoursList>
          <StyledScheduleImageContainer>
            <StyledScheduleImage 
              srcSet={`${mobilePlayBricks} 525w, ${desktopPlayBricks} 1120w`}
              sizes="(max-width: 767px) 525px, 1120px"
              src={desktopPlayBricks}
              alt="Klocki play"
            />
          </StyledScheduleImageContainer> */}
        </div>
      }

      {/* {props.sectionSubheading2 &&
        <div>
          <ScheduleHoursSubheading>{props.sectionSubheading2}</ScheduleHoursSubheading>
          <ScheduleHoursList>
            {props.starszakowoSchedule!.map((item, index) => 
              <li key={index}>
                <ScheduleHoursSpan>{item[0]}</ScheduleHoursSpan>
                <span>  {item[1]}</span>
              </li>
            )}
          </ScheduleHoursList>
        </div>
      } */}
    </ScheduleContentContainer>
    {!!pickupSectionHeading &&
      <ScheduleWaveBottom />
    }
  </ScheduleStyledSection>



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
