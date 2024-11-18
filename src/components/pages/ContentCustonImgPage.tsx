import * as Pg from './stylePage';

type TypeContentCustonImgPage = {
  pxheight?: string;
  open?: boolean;
  pheight?: string;
  pwidth?: string;
  img?: string;
  onclick?: () => void;
  titlebtn?: string;
};
export const ContentCustonImgPage = ({
  pxheight,
  open,
  pheight,
  pwidth,
  img,
  onclick,
  titlebtn
}: TypeContentCustonImgPage) => {
  return (
    <Pg.ContainerCustonButton pxheight={pxheight} open={open}>
      <Pg.ButtonCustonImg
        pheight={pheight}
        pwidth={pwidth}
        img={img}
        onClick={onclick}
        title={titlebtn}
      />
    </Pg.ContainerCustonButton>
  );
};
