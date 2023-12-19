import { ReactNode } from 'react';

import * as Fr from '../styled';

type PropsAreaInput = {
  children?: ReactNode;
};
export const ContentInput = ({ children }: PropsAreaInput) => {
  return <Fr.ContainerInput>{children}</Fr.ContainerInput>;
};
