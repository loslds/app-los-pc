import { ReactNode } from 'react';
import * as Lg from '../../../styles/styledLogin';

type PropsFormCollunsCenter = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  isopen?: boolean;
};
export const ContentFormCollunsCenter = ({
  isopen,
  pwidth,
  children
}: PropsFormCollunsCenter) => {
  return (
    <Lg.ContainerCollFormCenter isopen={isopen} pwidth={pwidth}>
      {children}
    </Lg.ContainerCollFormCenter>
  );
};
