import React, { useContext } from "react";
import { StyledContainer, StyledDescription, StyledDivider, StyledHeading, StyledHero, StyledHeroContainer, StyledUnderline, Wave } from "./styles";
import { Props } from "./interface";
import { WebpageContext } from "../../store/webpage-context";
import { getFirefoxColors } from "../../utilities/getFirefoxColors";

const Hero: React.FC<Props> = props => {
  const headerHeight = useContext(WebpageContext).headerHeight;

  return (
    <StyledHeroContainer 
      theme={props.theme}
      firefoxColorOne={getFirefoxColors(props.theme)[0]}
      firefoxColorTwo={getFirefoxColors(props.theme)[1]}
      isMainPage={props.isMainPage}
      headerHeight={headerHeight}>
      <StyledHero>
        <StyledContainer>
          <StyledHeading isMainPage={props.isMainPage}>{props.heading}</StyledHeading>
          <StyledDescription>
            {props.description}
            {props.isMainPage && props.isDesktopSize && <StyledUnderline id="underline" />}
          </StyledDescription>
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