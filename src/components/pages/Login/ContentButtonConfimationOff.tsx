import * as Lg from '../../../styles/styledLogin';

type TypeContentButtonConfimationOff = {
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
}: TypeContentButtonConfimationOff) => {
  return (
    <Lg.ContainerBtnLoginSRigth>
      <label>{title}</label>
      <Lg.ContainerButtonOffImg>
        <Lg.ButtonOnOffImg img={img} title={titlebtn} onClick={onClick} />
      </Lg.ContainerButtonOffImg>
    </Lg.ContainerBtnLoginSRigth>
  );
};
