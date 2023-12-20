import { ReactNode } from 'react';
import * as Lg from '../styled';

type PropsLoginColluns = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
}
export const ContentLoginColluns = ({pwidth, children}:PropsLoginColluns) => {
  return (
    <Lg.ContainerLoginCollunsOpc pwidth={pwidth}>
      { children }
    </Lg.ContainerLoginCollunsOpc>
  );
}
