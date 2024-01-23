import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavigationItemProps, FetchedPageProps, PagesProps, NurseryDetailsProps, UpdatedPageProps } from "../shared/api.interfaces";
import { Context } from "./interfaces";
import { debounce } from "lodash-es";

export const WebpageContext = React.createContext<Context>({
  pages: {},
  navigationItems: [],
  nurseryDetails: {} as NurseryDetailsProps,
  isFetchingError: false,
  headerHeight: -1,
  isNurseriesContentAvailable: false
});

const WebpageContextProvider: React.FC<{children: React.ReactNode}> = props => {
  const [pagesContent, setPagesContent] = useState<PagesProps>({});
  const [navigationItems, setNavigationItems] = useState<NavigationItemProps[]>([]);
  const [nurseryDetails, setNurseryDetails] = useState<NurseryDetailsProps>({} as NurseryDetailsProps);
  const [isFetchingError, setIsFetchingError] = useState(Boolean);
  const [headerHeight, setHeaderHeight] = useState(-1);
  const [isNurseriesContentAvailable, setIsNurseriesContentAvailable] = useState(false);

  useEffect(() => {
    getHeaderHeight();
    window.addEventListener('resize', getHeaderHeight);

    axios.get("/api/website/")
      .then(result => {
        const data = result.data;

        const orderedNavigationItems = data.navigation_items.sort((a: NavigationItemProps, b: NavigationItemProps) => a.order - b.order);
        const updatedNavigationItems = orderedNavigationItems.map((item: NavigationItemProps) => {
          return {
            title: item.title,
            order: item.order,
            slug: item.slug
          };
        });
        
        const updatedPagesContent: PagesProps = {};
        
        data.pages.forEach((page: FetchedPageProps) => {
          const {description, ...rest} = page;
          
          const filteredRest = Object.entries(rest).filter(value => value[1]);
          const updatedRest: unknown = Object.fromEntries(filteredRest);

          updatedPagesContent[page.description] = updatedRest as UpdatedPageProps;
        });
        
        const aboutUsPageContent = updatedPagesContent['About us'];
        const isNurseriesContentAvailable = !!(aboutUsPageContent.heading_3 && aboutUsPageContent.text_3 && aboutUsPageContent.heading_4 && aboutUsPageContent.text_4);

        // console.log('NURSERY DETAILS', isNurseriesContentAvailable);
        const nurseryDetails: NurseryDetailsProps = data.nursery_details[0];
        nurseryDetails['description'] = data.pages[0].text_1;
        // console.log('DATA', result.data);
        
        console.log('UPDATED PAGES', updatedPagesContent);
        // console.log('NAVIGATION ITEMS', updatedNavigationItems);
        setNavigationItems(updatedNavigationItems);
        setPagesContent(updatedPagesContent);
        setIsNurseriesContentAvailable(isNurseriesContentAvailable);
        setNurseryDetails(nurseryDetails);
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
  }, 300);

  const contextValue: Context = {
    pages: pagesContent,
    navigationItems: navigationItems,
    nurseryDetails: nurseryDetails,
    isFetchingError: isFetchingError,
    headerHeight: headerHeight,
    isNurseriesContentAvailable: isNurseriesContentAvailable
  };

  return (
    <WebpageContext.Provider value={contextValue}>
      {props.children}
    </WebpageContext.Provider>
  );
}

export default WebpageContextProvider;