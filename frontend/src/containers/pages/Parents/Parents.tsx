import React, { useContext, useEffect, useState } from "react";
import Hero from "../../../components/Hero/Hero";
import { WebpageContext } from "../../../store/webpage-context";

const Parents: React.FC = () => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const parentsPageContent = useContext(WebpageContext).pages['Parents'];

  useEffect(() => {
    if (parentsPageContent) {
      setHeroHeading(parentsPageContent.heading_1);
      setHeroDescription(parentsPageContent.text_1);
    }
  }, [parentsPageContent]);

  return (
    <Hero 
      heading={heroHeading}
      description={heroDescription}
    />
  );
};

export default Parents;