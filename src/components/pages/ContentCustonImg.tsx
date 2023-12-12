import * as Hm from "./Home/style";

type PropsCustonImg = {
  pxheight?: string;
  pheight?: string;
  pwidth?: string;
  img?:string;
  onclick?: () => void;
  titlebtn?:string;
}
export const ContentCustonImg = ({pxheight, pheight, pwidth, img, onclick, titlebtn }:PropsCustonImg) => {
  return (
    <Hm.ContainerCustonButton pxheight={pxheight}>
      <Hm.ButtonCustonImg pheight={pheight} pwidth={pwidth} img={img} onClick={onclick} title={titlebtn} />
    </Hm.ContainerCustonButton>
  );
};
