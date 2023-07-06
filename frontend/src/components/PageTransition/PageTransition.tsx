import transitionLogo from "../../assets/images/logo-maluszkowo-transition.png";
import { TransitionPage } from "./styles";

export const PageTransition: React.FC<{isFirstVisit: boolean}> = props => (
  
  <TransitionPage isFirstVisit={props.isFirstVisit}>
    <img src={transitionLogo} alt="Maluszkowo logo" />
  </TransitionPage>
)
 
    

