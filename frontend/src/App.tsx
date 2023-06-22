import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router';
import { Navigate } from 'react-router-dom';
import { GlobalStyle } from './styles/global';
import { Layout } from './components';
import { MainPage } from './containers/pages/MainPage/MainPage';
import WebpageContextProvider from './store/webpage-context';

const AboutUsComponent = React.lazy(() => import('./containers/pages/AboutUs/AboutUs'));
const ParentsComponent = React.lazy(() => import('./containers/pages/Parents/Parents'));
const OfferComponent = React.lazy(() => import('./containers/pages/Offer/Offer'));
const ContactComponent = React.lazy(() => import('./containers/pages/Contact/Contact'));

export const App: React.FC = () => {

  const routes = 
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
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
      <Layout>
        {routes}
      </Layout>
    </WebpageContextProvider>
  );
};

