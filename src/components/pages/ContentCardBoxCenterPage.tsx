import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardBoxPageCenter = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  open?: boolean;
};
const ContentCardBoxCenterPage = ({
  open,
  pwidth,
  children
}: TypeContentCardBoxPageCenter) => {
  return (
    <Pg.ContainerCardBoxCenterPage open={open} pwidth={pwidth}>
      <Pg.ContainerCardBoxCenterPageFlex>
        {children}
      </Pg.ContainerCardBoxCenterPageFlex>
    </Pg.ContainerCardBoxCenterPage>
  );
};

export default ContentCardBoxCenterPage;
