import React from "react";
import { Props } from "./interface";
import { PaymentContainer, PaymentSubheading, PaymentTitle } from "./styles";

export const PaymentSection: React.FC<Props> = props => (
  <section>
    <div>
      <h2>{props.sectionHeading}</h2>
      <p>{props.sectionDescription}</p>
      {props.maluszkowoPaymentDetails &&
        <PaymentContainer>
          {props.maluszkowoPaymentSubheading &&
            <PaymentSubheading>{props.maluszkowoPaymentSubheading}</PaymentSubheading>
          }
          <p>{props.maluszkowoPaymentDetails}</p>
        </PaymentContainer>
      }

      {props.starszakowoPaymentDetails &&
        <PaymentContainer>
          {props.starszakowoPaymentSubheading &&
            <PaymentSubheading>{props.starszakowoPaymentSubheading}</PaymentSubheading>
          }
          <p>{props.starszakowoPaymentDetails}</p>
        </PaymentContainer>
      }
      {props.paymentTitleDetails &&
        <PaymentTitle>{props.paymentTitleDetails}</PaymentTitle>
      }
    </div>
  </section>
);
  