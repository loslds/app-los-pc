import React from 'react';

import * as MD from './styles';

import { ButtonModal } from './ButtonModal';
import { CardButtonsModal } from './CardButtonsModal';
import { CardModal } from './CardModal';

import { TitleModal } from './TitleModal';

type TypePageModalHelp = {
  children?: React.ReactNode | JSX.Element;
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  isbtn?: boolean;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
  // imghlp?: string;
};
export const PageModalHelp: React.FC<TypePageModalHelp> = ({
  ptop,
  pwidth,
  pheight,
  titulo,
  imgbm,
  titbm,
  children,
  onclose
}) => {
  return (
    <MD.Content>
      <MD.ContainerModal ptop={ptop} pwidth={pwidth} pheight={pheight}>
        <CardModal>
          <TitleModal titulo={titulo} />
          <CardButtonsModal>
            <ButtonModal imgbm={imgbm} titbm={titbm} onClick={onclose} />
          </CardButtonsModal>
        </CardModal>
        {children}
      </MD.ContainerModal>
    </MD.Content>
  );
};
