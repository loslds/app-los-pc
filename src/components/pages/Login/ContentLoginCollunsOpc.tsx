import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeContentLoginCollunsOpc = {
  pheight?: string;
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentLoginCollunsOpc = ({
  pheight,
  pwidth,
  children
}: TypeContentLoginCollunsOpc) => {
  return (
    <Lg.ContainerPainelCollunsOpc pheight={pheight} pwidth={pwidth}>
      {children}
    </Lg.ContainerPainelCollunsOpc>
  );
};
