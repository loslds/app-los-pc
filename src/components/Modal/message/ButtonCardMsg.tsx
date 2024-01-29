import React from 'react';

import * as Msg from './styled-msg';

type PropsBtn = {
  img?: string;
  titbtn?: string;
  // onClick?: React.ReactNode | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ButtonCardMsg = ({img, titbtn,  onClick }:PropsBtn) => {
  return <Msg.ButtonCardImg img={img} title={titbtn} onClick={onClick} />;
};

