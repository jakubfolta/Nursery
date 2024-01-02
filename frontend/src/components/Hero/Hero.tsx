import React from "react";
import { StyledContainer, StyledDescription, StyledHeading, StyledHero, StyledHeroContainer, StyledUnderline } from "./styles";
import { Props } from "./interface";

const Hero: React.FC<Props> = props => (
  <StyledHeroContainer 
    theme={props.theme} 
    isMainPage={props.isMainPage}>
    <StyledHero>
      <StyledContainer>
        <StyledHeading>{props.heading}</StyledHeading>
        <StyledDescription>{props.description}</StyledDescription>
        {props.isMainPage && props.isDesktopSize && <StyledUnderline id="underline" />}
      </StyledContainer>

      <StyledContainer>
        {props.children}
      </StyledContainer>
    </StyledHero>
  </StyledHeroContainer>
)

export default Hero;