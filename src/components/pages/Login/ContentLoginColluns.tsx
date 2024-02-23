import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type PropsLoginColluns = {
  pheight?: string;
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
export const ContentLoginColluns = ({
  pheight,
  pwidth,
  children
}: PropsLoginColluns) => {
  return (
    <Lg.ContainerLoginCollunsOpc pheight={pheight} pwidth={pwidth}>
      {children}
    </Lg.ContainerLoginCollunsOpc>
  );
};
