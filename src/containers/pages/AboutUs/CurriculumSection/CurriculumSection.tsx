import React from "react";
import mobileChildBricks from "../../../../assets/images/child-bricks-mobile.jpg";
import desktopChildBricks from "../../../../assets/images/child-bricks-desktop.jpg";
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
        srcSet={`${mobileChildBricks} 767w, ${desktopChildBricks} 1920w`}
        sizes="(max-width: 767px) 767px, 1920px"
        src={desktopChildBricks}
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