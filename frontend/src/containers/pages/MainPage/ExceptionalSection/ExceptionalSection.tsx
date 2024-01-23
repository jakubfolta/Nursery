import React from "react";
import mobileGirlWithBook from "../../../../assets/images/girl-with-book-mobile.png";
import desktopGirlWithBook from "../../../../assets/images/girl-with-book-desktop.png";
import { Props } from "./interface";
import { ExceptionalImage, ExceptionalImageContainer, ExceptionalList, ExceptionalListItem, ExceptionalListItemHeading, ExceptionalStyledSection } from "./styles";
import { ListItems } from "../interface";

export const ExceptionalSection: React.FC<Props> = props => {
  return (
    <ExceptionalStyledSection>
      <div>
        <h2>{props.sectionHeading}</h2>
        <ExceptionalList>
          {Object.values(props.listItems as ListItems).map((value, index) =>
            <ExceptionalListItem key={index}>
              <ExceptionalListItemHeading>{value.heading}</ExceptionalListItemHeading>
              <p>{value.description}</p>
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
};