import React from 'react';

import * as MD from './styles';

type TypeButtonModal = {
  imgbm?: string;
  titbm?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};
export const ButtonModal = ({ imgbm, titbm, onClick }: TypeButtonModal) => {
  return <MD.ButtonModalImg img={imgbm} title={titbm} onClick={onClick} />;
};
