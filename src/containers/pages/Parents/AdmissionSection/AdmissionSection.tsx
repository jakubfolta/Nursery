import React from "react";
import { Props } from "./interface";
import maluszkowoEntryForm from "../../../../assets/karta_zgłoszeniowa_maluszkowo.pdf";
import starszakowoEntryForm from "../../../../assets/karta_zgłoszeniowa_starszakowo.pdf";
import { EntryFormContainer, EntryFormHeading, EntryFormLink } from "./styles";

export const AdmissionSection: React.FC<Props> = props => (
  <section>
    <div>
      <h2>{props.sectionHeading}</h2>
      <p>{props.sectionDescription}</p>
      {(props.maluszkowoText || props.starszakowoText) &&
        <EntryFormContainer>
          {props.entryFormHeading &&
            <EntryFormHeading>{props.entryFormHeading}</EntryFormHeading>
          }
          {props.maluszkowoText &&
            <EntryFormLink
              to={maluszkowoEntryForm}
              download="Karta zgłoszeniowa - Maluszkowo"
              target="_blank">
              {props.maluszkowoText}
            </EntryFormLink>
          }
          {props.starszakowoText &&
            <EntryFormLink
              to={starszakowoEntryForm}
              download="Karta zgłoszeniowa - Starszakowo"
              target="_blank">
              {props.starszakowoText}
            </EntryFormLink>
          }
        </EntryFormContainer>
      }
    </div>
  </section>
);
  