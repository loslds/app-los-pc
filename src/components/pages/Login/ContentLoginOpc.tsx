import { ReactNode } from 'react';

import * as Lg from '../../../styles/styledLogin';

type TypeContentLoginOpc = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  open?: boolean;
};
export const ContentLoginOpc = ({
  open,
  pwidth,
  children
}: TypeContentLoginOpc) => {
  return (
    <Lg.ContainerLoginOpc open={open} pwidth={pwidth}>
      <Lg.ContainerLoginFlexOpc>{children}</Lg.ContainerLoginFlexOpc>
    </Lg.ContainerLoginOpc>
  );
};
