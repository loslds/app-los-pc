import { ReactNode } from 'react';

import * as Lg from './stylePage';

type PropsContentDivManRed = {
  pxheight?: string;
  pxwidth?: string;
  //  label?: string;
  //  statedata?: string;
  children?: ReactNode | JSX.Element;
};
const ContentDivManYellow = ({
  pxheight,
  pxwidth,
  children
}: PropsContentDivManRed) => {
  return (
    <Lg.ContainerDivManYellow pxheight={pxheight} pxwidth={pxwidth}>
      {children}
    </Lg.ContainerDivManYellow>
  );
};

export default ContentDivManYellow;
