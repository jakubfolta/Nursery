import axios from "axios";
import React, { useEffect, useState } from "react";
import { NavigationItemProps, FetchedPageProps, PagesProps } from "../shared/api.interfaces";
import { Context } from "./interfaces";

export const WebpageContext = React.createContext<Context>({
  pages: {},
  navigationItems: [],
  isFetchingError: false
});

const WebpageContextProvider: React.FC<{children: React.ReactNode}> = props => {
  const [pagesContent, setPagesContent] = useState<PagesProps>({});
  const [navigationItems, setNavigationItems] = useState<NavigationItemProps[]>([]);
  const [isFetchingError, setIsFetchingError] = useState(Boolean);

  useEffect(() => {
    axios.get("/api/website/")
      .then(result => {
        const orderedNavigationItems = result.data.navigation_items.sort((a: NavigationItemProps, b: NavigationItemProps) => a.order - b.order);
        const updatedNavigationItems = orderedNavigationItems.map((item: NavigationItemProps) => {
          return {
            title: item.title,
            order: item.order,
            slug: item.slug
          };
        });

        const updatedPagesContent: PagesProps = {};
        result.data.pages.forEach((page: FetchedPageProps) => {
          const {description, ...rest} = page;
          updatedPagesContent[page.description] = rest;
        });
        
        console.log('DATA', result.data);
        console.log('UPDATED PAGES', updatedPagesContent);
        console.log('NAVIGATION ITEMS', updatedNavigationItems);

        setNavigationItems(updatedNavigationItems);
        setPagesContent(updatedPagesContent);
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
    isFetchingError: isFetchingError
  }

  return (
    <WebpageContext.Provider value={contextValue}>
      {props.children}
    </WebpageContext.Provider>
  );
}

export default WebpageContextProvider;