import * as Lg from './stylePage';

type PropsContentButtonOff = {
  img?: string;
  onClick?: () => void;
};
const ContentButtonOff = ({ img, onClick }: PropsContentButtonOff) => {
  return (
    <Lg.ContainerButtonOff>
      <Lg.ButtonDefaulOnOffImg img={img} onClick={onClick} />
    </Lg.ContainerButtonOff>
  );
};

export default ContentButtonOff;
