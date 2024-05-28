import React from 'react';


import * as MD from './styles';

type TypeContentModalButtonImgCard = {
  ptop?: string;
  pminheight?: string;
  pwidth?: string;
  onclick?: () => void;
  children?: React.ReactNode | JSX.Element;
};

export const ContentModalButtonImgCard = ({
  ptop,
  pminheight,
  pwidth,
  onclick,
  children
}: TypeContentModalButtonImgCard) => {
  return (
    <MD.ContainerModalButtonImgCard
      ptop={ptop}
      pminheight={pminheight}
      pwidth={pwidth}
      onClick={onclick}
    >
      {children}
    </MD.ContainerModalButtonImgCard>
  );
};

//
// ishlp?: boolean;
// img?: string;
// pxheight?: string;
// pxwidth?: string;
// onclose?: () => void;
// img,
// pxheight,
// pxwidth,
// onclose
// <MD.ButtonModalImgCard
//         img={img}
//         pxminheight={pxheight}
//         pxwidth={pxwidth}
//         onClick={onclose}
//       />
//