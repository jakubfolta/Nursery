import React from "react";
import mobilePlay from "../../../../assets/images/play-mobile.jpg";
import desktopPlay from "../../../../assets/images/play-desktop.jpg";
import mobileSmilingBoy from "../../../../assets/images/smiling-boy-mobile.jpg";
import desktopSmilingBoy from "../../../../assets/images/smiling-boy-desktop.jpg";
import { Props } from "./interface";
import { CurriculumContentContainer, CurriculumFullImageContainer, CurriculumImage, CurriculumImageContainer, CurriculumList, CurriculumListItem, CurriculumListItemContainer, CurriculumListItemDecoration, CurriculumListItemHeading, CurriculumStyledSection } from "./styles";

export const CurriculumSection: React.FC<Props> = props => (
  <CurriculumStyledSection data-full>
    <CurriculumContentContainer>
      <h2>{props.sectionHeading}</h2>
      <CurriculumList>
        {props.listItems.slice(0, 3).map((item, index) => 
          <CurriculumListItem key={index}>
            <CurriculumListItemContainer>
              <CurriculumListItemHeading>
                {item[0]}
              </CurriculumListItemHeading>
              <CurriculumListItemDecoration />
            </CurriculumListItemContainer>
            {item[1]}
          </CurriculumListItem>
        )}
      </CurriculumList>
    </CurriculumContentContainer>

    <CurriculumFullImageContainer>
      <CurriculumImage 
        srcSet={`${mobilePlay} 767w, ${desktopPlay} 1920w`}
        sizes="(max-width: 767px) 767px, 1920px"
        src={desktopPlay}
        alt="Drewniane klocki"
      />
    </CurriculumFullImageContainer>
    
    {!!props.listItems.slice(3).length &&
      <>
        <CurriculumContentContainer>
          <CurriculumList>
            {props.listItems.slice(3).map((item, index) => 
              <CurriculumListItem key={index} data-sequel>
                <CurriculumListItemContainer>
                  <CurriculumListItemHeading>
                    {item[0]}
                  </CurriculumListItemHeading>
                  <CurriculumListItemDecoration />
                </CurriculumListItemContainer>
                {item[1]}
              </CurriculumListItem>
            )}
          </CurriculumList>
        </CurriculumContentContainer>

        <CurriculumImageContainer>
          <CurriculumImage
            srcSet={`${mobileSmilingBoy} 495w, ${desktopSmilingBoy} 650w`}
            sizes="(max-width: 991px) 495px, 650px"
            src={desktopSmilingBoy}
            alt="Usmiechniety chlopiec"
          />
        </CurriculumImageContainer>
      </>
    }
  </CurriculumStyledSection>
);