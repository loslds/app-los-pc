import React from 'react';
import * as F from './stylesfoot';

type PropsDivImgFoot = {
  img?: string;
  title?: string;
  onClick?: () => void;
};
const ButtonCollunImgFoot: React.FC<PropsDivImgFoot> = ({ img, title, onClick }) => {
  return (
    <F.DivAreaImgButton>
      <F.ButtonImgFoot img={img} title={title} onClick={onClick}/>
    </F.DivAreaImgButton>
  );
};
export default ButtonCollunImgFoot;
