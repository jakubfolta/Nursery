import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate, useLocation } from 'react-router-dom';
import { CONSTANTS, GlobalStyle } from './styles/global';
import { Layout } from './components';
import { MainPage } from './containers/pages/MainPage/MainPage';
import WebpageContextProvider from './store/webpage-context';
import { pageThemes } from './constants/PageThemes';
import Scrollbar from 'smooth-scrollbar';
import OverscrollPlugin from 'smooth-scrollbar/plugins/overscroll';
import { debounce } from 'lodash-es';

const options = {
  plugins: {
    overscroll: { effect: 'glow' }
  }
};

Scrollbar.use(OverscrollPlugin);
const scrollbar = Scrollbar.init(document.querySelector('#my-scrollbar') as HTMLElement, options);
window.history.scrollRestoration = 'manual'

const AboutUsComponent = React.lazy(() => import('./containers/pages/AboutUs/AboutUs'));
const ParentsComponent = React.lazy(() => import('./containers/pages/Parents/Parents'));
const OfferComponent = React.lazy(() => import('./containers/pages/Offer/Offer'));
const ContactComponent = React.lazy(() => import('./containers/pages/Contact/Contact'));

const pageTransitionDuration = CONSTANTS.pageTransitionDuration * 1000;

export const App: React.FC = () => {
  const [displayLocation, setDisplayLocation] = useState('/');
  const [isFirstVisit, setIsFirstVisit] = useState(true);
  const [showTransitionPage, setShowTransitionPage] = useState(true);
  const [pageTheme, setPageTheme] = useState('');
  const [isDesktopSize, setIsDesktopSize] = useState(false);
  
  const location = useLocation();

  useEffect(() => {
    getScreenWidth();
    const header = document?.getElementById('header');

    window.addEventListener('resize', getScreenWidth);
    scrollbar.addListener(function(status) {
      var offset = status.offset;
     
      (header as HTMLElement).style.top = offset.y + 'px';
      (header as HTMLElement).style.left = offset.x + 'px';
    });

    updatePageTheme(location.pathname);

    setTimeout(() => {
      setIsFirstVisit(false);
      setShowTransitionPage(false);
    }, pageTransitionDuration);
  }, []);

  useEffect(() => {
    if (isDesktopSize && displayLocation === '/') {
      const underline = document?.getElementById('underline');
      const underlineWidth = getComputedStyle((underline as HTMLElement)).width.replace('px', '');
      
      scrollbar.addListener(function(status) {
        var offset = status.offset;
        
        (underline as HTMLElement).style.width = +underlineWidth + offset.y + 'px';
      }); 
    }
  }, [isDesktopSize, displayLocation])
  
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

  const updatePageTheme = (path: string) => {
    const themeLabel = pageThemes[path as keyof typeof pageThemes];
    const color = CONSTANTS[themeLabel as keyof typeof CONSTANTS] as string;

    setPageTheme(color);
  };

  const scrollToTheTop = () => {
    scrollbar.scrollTo(0, 0);
  };

  const getScreenWidth = debounce(() => {
    const width = window.screen.width;

    setIsDesktopSize(false);

    if (width >= 1200) {
      setIsDesktopSize(true);
    };
  }, 100);

  const routes = 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage isDesktopSize={isDesktopSize} />}  />
        <Route path="/o-nas" element={<AboutUsComponent />}  />
        <Route path="/dla-rodzicow" element={<ParentsComponent />}  />
        <Route path="/oferta" element={<OfferComponent />}  />
        <Route path="/kontakt" element={<ContactComponent />}  />
        <Route path="/*" element={<Navigate to="/" />}  />
      </Routes>
    </Suspense>
  
  return (
    <WebpageContextProvider>
      <GlobalStyle />
      <Layout
        showTransitionPage={showTransitionPage}
        isFirstVisit={isFirstVisit}
        theme={pageTheme}
        displayLocation={displayLocation}>
        {routes}
      </Layout>
    </WebpageContextProvider>
  );
};

