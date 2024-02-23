import React from 'react';

import * as MD from './styles';

type PropsFooterModalIE = {
  children?: React.ReactNode;
};
const FooterModalInfoErro: React.FC<PropsFooterModalIE> = ({ children }) => {
  return (
    <MD.ContainerCardInfoModalFooter>
      <MD.ContainerCardInfoModalFlex>{children}</MD.ContainerCardInfoModalFlex>
    </MD.ContainerCardInfoModalFooter>
  );
};

export default FooterModalInfoErro;
