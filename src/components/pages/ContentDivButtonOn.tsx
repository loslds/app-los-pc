import * as Pg from './stylePage';

type TypeContentDivButtonOn = {
  pxwdth?: string;
  pxhght?: string;
  img?: string;
  title?: string;
  onClick?: () => void;
};
const ContentDivButtonOn = ({
  pxwdth,
  pxhght,
  img,
  title,
  onClick
}: TypeContentDivButtonOn) => {
  return (
    <Pg.ContainerButtonOn>
      <Pg.ButtonDefaulOnOffImg pxhght={pxhght} pxwdth={pxwdth} img={img} title={title} onClick={onClick} />
    </Pg.ContainerButtonOn>
  );
};

export default ContentDivButtonOn;
