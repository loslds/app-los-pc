import { ReactNode } from 'react';
import * as Hm from './Home/style';

type PropsHearderItensBar = {
  children?: ReactNode | JSX.Element;
}
export const ContentItensBody = ({children}:PropsHearderItensBar) => {
  return (
    <Hm.ContainerBodyItensBar>
      { children }
    </Hm.ContainerBodyItensBar>
  );
}
