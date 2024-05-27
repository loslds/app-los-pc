import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardPageTitle = {
  children?: ReactNode;
};
export const ContentCardPageTitle = ({
  children
}: TypeContentCardPageTitle) => {
  return <Pg.ContainerCardPageTitle>{children}</Pg.ContainerCardPageTitle>;
};
