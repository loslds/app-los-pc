import React from 'react';

import * as MD from './styles';
import DivOpcTitle from './DivOpcTitle';

type PropsDivOpcMain = {
    open?: boolean;
    ptop?: string;
    pleft?: string;
    pheight?: string;
    pwidth?: string;
    children?: React.ReactNode;
    onClick?: () => void;
  };
  const DivOpcoesMain: React.FC<PropsDivOpcMain> = ({ open, ptop, pleft, pheight, pwidth, children, onClick }) => {
    return (
      //<C.ContentDivOpc>
        <MD.ContainerDivOpcModal open={open} ptop={ptop} pleft={pleft} pheight={pheight} pwidth={pwidth}>
          <MD.ContainerDivOpcTexto>
          <DivOpcTitle title='Opções Usuário.' onClose={()=> {}} />
          </MD.ContainerDivOpcTexto>
          {children}
        </MD.ContainerDivOpcModal>
      //</C.ContentDivOpc>
    );
  };

  export default DivOpcoesMain;
