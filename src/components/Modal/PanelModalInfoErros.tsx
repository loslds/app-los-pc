import React from 'react';

import { ButtonModal } from './ButtonModal';
import { CardButtonsModal } from './CardButtonsModal';
import { HeaderModalInfoErro } from './HeaderModalInfoErro';
import { CardModalInfoTitle } from './CardModalInfoTitle';
import { FooterModalInfoErro } from './FooterModalInfoErro';
import { MainModalErro } from './MainModalErrro';

type TypePanelModalInfoErros = {
  id?: string;
  children?: React.ReactNode | JSX.Element;
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  texto?: string;
  isbtn?: boolean;
  imgbm?: string;
  titbm?: string;
  onClose?: () => void;
};
export const PanelModalInfoErros = ({
  ptop,
  pwidth,
  pheight,
  titulo,
  texto,
  children,
  imgbm,
  titbm,
  onClose
}: TypePanelModalInfoErros) => {
  return (
    <MainModalErro ptop={ptop} pwidth={pwidth} pheight={pheight}>
      <HeaderModalInfoErro>
        <CardModalInfoTitle titulo={titulo} />
      </HeaderModalInfoErro>
      {children}
      <CardButtonsModal>
        <ButtonModal imgbm={imgbm} titbm={titbm} onClick={onClose} />
      </CardButtonsModal>
      <FooterModalInfoErro>
        <CardModalInfoTitle titulo={texto} />
      </FooterModalInfoErro>
    </MainModalErro>
  );
};
