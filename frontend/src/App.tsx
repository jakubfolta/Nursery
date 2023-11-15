import React, { Suspense, useEffect, useState } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate, useLocation } from 'react-router-dom';
import { CONSTANTS, GlobalStyle } from './styles/global';
import { Layout } from './components';
import { MainPage } from './containers/pages/MainPage/MainPage';
import WebpageContextProvider from './store/webpage-context';
import { pageThemes } from './constants/PageThemes';

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
  
  const location = useLocation();

  useEffect(() => {
    updatePageTheme(location.pathname);

    setTimeout(() => {
      setIsFirstVisit(false);
      setShowTransitionPage(false);
    }, pageTransitionDuration);
  }, []);
  
  useEffect(() => {
    if (displayLocation !== location.pathname) {
      setShowTransitionPage(true);

      setTimeout(() => {
        setDisplayLocation(location.pathname);
        updatePageTheme(location.pathname);
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

  const routes = 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes location={displayLocation}>
        <Route path="/" element={<MainPage />}  />
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
        theme={pageTheme}>
        {routes}
      </Layout>
    </WebpageContextProvider>
  );
};

