import { ReactNode } from 'react';

import * as Lg from '../../../styles/styledLogin';

type PropsAreaInput = {
  children?: ReactNode;
};
export const ContentInput = ({ children }: PropsAreaInput) => {
  return <Lg.ContainerInput>{children}</Lg.ContainerInput>;
};
