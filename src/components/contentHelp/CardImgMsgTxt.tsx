import * as MD from '../Modal/styles';

import { CardModalTexto } from '../Modal/CardModalTexto';

type TypeCardImgMsg = {
  img?: string;
  titleaga?: string;
  stitlelabel?: string;
  children?: React.ReactNode | JSX.Element;
};
export const CardImgMsgTxt = ({ img, titleaga, stitlelabel, children }: TypeCardImgMsg) => {
  return (
    <CardModalTexto>
      <MD.ContainerHeardModalMain>
        <MD.ContainerModalImg pminheight={'70px'} pwidth={'70px'} img={img} />
      </MD.ContainerHeardModalMain>
      <h2>{titleaga}</h2>
      <label>{stitlelabel}</label>
      {children}
      <br />
    </CardModalTexto>
  );
};
