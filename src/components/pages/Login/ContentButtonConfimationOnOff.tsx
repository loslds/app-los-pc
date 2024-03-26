import * as Lg from '../../../styles/styledLogin';

type BntConfirmationOnOff = {
  title?: string;
  img?: string;
  titlebtn?: string;
  onClick?: () => void;
  //React.MouseEventHandler<HTMLButtonElement>;
};
const ContentButtonConfimationOnOff = ({
  title,
  img,
  titlebtn,
  onClick
}: BntConfirmationOnOff) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <Lg.ContainerButtonOnImg>
        <Lg.ButtonOnOffImg img={img} title={titlebtn} onClick={onClick} />
      </Lg.ContainerButtonOnImg>
    </Lg.ContainerBtnLoginSRigth>
  );
};

export default ContentButtonConfimationOnOff;