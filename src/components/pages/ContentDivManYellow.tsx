
import { ReactNode } from "react";

import * as Lg from "./style";
          
type PropsContentDivManRed = {
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
}
const ContentDivManYellow = ({ label, statedata, children}:PropsContentDivManRed) => {
  return (
    <Lg.ContainerDivManYellow>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Lg.ContainerDivManYellow>
  );
};

export default ContentDivManYellow;