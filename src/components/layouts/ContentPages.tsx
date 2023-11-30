import { ReactNode } from 'react';
import * as Pag from "./styled";

type PropsPages = {
  children?: ReactNode | JSX.Element;
}
export const ContentPages = ({children}:PropsPages) => {
  return (
    <Pag.ContainerPg>
      <Pag.ContainerFlexPg>
        { children }
      </Pag.ContainerFlexPg>
    </Pag.ContainerPg>
  );
}