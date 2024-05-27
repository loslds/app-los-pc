import React from 'react';
import * as F from '../stylesfoot';

type TypeBarDivAreaCollunImg = {
  children?: React.ReactNode | JSX.Element;
};
export const BarDivAreaCollunImg = ({ children }: TypeBarDivAreaCollunImg) => {
  return <F.DivAreaCollunItem>{children}</F.DivAreaCollunItem>;
};
