import * as Pg from './stylePage';

type TypeContentCustonImagem = {
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  imgbtn?: string;
  titlebtn?: string;
  onclick?: () => void;
};
export const ContentCustonImagem = ({
  pxheight,
  pheight,
  pwidth,
  imgbtn,
  onclick,
  titlebtn
}: TypeContentCustonImagem) => {
  return (
    <Pg.ContainerCustonImagem pxheight={pxheight}>
      <Pg.ButtonCustonImg
        pheight={pheight}
        pwidth={pwidth}
        img={imgbtn}
        onClick={onclick}
        title={titlebtn}
      />
    </Pg.ContainerCustonImagem>
  );
};
