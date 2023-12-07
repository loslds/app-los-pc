import React from 'react';

import * as MD from './styles';

type Props = {
  id?: string;
  children?: React.ReactNode;
};

const CardModal: React.FC<Props> = ({ id, children }) => {
  return (
    <MD.ContainerCard id={id}>
      <MD.ContainerCardFlex>{children}</MD.ContainerCardFlex>
    </MD.ContainerCard>
  );
};

export default CardModal;
