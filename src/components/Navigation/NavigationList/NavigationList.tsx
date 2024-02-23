import { useContext, useEffect, useState } from "react"
import { NavigationItem } from "../NavigationItem/NavigationItem"
import { Container, Navigation } from "./styles"
import { WebpageContext } from "../../../store/webpage-context";
import { debounce } from 'lodash-es';
import { Props } from "./interfaces"
import { NavigationItemProps } from "../../../shared/api.interfaces";

export const NavigationList: React.FC<Props> = props => {
  const [navHeight, setNavHeight] = useState(-1);
  const [headHeight, setHeadHeight] = useState(-1);
  const [navigationItems, setNavigationItems] = useState<NavigationItemProps[]>([]);
  
  const navItems = useContext(WebpageContext).navigationItems;

  const getElementsHeight = debounce(() => {
    const navHeight = document.getElementById('navigation')!.clientHeight;
    const headHeight = document.getElementById('header')!.clientHeight;

    setNavHeight(navHeight);
    setHeadHeight(headHeight);
  }, 300);
  
  useEffect(() => {
    setNavigationItems(navItems); 
  }, [navItems])

  useEffect(() => {
    getElementsHeight();
    window.addEventListener('resize', getElementsHeight);
  }, [getElementsHeight]);

  const navigation = (
    <Navigation 
      id="navigation"
      isDesktop={props.isDesktop}>
      {navigationItems.map((item, index) => (
        <NavigationItem
          onNavItemClick={props.onNavItemClick}
          key={index}
          title={item.title}
          link={item.order === 1 ? '/' : item.slug} />
      ))}
    </Navigation>
  );
      
  return (
    <Container 
      isClicked={props.isClicked}
      isVisible={props.isVisible}
      isDesktop={props.isDesktop}
      navigationHeight={navHeight}
      headerHeight={headHeight}>
      {navigation}
    </Container>
  );
}
