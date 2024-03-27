import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContainerItensBody = {
  children?: ReactNode;
};
export const ContentItensBody = ({ children }: TypeContainerItensBody) => {
  return <Pg.ContainerBodyItensPage>{children}</Pg.ContainerBodyItensPage>;
};
