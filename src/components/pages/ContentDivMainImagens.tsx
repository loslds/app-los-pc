import { ReactNode } from 'react';

import * as Pg from './stylePage';

type TypeContentDivIcons = {
  children?: ReactNode | JSX.Element;
};
const ContentDivMainImagens = ({ children }: TypeContentDivIcons) => {
  return <Pg.ContainerDivMainImagens>{children}</Pg.ContainerDivMainImagens>;
};

export default ContentDivMainImagens;
