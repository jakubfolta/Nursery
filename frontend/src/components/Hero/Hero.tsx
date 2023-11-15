import React from "react";
import { StyledDescription, StyledHeading, StyledHero } from "./styles";
import { Props } from "./interface";

const Hero: React.FC<Props> = props => (
  <StyledHero>
    <StyledHeading>{props.heading}</StyledHeading>
    <StyledDescription>{props.description}</StyledDescription>
  </StyledHero>
)

export default Hero;