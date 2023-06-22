import { Props } from "./interfaces";
import { NavItem, NavigationLink, NavigationText } from "./styles";

export const NavigationItem: React.FC<Props> = props => (
  <NavItem>
    <NavigationLink
      to={props.link}>
      <NavigationText>
        {props.title}
      </NavigationText>
    </NavigationLink>
  </NavItem>
)