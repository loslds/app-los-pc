import React from 'react';

import * as MD from './styles';

import { DivOpcTitle } from './DivOpcTitle';

type TypeDivOpcMain = {
  open?: boolean;
  ptop?: string;
  pleft?: string;
  pheight?: string;
  pwidth?: string;
  titulo?: string;
  imgbm?: string;
  titbm?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children?: React.ReactNode;
};
export const DivOpcoesMain = ({
  open,
  ptop,
  pleft,
  pheight,
  pwidth,
  titulo,
  imgbm,
  titbm,
  onClick,
  children
}: TypeDivOpcMain) => {
  return (
    <MD.ContainerDivOpcModal
      open={open}
      ptop={ptop}
      pleft={pleft}
      pheight={pheight}
      pwidth={pwidth}
    >
      <MD.ContainerDivOpcTexto>
        <DivOpcTitle titulo={titulo} imgbm={imgbm} titbm={titbm} onClick={onClick} />
      </MD.ContainerDivOpcTexto>
      {children}
    </MD.ContainerDivOpcModal>
  );
};
