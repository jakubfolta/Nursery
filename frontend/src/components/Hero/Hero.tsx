import React from "react";
import { StyledContainer, StyledDescription, StyledHeading, StyledHero } from "./styles";
import { Props } from "./interface";

const Hero: React.FC<Props> = props => (
  <StyledHero>
    <StyledContainer>
      <StyledHeading>{props.heading}</StyledHeading>
      <StyledDescription>{props.description}</StyledDescription>
    </StyledContainer>

    <StyledContainer>
      {props.children}
    </StyledContainer>
  </StyledHero>
)

export default Hero;