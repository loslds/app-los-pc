import React from "react";
import * as Pag from "./styled";

type PropsContentFooterMain = {
  children?: React.ReactNode | JSX.Element;
};
const ContentFooterMain = ({ children }: PropsContentFooterMain) => {
  return (
    <Pag.ContainerFooter>
      {children}    
    </Pag.ContainerFooter>
  );
};
export default ContentFooterMain;
