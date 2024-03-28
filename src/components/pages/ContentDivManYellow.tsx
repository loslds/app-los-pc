//import { ReactNode } from "react";

import * as Lg from './stylePage';

type PropsContentDivManRed = {
  pxwidth?: string;
  label?: string;
  statedata?: string;
  //  children?: ReactNode | JSX.Element;
};
const ContentDivManYellow = ({ pxwidth, label, statedata }: PropsContentDivManRed) => {
  return (
    <Lg.ContainerDivManYellow pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
    </Lg.ContainerDivManYellow>
  );
};

export default ContentDivManYellow;
