import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardPagePanelTitle = {
  children?: ReactNode;
};
export const ContentCardPagePanelTitle = ({
  children
}: TypeContentCardPagePanelTitle) => {
  return <Pg.ContainerCardPagePanelTitle>{children}</Pg.ContainerCardPagePanelTitle>;
};
