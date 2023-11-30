
import { ReactNode } from 'react';
import * as Pag from "./styled";

type PropsHeardMain = {
  children?: ReactNode | JSX.Element;
}
export const ContentHearderMain = ({children}:PropsHeardMain) => {
  return (
    <Pag.ContainerHearder>
      { children }
    </Pag.ContainerHearder>
  );
}