import React from 'react';

import { ButtonModal } from '../Modal/ButtonModal';
import { CardButtonsModal } from '../Modal/CardButtonsModal';
import { CardModal } from '../Modal/CardModal';
import { MainModal } from '../Modal/MainModal';
import { TitleModal } from '../Modal/TitleModal';

type TypeModalForm = {
  isOpen?: boolean;
  titulo?: string;
  form?: React.ReactNode;
  imgbm?: string;
  titbm?: string;
  onClose?: () => void;
  children?: JSX.Element;
};

export const ModalForm = ({
  isOpen,
  titulo,
  form,
  imgbm,
  titbm,
  onClose,
  children
}: TypeModalForm) => {
  if (!isOpen) return null;

  return (
    <MainModal id={'idmodal1'}>
      <CardModal id={'idmodal2'}>
        <TitleModal titulo={titulo} />
        <CardButtonsModal>
          <ButtonModal imgbm={imgbm} titbm={titbm} onClick={onClose} />
        </CardButtonsModal>
      </CardModal>
      {form}
      {children}
    </MainModal>
  );
};
