import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardBoxMainPage = {
  children?: ReactNode;
};
const ContentCardBoxMainPage = ({ children }: TypeContentCardBoxMainPage) => {
  return <Pg.ContainerCardBoxMainPage>{children}</Pg.ContainerCardBoxMainPage>;
};

export default ContentCardBoxMainPage;
