import { ReactNode } from 'react';
import * as Ly from '../layouts/styled';

type TypeContentHearderItens = {
  children?: ReactNode | JSX.Element;
};
export const ContentHearderItens = ({ children }: TypeContentHearderItens) => {
  return <Ly.ContainerHeaderItens>{children}</Ly.ContainerHeaderItens>;
};
