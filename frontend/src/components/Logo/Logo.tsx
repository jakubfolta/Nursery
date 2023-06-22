import { StyledLogo, StyledLogoContainer } from "./styles";
import logo from "../../assets/images/logo-maluszkowo.png";

export const Logo: React.FC = () => (
  <StyledLogoContainer>
    <StyledLogo src={logo} />
  </StyledLogoContainer>
)