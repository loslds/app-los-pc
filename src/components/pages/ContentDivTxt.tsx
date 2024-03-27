import { ReactNode } from 'react';

import * as Lg from './stylePage.ts';

type PropsContentDivTxt = {
  children?: ReactNode | JSX.Element;
};
export const ContentDivTxt = ({ children }: PropsContentDivTxt) => {
  return <Lg.ContainerCustonText>{children}</Lg.ContainerCustonText>;
};
