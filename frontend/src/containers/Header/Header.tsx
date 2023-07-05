import { useEffect, useState } from "react";
import { Logo, MenuButton, NavigationList, Backdrop } from "../../components";
import { StyledContainer, StyledHeader } from "./styles";
import { CONSTANTS } from "../../styles/global";
import { debounce } from 'lodash-es';

const menuAnimationDuration = CONSTANTS.menuAnimationDuration * 1000;

export const Header: React.FC = () => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuReady, setIsMenuReady] = useState(true);
  const [isMenuDesktop, setIsMenuDesktop] = useState(false);
  const [menuButtonClass, setMenuButtonClass] = useState('');
  
  const getScreenWidth = debounce(() => {
    const width = window.screen.width;

    if (width >= 1024) setIsMenuDesktop(true);
    else setIsMenuDesktop(false);
  }, 100);

  useEffect(() => {
    getScreenWidth();
    window.addEventListener('resize', getScreenWidth);
    
    if (!isMenuReady) {
      setTimeout(() => {
        setIsMenuReady(true);
      }, menuAnimationDuration);
    }
  }, [isMenuReady, getScreenWidth])
  
  const onClickHandler = () => {  
    if (!isMenuReady) return;

    setIsMenuReady(false);
    setIsMenuVisible(prevState => !prevState);
    isMenuVisible ? setMenuButtonClass('closed') : setMenuButtonClass('opened');
  };
  
  return (
    <StyledHeader id="header">
      <StyledContainer>
        <Logo />
        {!isMenuDesktop && 
          <MenuButton 
            onButtonClick={onClickHandler}
            buttonState={menuButtonClass} />
        }
        <NavigationList 
          isVisible={isMenuVisible} 
          isClicked={!isMenuReady}
          isDesktop={isMenuDesktop} />
      </StyledContainer>
      {!isMenuDesktop && 
        <Backdrop
          onBackdropClick={onClickHandler} 
          isVisible={isMenuVisible}
          isClicked={!isMenuReady} />
      }
    </StyledHeader>
  );
}