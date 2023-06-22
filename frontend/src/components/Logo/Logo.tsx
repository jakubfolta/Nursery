import { StyledLogo, StyledLogoContainer } from "./styles";
import mobileLogo from "../../assets/images/logo-maluszkowo-mobile.png";
import tabletLogo from "../../assets/images/logo-maluszkowo-tablet.png";
import desktopLogo from "../../assets/images/logo-maluszkowo-desktop.png";

export const Logo: React.FC = () => (
  <StyledLogoContainer>
    <StyledLogo
      srcSet={`${mobileLogo} 90w, ${tabletLogo} 120w, ${desktopLogo} 140w`}
      sizes="(max-width: 640px) 90px, (max-width: 1024px) 120px, 140px"
      src={desktopLogo}
      alt="Maluszkowo logo"
    />
  </StyledLogoContainer>
)