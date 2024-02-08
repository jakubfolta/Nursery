import React from "react";
import mobilePlayBricks from "../../../../assets/images/play-bricks-mobile.jpg";
import desktopPlayBricks from "../../../../assets/images/play-bricks-desktop.jpg";
import { Props } from "./interface";
import { ScheduleContentContainer, ScheduleHoursList, ScheduleHoursSpan, ScheduleHoursSubheading, ScheduleStyledSection, ScheduleWaveBottom, ScheduleWaveTop, StyledScheduleImage, StyledScheduleImageContainer } from "./styles";

export const ScheduleSection: React.FC<Props> = props => (
  <ScheduleStyledSection data-full>
    <ScheduleWaveTop />
    <ScheduleContentContainer isPickupSection={props.isPickupSection}>
      <h2>{props.sectionHeading}</h2>

      {props.sectionSubheading &&
        <div>
          <ScheduleHoursSubheading>{props.sectionSubheading}</ScheduleHoursSubheading>
          <ScheduleHoursList>
            {props.maluszkowoSchedule!.map((item, index) => 
              <li key={index}>
                <ScheduleHoursSpan>{item[0]}</ScheduleHoursSpan>
                <span>  {item[1]}</span>
              </li>
            )}
          </ScheduleHoursList>
          <StyledScheduleImageContainer>
            <StyledScheduleImage 
              srcSet={`${mobilePlayBricks} 525w, ${desktopPlayBricks} 1120w`}
              sizes="(max-width: 767px) 525px, 1120px"
              src={desktopPlayBricks}
              alt="Klocki play"
            />
          </StyledScheduleImageContainer>
        </div>
      }

      {props.sectionSubheading2 &&
        <div>
          <ScheduleHoursSubheading>{props.sectionSubheading2}</ScheduleHoursSubheading>
          <ScheduleHoursList>
            {props.starszakowoSchedule!.map((item, index) => 
              <li key={index}>
                <ScheduleHoursSpan>{item[0]}</ScheduleHoursSpan>
                <span>  {item[1]}</span>
              </li>
            )}
          </ScheduleHoursList>
        </div>
      }
    </ScheduleContentContainer>
    {props.isPickupSection &&
      <ScheduleWaveBottom />
    }
  </ScheduleStyledSection>
);
  