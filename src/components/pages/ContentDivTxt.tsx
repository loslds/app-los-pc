import { ReactNode } from 'react';

import * as Lg from './style.ts';

type PropsContentDivTxt = {
  children?: ReactNode | JSX.Element;
};
export const ContentDivTxt = ({ children }: PropsContentDivTxt) => {
  return <Lg.ContainerCustonText>{children}</Lg.ContainerCustonText>;
};
