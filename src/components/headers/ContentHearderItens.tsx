import { ReactNode } from 'react';
import * as Hed from './styledHeader';

type TypeContentHearderItens = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderItens = ({ children }: TypeContentHearderItens) => {
  return <Hed.ContainerHeaderItens>{children}</Hed.ContainerHeaderItens>;
};
