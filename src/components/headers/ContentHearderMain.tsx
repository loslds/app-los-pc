import { ReactNode } from 'react';
import * as Ly from '../layouts/styled';

type TypeContentHearderMain = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderMain = ({ children }: TypeContentHearderMain) => {
  return <Ly.ContainerHearder>{children}</Ly.ContainerHearder>;
};
