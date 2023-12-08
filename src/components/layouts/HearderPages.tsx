
import { ReactNode } from 'react';
import * as Pag from "./styled";

type PropsHeardPages = {
  children?: ReactNode | JSX.Element;
}
export const HearderPages = ({children}:PropsHeardPages) => {
  return (
    <Pag.ContainerHearder>
      { children }
    </Pag.ContainerHearder>
  );
}