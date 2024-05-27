import { ReactNode } from 'react';

import * as Pg from './stylePage.ts';

type TypeContentDivManRed = {
  pxheigth?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentDivMainRed = ({
  pxheigth,
  pxwidth,
  label,
  statedata,
  children
}: TypeContentDivManRed) => {
  return (
    <Pg.ContainerDivManRed pxheight={pxheigth} pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Pg.ContainerDivManRed>
  );
};
