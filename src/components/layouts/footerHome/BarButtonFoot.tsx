import React from 'react';
import * as F from './stylesfoot';

type PropsDivButtonFoot = {
  pwidth?: string;
  children?: React.ReactNode | JSX.Element;
};
const BarButtonFoot = ({children}: PropsDivButtonFoot) => {
  return (
    <F.DivAreaImgButton>
      {children}
    </F.DivAreaImgButton>
  );
};
export default BarButtonFoot;
