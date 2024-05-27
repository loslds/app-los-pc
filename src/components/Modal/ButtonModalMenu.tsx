import React from 'react';

import * as MD from './styles';

type TypeButtonModalMenu = {
  img?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonModalMenu = ({ img, onClick }: TypeButtonModalMenu) => {
  return <MD.ButtonModalImg img={img} title={'Fechar...'} onClick={onClick} />;
};
export default ButtonModalMenu;
