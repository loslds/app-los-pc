import { ReactNode } from 'react';

import * as Lg from './stylePage.ts';

type PropsContentDivManRed = {
  pxwidth?: string;
  label?: string;
  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivMainRed = ({
  pxwidth,
  label,
  statedata,
  children
}: PropsContentDivManRed) => {
  return (
    <Lg.ContainerDivManRed pxwidth={pxwidth}>
      <label>{label}</label>
      <h3>{statedata}</h3>
      {children}
    </Lg.ContainerDivManRed>
  );
};

export default ContentDivMainRed;
