import { ReactNode } from 'react';
import * as Hm from './styled';


type PropsHeardMain = {
  children?: ReactNode | JSX.Element;
}
export const ContentHearderMain = ({children}:PropsHeardMain) => {
  return (
    <Hm.ContainerHearder>
      { children }
    </Hm.ContainerHearder>
  );
}