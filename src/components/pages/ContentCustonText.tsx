import { ReactNode } from 'react';

import * as Pg from './stylePage.ts';

type TypeContentCustonText = {
  children?: ReactNode | JSX.Element;
};
export const ContentCustonText = ({ children }: TypeContentCustonText) => {
  return <Pg.ContainerCustonText>{children}</Pg.ContainerCustonText>;
};
