
import { ReactNode } from "react";

import * as Pg from "./style";
          
type PropsContentImg = {
  children?: ReactNode | JSX.Element;
}
export const ContentImagem = ({children}:PropsContentImg) => {
  return (
    <Pg.ContainerImagem>
      {children}
    </Pg.ContainerImagem>
  );
};
