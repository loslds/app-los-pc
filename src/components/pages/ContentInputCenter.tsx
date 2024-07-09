import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentInputCenter = {
  open?: boolean;
  children?: ReactNode | JSX.Element;
};
export const ContentInputCenter = ({ open, children }: TypeContentInputCenter) => {
  return <Pg.ContainerInputCenter open={open}>{children}</Pg.ContainerInputCenter>;
};
