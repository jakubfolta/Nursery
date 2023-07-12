import { debounce } from "lodash-es";
import { Header, PageTransition } from "../../components";
import { Footer } from "../Footer/Footer";
import { useEffect, useState } from "react";
import { MainContainer } from "./styles";
import { Props } from "./interface";

export const Layout: React.FC<Props> = props => {
  const [headerHeight, setHeaderHeight] = useState(-1);

  useEffect(() => {
    getHeaderHeight();
    window.addEventListener('resize', getHeaderHeight);
  }, [])

  const getHeaderHeight = debounce(() => {
    const headHeight = document.getElementById('header')!.clientHeight;
    setHeaderHeight(headHeight);
  }, 300);

  return (
    <>
      <Header>
        {props.showTransitionPage &&
          <PageTransition isFirstVisit={props.isFirstVisit} />}
      </Header>
      <MainContainer headerHeight={headerHeight}>
        {props.children}
      </MainContainer>
      <Footer />
    </>
  );
}