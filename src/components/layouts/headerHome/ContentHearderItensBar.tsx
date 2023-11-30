
import { ReactNode } from 'react';
import * as Hm from '../styled';

type PropsHearderItensBar = {
  children?: ReactNode | JSX.Element;
}
export const ContentHearderItensBar = ({children}:PropsHearderItensBar) => {
  return (
    <Hm.ContainerHeaderItensBar>
      { children }
    </Hm.ContainerHeaderItensBar>
  );
}