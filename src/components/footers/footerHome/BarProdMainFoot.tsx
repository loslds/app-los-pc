import React from 'react';
import * as F from '../stylesfoot';

type TypeBarProdMainFoot = {
  children?: React.ReactNode | JSX.Element;
};
export const BarProdMainFoot = ({ children }: TypeBarProdMainFoot) => {
  return (
    <F.ContainerProdMain>
      <F.ContainerProdMainFlex>{children}</F.ContainerProdMainFlex>
    </F.ContainerProdMain>
  );
};
