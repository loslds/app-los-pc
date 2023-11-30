import React from "react";
import * as F from "./stylesfoot";

type PropsAreaContainer = {
  children?: React.ReactNode | JSX.Element;
};
const BarProdMainFoot = ({ children }: PropsAreaContainer) => {
  return (
    <F.ContainerProdMain>
      <F.ContainerProdMainFlex>{children}</F.ContainerProdMainFlex>
    </F.ContainerProdMain>
  );
};
export default BarProdMainFoot;
