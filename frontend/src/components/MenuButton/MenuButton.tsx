import { ButtonContainer, Button } from "./styles";
import { Props } from "./interfaces";

export const MenuButton: React.FC<Props> = props => (
  <ButtonContainer onClick={props.onButtonClick}>
    <Button className={['menu-button', props.buttonState].join(' ')} />
  </ButtonContainer>
)