import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentSidePagePanelBotton = {
  bordas?: string;
  open?: boolean;
  pwidth?: string;
  children?: ReactNode;
};
export const ContentSidePagePanelBotton = ({
  open,
  bordas,
  pwidth,
  children
}: TypeContentSidePagePanelBotton) => {
  return (
    <Pg.ContainerPanelPage open={open} pwidth={pwidth}>
      <Pg.ContainerPanelPageFlex bordas={bordas}>
        {children}
      </Pg.ContainerPanelPageFlex>
    </Pg.ContainerPanelPage>
  );
};
