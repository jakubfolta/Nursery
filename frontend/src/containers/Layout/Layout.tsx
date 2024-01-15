import { Header, PageTransition } from "../../components";
import { Footer } from "../Footer/Footer";
import React, { useContext } from "react";
import { MainContainer } from "./styles";
import { Props } from "./interface";
import { WebpageContext } from "../../store/webpage-context";

export const Layout: React.FC<Props> = props => {
  const headerHeight = useContext(WebpageContext).headerHeight;

  return (
    <>
      <Header 
        theme={props.theme}
        isMainPage={props.displayLocation === '/'}>
        {props.showTransitionPage &&
          <PageTransition isFirstVisit={props.isFirstVisit} />}
      </Header>
      <MainContainer 
        headerHeight={headerHeight}>
        {props.children}
      </MainContainer>
      <Footer />
    </>
  );
}