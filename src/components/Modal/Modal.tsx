import { MainModal } from './MainModal';
import { ButtonModal } from './ButtonModal';
import { CardButtonsModal } from './CardButtonsModal';
import { CardModal } from './CardModal';
import { TitleModal } from './TitleModal';

import close from '../../assets/svgs/close.svg';

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

export const Modal: React.FC<Props> = ({
  isOpen,
  iscard,
  istitle,
  isbtof,
  titulo,
  onClick,
  children
}) => {
  if (!isOpen) return null;
  return (
    <MainModal id={'idmodal1'} onClick={onClick}>
      {iscard && istitle && isbtof ? (
        <CardModal>
          <TitleModal titulo={titulo} />
          <CardButtonsModal>
            <ButtonModal imgbm={close} titbm={'Fechar...'} onClick={onClick}/>
          </CardButtonsModal>
        </CardModal>
      ) : null}
      {iscard && !istitle && isbtof ? (
        <CardModal>
          <CardButtonsModal>
            <ButtonModal imgbm={close} titbm={'Fechar...'} onClick={onClick} />
          </CardButtonsModal>
        </CardModal>
      ) : null}
      {!iscard && !istitle && isbtof ? (
        <CardButtonsModal>
          <ButtonModal imgbm={close} titbm={'Fechar...'} onClick={onClick}/>
        </CardButtonsModal>
      ) : null}
      {children}
    </MainModal>
  );
};
