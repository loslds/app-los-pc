import React from 'react';

import * as MD from './styles';

type TypeCardModal = {
  id?: string;
  children?: React.ReactNode;
};

export const CardModal = ({ id, children }: TypeCardModal) => {
  return (
    <MD.ContainerCard id={id}>
      <MD.ContainerCardFlex>{children}</MD.ContainerCardFlex>
    </MD.ContainerCard>
  );
};
