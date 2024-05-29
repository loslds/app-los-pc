import * as Pg from './stylePage';

type TypeContentSidePageBottonButton = {
  pxheight?: string;
  img?: string;
  titbtn?: string;
  onclick?: () => void;
};
export const ContentSidePageBottonButton = ({
  pxheight,
  img,
  titbtn,
  onclick
}: TypeContentSidePageBottonButton) => {
  return (
    <Pg.ContainerCustonBtnPage pxheight={pxheight}>
      <Pg.ButtonDefaulImgPage img={img} title={titbtn} onClick={onclick} />
    </Pg.ContainerCustonBtnPage>
  );
};
