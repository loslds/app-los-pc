
import * as Pg from './stylePage';

type TypeContentSidePageLabelBotton = {
  pxheight?: string;
  isopen?: boolean;
  title?: string;
  img?: string;
  titbtn?: string;
  onclick?: () => void;
};
const ContentSidePageLabelBotton = ({
  pxheight,
  isopen,
  title,
  img,
  titbtn,
  onclick
}: TypeContentSidePageLabelBotton) => {
  return (
    <Pg.ContainerBtnSRigthPage>
      {isopen ? <label>{title}</label> : null}
      <Pg.ContainerCustonBtnPage pxheight={pxheight}>
        <Pg.ButtonDefaulImgPage img={img} title={titbtn} onClick={onclick} />
      </Pg.ContainerCustonBtnPage>
    </Pg.ContainerBtnSRigthPage>
  );
};

export default ContentSidePageLabelBotton;
