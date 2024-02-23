import React from 'react';
import ButtonModal from './ButtonModal';
import CardButtonsModal from './CardButtonsModal';
import HeaderModalInfoErro from './HeaderModalInfoErro';
import CardModalInfoTitle from './CardModalInfoTitle';
import FooterModalInfoErro from './FooterModalInfoErro';
import xvrm from '../../assets/pngs/xvrm.png';
import MainModalErro from './MainModalErrro';


type PropsModalInfoHlp = {
  id?: string;
  children?: React.ReactNode | JSX.Element;

  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  texto?: string;
  isbtn?: boolean;
  img?: string;
  titbtn?: string;

  onClose?: () => void;
};
const PanelModalInfoErros: React.FC<PropsModalInfoHlp> = ({
  ptop,
  pwidth,
  pheight,
  titulo,
  texto,
  children,
  onClose
}) => {
  return (
    <MainModalErro ptop={ptop} pwidth={pwidth} pheight={pheight}>
      <HeaderModalInfoErro>
        <CardModalInfoTitle titulo={titulo} />
      </HeaderModalInfoErro>
      {children}
      <CardButtonsModal>
        <ButtonModal img={xvrm} onClick={onClose} />
      </CardButtonsModal>
      <FooterModalInfoErro>
        <CardModalInfoTitle titulo={texto} />
      </FooterModalInfoErro>
    </MainModalErro>
  );
};
export default PanelModalInfoErros;
