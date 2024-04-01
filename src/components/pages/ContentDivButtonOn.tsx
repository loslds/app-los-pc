import * as Lg from './stylePage';

type TypeContentDivButtonOn = {
  img?: string;
  title?: string;
  onClick?: () => void;
};
const ContentDivButtonOn = ({
  img,
  title,
  onClick
}: TypeContentDivButtonOn) => {
  return (
    <Lg.ContainerButtonOn>
      <Lg.ButtonDefaulOnOffImg img={img} title={title} onClick={onClick} />
    </Lg.ContainerButtonOn>
  );
};

export default ContentDivButtonOn;
