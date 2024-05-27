import * as Pg from './stylePage';

type TypeContentButtonOff = {
  //pxwdth?: string;
  pxhght?: string;
  img?: string;
  title?: string;
  onClick?: () => void;
};
export const ContentDivButtonOff = ({pxhght, img, title, onClick }: TypeContentButtonOff) => {
  return (
    <Pg.ContainerButtonOff>
      <Pg.ButtonDefaulOnOffImg pxhght={pxhght} img={img} title={title} onClick={onClick} />
    </Pg.ContainerButtonOff>
  );
};

