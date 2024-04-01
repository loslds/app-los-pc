import * as Lg from './stylePage';

type PropsContentButtonOff = {
  img?: string;
  title?: string;
  onClick?: () => void;
};
const ContentDivButtonOff = ({
  img,
  title,
  onClick
}: PropsContentButtonOff) => {
  return (
    <Lg.ContainerButtonOff>
      <Lg.ButtonDefaulOnOffImg img={img} title={title} onClick={onClick} />
    </Lg.ContainerButtonOff>
  );
};

export default ContentDivButtonOff;
