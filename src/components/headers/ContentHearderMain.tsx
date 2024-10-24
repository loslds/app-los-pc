import { ReactNode } from 'react';
import * as Hed from '../layouts/styled';

type TypeContentHearderMain = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderMain = ({ children }: TypeContentHearderMain) => {
  return <Hed.ContainerHearder>{children}</Hed.ContainerHearder>;
};
