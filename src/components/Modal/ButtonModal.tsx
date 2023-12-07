import React from 'react';

import * as MD from './styles';

type Props = {
  img?: string;
  titbtn?: string;
  // onClick?: React.ReactNode | JSX.Element;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonModal: React.FC<Props> = ({ titbtn, img, onClick }) => {
  return <MD.ButtonModalImg img={img} title={titbtn} onClick={onClick} />;
};
export default ButtonModal;
