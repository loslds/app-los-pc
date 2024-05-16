import { ReactNode } from 'react';
import * as Pg from './stylePage';

type TypeCardCollunsCenterPage = {
  openccp?: boolean;
  pheight?: string;
  pwidth?: string;
  children?: ReactNode | JSX.Element;
};
const ContentCardCollunsCenterPage = ({
  openccp,
  pheight,
  pwidth,
  children
}: TypeCardCollunsCenterPage) => {
  return (
    <Pg.ContainerCollunsCenterPage openccp={openccp} pheight={pheight} pwidth={pwidth}>
      {children}
    </Pg.ContainerCollunsCenterPage>
  );
};

export default ContentCardCollunsCenterPage;
