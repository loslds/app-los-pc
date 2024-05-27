import React from 'react';

import * as MD from '../Modal/styles';

import { ButtonModal } from '../Modal/ButtonModal';
import { CardButtonsModal } from '../Modal/CardButtonsModal';
import { CardModal } from '../Modal/CardModal';
import { TitleModal } from '../Modal/TitleModal';

type TypePageModal = {
  ptop?: string;
  pwidth?: string;
  pheight?: string;
  titulo?: string;
  isbtn?: boolean;
  imgbm?: string;
  titbm?: string;
  onclose?: () => void;
  children?: React.ReactNode | JSX.Element;
};
export const PageModal = ({
  ptop,
  pwidth,
  pheight,
  titulo,
  imgbm,
  titbm,
  children,
  onclose
}: TypePageModal) => {
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
