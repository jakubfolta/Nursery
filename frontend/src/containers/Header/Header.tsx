import React, { useEffect, useState } from "react";
import { Logo, MenuButton, NavigationList, Backdrop } from "../../components";
import { StyledContainer, StyledHeader } from "./styles";
import { CONSTANTS } from "../../styles/global";
import { debounce } from 'lodash-es';
import { useLocation } from "react-router-dom";

const menuAnimationDuration = CONSTANTS.menuAnimationDuration * 1000;
const halfPageTransitionDuration = CONSTANTS.pageTransitionDuration * 1000 / 2;

export const Header: React.FC<{children: React.ReactNode, theme: string, isMainPage: boolean}> = props => {
  const [isMenuVisible, setIsMenuVisible] = useState(false);
  const [isMenuReady, setIsMenuReady] = useState(true);
  const [isMenuDesktop, setIsMenuDesktop] = useState(false);
  const [menuButtonClass, setMenuButtonClass] = useState('');
  const [recentUrl, setRecentUrl] = useState('/');

  const location = useLocation().pathname;
  
  useEffect(() => {
    setRecentUrl(location);
    getScreenWidth();
    window.addEventListener('resize', getScreenWidth);
  }, [])

  useEffect(() => {
    if (location !== recentUrl) setRecentUrl(location);
  }, [location, recentUrl])
  
  useEffect(() => {
    if (!isMenuReady) {
      setTimeout(() => {
        setIsMenuReady(true);
      }, menuAnimationDuration);
    }
  }, [isMenuReady])

  const getScreenWidth = debounce(() => {
    const width = window.screen.width;

    if (width >= 992) setIsMenuDesktop(true);
    else setIsMenuDesktop(false);
  }, 100);

  const toggleNavigation = () => {
    setIsMenuReady(false);
    setIsMenuVisible(prevState => !prevState);
    isMenuVisible ? setMenuButtonClass('closed') : setMenuButtonClass('opened');
  };

  const onClickHandler = () => {  
    if (!isMenuReady) return;

    toggleNavigation();
  };

  const onNavItemClickHandler = (isLogoClick?: boolean) => {
    if (isLogoClick && !isMenuVisible || window.location.pathname === recentUrl) return;

    setTimeout(() => {
      toggleNavigation();
    }, halfPageTransitionDuration);
  };
  
  return (
    <StyledHeader 
      id="header"
      theme={props.theme}
      isMainPage={props.isMainPage}>
      {props.children}
      <StyledContainer>
        <Logo onLogoClick={() => onNavItemClickHandler(true)} />
        {!isMenuDesktop && 
          <MenuButton 
            onButtonClick={onClickHandler}
            buttonState={menuButtonClass} />
        }
        <NavigationList 
          onNavItemClick={onNavItemClickHandler}
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