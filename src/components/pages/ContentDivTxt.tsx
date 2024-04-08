import { ReactNode } from 'react';

import * as Pg from './stylePage.ts';

type PropsContentDivTxt = {
  children?: ReactNode | JSX.Element;
};
export const ContentDivTxt = ({ children }: PropsContentDivTxt) => {
  return <Pg.ContainerCustonText>{children}</Pg.ContainerCustonText>;
};
