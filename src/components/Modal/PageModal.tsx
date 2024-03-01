import React from 'react';
import ButtonModal from '../Modal/ButtonModal';
import CardButtonsModal from '../Modal/CardButtonsModal';
import CardModal from '../Modal/CardModal';
import * as MD from '../Modal/styles';
import TitleModal from '../Modal/TitleModal';
import xvrm from '../../assets/pngs/xvrm.png';

type PageModalType = {
    children?: React.ReactNode | JSX.Element;
    ptop?: string;
    pwidth?: string;
    pheight?: string;
    titulo?: string;
    isbtn?: boolean;
    img?: string;
    titbtn?:string;
    onclose?: () => void;
  };
const PageModal: React.FC<PageModalType> = ({ptop, pwidth, pheight, titulo, children, onclose }) => {
  return (
    <MD.Content>
      <MD.ContainerModal ptop={ptop} pwidth={pwidth} pheight={pheight}>
      <CardModal>
        <TitleModal titulo={titulo} />
        <CardButtonsModal>
          <ButtonModal img={xvrm} onClick={onclose}/>
        </CardButtonsModal>
      </CardModal>
      {children}
      </MD.ContainerModal>
    </MD.Content>
  );
};
export default PageModal;
