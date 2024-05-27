import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentInputPage = {
  children?: ReactNode;
};
export const ContentInputPage = ({ children }: TypeContentInputPage) => {
  return <Pg.ContainerInputPage>{children}</Pg.ContainerInputPage>;
};
