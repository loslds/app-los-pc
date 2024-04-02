import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentSidePagePanelBotton = {
  bordas?: boolean;
  open?: boolean;
  pwidth?: string;
  children?: ReactNode;
};
const ContentSidePagePanelBotton = ({
  bordas,
  open,
  pwidth,
  children
}: TypeContentSidePagePanelBotton) => {
  return (
    <Pg.ContainerPanelPage open={open} pwidth={pwidth}>
      <Pg.ContainerPanelPageFlex bordas={bordas} >{children}</Pg.ContainerPanelPageFlex>
    </Pg.ContainerPanelPage>
  );
};

export default ContentSidePagePanelBotton;
