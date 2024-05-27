import * as Lg from '../../../styles/styledLogin';

type TypeContentButtonConfimationOnOff = {
  title?: string;
  img?: string;
  titlebtn?: string;
  onClick?: () => void;
  //React.MouseEventHandler<HTMLButtonElement>;
};
export const ContentButtonConfimationOnOff = ({
  title,
  img,
  titlebtn,
  onClick
}: TypeContentButtonConfimationOnOff) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <Lg.ContainerButtonOnImg>
        <Lg.ButtonOnOffImg img={img} title={titlebtn} onClick={onClick} />
      </Lg.ContainerButtonOnImg>
    </Lg.ContainerBtnLoginSRigth>
  );
};
