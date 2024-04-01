import { ReactNode } from 'react';

import * as Lg from './stylePage.ts';

type TypeContentDivManRed = {
  pxheigth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivMainRed = ({
  pxheigth,
  label,
  statedata,
  children
}: TypeContentDivManRed) => {
  return (
    <Lg.ContainerDivManRed pxheight={pxheigth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Lg.ContainerDivManRed>
  );
};

export default ContentDivMainRed;
