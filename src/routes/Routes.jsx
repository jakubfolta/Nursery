import React from "react";
import { MainPage } from "../containers/pages/MainPage/MainPage";

const AboutUsComponent = React.lazy(() => import('../containers/pages/AboutUs/AboutUs'));
const GalleryComponent = React.lazy(() => import('../containers/pages/Gallery/Gallery'));
const ParentsComponent = React.lazy(() => import('../containers/pages/Parents/Parents'));
const OfferComponent = React.lazy(() => import('../containers/pages/Offer/Offer'));
const ContactComponent = React.lazy(() => import('../containers/pages/Contact/Contact'));

export const websiteRoutes = [
  { path: '/', component: MainPage, themeLabel: 'mainPageTheme'},
  { path: '/o-nas', component: AboutUsComponent, themeLabel: 'aboutUsPageTheme'},
  { path: '/galeria', component: GalleryComponent, themeLabel: 'galleryPageTheme'},
  { path: '/oferta', component: OfferComponent, themeLabel: 'offerPageTheme'},
  { path: '/kontakt', component: ContactComponent, themeLabel: 'contactPageTheme'},
  { path: '/dla-rodzicow', component: ParentsComponent, themeLabel: 'parentsPageTheme'}
];