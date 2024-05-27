import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardBoxMainEnd = {
  pwidth?: string;
  children?: ReactNode;
};
export const ContentCardBoxMainEnd = ({
  pwidth,
  children
}: TypeContentCardBoxMainEnd) => {
  <Pg.ContainerCardDivMainEnd pxwidth={pwidth}>
    {children}
  </Pg.ContainerCardDivMainEnd>;
};
