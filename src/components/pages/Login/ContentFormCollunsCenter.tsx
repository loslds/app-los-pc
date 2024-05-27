import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type TypeFormCollunsCenter = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  isopen?: boolean;
};
export const ContentFormCollunsCenter = ({
  isopen,
  pwidth,
  children
}: TypeFormCollunsCenter) => {
  return (
    <Lg.ContainerCollFormCenter isopen={isopen} pwidth={pwidth}>
      {children}
    </Lg.ContainerCollFormCenter>
  );
};
