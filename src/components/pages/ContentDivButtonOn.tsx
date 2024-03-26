import * as Lg from './style';

type PropsContentButtonOn = {
  img?: string;
  onClick?: () => void;
};
const ContentButtonOn = ({ img, onClick }: PropsContentButtonOn) => {
  return (
    <Lg.ContainerButtonOff>
      <Lg.ButtonDefaulOnOffImg img={img} onClick={onClick} />
    </Lg.ContainerButtonOff>
  );
};

export default ContentButtonOn;
