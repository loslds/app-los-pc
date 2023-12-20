import { ReactNode } from 'react';
import * as Lg from '../styled';

type PropsLoginOpc = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
}
export const ContentLoginOpc = ({pwidth, children}:PropsLoginOpc) => {
  return (
    <Lg.ContainerLoginOpc pwidth={pwidth}>
      <Lg.ContainerLoginFlexOpc>
        { children }
      </Lg.ContainerLoginFlexOpc>
    </Lg.ContainerLoginOpc>
  );
}
