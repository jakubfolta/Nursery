import React from "react";
import { Props } from "./interface";
import { ContactContainer, ContactDescription, ContactDetailsContainer, ContactDetailsHeading, ContactImage, ContactImageContainer } from "./styles";
import contactPhone from "../../../../assets/images/phone.png";
import contactAddress from "../../../../assets/images/address.png";
import contactEmail from "../../../../assets/images/email.png";

export const ContactSection: React.FC<Props> = props => (
  <section>
    <div>
      <ContactDetailsHeading>{props.sectionHeading}</ContactDetailsHeading>
      <ContactDetailsContainer>
        <ContactContainer>
          <ContactImageContainer>
            <ContactImage 
              src={contactPhone}
              alt="Telefon"
            />
          </ContactImageContainer>
          <ContactDescription>Telefon: {props.phone}</ContactDescription>
        </ContactContainer>

        <ContactContainer>
          <ContactImageContainer>
            <ContactImage 
              src={contactAddress}
              alt="Pinezka"
            />
          </ContactImageContainer>
          <ContactDescription>{props.address}</ContactDescription>
        </ContactContainer>

        <ContactContainer>
          <ContactImageContainer>
            <ContactImage 
              src={contactEmail}
              alt="List"
            />
          </ContactImageContainer>
          <ContactDescription>{props.email}</ContactDescription>
        </ContactContainer>
      </ContactDetailsContainer>
    </div>
  </section>
);
  