import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentSidePagePanelBotton = {
  open?: boolean;
  pwidth?: string;
  children?: ReactNode;
};
const ContentSidePagePanelBotton = ({
  open,
  pwidth,
  children
}: TypeContentSidePagePanelBotton) => {
  return (
    <Pg.ContainerPanelPage open={open} pwidth={pwidth}>
      <Pg.ContainerPanelPageFlex>{children}</Pg.ContainerPanelPageFlex>
    </Pg.ContainerPanelPage>
  );
};

export default ContentSidePagePanelBotton;
