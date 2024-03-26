import { ReactNode } from 'react';

import * as Lg from './style';

type PropsContentDivMainEnd = {
  children?: ReactNode;
};
const ContentDivMainEnd = ({ children }: PropsContentDivMainEnd) => {
  <Lg.ContainerCardDivMainEnd>{children}</Lg.ContainerCardDivMainEnd>;
};

export default ContentDivMainEnd;
