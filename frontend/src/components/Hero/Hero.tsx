import React, { useContext } from "react";
import { StyledContainer, StyledDescription, StyledDivider, StyledHeading, StyledHero, StyledHeroContainer, StyledUnderline, Wave } from "./styles";
import { Props } from "./interface";
import { WebpageContext } from "../../store/webpage-context";

const Hero: React.FC<Props> = props => {
  const headerHeight = useContext(WebpageContext).headerHeight;

  return (
    <StyledHeroContainer 
      theme={props.theme} 
      isMainPage={props.isMainPage}
      headerHeight={headerHeight}>
      <StyledHero>
        <StyledContainer>
          <StyledHeading>{props.heading}</StyledHeading>
          <StyledDescription>{props.description}</StyledDescription>
          {props.isMainPage && props.isDesktopSize && <StyledUnderline id="underline" />}
        </StyledContainer>

        {props.children && 
          <StyledContainer>
            {props.children}
          </StyledContainer>}
      </StyledHero>

      <StyledDivider>
        <Wave />
        <Wave />
        <Wave />
        <Wave />
      </StyledDivider>
    </StyledHeroContainer>
  );
};

export default Hero;