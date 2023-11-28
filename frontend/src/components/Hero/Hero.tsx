import React from "react";
import { StyledContainer, StyledDescription, StyledHeading, StyledHero, StyledUnderline } from "./styles";
import { Props } from "./interface";

const Hero: React.FC<Props> = props => (
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
)

export default Hero;