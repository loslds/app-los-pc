import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardPageTitle = {
  pheight?: string;
  children?: ReactNode;
};
export const ContentCardPageTitle = ({
  pheight,
  children
}: TypeContentCardPageTitle) => {
  return (
    <Pg.ContainerCardPageTitle pheight={pheight}>{children}</Pg.ContainerCardPageTitle>
  );
};
