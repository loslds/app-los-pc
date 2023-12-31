
import { ReactNode } from 'react';
import * as Hm from '../layouts/styled';

type PropsHearderItens = {
  children?: ReactNode | JSX.Element;
}
export const ContentHearderItens = ({children}:PropsHearderItens) => {
  return (
    <Hm.ContainerHeaderItens>
      { children }
    </Hm.ContainerHeaderItens>
  );
}