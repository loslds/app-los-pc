import { ReactNode } from "react";

import * as Lg from "./style";
          
type PropsContentCardLeftBtnOnOff = {
  children?: ReactNode | JSX.Element;
}
const ContentCardLeftBtnOnOff = ({children}:PropsContentCardLeftBtnOnOff) => {
  return (
    <Lg.ContainerCardDivMainEnd>
      {children}
    </Lg.ContainerCardDivMainEnd>
  );
};

export default ContentCardLeftBtnOnOff;