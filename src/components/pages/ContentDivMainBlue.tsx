import { ReactNode } from 'react';

import * as Pg from './stylePage.ts';

type TypeContentDivManBlue = {
  pxheigth?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentDivMainBlue = ({
  pxheigth,
  pxwidth,
  label,
  statedata,
  children
}: TypeContentDivManBlue) => {
  return (
    <Pg.ContainerDivManBlue pxheight={pxheigth} pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Pg.ContainerDivManBlue>
  );
};
