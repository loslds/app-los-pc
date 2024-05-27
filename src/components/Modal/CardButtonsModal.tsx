import React from 'react';

import * as C from './styles';

type TypeCardButtonsModal = {
  id?: string;
  children?: React.ReactNode | JSX.Element;
};
export const CardButtonsModal = ({ id, children }: TypeCardButtonsModal) => {
  return <C.ContainerButtonModal id={id}>{children}</C.ContainerButtonModal>;
};
