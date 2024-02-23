import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type PropsLoginCollunsCenter = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  isopen?: boolean;
};
export const ContentLoginCollunsCenter = ({
  isopen,
  pwidth,
  children
}: PropsLoginCollunsCenter) => {
  return (
    <Lg.ContainerLoginCollunsOpcCenter isopen={isopen} pwidth={pwidth}>
      {children}
    </Lg.ContainerLoginCollunsOpcCenter>
  );
};
