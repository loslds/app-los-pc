import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentInputMainPage = {
  children?: ReactNode;
};
const ContentInputMainPage = ({ children }: TypeContentInputMainPage) => {
  return <Pg.ContainerInputMainPage>{children}</Pg.ContainerInputMainPage>;
};

export default ContentInputMainPage;
