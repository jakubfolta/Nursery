import { StyledLogo, StyledLogoContainer, StyledNavLink } from "./styles";
import mobileLogo from "../../assets/images/logo-maluszkowo-mobile.png";
import tabletLogo from "../../assets/images/logo-maluszkowo-tablet.png";
import desktopLogo from "../../assets/images/logo-maluszkowo-desktop.png";

export const Logo: React.FC = () => (
  <StyledNavLink to="/">
    <StyledLogoContainer>
      <StyledLogo
        srcSet={`${mobileLogo} 70w, ${tabletLogo} 120w, ${desktopLogo} 140w`}
        sizes="(max-width: 640px) 70px, (max-width: 1024px) 120px, 140px"
        src={desktopLogo}
        alt="Maluszkowo logo"
      />
    </StyledLogoContainer>
  </StyledNavLink>
)