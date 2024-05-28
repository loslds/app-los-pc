import React from 'react';

import * as MD from './styles';

type TypeCardButtonsModal = {
  id?: string;
  children?: React.ReactNode | JSX.Element;
  onclose?: () => void;
};
export const CardButtonsModal = ({ id, onclose, children }: TypeCardButtonsModal) => {
  return <MD.ContainerButtonModal id={id} onClick={onclose}>{children}</MD.ContainerButtonModal>;
};
