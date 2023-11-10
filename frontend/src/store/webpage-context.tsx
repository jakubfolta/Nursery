import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavigationItemProps, FetchedPageProps, PagesProps, NurseryDetailsProps } from "../shared/api.interfaces";
import { Context } from "./interfaces";

export const WebpageContext = React.createContext<Context>({
  pages: {},
  navigationItems: [],
  nurseryDetails: {} as NurseryDetailsProps,
  isFetchingError: false
});

const WebpageContextProvider: React.FC<{children: React.ReactNode}> = props => {
  const [pagesContent, setPagesContent] = useState<PagesProps>({});
  const [navigationItems, setNavigationItems] = useState<NavigationItemProps[]>([]);
  const [nurseryDetails, setNurseryDetails] = useState<NurseryDetailsProps>({} as NurseryDetailsProps);
  const [isFetchingError, setIsFetchingError] = useState(Boolean);

  useEffect(() => {
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
          updatedPagesContent[page.description] = rest;
        });
        
        const nurseryDetails: NurseryDetailsProps = data.nursery_details[0];
        nurseryDetails['description'] = data.pages[0].text_1;
        // console.log('NURSERY DETAILS', nurseryDetails);
        // console.log('DATA', result.data);
        
        // console.log('UPDATED PAGES', updatedPagesContent);
        // console.log('NAVIGATION ITEMS', updatedNavigationItems);
        setNavigationItems(updatedNavigationItems);
        setPagesContent(updatedPagesContent);
        setNurseryDetails(nurseryDetails);
      })
      .catch(error => {
        const errorMessage = error.response.data.error;
        console.error(errorMessage);
        setIsFetchingError(true);
      })
  }, []);

  const contextValue: Context = {
    pages: pagesContent,
    navigationItems: navigationItems,
    nurseryDetails: nurseryDetails,
    isFetchingError: isFetchingError
  };

  return (
    <WebpageContext.Provider value={contextValue}>
      {props.children}
    </WebpageContext.Provider>
  );
}

export default WebpageContextProvider;