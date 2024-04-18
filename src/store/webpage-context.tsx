import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavigationItemProps, FetchedPageProps, PagesProps, NurseryDetailsProps, UpdatedPageProps, SchedulesProps, FetchedScheduleProps, UpdatedScheduleProps, GalleryProps } from "../shared/api.interfaces";
import { Context } from "./interfaces";
import { debounce } from "lodash-es";

axios.defaults.xsrfCookieName = 'csrftoken'
axios.defaults.xsrfHeaderName = 'X-CSRFToken'

export const WebpageContext = React.createContext<Context>({
  pages: {},
  navigationItems: [],
  nurseryDetails: {} as NurseryDetailsProps,
  isFetchingError: false,
  headerHeight: -1,
  isNurseriesContentAvailable: false,
  schedules: {} as SchedulesProps,
  gallery: {} as GalleryProps
});

const WebpageContextProvider: React.FC<{children: React.ReactNode}> = props => {
  const [pagesContent, setPagesContent] = useState<PagesProps>({});
  const [navigationItems, setNavigationItems] = useState<NavigationItemProps[]>([]);
  const [nurseryDetails, setNurseryDetails] = useState<NurseryDetailsProps>({} as NurseryDetailsProps);
  const [isFetchingError, setIsFetchingError] = useState(Boolean);
  const [headerHeight, setHeaderHeight] = useState(-1);
  const [isNurseriesContentAvailable, setIsNurseriesContentAvailable] = useState(false);
  const [schedules, setSchedules] = useState<SchedulesProps>({} as SchedulesProps);
  const [gallery, setGallery] = useState<GalleryProps>({} as GalleryProps);

  useEffect(() => {
    window.addEventListener('resize', getHeaderHeight);

    axios.get("/api/website/")
      .then(result => {
        console.log('RESPONSE', result);
        const data = result.data;

        // NAVIGATION ITEMS
        const orderedNavigationItems = data.navigation_items.sort((a: NavigationItemProps, b: NavigationItemProps) => a.order - b.order);
        const updatedNavigationItems = orderedNavigationItems.map((item: NavigationItemProps) => {
          return {
            title: item.title,
            order: item.order,
            slug: item.slug
          };
        });
        // PAGES CONTENT
        const updatedPagesContent: PagesProps = {};
        
        data.pages.forEach((page: FetchedPageProps) => {
          const {description, ...rest} = page;
          
          const filteredRest = Object.entries(rest).filter(value => value[1]);
          const updatedRest: unknown = Object.fromEntries(filteredRest);

          updatedPagesContent[description] = updatedRest as UpdatedPageProps;
        });
        
        // NURSERIES CONTENT AVAILABILITY
        const aboutUsPageContent = updatedPagesContent['About us'];
        const isNurseriesContentAvailable = !!(aboutUsPageContent.heading_3 && aboutUsPageContent.text_3 && aboutUsPageContent.heading_4 && aboutUsPageContent.text_4);

        // NURSERY DETAILS
        const nurseryDetails: NurseryDetailsProps = data.nursery_details[0];
        nurseryDetails['description'] = updatedPagesContent['Main page'].text_1;

        // NURSERIES SCHEDULES
        const updatedSchedulesContent: SchedulesProps = {};

        data.schedules.forEach((schedule: FetchedScheduleProps) => {
          const {facility, ...rest} = schedule;

          const filteredRest = Object.entries(rest).filter(value => value[1]);
          const updatedRest: unknown = Object.fromEntries(filteredRest);

          updatedSchedulesContent[facility] = updatedRest as UpdatedScheduleProps;
        })

        // NURSERIES GALLERY
        const updatedGallery: GalleryProps = {};
        const maluszkowoImagesUrls: string[] = [];
        const starszakowoImagesUrls: string[] = [];

        data.facility_photos.forEach((image: {url: string, facility: string}) => {
          image.facility === 'Maluszkowo' && maluszkowoImagesUrls.push(image.url);
          image.facility === 'Starszakowo' && starszakowoImagesUrls.push(image.url);
        })

        updatedGallery['Maluszkowo'] = maluszkowoImagesUrls.reverse();
        updatedGallery['Starszakowo'] = starszakowoImagesUrls.reverse();

        console.log('UPDATED GALLERIES', updatedGallery);
        console.log('UPDATED PAGES', updatedPagesContent);
        console.log('UPDATED SCHEDULES', updatedSchedulesContent);
        
        setNavigationItems(updatedNavigationItems);
        setPagesContent(updatedPagesContent);
        setIsNurseriesContentAvailable(isNurseriesContentAvailable);
        setNurseryDetails(nurseryDetails);
        setSchedules(updatedSchedulesContent);
        setGallery(updatedGallery);
        getHeaderHeight();
      })
      .catch(error => {
        const errorMessage = error.response.data.error;
        console.error(errorMessage);
        setIsFetchingError(true);
      })
  }, []);

  const getHeaderHeight = debounce(() => {
    const headHeight = document.getElementById('header')!.clientHeight;
    setHeaderHeight(headHeight);
  }, 200);

  const contextValue: Context = {
    pages: pagesContent,
    navigationItems: navigationItems,
    nurseryDetails: nurseryDetails,
    isFetchingError: isFetchingError,
    headerHeight: headerHeight,
    isNurseriesContentAvailable: isNurseriesContentAvailable,
    schedules: schedules,
    gallery: gallery
  };

  return (
    <WebpageContext.Provider value={contextValue}>
      {props.children}
    </WebpageContext.Provider>
  );
}

export default WebpageContextProvider;