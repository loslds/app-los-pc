
import * as Lg from './styled';

type BntConfirmation = {
  title?: string;
  img?: string;
  titlebtn?: string;
  onClick?: () => void;
  //React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonConfimationOff = ({
  title,
  img,
  titlebtn,
  onClick
}: BntConfirmation) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <Lg.ContainerButtonOffImg>
        <Lg.ButtonOnOffImg img={img} title={titlebtn} onClick={onClick} />
      </Lg.ContainerButtonOffImg>
    </Lg.ContainerBtnLoginSRigth>
  );
};
