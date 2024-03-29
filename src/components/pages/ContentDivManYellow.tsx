//import { ReactNode } from "react";

import * as Lg from './stylePage';

type PropsContentDivManRed = {
  label?: string;
  statedata?: string;
  //  children?: ReactNode | JSX.Element;
};
const ContentDivManYellow = ({ label, statedata }: PropsContentDivManRed) => {
  return (
    <Lg.ContainerDivManYellow>
      <label>{label}</label>
      <h3>{statedata}</h3>
    </Lg.ContainerDivManYellow>
  );
};

export default ContentDivManYellow;
