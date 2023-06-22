import React from "react";
import { StyledDogImage, StyledHero } from "./styles";
import dog from './../../../assets/images/fun-backpacker-bulldog-cartoon-character.png';

const AboutUs: React.FC = () => (
  <>
    <StyledHero>About us Page</StyledHero>
    <StyledDogImage src={dog} />
  </>
)

export default AboutUs;