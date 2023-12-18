import React from 'react';

import * as MD from './styles';

type Props = {
  img?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
const ButtonModalMenu: React.FC<Props> = ({ img, onClick }) => {
  return <MD.ButtonModalImg img={img} title={'Fechar...'} onClick={onClick} />;
};
export default ButtonModalMenu;
