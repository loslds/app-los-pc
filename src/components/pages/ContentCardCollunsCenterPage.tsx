import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeCardCollunsCenterPage = {
  pheight?: string;
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  isopen?: boolean;
};
const ContentCardCollunsCenterPage = ({
  pheight,
  isopen,
  pwidth,
  children
}: TypeCardCollunsCenterPage) => {
  return (
    <Pg.ContainerCollunsCenterPage isopen={isopen} pheight={pheight} pwidth={pwidth}>
      {children}
    </Pg.ContainerCollunsCenterPage>
  );
};

export default ContentCardCollunsCenterPage;
