import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentPagePanelBotton = {
  open?: boolean;
  pwidth?: string;
  children?: ReactNode;
};
export const ContentPagePanelBotton = ({
  open,
  pwidth,
  children
}: TypeContentPagePanelBotton) => {
  return (
    <Pg.ContainerPanelPage open={open} pwidth={pwidth}>
      <Pg.ContainerPageFlex>{children}</Pg.ContainerPageFlex>
    </Pg.ContainerPanelPage>
  );
};
