import { ReactNode } from 'react';

import * as Lg from './stylePage';

type PropsContentDivMainEnd = {
  children?: ReactNode;
};
const ContentDivMainEnd = ({ children }: PropsContentDivMainEnd) => {
  <Lg.ContainerCardDivMainEnd>{children}</Lg.ContainerCardDivMainEnd>;
};

export default ContentDivMainEnd;
