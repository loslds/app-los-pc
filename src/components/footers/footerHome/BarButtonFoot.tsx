import React from 'react';
import * as F from '../stylesfoot';

type TypeBarButtonFoot = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
export const BarButtonFoot = ({ children }: TypeBarButtonFoot) => {
  return <F.DivAreaImgButton>{children}</F.DivAreaImgButton>;
};
