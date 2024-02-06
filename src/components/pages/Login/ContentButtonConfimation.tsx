import * as S from '../../sidebar/stylesSidebar';
import * as Lg from './styled';

type BntConfirmation = {
  title?: string;
  img?: string;
  titlebtn?: string;
  onClick?: () => void;
  //React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonConfimation = ({
  title,
  img,
  titlebtn,
  onClick
}: BntConfirmation) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <S.ContainerSideOnOffButton>
        <S.ButtonOnOffImg img={img} title={titlebtn} onClick={onClick} />
      </S.ContainerSideOnOffButton>
    </Lg.ContainerBtnLoginSRigth>
  );
};
