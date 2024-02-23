import * as Lg from '../../../styles/styledLogin';

type BntConfirmation = {
  title?: string;
  img?: string;
  titlebtn?: string;
  onClick?: () => void;
  //React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonConfimationOn = ({
  title,
  img,
  titlebtn,
  onClick
}: BntConfirmation) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <Lg.ContainerButtonOnImg>
        <Lg.ButtonOnOffImg img={img} title={titlebtn} onClick={onClick} />
      </Lg.ContainerButtonOnImg>
    </Lg.ContainerBtnLoginSRigth>
  );
};
