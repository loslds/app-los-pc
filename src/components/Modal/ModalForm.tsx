import React from 'react';

import ImgClose from '../../assets/images/close.png';

import  ButtonModal from '../Modal/ButtonModal';

import CardButtonsModal from '../Modal/CardButtonsModal';
import CardModal from '../Modal/CardModal';
import MainModal from '../Modal/MainModal';
import TitleModal from '../Modal/TitleModal';

type Props = {
  isOpen?: boolean;
  onClose?: () => void;
  titulo?: string;
  form?: React.ReactNode;
  children?: JSX.Element;
};

export const ModalForm: React.FC<Props> = ({
  isOpen,
  titulo,
  onClose,
  form,
  children
}) => {
  if (!isOpen) return null;

  return (
    <MainModal id={'idmodal1'}>
      <CardModal id={'idmodal2'}>
        <TitleModal titulo={titulo} />
        <CardButtonsModal>
          <ButtonModal img={ImgClose} onClick={onClose} />
        </CardButtonsModal>
      </CardModal>
      {form}
      {children}
    </MainModal>
  );
};
