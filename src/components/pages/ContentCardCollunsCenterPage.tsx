import { ReactNode } from 'react';
import * as Lg from './stylePage';

type TypeCardCollunsCenterPage = {
  pwidth?: string;
  children?: ReactNode | JSX.Element;
  isopen?: boolean;
};
const ContentCardCollunsCenterPage = ({
  isopen,
  pwidth,
  children
}: TypeCardCollunsCenterPage) => {
  return (
    <Lg.ContainerCollunsCenterPage isopen={isopen} pwidth={pwidth}>
      {children}
    </Lg.ContainerCollunsCenterPage>
  );
};

export default ContentCardCollunsCenterPage;
