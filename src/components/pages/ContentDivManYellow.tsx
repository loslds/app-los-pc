import { ReactNode } from 'react';

import * as Pg from './stylePage';

type PropsContentDivManRed = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivManYellow = ({
  pxheight,
  pxwidth,
  label,
  statedata,
  children
}: PropsContentDivManRed) => {
  return (
    <Pg.ContainerDivManYellow pxheight={pxheight} pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Pg.ContainerDivManYellow>
  );
};

export default ContentDivManYellow;
