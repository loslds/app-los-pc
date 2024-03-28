
import * as Pg from './stylePage';

type TypeContentSidePageLabelBotton = {
  pxheight?: string;
  istitl?: boolean;
  title?: string;
  img?: string;
  titbtn?: string;
  onclick?: () => void;
};
const ContentSidePageLabelBotton = ({
  pxheight,
  istitl,
  title,
  img,
  titbtn,
  onclick
}: TypeContentSidePageLabelBotton) => {
  return (
    <Pg.ContainerBtnSRigthPage>
      {istitl ? <label>{title}</label> : null}
      <Pg.ContainerCustonBtnPage pxheight={pxheight}>
        <Pg.ButtonDefaulImgPage img={img} title={titbtn} onClick={onclick} />
      </Pg.ContainerCustonBtnPage>
    </Pg.ContainerBtnSRigthPage>
  );
};

export default ContentSidePageLabelBotton;
