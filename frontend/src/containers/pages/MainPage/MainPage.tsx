import React, { useContext, useEffect, useState } from "react"
import { WebpageContext } from "../../../store/webpage-context";
import { StyledHeading, StyledHero } from "./styles";

export const MainPage: React.FC = () => {
  const [heroHeading, setHeroHeading] = useState('');
  const [heroDescription, setHeroDescription] = useState('');

  const mainPageContent = useContext(WebpageContext).pages['Main page'];
  // console.log('MAIN PAGE CONTENT', mainPageContent);

  useEffect(() => {
    if (mainPageContent) {
      setHeroHeading(mainPageContent.heading_1);
      setHeroDescription(mainPageContent.text_1);
    }
  }, [mainPageContent]);

  return (
    <StyledHero>
      <StyledHeading>{heroHeading}</StyledHeading>
      {heroDescription}
    </StyledHero>
  );
}
