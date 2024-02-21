import React from "react";
import { MainPage } from "../containers/pages/MainPage/MainPage";
import { AboutUs } from "../containers/pages/AboutUs/AboutUs";
import { Parents } from "../containers/pages/Parents/Parents";

const AboutUsComponent = React.lazy(() => import('../containers/pages/AboutUs/AboutUs'));
// const ParentsComponent = React.lazy(() => import('../containers/pages/Parents/Parents'));
const OfferComponent = React.lazy(() => import('../containers/pages/Offer/Offer'));
const ContactComponent = React.lazy(() => import('../containers/pages/Contact/Contact'));

export const websiteRoutes = [
  { path: '/', component: Parents, themeLabel: 'mainPageTheme'},
  { path: '/o-nas', component: AboutUs, themeLabel: 'aboutUsPageTheme'},
  { path: '/oferta', component: OfferComponent, themeLabel: 'offerPageTheme'},
  { path: '/kontakt', component: ContactComponent, themeLabel: 'contactPageTheme'},
  // { path: '/dla-rodzicow', component: ParentsComponent, themeLabel: 'parentsPageTheme'}
];