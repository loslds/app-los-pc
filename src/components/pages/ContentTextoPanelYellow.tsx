import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentTextoBgPanelYellow = {
  isbgcolor?: boolean;
  children?: ReactNode | JSX.Element;
};
export const ContentTextoBgPanelYellow = ({
  isbgcolor,
  children
}: TypeContentTextoBgPanelYellow) => {
  return (
    <Pg.ContainerTextoBgPanelYellow isbgcolor={isbgcolor}>
      {children}
    </Pg.ContainerTextoBgPanelYellow>
  );
};
