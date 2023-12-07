import React from 'react';
import * as MD from './styles';

type Props = {
  id?: string;
  ispx?: boolean;
  ptop?: string;
  pheight?: string;
  pwidth?: string;
  onClose?: () => void;
  children?: React.ReactNode;
};

const DivdModulosSys: React.FC<Props> = ({ id, ispx, ptop, pheight, pwidth, onClose, children }) => {
  return (
    <MD.ContainerModulosSys id={id} ispx={ispx} ptop={ptop} pheight={pheight} pwidth={pwidth} >
      {children}
    </MD.ContainerModulosSys>
  );
};

export default DivdModulosSys;
