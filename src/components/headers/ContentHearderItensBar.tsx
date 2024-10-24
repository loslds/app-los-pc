import { ReactNode } from 'react';
import * as Hed from './styledHeader';

type TypeContentHearderItensBar = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderItensBar = ({ children }: TypeContentHearderItensBar) => {
  return <Hed.ContainerHeaderItensBar>{children}</Hed.ContainerHeaderItensBar>;
};
