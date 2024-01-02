import React, { Suspense, useCallback, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate, useLocation } from 'react-router-dom';
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
    overscroll: { effect: 'glow' }
  }
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
  const location = useLocation();
  
  const maluszkowoImage = document.getElementById('funny-maluszkowo-image');
  const starszakowoImage = document.getElementById('funny-starszakowo-image');

  const observer = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      setIsIntersecting(true);
      setIntersectionOffsetTop(scrollbar.scrollTop);
    } else {
      setIsIntersecting(false);
    }
  });

  useEffect(() => {
    const header = document.getElementById('header');
    const scrollContent = document.querySelector('.scroll-content');

    if (scrollContent) {
      (scrollContent as HTMLElement).style.position = 'relative';
      (scrollContent as HTMLElement).style.zIndex = '1';
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
    if (isDesktopSize && displayLocation === '/') {
      scrollbar.addListener(underlineListener);
      setIsUnderlineListener(true);
    }
    if (displayLocation === '/') {
      const facilitiesImagesContainer = document.getElementById('facilities-images-container');
      facilitiesImagesContainer && observer.observe(facilitiesImagesContainer);
    }
  }, [isDesktopSize, displayLocation]);

  useEffect(() => {
    if (!isIntersecting && intersectionOffsetTop !== -1) {
      scrollbar.removeListener(imagesListener);
    }
    if (isIntersecting) {
      scrollbar.addListener(imagesListener);
    }
  }, [isIntersecting]);
  
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
    const imageOffsetPosition = -resetedOffset / 8 - 20 + 'px';
    
    (maluszkowoImage as HTMLElement).style.top = imageOffsetPosition;
    if (!isRowImagesDirection) {
      (starszakowoImage as HTMLElement).style.top = -resetedOffset / 8 + 'px';
    } else {
      (starszakowoImage as HTMLElement).style.top = imageOffsetPosition;
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

    setIsRowImagesDirection(false);
    setIsDesktopSize(false);

    if (width >= 992) {
      setIsRowImagesDirection(true);
    };

    if (width >= 1200) {
      setIsDesktopSize(true);
    };
  }, 100);

  const routes = websiteRoutes.map((route, index) => {
    const Component = route.component;

    return (
      <Route key={index} path={route.path} element={<Component theme={getThemeColor(route.themeLabel)} {...(route.path === '/' && {isDesktopSize: isDesktopSize})} /> } />
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
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </Suspense>
      </Layout>
    </WebpageContextProvider>
  );
};

