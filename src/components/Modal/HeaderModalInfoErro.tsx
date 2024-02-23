import React from 'react';

import * as MD from './styles';

type PropsHeaderModalIE = {
  children?: React.ReactNode;
};
const HeaderModalInfoErro: React.FC<PropsHeaderModalIE> = ({ children }) => {
  return (
    <MD.ContainerCardInfoModalHeader>
      <MD.ContainerCardInfoModalFlex>{children}</MD.ContainerCardInfoModalFlex>
    </MD.ContainerCardInfoModalHeader>
  );
};

export default HeaderModalInfoErro;
