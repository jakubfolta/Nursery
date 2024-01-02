import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import { WebpageContext } from "../../../store/webpage-context";

const AboutUs: React.FC<{theme: string}> = props => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const aboutUsPageContent = useContext(WebpageContext).pages['About us'];

  useEffect(() => {
    if (aboutUsPageContent) {
      setHeroHeading(aboutUsPageContent.heading_1);
      setHeroDescription(aboutUsPageContent.text_1);
    }
  }, [aboutUsPageContent]);

  return (
    <Hero 
      theme={props.theme}
      heading={heroHeading}
      description={heroDescription}
    />
  );
};

export default AboutUs;