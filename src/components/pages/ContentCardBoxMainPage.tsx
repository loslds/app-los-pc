import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardBoxMainPage = {
  children?: ReactNode;
  id?: string;
  name?: string;
  value?: number;
  titulo?: string;
  onclick?: () => void
};
export const ContentCardBoxMainPage = ({ children }: TypeContentCardBoxMainPage) => {
  return <Pg.ContainerCardBoxMainPage>{children}</Pg.ContainerCardBoxMainPage>;
};

