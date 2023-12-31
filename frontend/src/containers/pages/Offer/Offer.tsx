import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import { WebpageContext } from "../../../store/webpage-context";

const Offer: React.FC<{theme: string}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const offerPageContent = useContext(WebpageContext).pages['Offer'];

  useEffect(() => {
    if (offerPageContent) {
      setHeroHeading(offerPageContent.heading_1);
      setHeroDescription(offerPageContent.text_1);
    }
  }, [offerPageContent]);

  return (
    <Hero
      theme={props.theme}
      heading={heroHeading}
      description={heroDescription}
    />
  );
};

export default Offer;