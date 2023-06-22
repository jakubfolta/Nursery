import { useEffect, useState } from "react";
import { Logo, MenuButton, NavigationList } from "../../components";
import { StyledHeader } from "./styles";
import { CONSTANTS } from "../../styles/global";

export const Header: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuReady, setIsMenuReady] = useState(true);
  const [menuButtonClass, setMenuButtonClass] = useState('');
  
  useEffect(() => {
    if (!isMenuReady) {
      setTimeout(() => {
        setIsMenuReady(true);
      }, CONSTANTS.seconds * 1000);
    }
  }, [isMenuReady])
  
  const onClickHandler = () => {  
    if (!isMenuReady) return;

    setIsMenuReady(false);
    setIsMenuVisible(prevState => !prevState);
    isMenuVisible ? setMenuButtonClass('closed') : setMenuButtonClass('opened');
  };
  
  return (
    <StyledHeader id="header">
      <Logo />
      <MenuButton 
        onButtonClick={onClickHandler}
        buttonState={menuButtonClass}
      />
      <NavigationList 
        isVisible={isMenuVisible} 
        isClicked={!isMenuReady} />
    </StyledHeader>
  );
}