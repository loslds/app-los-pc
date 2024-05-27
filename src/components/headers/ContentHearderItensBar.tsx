import { ReactNode } from 'react';
import * as Ly from '../layouts/styled';

type TypeContentHearderItensBar = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderItensBar = ({ children }: TypeContentHearderItensBar) => {
  return <Ly.ContainerHeaderItensBar>{children}</Ly.ContainerHeaderItensBar>;
};
