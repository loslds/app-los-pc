import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentBoxMainPage = {
  children?: ReactNode | JSX.Element;
};
export const ContentBoxMainPage = ({ children }: TypeContentBoxMainPage) => {
  return <Pg.ContainerBoxMainPage>{children}</Pg.ContainerBoxMainPage>;
};
