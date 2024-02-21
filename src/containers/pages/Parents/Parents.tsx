import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import mobilePanda from "../../../assets/images/panda-mobile.png";
import desktopPanda from "../../../assets/images/panda-desktop.png";
import { WebpageContext } from "../../../store/webpage-context";
import { StyledImage, StyledImageContainer } from "./styles";
import { AdmissionSection } from "./AdmissionSection/AdmissionSection";
import { PaymentSection } from "./PaymentSection/PaymentSection";

export const Parents: React.FC<{theme: string}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');
  const [rulesSectionHeading, setRulesSectionHeading] = useState('');
  const [rulesSectionDescription, setRulesSectionDescription] = useState('');
  const [childAdmissionSectionHeading, setChildAdmissionSectionHeading] = useState('');
  const [childAdmissionSectionDescription, setChildAdmissionSectionDescription] = useState('');
  const [entryFormHeading, setEntryFormHeading] = useState('');
  const [maluszkowoText, setMaluszkowoText] = useState('');
  const [starszakowoText, setStarszakowoText] = useState('');
  const [paymentSectionHeading, setPaymentSectionHeading] = useState('');
  const [paymentSectionDescription, setPaymentSectionDescription] = useState('');
  const [maluszkowoPaymentSubheading, setMaluszkowoPaymentSubheading] = useState('');
  const [maluszkowoPaymentDetails, setMaluszkowoPaymentDetails] = useState('');
  const [starszakowoPaymentSubheading, setStarszakowoPaymentSubheading] = useState('');
  const [starszakowoPaymentDetails, setStarszakowoPaymentDetails] = useState('');
  const [paymentTitleDetails, setPaymentTitleDetails] = useState('');

  const parentsPageContent = useContext(WebpageContext).pages['Parents'];

  useEffect(() => {
    console.log('PARENTS', parentsPageContent);
    if (parentsPageContent) {
      setHeroHeading(parentsPageContent.heading_1);
      setHeroDescription(parentsPageContent.text_1);
      if (parentsPageContent.heading_2 && parentsPageContent.text_2) {
        setRulesSectionHeading(parentsPageContent.heading_2);
        setRulesSectionDescription(parentsPageContent.text_2);
      }
      if (parentsPageContent.heading_3 && parentsPageContent.text_3) {
        setChildAdmissionSectionHeading(parentsPageContent.heading_3);
        setChildAdmissionSectionDescription(parentsPageContent.text_3);
        setEntryFormHeading(parentsPageContent.list_item_heading_1);
        setMaluszkowoText(parentsPageContent.list_item_heading_2);
        setStarszakowoText(parentsPageContent.list_item_heading_3);

      }
      if (parentsPageContent.heading_4 && parentsPageContent.text_4 && (parentsPageContent.list_item_description_1 || parentsPageContent.list_item_description_2)) {
        setPaymentSectionHeading(parentsPageContent.heading_4);
        setPaymentSectionDescription(parentsPageContent.text_4);
        setMaluszkowoPaymentSubheading(parentsPageContent.list_item_heading_4);
        setMaluszkowoPaymentDetails(parentsPageContent.list_item_description_1);
        setStarszakowoPaymentSubheading(parentsPageContent.list_item_heading_5);
        setStarszakowoPaymentDetails(parentsPageContent.list_item_description_2);
        setPaymentTitleDetails(parentsPageContent.list_item_description_3);
      }
      
    }
  }, [parentsPageContent]);

  return (
    <>
      <Hero 
        theme={props.theme}
        heading={heroHeading}
        description={heroDescription}>
        <StyledImageContainer>
          <StyledImage 
            srcSet={`${mobilePanda} 520w, ${desktopPanda} 700w`}
            sizes="(max-width: 767px) 520px, 700px"
            src={desktopPanda}
            alt="Panda"
          />
        </StyledImageContainer>
      </Hero>

      {rulesSectionHeading &&
        <section>
          <div>
            <h2>{rulesSectionHeading}</h2>
            <p>{rulesSectionDescription}</p>
          </div>
        </section>
      }

      {childAdmissionSectionHeading &&
        <AdmissionSection 
          sectionHeading={childAdmissionSectionHeading}
          sectionDescription={childAdmissionSectionDescription}
          maluszkowoText={maluszkowoText}
          starszakowoText={starszakowoText}
          entryFormHeading={entryFormHeading}
        />
      }

      {paymentSectionHeading &&
        <PaymentSection 
          sectionHeading={paymentSectionHeading}
          sectionDescription={paymentSectionDescription}
          maluszkowoPaymentSubheading={maluszkowoPaymentSubheading}
          maluszkowoPaymentDetails={maluszkowoPaymentDetails}
          starszakowoPaymentSubheading={starszakowoPaymentSubheading}
          starszakowoPaymentDetails={starszakowoPaymentDetails}
          paymentTitleDetails={paymentTitleDetails}
        />
      }
    </>
  );
};

// export default Parents;