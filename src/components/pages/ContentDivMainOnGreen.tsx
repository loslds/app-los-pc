import { ReactNode } from 'react';

import * as Pg from './stylePage';

type PropsContentDivMainOnGreen = {
  pxheight?: string;
  pxwidth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivMainOnGreen = ({
  pxheight,
  pxwidth,
  label,
  statedata,
  children
}: PropsContentDivMainOnGreen) => {
  return (
    <Pg.ContainerDivMainOnGreen pxheight={pxheight} pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Pg.ContainerDivMainOnGreen>
  );
};

export default ContentDivMainOnGreen;
