import { Props } from "./interfaces";
import { StyledBackdrop } from "./styles";

export const Backdrop: React.FC<Props> = props => (
	<StyledBackdrop
		onClick={props.onBackdropClick}
		isVisible={props.isVisible} 
		isClicked={props.isClicked} />   
)