import * as Pg from "./style";

type PropsCustonImg = {
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  img?:string;
  onclick?: () => void;
  titlebtn?:string;
}
export const ContentCustonImagem = ({pxheight, pheight, pwidth, img, onclick, titlebtn }:PropsCustonImg) => {
  return (
    <Pg.ContainerCustonImagem pxheight={pxheight}>
      <Pg.ButtonCustonImg pheight={pheight} pwidth={pwidth} img={img} onClick={onclick} title={titlebtn} />
    </Pg.ContainerCustonImagem>
  );
};
