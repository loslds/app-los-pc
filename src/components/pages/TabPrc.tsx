import { ReactNode } from 'react';
import * as Pg from './stylePage';

type PropsPgTabPrc = {
  children?: ReactNode | JSX.Element;
};
export const TabPrc = ({ children }: PropsPgTabPrc) => {
  return (
    <Pg.ContainerBodyItensBar>
      <h2>Tabela de Cores</h2>
      {children}
    </Pg.ContainerBodyItensBar>
  );
};
