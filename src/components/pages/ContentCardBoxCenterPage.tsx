import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeContentCardBoxPageCenter = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
 
const ContentCardBoxCenterPage = ({
  pwidth,
  children
}: TypeContentCardBoxPageCenter) => {
  return (
    <Pg.ContainerCardBoxCenterPage pwidth={pwidth}>
      <Pg.ContainerCardBoxCenterPageFlex>
        {children}
      </Pg.ContainerCardBoxCenterPageFlex>
    </Pg.ContainerCardBoxCenterPage>
  );
};

export default ContentCardBoxCenterPage;
