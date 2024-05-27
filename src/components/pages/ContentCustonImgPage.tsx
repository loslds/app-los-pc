import * as Pg from './stylePage';

type TypeContainerCustonButton = {
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  img?: string;
  onclick?: () => void;
  titlebtn?: string;
};
export const ContentCustonImgPage = ({
  pxheight,
  pheight,
  pwidth,
  img,
  onclick,
  titlebtn
}: TypeContainerCustonButton) => {
  return (
    <Pg.ContainerCustonButton pxheight={pxheight}>
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