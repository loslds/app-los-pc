import { ReactNode } from 'react';

import * as Pg from './stylePage';

type PropsContentDivMainOffRed = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentDivMainOffRed = ({
  pxheight,
  pxwidth,
  label,
  statedata,
  children
}: PropsContentDivMainOffRed) => {
  return (
    <Pg.ContainerDivMainOffRed pxheight={pxheight} pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Pg.ContainerDivMainOffRed>
  );
};

