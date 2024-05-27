import React from 'react';
import * as MD from './styles';

type TypeDivdModulosSys = {
  id?: string;
  ispx?: boolean;
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  onclick?: () => void;
  children?: React.ReactNode;
};

export const DivdModulosSys = ({
  id,
  ispx,
  ptop,
  pheight,
  pwidth,
  onclick,
  children
}: TypeDivdModulosSys) => {
  return (
    <MD.ContainerModulosSys
      id={id}
      ispx={ispx}
      ptop={ptop}
      pheight={pheight}
      pwidth={pwidth}
      onClick={onclick}
    >
      {children}
    </MD.ContainerModulosSys>
  );
};
