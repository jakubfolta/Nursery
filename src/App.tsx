import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { useLocation } from 'react-router-dom';
import { CONSTANTS, GlobalStyle } from './styles/global';
import { Layout } from './components';
import WebpageContextProvider from './store/webpage-context';
import { pageThemes } from './constants/PageThemes';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { debounce } from 'lodash-es';
import { websiteRoutes } from './routes/Routes';

type ScrollStatus = {
  offset: {
    x: number,
    y: number,
  },
  limit: {
    x: number,
    y: number,
  }
};

const scrollbarOptions = {
  plugins: {
    overscroll: {
      effect: 'glow',
      damping: .2,
      glowColor: '#21e004'
    }
  },
  damping: .03,
  thumbMinSize: 100,
};

Scrollbar.use(OverscrollPlugin);
const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar') as HTMLElement, scrollbarOptions);
window.history.scrollRestoration = 'manual';

const pageTransitionDuration = CONSTANTS.pageTransitionDuration * 1000;
const underlineWidth = CONSTANTS.underlineWidth;

export const App: React.FC = () => {
  const [displayLocation, setDisplayLocation] = useState('');
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [showTransitionPage, setShowTransitionPage] = useState(true);
  const [pageTheme, setPageTheme] = useState('');
  const [isDesktopSize, setIsDesktopSize] = useState(false);
  const [isRowImagesDirection, setIsRowImagesDirection] = useState(false);
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [intersectionOffsetTop, setIntersectionOffsetTop] = useState(-1);
  const [isUnderlineListener, setIsUnderlineListener] = useState(false);
  const [isFacilitiesSectionAvailable, setIsFacilitiesSectionAvailable] = useState(false);
  const [imageLastPosition, setImageLastPosition] = useState(-1);
  const location = useLocation();
  
  const maluszkowoImage = document.getElementById('funny-maluszkowo-image');
  const starszakowoImage = document.getElementById('funny-starszakowo-image');

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setIsIntersecting(true);
      setIntersectionOffsetTop(scrollbar.scrollTop);
    } else {
      setIsIntersecting(false);
      const maluszkowoImage = document.getElementById('funny-maluszkowo-image');
      const starszakowoImage = document.getElementById('funny-starszakowo-image');

      if (maluszkowoImage) {
        const topPosition = +getComputedStyle(maluszkowoImage).top.replace('px', '');
        setImageLastPosition(topPosition);
      } else if (starszakowoImage) {
        const topPosition = +getComputedStyle(starszakowoImage!).top.replace('px', '');
        setImageLastPosition(topPosition);
      }
    }
  });  

  useEffect(() => {
    const header = document.getElementById('header');
    const scrollContent = document.querySelector('.scroll-content');

    if (scrollContent) {
      // (scrollContent as HTMLElement).style.position = 'relative';
      // (scrollContent as HTMLElement).style.zIndex = '1';
    }
    updatePageTheme(location.pathname);
    getScreenWidth();
    window.addEventListener('resize', getScreenWidth);

    scrollbar.addListener(function(status) {
      let offset = status.offset;
      
      if (header) {
        (header as HTMLElement).style.top = offset.y + 'px';
      }
    });
    
    setTimeout(() => {
      setIsFirstVisit(false);
      setShowTransitionPage(false);
    }, pageTransitionDuration);
  }, []);
  
  useEffect(() => {
    if (displayLocation !== '/' && isUnderlineListener) {
      scrollbar.removeListener(underlineListener);
      setIsUnderlineListener(false);
    }
    if (displayLocation !== '/' && isFacilitiesSectionAvailable) {
      setIsFacilitiesSectionAvailable(false);
    }
    if (isDesktopSize && displayLocation === '/') {
      scrollbar.addListener(underlineListener);
      setIsUnderlineListener(true);
    }
    if (!isDesktopSize && isUnderlineListener) {
      scrollbar.removeListener(underlineListener);
    }
    if (displayLocation === '/' && isFacilitiesSectionAvailable) {
      const facilitiesImagesContainer = document.getElementById('facilities-images-container');
      facilitiesImagesContainer && observer.observe(facilitiesImagesContainer);
    }
  }, [isDesktopSize, displayLocation, isUnderlineListener, isFacilitiesSectionAvailable]);

  useEffect(() => {
    if (!isIntersecting && intersectionOffsetTop !== -1) {
      scrollbar.removeListener(imagesListener);
    }
    if (isIntersecting) {
      scrollbar.addListener(imagesListener);
    }
  }, [isIntersecting, intersectionOffsetTop]);
  
  useEffect(() => {
    if (displayLocation !== location.pathname) {
      setShowTransitionPage(true);

      setTimeout(() => {
        setDisplayLocation(location.pathname);
        updatePageTheme(location.pathname);
        scrollToTheTop();
      }, 200);
      setTimeout(() => {
        setShowTransitionPage(false);
      }, pageTransitionDuration);
    }
  }, [location, displayLocation]);

  const underlineListener = useCallback((status: ScrollStatus, underline = document.getElementById('underline')) => {
    let offset = status.offset;

    (underline as HTMLElement).style.width = underlineWidth + offset.y + 'px';
  }, []);

  const imagesListener = useCallback((status: ScrollStatus) => {
    const resetedOffset = status.offset.y - intersectionOffsetTop;
    const imageOffsetPosition = -resetedOffset / 12 + imageLastPosition;

    if (maluszkowoImage) {
      (maluszkowoImage as HTMLElement).style.top = imageOffsetPosition + 'px';
    }
    if (starszakowoImage) {
      if (!isRowImagesDirection) {
        maluszkowoImage
          ? (starszakowoImage as HTMLElement).style.top = imageOffsetPosition + 40 + 'px'
          : (starszakowoImage as HTMLElement).style.top = imageOffsetPosition + 'px';
      } else {
        (starszakowoImage as HTMLElement).style.top = imageOffsetPosition + 'px';
      }
    } 
  }, [intersectionOffsetTop]);

  const updatePageTheme = (path: string) => {
    const themeLabel = pageThemes[path as keyof typeof pageThemes];
    const color = getThemeColor(themeLabel);

    setPageTheme(color);
  };
  
  const getThemeColor = (label: string) => {
    return CONSTANTS[label as keyof typeof CONSTANTS] as string;
  };

  const scrollToTheTop = () => {
    scrollbar.scrollTo(0, 0);
  };

  const getScreenWidth = debounce(() => {
    const width = window.screen.width;
    
    setIsDesktopSize(false);
    setIsRowImagesDirection(false);

    if (width >= 992) {
      setIsRowImagesDirection(true);
    };

    if (width >= 1200) {
      setIsDesktopSize(true);
    };
  }, 100);

  const setFacilitiesSectionAvailability = () => {
    setIsFacilitiesSectionAvailable(true);
  }

  const routes = websiteRoutes.map((route, index) => {
    const Component = route.component;

    return (
      <Route 
        key={index} 
        path={route.path} 
        element={<Component 
          theme={getThemeColor(route.themeLabel)} 
          {...(route.path === '/'
            ? {isDesktopSize: isDesktopSize, setFacilitiesSectionAvailability: setFacilitiesSectionAvailability}
            : route.path === '/o-nas' && {scrollbar: scrollbar})} /> }
      />
    );
  });
  
  return (
    <WebpageContextProvider>
      <GlobalStyle />
      <Layout
        showTransitionPage={showTransitionPage}
        isFirstVisit={isFirstVisit}
        theme={pageTheme}
        displayLocation={displayLocation}>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes location={displayLocation}>
            {routes}
          </Routes>
        </Suspense>
      </Layout>
    </WebpageContextProvider>
  );
};

