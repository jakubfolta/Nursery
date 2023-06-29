import { ButtonContainer, Line1, Line2 } from "./styles";
import { Props } from "./interfaces";

export const MenuButton: React.FC<Props> = props => (
  <ButtonContainer onClick={props.onButtonClick}>
    <Line1 className={['menu-button', props.buttonState].join(' ')} />
    <Line2 className={['menu-button', props.buttonState].join(' ')} />
  </ButtonContainer>
)