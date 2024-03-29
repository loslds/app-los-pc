import { ReactNode } from 'react';
import * as Lg from './stylePage';

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
    <Lg.ContainerCollunsCenterPage isopen={isopen} pheight={pheight} pwidth={pwidth}>
      {children}
    </Lg.ContainerCollunsCenterPage>
  );
};

export default ContentCardCollunsCenterPage;
