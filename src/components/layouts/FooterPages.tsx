import React from "react";
import * as Pag from "./styled";

type PropsContentFooterPages = {
  children?: React.ReactNode | JSX.Element;
};
export const FooterPages = ({ children }: PropsContentFooterPages) => {
  return (
    <Pag.ContainerFooter>
      {children}    
    </Pag.ContainerFooter>
  );
};

