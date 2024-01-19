import { ReactNode } from 'react';
import * as Lg from '../styled';

type PropsFormOpc = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  open?: boolean;
}
export const ContentFormOpc = ({open, pwidth, children}:PropsFormOpc) => {
  return (
    <Lg.ContainerLoginOpc open={open} pwidth={pwidth}>
      <Lg.ContainerLoginFlexOpc>
        { children }
      </Lg.ContainerLoginFlexOpc>
    </Lg.ContainerLoginOpc>
  );
}
