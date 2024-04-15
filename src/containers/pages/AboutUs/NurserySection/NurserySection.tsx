import React from "react";
import mobileMaluszkowo from "../../../../assets/images/maluszkowo-mobile.jpg";
import desktopMaluszkowo from "../../../../assets/images/maluszkowo-desktop.jpg";
import mobileStarszakowo from "../../../../assets/images/starszakowo-mobile.jpg";
import desktopStarszakowo from "../../../../assets/images/starszakowo-desktop.jpg";
import { Props } from "./interface";
import { LinkToGallery, NurseryContentContainer, NurseryContentHeading, NurseryStyledSection, NurseryWaveBottom, NurseryWaveTop, StyledNurseryImage, StyledNurseryImageContainer } from "./styles";
import wave from "../../../../assets/images/waves.svg";

export const NurserySection: React.FC<Props> = props => (
  <NurseryStyledSection
    id={props.id}
    data-full
    isMaluszkowo={props.isMaluszkowo}
    isStarszakowo={props.isStarszakowo}
    starszakowo={props.starszakowo}
    isCharacteristic={props.isCharacteristic}>
    {(props.starszakowo && !props.isMaluszkowo)
      ? <NurseryWaveTop
          src={wave}
          alt="Fala"
        />
      : !props.starszakowo
      && <NurseryWaveTop
          src={wave}
          alt="Fala"
        />
    }
    <StyledNurseryImageContainer starszakowo={props.starszakowo}>
      <StyledNurseryImage
        srcSet={`${props.starszakowo ? mobileStarszakowo : mobileMaluszkowo} 540w, ${props.starszakowo ? desktopStarszakowo : desktopMaluszkowo} 1020w`}
        sizes="(max-width: 767px) 540px, 1020px"
        src={props.starszakowo ? desktopStarszakowo : desktopMaluszkowo}
        alt={props.starszakowo ? 'Starszaki' : 'Maluszki'}
      />
    </StyledNurseryImageContainer>
    <NurseryContentContainer
      isCharacteristic={props.isCharacteristic}
      isStarszakowo={props.isStarszakowo}>
      <NurseryContentHeading starszakowo={props.starszakowo}>{props.sectionHeading}</NurseryContentHeading>
      <p>
        {props.sectionDescription}&nbsp;
        {props.isGalleryAvailable &&
          <LinkToGallery to={!props.starszakowo ? '/galeria#maluszkowo-gallery' : '/galeria#starszakowo-gallery'}>Sprawdź naszą galerię!</LinkToGallery>
        }
      </p>
    </NurseryContentContainer>
    {(props.isCharacteristic && (!props.isStarszakowo || props.starszakowo)) &&
      <NurseryWaveBottom />
    }
  </NurseryStyledSection>
);
  