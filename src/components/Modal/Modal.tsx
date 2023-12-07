import React from 'react';

import  MainModal  from './MainModal';

import ImgClose from '../../assets/images/close.png';

import ButtonModal from './ButtonModal';
import CardButtonsModal from './CardButtonsModal';
import CardModal from './CardModal';
import TitleModal  from './TitleModal';

type Props = {
  top?: string;
  width?: string;
  heigth?: string;
  isOpen?: boolean;
  iscard?: boolean;
  istitle?: boolean;
  isbtof?: boolean;
  onClick?: () => void;
  onCloseModal?: React.ReactNode;
  titulo?: string;
  children?: React.ReactNode | JSX.Element;
};

const Modal: React.FC<Props> = ({
  isOpen,
  iscard,
  istitle,
  isbtof,
  titulo,
  onClick,
  children
}) => {
  if (!isOpen) return null;

  //  const handleClose = React.useCallback(e => {
  //    e.stopPropagation();
  //    onClose();
  //  }, []);

  return (
    <MainModal id={'idmodal1'} onClick={onClick}>
      {iscard && istitle && isbtof ? (
        <CardModal>
          <TitleModal titulo={titulo} />
          <CardButtonsModal>
            <ButtonModal
              img={ImgClose}
            />
          </CardButtonsModal>
        </CardModal>
      ) : null}
      {iscard && !istitle && isbtof ? (
        <CardModal>
          <CardButtonsModal>
            <ButtonModal
              img={ImgClose}
            />
          </CardButtonsModal>
        </CardModal>
      ) : null}
      {!iscard && !istitle && isbtof ? (
        <CardButtonsModal>
          <ButtonModal
            img={ImgClose}
          />
        </CardButtonsModal>
      ) : null}
      {children}
    </MainModal>
  );
};

export default Modal;
