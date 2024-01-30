import React from "react";
import { FacilitiesDescriptionContainer, FacilitiesImage, FacilitiesImageBox, FacilitiesImageHeading, FacilitiesImagesContainer } from "./styles";
import funnyMonkey from "../../../../assets/images/funny-monkey.png";
import funnyDog from "../../../../assets/images/funny-dog.png";
import { Props } from "./interface";

export const FacilitiesSection: React.FC<Props> = props => (
  <section>
    <FacilitiesDescriptionContainer>
      <h2>{props.sectionHeading}</h2>
      <p>{props.sectionDescription}</p>
    </FacilitiesDescriptionContainer>

    {props.isNurseryContentAvailable &&
      <FacilitiesImagesContainer id="facilities-images-container">
      {(props.maluszkowoHeading && props.maluszkowoDescription) &&
        <FacilitiesImageBox to="/o-nas#maluszkowo">
          <FacilitiesImage id="funny-maluszkowo-image" src={funnyMonkey} alt="Zabawna małpka" />
          <FacilitiesImageHeading>Maluszkowo</FacilitiesImageHeading>
        </FacilitiesImageBox>
      }
      {(props.starszakowoHeading && props.starszakowoDescription) &&
        <FacilitiesImageBox to="/o-nas#starszakowo">
          <FacilitiesImage id="funny-starszakowo-image" src={funnyDog} alt="Zabawny piesek" />
          <FacilitiesImageHeading>Starszakowo</FacilitiesImageHeading>
        </FacilitiesImageBox>
      }
      </FacilitiesImagesContainer>
    }
  </section>
);
