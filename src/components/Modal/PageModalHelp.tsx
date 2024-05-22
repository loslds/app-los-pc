import React from 'react';
import ButtonModal from './ButtonModal';
import CardButtonsModal from './CardButtonsModal';
import CardModal from './CardModal';
import * as MD from './styles';
import TitleModal from './TitleModal';
import xvrm from '../../assets/pngs/xvrm.png';

type TypePageModalHelp = {
    children?: React.ReactNode | JSX.Element;
    ptop?: string;
    pwidth?: string;
    pheight?: string;
    titulo?: string;
    isbtn?: boolean;
    img?: string;
    titbtn?:string;
    onclose?: () => void;
    // imghlp?: string;   
  };
const PageModalHelp: React.FC<TypePageModalHelp> = ({ptop, pwidth, pheight, titulo, children, onclose }) => {
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
export default PageModalHelp;
