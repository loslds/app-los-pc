import React from 'react';

//import ButtonModal from '../Modal/ButtonModal';
//import CardButtonsModal from '../Modal/CardButtonsModal';
import { ContentMainMsg } from './ContentMainMsg';

//import TitleModal from '../Modal/TitleModal';
//import xvrm from '../../assets/pngs/xvrm.png';

import * as Msg from './styled-msg';
import { ContentButtonLeftMsg } from './ContentButtonLeftMsg';
import { ContentButtonRightMsg } from './ContentButtonLeftMsg copy';
import { ContentTitleMsg } from './ContentTitleMsg';

type PropsMsg = {
    brdpx?: string;
    ptop?: string;
    pwidth?: string;
    nrstracao?: string;
    titulo?: string;
    isbtn?: boolean;
    img?: string;
    titbtn?:string;
    onClose?: () => void;
    children?: React.ReactNode | JSX.Element;
  };// ptop={ptop} pwidth={pwidth}
export const Memssagens= ({brdpx, ptop, pwidth, nrstracao, onClose, children }: PropsMsg ) => {
  return (
    <Msg.ContainerMsg>
      <Msg.ContainerPanelMsg brdpx={brdpx} ptop={ptop} pwidth={pwidth}>
        <ContentMainMsg >
          <ContentButtonLeftMsg>
          <Msg.ButtonCardImg />
          </ContentButtonLeftMsg>
          <ContentTitleMsg nrstracao={nrstracao}/>
          <ContentButtonRightMsg>
            <Msg.ButtonCardImg onClick={onClose}/>
          </ContentButtonRightMsg >
        </ContentMainMsg>    
        {children}
      </Msg.ContainerPanelMsg>
    </Msg.ContainerMsg>
  );
};
