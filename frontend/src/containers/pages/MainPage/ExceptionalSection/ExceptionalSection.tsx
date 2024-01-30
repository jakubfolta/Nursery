import React from "react";
import mobileGirlWithBook from "../../../../assets/images/girl-with-book-mobile.png";
import desktopGirlWithBook from "../../../../assets/images/girl-with-book-desktop.png";
import { Props } from "./interface";
import { ExceptionalImage, ExceptionalImageContainer, ExceptionalList, ExceptionalListItem, ExceptionalListItemHeading, ExceptionalStyledSection } from "./styles";

export const ExceptionalSection: React.FC<Props> = props => (
  <ExceptionalStyledSection>
    <div>
      <h2>{props.sectionHeading}</h2>
      <ExceptionalList>
        {props.listItems.map((item, index) =>
          <ExceptionalListItem key={index}>
            <ExceptionalListItemHeading>{item[0]}</ExceptionalListItemHeading>
            <p>{item[1]}</p>
          </ExceptionalListItem>  
        )}
      </ExceptionalList>
    </div>
    
    <ExceptionalImageContainer>
      <ExceptionalImage 
        srcSet={`${mobileGirlWithBook} 210w, ${desktopGirlWithBook} 280w`}
        sizes="(max-width: 767px) 210px, 280px"
        src={desktopGirlWithBook}
        alt="Dziewczynka z ksiazka"
      />
    </ExceptionalImageContainer>
  </ExceptionalStyledSection>
);
  
  