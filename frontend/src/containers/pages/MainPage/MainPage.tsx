import React, { useContext, useEffect, useState } from "react"
import { WebpageContext } from "../../../store/webpage-context";
import Hero from "../../../components/Hero/Hero";

export const MainPage: React.FC = () => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const mainPageContent = useContext(WebpageContext).pages['Main page'];

  useEffect(() => {
    if (mainPageContent) {
      setHeroHeading(mainPageContent.heading_1);
      setHeroDescription(mainPageContent.text_1);
    }
  }, [mainPageContent]);

  return (
    <Hero 
      heading={heroHeading}
      description={heroDescription}
    />
  );
};
