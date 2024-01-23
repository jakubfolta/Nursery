import React from "react";
import mobileRainbowHands from "../../../../assets/images/rainbow-hands-mobile.jpg";
import desktopRainbowHands from "../../../../assets/images/rainbow-hands-desktop.jpg";
import { Props } from "./interface";
import { ValuesDescriptionContainer, ValuesImage, ValuesImageContainer, ValuesStyledSection } from "./styles";

export const ValuesSection: React.FC<Props> = props => {
  return (
    <ValuesStyledSection>
      <ValuesDescriptionContainer>
        <h2>{props.sectionHeading}</h2>
        <p>{props.sectionDescription}</p>
      </ValuesDescriptionContainer>
      
      <ValuesImageContainer>
        <ValuesImage 
          srcSet={`${mobileRainbowHands} 520w, ${desktopRainbowHands} 700w`}
          sizes="(max-width: 767px) 520px, 700px"
          src={desktopRainbowHands}
          alt="Kolorowe rece"
        />
      </ValuesImageContainer>
    </ValuesStyledSection>
  );
};