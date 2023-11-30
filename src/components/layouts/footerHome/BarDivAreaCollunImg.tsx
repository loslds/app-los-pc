import React from "react";
import * as F from "./stylesfoot";

type PropsAreaContentDivImg = {
  children?: React.ReactNode | JSX.Element;
};
const BarDivAreaCollunImg = ({ children }: PropsAreaContentDivImg) => {
  return <F.DivAreaCollunItem>{children}</F.DivAreaCollunItem>;
};
export default BarDivAreaCollunImg;
