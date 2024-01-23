import React from "react";
import mobileMaluszkowo from "../../../../assets/images/maluszkowo-mobile.jpg";
import desktopMaluszkowo from "../../../../assets/images/maluszkowo-desktop.jpg";
import mobileStarszakowo from "../../../../assets/images/starszakowo-mobile.jpg";
import desktopStarszakowo from "../../../../assets/images/starszakowo-desktop.jpg";
import { Props } from "./interface";
import { NurseryContentContainer, NurseryContentHeading, NurseryStyledSection, NurseryWaveTop, StyledNurseryImage, StyledNurseryImageContainer } from "./styles";

export const NurserySection: React.FC<Props> = props => {
  return (
    <NurseryStyledSection id={props.id} data-full isMaluszkowo={props.isMaluszkowo}>
      {(props.starszakowo && !props.isMaluszkowo)
        ? <NurseryWaveTop />
        : !props.starszakowo
        && <NurseryWaveTop />
      }
      <StyledNurseryImageContainer starszakowo={props.starszakowo}>
        <StyledNurseryImage
          srcSet={`${props.starszakowo ? mobileStarszakowo : mobileMaluszkowo} 540w, ${props.starszakowo ? desktopStarszakowo : desktopMaluszkowo} 1020w`}
          sizes="(max-width: 767px) 540px, 1020px"
          src={props.starszakowo ? desktopStarszakowo : desktopMaluszkowo}
          alt={props.starszakowo ? 'Starszaki' : 'Maluszki'}
        />
      </StyledNurseryImageContainer>
      <NurseryContentContainer>
        <NurseryContentHeading starszakowo={props.starszakowo}>{props.sectionHeading}</NurseryContentHeading>
        <p>{props.sectionDescription}</p>
      </NurseryContentContainer>
    </NurseryStyledSection>
  );
};